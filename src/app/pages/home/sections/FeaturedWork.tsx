import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../../../components/ui/motion-primitives";
import { ProjectIndex } from "../../../components/sections/ProjectIndex";

export function FeaturedWork() {
  return (
    <section className="border-t border-border px-6 pt-8 pb-4 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <span className="font-mono-jb text-[0.65rem] uppercase tracking-[0.2em] text-primary/80">
              Selected Work
            </span>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(1.5rem,3vw,2rem)] font-medium leading-snug tracking-tight text-foreground">
              A handful of projects I&apos;m proud to have shaped.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/projects"
              className="group relative inline-flex items-center gap-2 text-[0.8rem] uppercase tracking-[0.1em] font-mono-jb text-muted-foreground transition-colors hover:text-primary pb-1"
            >
              View archive
              <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              {/* Animated Underline */}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          </Reveal>
        </div>
        <ProjectIndex />
      </div>
    </section>
  );
}
