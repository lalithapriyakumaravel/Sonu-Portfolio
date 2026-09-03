import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../../data/projects";

// --- Project Specific Visuals ---

const WTBooksPreview = ({ project }: { project: any }) => (
  <div className="relative w-full h-full bg-[#f4ece3] overflow-hidden rounded-3xl border border-black/5 shadow-inner">
    <div className="absolute inset-0 z-0">
      <img src={project.cover} alt="WT Books" className="w-full h-full object-cover opacity-30" />
    </div>
    
    <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[280px] h-[380px] bg-white rounded-r-2xl rounded-l-sm shadow-2xl border-l-4 border-[#CF4A25] relative overflow-hidden p-6 flex flex-col justify-between"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#CF4A25]/5 to-transparent pointer-events-none" />
        
        <div>
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "30%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-[#1B1712] mb-6" 
          />
          <h4 className="font-serif text-3xl text-[#1B1712] leading-tight mb-2">The Art of<br/>Editorial.</h4>
          <p className="font-mono text-[10px] text-[#7D7365] uppercase tracking-widest">Chapter 01</p>
        </div>

        <div className="flex justify-between items-end">
          <div className="w-12 h-16 bg-[#f4ece3] rounded-sm" />
          <div className="w-8 h-8 rounded-full border border-[#CF4A25] flex items-center justify-center">
            <span className="text-[10px] text-[#CF4A25]">+</span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const GTColourPreview = ({ project }: { project: any }) => (
  <div className="relative w-full h-full bg-[#F5F5F7] overflow-hidden rounded-3xl border border-black/5 shadow-inner">
    <div className="absolute inset-0 z-0">
      <img src={project.cover} alt="GT Colour Mixer" className="w-full h-full object-cover opacity-20 grayscale" />
    </div>

    <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="w-[300px] h-[400px] bg-white rounded-[32px] shadow-2xl border border-black/5 p-4 flex flex-col gap-4"
      >
        <div className="w-full aspect-square rounded-[24px] bg-slate-100 relative overflow-hidden">
          <motion.div 
            animate={{ 
              background: [
                "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                "linear-gradient(45deg, #4ECDC4, #FFE66D)",
                "linear-gradient(45deg, #FFE66D, #FF6B6B)"
              ]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-80"
          />
          <div className="absolute inset-0 shadow-[inset_0_4px_20px_rgba(0,0,0,0.1)] rounded-[24px]" />
        </div>

        <div className="flex justify-between items-center px-2 pt-2">
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-[#FF6B6B] shadow-sm" />
            <div className="w-8 h-8 rounded-full bg-[#4ECDC4] shadow-sm" />
            <div className="w-8 h-8 rounded-full bg-[#FFE66D] shadow-sm" />
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-black/10" />
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const XionPreview = ({ project }: { project: any }) => (
  <div className="relative w-full h-full bg-[#F4F3ED] overflow-hidden rounded-3xl border border-black/5 shadow-inner">
    <div className="absolute inset-0 z-0">
      <img src={project.cover} alt="XION" className="w-full h-full object-cover opacity-30" />
    </div>

    <div className="relative z-10 w-full h-full flex items-center justify-center">
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        className="w-[240px] h-[480px] bg-white rounded-[40px] shadow-2xl border-4 border-[#071709] relative overflow-hidden flex flex-col"
      >
        <div className="w-24 h-6 bg-[#071709] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[16px] z-20" />
        
        <div className="flex-1 bg-slate-50 pt-12 px-4 flex flex-col gap-4">
          <div className="flex justify-between items-center mb-2">
            <div className="w-20 h-4 bg-[#1A5C38]/20 rounded-full" />
            <div className="w-8 h-8 rounded-full bg-[#5EB547]/20" />
          </div>
          
          <div className="w-full h-32 rounded-xl bg-[#5EB547]/10 flex items-center justify-center relative overflow-hidden">
             <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
             />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map(i => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="bg-white p-3 rounded-lg shadow-sm flex flex-col gap-2"
              >
                <div className="w-full aspect-square bg-slate-100 rounded-md" />
                <div className="w-1/2 h-2 bg-slate-200 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const SuperIDPreview = ({ project }: { project: any }) => (
  <div className="relative w-full h-full bg-[#F8F8F8] overflow-hidden rounded-3xl border border-black/5 shadow-inner">
    <div className="absolute inset-0 z-0">
      <img src={project.cover} alt="Super ID Card Maker" className="w-full h-full object-cover opacity-20 grayscale" />
    </div>

    <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-[400px] bg-white rounded-xl shadow-2xl border border-black/10 flex flex-col overflow-hidden"
      >
        <div className="h-10 bg-slate-100 border-b border-black/5 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        
        <div className="p-6 flex gap-6">
          <div className="w-[120px] shrink-0 flex flex-col gap-3">
            <div className="w-full h-32 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center bg-slate-50">
              <div className="w-16 h-20 bg-white shadow-sm border border-slate-200 flex flex-col items-center pt-2 gap-1">
                <div className="w-6 h-6 rounded-full bg-slate-200" />
                <div className="w-10 h-1 bg-slate-200" />
                <div className="w-8 h-1 bg-slate-200" />
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-3">
            {[1, 2, 3, 4, 5].map((row, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                className="flex items-center gap-3 border-b border-slate-100 pb-2"
              >
                <div className="w-4 h-4 rounded-sm border border-slate-300" />
                <div className="w-1/3 h-2 bg-slate-200 rounded-full" />
                <div className="w-1/2 h-2 bg-slate-100 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

// Fallback preview for projects without custom components
const DefaultPreview = ({ project }: { project: any }) => (
  <div className="relative w-full h-full bg-slate-100 overflow-hidden rounded-3xl border border-black/5 shadow-inner">
    <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/10" />
  </div>
);

// --- MAIN COMPONENT ---

export function ProjectIndex() {
  const [active, setActive] = useState<number | null>(null);

  const displayProjects = projects.slice(0, 4);

  // Map project ID to its custom visual component
  const getPreviewComponent = (project: any) => {
    switch(project.id) {
      case 'wt-books': return <WTBooksPreview project={project} />;
      case 'gt-colour-mixer': return <GTColourPreview project={project} />;
      case 'xion-grocery': return <XionPreview project={project} />;
      case 'super-id-card-maker': return <SuperIDPreview project={project} />;
      default: return <DefaultPreview project={project} />;
    }
  };

  return (
    <div className="relative">
      
      {/* Desktop Split Layout */}
      <div className="hidden lg:grid grid-cols-[1.1fr_0.9fr] gap-16 min-h-[600px]">
        
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
        <div className="relative">
          <div className="sticky top-32 w-full h-[540px] rounded-3xl overflow-hidden flex items-center justify-center">
            {active === null ? (
              // Empty state placeholder
              <div className="w-full h-full bg-foreground/[0.02] border border-border/40 rounded-3xl flex items-center justify-center">
                <span className="font-mono-jb text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground/40">
                  Hover to preview
                </span>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  {getPreviewComponent(displayProjects[active])}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Stacked Layout (Fallback for no hover) */}
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
            <div className="w-full h-[320px] rounded-2xl overflow-hidden relative border border-border/40">
              {getPreviewComponent(p)}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
