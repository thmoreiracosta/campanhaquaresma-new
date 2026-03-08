import { useEffect, useRef, useState, RefObject } from "react";

interface UseAOSOptions {
  threshold?: number;
  once?: boolean;
}

export function useAOS<T extends HTMLElement = HTMLElement>(
  options: UseAOSOptions = {}
): [RefObject<T>, boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const { threshold = 0.2, once = true } = options;

  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, once]);

  return [ref, visible, setVisible]; // agora tipagem condiz com retorno
}