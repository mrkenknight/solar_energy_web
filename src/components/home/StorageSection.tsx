'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function StorageSection() {
    const features = [
        'Use more of the energy you produce',
        'As little as $0 down',
        'Add-on battery currently available in CA, FL, MD, NV, NY (PSEG), TX (Oncor, Centerpoint), HI, IL (ComEd); availability expanding fast'
    ];
  
    return (
        <section className="py-24 lg:py-32 bg-[#050816] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.99] }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]"
                    >
                         <img 
                            src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoic3VucnVuXC9maWxlXC9CWkZBcHJleDRvNTNTWVR1elBCVS5qcGcifQ:sunrun:A71CX2-EtVlMi7NE2cBuedUabcKfr-kByFiG00E-sws?width=1680&format=webp"
                            alt="Mother and child with a red ball"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                          Add storage to your Sunrun system
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
                                    <p className="text-gray-300 text-lg leading-relaxed">{feature}</p>
                                </motion.div>
                            ))}
                        </div>
    
                        <button className="border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 px-8 py-3 font-semibold transition-all duration-300">
                            Learn more
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}