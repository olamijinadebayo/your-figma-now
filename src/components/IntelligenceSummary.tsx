import React from 'react';

interface IntelligenceSummaryProps {
  summary: string;
}

export const IntelligenceSummary: React.FC<IntelligenceSummaryProps> = ({ summary }) => {
  return (
    <div className="border-slate-200 border bg-slate-200 min-h-px w-full mt-6 border-solid max-md:max-w-full">
      <div className="flex w-full gap-3 overflow-hidden flex-wrap mt-6 p-6 rounded-[10px] max-md:max-w-full max-md:px-5">
        <img
          src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/b487bf441836a4aa66a210d686bcd95556d2a220?placeholderIfAbsent=true"
          alt="AI Intelligence Icon"
          className="aspect-[1] object-contain w-6 shrink-0"
        />
        <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
          <h3 className="text-slate-950 text-base font-medium">
            Caelo Intelligence Summary
          </h3>
          <p className="text-black text-sm font-normal leading-[22px] mt-2 max-md:max-w-full">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
};
