"use client";

import { useState, useEffect, useRef } from "react";

export default function PremiumSolarWebsite() {
  const [currentStat, setCurrentStat] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [energyValue, setEnergyValue] = useState(0);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const heroRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  const stats = [
    { number: "300+", label: "Dự án hoàn thành", color: "from-amber-400 to-amber-500" },
    { number: "10+", label: "Năm kinh nghiệm", color: "from-emerald-400 to-emerald-500" },
    { number: "98%", label: "Khách hài lòng", color: "from-blue-400 to-blue-500" },
    { number: "24/7", label: "Hỗ trợ kỹ thuật", color: "from-teal-400 to-teal-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 4000);
    
    // Set initial energy value only on client
    setEnergyValue(Math.floor(Math.random() * 50 + 15));
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-animate');
            if (elementId) {
              setVisibleElements(prev => {
                const newSet = new Set(prev);
                newSet.add(elementId);
                return newSet;
              });
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe all elements with data-animate attribute
    const animateElements = document.querySelectorAll('[data-animate]');
    animateElements.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const getAnimationClass = (elementId: string, animationType: string = 'fadeInUp') => {
    return visibleElements.has(elementId) ? `animate-${animationType}` : 'opacity-0 translate-y-8';
  };

  const features = [
    {
      title: "Thiết kế thông minh",
      description: "Tối ưu hóa hiệu suất dựa trên đặc điểm mái nhà và nhu cầu sử dụng điện của bạn.",
      icon: "💡",
      gradient: "from-amber-500/10 to-amber-500/5",
      iconBg: "from-amber-400 to-amber-500",
      delay: "0s"
    },
    {
      title: "Thi công chuyên nghiệp", 
      description: "Đội ngũ kỹ thuật viên được đào tạo bài bản, tuân thủ nghiêm ngặt các tiêu chuẩn an toàn.",
      icon: "⚙️",
      gradient: "from-emerald-500/10 to-emerald-500/5",
      iconBg: "from-emerald-400 to-emerald-500",
      delay: "0.2s"
    },
    {
      title: "Bảo hành dài hạn",
      description: "Cam kết bảo hành 25 năm cho tấm pin và 10 năm cho inverter, hỗ trợ 24/7.",
      icon: "🛡️",
      gradient: "from-blue-500/10 to-blue-500/5",
      iconBg: "from-blue-400 to-blue-500",
      delay: "0.4s"
    }
  ];

  const whyChooseUs = [
    {
      title: "Công nghệ tiên tiến",
      description: "Sử dụng tấm pin mặt trời công nghệ mới nhất với hiệu suất cao và độ bền vượt trội.",
      icon: "⚡",
      color: "amber-500"
    },
    {
      title: "Giá cả cạnh tranh", 
      description: "Cung cấp giải pháp với mức giá hợp lý nhất, nhiều gói tài chính linh hoạt.",
      icon: "💰",
      color: "emerald-500"
    },
    {
      title: "Dịch vụ toàn diện",
      description: "Từ khảo sát, thiết kế, lắp đặt đến bảo trì, chúng tôi đồng hành trong suốt quá trình.",
      icon: "📋",
      color: "blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Cursor Follow Light */}
      <div 
        className="fixed w-96 h-96 bg-gradient-to-r from-amber-300/20 to-emerald-300/20 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-emerald-50/30 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div 
            className="absolute bottom-1/3 left-1/5 w-80 h-80 bg-gradient-to-r from-emerald-400/8 to-blue-400/8 rounded-full blur-3xl animate-pulse"
            style={{ 
              transform: `translateY(${scrollY * -0.2}px)`,
              animationDelay: "1s" 
            }}
          />
          <div 
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-amber-400/5 rounded-full blur-2xl animate-pulse"
            style={{ 
              transform: `translateY(${scrollY * 0.1}px)`,
              animationDelay: "2s" 
            }}
          />
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-32 w-3 h-3 bg-amber-400/30 rotate-45 animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }} />
          <div className="absolute top-40 right-20 w-2 h-2 bg-emerald-400/40 rounded-full animate-bounce" style={{ animationDelay: "1s", animationDuration: "4s" }} />
          <div className="absolute bottom-32 left-40 w-4 h-4 bg-blue-400/25 rotate-12 animate-bounce" style={{ animationDelay: "2s", animationDuration: "5s" }} />
          <div className="absolute bottom-48 right-48 w-2 h-2 bg-amber-400/35 rounded-full animate-bounce" style={{ animationDelay: "0.5s", animationDuration: "3.5s" }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
            {/* Left Content */}
            <div 
              className={`space-y-8 transition-all duration-700 ${getAnimationClass('why-choose-content')}`}
              data-animate="why-choose-content"
            >
              <div 
                className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-white/40 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group animate-fadeInUp"
              >
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-800 transition-colors">
                  Điện Xanh Solar Vĩnh Phúc
                </span>
              </div>
              
              <h1 
                className="text-4xl lg:text-7xl font-bold leading-tight tracking-tight animate-fadeInUp"
                style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
              >
                <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-emerald-500 bg-clip-text text-transparent">
                  Năng lượng xanh
                </span>
                <br />
                <span className="text-gray-800 font-light">cho tương lai</span>
                <br />
                <span className="text-gray-700 text-3xl lg:text-5xl font-light">bền vững</span>
              </h1>
              
              <p 
                className="text-xl text-gray-600 max-w-lg leading-relaxed font-light animate-fadeInUp"
                style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
              >
                Chuyển đổi ánh nắng thành năng lượng sạch, giúp bạn tiết kiệm chi phí và bảo vệ môi trường. 
                Cùng chúng tôi xây dựng một tương lai xanh hơn cho thế hệ mai sau.
              </p>
              
              <div 
                className="flex flex-wrap gap-4 animate-fadeInUp"
                style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
              >
                <button className="group relative bg-gradient-to-r from-amber-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Tư vấn miễn phí
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </button>
                <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-emerald-400 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all duration-300 flex items-center gap-2">
                  Xem dự án
                  <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Right Visual */}
            <div 
              className="relative animate-fadeInRight"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              <div className="relative bg-white/60 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:rotate-1 transition-all duration-700 group">
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-emerald-400/20 to-blue-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                
                <div className="relative">
                  {/* Solar Panel Visualization */}
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 mb-6 relative overflow-hidden shadow-inner">
                    <div className="grid grid-cols-4 gap-1.5">
                      {Array.from({length: 16}).map((_, i) => (
                        <div 
                          key={i}
                          className="h-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-sm animate-pulse shadow-sm"
                          style={{
                            animationDelay: `${i * 0.15}s`,
                            animationDuration: "2s"
                          }}
                        />
                      ))}
                    </div>
                    <div className="absolute top-3 right-3 w-3 h-3 bg-emerald-400 rounded-full animate-ping shadow-lg" />
                    <div className="absolute bottom-3 left-3 text-xs text-emerald-300 font-medium">Hoạt động</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 rounded-2xl" />
                  </div>
                  
                  {/* Dynamic Stats Display */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/70 backdrop-blur-md rounded-xl p-5 text-center border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 group/stat">
                      <div className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent group-hover/stat:scale-110 transition-transform duration-300">
                        25 năm
                      </div>
                      <div className="text-sm text-gray-600 font-medium">Bảo hành</div>
                    </div>
                    <div className="bg-white/70 backdrop-blur-md rounded-xl p-5 text-center border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 group/stat">
                      <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent group-hover/stat:scale-110 transition-transform duration-300">
                        80%
                      </div>
                      <div className="text-sm text-gray-600 font-medium">Tiết kiệm</div>
                    </div>
                  </div>
                  
                  {/* Real-time Energy Display */}
                  <div className="bg-gradient-to-r from-emerald-50/80 to-amber-50/80 backdrop-blur-sm rounded-xl p-5 border border-emerald-200/30 shadow-inner">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-600 font-medium">Năng lượng hôm nay:</span>
                      <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                        {energyValue || 25} kWh
                      </span>
                    </div>
                    <div className="w-full bg-gray-200/50 rounded-full h-3 shadow-inner">
                      <div 
                        className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-amber-400 h-3 rounded-full animate-pulse shadow-sm relative overflow-hidden" 
                        style={{width: '75%'}}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-shimmer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-white text-xl animate-float shadow-xl">
                ☀️
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-lg animate-float shadow-lg" style={{ animationDelay: "1s" }}>
                🌱
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative">
          {/* Section Header */}
          <div 
            className={`text-center mb-20 transition-all duration-700 ${getAnimationClass('about-header')}`}
            data-animate="about-header"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100/80 to-emerald-100/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/40 shadow-sm">
              <span className="text-sm font-medium text-gray-700">Về chúng tôi</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight tracking-tight">
              Đối tác tin cậy cho{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                năng lượng xanh
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Với hơn 10 năm kinh nghiệm, chúng tôi đã giúp hàng trăm gia đình và doanh nghiệp 
              chuyển đổi sang năng lượng mặt trời bền vững.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br ${feature.gradient} backdrop-blur-sm rounded-3xl p-8 border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 overflow-hidden ${getAnimationClass(`feature-${index}`)}`}
                data-animate={`feature-${index}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-3xl rounded-tr-3xl" />
              </div>
            ))}
          </div>

          {/* Dynamic Stats Section */}
          <div 
            className={`relative bg-gradient-to-r from-gray-50/80 to-gray-100/80 backdrop-blur-sm rounded-3xl p-12 lg:p-16 border border-gray-200/50 shadow-xl overflow-hidden transition-all duration-700 ${getAnimationClass('stats-section')}`}
            data-animate="stats-section"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-emerald-400/5 to-blue-400/5 animate-pulse" />
            
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center transition-all duration-500 transform ${
                    currentStat === index ? 'scale-110' : 'scale-100'
                  } group cursor-pointer`}
                >
                  <div className={`text-5xl lg:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-lg group-hover:text-gray-700 transition-colors">
                    {stat.label}
                  </div>
                  {currentStat === index && (
                    <div className="mt-2 w-12 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full mx-auto animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50/50 via-white to-emerald-50/30 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-amber-300/10 to-emerald-300/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-emerald-300/8 to-blue-300/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight tracking-tight">
                Tại sao chọn{" "}
                <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                  Điện Xanh Solar
                </span>?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Chúng tôi không chỉ cung cấp sản phẩm mà còn mang đến giải pháp toàn diện 
                từ tư vấn, thiết kế, lắp đặt đến bảo trì dài hạn.
              </p>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-6 group p-6 rounded-2xl hover:bg-white/60 hover:shadow-lg transition-all duration-500 cursor-pointer"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r from-${item.color}/10 to-${item.color}/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm`}>
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed font-light group-hover:text-gray-700 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Savings Calculator */}
            <div 
              className={`relative transition-all duration-700 ${getAnimationClass('savings-calculator', 'fadeInRight')}`}
              data-animate="savings-calculator"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/40 relative overflow-hidden group">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-emerald-400/20 to-blue-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700" />
                
                <div className="relative">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Tiết kiệm lên tới</h3>
                    <div className="text-7xl lg:text-8xl font-bold bg-gradient-to-r from-amber-500 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                      80%
                    </div>
                    <p className="text-gray-600 text-lg font-light">chi phí điện hàng tháng</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-6 bg-gradient-to-r from-red-50 to-red-100/50 rounded-2xl border border-red-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                      <span className="text-gray-700 font-semibold text-lg">Hóa đơn điện cũ</span>
                      <span className="text-2xl font-bold text-red-600">2.500.000₫</span>
                    </div>
                    
                    <div className="flex justify-center py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-emerald-500 rounded-full" />
                        <svg className="w-6 h-6 text-emerald-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-6 bg-gradient-to-r from-emerald-50 to-emerald-100/50 rounded-2xl border border-emerald-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                      <span className="text-gray-700 font-semibold text-lg">Hóa đơn điện mới</span>
                      <span className="text-2xl font-bold text-emerald-600">500.000₫</span>
                    </div>
                    
                    <div className="text-center p-6 bg-gradient-to-r from-amber-50/50 via-emerald-50/50 to-emerald-50/50 backdrop-blur-sm rounded-2xl border border-emerald-200/30 shadow-sm">
                      <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-emerald-600 bg-clip-text text-transparent">
                        Tiết kiệm: 2.000.000₫/tháng
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 mb-4">Thời gian hoàn vốn dự kiến:</p>
                    <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100/80 to-emerald-100/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/40 shadow-sm">
                      <span className="text-xl font-bold text-gray-800">5-7 năm</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-emerald-50/20" />
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-300/5 to-emerald-300/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-300/5 to-blue-300/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

        <div 
          className={`container mx-auto px-6 text-center relative transition-all duration-700 ${getAnimationClass('cta-content')}`}
          data-animate="cta-content"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight tracking-tight">
            Sẵn sàng chuyển đổi sang{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              năng lượng xanh
            </span>?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Liên hệ ngay để nhận tư vấn miễn phí và báo giá chi tiết cho ngôi nhà của bạn.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <button className="group relative bg-gradient-to-r from-amber-500 via-emerald-500 to-emerald-600 text-white px-10 py-5 rounded-2xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3 text-lg">
                Tư vấn miễn phí ngay
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>
            <button className="group border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-semibold hover:border-emerald-400 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all duration-300 flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-lg">Gọi: (024) 123 4567</span>
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-gray-500">
            <div className="flex items-center gap-2 group hover:text-gray-700 transition-colors">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">info@dienxanhsolar.com</span>
            </div>
            <div className="flex items-center gap-2 group hover:text-gray-700 transition-colors">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium">Vĩnh Phúc, Việt Nam</span>
            </div>
            <div className="flex items-center gap-2 group hover:text-gray-700 transition-colors">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">8:00 - 18:00 (T2-T7)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}