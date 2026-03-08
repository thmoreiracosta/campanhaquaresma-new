import { motion } from "framer-motion";

export default function Footer({ scrollToSection, openModal }) {
  const shareUrl = window.location.href;
  const shareText =
    "Participe da Campanha da Quaresma 2026: 'Mestre, onde moras?' — 'Vinde e vede.' (Jo 1,38-39) ✝️🙏";

  const shareWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
      "_blank",
    );
  };

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl,
      )}`,
      "_blank",
    );
  };

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText,
      )}&url=${encodeURIComponent(shareUrl)}`,
      "_blank",
    );
  };

  // NOVO: subir topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navSections = [
    { name: "Formações", id: "formacao" },
    { name: "Download", id: "download" },
    { name: "Orações", id: "oracoes" },
    { name: "Sobre", id: "sobre" },
  ];

  const resources = [
    { name: "Via Sacra", modal: "via-sacra" },
    { name: "Santo Rosário", modal: "rosario" },
    { name: "Terço da Misericórdia", modal: "terco-misericordia" },
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      action: shareWhatsApp,
      color: "green",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163a11.87 11.87 0 01-1.62-6.14C.124 5.29 5.42 0 12 0c3.21 0 6.22 1.24 8.48 3.5A11.88 11.88 0 0124 12c0 6.58-5.42 12-12 12-2.04 0-3.95-.5-5.693-1.44L.057 24zm6.597-3.7c1.69.995 3.75 1.56 5.905 1.56 5.45 0 9.88-4.43 9.88-9.88 0-2.62-1.04-5.08-2.93-6.93A9.78 9.78 0 0012 2.12c-5.45 0-9.88 4.43-9.88 9.88 0 2.2.68 4.28 1.95 5.97l-.77 2.81 2.48-.68zm11.387-5.1c-.297-.15-1.758-.867-2.03-.967-.273-.1-.472-.15-.672.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.074-.297-.15-1.255-.462-2.39-1.48-.883-.788-1.48-1.76-1.654-2.058-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.15-.173.198-.297.298-.495.1-.198.05-.372-.025-.52-.075-.148-.672-1.612-.92-2.21-.242-.58-.487-.5-.672-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.48 1.065 2.876 1.214 3.074c.15.198 2.096 3.2 5.077 4.49.71.306 1.263.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.412.248-.694.248-1.29.173-1.412-.074-.124-.272-.198-.57-.347z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      action: shareFacebook,
      color: "blue",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.892-4.788 4.658-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.676 0z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      action: shareTwitter,
      color: "sky",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.959-2.178-1.555-3.594-1.555-2.723 0-4.932 2.21-4.932 4.932 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.734-.666 1.588-.666 2.497 0 1.723.87 3.245 2.188 4.14-.807-.026-1.566-.247-2.229-.616v.061c0 2.404 1.71 4.409 3.977 4.868-.416.111-.854.171-1.305.171-.319 0-.626-.031-.928-.088.627 1.956 2.445 3.377 4.6 3.418-1.68 1.316-3.808 2.101-6.115 2.101-.398 0-.79-.023-1.175-.069 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.634.962-.689 1.797-1.56 2.457-2.548l-.047-.02z" />
        </svg>
      ),
    },
    // NOVO BOTÃO SUBIR TOPO
    // dentro do array socialLinks
    {
      name: "Topo",
      action: scrollToTop,
      color: "rose",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M12 4l-8 8h5v8h6v-8h5z" />
        </svg>
      ),
      hoverClass: "hover:bg-rose-500 hover:shadow-lg",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-purple-900 text-white pt-16 pb-10 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* LOGO */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-8 h-8" viewBox="0 0 100 100">
                <rect
                  x="40"
                  y="10"
                  width="20"
                  height="80"
                  rx="5"
                  fill="#C9A227"
                />
                <rect
                  x="10"
                  y="40"
                  width="80"
                  height="20"
                  rx="5"
                  fill="#C9A227"
                />
              </svg>
              <span className="cinzel font-bold text-lg sm:text-xl">
                Quaresma 2026
              </span>
            </div>
            <p className="text-white text-sm sm:text-base opacity-80 leading-snug">
              Vivendo autenticamente o tempo quaresmal.
            </p>
          </div>

          {/* NAVEGAÇÃO */}
          <div>
            <h4 className="cinzel font-bold mb-3 text-white">Navegação</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              {navSections.map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => scrollToSection(sec.id)}
                    className="relative text-white/90 font-medium text-base sm:text-lg 
                     after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-rose-300 
                     after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {sec.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* RECURSOS */}
          <div>
            <h4 className="cinzel font-bold mb-3 text-white">Recursos</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              {resources.map((res) => (
                <li key={res.modal}>
                  <button
                    onClick={() => openModal(res.modal)}
                    className="relative text-white/90 font-medium text-base sm:text-lg 
                     after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-rose-300 
                     after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {res.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPARTILHAR */}
          <div>
            <h4 className="cinzel font-bold mb-3 text-white">Compartilhe</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.button
                  key={social.name}
                  onClick={social.action}
                  whileHover={{ scale: 1.15 }}
                  className={`w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    social.hoverClass
                      ? social.hoverClass
                      : `hover:bg-${social.color}-600`
                  }`}
                  title={social.name}
                >
                  {social.svg}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* LINHA INFERIOR */}
        <div className="pt-6 border-t border-white/20 text-center space-y-2">
          <p className="text-white text-sm sm:text-base italic opacity-90 leading-snug">
            "Mestre, onde moras?" — "Vinde e vede." (Jo 1, 38-39)
          </p>

          <p className="text-white text-xs sm:text-sm opacity-70 leading-tight">
            © 2026 Campanha da Quaresma • Ad Maiorem Dei Gloriam ✝️
          </p>

          <p className="text-white text-xs sm:text-sm opacity-90 leading-tight">
            Desenvolvido com ❤️ por{" "}
            <a
              href="https://www.instagram.com/studio.thiagocosta/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-300 transition-colors font-semibold"
            >
              @Thiago Costa
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
