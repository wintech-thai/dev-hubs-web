"use client";

import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { AppRoute } from "@/config/app.route";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  const links = [
    { name: t.nav.about, link: AppRoute.home + "#about" },
    { name: t.nav.services, link: AppRoute.home + "#services" },
    { name: t.nav.privacy, link: AppRoute.privacy },
    { name: t.nav.document, link: AppRoute.document },
  ];

  const handleMobileNavClick = (link: string) => {
    if (link.includes("#") && pathname === AppRoute.home) {
      setIsOpen(false);
      setTimeout(() => {
        const anchor = link.split("#")[1];
        const element = document.getElementById(anchor);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
      return;
    }
    setIsOpen(false);
  };

  const LangToggle = ({ mobile = false }: { mobile?: boolean }) => (
    <button
      onClick={() => setLang(lang === "en" ? "th" : "en")}
      className={`flex items-center gap-1 rounded-lg border border-slate-600/60 px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:border-blue-500/50 hover:bg-slate-700/60 ${mobile ? "w-full justify-center mt-2 py-3 text-sm" : ""}`}
      aria-label="Toggle language"
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
      className="fixed top-0 left-0 right-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50 shadow-lg shadow-slate-950/50 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-20 w-full">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <Link href={AppRoute.home} className="flex items-center gap-3">
              <Image src="/Devhub_logo.png" alt="Dev Hub Logo" width={50} height={50} />
              <span className="text-2xl font-bold text-white">
                Dev<span className="text-blue-400">Hub</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 ml-10">
            {links.map((link) => (
              <Link key={link.name} href={link.link}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-slate-300 hover:text-white hover:bg-slate-700/60 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer"
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
            <div className="ml-2">
              <LangToggle />
            </div>
          </div>

          {/* Mobile: lang toggle + hamburger */}
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

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-slate-900 rounded-b-xl border-t border-slate-700/50">
            {links.map((link) => {
              const isAnchorLink = link.link.includes("#") && pathname === AppRoute.home;

              if (isAnchorLink) {
                return (
                  <motion.span
                    key={link.name}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-slate-300 hover:text-white hover:bg-slate-700/60 block px-4 py-3 rounded-lg text-base font-medium cursor-pointer transition-all"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMobileNavClick(link.link);
                    }}
                  >
                    {link.name}
                  </motion.span>
                );
              }

              return (
                <Link key={link.name} href={link.link}>
                  <motion.span
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-slate-300 hover:text-white hover:bg-slate-700/60 block px-4 py-3 rounded-lg text-base font-medium transition-all"
                    onClick={() => handleMobileNavClick(link.link)}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
