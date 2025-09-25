import HeroPricing from "@/components/san-pham/HeroPricing";
import SolarProductsSection from '@/components/san-pham/SolarProductsSection';
// import SolarIndustrialSection from '@/components/goi-dich-vu/SolarIndustrialSection';

export default function SanPham() {
  return (
    <main className="min-h-screen">
      <HeroPricing />
      <SolarProductsSection />
      {/* <SolarIndustrialSection /> */}

      {/* Các section khác sẽ thêm dần ở đây */}
    </main>
  );
}
