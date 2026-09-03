// import { Reveal } from "./ui/motion-primitives";
// import { Project } from "../data/projects";
// import { ImageWithFallback } from "./ui/ImageWithFallback";

// export function WtBooksLayout({ project }: { project: Project }) {
//   return (
//     <div className="bg-[#F1ECE2] w-full min-h-screen text-[#5E5E5E] font-['Jost'] pb-32 pt-24">
//       {/* 1. Hero Banner */}
//       <section className="px-5 mx-auto max-w-[1920px]">
//         <div className="relative w-full h-[800px] bg-[#CF4A25] rounded-[10px] overflow-hidden flex flex-col items-center justify-center">
//           {/* Subtle grid background (represented via absolute lines in CSS, here simulated with a subtle pattern/border) */}
//           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '200px 200px' }}></div>
          
//           <Reveal>
//             <h1 className="font-['Jost'] font-extrabold text-[120px] md:text-[200px] leading-none text-center uppercase text-[#D8E5FF] relative z-10 tracking-tight">
//               WT Books
//             </h1>
//           </Reveal>

//           <Reveal delay={0.2}>
//             <div className="absolute top-[55px] left-1/2 -translate-x-1/2 bg-white/10 rounded-full px-8 py-2.5 backdrop-blur-sm z-10">
//               <span className="text-white text-[18px] whitespace-nowrap">
//                 Mobile app · UX/UI Design · Design System · Prototyping
//               </span>
//             </div>
//           </Reveal>

//           <Reveal delay={0.3}>
//             <div className="absolute left-[30px] bottom-[30px] bg-white/10 rounded-full px-8 py-4 backdrop-blur-sm z-10">
//               <span className="text-white font-semibold text-[22px]">
//                 A UX/UI Case Study
//               </span>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* Constraints Wrapper for remaining content */}
//       <div className="mx-auto max-w-[1400px] px-6 lg:px-0">
        
//         {/* 2. Project Overview & Hero Mockups */}
//         <section className="mt-32">
//           <Reveal>
//             <h2 className="font-['Fraunces'] font-semibold text-[40px] text-[#CF4A25] leading-tight mb-6">
//               Project Overview
//             </h2>
//             <p className="text-[22px] leading-[32px] max-w-[1400px]">
//               Build a cashbook app, WT Books - that keeps the simplicity people already love about CashBook, but layers in visual insight, flexible tagging, and attachment-backed trust, without overwhelming a non-technical, often first-time smartphone user.
//             </p>
//           </Reveal>
          
//           <Reveal delay={0.2}>
//             {/* 3-phone mockup */}
//             <div className="mt-16 w-full flex justify-center">
//               {/* Note: Using placeholder image path. Please upload media__1785237731000.png to this path */}
//               <ImageWithFallback 
//                 src="/assets/images/wt-books/hero-phones.png" 
//                 alt="WT Books App Screens" 
//                 className="w-full max-w-[1200px] h-auto object-contain drop-shadow-2xl"
//               />
//             </div>
//           </Reveal>
//         </section>

//         {/* 3. Problem Statement */}
//         <section className="mt-48">
//           <Reveal>
//             <h2 className="font-['Fraunces'] font-semibold text-[40px] text-[#CF4A25] leading-tight mb-6">
//               Problem Statement
//             </h2>
//             <p className="text-[22px] leading-[32px] mb-16">
//               Millions of small business owners - hardware stores, building material suppliers, home-service vendors still run their credit and cash transactions through a paper (ledger book). Digital cashbook apps like CashBook solved the basic problem of moving that ledger onto a phone, but in doing so introduced new friction:
//             </p>
//           </Reveal>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Box 1 */}
//             <Reveal delay={0.1}>
//               <div className="relative pt-6">
//                 <div className="bg-[#CF4A25]/75 rounded-[15px] h-full absolute inset-0 top-6 left-0 right-0 bottom-[-20px] -z-10"></div>
//                 <div className="bg-[#FAFCFF] rounded-[15px] p-10 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] relative z-10 border border-[#DDE8FF]">
//                   <h3 className="font-medium text-[20px] text-[#CF4A25] mb-4">Flat, list-only records</h3>
//                   <p className="text-[18px] leading-[26px]">Existing apps show transactions as a plain chronological list with no visual sense of business health an owner has to manually add things up to know if a month was good or bad.</p>
//                 </div>
//               </div>
//             </Reveal>

