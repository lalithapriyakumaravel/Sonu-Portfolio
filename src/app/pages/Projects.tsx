import { useEffect, useState, useRef } from "react";
import { useLocation, Link } from "react-router";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import { Reveal, WordReveal, Magnetic } from "../components/ui/motion-primitives";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";

const filters = ["All", "Mobile", "Web", "Desktop", "Branding"];

// Map from category → short industry badge
const industryBadge: Record<string, string> = {
  "Web Application": "Web App",
  "Mobile Application": "Mobile",
  "Desktop Application": "Desktop",
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState<string>("All");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 300);
    }
  }, [location.hash]);

  const visible = projects.filter((p) =>
    filter === "All" ? true : p.category.toLowerCase().includes(filter.toLowerCase())
  );

  const featured = visible[0];
  const rest = visible.slice(1);

  return (
    <div className="relative overflow-hidden">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-60 -top-60 h-[80vw] max-h-[900px] w-[80vw] max-w-[900px] rounded-full bg-primary/5 blur-[160px] opacity-50" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 pb-32 pt-36 lg:px-10">

        {/* ── HERO ── */}
        <header className="mb-20 border-b border-border pb-16">
          <Reveal>
            <p className="font-mono-jb text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
              Portfolio · 2023 – 2026
            </p>
          </Reveal>

          <h1 className="mt-5 font-display text-[clamp(3rem,9vw,8rem)] font-semibold leading-[0.9] tracking-[-0.03em]">
            <WordReveal text="Crafted with" />
            <br />
            <span className="italic text-primary">
              <WordReveal text="purpose." delay={0.14} />
            </span>
          </h1>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground">
                A curated selection of interfaces, systems, and experiences — each shaped
                by research, iteration, and a genuine care for the people using them.
              </p>

              {/* Premium segmented filter */}
              <div className="relative flex shrink-0 gap-1 rounded-full border border-border bg-card/60 p-1 backdrop-blur-sm">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => { setFilter(f); setActiveIndex(f); }}
                    className={`relative rounded-full px-4 py-2 font-mono-jb text-[0.65rem] uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      filter === f ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {filter === f && (
                      <motion.div
                        layoutId="filterPill"
                        className="absolute inset-0 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{f}</span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </header>

        {/* ── FEATURED PROJECT (First project = full-width hero) ── */}
        <AnimatePresence mode="wait">
          {featured && (
            <motion.div
              key={`featured-${filter}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <FeaturedProject project={featured} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── REST OF PROJECTS — alternating editorial layout ── */}
        {rest.length > 0 && (
          <div className="mt-32 flex flex-col gap-36">
            <AnimatePresence>
              {rest.map((p, i) => (
                <motion.div
                  key={`${p.id}-${filter}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectRow project={p} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {visible.length === 0 && (
          <div className="flex min-h-[40vh] items-center justify-center text-muted-foreground">
            <p className="font-display text-2xl">No projects in this category yet.</p>
          </div>
        )}

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FEATURED PROJECT — full-width hero treatment
───────────────────────────────────────────── */
function FeaturedProject({ project: p }: { project: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <article
      ref={ref}
      id={p.id}
      className="group relative scroll-mt-32 overflow-hidden rounded-[2rem] border border-border bg-card/40"
    >
      {/* Badge */}
      <div className="absolute left-6 top-6 z-20 flex items-center gap-2">
        <span className="rounded-full bg-primary px-3 py-1 font-mono-jb text-[0.6rem] uppercase tracking-[0.18em] text-primary-foreground">
          Featured
        </span>
        <span className="rounded-full border border-border/60 bg-background/70 px-3 py-1 font-mono-jb text-[0.6rem] uppercase tracking-[0.14em] backdrop-blur-md">
          {p.index} · {p.year}
        </span>
      </div>

      {/* Full-width image */}
      <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <ImageWithFallback
          src={p.cover}
          alt={p.title}
          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/20 to-transparent" />
      </div>

      {/* Bottom content */}
      <div className="grid grid-cols-1 gap-10 px-8 pb-10 pt-2 md:grid-cols-[1fr_auto] md:items-end lg:px-12 lg:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="font-mono-jb text-[0.65rem] uppercase tracking-[0.2em] text-primary">
            {p.category}
          </p>
          <h2 className="mt-2 font-display text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-none tracking-tight">
            {p.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {p.blurb}
          </p>

          {/* Tags row */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="font-mono-jb text-[0.65rem] text-muted-foreground">{p.role}</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/70 px-3 py-1 font-mono-jb text-[0.6rem] uppercase tracking-[0.1em] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Metrics + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex shrink-0 flex-col items-start gap-6 md:items-end"
        >
          <div className="flex gap-8 md:gap-10">
            {p.metrics.map((m) => (
              <div key={m.label} className="text-right">
                <div className="font-display text-2xl font-semibold text-primary">{m.value}</div>
                <div className="mt-0.5 font-mono-jb text-[0.58rem] uppercase tracking-[0.1em] text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <Magnetic strength={0.1}>
            <Link
              to={`/projects/${p.id}`}
              className="group/cta inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-mono-jb text-[0.7rem] uppercase tracking-[0.16em] text-primary-foreground shadow-md shadow-primary/25 transition-all hover:shadow-lg hover:shadow-primary/35 hover:scale-[1.02]"
            >
              Explore Case Study
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
              />
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────
   PROJECT ROW — alternating editorial layout
───────────────────────────────────────────── */
function ProjectRow({ project: p, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <article ref={ref} id={p.id} className="scroll-mt-32">
      <div className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center ${isEven ? "" : "lg:[&>*:first-child]:order-2"}`}>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -24 : 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="group relative overflow-hidden rounded-[1.75rem] bg-secondary"
        >
          <ImageWithFallback
            src={p.cover}
            alt={`${p.title} — ${p.category}`}
            className="h-[340px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] lg:h-[500px]"
          />
          {/* Index badge */}
          <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 font-mono-jb text-[0.6rem] uppercase tracking-[0.16em] text-white backdrop-blur-md">
            {p.index} · {p.year}
          </div>
          {/* Industry badge */}
          <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 font-mono-jb text-[0.6rem] uppercase tracking-[0.14em] text-white backdrop-blur-md">
            {industryBadge[p.category] ?? p.category}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 24 : -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={`flex flex-col gap-5 lg:px-8 ${isEven ? "" : "lg:pr-0 lg:pl-0"}`}
        >
          <div>
            <p className="font-mono-jb text-[0.65rem] uppercase tracking-[0.2em] text-primary">
              {p.category}
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.0] tracking-tight">
              {p.title}
            </h2>
          </div>

          <p className="max-w-md text-base leading-[1.8] text-muted-foreground">{p.blurb}</p>

          {/* Metrics */}
          <div className="flex gap-8 border-y border-border/60 py-5">
            {p.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-xl font-semibold text-primary">{m.value}</div>
                <div className="mt-0.5 font-mono-jb text-[0.57rem] uppercase tracking-[0.1em] text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Role + tags + CTA */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono-jb text-[0.65rem] text-muted-foreground">{p.role}</span>
            {p.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/70 px-3 py-1 font-mono-jb text-[0.6rem] uppercase tracking-[0.09em] text-muted-foreground"
              >
                {tag}
              </span>
            ))}

            <Magnetic className="ml-auto" strength={0.12}>
              <Link
                to={`/projects/${p.id}`}
                className="group/cta inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-mono-jb text-[0.68rem] uppercase tracking-[0.14em] text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:shadow-primary/20"
              >
                View Case Study
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover/cta:translate-x-1"
                />
              </Link>
            </Magnetic>
          </div>
        </motion.div>

      </div>
    </article>
  );
}
