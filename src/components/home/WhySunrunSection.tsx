'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, BarChart } from 'lucide-react';

export default function WhySunrunSection() {
    const benefits = [
        {
            icon: ShieldCheck,
            title: "Dịch vụ hàng đầu",
            description: "Từ thiết kế đến lắp đặt – chúng tôi đồng hành cùng bạn trên mọi chặng đường."
        },
        {
            icon: Zap,
            title: "Công nghệ điện mặt trời + lưu trữ tiên tiến",
            description: "Hệ thống được thiết kế để cung cấp năng lượng cho cả ngôi nhà và cuộc sống của bạn."
        },
        {
            icon: Users,
            title: "Đội ngũ giàu kinh nghiệm nhất",
            description: "Chúng tôi là đơn vị số 1 về điện mặt trời và pin lưu trữ."
        },
        {
            icon: BarChart,
            title: "Giải pháp tài chính linh hoạt",
            description: "Nhiều lựa chọn phù hợp với ngân sách và nhu cầu năng lượng của bạn."
        }
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
                    className="absolute top-20 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-amber-200/20 to-yellow-300/10 blur-2xl"
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
                    className="absolute bottom-32 left-16 w-32 h-32 rounded-full bg-gradient-to-r from-yellow-200/15 to-amber-300/8 blur-2xl"
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3,
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2 
                    className="text-4xl lg:text-5xl font-bold mb-16"
                    style={{
                        background: 'linear-gradient(135deg, #374151 0%, #1f2937 50%, #111827 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Tự tin bước vào kỷ nguyên năng lượng sạch
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            className="text-left"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                        >
                            <item.icon className="w-10 h-10 text-amber-600 mb-5" />
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className="mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <motion.button 
                        className="relative overflow-hidden rounded-full px-8 py-4 font-semibold text-white shadow-lg"
                        style={{
                            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #92400e 100%)',
                        }}
                        whileHover={{ 
                            scale: 1.02,
                            boxShadow: '0 10px 30px rgba(245, 158, 11, 0.3)',
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                            whileHover={{
                                translateX: '200%',
                            }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut"
                            }}
                        />
                        <span className="relative">So sánh gói giải pháp</span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}