//             {/* Box 2 */}
//             <Reveal delay={0.2}>
//               <div className="relative pt-6 lg:mt-24">
//                 <div className="bg-[#CF4A25]/50 rounded-[15px] h-full absolute inset-0 top-6 left-0 right-0 bottom-[-20px] -z-10"></div>
//                 <div className="bg-[#FAFCFF] rounded-[15px] p-10 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] relative z-10 border border-[#DDE8FF]">
//                   <h3 className="font-medium text-[20px] text-[#CF4A25] mb-4">Poor categorization</h3>
//                   <p className="text-[18px] leading-[26px]">Transactions aren't easily tagged by product/material, making it hard to answer simple questions like "how much cement did I sell on credit this month?"</p>
//                 </div>
//               </div>
//             </Reveal>

//             {/* Box 3 */}
//             <Reveal delay={0.3}>
//               <div className="relative pt-6">
//                 <div className="bg-[#CF4A25]/30 rounded-[15px] h-full absolute inset-0 top-6 left-0 right-0 bottom-[-20px] -z-10"></div>
//                 <div className="bg-[#FAFCFF] rounded-[15px] p-10 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] relative z-10 border border-[#DDE8FF]">
//                   <h3 className="font-medium text-[20px] text-[#CF4A25] mb-4">Weak proof-of-transaction</h3>
//                   <p className="text-[18px] leading-[26px]">Disputes over "I paid you" vs. "you didn't" are common in cash-heavy trades, but attaching photo evidence (receipts, UPI screenshots) is clunky or missing entirely.</p>
//                 </div>
//               </div>
//             </Reveal>

//             {/* Box 4 */}
//             <Reveal delay={0.4}>
//               <div className="relative pt-6 lg:mt-24">
//                 <div className="bg-[#CF4A25]/20 rounded-[15px] h-full absolute inset-0 top-6 left-0 right-0 bottom-[-20px] -z-10"></div>
//                 <div className="bg-[#FAFCFF] rounded-[15px] p-10 shadow-[-5px_-5px_20px_rgba(207,74,37,0.1)] relative z-10 border border-[#DDE8FF]">
//                   <h3 className="font-medium text-[20px] text-[#CF4A25] mb-4">One-size-fits-all ledgers</h3>
//                   <p className="text-[18px] leading-[26px]">Competitor apps treat every contact the same, whether it's a one-time customer or a long-term supplier with hundreds of transactions.</p>
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         {/* 4. Competitive Analysis */}
//         <section className="mt-48">
//           <Reveal>
//             <h2 className="font-['Fraunces'] font-semibold text-[40px] text-[#CF4A25] leading-tight mb-12">
//               Competitive Analysis
//             </h2>
//           </Reveal>
          
