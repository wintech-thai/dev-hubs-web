"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-24 sm:pt-20 md:pt-0">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-10 w-60 sm:w-72 h-60 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-4 sm:right-10 w-60 sm:w-72 h-60 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-8 sm:left-20 w-60 sm:w-72 h-60 sm:h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex justify-center"
          >
            <div className="relative h-32 w-32 md:h-[200px] md:w-[200px]">
              <Image
                src="/logo.png"
                alt="Please Scan Logo"
                fill
                className="absolute object-cover"
              />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            Please
            <motion.span
              initial={{ color: "#ffffff" }}
              animate={{ color: "#60A5FA" }}
              transition={{ duration: 2, delay: 1.2 }}
              className="block"
            >
              Scan
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
          >
            เราจะสร้างโลกที่ผู้บริโภคมั่นใจได้ในทุกการซื้อขาย
            ด้วยเทคโนโลยีตรวจสอบความแท้ของสินค้าที่เชื่อถือได้และเข้าถึงง่าย
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4"
          >
            To create a world where every purchase is trusted, through reliable
            and accessible product authenticity verification technology
          </motion.p>

          {/* CTA Button */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 3.5 }}
            className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 shadow-lg w-full sm:w-auto"
            >
              Learn More
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-blue-500 hover:bg-blue-500 text-blue-400 hover:text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 w-full sm:w-auto"
            >
              Contact Us
            </motion.button>
          </motion.div> */}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
