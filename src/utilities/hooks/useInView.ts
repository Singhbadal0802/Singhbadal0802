import {useEffect, useRef, useState } from 'react';

/** Reveals once an element enters the viewport, then stays revealed. */
function useInView<T extends HTMLElement>(threshold = 0.3, boundaryMargin?: any) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }else {
            setInView(false);
        }
      },
      { root:null, threshold, rootMargin: boundaryMargin ?? "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

export default useInView;