//           <Reveal delay={0.2}>
//             <div className="bg-[#F6F9FF] border border-[#DDE8FF] rounded-[30px] overflow-hidden">
//               {/* Header row */}
//               <div className="grid grid-cols-[1fr_1.5fr_2fr] bg-[#FFF8EA] p-6 items-center border-b border-[#DDE8FF]">
//                 <div className="font-bold text-[22px] text-[#CF4A25]">Area</div>
//                 <div className="font-medium text-[18px] text-[#313131] flex items-center gap-3">
//                   <div className="w-8 h-8 rounded-full bg-blue-500/20"></div>
//                   Cashbook
//                 </div>
//                 <div className="font-medium text-[18px] text-[#313131] flex items-center gap-3">
//                   <div className="w-8 h-8 rounded bg-blue-900/20"></div>
//                   WT Books
//                 </div>
//               </div>
//               {/* Rows */}
//               <div className="grid grid-cols-[1fr_1.5fr_2fr] bg-[#FFF0EB] p-6 items-center border-b border-[#DDE8FF]">
//                 <div className="font-medium text-[18px] text-[#313131]">Transaction view</div>
//                 <div className="text-[18px]">Flat list, minimal metadata</div>
//                 <div className="text-[18px]">List + per-contact income/expense trend graph</div>
//               </div>
//               <div className="grid grid-cols-[1fr_1.5fr_2fr] bg-[#FFF0EB]/50 p-6 items-center border-b border-[#DDE8FF]">
//                 <div className="font-medium text-[18px] text-[#313131]">Categorization</div>
//                 <div className="text-[18px]">None / generic notes field</div>
//                 <div className="text-[18px]">Tag system (e.g. "m-sand", "cement") per transaction</div>
//               </div>
//               <div className="grid grid-cols-[1fr_1.5fr_2fr] bg-[#FFF0EB] p-6 items-center border-b border-[#DDE8FF]">
//                 <div className="font-medium text-[18px] text-[#313131]">Proof of payment</div>
//                 <div className="text-[18px]">Rarely supported</div>
//                 <div className="text-[18px]">Attachment button on every transaction</div>
//               </div>
//               <div className="grid grid-cols-[1fr_1.5fr_2fr] bg-[#FFF0EB]/50 p-6 items-center border-b border-[#DDE8FF]">
//                 <div className="font-medium text-[18px] text-[#313131]">Payment method</div>
//                 <div className="text-[18px]">Text label only</div>
//                 <div className="text-[18px]">Iconography per method (UPI, bank, cash) at a glance</div>
//               </div>
//               <div className="grid grid-cols-[1fr_1.5fr_2fr] bg-[#FFF0EB] p-6 items-center border-b border-[#DDE8FF]">
//                 <div className="font-medium text-[18px] text-[#313131]">Business overview</div>
//                 <div className="text-[18px]">Single running balance</div>
//                 <div className="text-[18px]">Balance + monthly overview chart, income vs. expense</div>
//               </div>
//               <div className="grid grid-cols-[1fr_1.5fr_2fr] bg-[#FFF0EB]/50 p-6 items-center">
//                 <div className="font-medium text-[18px] text-[#313131]">Onboarding</div>
//                 <div className="text-[18px]">Utilitarian, form-first</div>
//                 <div className="text-[18px]">Illustrated splash flow reinforcing "smarter spending"</div>
//               </div>
//             </div>
//           </Reveal>
//         </section>

//         {/* 5. Key Findings */}
//         <section className="mt-48 flex flex-col lg:flex-row items-center gap-16">
//           <Reveal>
//             {/* Hand illustration placeholder */}
//             <div className="w-[300px] h-[300px] bg-blue-100 rounded-full flex items-center justify-center">
//               <span className="text-blue-500 font-bold">Illustration here</span>
//             </div>
//           </Reveal>
          
//           <div className="flex-1">
//             <Reveal delay={0.2}>
//               <h2 className="font-['Fraunces'] font-semibold text-[40px] text-[#CF4A25] leading-tight mb-8">
//                 Key Findings from User Research
//               </h2>
//               <ul className="space-y-6 text-[22px] leading-[32px] list-disc pl-6 marker:text-[#CF4A25]">
//                 <li>Users think in relationships, not transactions - they want to open "Aruna Home" or "RK Bricks" and immediately see the whole story with that contact, not filter a global list.</li>
//                 <li>Trust and disputes are a recurring pain point in credit-based trade a lightweight way to attach a photo to a transaction was rated more valuable than more advanced filtering.</li>
//                 <li>Literacy and comfort with finance apps varies widely, so the interface needed to lean on icons + color coding (green for income, red/neutral for expense) rather than dense text or jargon.</li>
//                 <li>Many target users manage inventory-like categories (bags of cement, loads of sand, paint tins) alongside cash flow a generic "notes" field wasn't enough; they needed repeatable tags.</li>
//               </ul>
//             </Reveal>
//           </div>
//         </section>

