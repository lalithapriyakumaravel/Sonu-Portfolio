import { motion } from "motion/react";
import { Reveal } from "../../../components/ui/motion-primitives";

// --- VISUAL COMPONENTS ---

const ProductCard = () => (
  <motion.div 
    whileHover="hover"
    className="group relative flex flex-col h-full min-h-[420px] rounded-[32px] bg-foreground/[0.02] border border-border/40 shadow-sm transition-all duration-500 overflow-hidden cursor-default lg:col-span-7"
  >
    <div className="p-10 relative z-10 flex flex-col h-full">
      <h3 className="font-mono-jb text-[0.75rem] uppercase tracking-widest text-primary/80 mb-4">
        Product
      </h3>
      <p className="font-display text-[1.4rem] md:text-[1.6rem] leading-[1.25] text-foreground font-medium mb-4 max-w-[400px]">
        End-to-end ownership of strategy, user journeys, and dense logic.
      </p>
      <ul className="flex flex-wrap gap-2 mt-auto">
        {["Product Design", "UX Strategy", "Interaction Design", "Dashboards"].map((item, j) => (
          <li key={j} className="px-4 py-2 rounded-full bg-background border border-border/60 text-[0.8rem] font-medium text-foreground/80">
            {item}
          </li>
        ))}
      </ul>
    </div>
    
    {/* Visual Composition: User Flow / Dashboard Logic */}
    <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-[60%] pointer-events-none overflow-hidden opacity-30 group-hover:opacity-100 transition-opacity duration-700">
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[400px] flex flex-col gap-4">
        <motion.div 
          variants={{ hover: { x: -20, opacity: 1 } }}
          initial={{ x: 0, opacity: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[240px] h-20 bg-white rounded-xl shadow-lg border border-black/5 p-4 flex gap-3 ml-12"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10" />
          <div className="flex flex-col gap-2 flex-1 justify-center">
            <div className="h-2 bg-black/10 rounded-full w-[80%]" />
            <div className="h-2 bg-black/5 rounded-full w-[60%]" />
          </div>
        </motion.div>
        
        {/* SVG connecting line */}
        <svg className="absolute left-4 top-[80px] w-12 h-16" viewBox="0 0 48 64">
          <motion.path 
            variants={{ hover: { pathLength: 1 } }}
            initial={{ pathLength: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            d="M 24 0 L 24 32 C 24 48 0 48 0 64" fill="none" stroke="var(--primary)" strokeWidth="2" strokeDasharray="4 4" 
          />
        </svg>

        <motion.div 
          variants={{ hover: { x: -40, opacity: 1 } }}
          initial={{ x: 0, opacity: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="w-[200px] h-16 bg-white rounded-xl shadow-lg border border-black/5 p-4 flex gap-3 mt-4"
        >
           <div className="flex flex-col gap-2 flex-1 justify-center">
            <div className="h-2 bg-black/10 rounded-full w-[100%]" />
            <div className="h-2 bg-black/5 rounded-full w-[40%]" />
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#fafafa] opacity-90"></div>
    </div>
  </motion.div>
);

const InterfaceCard = () => (
  <motion.div 
    whileHover="hover"
    className="group relative flex flex-col h-full min-h-[420px] rounded-[32px] bg-foreground/[0.02] border border-border/40 shadow-sm transition-all duration-500 overflow-hidden cursor-default lg:col-span-5"
  >
    <div className="p-10 relative z-10 flex flex-col h-full">
      <h3 className="font-mono-jb text-[0.75rem] uppercase tracking-widest text-primary/80 mb-4">
        Interface
      </h3>
      <p className="font-display text-[1.4rem] md:text-[1.6rem] leading-[1.25] text-foreground font-medium mb-4 max-w-[300px]">
        Pixel-perfect visual execution across web and native platforms.
      </p>
      <ul className="flex flex-wrap gap-2 mt-auto">
        {["UI Design", "Web Design", "Mobile App", "Motion"].map((item, j) => (
          <li key={j} className="px-4 py-2 rounded-full bg-background border border-border/60 text-[0.8rem] font-medium text-foreground/80">
            {item}
          </li>
        ))}
      </ul>
    </div>
    
    {/* Visual Composition: Polished UI Fragments */}
    <div className="absolute right-[-20%] bottom-[-10%] w-[80%] h-[80%] pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-700">
      <motion.div 
        variants={{ hover: { y: -20, scale: 1.05, rotate: -2 } }}
        initial={{ y: 0, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="absolute bottom-10 right-10 w-[240px] h-[320px] bg-white rounded-[32px] shadow-2xl border border-black/5 p-6 flex flex-col gap-6"
      >
        <div className="flex justify-between items-center">
          <div className="h-4 w-12 bg-black/10 rounded-full" />
          <div className="h-8 w-8 bg-black/5 rounded-full" />
        </div>
        <div className="flex-1 rounded-2xl bg-slate-50 border border-slate-100 p-4">
          <motion.div 
            variants={{ hover: { width: "100%" } }}
            initial={{ width: "60%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-3 bg-slate-200 rounded-full mb-3" 
          />
          <motion.div 
            variants={{ hover: { width: "80%" } }}
            initial={{ width: "40%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-3 bg-slate-200 rounded-full" 
          />
        </div>
        <div className="h-12 rounded-full bg-primary flex items-center justify-center">
          <div className="h-2 w-16 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const ResearchCard = () => (
  <motion.div 
    whileHover="hover"
    className="group relative flex flex-col h-full min-h-[420px] rounded-[32px] bg-[#fdfbf7] border border-border/40 shadow-sm transition-all duration-500 overflow-hidden cursor-default lg:col-span-5"
  >
    <div className="p-10 relative z-10 flex flex-col h-full">
      <h3 className="font-mono-jb text-[0.75rem] uppercase tracking-widest text-[#d97757] mb-4">
        Research
      </h3>
      <p className="font-display text-[1.4rem] md:text-[1.6rem] leading-[1.25] text-foreground font-medium mb-4 max-w-[300px]">
        Qualitative insights and rigorous usability validation.
      </p>
      <ul className="flex flex-wrap gap-2 mt-auto">
        {["User Research", "Testing", "Info Architecture"].map((item, j) => (
          <li key={j} className="px-4 py-2 rounded-full bg-white border border-[#e8dfd5] text-[0.8rem] font-medium text-foreground/80">
            {item}
          </li>
        ))}
      </ul>
    </div>
    
    {/* Visual Composition: Sticky Notes & Observation fragments */}
    <div className="absolute right-0 top-0 w-full h-full pointer-events-none overflow-hidden opacity-40 group-hover:opacity-100 transition-opacity duration-700">
      <motion.div 
        variants={{ hover: { y: -10, x: -10, rotate: -8 } }}
        initial={{ y: 20, x: 20, rotate: -2 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="absolute bottom-[20%] right-[10%] w-[140px] h-[140px] bg-[#fff3cd] shadow-lg p-4 flex flex-col gap-2"
      >
        <div className="w-[80%] h-2 bg-black/10 rounded-full" />
        <div className="w-[60%] h-2 bg-black/10 rounded-full" />
        <div className="w-[90%] h-2 bg-black/10 rounded-full" />
      </motion.div>
      <motion.div 
        variants={{ hover: { y: -20, x: 20, rotate: 12 } }}
        initial={{ y: 0, x: 0, rotate: 4 }}
        transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
        className="absolute bottom-[35%] right-[-5%] w-[120px] h-[120px] bg-[#d1e7dd] shadow-lg p-4 flex flex-col gap-2"
      >
        <div className="w-[100%] h-2 bg-black/10 rounded-full" />
        <div className="w-[70%] h-2 bg-black/10 rounded-full" />
      </motion.div>
    </div>
  </motion.div>
);

const SystemsCard = () => (
  <motion.div 
    whileHover="hover"
    className="group relative flex flex-col h-full min-h-[420px] rounded-[32px] bg-foreground/[0.02] border border-border/40 shadow-sm transition-all duration-500 overflow-hidden cursor-default lg:col-span-7"
  >
    <div className="p-10 relative z-10 flex flex-col h-full">
      <h3 className="font-mono-jb text-[0.75rem] uppercase tracking-widest text-primary/80 mb-4">
        Systems
      </h3>
      <p className="font-display text-[1.4rem] md:text-[1.6rem] leading-[1.25] text-foreground font-medium mb-4 max-w-[400px]">
        Scalable component architecture and seamless handoff.
      </p>
      <ul className="flex flex-wrap gap-2 mt-auto">
        {["Design Systems", "Component Libraries", "Tokens"].map((item, j) => (
          <li key={j} className="px-4 py-2 rounded-full bg-background border border-border/60 text-[0.8rem] font-medium text-foreground/80">
            {item}
          </li>
        ))}
      </ul>
    </div>
    
    {/* Visual Composition: Tokens & Components */}
    <div className="absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none opacity-30 group-hover:opacity-100 transition-opacity duration-700">
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-6 gap-2 p-8 border-l border-black/5 bg-[radial-gradient(var(--tw-colors-black)_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
      
      <div className="absolute top-[20%] right-[10%] w-[260px] h-auto bg-white rounded-2xl shadow-xl border border-black/5 p-6">
        <div className="flex gap-4 mb-6">
          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center border border-red-200">
            <span className="text-[10px] font-mono text-red-600">R1</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
            <span className="text-[10px] font-mono text-blue-600">B1</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center border border-green-200">
            <span className="text-[10px] font-mono text-green-600">G1</span>
          </div>
        </div>
        
        {/* Token application visualization */}
        <motion.div 
          variants={{ 
            hover: { 
              backgroundColor: "var(--primary)", 
              borderRadius: "24px",
              scale: 1.05
            } 
          }}
          initial={{ backgroundColor: "#e2e8f0", borderRadius: "8px", scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-16 flex items-center justify-center overflow-hidden relative"
        >
          <motion.div 
            variants={{ hover: { opacity: 1, y: 0 } }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-white text-xs font-mono font-bold"
          >
            radius-lg | color-primary
          </motion.div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);


export function Specializations() {
  return (
    <section className="border-t border-border px-6 py-24 lg:px-10 bg-background">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mb-16 md:mb-24">
            <span className="font-mono-jb text-[0.72rem] uppercase tracking-[0.22em] text-primary">(What I work with)</span>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[1.0] tracking-[-0.02em] max-w-[800px]">
              Specialized in <br /><span className="italic text-muted-foreground">scalable impact.</span>
            </h2>
            <p className="mt-6 max-w-[400px] text-foreground/80 text-[1.1rem] md:text-[1.25rem] leading-relaxed">
              From robust design systems to immersive mobile experiences, I focus on areas where design creates 
              measurable business value.
            </p>
          </div>
        </Reveal>

        {/* Asymmetrical Bento Capability Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 w-full">
          <Reveal delay={0.1} className="lg:col-span-7">
            <ProductCard />
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-5">
            <InterfaceCard />
          </Reveal>
          <Reveal delay={0.3} className="lg:col-span-5">
            <ResearchCard />
          </Reveal>
          <Reveal delay={0.4} className="lg:col-span-7">
            <SystemsCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
