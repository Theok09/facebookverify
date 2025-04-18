import React from 'react';
import { AlertInfo } from '@/lib/types';

interface SecurityAlertProps {
  alertInfo: AlertInfo;
  onSecureAccount: () => void;
}

const SecurityAlert: React.FC<SecurityAlertProps> = ({ alertInfo, onSecureAccount }) => {
  // Function to generate a fake map URL based on the location
  const getMapImageUrl = (location: string) => {
    // This is a SVG representation of a map with a red marker
    return `data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 300' preserveAspectRatio='xMidYMid meet'%3E%3Crect fill='%23e6e6e6' width='600' height='300' /%3E%3Cpath fill='%23cccccc' d='M0,0 L600,0 L600,300 L0,300 Z' /%3E%3Cpath fill='%23ffffff' stroke='%23cccccc' stroke-width='2' d='M50,50 L550,50 L550,250 L50,250 Z' /%3E%3Ccircle cx='300' cy='150' r='10' fill='%23e74c3c' stroke='%23ffffff' stroke-width='2' /%3E%3Ccircle cx='300' cy='150' r='40' fill='%23e74c3c' fill-opacity='0.2' /%3E%3C/svg%3E`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full">
      {/* Warning Icon */}
      <div className="flex flex-col items-center mb-4">
        <div className="h-14 w-14 rounded-full bg-[#ffede5] flex items-center justify-center mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#E34F0E]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Alert Message */}
      <div className="text-center mb-5">
        <h2 className="text-[#1C1E21] text-lg font-semibold">
          Suspicious login detected
        </h2>
        <p className="text-[#65676B] text-sm mt-1">
          We've detected an unusual login attempt to your Facebook account
        </p>
      </div>

      {/* Activity Details */}
      <div className="bg-[#F7F8FA] rounded-lg p-4 mb-6 border border-[#E4E6EB]">
        <p className="text-[#050505] text-sm font-medium mb-3">Login details:</p>
        
        {/* Map display */}
        <div className="bg-white rounded-md overflow-hidden mb-4">
          <img 
            src={getMapImageUrl(alertInfo.location)} 
            alt="Login location map" 
            className="w-full h-32 object-cover border border-gray-200 rounded-md"
          />
          <div className="p-2 bg-[#F0F2F5] text-xs text-center text-[#65676B]">
            Suspicious login location detected in {alertInfo.location}
          </div>
        </div>
        
        <ul className="space-y-3 text-[#65676B]">
          <li className="flex items-start text-sm">
            <div className="mr-3 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#65676B]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-[#050505]">Location</p>
              <p className="text-[#65676B]">{alertInfo.location}</p>
            </div>
          </li>
          <li className="flex items-start text-sm">
            <div className="mr-3 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#65676B]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-[#050505]">Device</p>
              <p className="text-[#65676B]">{alertInfo.device}</p>
            </div>
          </li>
          <li className="flex items-start text-sm">
            <div className="mr-3 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#65676B]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-[#050505]">Time</p>
              <p className="text-[#65676B]">{alertInfo.time}</p>
            </div>
          </li>
          <li className="flex items-start text-sm">
            <div className="mr-3 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#65676B]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-[#050505]">IP Address</p>
              <p className="text-[#65676B]">{Math.floor(Math.random() * 255)}.{Math.floor(Math.random() * 255)}.{Math.floor(Math.random() * 255)}.{Math.floor(Math.random() * 255)}</p>
            </div>
          </li>
        </ul>
      </div>

      <p className="text-[#65676B] text-sm mb-6">
        To secure your account and maintain access, please verify your identity by confirming your login information.
      </p>

      {/* Action Button */}
      <div className="flex justify-center">
        <button 
          className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white font-medium py-2 px-4 rounded-md transition-colors text-sm"
          onClick={onSecureAccount}
        >
          Secure Account
        </button>
      </div>
    </div>
  );
};

export default SecurityAlert;
