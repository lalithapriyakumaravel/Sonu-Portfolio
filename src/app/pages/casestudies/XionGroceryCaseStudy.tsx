import { motion } from "motion/react";
import { Reveal } from "../../components/ui/motion-primitives";
import vectorLine from "../../../assets/images/persona/vector_Line.png";
import { LowFidelitySection } from "../../components/ui/LowFidelitySection";
import { Project } from "../../data/projects";
import { ImageWithFallback } from "../../components/ui/ImageWithFallback";

// Import XION Mobile App images
import bannerImg from "../../../assets/images/Mobile App Images/XION/XION Banner Image.png";
import userFlowImg from "../../../assets/images/Mobile App Images/XION/XION - User Flow Diagram.png";
import person1Img from "../../../assets/images/Mobile App Images/XION/Sara - User Persona.png";
import person2Img from "../../../assets/images/Mobile App Images/XION/Faisal - User Persona.png";

// LoFi Screens
import lofiReviewOrder from "../../../assets/images/Mobile App Images/XION/Review Your Order - LoFi Screen.png";
import lofiWork from "../../../assets/images/Mobile App Images/XION/My Work - LoFi Screen.png";
import lofiProfile from "../../../assets/images/Mobile App Images/XION/Profile - LoFi Screen.png";

// HiFi Screens
import hifi1 from "../../../assets/images/Mobile App Images/XION/XION -HiFi Screen 01.png";
import hifi2 from "../../../assets/images/Mobile App Images/XION/XION -HiFi Screen 02.png";
import hifi3 from "../../../assets/images/Mobile App Images/XION/XION -HiFi Screen 03.png";
import hifi4 from "../../../assets/images/Mobile App Images/XION/XION -HiFi Screen 04.png";
import hifi5 from "../../../assets/images/Mobile App Images/XION/XION -HiFi Screen 05.png";
import hifi6 from "../../../assets/images/Mobile App Images/XION/XION -HiFi Screen 06.png";
import hifi7 from "../../../assets/images/Mobile App Images/XION/XION -HiFi Screen 07.png";

import cashbookImg from "../../../assets/images/wtbooks/cashbook_compettitve_analysis.png";
import wtbooksCompetitiveImg from "../../../assets/images/wtbooks/wtbooks_competitive_analysis.png";
import keyFindingsImg from "../../../assets/images/wtbooks/key_findings.png";

