'use client';

import { useState, useEffect } from 'react';
import { CheckCircleIcon, ClockIcon, SparklesIcon, BoltIcon, HomeIcon, ChartBarIcon, Squares2X2Icon, FireIcon } from '@heroicons/react/20/solid';

export default function SolarFamilySection() {
  const [activeSystem, setActiveSystem] = useState<'bam-tai' | 'hybrid'>('bam-tai');
  const [isTransitioning, setIsTransitioning] = useState(false);


  // Auto switch between systems every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setActiveSystem(prev => prev === 'bam-tai' ? 'hybrid' : 'bam-tai');
        setTimeout(() => setIsTransitioning(false), 50);
      }, 200);
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);

  const benefits = [
    {
      icon: CheckCircleIcon,
      text: "Giảm đến 90% hóa đơn tiền điện, tối ưu chi phí sinh hoạt hàng tháng"
    },
    {
      icon: CheckCircleIcon,
      text: "Hoàn vốn nhanh trong 4 - 5 năm, hiệu quả đầu tư dài hạn"
    },
    {
      icon: CheckCircleIcon,
      text: "Bảo vệ môi trường, sử dụng nguồn năng lượng tái tạo, giảm khí thải CO₂"
    },
    {
      icon: CheckCircleIcon,
      text: "Hoạt động bền bỉ, cung cấp điện ổn định, an toàn cho cả gia đình"
    }
  ];

  const solarSystems = activeSystem === 'bam-tai' ? [
    {
      id: 'tier-5',
      name: 'Hệ On-Grid 5 kW',
      paybackTime: '34 tháng',
      monthlyEfficiency: '1.470.000đ',
      price: '49.900.000',
      power: '5 kW',
      phase: '1 pha',
      production: '350-450 kwh/tháng',
      area: '21 m2',
      batteryInfo: 'Kết nối trực tiếp lưới điện',
      isPopular: false
    },
    {
      id: 'tier-11-1p',
      name: 'Hệ On-Grid 11 kW - 1 pha',
      paybackTime: '28 tháng',
      monthlyEfficiency: '3.360.000đ',
      price: '89.000.000',
      power: '11 kW',
      phase: '1 pha',
      production: '800-1000 kwh/tháng',
      area: '47 m2',
      batteryInfo: 'Kết nối trực tiếp lưới điện',
      isPopular: false
    },
    {
      id: 'tier-11-3p',
      name: 'Hệ On-Grid 11 kW - 3 pha',
      paybackTime: '28 tháng',
      monthlyEfficiency: '3.360.000đ',
      price: '92.000.000',
      power: '11 kW',
      phase: '3 pha',
      production: '800-1000 kwh/tháng',
      area: '47 m2',
      batteryInfo: 'Kết nối trực tiếp lưới điện',
      isPopular: true
    },
    {
      id: 'tier-15-3p',
      name: 'Hệ On-Grid 15 kW - 3 pha',
      paybackTime: '37 tháng',
      monthlyEfficiency: '4.410.000đ',
      price: '124.000.000',
      power: '15 kW',
      phase: '3 pha',
      production: '1100-1300 kwh/tháng',
      area: '65 m2',
      batteryInfo: 'Kết nối trực tiếp lưới điện',
      isPopular: false
    }
  ] : [
    {
      id: 'tier-5',
      name: 'Hệ Hybrid 5 kW',
      paybackTime: '50 tháng',
      monthlyEfficiency: '1.680.000đ',
      price: '84.000.000',
      power: '5 kW',
      phase: '1 pha',
      production: '400-600 kwh/tháng',
      area: '21 m2',
      batteryInfo: 'Pin lưu trữ Lithium 10kWh',
      isPopular: false
    },
    {
      id: 'tier-11-1p',
      name: 'Hệ Hybrid 11 kW - 1 pha',
      paybackTime: '31 tháng',
      monthlyEfficiency: '3.700.000đ',
      price: '158.900.000',
      power: '11 kW',
      phase: '1 pha',
      production: '900-1200 kwh/tháng',
      area: '47 m2',
      batteryInfo: 'Pin lưu trữ Lithium 20kWh',
      isPopular: false
    },
    {
      id: 'tier-15-3p-low',
      name: 'Hệ Hybrid 15 kW - 3 pha áp thấp',
      paybackTime: '42 tháng',
      monthlyEfficiency: '5.040.000đ',
      price: '204.500.000',
      power: '15 kW',
      phase: '3 pha áp thấp',
      production: '1200-1450 kwh/tháng',
      area: '65 m2',
      batteryInfo: 'Pin lưu trữ Lithium 30kWh',
      isPopular: false
    },
    {
      id: 'tier-15-3p-high',
      name: 'Hệ Hybrid 15 kW - 3 pha áp cao',
      paybackTime: '42 tháng',
      monthlyEfficiency: '5.040.000đ',
      price: '228.900.000',
      power: '15 kW',
      phase: '3 pha áp cao',
      production: '1200-1600 kwh/tháng',
      area: '65 m2',
      batteryInfo: 'Pin lưu trữ Lithium 40kWh',
      isPopular: true
    }
  ];

  const SystemCard = ({ system }: { system: typeof solarSystems[0] }) => {
    const isRedScheme = activeSystem === 'bam-tai';
    
    return (
      <div className={`relative rounded-3xl px-4 py-3 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full ${
        system.isPopular 
          ? isRedScheme 
            ? 'ring-2 ring-red-600 bg-red-50 hover:ring-red-600' 
            : 'ring-2 ring-green-600 bg-green-50 hover:ring-green-600'
          : isRedScheme
            ? 'ring-2 ring-gray-300 hover:ring-red-200'
            : 'ring-2 ring-gray-300 hover:ring-green-200'
      }`}>
        {system.isPopular && (
          <div className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center justify-center gap-x-1.5 rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap text-white ${
            isRedScheme ? 'bg-red-600' : 'bg-green-600'
          }`}>
            <FireIcon className="h-4 w-4" />
            Bán chạy
          </div>
        )}
        
        <h3 className={`text-base/7 font-semibold py-2 text-center ${
          system.isPopular 
            ? isRedScheme ? 'text-red-600' : 'text-green-600'
            : 'text-gray-900'
        }`}>
          {system.name}
        </h3>
        
        <div className="mt-2 flex gap-x-2">
          <button className={`flex-1 rounded-lg px-2 py-1 flex items-center gap-x-2 transition-all duration-200 ${
            isRedScheme ? 'bg-red-50 hover:bg-red-100' : 'bg-green-50 hover:bg-green-100'
          }`}>
            <ClockIcon className={`h-5 w-5 ${isRedScheme ? 'text-red-500' : 'text-green-500'}`} />
            <div className="flex flex-col items-start">
              <span className="text-xs text-gray-500">Hoàn vốn</span>
              <p className={`text-sm font-semibold ${isRedScheme ? 'text-red-600' : 'text-green-600'}`}>{system.paybackTime}</p>
            </div>
          </button>
          <button className={`flex-1 rounded-lg px-2 py-1 flex items-center gap-x-2 transition-all duration-200 ${
            isRedScheme ? 'bg-red-50 hover:bg-red-100' : 'bg-green-50 hover:bg-green-100'
          }`}>
            <SparklesIcon className={`h-5 w-5 ${isRedScheme ? 'text-red-500' : 'text-green-500'}`} />
            <div className="flex flex-col items-start">
              <span className="text-xs text-gray-500">Hiệu quả/tháng</span>
              <p className={`text-sm font-semibold ${isRedScheme ? 'text-red-600' : 'text-green-600'}`}>{system.monthlyEfficiency}</p>
            </div>
          </button>
        </div>
        
        <div className="mt-6 flex flex-col items-center">
          <span className="text-sm text-gray-500">Giá niêm yết T9/2025</span>
          <span className="flex items-baseline gap-x-1">
            <span className={`text-4xl font-semibold tracking-tight ${isRedScheme ? 'text-red-600' : 'text-green-600'}`}>{system.price}</span>
            <span className="text-base/7 font-semibold text-gray-600">đ</span>
          </span>
        </div>
        
        <a 
          href="#" 
          className={`mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold transform transition-all duration-200 ease-in-out ${
            system.isPopular
              ? isRedScheme
                ? 'bg-red-600 text-white hover:bg-red-500 hover:scale-105 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
                : 'bg-green-600 text-white hover:bg-green-500 hover:scale-105 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
              : isRedScheme
                ? 'text-red-600 ring-1 ring-red-200 hover:bg-red-50 hover:ring-red-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
                : 'text-green-600 ring-1 ring-green-200 hover:bg-green-50 hover:ring-green-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
          }`}
        >
          Xem chi tiết
        </a>
        
        <div className="flex-grow mt-8">
          <ul className="space-y-3 text-base/7 text-gray-600">
            <li className="flex gap-x-3 items-center">
              <BoltIcon className={`h-5 w-5 flex-none ${isRedScheme ? 'text-red-600' : 'text-green-600'}`} />
              Công suất: {system.power}
            </li>
            <li className="flex gap-x-3 items-center">
              <HomeIcon className={`h-5 w-5 flex-none ${isRedScheme ? 'text-red-600' : 'text-green-600'}`} />
              Hệ điện: {system.phase}
            </li>
            <li className="flex gap-x-3 items-center">
              <Squares2X2Icon className={`h-5 w-5 flex-none ${isRedScheme ? 'text-red-600' : 'text-green-600'}`} />
              {system.batteryInfo}
            </li>
            <li className="flex gap-x-3 items-center">
              <ChartBarIcon className={`h-5 w-5 flex-none ${isRedScheme ? 'text-red-600' : 'text-green-600'}`} />
              Sản lượng: {system.production}
            </li>
            <li className="flex gap-x-3 items-center">
              <Squares2X2Icon className={`h-5 w-5 flex-none ${isRedScheme ? 'text-red-600' : 'text-green-600'}`} />
              Diện tích lắp đặt: {system.area}
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div 
      className="py-2 sm:py-4 hidden md:block"
      style={{
        background: `
          radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.05) 0%, transparent 50%),
          linear-gradient(135deg, #fffef9 0%, #fffbea 50%, #fffdf3 100%)
        `
      }}
    >
      <div className="mx-auto container px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-x-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Điện Mặt Trời Gia Đình
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Giải pháp điện mặt trời thông minh cho mọi gia đình! Với công nghệ tiên tiến và thiết kế tối ưu, chúng tôi mang đến hệ thống điện mặt trời giúp:
            </p>
            <div className="mt-4 space-y-2">
              {benefits.map((benefit, index) => (
                <p key={index} className="flex items-center gap-x-2 text-gray-600">
                  <benefit.icon className="h-5 w-5 text-green-500" />
                  {benefit.text}
                </p>
              ))}
              <p className="mt-2 text-green-600 font-medium">
                👉 Tiết kiệm hơn - Xanh hơn - An toàn hơn!
              </p>
            </div>
          </div>
          
          <div className="mt-4 sm:mt-8 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <div className="relative w-full pb-[56.25%]">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                playsInline
                muted
                style={{
                  WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  WebkitMaskSize: 'cover',
                  maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  maskSize: 'cover',
                  borderRadius: '1rem'
                }}
              >
                <source src="/videos/he-gia-dinh.mp4" type="video/mp4" />
                {/* ⚠️ THAY ĐỔI: Cần thay thế đường dẫn video thực tế */}
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        
        <div className="mt-4 sm:mt-6 flex justify-between items-center">
          <div className="flex gap-x-3">
            <button 
              onClick={() => setActiveSystem('bam-tai')}
              className={`rounded-lg py-2 px-6 text-sm font-semibold transition-all duration-200 min-w-[120px] ${
                activeSystem === 'bam-tai'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Hệ Bám Tải
            </button>
            <button 
              onClick={() => setActiveSystem('hybrid')}
              className={`rounded-lg py-2 px-6 text-sm font-semibold transition-all duration-200 min-w-[120px] ${
                activeSystem === 'hybrid'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Hệ Hybrid
            </button>
          </div>
          <a 
            href="/he-gia-dinh" 
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 transition-all duration-200"
          >
            Xem tất cả sản phẩm
            <span className="ml-2">→</span>
          </a>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden sm:block">
          <div className="isolate mx-auto mt-4 sm:mt-6 grid max-w-md grid-cols-2 gap-3 sm:gap-4 md:max-w-2xl lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
            {solarSystems.map((system) => (
              <SystemCard key={system.id} system={system} />
            ))}
          </div>
        </div>
        
        {/* Mobile Swiper */}
        <div className="sm:hidden mt-4 px-4">
          <div className="overflow-x-auto">
            <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
              {solarSystems.map((system) => (
                <div key={system.id} className="w-80 flex-shrink-0">
                  <SystemCard system={system} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}