'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function StorageSection() {
    const features = [
        'Tận dụng tối đa nguồn điện bạn tự sản xuất',
        'Có thể bắt đầu với chi phí chỉ từ 0 đồng',
        'Giải pháp đang dần phổ biến tại Việt Nam - đừng bỏ lỡ cơ hội tiên phong'
    ];
  
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
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.99] }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Subtle glow behind image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/10 rounded-2xl blur-2xl transform translate-x-2 translate-y-2" />
                        
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border border-emerald-500/20">
                             <img 
                                src="https://i.pinimg.com/1200x/f2/bc/ed/f2bcedbcb607510c2846f585565b4ed6.jpg"
                                alt="Mother and child with a red ball"
                                className="w-full h-full object-cover"
                            />
                            
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-teal-950/10" />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    >
                    <h2 
                        className="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white"
                        style={{
                        color: '#ffffff',
                        }}
                    >
                        Bổ sung pin lưu trữ cho hệ thống của bạn
                    </h2>

                    <div className="space-y-6 mb-10">
                        {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-4"
                        >
                            <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                            <p className="text-white/80 text-lg leading-relaxed">{feature}</p>
                        </motion.div>
                        ))}
                    </div>

                    <motion.button 
                        className="border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 px-8 py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                    >
                        Tìm hiểu ngay
                    </motion.button>
                    </motion.div>
                </div>
            </div>
            
            {/* Bottom fade effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </section>
    );
}