"use client";

import AboutSection from "@/modules/home/components/about-section";
import Footer from "@/modules/home/components/footer";
import HeroSection from "@/modules/home/components/hero-section";
import Navbar from "@/modules/home/components/nav-bar";
import ServicesSection from "@/modules/home/components/services-section";
import ParticlesHero from "./components/ParticleBackground";
import ShowreelSection from "./components/showreel-section";

export const HomeView = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-950">
      {/* Background Effects */}
      <ParticlesHero />

      {/* Global glow accents */}
      <div className="fixed top-20 right-10 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />

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