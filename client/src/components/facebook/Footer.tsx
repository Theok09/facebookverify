import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white py-6 mt-8 border-t border-gray-300">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-[#65676B] text-xs">
          <div className="flex flex-wrap gap-2 mb-3">
            <a href="#" className="hover:underline">English (US)</a>
            <a href="#" className="hover:underline">Español</a>
            <a href="#" className="hover:underline">Français (France)</a>
            <a href="#" className="hover:underline">中文(简体)</a>
            <a href="#" className="hover:underline">العربية</a>
            <a href="#" className="hover:underline">Português (Brasil)</a>
            <a href="#" className="hover:underline">Italiano</a>
            <a href="#" className="hover:underline">Deutsch</a>
            <a href="#" className="hover:underline">日本語</a>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            <a href="#" className="hover:underline">Sign Up</a>
            <a href="#" className="hover:underline">Log In</a>
            <a href="#" className="hover:underline">Messenger</a>
            <a href="#" className="hover:underline">Facebook Lite</a>
            <a href="#" className="hover:underline">Watch</a>
            <a href="#" className="hover:underline">Places</a>
            <a href="#" className="hover:underline">Games</a>
            <a href="#" className="hover:underline">Marketplace</a>
            <a href="#" className="hover:underline">Meta Pay</a>
          </div>
          <div className="border-t border-gray-300 pt-3">
            <p>Meta © {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;