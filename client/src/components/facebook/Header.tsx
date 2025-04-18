import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      {/* FACEBOOK HEADER */}
      <header className="w-full bg-[#1877F2] px-4 py-2 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mr-2" viewBox="0 0 36 36" fill="currentColor">
              <path d="M36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.984 6.582 16.444 15.188 17.784V23.25h-4.572V18h4.572v-3.968c0-4.509 2.685-7.002 6.797-7.002 1.969 0 4.025.352 4.025.352v4.422h-2.266c-2.231 0-2.93 1.384-2.93 2.804V18h4.986l-.797 5.25h-4.189v12.534C29.418 34.444 36 26.984 36 18Z" />
            </svg>
            <span className="text-white font-bold text-2xl hidden md:block">facebook</span>
          </div>
          
          <div className="flex items-center">
            <span className="bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">1</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
