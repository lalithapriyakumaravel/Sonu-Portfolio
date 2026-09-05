import { motion } from "motion/react";
import { Reveal } from "../../components/ui/motion-primitives";
import vectorLine from "../../../assets/images/persona/vector_Line.png";
import { LowFidelitySection } from "../../components/ui/LowFidelitySection";
import { Project } from "../../data/projects";
import { ImageWithFallback } from "../../components/ui/ImageWithFallback";

// Import GT Color Mixer images
import bannerImg from "../../../assets/images/Mobile App Images/GT Color Mixer/GT Colour Mixer Banner Image.png";
import gtLogo from "../../../assets/images/Mobile App Images/GT Color Mixer/GT Colour Mixer Logo.png";
import userFlowImg from "../../../assets/images/Mobile App Images/GT Color Mixer/GT Color Mixer - User Flow Diagram.png";
import person1Img from "../../../assets/images/Mobile App Images/GT Color Mixer/Priya - User Persona.png";
import person2Img from "../../../assets/images/Mobile App Images/GT Color Mixer/Rohan - User Persona.png";

// LoFi Screens
import lofiPalette from "../../../assets/images/Mobile App Images/GT Color Mixer/Color Palette Screen - LoFi Screen.png";
import lofiMixing from "../../../assets/images/Mobile App Images/GT Color Mixer/Mixing Canvas Screen - LoFi Screen.png";
import lofiWork from "../../../assets/images/Mobile App Images/GT Color Mixer/My Work Screen - LoFi Screen.png";

// HiFi Screens
import hifi1 from "../../../assets/images/Mobile App Images/GT Color Mixer/GT Color Mixer - HiFi Screen 01.png";
import hifi2 from "../../../assets/images/Mobile App Images/GT Color Mixer/GT Color Mixer - HiFi Screen 02.png";
import hifi3 from "../../../assets/images/Mobile App Images/GT Color Mixer/GT Color Mixer - HiFi Screen 03.png";
import hifi4 from "../../../assets/images/Mobile App Images/GT Color Mixer/GT Color Mixer - HiFi Screen 04.png";
import hifi5 from "../../../assets/images/Mobile App Images/GT Color Mixer/GT Color Mixer - HiFi Screen 05.png";
import hifi6 from "../../../assets/images/Mobile App Images/GT Color Mixer/GT Color Mixer - HiFi Screen 06.png";
import hifi7 from "../../../assets/images/Mobile App Images/GT Color Mixer/GT Color Mixer - HiFi Screen 07.png";

import cashbookImg from "../../../assets/images/wtbooks/cashbook_compettitve_analysis.png";
import keyFindingsImg from "../../../assets/images/wtbooks/key_findings.png";

