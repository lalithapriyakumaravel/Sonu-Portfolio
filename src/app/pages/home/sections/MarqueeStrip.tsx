import { Asterisk } from "lucide-react";

const marqueeWords = [
  "UX Research", "UI/UX Design", "Product Design",
  "Design Systems", "Prototyping", "Interaction Design", "Motion Design",
];

export function MarqueeStrip() {
  const items = [...marqueeWords, ...marqueeWords];
  return (
    <div
      className="overflow-hidden border-y border-border bg-secondary/50 py-4"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div className="group flex">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="animate-marquee group-hover:[animation-play-state:paused] flex shrink-0 items-center gap-8 whitespace-nowrap pr-8"
            style={{ animationDuration: "40s" }}
          >
            {items.map((w, i) => (
              <span key={i} className="flex items-center gap-8">
                <span className="font-display text-xl italic">{w}</span>
                <Asterisk size={13} className="text-primary" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
