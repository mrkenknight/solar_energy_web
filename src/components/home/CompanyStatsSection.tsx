'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Zap, CreditCard, Headphones } from 'lucide-react';

export default function CompanyStatsSection() {
    const stats = [
        {
            icon: Sun,
            title: "Trải nghiệm điện mặt trời & pin lưu trữ số 1",
            description: "Hơn 1 triệu ngôi nhà đã lựa chọn – không ai có nhiều kinh nghiệm lắp đặt hơn chúng tôi."
        },
        {
            icon: Zap,
            title: "Công nghệ thông minh",
            description: "Hệ sinh thái sản phẩm sáng tạo, cho bạn toàn quyền kiểm soát nhu cầu năng lượng tại nhà."
        },
        {
            icon: CreditCard,
            title: "Giải pháp thanh toán linh hoạt cho mọi gia đình",
            description: "Kế hoạch thiết kế riêng: trả góp cố định, ít hoặc không cần trả trước, không lo nợ nần."
        },
        {
            icon: Headphones,
            title: "Cam kết và bảo hành",
            description: "Chương trình bảo hành – bảo trì – giám sát toàn diện nhất ngành, cho bạn sự an tâm tuyệt đối."
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

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-5xl font-bold mb-20 leading-tight max-w-4xl mx-auto"
                    style={{
                        color: '#ffffff',
                    }}
                >
                    Vì sao chọn chúng tôi?
                </motion.h2>


                {/* <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-5xl font-bold mb-20 leading-tight max-w-4xl mx-auto text-white"
                >
                    Vì sao chọn chúng tôi?
                </motion.h2> */}



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
                            className={`relative text-left px-6 group ${
                                index > 0 ? 'border-l border-emerald-800/30' : ''
                            }`}
                        >
                            {/* Hover glow effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-green-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                initial={false}
                            />
                            
                            <div className="relative z-10">
                                <item.icon className="w-8 h-8 text-white mb-6" />
                                
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                
                                <p className="text-white/80 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                                    {item.description}
                                </p>
                            </div>
                            
                            {/* Subtle bottom accent */}
                            <motion.div
                                className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                initial={false}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            
            {/* Bottom fade effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </section>
    );
}