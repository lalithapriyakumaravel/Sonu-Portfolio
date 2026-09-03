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
import keyFindingsImg from "../../../assets/images/wtbooks/key_findings.png";
import lofiLineImg from "../../../assets/images/wtbooks/lofi-vector-line.png";
import lofiWire1 from "../../../assets/images/wtbooks/lofi-wireframe1.png";
import lofiWire2 from "../../../assets/images/wtbooks/lofi-wireframe2.png";
import lofiWire3 from "../../../assets/images/wtbooks/lofi-wireframe3.png";

export function NatureCandyCaseStudy({ project }: { project: Project }) {
  const primaryColor = "#A22F74"; // Primary Purple for Nature Candy
  const accentRed = "#CF4A25"; // Retained for structural styling consistency

  return (
    <div className="bg-[#F1ECE2] dark:bg-background w-full min-h-screen text-[#5E5E5E] dark:text-muted-foreground font-['Jost'] pb-32 pt-24">
      {/* 1. Hero Banner */}
      <section className="px-5 mx-auto max-w-[1920px]">
        <div className="relative w-full h-[600px] lg:h-[800px] rounded-[10px] overflow-hidden flex flex-col items-center justify-center bg-black">
          <ImageWithFallback 
            src={bannerImg} 
            alt="Nature Candy Banner" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          
          <Reveal>
            <h1 className="font-['Jost'] font-extrabold text-[clamp(40px,8vw,160px)] leading-none text-center uppercase text-white relative z-10 tracking-tight drop-shadow-[0px_4px_20px_rgba(0,0,0,0.5)]">
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
                Naturally sweet. Ready in bulk.
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
              B2B purchasing for confectionery has traditionally relied on phone calls, spreadsheets, and sales reps. Key pain points included:
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <Reveal delay={0.1}>
              <div className="relative pt-6 pl-6">
                <div className="absolute inset-0 bg-[#CF4A25]/75 rounded-[15px] z-0 -translate-x-3 -translate-y-3"></div>
                <div className="relative bg-[#FAFCFF] dark:bg-card rounded-[15px] p-8 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] z-10 h-full">
                  <h3 className="font-['Jost'] font-medium text-[20px] text-[#CF4A25] mb-4">Manual ordering</h3>
                  <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                    Bulk/wholesale buying in this category is still largely phone- and spreadsheet-driven rather than fast, self-service digital ordering.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative pt-6 pl-6">
                <div className="absolute inset-0 bg-[#CF4A25]/30 rounded-[15px] z-0 -translate-x-3 -translate-y-3"></div>
                <div className="relative bg-[#FAFCFF] dark:bg-card rounded-[15px] p-8 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] z-10 h-full">
                  <h3 className="font-['Jost'] font-medium text-[20px] text-[#CF4A25] mb-4">Missing packaging detail</h3>
                  <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                    Bulk buyers need packaging/carton sizes, certifications, and consistent product specifications before committing to an order, not just a retail photo.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="relative pt-6 pl-6">
                <div className="absolute inset-0 bg-[#CF4A25]/50 rounded-[15px] z-0 -translate-x-3 -translate-y-3"></div>
                <div className="relative bg-[#FAFCFF] dark:bg-card rounded-[15px] p-8 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] z-10 h-full">
                  <h3 className="font-['Jost'] font-medium text-[20px] text-[#CF4A25] mb-4">No bulk selection</h3>
                  <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                    Many candy and sweets e-commerce sites are built around single-unit retail purchases, forcing bulk buyers to contact support separately.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="relative pt-6 pl-6">
                <div className="absolute inset-0 bg-[#CF4A25]/20 rounded-[15px] z-0 -translate-x-3 -translate-y-3"></div>
                <div className="relative bg-[#FAFCFF] dark:bg-card rounded-[15px] p-8 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] z-10 h-full">
                  <h3 className="font-['Jost'] font-medium text-[20px] text-[#CF4A25] mb-4">Lack of trust signals</h3>
                  <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                    Trust and certification signals matter more for bulk buyers. Purely consumer-oriented storefronts don't typically surface these clearly.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 4. Competitive Analysis */}
        <section className="mt-32">
          <Reveal>
            <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight mb-16 text-[#CF4A25]">
              Competitive Analysis
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="w-full bg-[#F6F9FF] dark:bg-card border border-[#DDE8FF] dark:border-border rounded-[30px] overflow-hidden flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr_2fr] bg-[#FFF8EA] dark:bg-muted border-b border-[#DDE8FF] dark:border-border">
                <div className="hidden md:block"></div>
                <div className="flex items-center justify-center gap-4 py-8 border-b md:border-b-0 md:border-r border-[#DDE8FF] dark:border-border">
                  <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">Consumer candy e-commerce</span>
                </div>
                <div className="flex items-center justify-center gap-4 py-8">
                  <span className="font-['Jost'] font-bold text-[22px] text-[#CF4A25]">Nature Candy</span>
                </div>
              </div>

              {[
                {
                  label: "Order quantity",
                  competitor: "Single-unit focused",
                  ours: "Bulk ordering built into the standard product flow",
                  bg: "bg-[#FFF0EB] dark:bg-muted/50",
                },
                {
                  label: "Pricing model",
                  competitor: "Flat retail price",
                  ours: "Clear bulk-friendly pricing presentation",
                  bg: "bg-[#FFF0EB] dark:bg-muted/20",
                },
                {
                  label: "Product detail depth",
                  competitor: "Photo + short description",
                  ours: "Full product and packaging detail per item",
                  bg: "bg-[#FFF0EB] dark:bg-muted/50",
                },
                {
                  label: "Ordering process",
                  competitor: "Instant checkout",
                  ours: "Fully online, self-service bulk ordering",
                  bg: "bg-[#FFF0EB] dark:bg-muted/20",
                },
              ].map((row, idx) => (
                <div key={idx} className={`grid grid-cols-1 md:grid-cols-[1.5fr_2fr_2fr] border-b border-[#DDE8FF] dark:border-border last:border-b-0 ${row.bg}`}>
                  <div className="py-6 px-10 flex items-center">
                    <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">{row.label}</span>
                  </div>
                  <div className="py-6 px-10 flex items-center md:border-r border-[#DDE8FF] dark:border-border">
                    <span className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground">{row.competitor}</span>
                  </div>
                  <div className="py-6 px-10 flex items-center">
                    <span className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground font-medium">{row.ours}</span>
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
                    <strong>B2B confectionery purchasing in the UAE is still commonly manual</strong>, highlighting a clear gap for a modern, self-service bulk ordering experience.
                  </p>
                  <p>
                    <strong>Buyers evaluating bulk suppliers want visibility into packaging and carton details up front</strong>, not just a headline product price.
                  </p>
                  <p>
                    <strong>Certifications and quality assurance are decision-relevant for bulk buyers</strong> given halal certification and food safety standards are baseline requirements.
                  </p>
                  <p>
                    <strong>Demand for bulk confectionery purchasing has grown significantly</strong>, reinforcing that a smooth bulk-ordering path has real commercial relevance.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 6. User Personas */}
        <section className="mt-32">
          <Reveal>
            <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight mb-16 text-[#CF4A25]">
              User Personas
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal delay={0.1}>
              <div className="bg-[#F6F9FF] dark:bg-card border border-[#DDE8FF] dark:border-border rounded-[30px] p-10 h-full flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#CF4A25]/5 rounded-bl-[100px]"></div>
                <div className="flex flex-col xl:flex-row items-center gap-4 z-10 relative">
                  <img src={person1Img} alt="Persona 1" className="w-[190px] h-[190px] object-contain shrink-0" />
                  <img src={vectorLine} alt="vector line" style={{ width: '142px', height: '85.873px' }} className="shrink-0 hidden xl:block" />
                  <div>
                  <h3 className="font-['Caveat_Brush',cursive] text-[52px] leading-tight text-[#CF4A25]">
                    Fatima, Gifting Coordinator
                  </h3>
                </div>
                </div>
                <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                  <strong>33 years old</strong>, sources premium date sweets for corporate gifts and events.
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <div>
                    <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">Needs:</span>
                    <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">Orders in bulk for recurring events. Wants to see clear packaging options and quantities available.</p>
                  </div>
                  <div>
                    <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">Goal:</span>
                    <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">Browse the product range, configure a bulk order confidently, and check out without needing a phone call.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[#F6F9FF] dark:bg-card border border-[#DDE8FF] dark:border-border rounded-[30px] p-10 h-full flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#457FED]/5 rounded-bl-[100px]"></div>
                <div className="flex flex-col xl:flex-row items-center gap-4 z-10 relative">
                  <img src={person2Img} alt="Persona 2" className="w-[190px] h-[190px] object-contain shrink-0" />
                  <img src={vectorLine} alt="vector line" style={{ width: '142px', height: '85.873px' }} className="shrink-0 hidden xl:block" />
                  <div>
                  <h3 className="font-['Caveat_Brush',cursive] text-[52px] leading-tight text-[#CF4A25]">
                    Yousef, Retail Shop Owner
                  </h3>
                </div>
                </div>
                <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                  <strong>40 years old</strong>, stocks specialty sweets and dates for his shop.
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <div>
                    <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">Needs:</span>
                    <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">Reorders regularly and wants a fast, repeatable process. Needs visibility into packaging/carton sizes to plan shelf space.</p>
                  </div>
                  <div>
                    <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">Goal:</span>
                    <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">Quickly reorder trusted products in bulk, with clear packaging and pricing information available upfront.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 7. User Flow */}
        <section className="mt-32">
          <Reveal>
            <h2 className="font-['Fraunces'] font-semibold text-[40px] leading-tight mb-16 text-[#CF4A25]">
              User Flow
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="w-full flex justify-center bg-white dark:bg-card rounded-3xl p-8 drop-shadow-sm">
              <ImageWithFallback 
                src={userFlowImg} 
                alt="User Flow Diagram" 
                className="w-full max-w-[1200px] h-auto object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-4 mt-8 font-['Jost'] text-[#5E5E5E] dark:text-muted-foreground text-[20px]">
              <p>Browse Products → View Product Details (packaging, quantities) → Select Bulk Quantity → Add to Order → Checkout</p>
            </div>
          </Reveal>
        </section>

                {/* 8. Low Fidelity */}
        <LowFidelitySection 
          description="Core low-fidelity screens established the structural foundation:"
          steps={[
            {
              title: "Products",
              description: "A browsable, categorised product range, giving both casual and bulk buyers a clear entry point.",
              uiType: "discovery"
            },
            {
              title: "Product Detail",
              description: "Full specifications, packaging details, and a bulk quantity selector on the same page.",
              uiType: "detail"
            },
            {
              title: "Checkout / Summary",
              description: "A clear bulk order summary before payment, giving buyers confidence in exactly what they're committing to at scale.",
              uiType: "catalog"
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
              Warm and natural, reflecting the product itself — date-based confectionery with an inviting, appetite-driven presentation.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-16 items-start">
              
              {/* Colors */}
              <div className="flex flex-col gap-10">
                {/* Primary Purple & Accent */}
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
                    <div className="w-full max-w-[402px] h-[80px] rounded-[15px] bg-[#A22F74]"></div>
                    <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#A22F74 - Primary Purple</span>
                  </div>
                  <div className="flex flex-col gap-2 w-[255px] shrink-0">
                    <div className="w-full h-[80px] rounded-[15px] bg-[#DFE55F]"></div>
                    <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#DFE55F - Accent</span>
                  </div>
                </div>

                {/* Lemon Yellow & Green */}
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
                    <div className="w-full max-w-[402px] h-[80px] rounded-[15px] bg-[#FFEB3B]"></div>
                    <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#FFEB3B - Lemon Yellow</span>
                  </div>
                  <div className="flex flex-col gap-2 w-[255px] shrink-0">
                    <div className="w-full h-[80px] rounded-[15px] bg-[#4CAF50]"></div>
                    <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#4CAF50 - Green</span>
                  </div>
                </div>

                {/* Cream */}
                <div className="flex flex-col gap-2">
                  <div className="w-full max-w-[688px] h-[80px] rounded-[15px] bg-[#FFFDE7] border border-[#E5E5E5]"></div>
                  <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#FFFDE7 - Cream</span>
                </div>
              </div>

              {/* Typography */}
              <div className="flex flex-col gap-20 pt-4">
                {/* Genty Demo */}
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex flex-col items-center">
                    <span className="font-['Genty_Demo'] font-medium text-[110px] leading-[0.8] text-[#5E5E5E] dark:text-muted-foreground" style={{fontFamily: 'Genty Demo, sans-serif'}}>Aa</span>
                    <span className="font-['Genty_Demo'] font-bold text-[18px] text-[#A22F74] tracking-widest mt-4 uppercase text-center w-full" style={{fontFamily: 'Genty Demo, sans-serif'}}>Genty Demo</span>
                  </div>
                  <div className="flex flex-col font-normal text-[22px] leading-[44px] text-[#5E5E5E] dark:text-muted-foreground capitalize md:mt-2" style={{fontFamily: 'Genty Demo, sans-serif'}}>
                    <span className="max-w-[463px]">Aa bb cc dd ee ff gg hh ii jj kk ll mm nn oo pp qq rr ss tt uu vv ww xx yy zz</span>
                    <span className="tracking-[0.4em] mt-2">0 1 2 3 4 5 6 7 8 9 ! @ # $ % ^ & * ( )</span>
                  </div>
                </div>

                {/* Montserrat */}
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex flex-col items-center">
                    <span className="font-['Montserrat'] font-medium text-[110px] leading-[0.8] text-[#5E5E5E] dark:text-muted-foreground" style={{fontFamily: 'Montserrat, sans-serif'}}>Aa</span>
                    <span className="font-['Montserrat'] font-bold text-[18px] text-[#A22F74] tracking-widest mt-4 uppercase text-center w-full" style={{fontFamily: 'Montserrat, sans-serif'}}>Montserrat</span>
                  </div>
                  <div className="flex flex-col font-normal text-[22px] leading-[44px] text-[#5E5E5E] dark:text-muted-foreground capitalize md:mt-2" style={{fontFamily: 'Montserrat, sans-serif'}}>
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
                  <ImageWithFallback src={img} alt={`Nature Candy Screen ${i + 1}`} className="w-full max-w-[400px] h-auto object-contain rounded-[30px]" />
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
            {project.metrics?.map((metric, i) => (
              <Reveal delay={i * 0.1} key={i}>
                <div className="border-l-4 pl-6 py-2 border-[#CF4A25]">
                  <div className="text-4xl font-bold mb-2 text-[#CF4A25]">{metric.value}</div>
                  <div className="text-[18px] leading-[26px]">{metric.label}.</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
