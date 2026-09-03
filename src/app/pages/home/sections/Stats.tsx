import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { Reveal } from "../../../components/ui/motion-primitives";

const stats = [
  { numericValue: 3, suffix: "+", label: "Years Experience" },
  { numericValue: 30, suffix: "+", label: "Projects Delivered" },
  { numericValue: 65, suffix: "%", label: "Retention Improvement" },
  { numericValue: 20, suffix: "%", label: "Conversion Lift" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="font-display text-[clamp(2.8rem,6vw,4.5rem)] font-normal leading-none tracking-[-0.02em] text-primary"
    >
      {count}{suffix}
    </div>
  );
}

export function Stats() {
  return (
    <section className="px-6 py-12 lg:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div>
              <AnimatedNumber value={s.numericValue} suffix={s.suffix} />
              <div className="mt-2 font-mono-jb text-[0.68rem] uppercase tracking-[0.15em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
