'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CareersCTASection() {
    return (
        <section 
            className="relative py-32 lg:py-40 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1920&q=80')" }}
        >
            <div className="absolute inset-0 bg-gray-900/60"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-5xl font-bold mb-6"
                >
                    Working at Sunrun
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-lg text-gray-200 mb-10"
                >
                    Sunrun aims to promote our team's well-being with benefits and perks that enrich life at work and home to support healthy living.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <button className="border-2 border-white text-white rounded-full px-10 py-4 text-base font-medium hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
                        WORK AND LIFE @ SUNRUN
                    </button>
                </motion.div>
            </div>
        </section>
    );
}