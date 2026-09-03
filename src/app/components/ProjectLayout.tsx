import { Reveal } from "./ui/motion-primitives";
import { Project } from "../data/projects";
import { ImageWithFallback } from "./ui/ImageWithFallback";

export function ProjectLayout({ project }: { project: Project }) {
  // Use project primary color if available in uiDesign, else fallback to terracotta
  const primaryColor = project.uiDesign?.colorPalette?.[0]?.hex || "#CF4A25";
  const primaryColorTranslucent = `${primaryColor}40`; // 25% opacity approx

  return (
    <div className="bg-[#F1ECE2] dark:bg-background w-full min-h-screen text-[#5E5E5E] dark:text-muted-foreground font-['Jost'] pb-32 pt-24">
      {/* 1. Hero Banner */}
      <section className="px-5 mx-auto max-w-[1920px]">
        <div 
          className="relative w-full h-[800px] rounded-[10px] overflow-hidden flex flex-col items-center justify-center"
          style={{ backgroundColor: primaryColor }}
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '200px 200px' }}></div>
          
          <Reveal>
            <h1 className="font-['Jost'] font-extrabold text-[clamp(60px,12vw,200px)] leading-none text-center uppercase text-[#D8E5FF] relative z-10 tracking-tight">
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="absolute top-[55px] left-1/2 -translate-x-1/2 bg-white/10 rounded-full px-8 py-2.5 backdrop-blur-sm z-10">
              <span className="text-white text-[18px] whitespace-nowrap">
                {project.category} · {project.tags.join(" · ")}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="absolute left-[30px] bottom-[30px] bg-white/10 rounded-full px-8 py-4 backdrop-blur-sm z-10">
              <span className="text-white font-semibold text-[22px]">
                A UX/UI Case Study
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Constraints Wrapper for remaining content */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-0">
        
        {/* 2. Project Overview & Hero Mockups */}
        <section className="mt-32">
          <Reveal>
            <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight mb-6" style={{ color: primaryColor }}>
              Project Overview
            </h2>
            <p className="text-[22px] leading-[32px] max-w-[1400px]">
              {project.overview}
            </p>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="mt-16 w-full flex justify-center">
              <ImageWithFallback 
                src={project.cover} 
                alt={`${project.title} App Screens`} 
                className="w-full max-w-[1200px] h-auto object-contain drop-shadow-2xl rounded-2xl"
              />
            </div>
          </Reveal>
        </section>

        {/* 3. Problem Statement */}
        <section className="mt-48">
          <Reveal>
            <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight mb-6" style={{ color: primaryColor }}>
              Problem Statement
            </h2>
            <p className="text-[22px] leading-[32px] mb-16">
              {project.theProblem}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {project.painPoints?.map((point, index) => {
              // Split string into Title and Description if format is "Title: Description"
              const hasColon = point.includes(":");
              const title = hasColon ? point.split(":")[0] : `Pain Point 0${index + 1}`;
              const desc = hasColon ? point.substring(point.indexOf(":") + 1).trim() : point;

              return (
                <Reveal delay={index * 0.1} key={index}>
                  <div className={`relative pt-6 ${index % 2 !== 0 ? 'lg:mt-24' : ''}`}>
                    <div 
                      className="rounded-[15px] h-full absolute inset-0 top-6 left-0 right-0 bottom-[-20px] -z-10"
                      style={{ backgroundColor: primaryColorTranslucent, opacity: 1 - (index * 0.2) }}
                    ></div>
                    <div className="bg-[#FAFCFF] dark:bg-card rounded-[15px] p-10 shadow-[-5px_-5px_20px_rgba(0,0,0,0.03)] relative z-10 border border-[#DDE8FF] dark:border-border">
                      <h3 className="font-medium text-[20px] mb-4" style={{ color: primaryColor }}>{title}</h3>
                      <p className="text-[18px] leading-[26px]">{desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* 4. Competitive Analysis (Generic Placeholder) */}
        <section className="mt-48">
          <Reveal>
            <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight mb-12" style={{ color: primaryColor }}>
              Competitive Analysis
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="bg-[#F6F9FF] dark:bg-card border border-[#DDE8FF] dark:border-border rounded-[30px] overflow-hidden">
              <div className="grid grid-cols-[1fr_1.5fr_2fr] bg-[#FFF8EA] dark:bg-muted p-6 items-center border-b border-[#DDE8FF] dark:border-border">
                <div className="font-bold text-[22px]" style={{ color: primaryColor }}>Area</div>
                <div className="font-medium text-[18px] text-[#313131] dark:text-foreground">Competitors</div>
                <div className="font-medium text-[18px] text-[#313131] dark:text-foreground">{project.title}</div>
              </div>
              <div className="grid grid-cols-[1fr_1.5fr_2fr] bg-[#FFF0EB] dark:bg-muted/50 p-6 items-center border-b border-[#DDE8FF] dark:border-border">
                <div className="font-medium text-[18px] text-[#313131] dark:text-foreground">Core Experience</div>
                <div className="text-[18px]">Fragmented / Clunky</div>
                <div className="text-[18px]">Unified & intuitive flows</div>
              </div>
              <div className="grid grid-cols-[1fr_1.5fr_2fr] bg-[#FFF0EB] dark:bg-muted/50 p-6 items-center border-b border-[#DDE8FF] dark:border-border">
                <div className="font-medium text-[18px] text-[#313131] dark:text-foreground">Visual Design</div>
                <div className="text-[18px]">Outdated generic templates</div>
                <div className="text-[18px]">Premium, brand-aligned aesthetics</div>
              </div>
              <div className="grid grid-cols-[1fr_1.5fr_2fr] bg-[#FFF0EB] dark:bg-muted/50 p-6 items-center">
                <div className="font-medium text-[18px] text-[#313131] dark:text-foreground">Accessibility</div>
                <div className="text-[18px]">Ignored</div>
                <div className="text-[18px]">High contrast, fully WCAG compliant</div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 5. Key Findings */}
        <section className="mt-48 flex flex-col lg:flex-row items-center gap-16">
          <Reveal>
            <div 
              className="w-[300px] h-[300px] rounded-full flex items-center justify-center opacity-80"
              style={{ backgroundColor: primaryColorTranslucent }}
            >
              <span className="font-bold" style={{ color: primaryColor }}>User Research</span>
            </div>
          </Reveal>
          
          <div className="flex-1">
            <Reveal delay={0.2}>
              <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight mb-8" style={{ color: primaryColor }}>
                Key Findings from User Research
              </h2>
              <ul className="space-y-6 text-[22px] leading-[32px] list-disc pl-6" style={{ marker: { color: primaryColor } as any }}>
                {project.userResearch?.map((research, i) => (
                  <li key={i}>{research}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 6. User Personas (Generic Placeholder) */}
        <section className="mt-48">
          <Reveal>
            <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight mb-12" style={{ color: primaryColor }}>
              Target Persona
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal delay={0.1}>
              <div className="bg-[#F6F9FF] dark:bg-card border border-[#DDE8FF] dark:border-border rounded-[30px] p-10 flex flex-col h-full">
                <div className="flex items-center gap-8 mb-8">
                  <div className="w-[120px] h-[120px] bg-[#457FED] rounded-[15px] shrink-0 flex items-center justify-center overflow-hidden">
                     <span className="text-white font-bold text-4xl">PU</span>
                  </div>
                  <div>
                    <h3 className="font-['Caveat_Brush'] text-[40px] lg:text-[52px] leading-none mb-2" style={{ color: primaryColor }}>The Primary User</h3>
                    <div className="text-[20px] italic text-[#5E5E5E] dark:text-muted-foreground">Needs efficiency and clarity</div>
                  </div>
                </div>
                <p className="text-[18px] leading-[26px]">
                  Requires a streamlined experience without overwhelming complexity. Values fast interactions and visually clear data.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[#F6F9FF] dark:bg-card border border-[#DDE8FF] dark:border-border rounded-[30px] p-10 flex flex-col h-full">
                <div className="flex items-center gap-8 mb-8">
                  <div className="w-[120px] h-[120px] bg-[#457FED] rounded-[15px] shrink-0 flex items-center justify-center overflow-hidden">
                     <span className="text-white font-bold text-4xl">PU</span>
                  </div>
                  <div>
                    <h3 className="font-['Caveat_Brush'] text-[40px] lg:text-[52px] leading-none mb-2" style={{ color: primaryColor }}>The Power User</h3>
                    <div className="text-[20px] italic text-[#5E5E5E] dark:text-muted-foreground">Relies on advanced features</div>
                  </div>
                </div>
                <p className="text-[18px] leading-[26px]">
                  Demands granular control, quick filtering, and deep analytics. Wants the interface to stay out of the way while doing heavy lifting.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 7. Lo-Fi */}
        {project.wireframes && project.wireframes.length > 0 && (
          <section className="mt-48">
            <Reveal>
              <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight mb-6" style={{ color: primaryColor }}>
                Lo-Fi Explorations
              </h2>
              <p className="text-[22px] leading-[32px] mb-12">
                Early low-fidelity explorations focused on answering one question per screen. Wireframes validated the information hierarchy before any color or iconography was applied.
              </p>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.wireframes.map((wf, i) => (
                <Reveal delay={i * 0.1} key={i}>
                  <div className="w-full bg-[#d3cfca]/50 dark:bg-muted rounded-[30px] border border-[#d3cfca] overflow-hidden">
                    <ImageWithFallback src={wf} alt="Wireframe" className="w-full h-auto" />
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* 8. Design System */}
        <section className="mt-48">
          <Reveal>
            <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight mb-12" style={{ color: primaryColor }}>
              Design System
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-[#F6F9FF] dark:bg-card rounded-[30px] p-12 border border-[#DDE8FF] dark:border-border">
              <div className="flex flex-wrap gap-16">
                {project.uiDesign?.colorPalette && (
                  <div>
                    <h4 className="text-[20px] text-[#313131] dark:text-foreground font-medium mb-6">Colors</h4>
                    <div className="flex gap-4">
                      {project.uiDesign.colorPalette.map((color, i) => (
                        <div key={i} className="group relative">
                          <div className="w-24 h-24 rounded-full shadow-sm" style={{ backgroundColor: color.hex }}></div>
                          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            {color.hex}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.uiDesign?.typography && (
                  <div>
                    <h4 className="text-[20px] text-[#313131] dark:text-foreground font-medium mb-6">Typography</h4>
                    <div className="flex flex-col gap-4">
                      {project.uiDesign.typography.map((font, i) => (
                        <div key={i}>
                          <span className={`text-4xl font-semibold block ${i === 0 ? "font-['Fraunces']" : "font-['Jost'] text-[#313131] dark:text-foreground"}`} style={{ color: i === 0 ? primaryColor : undefined }}>
                            {font}
                          </span>
                          <span className="text-[#5E5E5E] dark:text-muted-foreground text-sm">Used across the application</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </section>

        {/* 9. High Fidelity screens */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mt-48">
            <Reveal>
              <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight mb-12" style={{ color: primaryColor }}>
                High-Fidelity Screens
              </h2>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, i) => (
                <Reveal delay={i * 0.1} key={i}>
                  <div className="w-full bg-[#d3cfca]/50 dark:bg-muted rounded-[30px] border border-[#d3cfca] overflow-hidden drop-shadow-sm">
                    <ImageWithFallback src={img} alt="High Fidelity Screen" className="w-full h-auto" />
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        )}
        
        {/* 10. Outcomes */}
        <section className="mt-48">
          <Reveal>
            <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight mb-12" style={{ color: primaryColor }}>
              Outcomes
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.metrics?.map((metric, i) => (
              <Reveal delay={i * 0.1} key={i}>
                <div className="border-l-4 pl-6 py-2" style={{ borderColor: primaryColor }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: primaryColor }}>{metric.value}</div>
                  <div className="text-[18px] leading-[26px]">{metric.label} achieved post-launch.</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
