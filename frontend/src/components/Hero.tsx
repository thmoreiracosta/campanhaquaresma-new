import logo from "../assets/CAMPANHA DA QUARESMA2.png";

interface HeroProps {
  scrollToSection: (id: string) => void;
  openModal: (key: string) => void;
}

export default function Hero({ scrollToSection, openModal }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-16
        bg-white dark:bg-purple-950"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(200,200,200,0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(200,200,200,0.1) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    >
      {/* Conteúdo central */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 fade-in">
          <img
            className="w-24 sm:w-36 h-24 sm:h-36 mx-auto"
            src={logo}
            alt="Logo Campanha da Quaresma"
          />
        </div>

        <p className="text-purple-900 dark:text-rose-200 text-xl sm:text-2xl md:text-3xl tracking-widest uppercase mb-4 fade-in delay-1 cinzel font-semibold">
          Campanha da Quaresma
        </p>

        <h1 className="cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in delay-2 text-purple-900 dark:text-rose-100">
          "Mestre, onde moras?"
        </h1>

        <p className="text-2xl sm:text-3xl md:text-4xl text-rose-500 dark:text-rose-300 font-cinzel mb-4 fade-in delay-3 font-semibold">
          "Vinde e vede"
        </p>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 fade-in delay-3 cinzel">
          <em>Jo 1, 38-39</em>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in delay-3">
          <button
            onClick={() => scrollToSection("formacao")}
            className="px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-rose-400 to-purple-900 dark:from-rose-600 dark:to-purple-700 rounded-full font-cinzel font-semibold text-base sm:text-lg text-white transition-all hover:scale-105 hover:shadow-xl"
          >
            Iniciar Jornada
          </button>
          <button
            onClick={() => scrollToSection("sobre")}
            className="px-6 sm:px-10 py-3 sm:py-4 border-2 border-purple-900 dark:border-rose-300 rounded-full font-cinzel font-semibold text-base sm:text-lg text-purple-900 dark:text-rose-300 transition-all hover:bg-purple-900 hover:text-white dark:hover:bg-rose-500 dark:hover:text-purple-950"
          >
            Conhecer
          </button>
        </div>
      </div>
    </section>
  );
}