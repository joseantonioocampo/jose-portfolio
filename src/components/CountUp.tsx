import { useEffect, useRef, useState } from 'react';

type Props = {
  value: number;
  prefix?: string;
  decimals?: number;
  duration?: number;
};

/**
 * Counts up from 0 to `value` the first time it scrolls into view, easing out.
 * Falls back to the final value instantly under reduced-motion.
 */
export default function CountUp({ value, prefix = '', decimals = 0, duration = 1500 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
              setDisplay(value * eased);
              if (t < 1) raf = requestAnimationFrame(tick);
              else setDisplay(value);
            };
            raf = requestAnimationFrame(tick);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toFixed(decimals)}
    </span>
  );
}
