import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { sketches, type Sketch } from "../../data/sketches";
import { Reveal } from "../ui/motion-primitives";
import { ImageWithFallback } from "../ui/ImageWithFallback";

const ratioClass: Record<Sketch["ratio"], string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
};

export function Frame({
  sketch,
  rotate = 0,
  className = "",
}: {
  sketch: Sketch;
  rotate?: number;
  className?: string;
}) {
  return (
    <motion.figure
      initial={{ rotate }}
      whileHover={{ rotate: 0, y: -8, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={`group relative ${className}`}
      style={{ filter: "drop-shadow(0 26px 34px rgba(40,26,10,0.32))" }}
    >
      <div
        className="rounded-[3px] p-3 md:p-4"
        style={{
          backgroundImage:
            "linear-gradient(135deg,#e3c98d 0%,#a17f43 20%,#f0dba6 42%,#7c5f30 68%,#caa869 100%)",
          boxShadow:
            "inset 0 0 0 2px rgba(72,50,18,0.55), inset 0 0 14px rgba(0,0,0,0.45), inset 0 2px 3px rgba(255,244,214,0.6)",
        }}
      >
        <div className="p-[3px]" style={{ backgroundImage: "linear-gradient(160deg,#5a4420,#8a6d3b)" }}>
          <div className="bg-[#f6f0e1] p-3 md:p-5">
            <div className={`overflow-hidden bg-[#eae3d2] ${ratioClass[sketch.ratio]}`}>
              <ImageWithFallback
                src={sketch.image}
                alt={`${sketch.title} — ${sketch.medium}`}
                className="h-full w-full object-cover mix-blend-multiply grayscale-[0.15] transition-all duration-700 group-hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>
      <figcaption
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[2px] px-3 py-1 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          backgroundImage: "linear-gradient(#d9bd84,#a3823f)",
          boxShadow: "0 3px 8px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(80,55,20,0.5)",
        }}
      >
        <span className="font-display text-[0.72rem] italic text-[#3a2c12]">
          {sketch.title} · {sketch.year}
        </span>
      </figcaption>
    </motion.figure>
  );
}

export function SketchWall() {
  const wall = sketches.slice(0, 3);
  const rotations = [-3, 2, -1.5];
  return (
    <section className="relative overflow-hidden border-t border-border px-6 py-16 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(207,74,37,0.05),transparent_60%)]" />
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <span className="font-mono-jb text-[0.72rem] uppercase tracking-[0.22em] text-primary">
              (Off the clock)
            </span>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2rem,5vw,4rem)] font-normal leading-[1.02] tracking-[-0.02em]">
              The sketchbook — where every idea{" "}
              <span className="italic">starts by hand.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-xs text-muted-foreground">
            Long before Figma, there&apos;s a pencil. A little gallery of the drawings
            that keep my eye sharp.
          </Reveal>
        </div>

        <div className="relative pt-20">
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-border" />
          <div className="grid grid-cols-1 items-start gap-y-20 sm:grid-cols-3 sm:gap-x-8 md:gap-x-14">
            {wall.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.1} className={i === 1 ? "sm:mt-16" : ""}>
                <div className="relative flex justify-center">
                  {/* Wire that adapts to the mt-16 on sm screens for the middle item */}
                  <span className={`absolute left-1/2 w-px -translate-x-1/2 bg-[#a3823f]/50 ${i === 1 ? '-top-20 h-20 sm:-top-[9rem] sm:h-[9rem]' : '-top-20 h-20'}`} />
                  
                  {/* Pin (bead) positioned at the top of the wire where it meets the rail */}
                  <span className={`absolute left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a3823f] ${i === 1 ? '-top-20 sm:-top-[9rem]' : '-top-20'}`} />
                  <Frame sketch={s} rotate={rotations[i]} className="w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="mt-14 flex justify-center">
          <Link
            to="/about#sketchbook"
            className="group inline-flex items-center gap-3 rounded-full border border-primary px-8 py-4 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Step into the full gallery
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function SketchGallery() {
  const rotations = [-2.5, 1.5, -1, 2, -1.5, 1];
  return (
    <section id="sketchbook" className="scroll-mt-28 border-t border-border pt-16">
      <Reveal>
        <span className="font-mono-jb text-[0.72rem] uppercase tracking-[0.22em] text-primary">
          The sketchbook
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.02] tracking-[-0.02em]">
          A private gallery of things drawn{" "}
          <span className="italic">purely for the love of it.</span>
        </h2>
        <p className="mt-6 max-w-md text-muted-foreground">
          Studies, portraits and marginalia collected over the years. Hover a piece to read its plaque.
        </p>
      </Reveal>
      <div className="mt-20 grid grid-cols-1 items-start gap-x-8 gap-y-20 sm:grid-cols-2 md:gap-x-14 lg:grid-cols-3">
        {sketches.map((s, i) => (
          <Reveal key={s.id} delay={(i % 3) * 0.08} className={i % 3 === 1 ? "lg:mt-16" : ""}>
            <Frame sketch={s} rotate={rotations[i % rotations.length]} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
