import { useEffect, useState, useRef } from "react";
// import { useScrollReveal } from "../hooks/useScrollReveal";
import { useAOS } from "../hooks/useAOS";
import cquaresma from "../assets/cquaresma.png";

import { semanasMeditacoes } from "../data/semanasMeditacoes";
import { ebooks } from "../data/ebooks";

interface LentenSubsidiesProps {
  openModal: (key: string) => void;
}

export default function LentenSubsidies({ openModal }: LentenSubsidiesProps) {
  const inicioQuaresma = new Date("2026-02-22");

  const [currentWeek, setCurrentWeek] = useState<number>(1);
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null);
  const [ref, visible, setVisible] = useAOS();

  const sectionRef = useRef<HTMLElement | null>(null);

  // CONTROLE DE SEMANAS
  useEffect(() => {
    const hoje = new Date();
    const diffTime = hoje.getTime() - inicioQuaresma.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const semanaAtual = Math.min(Math.floor(diffDays / 7) + 1, 6);
    setCurrentWeek(semanaAtual);

    const proximaLiberacao = new Date(inicioQuaresma);
    proximaLiberacao.setDate(inicioQuaresma.getDate() + semanaAtual * 7);

    const restante = Math.ceil(
      (proximaLiberacao.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (semanaAtual < 6 && restante > 0) {
      setDaysRemaining(restante);
    }
  }, []);

  // INTERSECTION OBSERVER
  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [setVisible]);

  return (
    <section
      id="download"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-12 sm:py-20 px-4 bg-gray-50 dark:bg-slate-950 aos fade-up ${
        visible ? "visible" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-rose-500 dark:text-rose-400 text-sm tracking-widest uppercase">
            Aprofundamento
          </span>
          <h2 className="cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-purple-900 dark:text-purple-300">
            Subsídios Quaresmais
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
            Material para download. Toda semana novas meditações.
          </p>

          {daysRemaining && (
            <p className="mt-4 text-sm text-rose-600 dark:text-rose-400 font-semibold">
              Próxima meditação disponível em {daysRemaining} dias
            </p>
          )}
        </div>

        {/* MEDITAÇÕES */}
        <div
          className={`text-center mb-10 ${
            visible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h3 className="cinzel text-2xl sm:text-3xl font-bold text-purple-900 dark:text-purple-300">
            Meditações da Quaresma
          </h3>
          <div className="w-24 h-1 bg-rose-500 dark:bg-rose-400 mx-auto my-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Caminho espiritual semanal para viver intensamente cada etapa da
            Quaresma.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 justify-items-center mb-20">
          {semanasMeditacoes.map((semana, index) => {
            const liberada = currentWeek > index;
            const animationClass = visible ? "animate-fadeInUp" : "opacity-0";
            const styleDelay = { animationDelay: `${index * 120}ms` };

            return liberada ? (
              <a
                key={index}
                href={semana.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styleDelay}
                className={`flex flex-col items-center w-40 ${animationClass}`}
                onClick={() => openModal(`meditacaoSemana${index + 1}`)}
              >
                <img
                  className="w-32 h-48 border-8 border-white dark:border-gray-800 shadow-2xl rounded-3xl hover:scale-110 hover:border-rose-liturgy transition-all duration-500"
                  src={cquaresma}
                  alt={semana.title}
                />
                <p className="h-16 flex items-center text-center mt-4 font-cinzel font-semibold text-purple-liturgy dark:text-white text-lg hover:text-rose-liturgy transition-colors duration-300">
                  {semana.title}
                </p>
              </a>
            ) : (
              <div
                key={index}
                style={styleDelay}
                className={`relative flex flex-col items-center w-40 group ${animationClass}`}
              >
                <div className="absolute top-2 right-2 text-purple-900 dark:text-purple-300 opacity-70">
                  🔒
                </div>

                <img
                  className="w-32 h-48 border-8 border-white dark:border-gray-800 shadow-2xl rounded-3xl opacity-40"
                  src={cquaresma}
                  alt={semana.title}
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="bg-white/90 dark:bg-gray-800 text-purple-900 dark:text-purple-300 text-xs font-semibold px-3 py-1 rounded-lg shadow-md">
                    Liberado na {index + 1}ª semana
                  </span>
                </div>

                <p className="h-16 flex items-center text-center mt-4 font-cinzel font-semibold text-purple-liturgy dark:text-purple-300 text-lg opacity-60">
                  {semana.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* EBOOKS */}
        <div
          className={`text-center mb-10 ${
            visible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h3 className="cinzel text-2xl sm:text-3xl font-bold text-purple-900 dark:text-purple-300">
            Ebooks Avulsos
          </h3>
          <div className="w-24 h-1 bg-rose-500 dark:bg-rose-400 mx-auto my-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Materiais complementares para aprofundar sua vivência espiritual.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 justify-items-center">
          {ebooks.map((ebook, index) => (
            <a
              key={index}
              href={ebook.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${index * 150}ms` }}
              className={`flex flex-col items-center w-40 ${
                visible ? "animate-fadeInUp" : "opacity-0"
              }`}
              onClick={() => openModal(`ebook${index + 1}`)}
            >
              <img
                className="w-32 h-48 border-8 border-white dark:border-gray-800 shadow-2xl rounded-3xl hover:scale-110 hover:border-rose-liturgy transition-all duration-500"
                src={ebook.img}
                alt={ebook.title}
              />
              <p className="h-16 flex items-center text-center mt-4 font-cinzel font-semibold text-purple-liturgy dark:text-white text-lg hover:text-rose-liturgy transition-colors duration-300">
                {ebook.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}