'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Plans & Pricing', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Learn', href: '#' },
    { name: 'Company', href: '#' },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-400 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Top Announcement Bar */}
      <div className="bg-purple-100/50 backdrop-blur-sm text-gray-800 text-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-purple-600" />
            <span>Enter your location</span>
          </div>
          <div className="hidden sm:block">
            <span>SUNRUN CUSTOMERS: Battery storage is now available... <a href="#" className="font-semibold underline hover:text-purple-700">Learn more</a>.</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="text-3xl font-bold tracking-tighter text-gray-900">
                sunrun
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="hidden lg:flex items-center space-x-6">
              <a href="#" className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                Call us at (833) 324-5886
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Login
              </a>
              <button className="bg-gray-900 hover:bg-gray-700 text-white rounded-full px-6 py-2.5 transition-colors">
                Get a quote
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-6 space-y-3">
                <button className="w-full bg-gray-900 hover:bg-gray-700 text-white rounded-full py-2.5 transition-colors">
                  Get a quote
                </button>
                <a href="#" className="block text-center text-sm text-gray-600 hover:text-gray-900 transition-colors py-2">
                  Login
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}