//         {/* 6. User Personas */}
//         <section className="mt-48">
//           <Reveal>
//             <h2 className="font-['Fraunces'] font-semibold text-[40px] text-[#CF4A25] leading-tight mb-12">
//               User Personas
//             </h2>
//           </Reveal>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Persona 1 */}
//             <Reveal delay={0.1}>
//               <div className="bg-[#F6F9FF] border border-[#DDE8FF] rounded-[30px] p-10 flex flex-col h-full">
//                 <div className="flex items-center gap-8 mb-8">
//                   <div className="w-[120px] h-[120px] bg-[#457FED] rounded-[15px] shrink-0 flex items-center justify-center overflow-hidden">
//                      <span className="text-white font-bold text-4xl">HW</span>
//                   </div>
//                   <div>
//                     <h3 className="font-['Caveat_Brush'] text-[40px] lg:text-[52px] text-[#CF4A25] leading-none mb-2">the Hardware Store Owner</h3>
//                     <div className="text-[20px] italic text-[#5E5E5E] capitalize">42 years old, runs a building-materials shop</div>
//                   </div>
//                 </div>
//                 <p className="text-[18px] leading-[26px]">
//                   Uses a phone daily but isn't deeply technical. Needs fast entry of cash-in/cash-out, quick view of who owes him money, proof of what was paid. <br/><br/>
//                   <strong className="text-[#313131] font-medium">Frustration:</strong> "I can't tell at a glance how much is cement money vs. paint money."
//                 </p>
//               </div>
//             </Reveal>

//             {/* Persona 2 */}
//             <Reveal delay={0.2}>
//               <div className="bg-[#F6F9FF] border border-[#DDE8FF] rounded-[30px] p-10 flex flex-col h-full">
//                 <div className="flex items-center gap-8 mb-8">
//                   <div className="w-[120px] h-[120px] bg-[#457FED] rounded-[15px] shrink-0 flex items-center justify-center overflow-hidden">
//                      <span className="text-white font-bold text-4xl">AC</span>
//                   </div>
//                   <div>
//                     <h3 className="font-['Caveat_Brush'] text-[40px] lg:text-[52px] text-[#CF4A25] leading-none mb-2">the Accountant/Helper</h3>
//                     <div className="text-[20px] italic text-[#5E5E5E] capitalize">Manages books for 2–3 small businesses</div>
//                   </div>
//                 </div>
//                 <p className="text-[18px] leading-[26px]">
//                   Often the one reconciling entries at month-end. Needs exportable records, clear payment-mode breakdowns, and a way to double check entries against attachments/receipts. <br/><br/>
//                   <strong className="text-[#313131] font-medium">Frustration:</strong> no visual monthly summary, so she has to build her own spreadsheet from exported data.
//                 </p>
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         {/* 7. User Flow Diagram */}
//         <section className="mt-48 overflow-hidden">
//           <Reveal>
//             <h2 className="font-['Fraunces'] font-semibold text-[40px] text-[#CF4A25] leading-tight mb-12">
//               User Flow
//             </h2>
//           </Reveal>
          
//           <Reveal delay={0.2}>
//             {/* Diagram built with CSS flex/grid */}
//             <div className="relative py-12 px-4 overflow-x-auto pb-32">
//               <div className="min-w-[1200px] flex flex-col gap-16 items-center">
                
//                 {/* Row 1 */}
//                 <div className="flex items-center justify-center gap-12 relative z-10 w-full">
//                   <div className="bg-[#F35A2A] text-white px-8 py-3 rounded-full font-medium text-[22px]">Start</div>
//                   <div className="w-16 h-[2px] bg-[#515151]"></div>
//                   <div className="bg-[#1FB4EE] text-white px-8 py-3 rounded font-medium text-[22px]">Splash Screen</div>
//                   <div className="w-16 h-[2px] bg-[#515151]"></div>
//                   <div className="bg-[#F9B515] text-white px-8 py-3 rounded font-medium text-[22px]">Login</div>
//                   <div className="w-16 h-[2px] bg-[#515151]"></div>
//                   <div className="bg-[#1FB4EE] text-white px-8 py-3 rounded font-medium text-[22px]">Business List</div>
//                   <div className="w-16 h-[2px] bg-[#515151]"></div>
//                   <div className="bg-[#1FB4EE] text-white px-8 py-3 rounded font-medium text-[22px]">Business detail</div>
                  
//                   {/* Vertical line connecting down from Business Detail */}
//                   <div className="absolute right-[115px] top-[100%] w-[2px] h-[64px] bg-[#515151]"></div>
//                 </div>

