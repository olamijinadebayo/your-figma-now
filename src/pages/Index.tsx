import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { ProgressSteps } from '@/components/ProgressSteps';
import { ApplicationCard } from '@/components/ApplicationCard';
import { IntelligenceSummary } from '@/components/IntelligenceSummary';
import { TabNavigation } from '@/components/TabNavigation';
import { CashFlowAnalytics } from '@/components/CashFlowAnalytics';
import { TransactionsTable } from '@/components/TransactionsTable';

const Index = () => {
  const [activeTab, setActiveTab] = useState('cash-flow');

  const progressSteps = [
    { id: 'submitted', label: 'Submitted', status: 'completed' as const },
    { id: 'in-review', label: 'In Review', status: 'current' as const },
    { id: 'approved', label: 'Approved', status: 'pending' as const },
    { id: 'funded', label: 'Funded', status: 'pending' as const },
  ];

  const applicationData = {
    applicationId: 'LA-2024-0892',
    recommendation: 'Recommend Reject',
    borrowerId: 'IDC1092EA23',
    applicationDate: '12/09/2025',
    loanType: 'Loan Product 1',
    loanOfficer: 'Caleb Mark',
    amountRequested: '$20,000',
    underwriter: 'Emmanuella Areal',
  };

  const intelligenceSummary = "The business shows a healthy balance of inflows and outflows. Revenues are growing at 20% YoY with profits growing at a similar rate. However, the owner shows signs of financial distress with 2 NSFs in the past 6 months. Furthermore, several uncategorized transactions were found in amounts above $1000. Please consult the Transactions table under Cash Flow Analytics for more information.";

  const tabs = [
    { id: 'cash-flow', label: 'Cash Flow Analytics', isActive: activeTab === 'cash-flow' },
    { id: 'relationship', label: 'Relationship & Impact', isActive: activeTab === 'relationship' },
    { id: 'financial-stability', label: 'Business & Personal Financial Stability', isActive: activeTab === 'financial-stability' },
    { id: 'documents', label: 'Financials & Supporting Documents', isActive: activeTab === 'documents' },
  ];

  const cashFlowMetrics = {
    avgDailyInflow: '$12,000',
    avgDailyOutflow: '$12,000',
    totalInflow: '$12,000',
    totalOutflow: '$12,000',
  };

  const transactions = [
    {
      id: '1',
      date: '21/09/24',
      type: 'Inflow' as const,
      category: 'Salary',
      description: 'Monthly salary payment',
      amount: '$20,000',
      anomalyScore: 0.8,
      isAnomaly: true,
    },
    {
      id: '2',
      date: '21/09/24',
      type: 'Outflow' as const,
      category: 'Rent',
      description: 'Monthly rent payment - higher than usual',
      amount: '$35,000',
      anomalyScore: 0.1,
      isAnomaly: false,
    },
    {
      id: '3',
      date: '21/09/24',
      type: 'Outflow' as const,
      category: 'Undefined',
      description: 'Caleb Mark',
      amount: '$25,000',
      anomalyScore: 0.3,
      isAnomaly: false,
    },
  ];

  const handleApprove = () => {
    console.log('Application approved');
  };

  const handleReject = () => {
    console.log('Application rejected');
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="items-center flex flex-col overflow-hidden bg-white pb-[25px]">
      <Header />
      
      <div className="flex w-full max-w-[1340px] items-center gap-[40px_100px] justify-between flex-wrap mt-5 max-md:max-w-full">
        <nav className="self-stretch flex items-center gap-3 my-auto" aria-label="Breadcrumb">
          <div className="self-stretch flex w-5 my-auto">
            <img
              src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/c33c4215a8a66291357334daab3996361d525ff7?placeholderIfAbsent=true"
              alt="Home"
              className="aspect-[1] object-contain w-5"
            />
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/09fd411f06e1c43f6544c4a564b90e5a39410f82?placeholderIfAbsent=true"
            alt="Breadcrumb separator"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          />
          <div className="self-stretch flex items-center text-sm text-[#111925] font-medium leading-none justify-center my-auto">
            <div className="self-stretch my-auto">
              Loan Application
            </div>
          </div>
        </nav>
        
        <button className="justify-center items-center border self-stretch flex gap-2 overflow-hidden text-base text-[#344054] font-medium whitespace-nowrap bg-white my-auto px-[18px] py-2.5 rounded-lg border-solid border-[#D0D5DD] hover:bg-gray-50">
          <img
            src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/b7bf769314dde6c9c8e5d784118df62186648c03?placeholderIfAbsent=true"
            alt="Message icon"
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
          />
          <div className="text-[#344054] self-stretch my-auto">
            Messaging
          </div>
        </button>
      </div>
      
      <div className="z-10 flex w-full max-w-[1345px] flex-col items-stretch -mt-11 max-md:max-w-full">
        <ProgressSteps steps={progressSteps} />
        
        <div className="w-full mt-3 max-md:max-w-full">
          <div className="flex w-full justify-between max-md:max-w-full">
            <ApplicationCard 
              data={applicationData}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          </div>
          
          <IntelligenceSummary summary={intelligenceSummary} />
          
          <div className="w-full mt-8 max-md:max-w-full">
            <TabNavigation 
              tabs={tabs}
              onTabChange={handleTabChange}
            />
            
            {activeTab === 'cash-flow' && (
              <>
                <CashFlowAnalytics metrics={cashFlowMetrics} />
                <TransactionsTable transactions={transactions} />
              </>
            )}
            
            {activeTab === 'relationship' && (
              <div className="border w-full bg-white mt-4 p-7 rounded-2xl border-solid border-[#D0D5DD] max-md:max-w-full max-md:px-5">
                <div className="text-center py-20">
                  <h3 className="text-xl font-semibold text-[#101828] mb-2">Relationship & Impact</h3>
                  <p className="text-[#667085]">This section is under development</p>
                </div>
              </div>
            )}
            
            {activeTab === 'financial-stability' && (
              <div className="border w-full bg-white mt-4 p-7 rounded-2xl border-solid border-[#D0D5DD] max-md:max-w-full max-md:px-5">
                <div className="text-center py-20">
                  <h3 className="text-xl font-semibold text-[#101828] mb-2">Business & Personal Financial Stability</h3>
                  <p className="text-[#667085]">This section is under development</p>
                </div>
              </div>
            )}
            
            {activeTab === 'documents' && (
              <div className="border w-full bg-white mt-4 p-7 rounded-2xl border-solid border-[#D0D5DD] max-md:max-w-full max-md:px-5">
                <div className="text-center py-20">
                  <h3 className="text-xl font-semibold text-[#101828] mb-2">Financials & Supporting Documents</h3>
                  <p className="text-[#667085]">This section is under development</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
