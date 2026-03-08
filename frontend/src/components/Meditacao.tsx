import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { modalContentData } from "../data/modalContent";

// Tipagem do conteúdo de cada meditação
interface MeditacaoItem {
  key: string;
  title: string;
  summary: string;
}

// Props do componente
interface MeditacaoProps {
  openModal: (key: string) => void;
}

// Filtrando apenas meditações com summary
const meditacoes: MeditacaoItem[] = Object.entries(modalContentData)
  .filter(([_, value]) => value.summary)
  .map(([key, value]) => ({ key, ...value })) as MeditacaoItem[];

export default function Meditacao({ openModal }: MeditacaoProps) {
  const letreiroRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentMeditacao = meditacoes[currentIndex];
  const [ref, visible] = useScrollReveal<HTMLDivElement>();

  // Loop automático das meditações
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % meditacoes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Centraliza o item ativo no letreiro
  useEffect(() => {
    if (letreiroRef.current) {
      const container = letreiroRef.current;
      const activeItem = container.children[currentIndex] as HTMLElement;
      if (activeItem) {
        const offset =
          activeItem.offsetLeft +
          activeItem.offsetWidth / 2 -
          container.offsetWidth / 2;
        container.scrollTo({ left: offset, behavior: "smooth" });
      }
    }
  }, [currentIndex]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % meditacoes.length);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? meditacoes.length - 1 : prev - 1));

  return (
    <section
      id="formacao"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`py-12 sm:py-20 px-4 reveal ${visible ? "visible" : ""} bg-white dark:bg-purple-950`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-center mb-16 text-rose-500 dark:text-rose-300 text-base sm:text-sm tracking-widest uppercase">
            Contemplação
          </span>
          <h2 className="cinzel text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-purple-900 dark:text-rose-100">
            Formações
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-xl sm:text-lg md:text-xl">
            Reflexões para encontrar Cristo no silêncio do coração.
          </p>
        </div>

        {/* Letreiro */}
        <div
          ref={letreiroRef}
          className="relative w-full overflow-x-auto scrollbar-none mb-4 py-2 px-2 sm:px-4"
        >
          <div className="flex gap-3 sm:gap-4">
            {meditacoes.map((med, index) => (
              <span
                key={med.key}
                onClick={() => setCurrentIndex(index)}
                className={`
                  flex-shrink-0 px-5 py-2 sm:py-1 rounded-full cursor-pointer font-semibold text-sm sm:text-base transition-all duration-300
                  ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-rose-400 to-purple-400 text-white shadow-xl scale-105"
                      : "bg-purple-200/30 dark:bg-purple-800/30 text-purple-900 dark:text-rose-200 hover:bg-purple-300/60 dark:hover:bg-purple-700/60 hover:scale-105"
                  }
                `}
              >
                {med.title.replace("Meditação: ", "")}
              </span>
            ))}
          </div>

          <style>{`
            .scrollbar-none::-webkit-scrollbar { display: none; }
            .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
        </div>

        {/* Card principal */}
        <div
          className="card-hover bg-gradient-to-br from-rose-200/40 to-purple-200/40 dark:from-purple-800/30 dark:to-purple-900/30 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-rose-300/30 dark:border-purple-700/30 mb-8 cursor-pointer relative transition-transform duration-500 hover:-translate-y-1 hover:shadow-xl pt-20 sm:pt-10"
          onClick={() => openModal(currentMeditacao.key)}
        >
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center">
            <div className="lg:w-1/3 flex-shrink-0">
              <div className="w-36 h-36 sm:w-40 sm:h-40 mx-auto bg-gradient-to-br from-yellow-400 to-rose-400 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-6xl sm:text-5xl">✝️</span>
              </div>
            </div>

            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="cinzel text-4xl sm:text-3xl md:text-4xl font-bold mt-6 mb-4 text-purple-900 dark:text-rose-100 sm:mt-2">
                {currentMeditacao.title.replace("Meditação: ", "")}
              </h3>
              <p className="text-gray-800 dark:text-gray-200 text-xl sm:text-base md:text-lg lg:text-xl leading-relaxed mb-12 sm:mb-8 mr-8 text-justify">
                {currentMeditacao.summary}
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-rose-500 dark:text-rose-300 font-semibold text-xl sm:text-lg">
                <span>Continuar lendo</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Botões Desktop */}
          {meditacoes.length > 1 && (
            <>
              <div className="hidden sm:flex absolute left-2 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="bg-purple-200/60 dark:bg-purple-800/60 p-3 w-10 h-10 rounded-full hover:bg-purple-300 dark:hover:bg-purple-700 flex items-center justify-center text-purple-900 dark:text-rose-200 font-bold text-lg"
                >
                  ◀
                </button>
              </div>
              <div className="hidden sm:flex absolute right-2 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="bg-purple-200/60 dark:bg-purple-800/60 p-3 w-10 h-10 rounded-full hover:bg-purple-300 dark:hover:bg-purple-700 flex items-center justify-center text-purple-900 dark:text-rose-200 font-bold text-lg"
                >
                  ▶
                </button>
              </div>
            </>
          )}

          {/* Botões Mobile */}
          {meditacoes.length > 1 && (
            <div className="flex justify-center gap-4 my-4 sm:hidden">
              <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} className="bg-purple-200/60 dark:bg-purple-800/60 p-3 w-12 h-12 rounded-full hover:bg-purple-300 dark:hover:bg-purple-700 flex items-center justify-center text-purple-900 dark:text-rose-200 font-bold text-lg">◀</button>
              <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="bg-purple-200/60 dark:bg-purple-800/60 p-3 w-12 h-12 rounded-full hover:bg-purple-300 dark:hover:bg-purple-700 flex items-center justify-center text-purple-900 dark:text-rose-200 font-bold text-lg">▶</button>
            </div>
          )}
        </div>

        {/* Cards menores */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { icon: "🙏", title: "Oração", desc: "Diálogo com Deus", key: "oracao-tema" },
            { icon: "🍞", title: "Jejum", desc: "Mortificação santa", key: "jejum-tema" },
            { icon: "❤️", title: "Esmola", desc: "Caridade cristã", key: "esmola-tema" },
            { icon: "✨", title: "Conversão", desc: "Mudança de vida", key: "conversao-tema" },
          ].map((item) => (
            <div
              key={item.key}
              onClick={() => openModal(item.key)}
              className="card-hover bg-purple-100/40 dark:bg-purple-800/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-300/20 dark:border-purple-700/30 text-center cursor-pointer"
            >
              <div className="text-4xl sm:text-5xl mb-3">{item.icon}</div>
              <h4 className="cinzel font-bold text-xl sm:text-xl mb-2 text-purple-900 dark:text-rose-100">{item.title}</h4>
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Citação */}
        <div className="mt-12 bg-gradient-to-r from-rose-liturgy/20 to-purple-liturgy/20 dark:from-purple-900/20 dark:to-purple-950/20 rounded-2xl p-8 border border-rose-liturgy/30 dark:border-purple-700/30 text-center transition-transform duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-liturgy/20">
          <svg className="w-12 h-12 mx-auto mb-6 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="font-crimson text-3xl sm:text-2xl italic text-purple-900 dark:text-rose-100 mb-4">
            "A Quaresma é o tempo favorável para renovar o encontro com Cristo vivo na sua Palavra, nos Sacramentos e no próximo."
          </blockquote>
          <cite className="text-rose-900 dark:text-rose-300 font-cinzel text-lg sm:text-base">
            — Papa Bento XVI
          </cite>
        </div>
      </div>
    </section>
  );
}