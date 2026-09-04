import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight, Asterisk } from "lucide-react";
import { Reveal, WordReveal, Magnetic } from "../../../components/ui/motion-primitives";
import { ImageWithFallback } from "../../../components/ui/ImageWithFallback";
const bannerImg = new URL("../../../../assets/images/banner image.png", import.meta.url).href;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yType = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[92svh] flex-col justify-between overflow-hidden px-6 pb-6 pt-24 lg:px-10"
    >
      <div className="relative mx-auto grid w-full max-w-[1400px] flex-1 grid-cols-1 items-center gap-8 py-8 lg:grid-cols-[1.55fr_0.45fr]">
        <motion.div style={{ y: yType, opacity }}>
          <h1 className="font-display text-[clamp(2.6rem,9vw,8rem)] font-normal leading-[0.9] tracking-[-0.03em]">
            <WordReveal text="Designing" />
            <br />
            <span className="inline-flex items-center gap-3">
              <WordReveal text="products people" delay={0.12} />
            </span>
            <br />
            <span className="italic text-primary">
              <WordReveal text="quietly love." delay={0.28} />
            </span>
          </h1>
          <Reveal delay={0.5} className="mt-6 flex max-w-xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <p className="max-w-sm text-lg text-muted-foreground">
              I'm Lalithapriya — a UI/UX designer turning complex ERP &amp; CRM workflows into
              calm, usable products across 10+ industries.
            </p>
            <Magnetic>
              <Link
                to="/projects"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 text-sm text-primary-foreground transition-transform"
              >
                See Works
                <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>
            </Magnetic>
          </Reveal>
        </motion.div>

        <motion.div style={{ y: yPortrait }} className="relative mx-auto w-full max-w-[260px] lg:max-w-none">
          <div className="overflow-hidden rounded-[1.5rem] bg-secondary flex items-center justify-center p-2">
            <ImageWithFallback
              src={bannerImg}
              alt="Lalithapriya K, UI/UX designer"
              className="aspect-[3/4] w-full object-contain"
            />
          </div>
          <div className="absolute -left-3 -top-3 flex h-14 w-14 rotate-[-8deg] items-center justify-center rounded-full bg-primary text-primary-foreground">
            <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 14, ease: "linear" }}>
              <Asterisk size={22} />
            </motion.span>
          </div>
          <span className="mt-2 block text-right font-display text-sm italic text-muted-foreground">
            Tiruvannamalai, Tamil Nadu.
          </span>
        </motion.div>
      </div>

      <motion.div style={{ opacity }} className="mx-auto flex w-full max-w-[1400px] items-center justify-between border-t border-border pt-4">
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          Open to opportunities · Willing to relocate
        </span>
        <span className="font-mono-jb text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}
