import React from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import SubscriptionPlanSection from '@/components/home/SubscriptionPlanSection';
import CompanyStatsSection from '@/components/home/CompanyStatsSection';
import QuoteSection from '@/components/home/QuoteSection';
import StorageSection from '@/components/home/StorageSection';
import AppSection from '@/components/home/AppSection';
import CustomerStorySection from '@/components/home/CustomerStorySection';
import WhySunrunSection from '@/components/home/WhySunrunSection';
import CareersCTASection from '@/components/home/CareersCTASection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfaf6] overflow-x-hidden antialiased">
      <Header />
      
      <main>
        <HeroSection />
        <SubscriptionPlanSection />
        <CompanyStatsSection />
        <QuoteSection />
        <StorageSection />
        <AppSection />
        <CustomerStorySection />
        <WhySunrunSection />
        <CareersCTASection />
      </main>

      <Footer />
    </div>
  );
}