import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SERVER_URL } from '../server';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        
        <div className="border border-gray-600 rounded-lg p-6">
          <h3 className="uppercase text-sm font-bold mb-4 text-blue-500">Connect With Us</h3>
          <div className="flex justify-center items-center mb-2">
            <FaPhoneAlt className="w-4 h-4 mr-2 text-blue-500" />
            <span className="text-sm">+91 9567843340</span>
          </div>
          <div className="flex justify-center items-center">
            <FaEnvelope className="w-4 h-4 mr-2 text-blue-500" />
            <span className="text-sm">info@deepnetsoft.com</span>
          </div>
        </div>

        <div className="border border-gray-600 rounded-lg p-6 flex flex-col items-center relative">
          <img src={`${SERVER_URL}+"../public/logo.png"`} alt="Logo" width={80} className="absolute -top-6 bg-black px-2" />
          <div className="border-t border-gray-500 w-full mt-8 mb-2"></div>
          <h3 className="text-blue-500 font-bold text-lg">DEEP <span className="text-white">NET SOFT</span></h3>
        </div>

        <div className="border border-gray-600 rounded-lg p-6">
          <h3 className="uppercase text-sm font-bold mb-4 text-blue-500">Find Us</h3>
          <div className="flex justify-center items-center">
            <FaMapMarkerAlt className="w-4 h-4 mr-2 text-blue-500" />
            <span className="text-sm">First Floor, Geo Infopark, Infopark EXPY, Kakkanad</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex justify-between text-xs text-gray-500 mt-8 border-t border-gray-700 pt-4">
        <p className="text-left">© 2024 DeepNetSoft Solutions. All rights reserved.</p>
        <div className="flex space-x-4 text-right">
          <a href="#" className="hover:text-gray-400">Terms & Conditions</a>
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
