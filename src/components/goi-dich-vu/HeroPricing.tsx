// src/components/goi-dich-vu/HeroPricing.tsx
"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function HeroPricing() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-[700px] flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image với hiệu ứng parallax nhẹ */}
      <div className="absolute inset-0 transform transition-transform duration-1000 hover:scale-105">
        <Image
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/price-solar-desktop"
          alt="Hero Pricing"
          fill
          className="object-cover"
          priority
        />
        
        {/* Overlay gradient động */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent transition-all duration-700"></div>
        
        {/* Hiệu ứng spotlight theo chuột */}
        <div 
          className="absolute pointer-events-none opacity-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, transparent 50%)`,
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          }}
        />
        
        {/* Các hạt sáng nhỏ trang trí */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-1/6 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/25 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/6 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-700"></div>
        </div>
      </div>

      {/* Content với animation */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className={`w-full max-w-2xl text-white transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Tiêu đề với hiệu ứng gõ chữ tinh tế */}
          <h1 className={`text-4xl md:text-5xl font-bold leading-tight transition-all duration-1500 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <span className="inline-block hover:text-blue-200 transition-colors duration-300">
              Giải pháp linh hoạt
            </span>
            <br />
            <span className="inline-block hover:text-green-200 transition-colors duration-300 delay-100">
              Năng lượng bền vững
            </span>
          </h1>
          
          {/* Mô tả với animation trượt */}
          <p className={`mt-6 text-lg md:text-xl text-gray-200 transition-all duration-1500 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            Hãy chọn giải pháp phù hợp nhất với mái nhà và nhu cầu sử dụng của gia đình. 
            Chúng tôi đồng hành cùng bạn trên hành trình tiết kiệm và bảo vệ môi trường...
          </p>
          
          {/* Button với hiệu ứng hover nâng cao */}
          <div className={`mt-8 transition-all duration-1500 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            <button className="group relative rounded-full border border-white bg-transparent px-6 py-3 text-lg font-medium text-white overflow-hidden transition-all duration-500 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/20">
              
              {/* Hiệu ứng ripple khi hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
              
              {/* Hiệu ứng shine */}
              <div className="absolute inset-0 -top-2 -left-2 w-4 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <span className="relative z-10 group-hover:text-blue-100 transition-colors duration-300">
                Nhận báo giá
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Hiệu ứng viền sáng ở góc */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/10 to-transparent opacity-50"></div>
    </section>
  );
}