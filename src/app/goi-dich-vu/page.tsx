import HeroPricing from "@/components/goi-dich-vu/HeroPricing";
import SolarFamilySection from '@/components/goi-dich-vu/SolarFamilySection';
import SolarIndustrialSection from '@/components/goi-dich-vu/SolarIndustrialSection';

export default function GoiDichVuPage() {
  return (
    <main className="min-h-screen">
      <HeroPricing />
      <SolarFamilySection />
      <SolarIndustrialSection />

      {/* Các section khác sẽ thêm dần ở đây */}
    </main>
  );
}
