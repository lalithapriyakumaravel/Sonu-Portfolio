import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Reveal } from "../../../components/ui/motion-primitives";

const processSteps = [
  { n: "01", t: "Discover", d: "Understand the problem, users, constraints and context." },
  { n: "02", t: "Define", d: "Turn research into a clear problem and opportunity." },
  { n: "03", t: "Explore", d: "Generate concepts, flows and possible solutions." },
  { n: "04", t: "Validate", d: "Prototype, test, challenge assumptions." },
  { n: "05", t: "Refine", d: "Polish the interaction, visual system and details." },
];

// --- VISUAL COMPONENTS ---

const DiscoverVisual = () => (
  <div className="relative w-full h-full bg-[#f8f9fa] rounded-3xl overflow-hidden flex items-center justify-center p-8 border border-border/40 shadow-inner">
    <div className="relative w-full max-w-[400px] h-[300px]">
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: -5 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute top-[10%] left-[10%] w-[140px] h-[140px] bg-[#fff3cd] shadow-md p-4 rotate-[-5deg]"
      >
        <div className="w-[80%] h-[4px] bg-black/10 mb-2 rounded-full" />
        <div className="w-[60%] h-[4px] bg-black/10 mb-2 rounded-full" />
        <div className="w-[90%] h-[4px] bg-black/10 mb-2 rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20, rotate: 8 }}
        animate={{ opacity: 1, y: 0, rotate: 8 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-[20%] right-[10%] w-[160px] h-[120px] bg-[#d1e7dd] shadow-md p-4 rotate-[8deg]"
      >
        <div className="w-[100%] h-[4px] bg-black/10 mb-2 rounded-full" />
        <div className="w-[70%] h-[4px] bg-black/10 mb-2 rounded-full" />
        <div className="w-[50%] h-[4px] bg-black/10 mb-2 rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-[10%] left-[30%] w-[200px] h-[100px] bg-white shadow-lg p-5 rounded-lg border border-black/5"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-primary/20" />
          <div className="w-[100px] h-[6px] bg-black/10 rounded-full" />
        </div>
        <div className="w-[140px] h-[4px] bg-black/5 rounded-full" />
      </motion.div>
    </div>
  </div>
);

const DefineVisual = () => (
  <div className="relative w-full h-full bg-[#f8f9fa] rounded-3xl overflow-hidden flex items-center justify-center p-8 border border-border/40 shadow-inner">
    <div className="relative w-full max-w-[400px] h-[300px] flex flex-col items-center justify-center">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300">
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d="M100 100 C 150 100, 200 150, 300 150"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          d="M100 200 C 150 200, 200 150, 300 150"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </svg>
      
      <div className="flex justify-between w-full relative z-10 px-8">
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-xl bg-white border border-black/10 shadow-sm flex items-center justify-center"
          >
            <div className="w-6 h-6 rounded-full bg-black/5" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-16 rounded-xl bg-white border border-black/10 shadow-sm flex items-center justify-center"
          >
            <div className="w-6 h-6 rounded-full bg-black/5" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
          className="w-24 h-24 rounded-2xl bg-primary shadow-xl flex items-center justify-center self-center"
        >
          <div className="w-10 h-10 rounded-full bg-white/20" />
        </motion.div>
      </div>
    </div>
  </div>
);

const ExploreVisual = () => (
  <div className="relative w-full h-full bg-[#f8f9fa] rounded-3xl overflow-hidden flex items-center justify-center p-8 border border-border/40 shadow-inner">
    <div className="relative w-full max-w-[300px] h-[400px] bg-white rounded-2xl shadow-xl border border-black/5 p-4 flex flex-col gap-4">
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "40%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-6 bg-black/10 rounded-md"
      />
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-24 bg-black/5 rounded-xl border border-black/5"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-24 bg-black/5 rounded-xl border border-black/5"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex-1 bg-primary/10 rounded-xl border border-primary/20 flex items-center justify-center"
      >
        <div className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center">
          <div className="w-6 h-6 bg-primary/20 rounded-full" />
        </div>
      </motion.div>
    </div>
  </div>
);

const ValidateVisual = () => (
  <div className="relative w-full h-full bg-[#f8f9fa] rounded-3xl overflow-hidden flex items-center justify-center p-8 border border-border/40 shadow-inner">
    <div className="relative w-full max-w-[300px] h-[160px] bg-white rounded-2xl shadow-xl border border-black/5 flex flex-col items-center justify-center gap-6">
      <motion.div
        animate={{ 
          backgroundColor: ["#f1f5f9", "#e2e8f0", "#f1f5f9"],
          scale: [1, 0.98, 1]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-[200px] h-12 rounded-full bg-slate-100 flex items-center px-4"
      >
        <div className="w-6 h-6 rounded-full bg-slate-300 mr-3" />
        <div className="h-2 w-20 bg-slate-300 rounded-full" />
      </motion.div>

      <motion.div
        initial={{ x: 50, y: 50, opacity: 0 }}
        animate={{ x: 0, y: -20, opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute bottom-4 right-1/4 z-20"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary drop-shadow-md">
          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill="white" />
        </svg>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.5 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/10 pointer-events-none"
      />
    </div>
  </div>
);

const RefineVisual = () => (
  <div className="relative w-full h-full bg-[#f8f9fa] rounded-3xl overflow-hidden flex items-center justify-center p-8 border border-border/40 shadow-inner">
    <div className="relative w-full max-w-[320px] bg-white rounded-[24px] shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-black/5 p-6 flex flex-col gap-6 overflow-hidden">
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-primary/60 shadow-lg"
        />
        <div className="flex flex-col gap-2 flex-1">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "70%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="h-3 bg-slate-800 rounded-full"
          />
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "40%" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="h-2 bg-slate-300 rounded-full"
          />
        </div>
      </div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full aspect-[2/1] rounded-xl bg-slate-50 border border-slate-100 flex items-end p-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
        <div className="w-full flex justify-between items-end gap-2 relative z-10">
          {[40, 70, 45, 90, 60].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.1, type: "spring" }}
              className="flex-1 bg-primary/80 rounded-t-sm"
            />
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

// --- OBSERVER COMPONENT FOR EACH STEP ---
const StepItem = ({ step, index, activeStep, setActiveStep }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px", amount: "some" });

  useEffect(() => {
    if (isInView) {
      setActiveStep(index);
    }
  }, [isInView, index, setActiveStep]);

  const isActive = activeStep === index;

  return (
    <div ref={ref} className="py-12 md:py-24 relative">
      <div className={`transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
        <div className="flex items-start gap-6 md:gap-8 cursor-default">
          <div className="shrink-0 mt-1">
            <span className={`font-display text-4xl md:text-5xl font-light transition-colors duration-500 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
              {step.n}
            </span>
          </div>
          <div className="flex flex-col">
            <h3 className={`font-mono-jb text-[0.8rem] uppercase tracking-widest mb-4 transition-colors duration-500 ${isActive ? 'text-foreground' : 'text-foreground'}`}>
              {step.t}
            </h3>
            <p className="font-display text-[1.5rem] md:text-[2rem] leading-[1.3] tracking-tight text-foreground">
              {step.d}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Approach() {
  const [activeStep, setActiveStep] = useState(0);

  const visuals = [
    <DiscoverVisual key="0" />,
    <DefineVisual key="1" />,
    <ExploreVisual key="2" />,
    <ValidateVisual key="3" />,
    <RefineVisual key="4" />
  ];

  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        
        {/* Intro Section */}
        <div className="py-24 lg:py-32 max-w-3xl">
          <Reveal>
            <span className="font-mono-jb text-[0.72rem] uppercase tracking-[0.22em] text-primary">(How I work)</span>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[1.0] tracking-[-0.02em]">
              Research-led,<br /><span className="italic text-muted-foreground">craft-obsessed.</span>
            </h2>
            <p className="mt-8 text-foreground/80 text-[1.1rem] md:text-[1.25rem] leading-relaxed max-w-[500px]">
              I move fluently between research, systems and motion — so ideas stay coherent from the
              first interview to the last pixel.
            </p>
          </Reveal>
        </div>

        {/* Interactive Scroll Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 pb-32">
          
          {/* Left: Scrollable Text Steps */}
          <div className="relative z-10">
            {processSteps.map((step, i) => (
              <StepItem 
                key={step.n} 
                step={step} 
                index={i} 
                activeStep={activeStep} 
                setActiveStep={setActiveStep} 
              />
            ))}
          </div>

          {/* Right: Sticky Visual Canvas (Desktop) / Inline (Mobile fallback handled by CSS if needed, but sticky is better) */}
          <div className="hidden lg:block relative h-full">
            <div className="sticky top-32 h-[600px] w-full rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  {visuals[activeStep]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Visual Fallback */}
        <div className="lg:hidden flex flex-col gap-12 pb-32">
          <h3 className="font-mono-jb text-center text-sm uppercase tracking-widest text-muted-foreground">Visual Process</h3>
          <div className="h-[400px] w-full rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                {visuals[activeStep]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
