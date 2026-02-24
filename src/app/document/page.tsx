"use client";

import React from "react";
import Image from "next/image";
import { Download, FileText, QrCode } from "lucide-react";
import Navbar from "@/modules/home/components/nav-bar";
import Footer from "@/modules/home/components/footer";

const DocumentPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-white via-blue-50 to-white no-scroll-x">
      <div className="fixed top-0 left-0 w-full h-64 pointer-events-none opacity-40 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-[#4A90E2]/30 to-transparent rounded-bl-[100px]" />
      </div>
      <div className="fixed bottom-0 left-0 w-full h-64 pointer-events-none opacity-40 z-0">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-[#4A90E2]/30 to-transparent rounded-tr-[100px]" />
      </div>
      <div className="fixed inset-0 opacity-5 overflow-hidden pointer-events-none z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234A90E2' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="fixed top-20 right-10 w-96 h-96 bg-[#4A90E2]/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-[#5B9FEC]/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Navbar */}
      <Navbar />

      {/* ส่วนเนื้อหาหลัก Document */}
      <div className="container mx-auto px-4 py-32 relative z-10 flex-grow">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Company <span className="text-blue-600">Document</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              ดาวน์โหลดเอกสาร Company Profile เพื่อทำความรู้จักเราให้มากขึ้น
              หรือสแกน QR Code เพื่อเปิดอ่านบนมือถือได้อย่างสะดวก
            </p>
          </div>

          {/* การ์ดสีขาว */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 text-blue-50 opacity-50 pointer-events-none">
              <FileText size={300} />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 relative z-10">
              {/* ปุ่ม Download */}
              <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right w-full">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 border border-blue-100">
                  <FileText size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-8">
                  Dev Hub Company Profile
                </h3>
                
                <a
                  href="/documents/company-profile.pdf"
                  download="DevHub_Company_Profile.pdf" 
                  className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 w-full md:w-auto justify-center"
                >
                  <Download
                    size={20}
                    className="group-hover:-translate-y-1 transition-transform"
                  />
                  ดาวน์โหลด PDF
                </a>
              </div>

              {/* เส้นคั่นกลาง */}
              <div className="hidden md:block w-px h-64 bg-gray-200" />

              {/* ฝั่ง QR Code */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full">
                <div className="flex items-center gap-2 text-gray-800 font-semibold mb-4 text-lg">
                  <QrCode className="text-blue-600" size={24} />
                  <span>Scan to view on Mobile</span>
                </div>

                <div className="p-3 bg-white rounded-2xl shadow-sm border border-gray-200 hover:border-blue-300 transition-colors duration-300">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                    <Image
                      src="/profile-company-qr.png" // รูป QR Code
                      alt="Company Profile QR Code"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4 max-w-xs">
                  ใช้แอปพลิเคชันกล้องหรือไลน์ในมือถือของคุณสแกนเพื่ออ่าน Company
                  Profile ทันที
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default DocumentPage;