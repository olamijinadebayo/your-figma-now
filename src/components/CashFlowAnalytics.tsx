import React, { useState } from 'react';

interface MetricData {
  avgDailyInflow: string;
  avgDailyOutflow: string;
  totalInflow: string;
  totalOutflow: string;
}

interface CashFlowAnalyticsProps {
  metrics: MetricData;
}

export const CashFlowAnalytics: React.FC<CashFlowAnalyticsProps> = ({ metrics }) => {
  const [selectedDateRange, setSelectedDateRange] = useState('Jan 6, 2022 – Jan 13, 2022');
  const [selectedAccount, setSelectedAccount] = useState('One account Selected');

  return (
    <div className="border w-full bg-white mt-4 p-7 rounded-2xl border-solid border-[#D0D5DD] max-md:max-w-full max-md:px-5">
      <div className="flex w-full gap-3 flex-wrap max-md:max-w-full">
        <div className="text-sm text-[#344054] font-medium leading-none">
          <button className="justify-center items-center border shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] flex gap-2 overflow-hidden bg-white px-4 py-2.5 rounded-lg border-solid border-[#D0D5DD] hover:bg-gray-50">
            <img
              src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/92c80e4e7601668b7ca3eee1fa8239254f1d9f5a?placeholderIfAbsent=true"
              alt="Calendar"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
            <div className="text-[#344054] self-stretch my-auto">
              {selectedDateRange}
            </div>
          </button>
        </div>
        <div className="flex min-w-60 items-stretch gap-3 flex-wrap max-md:max-w-full">
          <div className="text-sm text-[#344054] font-medium leading-none my-auto">
            <button className="justify-center items-center border shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] flex gap-2 overflow-hidden bg-white px-4 py-2.5 rounded-lg border-solid border-[#D0D5DD] hover:bg-gray-50">
              <div className="text-[#344054] self-stretch my-auto">
                {selectedAccount}
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/cfbbee060438bde425af14dd03d3aff765241c12?placeholderIfAbsent=true"
                alt="Dropdown"
                className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              />
            </button>
          </div>
          <div className="flex min-w-60 items-stretch gap-2 h-full w-[570px] max-md:max-w-full">
            <div className="flex items-stretch gap-1.5 h-full">
              <div className="justify-center items-center flex gap-[3px] h-full bg-gray-50 pl-3 pr-[7px] py-0.5 rounded-md">
                <div className="self-stretch flex items-center gap-[5px] text-sm text-[#344054] font-medium whitespace-nowrap text-center leading-none my-auto">
                  <div className="text-[#344054] self-stretch my-auto">
                    Checkings(192829031)
                  </div>
                </div>
                <button className="self-stretch flex flex-col overflow-hidden items-stretch justify-center w-4 my-auto p-0.5 rounded-[3px] hover:bg-gray-200">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/380ec976bbd544e94f7543c2f462f4e272d4a9f2?placeholderIfAbsent=true"
                    alt="Remove"
                    className="aspect-[1] object-contain w-3"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex w-full gap-6 flex-wrap mt-6 max-md:max-w-full">
        <div className="justify-center items-stretch border flex min-w-60 flex-col w-[260px] bg-white p-5 rounded-lg border-solid border-[#EAECF0]">
          <div className="w-full">
            <div className="flex max-w-full w-[203px] flex-col items-stretch font-medium justify-center">
              <div className="text-[#667085] text-sm leading-none">
                Average Daily Inflow
              </div>
              <div className="text-green-600 text-base mt-3">
                {metrics.avgDailyInflow}
              </div>
            </div>
            <hr className="border-slate-200 border bg-slate-200 min-h-px w-full mt-6 border-solid" />
            <div className="flex max-w-full w-[203px] flex-col items-stretch font-medium justify-center mt-6">
              <div className="text-[#667085] text-sm leading-none">
                Average Daily Outflow
              </div>
              <div className="text-red-600 text-base mt-3">
                {metrics.avgDailyOutflow}
              </div>
            </div>
            <hr className="border-slate-200 border bg-slate-200 min-h-px w-full mt-6 border-solid" />
            <div className="flex w-full gap-3 mt-6">
              <div className="flex flex-col items-stretch justify-center w-[94px]">
                <div className="text-[#667085] text-sm font-medium leading-none">
                  Total Inflow
                </div>
                <div className="text-[#101828] text-base font-semibold mt-3">
                  {metrics.totalInflow}
                </div>
              </div>
              <div className="border-slate-200 border bg-slate-200 w-px shrink-0 h-[52px] border-solid" />
              <div className="flex flex-col items-stretch justify-center flex-1 shrink basis-[0%]">
                <div className="text-[#667085] text-sm font-medium leading-none">
                  Total Outflow
                </div>
                <div className="text-[#101828] text-base font-semibold mt-3">
                  {metrics.totalOutflow}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="min-w-60 flex-1 shrink basis-10 max-md:max-w-full">
          <div className="flex w-full flex-col text-sm text-[#667085] font-normal leading-none max-md:max-w-full">
            <div className="flex gap-[13px]">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="bg-green-600 self-stretch flex w-2 shrink-0 h-2 fill-green-600 my-auto rounded-[50%]" />
                <div className="text-[#667085] self-stretch my-auto">
                  Inflow
                </div>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="bg-red-600 self-stretch flex w-2 shrink-0 h-2 fill-red-600 my-auto rounded-[50%]" />
                <div className="text-[#667085] self-stretch my-auto">
                  Outflow
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[rgba(248,213,85,1)] self-stretch flex w-2 shrink-0 h-2 my-auto rounded-[50%]" />
                <div className="text-[#667085] self-stretch my-auto">
                  Est. Net Income
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full items-stretch gap-7 mt-6 max-md:max-w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/04af02a2cbdb18e7fa26f30e72ca8b7db3a85619?placeholderIfAbsent=true"
              alt="Cash Flow Chart"
              className="aspect-[2.08] object-contain w-full min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full"
            />
          </div>
        </div>
        
        <div className="items-stretch self-stretch border flex min-w-60 flex-col overflow-hidden text-sm leading-none w-[333px] bg-white p-5 rounded-xl border-solid border-[#EAECF0]">
          <div className="flex w-full gap-[40px_75px] text-[#344054] font-medium justify-between">
            <img
              src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/e3373bbe896fe8f778fd629f8bccc0fc58b78c0b?placeholderIfAbsent=true"
              alt="Filter"
              className="aspect-[1] object-contain w-4 shrink-0"
            />
            <div className="text-[#344054]">
              Inflow Category
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/119c376244a3eb48dcb999ac60bf662c4fbcaf58?placeholderIfAbsent=true"
              alt="Sort"
              className="aspect-[1] object-contain w-4 shrink-0"
            />
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/65f5c64c9bf61ea08864d055ae2c388e99a66a29?placeholderIfAbsent=true"
            alt="Pie Chart"
            className="aspect-[1] object-contain w-[180px] self-center max-w-full mt-[46px] max-md:mt-10"
          />
          <div className="flex w-full items-stretch gap-[40px_100px] text-[#667085] font-normal justify-between mt-[46px] max-md:mt-10">
            <div className="flex flex-col items-stretch justify-center">
              <div className="flex items-center gap-2">
                <div className="bg-yellow-600 self-stretch flex w-2 shrink-0 h-2 fill-yellow-600 my-auto rounded-[50%]" />
                <div className="text-[#667085] self-stretch my-auto">
                  Item 1
                </div>
              </div>
              <div className="flex items-center gap-2 mt-[13px]">
                <div className="bg-yellow-800 self-stretch flex w-2 shrink-0 h-2 fill-yellow-800 my-auto rounded-[50%]" />
                <div className="text-[#667085] self-stretch my-auto">
                  Item 2
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="bg-[rgba(248,213,85,1)] self-stretch flex w-2 shrink-0 h-2 my-auto rounded-[50%]" />
                <div className="text-[#667085] self-stretch my-auto">
                  Item 3
                </div>
              </div>
              <div className="flex items-center gap-2 mt-[13px]">
                <div className="bg-yellow-800 self-stretch flex w-2 shrink-0 h-2 fill-yellow-800 my-auto rounded-[50%]" />
                <div className="text-[#667085] self-stretch my-auto">
                  Item 4
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