export function XionGroceryCaseStudy({ project }: { project: Project }) {
  const primaryColor = "#5EB547"; // Main brand accent for XION
  const accentRed = "#CF4A25"; // Orange/red used for font labels from original theme

  return (
    <div className="bg-[#F1ECE2] dark:bg-background w-full min-h-screen text-[#5E5E5E] dark:text-muted-foreground font-['Jost'] pb-32 pt-24">
      {/* 1. Hero Banner */}
      <section className="px-4 sm:px-6 mx-auto max-w-[1880px] mb-24 sm:mb-32 md:mb-40">
        <div className="relative w-full h-[520px] sm:h-[620px] md:h-[720px] lg:h-[800px] xl:h-[840px] rounded-[24px] md:rounded-[36px] bg-[#070B14] border border-white/10 shadow-2xl flex flex-col items-center">
          {/* Ambient Glows */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[24px] md:rounded-[36px]">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[900px] h-[450px] rounded-full bg-[#5EB547]/25 blur-[120px] opacity-70" />
            <div className="absolute -top-20 -left-20 w-[40vw] max-w-[500px] h-[400px] rounded-full bg-[#5EB547]/15 blur-[100px]" />
          </div>

          {/* Top Badge */}
          <Reveal delay={0.1} className="relative z-10 mt-6 sm:mt-8 md:mt-10">
            <div className="rounded-full border border-white/20 bg-white/10 px-5 sm:px-8 py-1.5 sm:py-2.5 backdrop-blur-md shadow-lg">
              <span className="font-['Jost'] text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-white/90">
                Mobile application · UX Research · Prototyping
              </span>
            </div>
          </Reveal>

          {/* Large Background Title (Behind Phone - iOS Wallpaper Depth Effect) */}
          <div className="absolute top-[15%] sm:top-[16%] md:top-[18%] inset-x-0 text-center z-10 select-none pointer-events-none px-4">
            <Reveal delay={0.15}>
              <h1 className="font-['Jost'] font-black text-[clamp(3.5rem,10.5vw,10.5rem)] leading-none uppercase text-white tracking-wider drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
                XION
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
                alt="XION Mockup" 
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
              Instant-delivery apps don't let users choose a delivery time. Dubai's quick-commerce apps prioritise speed (10–30 minute delivery) but give users no control over exactly when the order arrives — forcing them to be available and waiting whenever it shows up.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Card 1 */}
            <Reveal delay={0.1}>
              <div className="relative pt-6 pl-6 h-full">
                <div className="absolute inset-0 bg-[#CF4A25]/75 rounded-[15px] z-0 -translate-x-3 -translate-y-3"></div>
                <div className="relative bg-[#FAFCFF] dark:bg-card rounded-[15px] p-8 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] z-10 h-full">
                  <h3 className="font-['Jost'] font-medium text-[20px] text-[#CF4A25] mb-4">No Delivery Time Control</h3>
                  <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                    Instant-delivery apps don't let users choose a delivery time, giving users no control over exactly when the order arrives.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal delay={0.2}>
              <div className="relative pt-6 pl-6 h-full">
                <div className="absolute inset-0 bg-[#CF4A25]/30 rounded-[15px] z-0 -translate-x-3 -translate-y-3"></div>
                <div className="relative bg-[#FAFCFF] dark:bg-card rounded-[15px] p-8 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] z-10 h-full">
                  <h3 className="font-['Jost'] font-medium text-[20px] text-[#CF4A25] mb-4">Limited Product Range</h3>
                  <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                    Fast, dark-store-based apps typically stock a curated convenience range, not a full day-to-day grocery basket.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal delay={0.3}>
              <div className="relative pt-6 pl-6 h-full">
                <div className="absolute inset-0 bg-[#CF4A25]/50 rounded-[15px] z-0 -translate-x-3 -translate-y-3"></div>
                <div className="relative bg-[#FAFCFF] dark:bg-card rounded-[15px] p-8 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] z-10 h-full">
                  <h3 className="font-['Jost'] font-medium text-[20px] text-[#CF4A25] mb-4">Unreliable Windows</h3>
                  <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                    Even where a rough window is given, actual arrival time frequently doesn't match, disrupting users' plans around it.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 4 */}
            <Reveal delay={0.4}>
              <div className="relative pt-6 pl-6 h-full">
                <div className="absolute inset-0 bg-[#CF4A25]/20 rounded-[15px] z-0 -translate-x-3 -translate-y-3"></div>
                <div className="relative bg-[#FAFCFF] dark:bg-card rounded-[15px] p-8 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] z-10 h-full">
                  <h3 className="font-['Jost'] font-medium text-[20px] text-[#CF4A25] mb-4">Poor Stock Visibility</h3>
                  <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                    Users often don't find out an item is out of stock until after checkout, resulting in last-minute substitutions that undermine trust.
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
              Dubai's grocery delivery market splits into four distinct models, each with its own trade-off. No major player combines quick-commerce speed with full user control over delivery timing — apps are either fast with no scheduling flexibility, or scheduled but noticeably slower.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="w-full bg-[#F6F9FF] dark:bg-card border border-[#DDE8FF] dark:border-border rounded-[30px] overflow-hidden flex flex-col">
              {/* Header Row */}
              <div className="grid grid-cols-1 md:grid-cols-4 bg-[#FFF8EA] dark:bg-muted border-b border-[#DDE8FF] dark:border-border">
                <div className="flex items-center justify-center gap-4 py-8 border-b md:border-b-0 md:border-r border-[#DDE8FF] dark:border-border">
                  <span className="font-['Jost'] font-bold text-[18px] text-[#313131] dark:text-foreground">Model</span>
                </div>
                <div className="flex items-center justify-center gap-4 py-8 border-b md:border-b-0 md:border-r border-[#DDE8FF] dark:border-border">
                  <span className="font-['Jost'] font-bold text-[18px] text-[#313131] dark:text-foreground">Examples</span>
                </div>
                <div className="flex items-center justify-center gap-4 py-8 border-b md:border-b-0 md:border-r border-[#DDE8FF] dark:border-border">
                  <span className="font-['Jost'] font-bold text-[18px] text-[#313131] dark:text-foreground">Strength</span>
                </div>
                <div className="flex items-center justify-center gap-4 py-8">
                  <span className="font-['Jost'] font-bold text-[18px] text-[#313131] dark:text-foreground">Weakness</span>
                </div>
              </div>

              {/* Rows */}
              {[
                {
                  model: "Quick-commerce",
                  examples: "Careem NOW, Talabat Mart, Noon Minutes",
                  strength: "10–30 min delivery",
                  weakness: "No delivery-time choice; curated, limited range",
                  bg: "bg-[#FFF0EB] dark:bg-muted/50",
                },
                {
                  model: "Supermarket own-apps",
                  examples: "Carrefour, Lulu, Spinneys",
                  strength: "Full catalogue",
                  weakness: "Slower express (~1hr) or scheduled slot only",
                  bg: "bg-[#FFF0EB] dark:bg-muted/20",
                },
                {
                  model: "Marketplace aggregators",
                  examples: "InstaShop, El Grocer",
                  strength: "Store choice/variety",
                  weakness: "Markup on prices, picker-dependent accuracy",
                  bg: "bg-[#FFF0EB] dark:bg-muted/50",
                },
                {
                  model: "Farm-fresh specialists",
                  examples: "Kibsons",
                  strength: "Quality, scheduled slots",
                  weakness: "Narrow category, next-day only",
                  bg: "bg-[#FFF0EB] dark:bg-muted/20",
                },
              ].map((row, idx) => (
                <div key={idx} className={`grid grid-cols-1 md:grid-cols-4 border-b border-[#DDE8FF] dark:border-border last:border-b-0 ${row.bg}`}>
                  <div className="py-6 px-10 flex items-center md:border-r border-[#DDE8FF] dark:border-border">
                    <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">{row.model}</span>
                  </div>
                  <div className="py-6 px-10 flex items-center md:border-r border-[#DDE8FF] dark:border-border">
                    <span className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground">{row.examples}</span>
                  </div>
                  <div className="py-6 px-10 flex items-center md:border-r border-[#DDE8FF] dark:border-border">
                    <span className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground">{row.strength}</span>
                  </div>
                  <div className="py-6 px-10 flex items-center">
                    <span className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground">{row.weakness}</span>
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
                    <strong>Speed and control are mutually exclusive</strong> - users who want fast delivery must give up choice of timing; users who want a specific slot accept slower service.
                  </p>
                  <p>
                    <strong>Convenience-range apps don't cover full needs</strong> - meaning many users juggle multiple apps depending on what they're buying.
                  </p>
                  <p>
                    <strong>Stock visibility is a trust issue</strong> - discovering an out-of-stock item post-checkout is a recurring friction point.
                  </p>
                  <p>
                    <strong>Scheduled delivery is a proven model</strong> - users are willing to plan ahead in exchange for predictability, if the rest of the experience is competitive.
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
                    Sara, Working Professional
                  </h3>
                </div>
                </div>
                <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                  <strong>29 years old</strong>, marketing manager in Dubai, unpredictable work schedule.
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <div>
                    <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">Needs:</span>
                    <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">Order groceries in the morning and know precisely when they'll arrive that evening. Values reliability over raw speed.</p>
                  </div>
                  <div>
                    <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">Frustration:</span>
                    <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px] italic">"I can't commit to being home for a delivery that arrives whenever — I need to know exactly when to expect it."</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Persona 2 */}
            <Reveal delay={0.2}>
              <div className="bg-[#F6F9FF] dark:bg-card border border-[#DDE8FF] dark:border-border rounded-[30px] p-10 h-full flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#5EB547]/5 rounded-bl-[100px]"></div>
                <div className="flex flex-col xl:flex-row items-center gap-4 z-10 relative">
                  <img src={person2Img} alt="Persona 2" className="w-[190px] h-[190px] object-contain shrink-0" />
                  <img src={vectorLine} alt="vector line" style={{ width: '142px', height: '85.873px' }} className="shrink-0 hidden xl:block" />
                  <div>
                  <h3 className="font-['Caveat_Brush',cursive] text-[52px] leading-tight text-[#CF4A25]">
                    Faisal, Parent
                  </h3>
                </div>
                </div>
                <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                  <strong>35 years old</strong>, manages weekly and top-up grocery shopping for his family.
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <div>
                    <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">Needs:</span>
                    <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">Order confidently, trust what's shown is what arrives, and pick a delivery time that fits around the family routine.</p>
                  </div>
                  <div>
                    <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">Frustration:</span>
                    <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px] italic">"I split shopping across multiple apps today — one for fast top-ups, another for full weekly stock."</p>
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
                <strong>Core loop:</strong> Browse Categories &rarr; Add to Cart &rarr; Review Order &rarr; Select Delivery Time &rarr; Checkout &rarr; Track Delivery
                <br /><br />
                <strong>Full app structure:</strong> Home &rarr; Product Listing &rarr; Cart &rarr; Delivery Time &rarr; Checkout &rarr; Order Tracking &rarr; Profile
                <br /><br />
                Delivery time selection is placed as a distinct, deliberate step in the flow — not a default or afterthought — reinforcing that user-chosen timing is the app's core differentiator, not a buried setting.
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
          description="Three core low-fidelity screens established the structural foundation before visual design began:"
          steps={[
            {
              title: "Home Screen",
              description: "Category-first browsing structure up top, with active offers/promotions surfaced early — designed for fast, familiar grocery-app scanning similar to Blinkit's category-grid pattern.",
              uiType: "discovery",
              image: lofiWork
            },
            {
              title: "Review Your Order Screen",
              description: "Cart contents grouped clearly, with delivery time selection surfaced directly on this screen (not a separate buried step) so users confirm both what and when together before checkout.",
              uiType: "detail",
              image: lofiReviewOrder
            },
            {
              title: "Profile Screen",
              description: "Order history, saved addresses, and delivery preferences consolidated in one place, supporting repeat users who reorder frequently.",
              uiType: "detail",
              image: lofiProfile
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
              A layered green palette is used to keep the "fresh grocery" association strong while still giving enough contrast range for hierarchy across CTAs, accents, and highlights.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-16 items-start">
              
              {/* Colors from user's provided XION theme */}
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <div className="w-full max-w-[688px] h-[80px] rounded-[15px] bg-[#F4F3ED] border border-[#E5E5EA]"></div>
                  <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#F4F3ED (App Background)</span>
                </div>
                
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
                    <div className="w-full max-w-[402px] h-[80px] rounded-[15px] bg-[#FFFFFF] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] border border-[#E5E5EA]"></div>
                    <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#FFFFFF (Surface)</span>
                  </div>
                  <div className="flex flex-col gap-2 w-[255px] shrink-0">
                    <div className="w-full h-[80px] rounded-[15px] bg-[#071709]"></div>
                    <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#071709 (Heading)</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col gap-2 flex-1 min-w-[150px]">
                    <div className="w-full h-[80px] rounded-[15px] bg-[#5EB547]"></div>
                    <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#5EB547 (Primary Green)</span>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-w-[150px]">
                    <div className="w-full h-[80px] rounded-[15px] bg-[#1A5C38]"></div>
                    <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#1A5C38 (Button Green)</span>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-w-[150px]">
                    <div className="w-full h-[80px] rounded-[15px] bg-[#B0DC41]"></div>
                    <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#B0DC41 (Cool Green)</span>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-w-[150px]">
                    <div className="w-full h-[80px] rounded-[15px] bg-[#3F9669]"></div>
                    <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#3F9669 (Subtle Green)</span>
                  </div>
                </div>

              </div>

              {/* Typography */}
              <div className="flex flex-col gap-16 pt-4">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex flex-col items-center">
                    <span className="font-['Involve'] font-medium text-[100px] leading-[0.8] text-[#5E5E5E] dark:text-muted-foreground">Aa</span>
                    <span className="font-['Involve'] font-bold text-[18px] text-[#CF4A25] tracking-widest mt-4 uppercase">Involve</span>
                  </div>
                  <div className="flex flex-col font-['Involve'] font-normal text-[22px] leading-[44px] text-[#5E5E5E] dark:text-muted-foreground capitalize md:mt-2">
                    <span className="max-w-[463px]">Aa bb cc dd ee ff gg hh ii jj kk ll mm nn oo pp qq rr ss tt uu vv ww xx yy zz</span>
                    <span className="tracking-[0.4em] mt-2">0 1 2 3 4 5 6 7 8 9</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex flex-col items-center">
                    <span className="font-['Inter'] font-medium text-[100px] leading-[0.8] text-[#5E5E5E] dark:text-muted-foreground">Aa</span>
                    <span className="font-['Inter'] font-bold text-[18px] text-[#CF4A25] tracking-widest mt-4 uppercase">Inter</span>
                  </div>
                  <div className="flex flex-col font-['Inter'] font-normal text-[22px] leading-[44px] text-[#5E5E5E] dark:text-muted-foreground capitalize md:mt-2">
                    <span className="max-w-[463px]">Aa bb cc dd ee ff gg hh ii jj kk ll mm nn oo pp qq rr ss tt uu vv ww xx yy zz</span>
                    <span className="tracking-[0.4em] mt-2">0 1 2 3 4 5 6 7 8 9</span>
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
                  <ImageWithFallback src={img} alt={`XION Screen ${i + 1}`} className="w-full h-auto object-contain rounded-[24px]" />
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
                  <strong className="text-[#313131] dark:text-foreground font-semibold">Closed a genuine gap in Dubai's grocery delivery market</strong> : combining quick-commerce-level speed with user-controlled delivery timing, a combination no major competitor in the category currently offers together.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[#FAFCFF] dark:bg-card border-l-4 border-[#CF4A25] p-8 rounded-r-2xl shadow-sm h-full flex flex-col justify-start">
                <span className="font-['Jost'] font-bold text-2xl text-[#CF4A25] mb-3">02</span>
                <p className="font-['Jost'] text-[18px] leading-[28px] text-[#5E5E5E] dark:text-muted-foreground">
                  <strong className="text-[#313131] dark:text-foreground font-semibold">Delivery time selection built as a core flow step, not a buried setting</strong> : positioned directly within the order review process, reinforcing it as the product's defining differentiator rather than an optional extra.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-[#FAFCFF] dark:bg-card border-l-4 border-[#CF4A25] p-8 rounded-r-2xl shadow-sm h-full flex flex-col justify-start">
                <span className="font-['Jost'] font-bold text-2xl text-[#CF4A25] mb-3">03</span>
                <p className="font-['Jost'] text-[18px] leading-[28px] text-[#5E5E5E] dark:text-muted-foreground">
                  <strong className="text-[#313131] dark:text-foreground font-semibold">Designed to serve both planned and top-up shopping in one app</strong> : addressing the common pattern of users splitting their grocery needs across multiple apps today, by supporting full daily range alongside fast, flexible delivery.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

      </div>
    </div>
  );
}
