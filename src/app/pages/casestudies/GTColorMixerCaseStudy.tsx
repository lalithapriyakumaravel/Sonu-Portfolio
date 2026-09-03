import { Reveal } from "../../components/ui/motion-primitives";
import person1Img from "../../../assets/images/persona/person1.png";
import person2Img from "../../../assets/images/persona/person2.png";
import vectorLine from "../../../assets/images/persona/vector_Line.png";
import { LowFidelitySection } from "../../components/ui/LowFidelitySection";
import { Project } from "../../data/projects";
import { ImageWithFallback } from "../../components/ui/ImageWithFallback";

// Import images (Using existing ones as placeholders for the layout)
import bannerImg from "../../../assets/images/wtbooks/Banner.png";
import userFlowImg from "../../../assets/images/wtbooks/User Flow Diagram.png";
import screen1 from "../../../assets/images/wtbooks/Add Transaction (Cash-In) 1.png";
import screen2 from "../../../assets/images/wtbooks/Business Detail 1.png";
import screen3 from "../../../assets/images/wtbooks/Business List 1.png";
import cashbookImg from "../../../assets/images/wtbooks/cashbook_compettitve_analysis.png";
import wtbooksCompetitiveImg from "../../../assets/images/wtbooks/wtbooks_competitive_analysis.png";
import keyFindingsImg from "../../../assets/images/wtbooks/key_findings.png";
import lofiLineImg from "../../../assets/images/wtbooks/lofi-vector-line.png";
import lofiWire1 from "../../../assets/images/wtbooks/lofi-wireframe1.png";
import lofiWire2 from "../../../assets/images/wtbooks/lofi-wireframe2.png";
import lofiWire3 from "../../../assets/images/wtbooks/lofi-wireframe3.png";

