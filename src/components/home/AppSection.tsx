'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function AppSection() {
    const features = [
        "Theo dõi hiệu suất hoạt động của hệ thống*",
        "Thanh toán hóa đơn dễ dàng, nhanh chóng",
        "Trò chuyện trực tuyến với đội ngũ hỗ trợ"
    ];

    return (
        <section 
            className="relative py-24 lg:py-32 overflow-hidden"
            style={{
                background: `
                    radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.06) 0%, transparent 50%),
                    radial-gradient(circle at 60% 40%, rgba(252, 211, 77, 0.04) 0%, transparent 50%),
                    linear-gradient(135deg, #fffef7 0%, #fefce8 25%, #fef3c7 50%, #fef7cd 75%, #fffbeb 100%)
                `
            }}
        >
            {/* Subtle floating elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-28 h-28 rounded-full bg-gradient-to-r from-amber-200/20 to-yellow-300/10 blur-2xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-gradient-to-r from-yellow-200/15 to-amber-300/8 blur-2xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
                <motion.div
                    className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-gradient-to-r from-orange-200/12 to-amber-200/8 blur-xl"
                    animate={{
                        y: [-20, 20, -20],
                        x: [-10, 10, -10],
                        opacity: [0.4, 0.1, 0.4],
                    }}
                    transition={{
                        duration: 11,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 5,
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4">ỨNG DỤNG</p>
                        <h2 
                            className="text-4xl lg:text-5xl font-bold mb-8 leading-tight"
                            style={{
                                background: 'linear-gradient(135deg, #374151 0%, #1f2937 50%, #111827 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Giám sát hệ thống của bạn – Mọi lúc, mọi nơi
                        </h2>

                        <div className="space-y-5 mb-10">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-4 group"
                                >
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center flex-shrink-0 group-hover:from-amber-500 group-hover:to-yellow-600 transition-all duration-300 shadow-lg shadow-amber-400/25">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-lg text-gray-700 group-hover:text-gray-800 transition-colors duration-300">{feature}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex items-center space-x-6 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-amber-200/30 shadow-lg">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-yellow-300/20 rounded-xl blur-lg"></div>
                                <img 
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.sunrun.com/&bgcolor=fcfaf6" 
                                    alt="QR Code" 
                                    className="relative w-24 h-24 rounded-lg border border-amber-200/40" 
                                />
                            </div>
                            <div className="space-y-3">
                                <motion.a 
                                    href="#" 
                                    aria-label="Download on the App Store"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="block"
                                >
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                                        alt="App Store" 
                                        className="h-12 hover:opacity-80 transition-opacity" 
                                    />
                                </motion.a>
                                <motion.a 
                                    href="#" 
                                    aria-label="Get it on Google Play"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="block"
                                >
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                                        alt="Google Play" 
                                        className="h-12 hover:opacity-80 transition-opacity" 
                                    />
                                </motion.a>
                            </div>
                        </div>
                        
                        <p className="text-xs text-amber-600/70 mt-8">*Trải nghiệm ứng dụng có thể thay đổi tùy theo thiết bị trong hệ thống của bạn</p>
                    </motion.div>

                    {/* Video Demo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.99] }}
                        viewport={{ once: true }}
                        className="flex justify-center relative"
                    >
                        {/* Glow effect behind video */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-yellow-300/15 rounded-3xl blur-2xl transform translate-x-3 translate-y-3"></div>
                        
                        <div className="relative w-full max-w-lg">
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
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
                            
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-amber-50/10 via-transparent to-yellow-50/5 rounded-3xl pointer-events-none"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}