"use client";

import AboutSection from "@/modules/home/components/about-section";
import Footer from "@/modules/home/components/footer";
import HeroSection from "@/modules/home/components/hero-section";
import Navbar from "@/modules/home/components/nav-bar";
import ServicesSection from "@/modules/home/components/services-section";

export const HomeView = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 no-scroll-x">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-20 overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Navbar />
      <main className="w-full overflow-x-hidden no-scroll-x">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};
