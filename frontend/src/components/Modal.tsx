import { useState, useEffect, useRef } from "react";
import { modalContentData } from "../data/modalContent";
import { HeartIcon } from "@heroicons/react/solid"; // Coração preenchido
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/outline"; // Coração vazio

// API URL
const API_URL =
  import.meta.env.VITE_API_PROXY_URL || "http://localhost:3000/comments";

interface ModalContent {
  title: string;
  content: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  contentKey: string | null;
}

interface CommentType {
  id: string;
  contentKey: string;
  userId: string;
  comment: string;
  likes: number;
  approved: boolean;
  createdAt: string;
}

export default function Modal({ isOpen, onClose, contentKey }: ModalProps) {
  const [likes, setLikes] = useState(0); // Likes do modal
  const [liked, setLiked] = useState(false); // Se o usuário curtiu o modal
  const [comments, setComments] = useState<CommentType[]>([]); // Comentários
  const [commentText, setCommentText] = useState(""); // Texto do comentário
  const [commentLikes, setCommentLikes] = useState<Map<string, boolean>>(
    new Map(),
  );
  const [commentLikesCount, setCommentLikesCount] = useState<
    Map<string, number>
  >(new Map());
  const userId =
    localStorage.getItem("user-id") ||
    (() => {
      const id = crypto.randomUUID();
      localStorage.setItem("user-id", id);
      return id;
    })();

  const contentRef = useRef<HTMLDivElement>(null);

  const content: ModalContent | undefined = contentKey
    ? modalContentData[contentKey]
    : undefined;

  const storageKeyLikes = contentKey ? `modal-likes-${contentKey}` : "";
  const storageKeyLikedFlag = contentKey ? `modal-liked-${contentKey}` : "";
  const [loadingComments, setLoadingComments] = useState(false);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  // --- useEffect para carregar os dados de comentários e likes ---
  useEffect(() => {
    if (!contentKey || !isOpen) return;

    const fetchData = async () => {
      setLoadingComments(true);

      try {
        const res = await fetch(API_URL + `/comments?t=${Date.now()}`);
        const data = await res.json();

        // Verifica se a resposta contém dados
        if (Array.isArray(data)) {
          // Filtra os comentários baseados no contentKey
          const filteredComments = data.filter(
            (item: CommentType) =>
              item.contentKey === contentKey && item.approved === true,
          );

          setComments(filteredComments);

          // Atualiza a contagem de likes
          const newCommentLikesCount = new Map<string, number>();
          filteredComments.forEach((comment) => {
            newCommentLikesCount.set(comment.id, comment.likes);
          });
          setCommentLikesCount(newCommentLikesCount);
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        setComments([]);
      } finally {
        setLoadingComments(false);
      }
    };

    fetchData();
  }, [contentKey, isOpen]);

  // --- Persistência de likes no localStorage ---
  useEffect(() => {
    if (contentKey) {
      const savedLikes = localStorage.getItem(storageKeyLikes);
      const savedLikedFlag = localStorage.getItem(storageKeyLikedFlag);

      if (savedLikes) setLikes(parseInt(savedLikes, 10));
      if (savedLikedFlag) setLiked(savedLikedFlag === "true");
    }
  }, [contentKey]);

  // --- Atualização de Likes ---
  const handleLike = () => {
    if (!contentKey) return;

    const newLiked = !liked;
    const newLikes = newLiked ? likes + 1 : Math.max(likes - 1, 0);

    setLikes(newLikes);
    setLiked(newLiked);

    // Atualizando o estado no localStorage para garantir persistência.
    localStorage.setItem(storageKeyLikes, newLikes.toString());
    localStorage.setItem(storageKeyLikedFlag, newLiked.toString());
  };

  // --- Adicionar Comentário ---
  const handleAddComment = async () => {
    if (!commentText.trim() || !contentKey) return;

    setSending(true);

    const newComment = {
      action: "create",
      id: crypto.randomUUID(),
      contentKey,
      userId,
      comment: commentText,
    };

    try {
      const res = await fetch(API_URL + `/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      });

      const data = await res.json();

      if (data.ok) {
        setComments((prev) => [
          ...prev,
          {
            ...newComment,
            likes: 0,
            approved: false,
            createdAt: new Date().toISOString(),
          },
        ]);
        setCommentText("");
        setMessage("Comentário enviado para aprovação 🙏");

        setTimeout(() => setMessage(""), 3000);
      } else {
        console.error("Erro ao enviar comentário:", data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  // --- Curtir Comentário ---
  const handleLikeComment = async (commentId: string) => {
    const currentLiked = commentLikes.get(commentId) || false;

    // ✅ 1. Bloqueia curtir novamente sem recarregar
    if (currentLiked) {
      return; // Sai fora, não deixa descurtir
    }

    // ✅ 2. Obtém a contagem atual ANTES de atualizar
    const currentCount = commentLikesCount.get(commentId) || 0;
    const optimisticCount = currentCount + 1;

    // ✅ 3. Marca como curtido no estado local
    setCommentLikes((prevLikes) => {
      const updatedLikes = new Map(prevLikes);
      updatedLikes.set(commentId, true); // true = curtido
      return updatedLikes;
    });

    // ✅ 4. Atualiza otimisticamente a contagem (+1)
    setCommentLikesCount((prevLikesCount) => {
      const updatedLikesCount = new Map(prevLikesCount);
      updatedLikesCount.set(commentId, optimisticCount);
      return updatedLikesCount;
    });

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
          action: "like",
          id: commentId,
          userId, // ✅ Importante: envia o userId para rastrear quem curtiu
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      // ✅ 5. Sincroniza com a resposta do servidor
      if (data.ok) {
        const serverCount = data.likes || optimisticCount;

        // Se o servidor retornou diferente, atualiza para o valor correto
        setCommentLikesCount((prevLikesCount) => {
          const updatedLikesCount = new Map(prevLikesCount);
          updatedLikesCount.set(commentId, serverCount);
          return updatedLikesCount;
        });
      } else {
        console.error("Erro ao curtir o comentário:", data);
        // ✅ 6. Em caso de erro, desfaz a curtida (rollback)
        setCommentLikes((prevLikes) => {
          const updatedLikes = new Map(prevLikes);
          updatedLikes.set(commentId, false);
          return updatedLikes;
        });
        setCommentLikesCount((prevLikesCount) => {
          const updatedLikesCount = new Map(prevLikesCount);
          updatedLikesCount.set(commentId, currentCount);
          return updatedLikesCount;
        });
      }
    } catch (error) {
      console.error("Erro ao curtir comentário:", error);
      // ✅ 6. Em caso de erro, desfaz a curtida (rollback)
      setCommentLikes((prevLikes) => {
        const updatedLikes = new Map(prevLikes);
        updatedLikes.set(commentId, false);
        return updatedLikes;
      });
      setCommentLikesCount((prevLikesCount) => {
        const updatedLikesCount = new Map(prevLikesCount);
        updatedLikesCount.set(commentId, currentCount);
        return updatedLikesCount;
      });
    }
  };

  const handlePrint = () => {
    if (!content || !contentRef.current) return;

    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>${content.title}</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
              Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; margin: 2rem; }
            h1 { font-family: "Cinzel", serif; font-size: 2rem; color: #5b21b6; margin-bottom: 1rem;}
            p { font-size: 1.1rem; line-height: 1.6; color: #333; }
          </style>
        </head>
        <body>
          <h1>${content.title}</h1>
          ${contentRef.current.innerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  

  const handleShare = () => {
    if (!content || !contentKey) return;

    const snippet = content.content
      .replace(/<[^>]+>/g, "")
      .slice(0, 300)
      .trim();

    const url = `${window.location.origin}${window.location.pathname}#${contentKey}`;

    const shareText = `${content.title}\n\n"${snippet}..."`;

    if (navigator.share) {
      navigator.share({
        title: content.title,
        text: shareText,
        url: url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copiado para a área de transferência!");
    }
  };

  if (!isOpen || !content) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 sm:p-8 overflow-y-auto">
      <div className="relative bg-white dark:bg-purple-950 rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <header className="sticky top-0 bg-gradient-to-r from-purple-900 to-rose-500 rounded-t-3xl p-6 flex items-center justify-between z-10">
          <h3 className="cinzel text-3xl sm:text-4xl font-bold text-white max-w-[80%] truncate">
            {content.title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Fechar modal"
            className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0"
          >
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>

        {/* Conteúdo */}
        <article
          className={`p-8 sm:p-12 text-gray-800 dark:text-gray-100 prose prose-lg max-w-none flex-grow overflow-y-auto`}
          ref={contentRef}
        >
          <div dangerouslySetInnerHTML={{ __html: content.content }} />

          {/* Comentários */}
          <div className="mt-10 border-t border-purple-200 dark:border-gray-700 pt-8 space-y-6">
            <h4 className="text-2xl font-semibold text-purple-900 dark:text-purple-200">
              Comentários ({comments.length})
            </h4>

            {loadingComments ? (
              <p className="text-gray-500 dark:text-gray-400">
                Carregando comentários...
              </p>
            ) : comments.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400">
                Nenhum comentário ainda.
              </p>
            ) : (
              comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-white dark:bg-gray-900 border border-purple-100 dark:border-gray-700 rounded-xl p-4 shadow-sm"
                >
                  <p className="text-gray-800 dark:text-gray-100 mb-3">
                    {comment.comment}
                  </p>

                  {/* Ícone de "Curtir" do comentário */}
                  <button
                    onClick={() => handleLikeComment(comment.id)}
                    className="flex items-center gap-2 text-purple-600 hover:text-rose-500 transition"
                  >
                    <span className="transition-colors">
                      {commentLikes.get(comment.id) ? (
                        <HeartIcon className="w-6 h-6 text-rose-500" />
                      ) : (
                        <HeartOutlineIcon className="w-6 h-6 text-purple-700" />
                      )}
                    </span>
                    {/* Exibe a quantidade de likes */}
                    {commentLikesCount.get(comment.id) || 0}
                  </button>
                </div>
              ))
            )}

            {/* Formulário de comentário */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddComment();
              }}
              className="flex gap-4 mt-6"
            >
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Escreva seu comentário..."
                className="flex-grow rounded-lg border border-purple-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              />
              <button
                type="submit"
                disabled={sending}
                className="bg-rose-500 text-white rounded-lg px-6 py-3 font-semibold hover:bg-rose-600 transition"
              >
                {sending ? "Enviando..." : "Enviar"}
              </button>
            </form>
            {message && (
              <p className="text-green-500 text-sm mt-2">{message}</p>
            )}
          </div>
        </article>

        {/* Footer */}
        <footer className="sticky bottom-0 bg-white dark:bg-gray-900 rounded-b-3xl border-t border-purple-300/20 dark:border-gray-700 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
          <div className="flex gap-6 items-center">
            {/* Botão de Curtir */}
            <button
              onClick={handleLike}
              aria-label="Curtir"
              title="Curtir este conteúdo"
              className={`flex items-center gap-2 font-semibold transition-all duration-300 transform hover:scale-110 ${
                liked
                  ? "text-rose-500"
                  : "text-gray-600 dark:text-gray-400 hover:text-rose-500"
              }`}
            >
              {liked ? (
                <svg
                  className="w-6 h-6 fill-current animate-pulse"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 stroke-current fill-none transition-colors"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              )}
              <span className="hidden sm:inline">{likes}</span>
              <span className="sm:hidden">{likes}</span>
            </button>

            {/* Botão de Imprimir */}
            <button
              onClick={handlePrint}
              aria-label="Imprimir"
              title="Imprimir este conteúdo"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 transform hover:scale-110 font-semibold"
            >
              <svg
                className="w-6 h-6 stroke-current fill-none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              <span className="hidden sm:inline">Imprimir</span>
            </button>

            {/* Botão de Compartilhar */}
            <button
              onClick={handleShare}
              aria-label="Compartilhar"
              title="Compartilhar este conteúdo"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-rose-500 dark:hover:text-rose-400 transition-all duration-300 transform hover:scale-110 font-semibold"
            >
              <svg
                className="w-6 h-6 stroke-current fill-none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              <span className="hidden sm:inline">Compartilhar</span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
