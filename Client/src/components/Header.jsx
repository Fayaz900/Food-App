import React from 'react';

export const Header = () => {
  return (
    <header className="container mx-auto p-4 flex justify-between items-center">
      <div className="flex items-center">
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
      <nav className="hidden md:flex space-x-6 uppercase text-sm">
        <a href="#" className="hover:text-blue-500">
          Home
        </a>
        <a href="#" className="text-blue-500">
          Menu
        </a>
        <a href="#" className="hover:text-blue-500">
          Make a Reservation
        </a>
        <a href="#" className="hover:text-blue-500">
          Contact Us
        </a>
      </nav>
    </header>
  );
};