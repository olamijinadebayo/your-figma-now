import React, { useState } from 'react';

interface Transaction {
  id: string;
  date: string;
  type: 'Inflow' | 'Outflow';
  category: string;
  description: string;
  amount: string;
  anomalyScore: number;
  isAnomaly: boolean;
}

interface TransactionsTableProps {
  transactions: Transaction[];
}

export const TransactionsTable: React.FC<TransactionsTableProps> = ({ transactions }) => {
  const [selectedTransactions, setSelectedTransactions] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(10);

  const handleSelectAll = () => {
    if (selectedTransactions.size === transactions.length) {
      setSelectedTransactions(new Set());
    } else {
      setSelectedTransactions(new Set(transactions.map(t => t.id)));
    }
  };

  const handleSelectTransaction = (id: string) => {
    const newSelected = new Set(selectedTransactions);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedTransactions(newSelected);
  };

  const getProgressBarWidth = (score: number) => {
    return `${score * 100}%`;
  };

  const getProgressBarColor = (score: number) => {
    return score > 0.5 ? 'bg-[#D92D20]' : 'bg-green-600';
  };

  return (
    <div className="w-full mt-4 max-md:max-w-full">
      <div className="flex w-full items-center gap-[40px_100px] font-medium whitespace-nowrap justify-between flex-wrap max-md:max-w-full">
        <h2 className="text-slate-950 text-base self-stretch my-auto">
          Transactions
        </h2>
        <button className="justify-center items-center border shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] self-stretch flex gap-2 overflow-hidden text-sm text-[#344054] leading-none bg-white my-auto px-4 py-2.5 rounded-lg border-solid border-[#D0D5DD] hover:bg-gray-50">
          <img
            src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/d3166e3300d0f0180e2299b8a315518a6d51c638?placeholderIfAbsent=true"
            alt="Filter"
            className="aspect-[1] object-contain w-2.5 self-stretch shrink-0 my-auto"
          />
          <div className="text-[#344054] self-stretch my-auto">
            Filter
          </div>
        </button>
      </div>
      
      <div className="border shadow-[0_1px_3px_0_rgba(16,24,40,0.10),0_1px_2px_0_rgba(16,24,40,0.06)] w-full overflow-hidden bg-white mt-4 rounded-lg border-solid border-[#EAECF0] max-md:max-w-full">
        <div className="flex w-full flex-wrap bg-white max-md:max-w-full">
          {/* Date Column */}
          <div className="w-[181px]">
            <div className="items-center flex min-h-11 w-full gap-3 bg-gray-50 px-6 py-3 border-b-[#EAECF0] border-b border-solid max-md:px-5">
              <div className="self-stretch flex items-center justify-center w-5 my-auto">
                <input
                  type="checkbox"
                  checked={selectedTransactions.size === transactions.length}
                  onChange={handleSelectAll}
                  className="border self-stretch flex min-h-5 w-5 h-5 bg-white my-auto rounded-md border-solid border-[#D0D5DD]"
                />
              </div>
              <div className="self-stretch flex items-center gap-1 text-xs text-[#667085] font-medium whitespace-nowrap my-auto">
                <div className="text-[#667085] self-stretch my-auto">
                  Date
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/a5b5f70481930cc666ac35bf17e5abb048a46a43?placeholderIfAbsent=true"
                  alt="Sort"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                />
              </div>
            </div>
            {transactions.map((transaction) => (
              <div key={transaction.id} className="items-center flex min-h-[72px] w-full gap-3 px-6 py-[26px] border-b-[#EAECF0] border-b border-solid max-md:px-5">
                <div className="self-stretch flex items-center justify-center w-5 my-auto">
                  <input
                    type="checkbox"
                    checked={selectedTransactions.has(transaction.id)}
                    onChange={() => handleSelectTransaction(transaction.id)}
                    className="border self-stretch flex min-h-5 w-5 h-5 bg-white my-auto rounded-md border-solid border-[#D0D5DD]"
                  />
                </div>
                <div className="text-[#101828] text-sm font-medium leading-none self-stretch my-auto">
                  {transaction.date}
                </div>
              </div>
            ))}
          </div>

          {/* Type Column */}
          <div className="text-xs text-[#B42318] font-medium whitespace-nowrap w-[132px]">
            <div className="items-center flex min-h-11 w-full gap-3 text-[#667085] bg-gray-50 px-6 py-[13px] border-b-[#EAECF0] border-b border-solid max-md:px-5">
              <div className="self-stretch flex items-center gap-1 my-auto">
                <div className="text-[#667085] self-stretch my-auto">
                  Type
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/a5bc73856c37d3fa135944d8f895ec05b89e9f99?placeholderIfAbsent=true"
                  alt="Sort"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                />
              </div>
            </div>
            {transactions.map((transaction) => (
              <div key={transaction.id} className="items-center flex min-h-[72px] w-full text-center px-6 py-[25px] border-b-[#EAECF0] border-b border-solid max-md:px-5">
                <div className="bg-blend-multiply self-stretch flex my-auto">
                  <div className={`justify-center items-center flex px-2 py-0.5 rounded-2xl ${
                    transaction.type === 'Inflow' 
                      ? 'bg-[#ECFDF3] text-[#027A48]' 
                      : 'bg-[#FEF3F2] text-[#B42318]'
                  }`}>
                    <div className="self-stretch my-auto">
                      {transaction.type}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Category Column */}
          <div className="text-sm text-[#667085] font-normal w-[139px]">
            <div className="items-center flex min-h-11 w-full gap-3 text-xs font-medium whitespace-nowrap bg-gray-50 px-6 py-[13px] border-b-[#EAECF0] border-b border-solid max-md:px-5">
              <div className="self-stretch flex items-center gap-1 my-auto">
                <div className="text-[#667085] self-stretch my-auto">
                  Category
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/a5bc73856c37d3fa135944d8f895ec05b89e9f99?placeholderIfAbsent=true"
                  alt="Sort"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                />
              </div>
            </div>
            {transactions.map((transaction) => (
              <div key={transaction.id} className="items-center flex min-h-[72px] w-full leading-none px-6 py-[26px] border-b-[#EAECF0] border-b border-solid max-md:px-5">
                <div className="text-[#667085] self-stretch my-auto flex items-center gap-1.5">
                  {transaction.category === 'Undefined' ? (
                    <>
                      <span style={{textDecoration: 'underline'}}>
                        {transaction.category}
                      </span>
                      <img
                        src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/6cadf84e20cd654826a7b992e084802a4040e912?placeholderIfAbsent=true"
                        alt="Info"
                        className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                      />
                    </>
                  ) : (
                    transaction.category
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Description Column */}
          <div className="min-w-60 text-sm text-[#667085] font-normal flex-1 shrink basis-[0%]">
            <div className="items-center flex min-h-11 w-full gap-3 text-xs font-medium whitespace-nowrap bg-gray-50 px-6 py-[13px] border-b-[#EAECF0] border-b border-solid max-md:px-5">
              <div className="self-stretch flex items-center gap-1 my-auto">
                <div className="text-[#667085] self-stretch my-auto">
                  Description
                </div>
              </div>
            </div>
            {transactions.map((transaction) => (
              <div key={transaction.id} className="items-center flex min-h-[72px] w-full leading-none px-6 py-[26px] border-b-[#EAECF0] border-b border-solid max-md:px-5">
                <div className="text-[#667085] self-stretch my-auto">
                  {transaction.description}
                </div>
              </div>
            ))}
          </div>

          {/* Amount Column */}
          <div className="text-sm text-[#101828] font-medium whitespace-nowrap w-[129px]">
            <div className="items-center flex min-h-11 w-full gap-3 text-xs text-[#667085] bg-gray-50 px-6 py-[13px] border-b-[#EAECF0] border-b border-solid max-md:px-5">
              <div className="self-stretch flex items-center gap-1 my-auto">
                <div className="text-[#667085] self-stretch my-auto">
                  Amount
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/a5bc73856c37d3fa135944d8f895ec05b89e9f99?placeholderIfAbsent=true"
                  alt="Sort"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                />
              </div>
            </div>
            {transactions.map((transaction) => (
              <div key={transaction.id} className="items-center flex min-h-[72px] w-full leading-none px-6 py-[26px] border-b-[#EAECF0] border-b border-solid max-md:px-5">
                <div className="text-[#101828] self-stretch my-auto">
                  {transaction.amount}
                </div>
              </div>
            ))}
          </div>

          {/* Anomaly Score Column */}
          <div className="w-[155px]">
            <div className="items-center flex min-h-11 w-full gap-3 text-xs text-[#667085] font-medium bg-gray-50 px-6 py-[13px] border-b-[#EAECF0] border-b border-solid max-md:px-5">
              <div className="self-stretch flex items-center gap-1 my-auto">
                <div className="text-[#667085] self-stretch my-auto">
                  Anomaly Score
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/a5bc73856c37d3fa135944d8f895ec05b89e9f99?placeholderIfAbsent=true"
                  alt="Sort"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                />
              </div>
            </div>
            {transactions.map((transaction) => (
              <div key={transaction.id} className="items-stretch flex min-h-[72px] w-full gap-3 px-6 py-4 border-b-[#EAECF0] border-b border-solid max-md:px-5">
                <div className="flex w-full items-center gap-3 h-full flex-1 shrink basis-[0%]">
                  <div className="self-stretch flex-1 shrink basis-[0%] my-auto rounded-lg">
                    <div className="rounded flex flex-col bg-[#EAECF0]">
                      <div 
                        className={`rounded flex shrink-0 h-2 ${getProgressBarColor(transaction.anomalyScore)}`}
                        style={{ width: getProgressBarWidth(transaction.anomalyScore) }}
                      />
                    </div>
                  </div>
                  <div className="text-[#344054] text-sm font-medium leading-none self-stretch my-auto">
                    {transaction.anomalyScore}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Anomaly Column */}
          <div className="text-sm text-green-600 font-medium whitespace-nowrap w-[161px]">
            <div className="items-center flex min-h-11 w-full gap-3 text-xs text-[#667085] bg-gray-50 px-6 py-[13px] border-b-[#EAECF0] border-b border-solid max-md:px-5">
              <div className="self-stretch flex items-center gap-1 my-auto">
                <div className="text-[#667085] self-stretch my-auto">
                  Anomaly
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/a5bc73856c37d3fa135944d8f895ec05b89e9f99?placeholderIfAbsent=true"
                  alt="Sort"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                />
              </div>
            </div>
            {transactions.map((transaction) => (
              <div key={transaction.id} className="items-center flex min-h-[72px] w-full leading-none px-6 py-[26px] border-b-[#EAECF0] border-b border-solid max-md:px-5">
                <div className={`self-stretch my-auto ${
                  transaction.isAnomaly ? 'text-[#D92D20]' : 'text-green-600'
                }`}>
                  {transaction.isAnomaly ? 'Yes' : 'No'}
                </div>
              </div>
            ))}
          </div>

          {/* Actions Column */}
          <div className="text-sm text-[#667085] font-medium whitespace-nowrap leading-none w-[82px]">
            <div className="flex min-h-11 w-full gap-3 bg-gray-50 border-b-[#EAECF0] border-b border-solid" />
            {transactions.map((transaction) => (
              <div key={transaction.id} className="items-center flex min-h-[72px] gap-3 px-6 py-[26px] border-b-[#EAECF0] border-b border-solid max-md:px-5">
                <button className="self-stretch flex items-center gap-2 overflow-hidden justify-center my-auto hover:text-[#101828]">
                  <div className="text-[#667085] self-stretch my-auto">
                    View
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination */}
        <div className="justify-between items-center flex w-full gap-[40px_100px] text-sm text-[#344054] font-medium leading-none flex-wrap pt-3 pb-4 px-6 border-t-[#EAECF0] border-t border-solid max-md:max-w-full max-md:px-5">
          <button 
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`justify-center items-center border shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] self-stretch flex gap-2 overflow-hidden whitespace-nowrap bg-white my-auto px-3.5 py-2 rounded-lg border-solid border-[#EAECF0] ${
              currentPage === 1 ? 'text-[#D0D5DD] cursor-not-allowed' : 'text-[#344054] hover:bg-gray-50'
            }`}
          >
            <div className="self-stretch my-auto">
              Previous
            </div>
          </button>
          <div className="text-[#344054] self-stretch my-auto">
            Page {currentPage} of {totalPages}
          </div>
          <button 
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="justify-center items-center border shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] self-stretch flex gap-2 overflow-hidden whitespace-nowrap bg-white my-auto px-3.5 py-2 rounded-lg border-solid border-[#D0D5DD] hover:bg-gray-50"
          >
            <div className="text-[#344054] self-stretch my-auto">
              Next
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
