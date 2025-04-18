import React, { useState, useEffect } from 'react';

interface TwoFactorAuthProps {
  onVerify: () => void;
  onCancel: () => void;
}

const TwoFactorAuth: React.FC<TwoFactorAuthProps> = ({ onVerify, onCancel }) => {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds countdown
  
  // Countdown effect
  useEffect(() => {
    if (timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft]);
  
  // Handle code submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (code.length < 6) {
      setError('Please enter the 6-digit code.');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate verification process
    setTimeout(() => {
      setIsLoading(false);
      onVerify();
    }, 1500);
  };
  
  // Generate new code - just for show, doesn't actually send anything
  const handleResendCode = () => {
    setTimeLeft(60);
    setError(null);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full">
      <div className="flex flex-col items-center mb-6">
        <div className="h-16 w-16 rounded-full bg-[#e6f2ff] flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1877F2]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-[#1C1E21] text-lg font-semibold text-center">
          Two-Factor Authentication
        </h2>
      </div>
      
      <p className="text-[#65676B] text-sm mb-4 text-center">
        For your security, we've sent a 6-digit code to your phone number ending in ******789.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="code" className="text-sm font-medium text-[#1C1E21]">
            Enter security code
          </label>
          <input
            id="code"
            type="text"
            placeholder="Enter 6-digit code"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1877F2]"
            value={code}
            onChange={(e) => {
              // Only allow numbers and max 6 digits
              const value = e.target.value.replace(/[^0-9]/g, '');
              if (value.length <= 6) {
                setCode(value);
                if (error) setError(null);
              }
            }}
            maxLength={6}
          />
          
          {error && (
            <p className="text-red-500 text-xs mt-1">{error}</p>
          )}
        </div>
        
        <div className="flex flex-col space-y-3">
          <button 
            type="submit"
            className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white font-medium py-2 px-4 rounded-md transition-colors text-sm"
            disabled={isLoading}
          >
            {!isLoading ? (
              "Verify"
            ) : (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 text-white inline mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Verifying...
              </span>
            )}
          </button>
          
          <button 
            type="button" 
            className="text-[#1877F2] text-sm font-medium"
            onClick={handleResendCode}
            disabled={timeLeft > 0}
          >
            {timeLeft > 0 ? (
              `Resend code in ${timeLeft}s`
            ) : (
              "Resend code"
            )}
          </button>
          
          <button
            type="button"
            className="text-[#1C1E21] text-sm"
            onClick={onCancel}
          >
            Try another way
          </button>
        </div>
      </form>
    </div>
  );
};

export default TwoFactorAuth;