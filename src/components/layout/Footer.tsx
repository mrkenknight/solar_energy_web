import React from 'react';
import { Linkedin } from 'lucide-react';

export default function Footer() {
    const mainLinks = [
        { title: "Câu chuyện Điện Xanh", href: "#" },
        { title: "Tầm nhìn & sứ mệnh", href: "#" },
        { title: "Trải nghiệm khách hàng", href: "#" },
        { title: "Chuỗi giá trị hoàn thiện", href: "#" },
    ];

    const secondaryLinks = [
        { title: "Chăm sóc khách hàng", href: "#" },
        { title: "Chính sách bảo hành", href: "#" },
        { title: "Vệ sinh và sửa chữa", href: "#" },
        { title: "Tuyển dụng", href: "#" },
    ];
    
    return (
        <footer className="bg-white text-gray-800">
            <div className="flex flex-col lg:flex-row">
                {/* Main Content Area */}
                <div 
                    className="w-full lg:w-2/3 px-6 sm:px-12 lg:px-20 py-16"
                    style={{
                        background: `
                            radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.08) 0%, transparent 50%),
                            radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.06) 0%, transparent 50%),
                            radial-gradient(circle at 60% 40%, rgba(252, 211, 77, 0.04) 0%, transparent 50%),
                            linear-gradient(135deg, #fffef7 0%, #fefce8 25%, #fef3c7 50%, #fef7cd 75%, #fffbeb 100%)
                        `
                    }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Company Info */}
                        <div className="md:col-span-1">
                            <a href="#" className="text-3xl font-bold tracking-tighter text-gray-900 mb-4 inline-block">
                                ĐIỆN XANH
                            </a>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Từ lắp đặt, bảo trì đến hỗ trợ 24/7, Sunrun luôn ở bên để bạn an tâm tận hưởng nguồn năng lượng sạch..
                            </p>
                            <div className="text-sm text-gray-600 space-y-4">
                                <div>
                                    <h4 className="font-semibold text-gray-800">Trụ sở chính</h4>
                                    <p>Lô TM2 - 10, KĐT Park Hill Thành Công, P. Vĩnh Phúc, T. Phú Thọ</p>
                                </div>
                                <div>
                                    <p>SĐT: +84 973 764 619</p>
                                    <p>Email: dienxanhsolarvp@gmail.com</p>
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
                        <p>&copy; {new Date().getFullYear()} Bản quyền thuộc về Điện Xanh</p>
                        <div className="flex items-center space-x-4 mt-4 md:mt-0">
                            <a href="#" className="hover:text-gray-800">Riêng tư</a>
                            <a href="#" className="hover:text-gray-800">Vị trí</a>
                            <a href="#" className="hover:text-gray-800">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right CTA Area */}
                <div 
                    className="w-full lg:w-1/3 text-white p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden"
                    style={{
                        background: `
                            radial-gradient(circle at 20% 50%, rgba(6, 78, 59, 0.4) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(5, 46, 22, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 40% 80%, rgba(6, 95, 70, 0.2) 0%, transparent 50%),
                            linear-gradient(135deg, #0f2027 0%, #1a3b2d 25%, #0d3b2f 50%, #1e4b3b 75%, #0f2920 100%)
                        `
                    }}
                >
                    {/* Optional: Add floating elements for consistency */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500/10 to-green-600/5 blur-xl"></div>
                    </div>
                    
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-8 leading-tight">
                            Trải nghiệm năng lượng bền vững
                        </h3>
                        <div className="space-y-4 mb-12">
                            <button className="w-full py-3 px-6 rounded-full border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 font-medium">
                                AI CÙNG CHÚNG TÔI ĐỒNG HÀNH
                            </button>
                            <button className="w-full py-3 px-6 rounded-full border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 font-medium">
                                NHỮNG GÌ CHÚNG TÔI MANG ĐẾN
                            </button>
                        </div>
                        <div className="text-sm">
                            <p className="font-semibold text-white">Cần tư vấn thêm?</p>
                            <a href="mailto:director@dienxanh.com" className="text-emerald-300 hover:text-emerald-200 hover:underline transition-colors">Email: dienxanhsolarvp@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}