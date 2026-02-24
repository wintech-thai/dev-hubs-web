"use client";

import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { AppRoute } from "@/config/app.route";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { env } from "next-runtime-env";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const links = [
    {
      name: "About",
      link: AppRoute.home + '#about',
    },
    {
      name: "Services",
      link: AppRoute.home + '#services',
    },
    {
      name: "Privacy",
      link: AppRoute.privacy,
    },
    {
      name: "Document",
      link: AppRoute.document,
    }
    
  ];

  const handleMobileNavClick = (link: string) => {
    if (link.includes('#') && pathname === AppRoute.home) {
      setIsOpen(false);

      setTimeout(() => {
        const anchor = link.split('#')[1];
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 300);

      return;
    }

    setIsOpen(false);
  };

  const consoleUrl = (env("NEXT_PUBLIC_CONSOLE_URL") ?? "") + "/auth/sign-in";

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-20 w-full">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link href={AppRoute.home} className="flex items-center gap-3">
              <Image
                src="/Devhub_logo.png"
                alt="Dev Hub Logo"
                width={50}
                height={50}
              />
              <span className="text-2xl font-bold text-gray-800">
                Dev<span className="text-blue-600">Hub</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {links.map((link) => (
                <Link key={link.name} href={link.link}>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}

            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white rounded-b-lg">
            {links.map((link) => {
              const isAnchorLink = link.link.includes('#') && pathname === AppRoute.home;

              if (isAnchorLink) {
                return (
                  <motion.span
                    key={link.name}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 rounded-lg text-base font-medium cursor-pointer transition-all"
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
                    className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 rounded-lg text-base font-medium transition-all"
                    onClick={() => handleMobileNavClick(link.link)}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              );
            })}

            <Link href={consoleUrl}>
              <motion.span
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white block px-4 py-3 rounded-lg text-base font-semibold shadow-md mt-3 text-center transition-all"
                onClick={() => setIsOpen(false)}
              >
                Login
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;