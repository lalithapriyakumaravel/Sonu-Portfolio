import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal, WordReveal, Magnetic } from "../components/ui/motion-primitives";
import { SketchGallery } from "../components/sections/ArtGallery";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";

/* ─── Data ───────────────────────────────────────────────────────────── */

const heroStats = [
  { numericValue: 3, suffix: "+", label: "Years" },
  { numericValue: 30, suffix: "+", label: "Projects" },
  { numericValue: 65, suffix: "%", label: "Retention lift" },
  { numericValue: 20, suffix: "%", label: "Conversion lift" },
];

function AnimatedNumber({ value, suffix, className }: { value: number; suffix: string; className?: string }) {
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
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}

const values = [
  {
    n: "01",
    t: "Clarity first",
    d: "Interfaces should feel obvious before they feel beautiful.",
  },
  {
    n: "02",
    t: "Systems, not screens",
    d: "Tokens and components keep a product coherent as it scales.",
  },
  {
    n: "03",
    t: "Design that ships",
    d: "Pixel-perfect handoff so what's designed reaches users intact.",
  },
];

const experiences = [
  {
    role: "UI/UX Designer",
    company: "Webtrendz Technologies",
    location: "Tiruvannamalai, India",
    duration: "Aug 2023 – Present",
    period: "2023",
    summary: "Leading end-to-end product design across SaaS, e-commerce, and enterprise platforms. Engineered scalable design systems and spearheaded a flagship desktop application redesign that increased user retention by 65%.",
  },
  {
    role: "Junior UI/UX Designer",
    company: "Webtrendz Technologies",
    location: "Tiruvannamalai, India",
    duration: "Mar 2023 – Aug 2023",
    period: "2023",
    summary: "Translated complex business requirements into intuitive interfaces. Conducted iterative usability testing and collaborated closely with engineering teams to ensure pixel-perfect, accessible implementations.",
  }
];

