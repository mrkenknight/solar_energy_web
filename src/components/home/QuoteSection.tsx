'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function QuoteSection() {
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

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    {/* Form Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4">BẮT ĐẦU NGAY</p>
                        <h2 
                            className="text-4xl lg:text-5xl font-bold mb-10 leading-tight"
                            style={{
                                background: 'linear-gradient(135deg, #374151 0%, #1f2937 50%, #111827 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Nhận báo giá miễn phí cho riêng bạn
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nhập vị trí ngôi nhà của bạn
                                </label>
                                <input 
                                    id="zip" 
                                    type="text" 
                                    className="w-full px-4 py-3 border border-amber-200/50 rounded-lg shadow-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-300 transition-all duration-300 hover:border-amber-300/70"
                                />
                            </div>
                            <div>
                                <label htmlFor="bill" className="block text-sm font-medium text-gray-700 mb-1">
                                    Hóa đơn tiền điện trung bình hàng tháng của bạn
                                </label>
                                <input 
                                    id="bill" 
                                    type="text" 
                                    placeholder="e.g. $100" 
                                    className="w-full px-4 py-3 border border-amber-200/50 rounded-lg shadow-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-300 transition-all duration-300 hover:border-amber-300/70"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Bạn có phải chủ sở hữu ngôi nhà này không?
                                </label>
                                <div className="flex space-x-6">
                                    <label className="flex items-center group cursor-pointer">
                                        <input 
                                            type="radio" 
                                            name="homeOwnership" 
                                            value="yes" 
                                            defaultChecked
                                            className="w-4 h-4 text-amber-500 bg-white/80 border-amber-300 focus:ring-amber-400/50 transition-all duration-200"
                                        />
                                        <span className="ml-2 text-sm text-gray-700 group-hover:text-amber-700 transition-colors duration-200">Yes</span>
                                    </label>
                                    <label className="flex items-center group cursor-pointer">
                                        <input 
                                            type="radio" 
                                            name="homeOwnership" 
                                            value="no"
                                            className="w-4 h-4 text-amber-500 bg-white/80 border-amber-300 focus:ring-amber-400/50 transition-all duration-200"
                                        />
                                        <span className="ml-2 text-sm text-gray-700 group-hover:text-amber-700 transition-colors duration-200">No</span>
                                    </label>
                                </div>
                            </div>
                            
                            <motion.button 
                                type="submit"
                                className="relative overflow-hidden rounded-full px-10 py-4 w-full sm:w-auto font-semibold text-white shadow-lg"
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
                                <span className="relative">Next</span>
                            </motion.button>
                        </div>
                    </motion.div>
                    
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.99] }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Subtle glow behind image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-yellow-300/20 rounded-2xl blur-2xl transform translate-x-2 translate-y-2" />
                        
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border border-amber-200/30">
                             <img 
                                src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoic3VucnVuXC9maWxlXC9HODFMN3VLU0hRUUVFRERKMkRZcS5qcGcifQ:sunrun:MTWujdKjyTPg9TKfiHTFAIbJp1xMj7zGeE7Y31nXChA?width=1440&format=webp"
                                alt="Family playing in front of a house with solar panels"
                                className="w-full h-full object-cover"
                            />
                            
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-amber-50/20 via-transparent to-yellow-50/10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}