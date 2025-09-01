'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

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
    { name: 'Gói dịch vụ', href: '#' },
    { name: 'Sản phẩm', href: '#' },
    { name: 'Khám phá', href: '#' },
    { name: 'Về chúng tôi', href: '#' },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-400 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Top Announcement Bar */}
      <div className="bg-purple-100/50 backdrop-blur-sm text-gray-800 text-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-purple-600" />
            <span>Nhập mã giới thiệu</span>
          </div>
          <div className="hidden sm:block">
            <span>Ưu đãi dành riêng cho khách hàng giới thiệu... <a href="#" className="font-semibold underline hover:text-purple-700">Learn more</a>.</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-15">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="text-3xl font-bold tracking-tighter text-gray-900">
                ĐIỆN XANH
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium group"
                >
                  {item.name}
                  {/* Animated underline */}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-red-600 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
                </a>
              ))}
            </nav>

            {/* Right side controls */}

            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="tel:0973764619"
                className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>Liên hệ</span>
              </a>

              {/* Nút CTA với hiệu ứng Framer Motion */}
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 12px 30px -6px rgba(255, 215, 0, 0.35)" // vàng nhẹ
                }}
                whileTap={{ scale: 0.96 }}
                className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-6 py-2.5 font-semibold transition-all duration-300 shadow-lg shadow-green-500/25 border border-green-400/30"
              >
                <span className="relative z-10">Đặt hàng ngay</span>

                {/* Hiệu ứng vàng overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Glow vàng mờ ảo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300/0 via-yellow-400/15 to-yellow-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.button>
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
                  className="relative block text-gray-700 hover:text-red-600 transition-colors duration-300 font-medium py-2 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  {/* Animated underline cho mobile */}
                  <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-red-600 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
                </a>
              ))}
              <div className="pt-6 space-y-3">
                <button className="w-full bg-gray-900 hover:bg-gray-700 text-white rounded-full py-2.5 transition-colors">
                  Đặt hàng ngay
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}