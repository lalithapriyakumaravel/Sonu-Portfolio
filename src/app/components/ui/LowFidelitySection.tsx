import React from 'react';
import { Reveal } from "./motion-primitives";
import { PhoneMockup, UIType } from "./PhoneMockup";

export interface LowFidelityStep {
  title: string;
  description: React.ReactNode;
  uiType?: UIType;
  image?: string;
}

interface LowFidelitySectionProps {
  description: React.ReactNode;
  steps: LowFidelityStep[];
  titleColor?: string;
}

export function LowFidelitySection({ 
  description, 
  steps,
  titleColor = "text-[#CF4A25]" 
}: LowFidelitySectionProps) {
  return (
    <section className="mt-32 w-full max-w-[1200px] mx-auto px-4 md:px-0">
      <Reveal>
        <div className="flex flex-col gap-2 mb-16">
           <span className="font-['Jost'] font-bold text-[14px] tracking-[0.2em] uppercase text-[#A0A0A0]">Low Fidelity</span>
           <h2 className={`font-['Fraunces'] font-semibold text-[40px] leading-tight ${titleColor}`}>
             Explorations
           </h2>
           <div className="text-[20px] leading-[30px] text-[#5E5E5E] max-w-3xl mt-2 font-['Jost']">
             {description}
           </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
        {/* Subtle horizontal timeline connector for desktop */}
        <div className="hidden md:block absolute top-[28px] left-[60px] right-[60px] h-[1px] bg-[#E5E5E5] z-0"></div>

        {steps.map((step, index) => (
          <Reveal delay={0.1 * (index + 1)} key={index}>
            <div className="flex flex-col gap-6 relative z-10 h-full">
              <div className="flex flex-col gap-3 flex-1">
                <div className="w-14 h-14 rounded-full bg-[#FBFBFB] border border-[#E5E5E5] flex items-center justify-center font-['Jost'] font-semibold text-[18px] text-[#808080] shadow-sm shrink-0">
                  0{index + 1}
                </div>
                <h3 className={`font-['Jost'] font-medium text-[22px] mt-2 ${titleColor}`}>
                  {step.title}
                </h3>
                <div className="font-['Jost'] font-normal text-[16px] leading-[26px] text-[#6E6E6E] md:min-h-[78px]">
                  {step.description}
                </div>
              </div>
              <div className="mt-4 w-full flex justify-center lg:justify-start lg:pl-2">
                <PhoneMockup uiType={step.uiType} image={step.image} title={step.title} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
