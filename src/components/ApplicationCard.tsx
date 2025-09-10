import React from 'react';

interface ApplicationData {
  applicationId: string;
  recommendation: string;
  borrowerId: string;
  applicationDate: string;
  loanType: string;
  loanOfficer: string;
  amountRequested: string;
  underwriter: string;
}

interface ApplicationCardProps {
  data: ApplicationData;
  onApprove: () => void;
  onReject: () => void;
}

export const ApplicationCard: React.FC<ApplicationCardProps> = ({ data, onApprove, onReject }) => {
  return (
    <div className="border bg-white min-w-60 w-full flex-1 shrink basis-[0%] p-6 rounded-2xl border-solid border-[#EAECF0] max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-[40px_100px] font-medium justify-between flex-wrap max-md:max-w-full">
        <div className="self-stretch flex min-w-60 min-h-8 items-center gap-2 flex-wrap my-auto max-md:max-w-full">
          <h1 className="text-slate-950 text-2xl leading-none tracking-[-0.72px] self-stretch my-auto">
            Application #{data.applicationId}
          </h1>
          <div className="border-slate-200 border bg-slate-200 self-stretch w-0 shrink-0 h-8 border-solid" />
          <div className="self-stretch min-w-60 text-sm leading-none my-auto">
            <div className="flex items-center gap-3">
              <div className="text-[#667085] self-stretch my-auto">
                Recommendation:
              </div>
              <div className="text-green-600 self-stretch my-auto">
                {data.recommendation}
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex items-center gap-[9px] text-base whitespace-nowrap my-auto">
          <button 
            onClick={onApprove}
            className="justify-center items-center border shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] bg-[#1A2340] self-stretch flex gap-2 overflow-hidden text-[#FFF5E6] my-auto px-[18px] py-2.5 rounded-lg border-solid border-[#FFF5E6] hover:bg-[#2A3450] transition-colors"
          >
            <div className="self-stretch my-auto">
              Approve
            </div>
          </button>
          <button 
            onClick={onReject}
            className="justify-center items-center border shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] self-stretch flex gap-2 overflow-hidden text-red-600 bg-red-100 my-auto px-[18px] py-2.5 rounded-lg border-solid border-[#F9F5FF] hover:bg-red-200 transition-colors"
          >
            <div className="text-red-600 self-stretch my-auto">
              Reject
            </div>
          </button>
        </div>
      </div>
      
      <hr className="border-slate-200 border bg-slate-200 min-h-px w-full mt-6 border-solid max-md:max-w-full" />
      
      <div className="flex w-full gap-[40px_100px] text-sm font-medium leading-none justify-between flex-wrap mt-6 max-md:max-w-full">
        <div className="flex flex-col items-stretch justify-center w-[203px]">
          <div className="text-[#667085]">Borrower ID:</div>
          <div className="text-[#101828] mt-3">{data.borrowerId}</div>
        </div>
        <div className="flex flex-col items-stretch justify-center w-[203px]">
          <div className="text-[#667085]">Application Date:</div>
          <div className="text-[#101828] mt-3">{data.applicationDate}</div>
        </div>
        <div className="flex flex-col items-stretch justify-center w-[203px]">
          <div className="text-[#667085]">Loan Type:</div>
          <div className="text-[#101828] mt-3">{data.loanType}</div>
        </div>
      </div>
      
      <div className="flex w-full gap-[40px_100px] text-sm font-medium leading-none justify-between flex-wrap mt-6 max-md:max-w-full">
        <div className="flex flex-col items-stretch justify-center w-[203px]">
          <div className="text-[#667085]">Loan Officer:</div>
          <div className="text-[#101828] mt-3">{data.loanOfficer}</div>
        </div>
        <div className="flex flex-col items-stretch justify-center w-[203px]">
          <div className="text-[#667085]">Amount Requested:</div>
          <div className="text-[#101828] mt-3">{data.amountRequested}</div>
        </div>
        <div className="flex flex-col items-stretch justify-center w-[203px]">
          <div className="text-[#667085]">Underwriter:</div>
          <div className="text-[#101828] mt-3">{data.underwriter}</div>
        </div>
      </div>
    </div>
  );
};
