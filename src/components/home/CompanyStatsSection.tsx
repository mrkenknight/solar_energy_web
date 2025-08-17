'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Zap, CreditCard, Headphones } from 'lucide-react';

export default function CompanyStatsSection() {
    const stats = [
        {
            icon: Sun,
            title: "Unrivaled home solar and battery experience",
            description: "With 1 million homes and counting, no one has more installation expertise."
        },
        {
            icon: Zap,
            title: "Smart technology",
            description: "An ecosystem of innovative products that put you in control of your home energy needs."
        },
        {
            icon: CreditCard,
            title: "Payment solutions for every home",
            description: "Tailored plans including predictable monthly payments, little-to-no money down, and no-debt options."
        },
        {
            icon: Headphones,
            title: "The Sunrun Guarantee",
            description: "The industry's most comprehensive repairs, maintenance & monitoring program."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.6, 0.05, 0.01, 0.99]
            },
        },
    };

    return (
        <section className="py-24 lg:py-32 bg-[#050816] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-5xl font-bold mb-20 leading-tight max-w-4xl mx-auto"
                >
                    The #1 home solar & storage company in America
                </motion.h2>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
                >
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`text-left px-6 ${index > 0 ? 'border-l border-gray-700' : ''}`}
                        >
                            <item.icon className="w-8 h-8 text-white mb-6" />
                            <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}