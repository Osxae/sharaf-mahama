import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Athletes Supported", value: 500, suffix: "+" },
  { label: "Communities Reached", value: 24, suffix: "" },
  { label: "Foundation Projects", value: 12, suffix: "" },
  { label: "Years of Leadership", value: 8, suffix: "" },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="stat-value">
      {String(count).padStart(target >= 100 ? 1 : 2, "0")}
      {suffix}
    </div>
  );
};

const StatsBar = () => (
  <div className="surface-dark py-20">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
      >
        {stats.map((stat, i) => (
          <div key={i} className="text-center md:text-left">
            <AnimatedNumber target={stat.value} suffix={stat.suffix} />
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
);

export default StatsBar;
