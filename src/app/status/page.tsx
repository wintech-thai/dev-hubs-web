"use client";

import Footer from '@/modules/home/components/footer';
import Navbar from '@/modules/home/components/nav-bar';
import { motion } from 'framer-motion';
import { env } from 'next-runtime-env';
import { useEffect, useState } from 'react';

const StatusPage = () => {
  const [client, setClient] = useState(false);

  const statusUrl = env("NEXT_PUBLIC_WEB_STATUS_URL") || "https://uptime.dev-hubs.com/status/please-scan";

  useEffect(() => {
    setClient(true);
  }, [])

  if (!client) return null;

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-white via-blue-50 to-white no-scroll-x">
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

      <div className="container mx-auto px-4 py-16 mt-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Iframe Container */}
          <div className="relative">
            <iframe
              src={statusUrl}
              className="w-full h-[600px] md:h-[700px] lg:h-[800px] border-0 rounded-lg shadow-lg"
              title="Please-Scan System Status"
              sandbox="allow-scripts allow-same-origin allow-forms"
              loading="lazy"
            />

            {/* Loading Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-blue-50/80 flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-500 rounded-lg" id="loading-overlay">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-700">กำลังโหลดข้อมูลสถานะ...</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Script to handle iframe loading */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', function() {
              const iframe = document.querySelector('iframe');
              const overlay = document.getElementById('loading-overlay');

              if (iframe && overlay) {
                iframe.addEventListener('load', function() {
                  overlay.style.opacity = '0';
                  setTimeout(() => {
                    overlay.style.display = 'none';
                  }, 500);
                });

                // Show loading initially
                overlay.style.opacity = '1';
                overlay.style.display = 'flex';
              }
            });
          `
        }}
      />
      <Footer />
    </div>
  );
}

export default StatusPage;
