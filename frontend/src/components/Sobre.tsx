import { useScrollReveal } from "../hooks/useScrollReveal";

interface SobreProps {
  openModal: (key: string) => void; 
  scrollToSection: (id: string) => void;
}

interface CardItem {
  icon: string;
  title: string;
  desc: string;
}

export default function Sobre({ openModal }: SobreProps) {
  const [ref, visible] = useScrollReveal();

  const cardItems: CardItem[] = [
    {
      icon: "📖",
      title: "Tradição",
      desc: "Baseado no Catecismo da Igreja Católica.",
    },
    {
      icon: "⛪",
      title: "Comunhão",
      desc: "Em comunhão com o Santo Padre e a Igreja.",
    },
    {
      icon: "🕊️",
      title: "Autenticidade",
      desc: "Longe de agendas políticas ou partidárias ideológicas.",
    },
  ];

  return (
    <section
      id="sobre"
      ref={ref}
      className={`py-12 sm:py-20 bg-white dark:bg-purple-950 px-4 reveal ${
        visible ? "visible" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-sm tracking-widest uppercase text-rose-500 dark:text-rose-400">
            Nossa Missão
          </span>
          <h2 className="cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-purple-900 dark:text-purple-200">
            Sobre a Campanha
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12">
          <div className="bg-white dark:bg-purple-900/70 rounded-xl sm:rounded-2xl p-6 sm:p-10 border border-purple-300/20 dark:border-purple-700/40 shadow-md">
            <h3 className="cinzel text-2xl sm:text-3xl font-bold mb-6 text-rose-500 dark:text-rose-400">
              O que é a Campanha da Quaresma?
            </h3>
            <div className="space-y-4 text-gray-800 dark:text-purple-200 text-base sm:text-lg md:text-xl leading-relaxed">
              <p>
                A <strong>Campanha da Quaresma</strong> é uma iniciativa
                católica que resgata o verdadeiro sentido do tempo quaresmal:{" "}
                <em>conversão do coração</em>, <em>oração profunda</em> e{" "}
                <em>caridade cristã autêntica</em>.
              </p>
              <p>
                Fundamentada na Sagrada Escritura, no Magistério da Igreja e no
                depositum fidei, oferecemos conteúdo fiel à doutrina católica,
                livre de influências ideológicas.
              </p>
              <p>
                O tema deste ano, 2026, é{" "}
                <strong>"Mestre, onde moras?"</strong>, e nos convida, cada
                fiel, a buscar a <strong>verdadeira morada de Cristo.</strong>{" "}
                Venha conosco, viver uma santa quaresma.
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {cardItems.map((item, idx) => (
              <div
                key={idx}
                className="card-hover bg-white dark:bg-purple-900/70 rounded-xl sm:rounded-2xl p-6 border border-purple-300/20 dark:border-purple-700/40 shadow-md cursor-pointer"
                onClick={() => openModal(`sobreCard${idx + 1}`)} // <-- Aqui chamamos openModal
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') openModal(`sobreCard${idx + 1}`);
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl sm:text-4xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="cinzel font-bold text-lg sm:text-xl mb-2 text-purple-900 dark:text-purple-200">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 dark:text-purple-200 text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}