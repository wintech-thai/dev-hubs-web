"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ShowreelSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const isInView = useInView(videoRef, { amount: 0.2 });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch((e) => console.log("Auto-play prevented:", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-blue-600">Showreel</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          ชมผลงานและบรรยากาศการทำงานของเราผ่านวิดีโอแนะนำบริษัท
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video max-w-5xl mx-auto bg-gray-100"
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          controls 
          poster="/video-poster.jpg"
        >
          <source src="/videos/showreel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
};

export default ShowreelSection;