export function GTColorMixerCaseStudy({ project }: { project: Project }) {
  const primaryColor = "#5E6AD2"; // Main brand accent for GT Colour Mixing
  const accentRed = "#CF4A25"; // Orange/red used for font labels from original theme

  return (
    <div className="bg-[#F1ECE2] dark:bg-background w-full min-h-screen text-[#5E5E5E] dark:text-muted-foreground font-['Jost'] pb-32 pt-24">
      {/* 1. Hero Banner */}
      <section className="px-5 mx-auto max-w-[1920px]">
        <div className="relative w-full h-[600px] lg:h-[800px] rounded-[10px] overflow-hidden flex flex-col items-center justify-center bg-black">
          <ImageWithFallback 
            src={bannerImg} 
            alt="GT Colour Mixing Banner" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          
          <Reveal>
            <h1 className="font-['Jost'] font-extrabold text-[clamp(60px,12vw,200px)] leading-none text-center uppercase text-white relative z-10 tracking-tight drop-shadow-[0px_4px_20px_rgba(0,0,0,0.5)]">
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="absolute top-[55px] left-1/2 -translate-x-1/2 z-10">
            <div className="bg-black/30 rounded-full px-8 py-2.5 backdrop-blur-md z-10 border border-white/20">
              <span className="text-white text-[18px] whitespace-nowrap">
                {project.category} · {project.tags.join(" · ")}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="absolute left-[30px] bottom-[30px] z-10">
            <div className="bg-black/30 rounded-full px-8 py-4 backdrop-blur-md z-10 border border-white/20">
              <span className="text-white font-semibold text-[22px]">
                Virtual Paint Mixing
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Constraints Wrapper for remaining content */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-0">
        
        {/* 2. Project Overview */}
        <section className="mt-32">
          <Reveal>
            <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight mb-6 text-[#CF4A25]">
              Project Overview
            </h2>
            <p className="text-[22px] leading-[32px] max-w-[1400px]">
              {project.overview}
            </p>
          </Reveal>
        </section>

        {/* 3. Problem Statement */}
        <section className="mt-32">
          <Reveal>
            <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight mb-6 text-[#CF4A25]">
              Problem Statement
            </h2>
            <p className="text-[22px] leading-[32px] mb-16 text-[#5E5E5E] dark:text-muted-foreground">
              Beginner artists don't know what colours to mix to reach a target shade. Colour theory in practice is unintuitive without experience, leaving new artists guessing.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Card 1 */}
            <Reveal delay={0.1}>
              <div className="relative pt-6 pl-6 h-full">
                <div className="absolute inset-0 bg-[#CF4A25]/75 rounded-[15px] z-0 -translate-x-3 -translate-y-3"></div>
                <div className="relative bg-[#FAFCFF] dark:bg-card rounded-[15px] p-8 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] z-10 h-full">
                  <h3 className="font-['Jost'] font-medium text-[20px] text-[#CF4A25] mb-4">Wasted Materials</h3>
                  <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                    Trial-and-error mixing wastes real materials. Every failed attempt at a target colour uses up actual paint that can't be recovered.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal delay={0.2}>
              <div className="relative pt-6 pl-6 h-full">
                <div className="absolute inset-0 bg-[#CF4A25]/30 rounded-[15px] z-0 -translate-x-3 -translate-y-3"></div>
                <div className="relative bg-[#FAFCFF] dark:bg-card rounded-[15px] p-8 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] z-10 h-full">
                  <h3 className="font-['Jost'] font-medium text-[20px] text-[#CF4A25] mb-4">Restricted Libraries</h3>
                  <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                    Existing colour-mixing apps restrict users to preset colour libraries. Artists can't enter or use the specific paint colours they actually own.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal delay={0.3}>
              <div className="relative pt-6 pl-6 h-full">
                <div className="absolute inset-0 bg-[#CF4A25]/50 rounded-[15px] z-0 -translate-x-3 -translate-y-3"></div>
                <div className="relative bg-[#FAFCFF] dark:bg-card rounded-[15px] p-8 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] z-10 h-full">
                  <h3 className="font-['Jost'] font-medium text-[20px] text-[#CF4A25] mb-4">No Real-World Capture</h3>
                  <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                    No reliable way to capture a real-world reference colour. Artists working from a photo, object, or physical swatch have no accurate way to pull that exact colour into a mixing tool.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 4 */}
            <Reveal delay={0.4}>
              <div className="relative pt-6 pl-6 h-full">
                <div className="absolute inset-0 bg-[#CF4A25]/20 rounded-[15px] z-0 -translate-x-3 -translate-y-3"></div>
                <div className="relative bg-[#FAFCFF] dark:bg-card rounded-[15px] p-8 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] z-10 h-full">
                  <h3 className="font-['Jost'] font-medium text-[20px] text-[#CF4A25] mb-4">Lack of Intuition</h3>
                  <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                    Colour theory in practice is unintuitive without experience. Users need to understand colour relationships as they mix, not just get an end result.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 4. Competitive Analysis */}
        <section className="mt-32">
          <Reveal>
            <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight mb-6 text-[#CF4A25]">
              Competitive Analysis
            </h2>
            <p className="text-[22px] leading-[32px] mb-16 text-[#5E5E5E] dark:text-muted-foreground">
              Benchmarked against existing digital colour-mixing tools, including Real Color Mixer, ColorMixer, and Golden Artist Colors' virtual mixer — reviewed via their feature sets and app store/user review feedback.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="w-full bg-[#F6F9FF] dark:bg-card border border-[#DDE8FF] dark:border-border rounded-[30px] overflow-hidden flex flex-col">
              {/* Header Row */}
              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr_2fr] bg-[#FFF8EA] dark:bg-muted border-b border-[#DDE8FF] dark:border-border">
                <div className="hidden md:block"></div>
                <div className="flex items-center justify-center gap-4 py-8 border-b md:border-b-0 md:border-r border-[#DDE8FF] dark:border-border">
                  <ImageWithFallback src={cashbookImg} alt="Competitor Apps" className="w-[50px] h-[50px] object-contain" />
                  <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">Competitor Apps</span>
                </div>
                <div className="flex items-center justify-center gap-4 py-8">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5E6AD2] to-[#001742] rounded-[5px]"></div>
                    <ImageWithFallback src={wtbooksCompetitiveImg} alt="GT Colour Mixing" className="w-[50px] h-[50px] object-contain relative z-10" />
                  </div>
                  <span className="font-['Jost'] font-bold text-[22px] text-[#CF4A25]">GT Colour Mixing</span>
                </div>
              </div>

              {/* Rows */}
              {[
                {
                  label: "Colour input method",
                  cashbook: "Fixed, predefined colour libraries only",
                  wtbooks: "Predefined palette + colour wheel + colour scale + image colour picker",
                  bg: "bg-[#FFF0EB] dark:bg-muted/50",
                },
                {
                  label: "Own-paint entry",
                  cashbook: "Not supported",
                  wtbooks: "Users can enter/save colours they personally own",
                  bg: "bg-[#FFF0EB] dark:bg-muted/20",
                },
                {
                  label: "Real-world colour capture",
                  cashbook: "Frequently requested, not offered",
                  wtbooks: "Built-in image-based colour extraction",
                  bg: "bg-[#FFF0EB] dark:bg-muted/50",
                },
                {
                  label: "Organisation",
                  cashbook: "Flat mixing history",
                  wtbooks: 'Mixes and favourites grouped by project ("Work")',
                  bg: "bg-[#FFF0EB] dark:bg-muted/20",
                },
              ].map((row, idx) => (
                <div key={idx} className={`grid grid-cols-1 md:grid-cols-[1.5fr_2fr_2fr] border-b border-[#DDE8FF] dark:border-border last:border-b-0 ${row.bg}`}>
                  <div className="py-6 px-10 flex items-center">
                    <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">{row.label}</span>
                  </div>
                  <div className="py-6 px-10 flex items-center md:border-r border-[#DDE8FF] dark:border-border">
                    <span className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground">{row.cashbook}</span>
                  </div>
                  <div className="py-6 px-10 flex items-center">
                    <span className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground">{row.wtbooks}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* 5. Key Findings */}
        <section className="mt-32">
          <Reveal>
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <div className="w-full lg:w-1/2 flex justify-center">
                <ImageWithFallback 
                  src={keyFindingsImg} 
                  alt="Key Findings" 
                  className="w-full max-w-[564px] h-auto object-contain drop-shadow-2xl rounded-3xl"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-8">
                <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight text-[#CF4A25]">
                  Key Findings
                </h2>
                <div className="flex flex-col gap-6 font-['Jost'] font-normal text-[22px] leading-[32px] text-[#5E5E5E] dark:text-muted-foreground">
                  <p>
                    <strong>The core problem is widespread</strong> - beginner and hobbyist artists reliably struggle to translate a target colour into a mixing ratio, regardless of which existing app they use.
                  </p>
                  <p>
                    <strong>Fixed colour libraries are the dominant limitation</strong> - across every competitor reviewed, with no app in the category allowing free entry of a user's own real-world paint colours.
                  </p>
                  <p>
                    <strong>Image-based colour picking is a validated, unmet demand</strong> - a recurring "wish list" request in user reviews, not yet solved by any major competitor.
                  </p>
                  <p>
                    <strong>Artists think about colour differently</strong> - some by named palette, some relationally (wheel), some by fine-tuning within a hue (scale) — no single input method serves everyone equally well.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 6. User Personas */}
        <section className="mt-48">
          <Reveal>
            <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight mb-16 text-[#CF4A25]">
              User Personas
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Persona 1 */}
            <Reveal delay={0.1}>
              <div className="bg-[#F6F9FF] dark:bg-card border border-[#DDE8FF] dark:border-border rounded-[30px] p-10 h-full flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#CF4A25]/5 rounded-bl-[100px]"></div>
                <div className="flex flex-col xl:flex-row items-center gap-4 z-10 relative">
                  <img src={person1Img} alt="Persona 1" className="w-[190px] h-[190px] object-contain shrink-0" />
                  <img src={vectorLine} alt="vector line" style={{ width: '142px', height: '85.873px' }} className="shrink-0 hidden xl:block" />
                  <div>
                  <h3 className="font-['Caveat_Brush',cursive] text-[52px] leading-tight text-[#CF4A25]">
                    Priya, Beginner Hobbyist Painter
                  </h3>
                </div>
                </div>
                <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                  <strong>24 years old</strong>, recently picked up watercolour and acrylic painting as a creative outlet.
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <div>
                    <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">Needs:</span>
                    <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">Confidently know what to mix before committing paint to the palette. Uses her phone constantly while painting for reference.</p>
                  </div>
                  <div>
                    <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">Frustration:</span>
                    <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px] italic">"I frequently see a colour I want to reproduce, but don't know the mixing ratio to get there. I've wasted paint experimenting blindly."</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Persona 2 */}
            <Reveal delay={0.2}>
              <div className="bg-[#F6F9FF] dark:bg-card border border-[#DDE8FF] dark:border-border rounded-[30px] p-10 h-full flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#5E6AD2]/5 rounded-bl-[100px]"></div>
                <div className="flex flex-col xl:flex-row items-center gap-4 z-10 relative">
                  <img src={person2Img} alt="Persona 2" className="w-[190px] h-[190px] object-contain shrink-0" />
                  <img src={vectorLine} alt="vector line" style={{ width: '142px', height: '85.873px' }} className="shrink-0 hidden xl:block" />
                  <div>
                  <h3 className="font-['Caveat_Brush',cursive] text-[52px] leading-tight text-[#CF4A25]">
                    Rohan, Art Student
                  </h3>
                </div>
                </div>
                <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                  <strong>20 years old</strong>, studying fine arts, building formal colour theory knowledge.
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <div>
                    <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">Needs:</span>
                    <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">Experiment freely with actual paint colours and build intuition for colour relationships over time.</p>
                  </div>
                  <div>
                    <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">Frustration:</span>
                    <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px] italic">"I own a specific set of paint tubes and want to work within that real palette, not a generic app library."</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 7. User Flow */}
        <section className="mt-48 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            <Reveal>
              <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight text-[#CF4A25]">
                User Flow
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-['Jost'] font-normal text-[22px] text-[#5E5E5E] dark:text-muted-foreground leading-[34px]">
                <strong>Core loop:</strong> Pick Colour (palette / wheel / scale / image) &rarr; Set Ratio &rarr; Preview Result &rarr; Save / Favourite
                <br /><br />
                <strong>Full app structure:</strong> Home &rarr; My Work (project list) &rarr; Work Detail &rarr; My Palette &rarr; Colour Palette &rarr; Mixing Canvas &rarr; Result &rarr; Save Mix
                <br /><br />
                Grouping saved mixes under individual "Work" projects — rather than one flat history — mirrors how artists actually think about their practice: colour discoveries belong to a specific piece, not a generic log.
              </p>
            </Reveal>
          </div>
          <div className="w-full lg:w-[55%] flex justify-center">
            <Reveal delay={0.2}>
              <ImageWithFallback 
                src={userFlowImg} 
                alt="User Flow Diagram" 
                className="w-full h-auto drop-shadow-2xl rounded-3xl"
              />
            </Reveal>
          </div>
        </section>

                {/* 8. Low Fidelity */}
        <LowFidelitySection 
          description="Three core low-fidelity screens established the foundation before visual design began:"
          steps={[
            {
              title: "Colour Palette",
              description: "Predefined swatch grid as the default view, with an Advanced tab housing the colour picker, colour wheel, and image extraction — establishing multiple entry points into the same next step.",
              uiType: "discovery"
            },
            {
              title: "Mixing Canvas",
              description: "The central interaction screen: selected colours shown side by side, a ratio control between them, and a live preview of the resulting mix — kept to a single uncluttered view to keep focus on the result.",
              uiType: "add"
            },
            {
              title: "My Work / Work Detail",
              description: "A project-based list structure, establishing early that saved colours would be scoped to individual pieces rather than one global history.",
              uiType: "detail"
            }
          ]}
        />

        {/* 9. Design System */}
        <section className="mt-48">
          <Reveal>
            <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight mb-6 text-[#CF4A25]">
              Design System
            </h2>
            <p className="text-[20px] leading-[30px] mb-16 max-w-4xl text-[#5E5E5E] dark:text-muted-foreground">
              The UI stays deliberately minimal and neutral — any strong colour, texture, or visual noise in the chrome would bias perception of the mixed result itself.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-16 items-start">
              
              {/* Colors from user's provided GT theme */}
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <div className="w-full max-w-[688px] h-[80px] rounded-[15px] bg-[#F5F5F7] border border-[#E5E5EA]"></div>
                  <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#F5F5F7 (Background)</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-full max-w-[569px] h-[80px] rounded-[15px] bg-[#FFFFFF] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] border border-[#E5E5EA]"></div>
                  <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#FFFFFF (Surface)</span>
                </div>
                
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
                    <div className="w-full max-w-[402px] h-[80px] rounded-[15px] bg-[#1D1D1F] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)]"></div>
                    <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#1D1D1F (Primary Text)</span>
                  </div>
                  <div className="flex flex-col gap-2 w-[255px] shrink-0">
                    <div className="w-full h-[80px] rounded-[15px] bg-[#5E6AD2]"></div>
                    <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#5E6AD2 (Accent)</span>
                  </div>
                </div>
              </div>

              {/* Typography */}
              <div className="flex flex-col gap-20 pt-4">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex flex-col items-center">
                    <span className="font-['Inter'] font-medium text-[110px] leading-[0.8] text-[#5E5E5E] dark:text-muted-foreground">Aa</span>
                    <span className="font-['Inter'] font-bold text-[18px] text-[#CF4A25] tracking-widest mt-4 uppercase">Inter</span>
                  </div>
                  <div className="flex flex-col font-['Inter'] font-normal text-[22px] leading-[44px] text-[#5E5E5E] dark:text-muted-foreground capitalize md:mt-2">
                    <span className="max-w-[463px]">Aa bb cc dd ee ff gg hh ii jj kk ll mm nn oo pp qq rr ss tt uu vv ww xx yy zz</span>
                    <span className="tracking-[0.4em] mt-2">0 1 2 3 4 5 6 7 8 9 ! @ # $ % ^ & * ( )</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 10. High Fidelity screens */}
        <section className="mt-48">
          <Reveal>
            <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight mb-12 text-[#CF4A25]">
              High-Fidelity Screens
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[screen1, screen2, screen3].map((img, i) => (
              <Reveal delay={i * 0.1} key={i}>
                <div className="w-full flex justify-center drop-shadow-xl hover:-translate-y-2 transition-transform duration-500">
                  <ImageWithFallback src={img} alt={`GT Colour Mixing Screen ${i + 1}`} className="w-full max-w-[400px] h-auto object-contain rounded-[30px]" />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
        
        {/* 11. Outcomes */}
        <section className="mt-48">
          <Reveal>
            <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight mb-12 text-[#CF4A25]">
              Outcomes
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="border-l-4 pl-6 py-2 border-[#CF4A25]">
                <div className="text-[18px] leading-[26px]">Solved the single biggest unmet need in the category — real-world and image-based colour entry.</div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="border-l-4 pl-6 py-2 border-[#CF4A25]">
                <div className="text-[18px] leading-[26px]">Delivered four flexible colour-entry paths rather than one rigid method.</div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="border-l-4 pl-6 py-2 border-[#CF4A25]">
                <div className="text-[18px] leading-[26px]">Introduced project-based colour organisation ("Work"-scoped saved mixes).</div>
              </div>
            </Reveal>
          </div>
        </section>

      </div>
    </div>
  );
}
