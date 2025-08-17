'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function HeroSection() {
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"></div>

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
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
            }}
          >
            Your home for<br />
            clean energy
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-green-400 font-medium mb-10 max-w-lg"
            style={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.6)',
            }}
          >
            Freedom from high electric bills...forever
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <button
              className="bg-white text-black rounded-full px-10 py-4 text-lg font-bold hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Get a quote
            </button>
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