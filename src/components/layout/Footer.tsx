import React from 'react';
import { Linkedin } from 'lucide-react';

export default function Footer() {
    const mainLinks = [
        { title: "Company", href: "#" },
        { title: "Impact", href: "#" },
        { title: "Customers", href: "#" },
        { title: "Services", href: "#" },
        { title: "Insights", href: "#" },
        { title: "Careers", href: "#" },
        { title: "Contact", href: "#" },
    ];

    const secondaryLinks = [
        { title: "Development Partnerships", href: "#" },
        { title: "Clean Energy Procurement", href: "#" },
        { title: "Environmental Commodities", href: "#" },
        { title: "Landowners", href: "#" },
        { title: "SRECS", href: "#" },
        { title: "SREC Help Center", href: "#" },
    ];
    
    return (
        <footer className="bg-white text-gray-800">
            <div className="flex flex-col lg:flex-row">
                {/* Main Content Area */}
                <div className="w-full lg:w-2/3 bg-[#fcfaf6] px-6 sm:px-12 lg:px-20 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Company Info */}
                        <div className="md:col-span-1">
                            <a href="#" className="text-3xl font-bold tracking-tighter text-gray-900 mb-4 inline-block">
                                sunrun
                            </a>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Sunrun develops, owns and operates domestic clean energy infrastructure that benefit local communities.
                            </p>
                            <div className="text-sm text-gray-600 space-y-4">
                                <div>
                                    <h4 className="font-semibold text-gray-800">Headquarters</h4>
                                    <p>1101 Connecticut Avenue NW<br/>Second Floor,<br/>Washington, DC 20036</p>
                                </div>
                                <div>
                                    <p>P: (202) 349-2085</p>
                                    <p>E: info@sunrun.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <ul className="space-y-3">
                                {mainLinks.map(link => (
                                    <li key={link.title}>
                                        <a href={link.href} className="text-sm font-semibold hover:text-gray-900 transition-colors">{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-3">
                                {secondaryLinks.map(link => (
                                    <li key={link.title}>
                                        <a href={link.href} className="text-sm font-semibold hover:text-gray-900 transition-colors">{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                     <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
                        <div className="flex items-center space-x-4 mt-4 md:mt-0">
                            <a href="#" className="hover:text-gray-800">Privacy</a>
                            <a href="#" className="hover:text-gray-800">Sitemap</a>
                            <a href="#" className="hover:text-gray-800">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right CTA Area */}
                <div className="w-full lg:w-1/3 bg-[#0c4a6e] text-white p-12 lg:p-16 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-8 leading-tight">
                        Explore sustainable energy solutions with Sunrun
                    </h3>
                    <div className="space-y-4 mb-12">
                        <button className="w-full py-3 px-6 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#0c4a6e] transition-colors font-medium">
                            WHO WE SERVE
                        </button>
                        <button className="w-full py-3 px-6 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#0c4a6e] transition-colors font-medium">
                            WHAT WE DO
                        </button>
                    </div>
                    <div className="text-sm">
                        <p className="font-semibold">Looking for something else?</p>
                        <a href="mailto:info@sunrun.com" className="hover:underline">Email: info@sunrun.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}