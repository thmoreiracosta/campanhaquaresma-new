import { useEffect, useState } from "react";
import { Apoiador } from "../data/apoiadores";

interface SponsorGridProps {
  apoiadores: Apoiador[];
}

export default function SponsorGrid({ apoiadores }: SponsorGridProps) {
  const [count, setCount] = useState(0);

  // Contador animado
  useEffect(() => {
    let start = 0;
    const end = apoiadores.length;
    const duration = 800;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [apoiadores.length]);

  return (
    <>
      <p className="text-sm text-rose-500 font-semibold mb-6">
        {count} apoiadores conosco
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
        {apoiadores.map((apoiador, index) => (
          <a
            key={apoiador.id}
            href={apoiador.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center w-32 opacity-0 translate-y-6 animate-fadeIn"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            <div
              className="relative rounded-xl p-2 transition-all duration-300
                            group-hover:border group-hover:border-gold-liturgy/40"
            >
              <img
                src={apoiador.image}
                alt={apoiador.name}
                className="h-24 object-contain transition-all duration-500
                           group-hover:scale-110 group-hover:drop-shadow-lg"
              />
            </div>

            <span
              className="mt-2 font-cinzel text-sm text-black dark:text-white
                             group-hover:text-rose-800 dark:group-hover:text-rose-300
                             transition-all duration-300 text-center"
            >
              {apoiador.name}
            </span>
          </a>
        ))}
      </div>
    </>
  );
}