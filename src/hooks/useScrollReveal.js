// src/hooks/useScrollReveal.js
import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to add .visible class
 * when the element scrolls into view.
 * @param {object} options - IntersectionObserver options
 * @returns {React.RefObject}
 */
export function useScrollReveal(options = { threshold: 0.1 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("visible");
        observer.unobserve(el); // fire once
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