export function GTColorMixerCaseStudy({ project }: { project: Project }) {
  const primaryColor = "#5E6AD2"; // Main brand accent for GT Colour Mixing
  const accentRed = "#CF4A25"; // Orange/red used for font labels from original theme

  return (
    <div className="bg-[#F1ECE2] dark:bg-background w-full min-h-screen text-[#5E5E5E] dark:text-muted-foreground font-['Jost'] pb-32 pt-24">
      {/* 1. Hero Banner */}
      <section className="px-4 sm:px-6 mx-auto max-w-[1880px] mb-24 sm:mb-32 md:mb-40">
        <div className="relative w-full h-[520px] sm:h-[620px] md:h-[720px] lg:h-[800px] xl:h-[840px] rounded-[24px] md:rounded-[36px] bg-[#070B14] border border-white/10 shadow-2xl flex flex-col items-center">
          {/* Ambient Glows */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[24px] md:rounded-[36px]">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[900px] h-[450px] rounded-full bg-[#5E6AD2]/25 blur-[120px] opacity-70" />
            <div className="absolute -top-20 -left-20 w-[40vw] max-w-[500px] h-[400px] rounded-full bg-[#5E6AD2]/15 blur-[100px]" />
          </div>

          {/* Top Badge */}
          <Reveal delay={0.1} className="relative z-10 mt-6 sm:mt-8 md:mt-10">
            <div className="rounded-full border border-white/20 bg-white/10 px-5 sm:px-8 py-1.5 sm:py-2.5 backdrop-blur-md shadow-lg">
              <span className="font-['Jost'] text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-white/90">
                Mobile application · Color Theory · Prototyping
              </span>
            </div>
          </Reveal>

          {/* Large Background Title (Behind Phone - iOS Wallpaper Depth Effect) */}
          <div className="absolute top-[15%] sm:top-[16%] md:top-[18%] inset-x-0 text-center z-10 select-none pointer-events-none px-4">
            <Reveal delay={0.15}>
              <h1 className="font-['Jost'] font-black text-[clamp(2.5rem,8.5vw,8.5rem)] leading-none uppercase text-white tracking-wider drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
                GT COLOUR MIXER
              </h1>
            </Reveal>
          </div>

          {/* Foreground Phone Overlay (Overlaying text like iOS lockscreen depth effect with extended height) */}
          <div className="absolute top-[23%] sm:top-[21%] md:top-[19%] inset-x-0 z-20 flex justify-center pointer-events-none px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[580px] sm:max-w-[780px] md:max-w-[980px] lg:max-w-[1180px] xl:max-w-[1240px] flex justify-center"
            >
              <img 
                src={bannerImg} 
                alt="GT Colour Mixer Mockup" 
                className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Constraints Wrapper for remaining content */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-0">
        
        {/* 2. Project Overview */}
        <section className="mt-20 sm:mt-24">
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
                    <ImageWithFallback src={gtLogo} alt="GT Colour Mixing" className="w-[50px] h-[50px] object-contain relative z-10 p-1" />
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
              uiType: "discovery",
              image: lofiPalette
            },
            {
              title: "Mixing Canvas",
              description: "The central interaction screen: selected colours shown side by side, a ratio control between them, and a live preview of the resulting mix — kept to a single uncluttered view to keep focus on the result.",
              uiType: "add",
              image: lofiMixing
            },
            {
              title: "My Work / Work Detail",
              description: "A project-based list structure, establishing early that saved colours would be scoped to individual pieces rather than one global history.",
              uiType: "detail",
              image: lofiWork
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
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[hifi1, hifi2, hifi3, hifi4, hifi5, hifi6, hifi7].map((img, i) => (
              <Reveal delay={i * 0.08} key={i}>
                <div className="w-full flex justify-center drop-shadow-xl hover:-translate-y-2 transition-transform duration-500">
                  <ImageWithFallback src={img} alt={`GT Colour Mixing Screen ${i + 1}`} className="w-full h-auto object-contain rounded-[24px]" />
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
              <div className="bg-[#FAFCFF] dark:bg-card border-l-4 border-[#CF4A25] p-8 rounded-r-2xl shadow-sm h-full flex flex-col justify-start">
                <span className="font-['Jost'] font-bold text-2xl text-[#CF4A25] mb-3">01</span>
                <p className="font-['Jost'] text-[18px] leading-[28px] text-[#5E5E5E] dark:text-muted-foreground">
                  <strong className="text-[#313131] dark:text-foreground font-semibold">Solved the single biggest unmet need in the category</strong> : real-world and image-based colour entry, validated as a widespread, unresolved request across every competitor reviewed.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[#FAFCFF] dark:bg-card border-l-4 border-[#CF4A25] p-8 rounded-r-2xl shadow-sm h-full flex flex-col justify-start">
                <span className="font-['Jost'] font-bold text-2xl text-[#CF4A25] mb-3">02</span>
                <p className="font-['Jost'] text-[18px] leading-[28px] text-[#5E5E5E] dark:text-muted-foreground">
                  <strong className="text-[#313131] dark:text-foreground font-semibold">Delivered four flexible colour-entry paths</strong> : Rather than one rigid method, directly reflecting how differently individual artists approach colour.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-[#FAFCFF] dark:bg-card border-l-4 border-[#CF4A25] p-8 rounded-r-2xl shadow-sm h-full flex flex-col justify-start">
                <span className="font-['Jost'] font-bold text-2xl text-[#CF4A25] mb-3">03</span>
                <p className="font-['Jost'] text-[18px] leading-[28px] text-[#5E5E5E] dark:text-muted-foreground">
                  <strong className="text-[#313131] dark:text-foreground font-semibold">Introduced project-based colour organisation</strong> : ("Work"-scoped saved mixes and favourites), giving the tool long-term value as an artist's personal colour library grows across multiple pieces.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

      </div>
    </div>
  );
}
