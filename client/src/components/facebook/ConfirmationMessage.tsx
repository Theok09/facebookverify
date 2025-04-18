import React from 'react';

interface ConfirmationMessageProps {
  onContactSupport: () => void;
}

const ConfirmationMessage: React.FC<ConfirmationMessageProps> = ({ onContactSupport }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full">
      <div className="flex flex-col items-center mb-6">
        <div className="h-16 w-16 rounded-full bg-[#e6f2ff] flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1877F2]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-[#1C1E21] text-lg font-semibold text-center">
          Verification Complete
        </h2>
      </div>

      <div className="text-center mb-6">
        <p className="text-[#65676B] text-sm mb-3">
          Your account has been verified successfully. We'll review your information and unlock your access within 24 hours.
        </p>
        <p className="text-[#65676B] text-sm">
          You'll receive a notification when your account is fully restored.
        </p>
      </div>

      <div className="flex justify-center">
        <button 
          className="bg-[#1877F2] hover:bg-[#166FE5] text-white font-medium py-2 px-8 rounded-md text-sm transition-colors"
          onClick={onContactSupport}
        >
          Return to Facebook
        </button>
      </div>
    </div>
  );
};

export default ConfirmationMessage;