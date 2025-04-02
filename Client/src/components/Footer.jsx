import React from 'react';

export const Footer = () => {
  return (
    <footer className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-800 pt-8">
        <div className="text-center">
          <h3 className="uppercase text-sm font-bold mb-4 text-blue-500">Connect with us</h3>
          <div className="flex justify-center items-center mb-2">
            {/* <Phone className="w-4 h-4 mr-2 text-blue-500" /> */}
            <span className="text-sm">+1 (123) 456-7890</span>
          </div>
          <p className="text-sm text-gray-400">info@deepnetsoft.com</p>
        </div>

        <div className="flex justify-center items-center">
          <div className="text-blue-500 font-bold flex items-center">
            <img
              src="/src/assets/logo.png"
              alt="Logo"
              width={40}
              className="object-contain mr-3"
            />
            <span>DEEP NET</span>
            <span className="ml-1">SOFT</span>
          </div>
        </div>

        <div className="text-center">
          <h3 className="uppercase text-sm font-bold mb-4 text-blue-500">Find us</h3>
          <div className="flex justify-center items-center">
            {/* <MapPin className="w-4 h-4 mr-2 text-blue-500" /> */}
            <span className="text-sm">123 Main Ave, Phoenix, AZ 85001, Arizona</span>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        <p>© 2025 DeepNetSoft Solutions. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};