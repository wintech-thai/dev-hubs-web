"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, FileText } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Link from "next/link";
import { AppRoute } from "@/config/app.route";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden pt-24 pb-16">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-24 left-4 sm:left-16 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-15 animate-pulse" />
        <div
          className="absolute top-48 right-4 sm:right-16 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-96 h-64 bg-blue-700 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "4s" }}
        />
        <div className="absolute inset-0 bg-mesh opacity-25" />
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center grow">
        {/* Tagline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          {t.hero.tagline}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6"
        >
          {t.hero.headline}{" "}
          <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {t.hero.headlineAccent}
          </span>
          <br className="hidden sm:block" />
          {" "}{t.hero.headlineSuffix}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {t.hero.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href={AppRoute.services}
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            {t.hero.ctaExplore}
            <ArrowRight size={18} />
          </Link>
          <a
            href="https://storage.googleapis.com/public-software-download/dev-hubs/DevHub_Company_Profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold px-7 py-3.5 rounded-xl border border-slate-700 hover:border-slate-600 hover:-translate-y-0.5 transition-all duration-300"
          >
            <FileText size={18} className="text-blue-400" />
            {t.hero.ctaProfile}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-blue-400/50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
