import React, { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';

interface ForgotPasswordProps {
  onBack: () => void;
  onSubmit: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onBack, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter an email address or phone number.');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Send the email to the server - in a real app this would trigger a password reset
      // Here we just simulate the API call
      await apiRequest('POST', '/api/auth/forgot-password', { email });
      
      // Show success message
      setEmailSent(true);
    } catch (err) {
      console.error('Error in forgot password:', err);
      setError('Unable to process your request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full">
      {!emailSent ? (
        // Form to enter email
        <>
          <div className="text-center mb-5">
            <h2 className="text-[#1C1E21] text-lg font-semibold">
              Find Your Account
            </h2>
            <p className="text-[#65676B] text-sm mt-2">
              Please enter your email address or mobile number to search for your account.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-3">
              <input 
                type="text" 
                className="w-full px-3 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#1877F2]" 
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              {error && (
                <div className="text-red-500 text-sm text-center">
                  {error}
                </div>
              )}
            </div>
            
            <div className="flex space-x-3 pt-4 border-t border-gray-300">
              <button 
                type="button"
                onClick={onBack}
                className="flex-1 bg-[#e4e6eb] hover:bg-[#d8dadf] text-[#1C1E21] font-medium py-2 px-4 rounded-md text-sm transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="flex-1 bg-[#1877F2] hover:bg-[#166FE5] text-white font-medium py-2 px-4 rounded-md text-sm transition-colors"
                disabled={isSubmitting}
              >
                {!isSubmitting ? (
                  "Search"
                ) : (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 text-white inline mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Searching...
                  </span>
                )}
              </button>
            </div>
          </form>
        </>
      ) : (
        // Email sent confirmation
        <>
          <div className="text-center mb-5">
            <div className="flex flex-col items-center mb-4">
              <div className="h-16 w-16 rounded-full bg-[#e6f2ff] flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1877F2]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h2 className="text-[#1C1E21] text-lg font-semibold">
                Email Sent
              </h2>
            </div>
            
            <p className="text-[#65676B] text-sm mb-4">
              We sent an email to <span className="font-semibold">{email}</span> with a link to reset your password.
            </p>
            <p className="text-[#65676B] text-sm mb-5">
              Please check your email and click on the link to complete the password reset process.
            </p>
          </div>
          
          <div className="flex justify-center">
            <button 
              className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white font-medium py-2 px-4 rounded-md text-sm transition-colors"
              onClick={onSubmit}
            >
              Return to Login
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ForgotPassword;