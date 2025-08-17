'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function QuoteSection() {
    return (
        <section className="py-24 lg:py-32 bg-[#fcfaf6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    {/* Form Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">STEP 1 OF 2</p>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10 leading-tight">
                           Get a free personalized quote
                        </h2>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                                    Enter your zip
                                </label>
                                <input 
                                    id="zip" 
                                    type="text" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="bill" className="block text-sm font-medium text-gray-700 mb-1">
                                    What's your average electric bill
                                </label>
                                <input 
                                    id="bill" 
                                    type="text" 
                                    placeholder="e.g. $100" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Do you own your home?
                                </label>
                                <div className="flex space-x-6">
                                    <label className="flex items-center">
                                        <input 
                                            type="radio" 
                                            name="homeOwnership" 
                                            value="yes" 
                                            defaultChecked
                                            className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500"
                                        />
                                        <span className="ml-2 text-sm text-gray-700">Yes</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input 
                                            type="radio" 
                                            name="homeOwnership" 
                                            value="no"
                                            className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500"
                                        />
                                        <span className="ml-2 text-sm text-gray-700">No</span>
                                    </label>
                                </div>
                            </div>
                            <button 
                                type="submit"
                                className="bg-gray-400 hover:bg-gray-500 text-white rounded-full px-10 py-3 w-full sm:w-auto font-medium transition-colors duration-200"
                            >
                                Next
                            </button>
                        </form>
                    </motion.div>
                    
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.99] }}
                        viewport={{ once: true }}
                    >
                        <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                             <img 
                                src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoic3VucnVuXC9maWxlXC9HODFMN3VLU0hRUUVFRERKMkRZcS5qcGcifQ:sunrun:MTWujdKjyTPg9TKfiHTFAIbJp1xMj7zGeE7Y31nXChA?width=1440&format=webp"
                                alt="Family playing in front of a house with solar panels"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}