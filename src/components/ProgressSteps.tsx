import React from 'react';

interface Step {
  id: string;
  label: string;
  status: 'completed' | 'current' | 'pending';
}

interface ProgressStepsProps {
  steps: Step[];
}

export const ProgressSteps: React.FC<ProgressStepsProps> = ({ steps }) => {
  return (
    <div className="self-center flex w-[1296px] max-w-full flex-col items-center px-36 max-md:px-5">
      <div className="flex w-full max-w-[1008px] items-stretch gap-4 flex-wrap pb-5 max-md:max-w-full">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-stretch flex-1 grow shrink basis-auto">
            <div className="flex flex-col items-stretch text-sm text-[#344054] font-normal whitespace-nowrap text-center leading-none">
              {step.status === 'completed' ? (
                <img
                  src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/f2ce329f3112c6bb78400364dbb3e0c8dcb50ef8?placeholderIfAbsent=true"
                  alt={`${step.label} completed`}
                  className="aspect-[1] object-contain w-6 self-center"
                />
              ) : (
                <div className={`justify-center items-center self-center flex w-6 flex-col overflow-hidden h-6 px-[5px] rounded-xl ${
                  step.status === 'current' 
                    ? 'shadow-[0_0_0_4px_#F4EBFF] bg-green-50' 
                    : 'bg-[#F2F4F7]'
                }`}>
                  <div className={`flex w-full shrink-0 h-2 bg-white rounded-[50%] ${
                    step.status === 'current' ? 'fill-green-600' : ''
                  }`} />
                </div>
              )}
              <div className={`w-full mt-3 pt-0.5 ${
                step.status === 'current' ? 'text-green-600' : 'text-[#344054]'
              }`}>
                <div>{step.label}</div>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex mr-[-120px] w-64 shrink-0 max-w-full h-0.5 mt-[11px] ${
                step.status === 'completed' ? 'bg-green-600' : 'bg-[#EAECF0]'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
