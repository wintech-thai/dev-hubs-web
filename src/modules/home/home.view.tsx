"use client";

import AboutSection from "@/modules/home/components/about-section";
import Footer from "@/modules/home/components/footer";
import HeroSection from "@/modules/home/components/hero-section";
import Navbar from "@/modules/home/components/nav-bar";
import ServicesSection from "@/modules/home/components/services-section";
import ParticlesHero from "./components/ParticleBackground";

export const HomeView = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-white via-blue-50 to-white no-scroll-x">
      {/* Background Effects */}
      <ParticlesHero />
      
      {/* Blue wave decoration - top */}
      <div className="fixed top-0 left-0 w-full h-64 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-[#4A90E2]/30 to-transparent rounded-bl-[100px]" />
      </div>
      
      {/* Blue wave decoration - bottom */}
      <div className="fixed bottom-0 left-0 w-full h-64 pointer-events-none opacity-40">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-[#4A90E2]/30 to-transparent rounded-tr-[100px]" />
      </div>
      
      {/* Subtle dot pattern */}
      <div className="fixed inset-0 opacity-5 overflow-hidden pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234A90E2' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      {/* Soft blue accents */}
      <div className="fixed top-20 right-10 w-96 h-96 bg-[#4A90E2]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-[#5B9FEC]/10 rounded-full blur-3xl pointer-events-none" />

      <Navbar />
      <main className="relative w-full overflow-x-hidden no-scroll-x">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};