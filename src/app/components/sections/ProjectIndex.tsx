import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../../data/projects";

import wtBooksImg from "../../../assets/images/Selected Works/WT Books.png";
import gtColorMixerImg from "../../../assets/images/Selected Works/GT Color Mixer.png";
import xionImg from "../../../assets/images/Selected Works/XION.png";
import superIdImg from "../../../assets/images/Selected Works/Super_ID_Card_Maker.png";
import hoverPreviewImg from "../../../assets/images/Selected Works/hover_to_view_image.png";

const projectPreviewImages: Record<string, string> = {
  "wt-books": wtBooksImg,
  "gt-colour-mixer": gtColorMixerImg,
  "xion-grocery": xionImg,
  "super-id-card-maker": superIdImg,
};

export function ProjectIndex() {
  const [active, setActive] = useState<number | null>(null);

  const displayProjects = projects.slice(0, 4);

  return (
    <div className="relative">
      
      {/* Desktop Split Layout */}
      <div className="hidden lg:grid grid-cols-[1.1fr_0.9fr] gap-16 min-h-[600px] items-center">
        
        {/* Left: Project List */}
        <div className="flex flex-col justify-center">
          {displayProjects.map((p, i) => {
            const isActive = active === i;
            return (
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`group block border-t border-border/60 transition-all duration-500 hover:border-foreground/20 py-8 ${i === displayProjects.length - 1 ? 'border-b' : ''}`}
              >
                <div className={`flex items-center justify-between gap-6 transition-all duration-500 ${isActive ? 'px-4' : ''}`}>
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className={`font-mono-jb text-[0.65rem] tracking-[0.15em] transition-colors duration-500 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                      {p.index}
                    </span>
                    <h3 className={`font-display text-[clamp(1.4rem,3vw,2.4rem)] font-medium tracking-tight transition-colors duration-500 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {p.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <span className={`hidden font-mono-jb text-[0.65rem] uppercase tracking-[0.15em] transition-colors duration-500 md:block ${isActive ? 'text-foreground/60' : 'text-muted-foreground'}`}>
                      {p.category}
                    </span>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${isActive ? 'border-primary/20 bg-primary/5 text-primary scale-110' : 'border-transparent bg-transparent text-muted-foreground/50'}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-500 ${isActive ? '-translate-y-0.5 translate-x-0.5' : ''}`}
                      >
                        <path d="M7 17 17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Right: Sticky Preview Area */}
        <div className="relative flex items-center justify-center">
          <div className="sticky top-32 w-full max-w-[540px] aspect-[606/541] rounded-3xl overflow-hidden border border-border/40 shadow-xl bg-card/20">
            <AnimatePresence mode="wait">
              {active === null ? (
                // Empty state with hover_to_view_image.png
                <motion.div
                  key="hover-placeholder"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <img
                    src={hoverPreviewImg}
                    alt="Hover to preview"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key={displayProjects[active].id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <Link to={`/projects/${displayProjects[active].id}`} className="block w-full h-full">
                    <img
                      src={projectPreviewImages[displayProjects[active].id] || displayProjects[active].cover}
                      alt={displayProjects[active].title}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Stacked Layout */}
      <div className="lg:hidden flex flex-col">
        {displayProjects.map((p, i) => (
          <div key={p.id} className="flex flex-col border-t border-border/60 py-8">
            <Link to={`/projects/${p.id}`} className="group block mb-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <span className="font-mono-jb text-[0.65rem] tracking-[0.15em] text-muted-foreground">
                    {p.index}
                  </span>
                  <h3 className="font-display text-[1.8rem] font-medium tracking-tight text-foreground">
                    {p.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between pl-[38px]">
                  <span className="font-mono-jb text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                    {p.category}
                  </span>
                  <span className="flex text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7" /><path d="M7 7h10v10" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
            
            {/* Always visible preview on mobile */}
            <Link to={`/projects/${p.id}`} className="w-full aspect-[606/541] rounded-2xl overflow-hidden relative border border-border/40 shadow-md block">
              <img
                src={projectPreviewImages[p.id] || p.cover}
                alt={p.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </Link>
          </div>
        ))}
      </div>
      
    </div>
  );
}
