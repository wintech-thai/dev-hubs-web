"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ShowreelSection from "./showreel-section";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden pt-24 md:pt-28 pb-12">
      {/* Background glow blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-10 w-60 sm:w-80 h-60 sm:h-80 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-4 sm:right-10 w-60 sm:w-80 h-60 sm:h-80 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-8 sm:left-20 w-60 sm:w-72 h-60 sm:h-72 bg-cyan-500 rounded-full filter blur-3xl opacity-15 animate-pulse animation-delay-4000"></div>
        <div className="absolute inset-0 bg-mesh opacity-40"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center grow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-4 w-full flex flex-col items-center"
        >
          <ShowreelSection />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed px-4 font-medium pt-2"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto px-4"
          >
            {t.hero.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-blue-400/60"
          >
            <ChevronDown size={36} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