const skillGroups = [
  {
    category: "Design",
    skills: ["Figma", "Framer", "Webflow", "Adobe CC"],
  },
  {
    category: "Experience",
    skills: ["UX Research", "Interaction Design", "Prototyping", "Accessibility"],
  },
  {
    category: "Systems",
    skills: ["Design Systems", "Component Libraries", "Design Tokens", "Dev Handoff"],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
  {
    category: "AI",
    skills: ["AI Workflows", "Prompt Engineering", "MCP"],
  },
];

const education = [
  {
    degree: "Master of Computer Applications",
    institution: "Amrita Vishwa Vidyapeetham",
    duration: "2025 – 2027",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Kamban College of Arts & Science for Women",
    duration: "2020 – 2023",
  },
];

const certifications = [
  {
    title: "Google UX Design",
    subtitle: "Professional Certificate",
    provider: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/DE6HQC9EQV2P"
  },
  {
    title: "Google Digital Marketing",
    subtitle: "& E-commerce Certificate",
    provider: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/L3A2S82L8XRP"
  },
];

/* ─── Component ──────────────────────────────────────────────────────── */

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#sketchbook") {
      const el = document.getElementById("sketchbook");
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 400);
    }
  }, [location.hash]);

  return (
    <div className="px-6 pb-16 pt-36 lg:px-10">
      <div className="mx-auto max-w-[1400px]">

        {/* ── Hero ────────────────────────────────────────────────── */}
        <header ref={ref} className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <span className="font-mono-jb text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">
              About / Lalithapriya K
            </span>
            <h1 className="mt-5 font-display text-[clamp(2.6rem,9vw,8rem)] font-semibold leading-[0.9] tracking-[-0.03em]">
              <WordReveal text="Designing clarity" />
              <br />
              <span className="text-muted-foreground">
                <WordReveal text="for complex products." delay={0.15} />
              </span>
            </h1>

            {/* Inline stat strip */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border py-4 items-center">
              {heroStats.map((s, i) => (
                <Reveal key={s.label} delay={0.3 + i * 0.06}>
                  <div className="flex items-center gap-2">
                    <AnimatedNumber
                      value={s.numericValue}
                      suffix={s.suffix}
                      className="font-display text-[2.2rem] font-semibold leading-none tracking-tight text-primary"
                    />
                    <span className="font-mono-jb text-[0.68rem] uppercase tracking-[0.15em] text-muted-foreground translate-y-[2px]">
                      {s.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <motion.div style={{ y: yImg }} className="overflow-hidden rounded-3xl bg-secondary">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1768471126011-2e2002832826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
              alt="Lalithapriya K at her desk"
              className="h-[360px] w-full object-cover lg:h-[440px]"
            />
          </motion.div>
        </header>

        {/* ── Bio ─────────────────────────────────────────────────── */}
        <section className="mt-0 grid grid-cols-1 gap-8 border-t border-border pt-12 pb-6 lg:grid-cols-[0.4fr_0.6fr]">
          <Reveal>
            <span className="font-mono-jb text-[0.72rem] uppercase tracking-[0.2em] text-primary">
              (Bio)
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl leading-relaxed text-muted-foreground">
              I design end-to-end digital products — from the first research session to developer
              handoff. Over 3 years at Webtrendz, I've shaped 30+ products across SaaS, enterprise,
              and mobile. My work sits at the intersection of{" "}
              <span className="text-foreground">systems thinking</span> and{" "}
              <span className="text-foreground">meticulous craft</span>.
            </p>
          </Reveal>
        </section>

        {/* ── Design Principles ───────────────────────────────────── */}
        <section className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.08}>
              <motion.div
                className="group relative h-full overflow-hidden rounded-3xl border border-border p-8 transition-colors hover:border-primary hover:bg-secondary/40"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
              >
                {/* Decorative large number */}
                <span
                  className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-[7rem] font-semibold leading-none tracking-tight text-border transition-colors group-hover:text-primary/10"
                  aria-hidden
                >
                  {v.n}
                </span>
                <span className="font-mono-jb text-[0.68rem] uppercase tracking-[0.18em] text-primary">
                  {v.n}
                </span>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-tight">{v.t}</h3>
                <p className="mt-2 text-muted-foreground">{v.d}</p>
              </motion.div>
            </Reveal>
          ))}
        </section>

        {/* ── Experience ──────────────────────────────────────────── */}
        <section className="mt-20 border-t border-border pt-12">
          <Reveal>
            <h2 className="mb-12 font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-none tracking-tight">
              Experience
            </h2>
          </Reveal>

          <div className="flex flex-col border-t border-border/40">
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-border/40 transition-colors hover:border-border">
                  
                  {/* Timeline / Year */}
                  <div className="md:col-span-3 flex flex-col justify-start">
                    <span className="font-display text-[1.75rem] font-bold mb-2 text-foreground">{exp.period}</span>
                    <span className="font-mono-jb text-[0.65rem] uppercase tracking-[0.2em] text-primary">{exp.duration}</span>
                  </div>
                  
                  {/* Role / Company */}
                  <div className="md:col-span-5 flex flex-col justify-center">
                    <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight text-foreground transition-transform duration-500 group-hover:translate-x-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 font-mono-jb text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                      <MapPin size={14} className="text-primary" />
                      {exp.company}
                    </div>
                  </div>
                  
                  {/* Summary */}
                  <div className="md:col-span-4 flex items-center">
                    <p className="text-[0.95rem] leading-[1.7] text-muted-foreground/90">
                      {exp.summary}
                    </p>
                  </div>
                  
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Capabilities / Skills ───────────────────────────────── */}
        <section className="mt-20 border-t border-border pt-12">
          <Reveal>
            <h2 className="mb-12 font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-none tracking-tight">
              Capabilities
            </h2>
          </Reveal>

          <div className="flex flex-col border-t border-border/40">
            {skillGroups.map((g, gi) => (
              <Reveal key={g.category} delay={gi * 0.08}>
                <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-border/40 transition-colors hover:border-border">
                  
                  <div className="md:col-span-4 flex items-center">
                    <span className="font-mono-jb text-[0.7rem] uppercase tracking-[0.2em] text-primary">
                      ( {g.category} )
                    </span>
                  </div>
                  
                  <div className="md:col-span-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                    {g.skills.map(skill => (
                      <span key={skill} className="font-display text-xl md:text-2xl font-medium tracking-tight text-foreground/70 transition-colors group-hover:text-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Education ───────────────────────────────────────────── */}
        <section className="mt-16 grid grid-cols-1 gap-8 border-t border-border pt-12 lg:grid-cols-[0.4fr_0.6fr]">
          <Reveal>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-none tracking-tight">
              Education
            </h2>
          </Reveal>

          <div className="flex flex-col gap-0">
            {education.map((edu, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <div className={`flex flex-col gap-0.5 py-5 md:flex-row md:items-baseline md:justify-between ${index !== 0 ? 'border-t border-border' : ''}`}>
                  <div>
                    <div className="font-display text-xl font-medium tracking-tight">
                      {edu.degree}
                    </div>
                    <div className="mt-0.5 text-sm text-muted-foreground">{edu.institution}</div>
                  </div>
                  <span className="font-mono-jb text-[0.68rem] uppercase tracking-[0.12em] text-primary">
                    {edu.duration}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Certifications ──────────────────────────────────────── */}
        <section className="mt-16 grid grid-cols-1 gap-8 border-t border-border pt-12 lg:grid-cols-[0.4fr_0.6fr]">
          <Reveal>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-none tracking-tight">
              Certifications
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <motion.a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border p-6 transition-colors hover:border-primary hover:bg-secondary/30"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                >
                  {/* Google accent dot cluster */}
                  <div className="flex gap-1.5 mb-4">
                    <span className="h-2 w-2 rounded-full bg-[#4285F4]" />
                    <span className="h-2 w-2 rounded-full bg-[#EA4335]" />
                    <span className="h-2 w-2 rounded-full bg-[#FBBC05]" />
                    <span className="h-2 w-2 rounded-full bg-[#34A853]" />
                  </div>
                  <div>
                    <div className="font-display text-xl font-medium leading-tight tracking-tight">
                      {cert.title}
                    </div>
                    <div className="font-display text-xl font-medium leading-tight tracking-tight text-muted-foreground">
                      {cert.subtitle}
                    </div>
                  </div>
                  <div className="mt-3 font-mono-jb text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground flex items-center justify-between">
                    <span>{cert.provider}</span>
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-primary" />
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </section>



        {/* ── Sketchbook ──────────────────────────────────────────── */}
        <div className="mt-16">
          <SketchGallery />
        </div>

      </div>
    </div>
  );
}
