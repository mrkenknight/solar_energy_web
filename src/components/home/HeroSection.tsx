'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.6, 0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute z-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1920&q=80"
      >
        <source
          src="https://freedomforever.com/wp-content/uploads/2024/03/website_intro_header-1080p-1.mp4"
          type="video/mp4"
        />
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-house-with-solar-panels-42464-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Subtle overlay only for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="max-w-2xl">
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
            style={{
              color: '#ffffff', // giữ trắng sáng
              WebkitTextStroke: '1px rgba(255,255,255,0.4)', // viền sáng nhẹ quanh chữ
              textShadow: '0 4px 12px rgba(0,0,0,0.4)',      // bóng mềm để tách khỏi nền
            }}
          >
            ĐIỆN XANH SOLAR<br />
            VĨNH PHÚC
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-4xl md:text-6xl text-white font-lavishly mb-10 whitespace-nowrap"
            style={{
              color: '#ffffff', // trắng sáng
              WebkitTextStroke: '0.5px rgba(255,255,255,0.3)', // viền sáng mảnh hơn tiêu đề
              textShadow: '0 3px 8px rgba(0,0,0,0.35)',        // bóng mềm, giúp chữ nổi mà vẫn tinh tế
            }}
          >
            Điện xanh lan tỏa - Chuyển hóa tương lai
          </motion.p>

          {/* Enhanced CTA Button */}
          <motion.div 
            variants={itemVariants}
            className="relative inline-block"
          >
            {/* Glow effect background */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl opacity-30"
              style={{
                background: 'linear-gradient(135deg, #16a34a, #059669, #047857)', // xanh lá emerald
              }}
              animate={{
                scale: isHovered ? 1.2 : 1,
                opacity: isHovered ? 0.5 : 0.3,
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Main button */}
            <motion.button
              className="relative group overflow-hidden rounded-full px-12 py-5 text-lg font-bold text-white shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #16a34a, #059669, #047857)',
              }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 25px 50px rgba(250, 204, 21, 0.4)', // glow vàng
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut"
              }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent"
                animate={{
                  translateX: isHovered ? '200%' : '-100%',
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut"
                }}
              />
              
              {/* Ripple effect on hover */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(250,204,21,0.3) 0%, transparent 70%)', // ripple vàng
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: isHovered ? 2 : 0,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Solar icon and text */}
              <span className="relative flex items-center gap-3">
                <motion.svg 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ 
                    rotate: isHovered ? 180 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </motion.svg>
                <motion.span
                  animate={{
                    x: isHovered ? 2 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Đặt hàng ngay
                </motion.span>
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ 
                    x: isHovered ? 5 : 0,
                    opacity: isHovered ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </span>
              
              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/50"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.button>
            
            {/* Floating particles effect */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-green-400/60 rounded-full"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [-5, -15, -5],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}