"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ShowreelSection from "./showreel-section";

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden pt-24 md:pt-28 pb-12">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-10 w-60 sm:w-72 h-60 sm:h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-4 sm:right-10 w-60 sm:w-72 h-60 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-8 sm:left-20 w-60 sm:w-72 h-60 sm:h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center flex-grow">
        
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-4 w-full flex flex-col items-center"
        >
          {/* Showreel Video */}
          <ShowreelSection />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 font-medium pt-2"
          >
            เราคือทีมผู้พัฒนาซอฟต์แวร์มืออาชีพของคนไทย
            ที่มุ่งมั่นสร้างสรรค์เทคโนโลยีคุณภาพระดับสากล
            เพื่อยกระดับมาตรฐานวงการซอฟต์แวร์ไทยให้ก้าวไกลอย่างยั่งยืน
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto px-4"
          >
            We are a team of Thai software professionals, dedicated to
            delivering world-class technology solutions and elevating the Thai
            software industry to global standards.
          </motion.p>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-blue-500/50"
          >
            <ChevronDown size={36} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;