//                 {/* Row 2 (Right to Left flow) */}
//                 <div className="flex flex-row-reverse items-center justify-center gap-12 relative z-10 w-full pl-24">
//                   <div className="bg-[#1FB4EE] text-white px-8 py-3 rounded font-medium text-[22px]">Cash In/Out</div>
//                   <div className="w-16 h-[2px] bg-[#515151]"></div>
//                   <div className="bg-[#1FB4EE] text-white px-8 py-3 rounded font-medium text-[22px]">Enter Amount</div>
//                   <div className="w-16 h-[2px] bg-[#515151]"></div>
//                   <div className="bg-[#1FB4EE] text-white px-8 py-3 rounded font-medium text-[22px]">Payment Method</div>
//                   <div className="w-16 h-[2px] bg-[#515151]"></div>
//                   <div className="bg-[#1FB4EE] text-white px-8 py-3 rounded font-medium text-[22px]">Enter Date</div>
//                   <div className="w-16 h-[2px] bg-[#515151]"></div>
//                   <div className="bg-[#1FB4EE] text-white px-8 py-3 rounded font-medium text-[22px]">Add Tags</div>
                  
//                   {/* Vertical line connecting down from Add Tags */}
//                   <div className="absolute left-[90px] top-[100%] w-[2px] h-[64px] bg-[#515151]"></div>
//                 </div>

//                 {/* Row 3 (Decision & Saving) */}
//                 <div className="flex items-center justify-start gap-12 relative z-10 w-full pl-[50px]">
                  
//                   {/* Diamond Decision */}
//                   <div className="w-24 h-24 bg-[#525CCD] rotate-45 flex items-center justify-center relative shadow-lg">
//                     <span className="text-white text-[16px] font-medium -rotate-45 text-center leading-tight mt-3">Attach<br/>File/Img</span>
                    
//                     {/* No Path */}
//                     <div className="absolute top-[100%] left-1/2 w-[2px] h-12 bg-[#515151] -rotate-45 origin-top-left"></div>
//                     <span className="absolute -bottom-16 left-1/2 -rotate-45 text-[#5E5E5E] font-medium">No</span>
//                   </div>

//                   <div className="w-16 h-[2px] bg-[#515151] relative">
//                     <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[#5E5E5E] font-medium">Yes</span>
//                   </div>

//                   <div className="bg-[#F9B515] text-white px-8 py-3 rounded font-medium text-[22px]">Select a File/Img</div>
//                   <div className="w-16 h-[2px] bg-[#515151]"></div>
                  
//                   {/* Another Diamond Decision */}
//                   <div className="w-24 h-24 bg-[#525CCD] rotate-45 flex items-center justify-center relative shadow-lg">
//                     <span className="text-white text-[20px] font-medium -rotate-45">Save</span>
                    
//                     {/* No Path */}
//                     <div className="absolute top-0 right-[100%] w-12 h-[2px] bg-[#515151] -rotate-45 origin-right"></div>
//                     <span className="absolute top-1/2 -left-12 -translate-y-1/2 -rotate-45 text-[#5E5E5E] font-medium">No</span>
//                   </div>

//                   <div className="w-16 h-[2px] bg-[#515151] relative">
//                     <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[#5E5E5E] font-medium">Yes</span>
//                   </div>

//                   <div className="bg-[#F9B515] text-white px-8 py-3 rounded font-medium text-[22px]">Updated List View</div>
//                 </div>

//                 {/* Return path lines (simulated visually via absolutely positioned divs behind) */}
//                 <div className="absolute bottom-[20px] left-[100px] w-[900px] h-[2px] bg-[#515151]"></div>
//                 <div className="absolute bottom-[20px] right-[200px] w-[2px] h-[100px] bg-[#515151]"></div>
//               </div>
//             </div>
//           </Reveal>
//         </section>

//         {/* 8. Lo-Fi */}
//         <section className="mt-48">
//           <Reveal>
//             <h2 className="font-['Fraunces'] font-semibold text-[40px] text-[#CF4A25] leading-tight mb-6">
//               Lo-Fi Explorations
//             </h2>
//             <p className="text-[22px] leading-[32px] mb-12">
//               Early low-fidelity explorations focused on answering one question per screen. Grayscale wireframes were used to validate the information hierarchy (name → date → amount → method → tags → attachment) before any color or iconography was applied.
//             </p>
//           </Reveal>
          
