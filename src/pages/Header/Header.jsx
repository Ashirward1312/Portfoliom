import React, { useState } from 'react';
import { Building2, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='w-full flex items-center justify-center bg-white shadow-sm sticky top-0 z-50'> 
      {/* main container */}
      <div className="max-w-[1200px] w-full px-4">
        {/* content container */}
        <header className="py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">PropertyPro</h1>
                <p className="text-xs text-gray-500">All India Properties</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition font-medium">
                About
              </a>
              <a href="#properties" className="text-gray-700 hover:text-blue-600 transition font-medium">
                Properties
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition font-medium">
                Services
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition font-medium">
                Contact
              </a>
            </nav>

            {/* Contact Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+919876543210" 
                className="hidden lg:flex items-center space-x-2 bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">Call Now</span>
              </a>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#home" 
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#properties" 
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Properties
                </a>
                <a 
                  href="#services" 
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                
                {/* Mobile Contact Button */}
                <a 
                  href="tel:+919876543210" 
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition font-medium"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </a>
              </nav>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}