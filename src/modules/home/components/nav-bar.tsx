"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import Image from "next/image";
import { AppRoute } from "@/config/app.route";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const products = [
  {
    name: "Please Scan",
    domain: "please-scan.com",
    description: "Product authentication via QR",
    descriptionTh: "ตรวจสอบความแท้ผ่าน QR Code",
    href: "https://please-scan.com/",
    logo: "https://please-scan.com/logo.png",
  },
  {
    name: "Please Protect",
    domain: "please-protect.com",
    description: "Product protection platform",
    descriptionTh: "แพลตฟอร์มปกป้องผลิตภัณฑ์",
    href: "https://please-protect.com/",
    logo: "https://please-protect.com/please-protect.svg",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  // close dropdown when clicking outside
  const productsRef = useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  const linksStart = [
    { name: t.nav.about, link: AppRoute.home + "#about" },
    { name: t.nav.services, link: AppRoute.services },
  ];
  const linksEnd = [
    { name: t.nav.events, link: AppRoute.events },
    { name: t.nav.document, link: AppRoute.document },
  ];
  const linksRight = [
    { name: t.nav.privacy, link: AppRoute.privacy },
  ];

  const isActive = (link: string) => {
    if (link.includes("#")) return pathname === AppRoute.home;
    return pathname === link;
  };

  const handleMobileNavClick = (link: string) => {
    if (link.includes("#") && pathname === AppRoute.home) {
      setIsOpen(false);
      setTimeout(() => {
        const anchor = link.split("#")[1];
        document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
      return;
    }
    setIsOpen(false);
  };


  const LangToggle = ({ mobile = false }: { mobile?: boolean }) => (
    <button
      onClick={() => setLang(lang === "en" ? "th" : "en")}
      aria-label="Toggle language"
      className={`flex items-center gap-1 rounded-lg border border-slate-600/60 px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:border-blue-500/50 hover:bg-slate-700/60 ${
        mobile ? "w-full justify-center mt-2 py-3 text-sm" : ""
      }`}
    >
      <span className={lang === "en" ? "text-white" : "text-slate-500"}>EN</span>
      <span className="text-slate-600 mx-0.5">|</span>
      <span className={lang === "th" ? "text-white" : "text-slate-500"}>TH</span>
    </button>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50 shadow-lg shadow-slate-950/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-20 w-full">

          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center shrink-0">
            <Link href={AppRoute.home} className="flex items-center gap-3">
              <Image src="/Devhub_logo.png" alt="Dev Hub Logo" width={50} height={50} />
              <span className="text-2xl font-bold text-white">
                Dev<span className="text-blue-400"> Hub</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-between flex-1 ml-8">

            {/* Left group: main nav links */}
            <div className="flex items-center gap-0.5">
              {linksStart.map((link) => (
                <Link key={link.name} href={link.link}>
                  <motion.span
                    whileTap={{ scale: 0.97 }}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer inline-block ${
                      isActive(link.link)
                        ? "text-blue-400 bg-blue-500/10"
                        : "text-slate-300 hover:text-white hover:bg-slate-700/60"
                    }`}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}

              {/* ── Products dropdown ── */}
              <div ref={productsRef} className="relative">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setProductsOpen((v) => !v)}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white hover:bg-slate-700/60 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  {t.nav.products}
                  <motion.span
                    animate={{ rotate: productsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center"
                  >
                    <ChevronDown size={13} />
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56"
                    >
                      <div className="flex justify-center mb-1">
                        <div className="w-2.5 h-2.5 bg-slate-800 border-l border-t border-slate-700/60 rotate-45" />
                      </div>
                      <div className="bg-slate-800/95 backdrop-blur-xl border border-slate-700/60 rounded-2xl shadow-2xl shadow-slate-950/60 overflow-hidden">
                        <div className="p-2">
                          {products.map((p) => (
                            <a
                              key={p.name}
                              href={p.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-700/60 transition-all duration-200"
                            >
                              <div className="w-9 h-9 rounded-lg bg-slate-700/60 flex items-center justify-center shrink-0 overflow-hidden p-1">
                                <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                                  {p.name}
                                </div>
                                <div className="text-xs text-slate-400 truncate">
                                  {lang === "th" ? p.descriptionTh : p.description}
                                </div>
                              </div>
                              <ExternalLink size={13} className="text-slate-500 group-hover:text-blue-400 transition-colors shrink-0" />
                            </a>
                          ))}
                        </div>
                        <div className="h-px bg-linear-to-r from-blue-600/50 via-cyan-500/50 to-transparent" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {linksEnd.map((link) => (
                <Link key={link.name} href={link.link}>
                  <motion.span
                    whileTap={{ scale: 0.97 }}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer inline-block ${
                      isActive(link.link)
                        ? "text-blue-400 bg-blue-500/10"
                        : "text-slate-300 hover:text-white hover:bg-slate-700/60"
                    }`}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
            </div>

            {/* Right group: Privacy + LangToggle */}
            <div className="flex items-center gap-2">
              <div className="w-px h-5 bg-slate-700 mx-2" />
              {linksRight.map((link) => (
                <Link key={link.name} href={link.link}>
                  <motion.span
                    whileTap={{ scale: 0.97 }}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer inline-block ${
                      isActive(link.link)
                        ? "text-blue-400 bg-blue-500/10"
                        : "text-slate-300 hover:text-white hover:bg-slate-700/60"
                    }`}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
              <LangToggle />
            </div>
          </div>

          {/* Mobile: lang + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <LangToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white hover:bg-slate-700/60 p-2 rounded-lg focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-slate-700/50"
          >
            <div className="px-4 py-3 space-y-1 bg-slate-900">
              {/* Links before Products */}
              {linksStart.map((link) => {
                const isAnchor = link.link.includes("#") && pathname === AppRoute.home;
                if (isAnchor) {
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleMobileNavClick(link.link)}
                      className={`w-full text-left block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        isActive(link.link) ? "text-blue-400 bg-blue-500/10" : "text-slate-300 hover:text-white hover:bg-slate-700/60"
                      }`}
                    >
                      {link.name}
                    </button>
                  );
                }
                return (
                  <Link key={link.name} href={link.link} onClick={() => setIsOpen(false)}>
                    <span className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive(link.link) ? "text-blue-400 bg-blue-500/10" : "text-slate-300 hover:text-white hover:bg-slate-700/60"
                    }`}>
                      {link.name}
                    </span>
                  </Link>
                );
              })}

              {/* Products expandable — between Services and Events */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen((v) => !v)}
                  className="w-full flex items-center justify-between text-slate-300 hover:text-white hover:bg-slate-700/60 px-4 py-3 rounded-lg text-sm font-medium transition-all"
                >
                  {t.nav.products}
                  <motion.span
                    animate={{ rotate: mobileProductsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center"
                  >
                    <ChevronDown size={15} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-1 mx-2 bg-slate-800/60 rounded-xl border border-slate-700/40 overflow-hidden">
                        <div className="p-1.5">
                          {products.map((p) => (
                            <a
                              key={p.name}
                              href={p.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsOpen(false)}
                              className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-700/40 transition-colors"
                            >
                              <div className="w-8 h-8 rounded-lg bg-slate-700/60 flex items-center justify-center shrink-0 overflow-hidden p-1">
                                <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold text-white">{p.name}</div>
                                <div className="text-xs text-slate-500 truncate">{p.domain}</div>
                              </div>
                              <ExternalLink size={12} className="text-slate-500 shrink-0" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Links after Products */}
              {linksEnd.map((link) => (
                <Link key={link.name} href={link.link} onClick={() => setIsOpen(false)}>
                  <span className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive(link.link) ? "text-blue-400 bg-blue-500/10" : "text-slate-300 hover:text-white hover:bg-slate-700/60"
                  }`}>
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
