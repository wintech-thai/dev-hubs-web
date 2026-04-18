"use client";

import Image from "next/image";
import { ExternalLink, FileText, QrCode } from "lucide-react";
import Navbar from "@/modules/home/components/nav-bar";
import Footer from "@/modules/home/components/footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const DocumentPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-slate-950">
      <div className="fixed top-20 right-10 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none z-0" />

      <Navbar />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.document.heading} <span className="text-blue-400">{t.document.headingAccent}</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.document.subtitle}</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 text-blue-500/5 pointer-events-none">
              <FileText size={300} />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 relative z-10">
              {/* Left — PDF */}
              <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right w-full">
                <div className="w-20 h-20 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mb-6 border border-blue-500/20">
                  <FileText size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-8">{t.document.docTitle}</h3>
                <a
                  href="https://storage.googleapis.com/public-software-download/dev-hubs/DevHub_Company_Profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 w-full md:w-auto justify-center"
                >
                  <ExternalLink size={20} className="group-hover:-translate-y-0.5 transition-transform" />
                  {t.document.openPdf}
                </a>
              </div>

              <div className="hidden md:block w-px h-64 bg-slate-700/50" />

              {/* Right — QR Code */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full">
                <div className="flex items-center gap-2 text-slate-200 font-semibold mb-4 text-lg">
                  <QrCode className="text-blue-400" size={24} />
                  <span>{t.document.qrTitle}</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-2xl border border-slate-700/50 hover:border-blue-500/40 transition-colors duration-300">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                    <Image
                      src="/qrcode_storage.googleapis.com.png"
                      alt="Company Profile QR Code"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-4 max-w-xs">{t.document.qrCaption}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default DocumentPage;
