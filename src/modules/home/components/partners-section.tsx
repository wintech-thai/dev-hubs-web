"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const partners = [
  {
    name: "Tech Enterprise",
    description: "Enterprise Technology Solutions",
    href: "https://techentcorp.com/",
    logo: "https://techentcorp.com/wp-content/uploads/2023/06/TEC-logo-1.png",
  },
  {
    name: "Triple-T Innovation",
    description: "Digital Excellence & Web Solutions",
    href: "https://triple-t.co.th/",
    logo: "https://triple-t.co.th/wp-content/webp-express/webp-images/uploads/elementor/thumbs/Logo-r8jjr8i0dht230h92ff6dmn2xmdpo1viertgvyiz28.png.webp",
  },
  {
    name: "Tunable Project",
    description: "Next-Gen Cyber Security & Research",
    href: "https://web.tunableproject.com/",
    logo: "https://w2.tunableproject.com/wp-content/uploads/2025/09/tunable_logo1.png",
  },
];

const PartnersSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60 relative bg-slate-950">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-blue-700 rounded-full blur-3xl opacity-5" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            {t.partners.heading}{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t.partners.headingAccent}
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t.partners.subtitle}
          </p>
        </motion.div>

        {/* Partner cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((partner, i) => (
            <motion.a
              key={i}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group flex items-center gap-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 rounded-2xl px-8 py-6 transition-all duration-400 min-w-72"
            >
              {/* Logo */}
              <div className="w-24 h-14 relative shrink-0 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">
                    {partner.name}
                  </h3>
                  <ExternalLink
                    size={14}
                    className="text-slate-600 group-hover:text-blue-400 transition-colors shrink-0"
                  />
                </div>
                <p className="text-slate-400 text-sm">{partner.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
