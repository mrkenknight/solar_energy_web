'use client';
import { useState, useEffect } from 'react';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  SparklesIcon,
  BoltIcon,
  RectangleStackIcon,
  ChartBarIcon,
  FireIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const SolarIndustrialSection = () => {
  const [activeSystem, setActiveSystem] = useState<'on-grid' | 'hybrid'>('on-grid');
  const [isTransitioning, setIsTransitioning] = useState(false); 
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setActiveSystem(prev => prev === 'on-grid' ? 'hybrid' : 'on-grid');
        setTimeout(() => setIsTransitioning(false), 50);
      }, 200);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const benefits = [
    { icon: CheckCircleIcon, text: "Tiết kiệm hàng tỷ đồng tiền điện mỗi năm, tối ưu hóa chi phí vận hành" },
    { icon: CheckCircleIcon, text: "Hoàn vốn chỉ từ 3 năm, sinh lời bền vững, tăng tính cạnh tranh" },
    { icon: CheckCircleIcon, text: "Chủ động nguồn điện, giảm phụ thuộc vào điện lưới, hạn chế gián đoạn sản xuất" },
    { icon: CheckCircleIcon, text: "Giảm phát thải CO₂, nâng cao trách nhiệm môi trường, đáp ứng tiêu chuẩn ESG" }
  ];

  const onGridSystems = [
    {
      id: 'on-grid-30',
      name: 'Hệ On-Grid 30 kW',
      paybackTime: '49 tháng',
      monthlyEfficiency: '4.485.000đ',
      price: '219.000.180đ',
      power: '30 kWp',
      panelCount: '50 tấm',
      production: '1.800-2.100 kWh/tháng',
      batteryInfo: 'Kết nối trực tiếp lưới điện', // ✅ Thêm dòng này
      isPopular: false
    },
    // ... tương tự cho các hệ khác
    {
      id: 'on-grid-40',
      name: 'Hệ On-Grid 40 kW',
      paybackTime: '48 tháng',
      monthlyEfficiency: '6.050.000đ',
      price: '288.000.000đ',
      power: '40 kWp',
      panelCount: '66 tấm',
      production: '2.430-2.835 kWh/tháng',
      batteryInfo: 'Kết nối trực tiếp lưới điện', // ✅ Thêm
      isPopular: false
    },
    {
      id: 'on-grid-50',
      name: 'Hệ On-Grid 50 kW',
      paybackTime: '44 tháng',
      monthlyEfficiency: '8.070.000đ',
      price: '354.000.000đ',
      power: '50 kWp',
      panelCount: '83 tấm',
      production: '3.240-3.780 kWh/tháng',
      batteryInfo: 'Kết nối trực tiếp lưới điện', // ✅ Thêm
      isPopular: true
    },
    {
      id: 'on-grid-60',
      name: 'Hệ On-Grid 60 kW',
      paybackTime: '48 tháng',
      monthlyEfficiency: '8.970.000đ',
      price: '430.500.100đ',
      power: '60 kWp',
      panelCount: '100 tấm',
      production: '3.600-4.200 kWh/tháng',
      batteryInfo: 'Kết nối trực tiếp lưới điện', // ✅ Thêm
      isPopular: false
    }
  ];

  const hybridSystems = [
    {
      id: 'hybrid-30',
      name: 'Hệ Hybrid 30 kW',
      paybackTime: '55 tháng',
      monthlyEfficiency: '6.210.000đ',
      price: '342.000.000đ',
      power: '30 kWp',
      panelCount: '50 tấm',
      production: '2.520-2.880 kWh/tháng',
      batteryInfo: 'Pin lưu trữ: 15,36 kWh',
      isPopular: false
    },
    {
      id: 'hybrid-40',
      name: 'Hệ Hybrid 40 kW',
      paybackTime: '54 tháng',
      monthlyEfficiency: '8.540.000đ',
      price: '460.000.100đ',
      power: '40 kWp',
      panelCount: '66 tấm',
      production: '3.465-3.960 kWh/tháng',
      batteryInfo: 'Pin lưu trữ: 15,36 kWh',
      isPopular: false
    },
    {
      id: 'hybrid-50',
      name: 'Hệ Hybrid 50 kW',
      paybackTime: '51 tháng',
      monthlyEfficiency: '10.870.000đ',
      price: '545.000.000đ',
      power: '50 kWp',
      panelCount: '83 tấm',
      production: '4.410-5.040 kWh/tháng',
      batteryInfo: 'Pin lưu trữ: 20,48 kWh',
      isPopular: true
    },
    {
      id: 'hybrid-60',
      name: 'Hệ Hybrid 60 kW',
      paybackTime: '54 tháng',
      monthlyEfficiency: '12.420.000đ',
      price: '659.000.000đ',
      power: '60 kWp',
      panelCount: '100 tấm',
      production: '5.040-5.760 kWh/tháng',
      batteryInfo: 'Pin lưu trữ: 25,60 kWh',
      isPopular: false
    }
  ];

  const systems = activeSystem === 'on-grid' ? onGridSystems : hybridSystems;

  const SystemCard = ({ system }: { system: typeof onGridSystems[0] }) => {
    const isHybrid = activeSystem === 'hybrid';
    
    return (
      <div className={`relative rounded-3xl px-4 py-3 h-full flex flex-col transition-all duration-300 ${
        system.isPopular 
        ? isHybrid 
          ? 'ring-2 ring-green-600 bg-green-50 shadow-xl' 
          : 'ring-2 ring-red-600 bg-red-50 shadow-xl'
        : isHybrid
          ? 'ring-2 ring-gray-300 shadow-md hover:shadow-xl hover:ring-green-300 bg-white' // ✅ Sửa từ hover:ring-red-200 thành hover:ring-green-200
          : 'ring-2 ring-gray-300 shadow-md hover:shadow-xl hover:ring-red-300 bg-white'
      }`}>
        {system.isPopular && (
          <div className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center justify-center gap-x-1.5 rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap text-white ${
            isHybrid ? 'bg-green-600' : 'bg-red-600'
          }`}>
            <FireIcon className="h-4 w-4" />
            Bán chạy
          </div>
        )}
        
        <h3 className={`text-base/7 font-semibold py-2 text-center ${
          system.isPopular 
            ? isHybrid 
              ? 'text-green-600' 
              : 'text-red-600'
            : 'text-gray-900'
        }`}>
          {system.name}
        </h3>
        
        <div className="mt-2 flex gap-x-2">
          <button className={`flex-1 rounded-lg px-2 py-1 flex items-center gap-x-2 transition-all duration-200 ${
            isHybrid ? 'bg-green-50 hover:bg-green-100' : 'bg-red-50 hover:bg-red-100'
          }`}>
            <ClockIcon className={`h-5 w-5 ${isHybrid ? 'text-green-500' : 'text-red-500'}`} />
            <div className="flex flex-col items-start">
              <span className="text-xs text-gray-500">Hoàn vốn</span>
              <p className={`text-sm font-semibold ${isHybrid ? 'text-green-600' : 'text-red-600'}`}>
                {system.paybackTime}
              </p>
            </div>
          </button>
          
          <button className={`flex-1 rounded-lg px-2 py-1 flex items-center gap-x-2 transition-all duration-200 ${
            isHybrid ? 'bg-green-50 hover:bg-green-100' : 'bg-red-50 hover:bg-red-100'
          }`}>
            <SparklesIcon className={`h-5 w-5 ${isHybrid ? 'text-green-500' : 'text-red-500'}`} />
            <div className="flex flex-col items-start">
              <span className="text-xs text-gray-500">Hiệu quả/tháng</span>
              <p className={`text-sm font-semibold ${isHybrid ? 'text-green-600' : 'text-red-600'}`}>
                {system.monthlyEfficiency}
              </p>
            </div>
          </button>
        </div>
        
        <p className="mt-6 flex flex-col items-center">
          <span className="text-sm text-gray-500">Giá niêm yết T9/2025</span>
          <span className="flex items-baseline gap-x-1">
            <span className={`text-4xl font-semibold tracking-tight ${isHybrid ? 'text-green-600' : 'text-red-600'}`}>
              {system.price.replace('đ', '')}
            </span>
            <span className="text-base/7 font-semibold text-gray-600">đ</span>
          </span>
        </p>
        
        <a 
          href="#" 
          className={`mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold transform transition-all duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 ${
            system.isPopular
              ? isHybrid
                ? 'bg-green-600 text-white hover:bg-green-500 hover:scale-105 hover:shadow-lg focus-visible:outline-green-600'
                : 'bg-red-600 text-white hover:bg-red-500 hover:scale-105 hover:shadow-lg focus-visible:outline-red-600'
              : isHybrid
                ? 'text-green-600 ring-1 ring-green-200 hover:bg-green-50 hover:ring-green-300 hover:scale-105 focus-visible:outline-green-600'
                : 'text-red-600 ring-1 ring-red-200 hover:bg-red-50 hover:ring-red-300 hover:scale-105 focus-visible:outline-red-600'
          }`}
        >
          Xem chi tiết
        </a>
        
        <div className="flex-grow">
          <ul className="mt-8 space-y-3 text-base/7 text-gray-600">
            <li className="flex gap-x-3 items-center">
              <BoltIcon className={`h-5 w-5 flex-none ${isHybrid ? 'text-green-600' : 'text-red-600'}`} />
              Công suất: {system.power}
            </li>
            <li className="flex gap-x-3 items-center">
              <RectangleStackIcon className={`h-5 w-5 flex-none ${isHybrid ? 'text-green-600' : 'text-red-600'}`} />
              Số lượng tấm pin: {system.panelCount}
            </li>
            <li className="flex gap-x-3 items-center"> {/* ✅ Bỏ điều kiện, hiển thị luôn */}
              <RectangleStackIcon className={`h-5 w-5 flex-none ${isHybrid ? 'text-green-600' : 'text-red-600'}`} />
              {system.batteryInfo}
            </li>
            <li className="flex gap-x-3 items-center">
              <ChartBarIcon className={`h-5 w-5 flex-none ${isHybrid ? 'text-green-600' : 'text-red-600'}`} />
              Sản lượng: {system.production}
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
          radial-gradient(circle at 80% 20%, rgba(134, 239, 172, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(74, 222, 128, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 60% 40%, rgba(187, 247, 208, 0.04) 0%, transparent 50%),
          linear-gradient(135deg, #fefefe 0%, #f0fdf4 25%, #dcfce7 50%, #f0fdf4 75%, #ffffff 100%)
        `
      }}
    >
      <div className="mx-auto container px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-x-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Điện Mặt Trời Công Nghiệp
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Giải pháp năng lượng xanh tối ưu cho doanh nghiệp! Với hệ thống công suất lớn, điện mặt trời giúp doanh nghiệp:
            </p>
            
            <div className="mt-4 space-y-2">
              {benefits.map((benefit, index) => (
                <p key={index} className="flex items-center gap-x-2 text-gray-600">
                  <benefit.icon className="h-5 w-5 text-green-500" />
                  {benefit.text}
                </p>
              ))}
            </div>
            
            <p className="mt-4 text-base font-semibold text-green-600">
              👉 Giải pháp bền vững - Tăng trường mạnh mẽ - Dẫn đầu xu hướng!
            </p>
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
                <source src="/videos/he-cong-nghiep.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        
        <div className="mt-4 sm:mt-6 flex justify-between items-center">
          <div className="flex gap-x-3">
            <button 
              onClick={() => setActiveSystem('on-grid')}
              className={`rounded-lg py-2 px-6 text-sm font-semibold transition-all duration-200 ${
                activeSystem === 'on-grid'
                  ? 'bg-red-600 text-white shadow-md hover:bg-red-500'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Hệ Bám Tải
            </button>
            <button 
              onClick={() => setActiveSystem('hybrid')}
              className={`rounded-lg py-2 px-6 text-sm font-semibold transition-all duration-200 ${
                activeSystem === 'hybrid'
                  ? 'bg-green-600 text-white shadow-md hover:bg-green-500'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Hệ Hybrid
            </button>
          </div>
          
          <a 
            href="/he-cong-nghiep" 
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 transition-all duration-200"
          >
            Xem tất cả sản phẩm
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
        
        <div className="hidden sm:block">
          <div className="isolate mx-auto mt-4 sm:mt-6 grid max-w-md grid-cols-2 gap-3 sm:gap-4 md:max-w-2xl lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
            {systems.map(system => (
              <SystemCard key={system.id} system={system} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarIndustrialSection;