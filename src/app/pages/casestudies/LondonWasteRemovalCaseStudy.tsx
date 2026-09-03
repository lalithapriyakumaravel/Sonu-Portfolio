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

export function LondonWasteRemovalCaseStudy({ project }: { project: Project }) {
  const primaryColor = "#4E7B39"; // Primary Green for London Waste Removal
  const accentRed = "#CF4A25"; // Retained for structural styling consistency

  return (
    <div className="bg-[#F1ECE2] dark:bg-background w-full min-h-screen text-[#5E5E5E] dark:text-muted-foreground font-['Jost'] pb-32 pt-24">
      {/* 1. Hero Banner */}
      <section className="px-5 mx-auto max-w-[1920px]">
        <div className="relative w-full h-[600px] lg:h-[800px] rounded-[10px] overflow-hidden flex flex-col items-center justify-center bg-black">
          <ImageWithFallback 
            src={bannerImg} 
            alt="London Waste Removal Banner" 
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
                See the service. Know the price. Book it - all online.
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
              The waste removal industry heavily relies on phone-based quotes, causing friction for modern customers. Key issues included:
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <Reveal delay={0.1}>
              <div className="relative pt-6 pl-6">
                <div className="absolute inset-0 bg-[#CF4A25]/75 rounded-[15px] z-0 -translate-x-3 -translate-y-3"></div>
                <div className="relative bg-[#FAFCFF] dark:bg-card rounded-[15px] p-8 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] z-10 h-full">
                  <h3 className="font-['Jost'] font-medium text-[20px] text-[#CF4A25] mb-4">Phone-first friction</h3>
                  <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                    Many competitors still push users toward a phone call instead of self-service booking, adding friction for users who'd rather book in a few clicks.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative pt-6 pl-6">
                <div className="absolute inset-0 bg-[#CF4A25]/30 rounded-[15px] z-0 -translate-x-3 -translate-y-3"></div>
                <div className="relative bg-[#FAFCFF] dark:bg-card rounded-[15px] p-8 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] z-10 h-full">
                  <h3 className="font-['Jost'] font-medium text-[20px] text-[#CF4A25] mb-4">Pricing trust issues</h3>
                  <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                    Pricing transparency is a widespread trust issue. Frequent use of "no hidden charges" across the industry signals that unclear pricing is a recurring customer frustration.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="relative pt-6 pl-6">
                <div className="absolute inset-0 bg-[#CF4A25]/50 rounded-[15px] z-0 -translate-x-3 -translate-y-3"></div>
                <div className="relative bg-[#FAFCFF] dark:bg-card rounded-[15px] p-8 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] z-10 h-full">
                  <h3 className="font-['Jost'] font-medium text-[20px] text-[#CF4A25] mb-4">Unclear service inclusions</h3>
                  <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                    Waste removal spans very different jobs. Without clear service breakdowns upfront, users can't easily tell which service fits their exact need.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="relative pt-6 pl-6">
                <div className="absolute inset-0 bg-[#CF4A25]/20 rounded-[15px] z-0 -translate-x-3 -translate-y-3"></div>
                <div className="relative bg-[#FAFCFF] dark:bg-card rounded-[15px] p-8 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] z-10 h-full">
                  <h3 className="font-['Jost'] font-medium text-[20px] text-[#CF4A25] mb-4">No online slot selection</h3>
                  <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                    Despite marketing flexible slots or same-day availability, the actual selection process is often phone-mediated rather than a direct, visible online calendar.
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
                  <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">Typical competitors</span>
                </div>
                <div className="flex items-center justify-center gap-4 py-8">
                  <span className="font-['Jost'] font-bold text-[22px] text-[#CF4A25]">London Waste Removal</span>
                </div>
              </div>

              {[
                {
                  label: "Primary CTA",
                  competitor: "Often 'Call for a free quote'",
                  ours: "Online service browsing and booking",
                  bg: "bg-[#FFF0EB] dark:bg-muted/50",
                },
                {
                  label: "Pricing clarity",
                  competitor: "Frequently requires a call or site visit to confirm",
                  ours: "Full service details and clear pricing shown before booking",
                  bg: "bg-[#FFF0EB] dark:bg-muted/20",
                },
                {
                  label: "Service breakdown",
                  competitor: "Varies — some broad, some specific",
                  ours: "Clear, browsable service categories with details",
                  bg: "bg-[#FFF0EB] dark:bg-muted/50",
                },
                {
                  label: "Booking flow",
                  competitor: "Online exists, but paired with 'or call us'",
                  ours: "Streamlined direct online booking as primary path",
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
                    <strong>"No hidden charges" is an industry-wide admission of a common problem</strong> — customers frequently don't trust that the quoted price will hold.
                  </p>
                  <p>
                    <strong>Online booking is common, but rarely self-sufficient</strong>, suggesting the online flow alone isn't yet treated as trustworthy enough by competitors.
                  </p>
                  <p>
                    <strong>Service categorisation varies widely in specificity.</strong> Granular breakdowns make it easier for users to self-identify the right service.
                  </p>
                  <p>
                    <strong>Clarity and ease of booking is the true differentiator</strong>, not just fast turnaround which is already widely advertised.
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
                    Claire, Homeowner
                  </h3>
                </div>
                </div>
                <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                  <strong>44 years old</strong>, needs a one-off collection for furniture and general household clutter.
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <div>
                    <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">Needs:</span>
                    <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">Wants to know upfront what a collection will cost. Needs clear guidance on which service fits her needs. Prefers online slots.</p>
                  </div>
                  <div>
                    <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">Goal:</span>
                    <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">Browse services, understand pricing, and book a convenient slot — without picking up the phone.</p>
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
                    Tom, Small Business Owner
                  </h3>
                </div>
                </div>
                <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">
                  <strong>36 years old</strong>, needs regular commercial waste clearance for his shop.
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <div>
                    <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">Needs:</span>
                    <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">Wary of hidden fees. Values being able to see exactly what's included in a commercial clearance before booking.</p>
                  </div>
                  <div>
                    <span className="font-['Jost'] font-medium text-[18px] text-[#313131] dark:text-foreground">Goal:</span>
                    <p className="font-['Jost'] font-normal text-[18px] text-[#5E5E5E] dark:text-muted-foreground leading-[26px]">Find a transparent, trustworthy provider he can book with confidence and rely on repeatedly.</p>
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
              <p>Browse Services → View Service Details → Select Date/Time → Book Online → Confirmation</p>
            </div>
          </Reveal>
        </section>

                {/* 8. Low Fidelity */}
        <LowFidelitySection 
          description="Core low-fidelity screens established the structural foundation:"
          steps={[
            {
              title: "Services",
              description: "A browsable, categorised list of available services, letting users self-identify the right service without calling.",
              uiType: "discovery"
            },
            {
              title: "Service Detail",
              description: "Full breakdown of what's included, pricing structure, and coverage — addressing the pricing-transparency gap.",
              uiType: "detail"
            },
            {
              title: "Booking",
              description: "Date/time slot selection built directly into the flow, so the entire journey happens without a phone call.",
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
              Clean, trustworthy, and service-forward. Clear typography designed to make pricing and service details feel transparent and easy to verify.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-16 items-start">
              
              {/* Colors */}
              <div className="flex flex-col gap-10">
                {/* Primary Green & Secondary Green */}
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
                    <div className="w-full max-w-[402px] h-[80px] rounded-[15px] bg-[#4E7B39]"></div>
                    <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#4E7B39 - Primary Green</span>
                  </div>
                  <div className="flex flex-col gap-2 w-[255px] shrink-0">
                    <div className="w-full h-[80px] rounded-[15px] bg-[#96B281]"></div>
                    <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#96B281 - Secondary Green</span>
                  </div>
                </div>

                {/* Dark Charcoal */}
                <div className="flex flex-col gap-2">
                  <div className="w-full max-w-[688px] h-[80px] rounded-[15px] bg-[#333333] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)]"></div>
                  <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#333333 - Dark Charcoal</span>
                </div>
                
                {/* Background & Lite Grey */}
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
                    <div className="w-full max-w-[402px] h-[80px] rounded-[15px] bg-[#F7FFDA] border border-[#E5E5E5]"></div>
                    <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#F7FFDA - Background</span>
                  </div>
                  <div className="flex flex-col gap-2 w-[255px] shrink-0">
                    <div className="w-full h-[80px] rounded-[15px] bg-[#F5F5F5] border border-[#E5E5E5]"></div>
                    <span className="font-['Jost'] text-[18px] text-[#5E5E5E] dark:text-muted-foreground">#F5F5F5 - Lite Grey</span>
                  </div>
                </div>
              </div>

              {/* Typography */}
              <div className="flex flex-col gap-20 pt-4">
                {/* Outfit */}
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex flex-col items-center">
                    <span className="font-['Outfit'] font-medium text-[110px] leading-[0.8] text-[#5E5E5E] dark:text-muted-foreground" style={{fontFamily: 'Outfit, sans-serif'}}>Aa</span>
                    <span className="font-['Outfit'] font-bold text-[18px] text-[#4E7B39] tracking-widest mt-4 uppercase" style={{fontFamily: 'Outfit, sans-serif'}}>Outfit</span>
                  </div>
                  <div className="flex flex-col font-normal text-[22px] leading-[44px] text-[#5E5E5E] dark:text-muted-foreground capitalize md:mt-2" style={{fontFamily: 'Outfit, sans-serif'}}>
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
                  <ImageWithFallback src={img} alt={`London Waste Removal Screen ${i + 1}`} className="w-full max-w-[400px] h-auto object-contain rounded-[30px]" />
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
