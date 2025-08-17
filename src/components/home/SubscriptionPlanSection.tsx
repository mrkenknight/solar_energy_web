'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function SubscriptionPlanSection() {
    const features = [
        "Best-in-class solar panels and battery storage",
        "Industry-leading equipment guarantee",
        "Predictable monthly payments with locked-in rates"
    ];

    const fadeInRight = {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
        viewport: { once: true }
    }
    
    const fadeInLeft = {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
        viewport: { once: true }
    }

    return (
        <section className="py-24 lg:py-32 bg-[#fcfaf6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                     {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.99] }}
                        viewport={{ once: true }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                             <img 
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1287&q=80" 
                                alt="Man using laptop on a bench"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-blue-900/10 to-transparent"></div>
                        </div>
                    </motion.div>
                    
                    {/* Content */}
                    <motion.div {...fadeInLeft}>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">PLANS & PRICING</p>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                           Sunrun Subscription Plan
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg">
                            From installation to maintenance, enjoy an effortless and affordable solar experience with the Sunrun Subscription Plan.
                        </p>

                        <div className="space-y-4 mb-10">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-3"
                                >
                                    <Sparkles className="w-5 h-5 text-gray-800 flex-shrink-0" />
                                    <span className="text-gray-800 font-medium">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                        
                        <button className="border-2 border-gray-800 text-gray-800 rounded-full px-8 py-3 hover:bg-gray-800 hover:text-white transition-all duration-300 font-medium">
                            Compare plans
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}