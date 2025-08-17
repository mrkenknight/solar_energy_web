'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

export default function CustomerStorySection() {
    return (
        <section className="py-24 lg:py-32 bg-[#050816] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">CUSTOMER STORIES</p>
                        <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Drew's gone solar
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-lg">
                            Join Drew Scott to learn why he went solar and why it's one of the biggest home improvements he's ever made.
                        </p>
                        <button className="border-2 border-white text-white rounded-full px-8 py-4 text-base font-medium hover:bg-white hover:text-black transition-all duration-300 ease-in-out group inline-flex items-center">
                            Watch now 
                            <PlayCircle className="ml-2 w-5 h-5 group-hover:text-black transition-colors" />
                        </button>
                    </motion.div>

                    {/* Video */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.99] }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden aspect-video"
                    >
                        <iframe
                            src="https://player.vimeo.com/video/990708854?h=cd3b48afd6&title=0&byline=0&portrait=0&color=a5c9ff&muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963&api=1&player_id=vimeo_id_1"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Drew's Solar Story"
                            className="absolute inset-0"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}