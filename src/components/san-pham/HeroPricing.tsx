// src/components/san-pham/HeroProduct.tsx
"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function HeroProduct() {
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
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Solar-Roof-Hero-Desktop"
          alt="Hero Product"
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
          <div className="absolute top-1/3 left-1/5 w-1 h-1 bg-green-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-blue-200/40 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/25 rounded-full animate-pulse delay-600"></div>
          <div className="absolute bottom-1/3 right-1/5 w-1 h-1 bg-green-200/20 rounded-full animate-pulse delay-900"></div>
          <div className="absolute top-3/4 right-2/5 w-1 h-1 bg-blue-200/30 rounded-full animate-pulse delay-1200"></div>
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
            <span className="inline-block hover:text-green-200 transition-colors duration-300">
              Sản phẩm xanh
            </span>
            <br />
            <span className="inline-block hover:text-blue-200 transition-colors duration-300 delay-100">
              Giá trị bền vững
            </span>
          </h1>
          
          {/* Mô tả với animation trượt */}
          <p className={`mt-6 text-lg md:text-xl text-gray-200 transition-all duration-1500 delay-500 leading-relaxed ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            Chúng tôi mang đến giải pháp năng lượng mặt trời thông minh, không chỉ tối ưu hiệu quả cho ngôi nhà bạn 
            mà còn góp phần xây dựng tương lai xanh cho cộng đồng.
          </p>
          
          {/* Button với hiệu ứng hover nâng cao */}
          <div className={`mt-8 transition-all duration-1500 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            <button className="group relative rounded-full border border-white bg-transparent px-6 py-3 text-lg font-medium text-white overflow-hidden transition-all duration-500 hover:border-green-300 hover:shadow-lg hover:shadow-green-500/20">
              
              {/* Hiệu ứng ripple khi hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
              
              {/* Hiệu ứng shine */}
              <div className="absolute inset-0 -top-2 -left-2 w-4 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <span className="relative z-10 group-hover:text-green-100 transition-colors duration-300">
                Khám phá sản phẩm
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Hiệu ứng viền sáng ở góc với theme xanh */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-green-200/10 to-transparent opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-200/10 to-transparent opacity-60"></div>
      
      {/* Hiệu ứng floating elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-green-400/20 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400/25 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
    </section>
  );
}