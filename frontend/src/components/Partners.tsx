import { useScrollReveal } from "../hooks/useScrollReveal"
import { apoiadores, Apoiador } from "../data/apoiadores"
import SponsorGrid from "./SponsorGrid"

// Props do componente
interface PartnersProps {
  openModal: (key: string) => void
  scrollToSection?: (id: string) => void 
}

export default function Partners({ openModal }: PartnersProps) {
  const [ref, visible] = useScrollReveal()

  return (
    <section
      id="partners"
      ref={ref}
      className={`pt-6 sm:pt-0 pb-12 bg-white dark:bg-purple-950 sm:pb-16 px-4 reveal ${
        visible ? "visible" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div
            className="rounded-xl sm:rounded-2xl p-8 sm:p-10 
                       border border-rose-300/30 dark:border-purple-700/30 shadow-md"
          >
            <h3 className="cinzel text-2xl sm:text-3xl font-bold mb-4 text-purple-900 dark:text-purple-300">
              Junte-se a nós
            </h3>

            <p className="text-gray-800 dark:text-gray-300 mb-10 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
              Nos ajude. Conheça e siga também aos nossos apoiadores. Vamos
              juntos viver intensamente esses 40 dias.
            </p>

            {/* Grid de patrocinadores/apoiadores */}
            <SponsorGrid apoiadores={apoiadores as Apoiador[]} />

            <div className="mt-10">
              <button
                onClick={() => openModal("share")}
                className="px-8 sm:px-10 py-3 sm:py-4 
                           bg-gradient-to-r from-rose-400 to-purple-900 
                           rounded-full font-cinzel font-semibold 
                           text-base sm:text-lg text-white 
                           transition-all duration-300 
                           hover:scale-105 hover:shadow-xl"
              >
                Compartilhar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}