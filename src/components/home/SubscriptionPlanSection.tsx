'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function SubscriptionPlanSection() {
    const features = [
        "Tấm pin & pin lưu trữ thế hệ mới",
        "Bảo hành toàn diện, an tâm dài lâu", 
        "Trả góp linh hoạt, kiểm soát chi phí"
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
            {/* Floating elements giữ nguyên */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-amber-200/20 to-yellow-300/10 blur-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-32 left-16 w-32 h-32 rounded-full bg-gradient-to-r from-yellow-200/15 to-amber-300/8 blur-2xl"
                    animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-gradient-to-r from-orange-200/15 to-amber-200/10 blur-xl"
                    animate={{ y: [-15, 15, -15], opacity: [0.4, 0.1, 0.4] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 6 }}
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
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-yellow-300/20 rounded-3xl blur-2xl transform translate-x-2 translate-y-2" />
                        
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-amber-200/40">
                             <img 
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1287&q=80" 
                                alt="Professional team discussing solar energy solutions"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/8 via-transparent to-yellow-600/12"></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-amber-900/5"></div>
                        </div>
                    </motion.div>
                    
                    {/* Content */}
                    <motion.div {...fadeInLeft} className="relative">
                        <p className="text-xs font-bold text-black uppercase tracking-[0.15em] mb-6">
                            Gói dịch vụ
                        </p>
                        <h2 
                            className="text-4xl lg:text-5xl font-bold mb-6 leading-[1.15] text-black"
                        >
                           ĐỒNG HÀNH
                        </h2>
                        <p className="text-lg text-black/80 mb-10 max-w-lg leading-relaxed font-medium">
                            Từ lắp đặt đến bảo trì, tận hưởng trải nghiệm năng lượng mặt trời dễ dàng và tiết kiệm..
                        </p>

                        <div className="space-y-5 mb-12">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-4 group"
                                >
                                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-300 to-amber-300 flex items-center justify-center mt-0.5 group-hover:from-yellow-300 group-hover:to-amber-400 transition-all duration-300 shadow-lg shadow-yellow-400/30">
                                        <Sparkles className="w-4 h-4 text-black transition-colors duration-300" />
                                    </div>
                                    <span className="text-black font-semibold leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                        {feature}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                        
                        <motion.button 
                            whileHover={{ 
                                scale: 1.02,
                                boxShadow: "0 15px 35px -5px rgba(245, 158, 11, 0.3)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative overflow-hidden rounded-full px-10 py-4 transition-all duration-300 font-bold shadow-xl border-2"
                            style={{
                                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #92400e 100%)',
                                borderColor: 'rgba(245, 158, 11, 0.3)',
                                boxShadow: '0 10px 30px rgba(245, 158, 11, 0.2)',
                            }}
                        >
                            <span className="relative z-10 text-white font-semibold">So sánh các gói</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                                whileHover={{ translateX: '200%' }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/0 via-yellow-400/10 to-yellow-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
