'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

export default function CustomerStorySection() {
    return (
        <section 
            className="relative py-24 lg:py-32 text-white overflow-hidden"
            style={{
                background: `
                    radial-gradient(circle at 20% 50%, rgba(6, 78, 59, 0.4) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(5, 46, 22, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 40% 80%, rgba(6, 95, 70, 0.2) 0%, transparent 50%),
                    linear-gradient(135deg, #0f2027 0%, #1a3b2d 25%, #0d3b2f 50%, #1e4b3b 75%, #0f2920 100%)
                `
            }}
        >
            {/* Floating geometric shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-emerald-500/10 to-green-600/5 blur-xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-gradient-to-r from-teal-500/10 to-emerald-600/5 blur-xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
                <motion.div
                    className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-green-400/15 to-emerald-500/10 blur-lg"
                    animate={{
                        y: [-20, 20, -20],
                        opacity: [0.5, 0.2, 0.5],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4,
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
                    >
                    <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                        CÂU TRUYỆN KHÁCH HÀNG
                    </p>

                    <h2 
                        className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
                        style={{
                        color: '#ffffff',
                        }}
                    >
                        MR. Tùng đã chọn Điện Xanh Solar Vĩnh Phúc
                    </h2>

                    <p className="text-xl text-white/80 mb-10 max-w-lg">
                        Hãy cùng Mr. Tùng khám phá lý do anh ấy chuyển sang điện mặt trời và vì sao đây là một trong những cải tiến lớn nhất cho ngôi nhà của anh..
                    </p>

                    <motion.button 
                        className="border-2 border-white text-white rounded-full px-8 py-4 text-base font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 ease-in-out group inline-flex items-center hover:shadow-lg hover:shadow-white/20"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                    >
                        Xem ngay
                        <PlayCircle className="ml-2 w-5 h-5 text-white group-hover:text-gray-900 transition-colors" />
                    </motion.button>
                    </motion.div>


                    {/* Video */}
                    <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.99] }}
                    viewport={{ once: true }}
                    className="relative"
                    >
                    {/* Glow sáng rõ hơn */}
                    <div className="absolute inset-0 bg-white/40 rounded-2xl blur-2xl transform translate-x-2 translate-y-2" />
                    
                    <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl border border-white/30 group">
                        <iframe
                        src="https://player.vimeo.com/video/990708854?h=cd3b48afd6&title=0&byline=0&portrait=0&color=a5c9ff&muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963&api=1&player_id=vimeo_id_1"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Drew's Solar Story"
                        className="absolute inset-0 transition duration-500 brightness-110 group-hover:brightness-125"
                        ></iframe>
                    </div>
                    </motion.div>

                </div>
            </div>
            
            {/* Bottom fade effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </section>
    );
}