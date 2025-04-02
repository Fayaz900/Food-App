import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'reservation', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="container mx-auto p-4 flex justify-between items-center bg-black sticky top-0 z-40">
        <div className="flex items-center mx-auto md:mx-0">
          <div className="text-blue-500 font-bold flex items-center">
            <img
              src="/src/assets/logo.png"
              alt="Logo"
              width={40}
              className="object-contain mr-3"
            />
            <span className="hidden sm:inline font-oswald">DEEP</span>
            <span className="hidden sm:inline ml-1 font-oswald text-white">NET</span>
            <span className="hidden sm:inline ml-1 font-oswald">SOFT</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 uppercase text-m font-oswald text-white">
          <a 
            href="#" 
            className={`hover:text-blue-500 transition-colors ${activeSection === 'home' ? 'text-blue-500' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            Home
          </a>
          <a 
            href="#" 
            className={`hover:text-blue-500 transition-colors ${activeSection === 'menu' ? 'text-blue-500' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('menu');
            }}
          >
            Menu
          </a>
          <a 
            href="#" 
            className={`hover:text-blue-500 transition-colors ${activeSection === 'reservation' ? 'text-blue-500' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('reservation');
            }}
          >
            Make a Reservation
          </a>
          <a 
            href="#" 
            className={`hover:text-blue-500 transition-colors ${activeSection === 'contact' ? 'text-blue-500' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
          >
            Contact Us
          </a>
        </nav>

        <button 
          className="md:hidden text-white focus:outline-none absolute right-4"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FiX size={24} />
          ) : (
            <FiMenu size={24} />
          )}
        </button>
      </header>

      {/* Mobile Sidebar Navigation */}
      <div className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div 
          className="fixed inset-0 bg-black bg-opacity-70" 
          onClick={toggleMenu}
        ></div>
        <div className="relative w-64 h-full bg-gray-900 shadow-lg">
          <div className="p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-blue-500"
              onClick={toggleMenu}
            >
              <FiX size={24} />
            </button>
            <nav className="mt-12 flex flex-col space-y-6 uppercase text-m font-oswald text-white">
              <a 
                href="#" 
                className={`hover:text-blue-500 px-4 py-2 transition-colors ${activeSection === 'home' ? 'text-blue-500' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
              >
                Home
              </a>
              <a 
                href="#" 
                className={`hover:text-blue-500 px-4 py-2 transition-colors ${activeSection === 'menu' ? 'text-blue-500' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('menu');
                }}
              >
                Menu
              </a>
              <a 
                href="#" 
                className={`hover:text-blue-500 px-4 py-2 transition-colors ${activeSection === 'reservation' ? 'text-blue-500' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('reservation');
                }}
              >
                Make a Reservation
              </a>
              <a 
                href="#" 
                className={`hover:text-blue-500 px-4 py-2 transition-colors ${activeSection === 'contact' ? 'text-blue-500' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};