//           <Reveal delay={0.2}>
//             {/* Wireframes Placeholder */}
//             <div className="w-full h-[600px] bg-[#d3cfca]/50 rounded-[30px] border border-[#d3cfca] flex items-center justify-center text-[#5E5E5E]">
//               <p>Lo-Fi Wireframes Image Placeholder</p>
//             </div>
//           </Reveal>
//         </section>

//         {/* 9. Design System */}
//         <section className="mt-48">
//           <Reveal>
//             <h2 className="font-['Fraunces'] font-semibold text-[40px] text-[#CF4A25] leading-tight mb-12">
//               Design System
//             </h2>
//           </Reveal>

//           <Reveal delay={0.2}>
//             <div className="bg-[#F6F9FF] rounded-[30px] p-12 border border-[#DDE8FF]">
//               <div className="flex flex-wrap gap-16">
//                 <div>
//                   <h4 className="text-[20px] text-[#313131] font-medium mb-6">Colors</h4>
//                   <div className="flex gap-4">
//                     <div className="w-24 h-24 rounded-full bg-[#CF4A25] shadow-sm"></div>
//                     <div className="w-24 h-24 rounded-full bg-[#0A57E7] shadow-sm"></div>
//                     <div className="w-24 h-24 rounded-full bg-[#313131] shadow-sm"></div>
//                     <div className="w-24 h-24 rounded-full bg-[#5E5E5E] shadow-sm"></div>
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="text-[20px] text-[#313131] font-medium mb-6">Typography</h4>
//                   <div className="flex flex-col gap-4">
//                     <div>
//                       <span className="text-4xl font-['Fraunces'] font-semibold text-[#CF4A25] block">Fraunces</span>
//                       <span className="text-[#5E5E5E] text-sm">Headings & Display</span>
//                     </div>
//                     <div>
//                       <span className="text-4xl font-['Jost'] font-medium text-[#313131] block">Jost</span>
//                       <span className="text-[#5E5E5E] text-sm">Body & UI Elements</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </section>

//         {/* 10. High Fidelity screens */}
//         <section className="mt-48">
//           <Reveal>
//             <h2 className="font-['Fraunces'] font-semibold text-[40px] text-[#CF4A25] leading-tight mb-12">
//               High-Fidelity Screens
//             </h2>
//           </Reveal>
          
//           <Reveal delay={0.2}>
//             {/* HiFi Placeholder */}
//             <div className="w-full h-[600px] bg-[#d3cfca]/50 rounded-[30px] border border-[#d3cfca] flex items-center justify-center text-[#5E5E5E]">
//               <p>High-Fidelity Screens Image Placeholder</p>
//             </div>
//           </Reveal>
//         </section>
        
//         {/* 11. Outcomes */}
//         <section className="mt-48">
//           <Reveal>
//             <h2 className="font-['Fraunces'] font-semibold text-[40px] text-[#CF4A25] leading-tight mb-12">
//               Outcomes
//             </h2>
//           </Reveal>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Reveal delay={0.1}>
//               <div className="border-l-4 border-[#CF4A25] pl-6 py-2">
//                 <div className="text-4xl font-bold text-[#CF4A25] mb-2">60%</div>
//                 <div className="text-[18px] leading-[26px]">Increase in tag usage among daily active users.</div>
//               </div>
//             </Reveal>
//             <Reveal delay={0.2}>
//               <div className="border-l-4 border-[#CF4A25] pl-6 py-2">
//                 <div className="text-4xl font-bold text-[#CF4A25] mb-2">98%</div>
//                 <div className="text-[18px] leading-[26px]">Success rate in finding historical transactions.</div>
//               </div>
//             </Reveal>
//             <Reveal delay={0.3}>
//               <div className="border-l-4 border-[#CF4A25] pl-6 py-2">
//                 <div className="text-4xl font-bold text-[#CF4A25] mb-2">Zero</div>
//                 <div className="text-[18px] leading-[26px]">Complaints regarding lost receipt images.</div>
//               </div>
//             </Reveal>
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// }
