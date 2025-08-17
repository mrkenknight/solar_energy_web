'use client';

import React from 'react';
import { ShieldCheck, Zap, Users, BarChart } from 'lucide-react';

export default function WhySunrunSection() {
    const benefits = [
        {
            icon: ShieldCheck,
            title: "Best-in-class service",
            description: "From design to installation, we're with you every step of the way."
        },
        {
            icon: Zap,
            title: "Leading solar + storage",
            description: "Our technology is designed to power your home and your life."
        },
        {
            icon: Users,
            title: "Most experienced",
            description: "We're America's #1 solar and battery storage company."
        },
        {
            icon: BarChart,
            title: "Flexible financing",
            description: "We offer a range of options to fit your budget and energy needs."
        }
    ];
    
    return (
        <section className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16 animate-fade-in-up">
                    Go solar with confidence
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="text-left animate-fade-in-up"
                            style={{ 
                                animationDelay: `${index * 0.1}s`,
                                animationFillMode: 'both'
                            }}
                        >
                            <item.icon className="w-10 h-10 text-gray-900 mb-5" />
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                    <button className="bg-gray-900 hover:bg-gray-700 text-white rounded-full px-8 py-4 transition-colors duration-300 font-semibold">
                        Compare plans
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out;
                }
            `}</style>
        </section>
    )
}