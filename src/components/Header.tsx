import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="self-stretch w-full overflow-hidden bg-white px-8 border-b-[#EAECF0] border-b border-solid max-md:max-w-full max-md:px-5">
      <div className="flex min-h-[72px] w-full items-center gap-[40px_100px] justify-between flex-wrap px-8 max-md:max-w-full max-md:px-5">
        <div className="self-stretch flex min-w-60 items-center gap-4 my-auto max-md:max-w-full">
          <div className="self-stretch flex items-center gap-[5px] my-auto">
            <img
              src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/cc33327b8d58413e06172f331a0a2fd5af8e7a45?placeholderIfAbsent=true"
              alt="Company Logo"
              className="aspect-[3.04] object-contain w-[73px] self-stretch my-auto"
            />
          </div>
          <nav className="self-stretch flex min-w-60 items-center gap-1 text-base text-[#344054] font-medium whitespace-nowrap my-auto">
            <button className="items-center self-stretch flex gap-2 overflow-hidden text-[#101828] bg-[#EAECF0] my-auto px-3 py-2 rounded-md">
              <div className="self-stretch flex items-center gap-3 my-auto">
                <div className="text-[#101828] self-stretch my-auto">
                  Dashboard
                </div>
              </div>
            </button>
            <button className="items-center self-stretch flex gap-2 overflow-hidden bg-white my-auto px-3 py-2 rounded-md hover:bg-gray-50">
              <div className="self-stretch flex items-center gap-3 my-auto">
                <div className="text-[#344054] self-stretch my-auto">
                  Borrowers
                </div>
              </div>
            </button>
            <button className="items-center self-stretch flex gap-2 overflow-hidden bg-white my-auto px-3 py-2 rounded-md hover:bg-gray-50">
              <div className="self-stretch flex items-center gap-3 my-auto">
                <div className="text-[#344054] self-stretch my-auto">
                  Portfolio
                </div>
              </div>
            </button>
          </nav>
        </div>
        <div className="self-stretch flex items-center gap-4 my-auto">
          <div className="self-stretch flex gap-1 my-auto">
            <button className="items-center flex gap-[40px_105px] overflow-hidden w-10 h-10 bg-white p-2.5 rounded-md hover:bg-gray-50">
              <img
                src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/d1c556c5f584f01b0ef47327f32a147f8ced1c0e?placeholderIfAbsent=true"
                alt="Notifications"
                className="aspect-[1] object-contain w-5"
              />
            </button>
            <button className="items-center flex gap-[40px_105px] overflow-hidden w-10 h-10 bg-white p-2.5 rounded-md hover:bg-gray-50">
              <img
                src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/c746af05f9d1a6bbaf22848dffe51211c18cab2c?placeholderIfAbsent=true"
                alt="Settings"
                className="aspect-[1] object-contain w-5"
              />
            </button>
          </div>
          <button className="self-stretch w-10 my-auto">
            <img
              src="https://api.builder.io/api/v1/image/assets/f105a8cba51a4a1393387348a1cf27b4/5092258052b9a6feef5e0772d1455239ed12f960?placeholderIfAbsent=true"
              alt="User Profile"
              className="aspect-[1] object-contain w-10"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
