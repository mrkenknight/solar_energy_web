'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function AppSection() {
    const features = [
        "Track your system's performance*",
        "Pay your bills with ease",
        "Live chat for support"
    ];

    return (
        <section className="py-24 lg:py-32 bg-[#fcfaf6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">SUNRUN APP</p>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Monitor your system, anytime, anywhere
                        </h2>

                        <div className="space-y-5 mb-10">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-4"
                                >
                                    <CheckCircle className="w-6 h-6 text-gray-900 flex-shrink-0" />
                                    <p className="text-lg text-gray-700">{feature}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex items-center space-x-6">
                            <img 
                                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.sunrun.com/&bgcolor=fcfaf6" 
                                alt="QR Code" 
                                className="w-24 h-24 rounded-lg" 
                            />
                            <div className="space-y-3">
                                <a href="#" aria-label="Download on the App Store">
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                                        alt="App Store" 
                                        className="h-12 hover:opacity-80 transition-opacity" 
                                    />
                                </a>
                                <a href="#" aria-label="Get it on Google Play">
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                                        alt="Google Play" 
                                        className="h-12 hover:opacity-80 transition-opacity" 
                                    />
                                </a>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-8">*Your app experience may vary based on your system's equipment.</p>
                    </motion.div>

                    {/* Video Demo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.99] }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="relative w-full max-w-lg">
                            <iframe
                                src="https://player.vimeo.com/video/1064379058?h=44dcf4aab7&title=0&byline=0&portrait=0&color=a5c9ff&muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963&api=1&player_id=vimeo_id_0"
                                width="100%"
                                height="700"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="App Demo Video"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}