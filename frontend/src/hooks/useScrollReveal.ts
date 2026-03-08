import { useEffect, useRef, useState, RefObject } from "react";

/**
 * Hook para revelar elementos com efeito ao entrar na tela (scroll reveal)
 * @param threshold - percentual de visibilidade do elemento para disparar a animação (0 a 1)
 * @returns [ref, isVisible] - ref do elemento e estado de visibilidade
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  threshold: number = 0.2
): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // anima apenas uma vez
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}