import React from 'react';

export type UIType = 'discovery' | 'detail' | 'catalog' | 'list' | 'add' | 'profile' | 'messages';

export interface PhoneMockupProps {
  uiType?: UIType;
  image?: string;
  title?: string;
}

export function PhoneMockup({ uiType = 'discovery', image, title }: PhoneMockupProps) {
  if (image) {
    return (
      <div className="relative mx-auto w-full max-w-[280px] flex justify-center items-center">
        <img 
          src={image} 
          alt={title || "LoFi Screen"} 
          className="w-full h-auto max-h-[580px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.06)]" 
        />
      </div>
    );
  }

  const renderUI = (type: UIType) => {
    switch (type) {
      case 'discovery':
        return (
          <>
            <div className="w-full h-8 bg-[#EAEAEA] rounded-md mb-2"></div>
            <div className="flex gap-2 mb-2">
               <div className="w-8 h-8 rounded-full bg-[#EAEAEA] shrink-0"></div>
               <div className="flex-1 h-8 rounded-md bg-[#F2F2F2]"></div>
            </div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-full bg-white border border-[#F0F0F0] rounded-lg p-3 flex flex-col gap-2 shadow-sm">
                <div className="w-3/4 h-3 bg-[#EAEAEA] rounded-full"></div>
                <div className="w-1/2 h-2 bg-[#F2F2F2] rounded-full"></div>
              </div>
            ))}
          </>
        );
      case 'detail':
        return (
          <>
            <div className="w-full aspect-square bg-[#EAEAEA] rounded-xl mb-2"></div>
            <div className="w-2/3 h-5 bg-[#EAEAEA] rounded-md"></div>
            <div className="w-1/3 h-3 bg-[#F2F2F2] rounded-md mb-2"></div>
            <div className="flex flex-col gap-1.5 mb-4">
               <div className="w-full h-2 bg-[#F2F2F2] rounded-full"></div>
               <div className="w-full h-2 bg-[#F2F2F2] rounded-full"></div>
               <div className="w-4/5 h-2 bg-[#F2F2F2] rounded-full"></div>
            </div>
            <div className="mt-auto w-full h-10 bg-[#D1D1D1] rounded-lg"></div>
          </>
        );
      case 'catalog':
        return (
          <>
            <div className="w-full h-8 rounded-md bg-[#EAEAEA] mb-4"></div>
            <div className="grid grid-cols-2 gap-3">
               {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex flex-col gap-2">
                     <div className="w-full aspect-square bg-[#EAEAEA] rounded-lg"></div>
                     <div className="w-full h-2 bg-[#EAEAEA] rounded-full"></div>
                     <div className="w-2/3 h-2 bg-[#F2F2F2] rounded-full"></div>
                  </div>
               ))}
            </div>
          </>
        );
      case 'list': 
        return (
           <>
            <div className="w-1/2 h-6 bg-[#EAEAEA] rounded-md mb-4"></div>
            <div className="flex flex-col gap-3">
               {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-full flex items-center justify-between border-b border-[#F0F0F0] pb-2">
                     <div className="flex flex-col gap-1.5 w-1/2">
                        <div className="w-full h-3 bg-[#EAEAEA] rounded-full"></div>
                        <div className="w-2/3 h-2 bg-[#F2F2F2] rounded-full"></div>
                     </div>
                     <div className="w-6 h-6 rounded-full bg-[#F2F2F2]"></div>
                  </div>
               ))}
            </div>
           </>
        );
      case 'add': 
         return (
            <>
             <div className="w-full flex gap-2 mb-6">
                <div className="flex-1 h-8 bg-[#D1D1D1] rounded-md"></div>
                <div className="flex-1 h-8 bg-[#EAEAEA] rounded-md"></div>
             </div>
             <div className="w-1/3 h-3 bg-[#EAEAEA] rounded-full mb-1"></div>
             <div className="w-full h-10 bg-[#F2F2F2] rounded-md mb-4"></div>
             <div className="w-1/4 h-3 bg-[#EAEAEA] rounded-full mb-1"></div>
             <div className="w-full h-10 bg-[#F2F2F2] rounded-md mb-4"></div>
             <div className="mt-auto w-full h-12 bg-[#D1D1D1] rounded-lg"></div>
            </>
         );
      case 'profile': 
         return (
            <>
              <div className="w-full h-32 bg-[#EAEAEA] -mt-8 -mx-4 mb-4 relative">
                 <div className="absolute -bottom-6 left-4 w-16 h-16 rounded-full border-2 border-[#FBFBFB] bg-[#D1D1D1]"></div>
              </div>
              <div className="mt-6 w-1/2 h-5 bg-[#EAEAEA] rounded-md mb-1"></div>
              <div className="w-1/3 h-3 bg-[#F2F2F2] rounded-md mb-4"></div>
              <div className="flex gap-2 mb-6">
                 <div className="flex-1 h-8 bg-[#D1D1D1] rounded-md"></div>
                 <div className="flex-1 h-8 bg-[#EAEAEA] rounded-md"></div>
              </div>
              <div className="flex flex-col gap-2">
                 <div className="w-full h-20 bg-[#F2F2F2] rounded-lg"></div>
                 <div className="w-full h-20 bg-[#F2F2F2] rounded-lg"></div>
              </div>
            </>
         );
      case 'messages':
         return (
            <>
              <div className="w-full border-b border-[#F0F0F0] pb-3 mb-3 -mt-2">
                 <div className="w-1/2 h-5 bg-[#EAEAEA] rounded-md"></div>
              </div>
              <div className="flex flex-col gap-4 flex-1 overflow-hidden">
                 <div className="self-start w-3/4 bg-[#EAEAEA] rounded-2xl rounded-tl-sm p-3 h-10"></div>
                 <div className="self-end w-2/3 bg-[#D1D1D1] rounded-2xl rounded-tr-sm p-3 h-16"></div>
                 <div className="self-start w-1/2 bg-[#EAEAEA] rounded-2xl rounded-tl-sm p-3 h-10"></div>
                 <div className="self-end w-3/4 bg-[#D1D1D1] rounded-2xl rounded-tr-sm p-3 h-10"></div>
              </div>
              <div className="mt-auto w-full h-10 border border-[#EAEAEA] rounded-full bg-[#FBFBFB]"></div>
            </>
         );
      default:
        return null;
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[260px] aspect-[1/2.1] bg-white rounded-[40px] border-[6px] border-[#E8E8E8] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col">
      {/* Top Notch/Speaker */}
      <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
        <div className="w-1/3 h-full bg-[#E8E8E8] rounded-b-xl flex items-center justify-center">
          <div className="w-1/2 h-1 rounded-full bg-[#D1D1D1]"></div>
        </div>
      </div>
      
      {/* Screen Content Wrapper */}
      <div className="flex-1 w-full h-full bg-[#FBFBFB] pt-8 px-4 pb-6 overflow-hidden relative z-10 flex flex-col gap-4">
        {renderUI(uiType)}
      </div>
    </div>
  );
}
