"use client";

import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { AppRoute } from "@/config/app.route";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      name: "Status",
      link: AppRoute.status,
    },
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

  return (
    <motion.nav className="fixed top-0 left-0 right-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link href={AppRoute.home} className="flex items-center">
              <Image
                src="/logo.png"
                alt="Please Scan Logo"
                width={60}
                height={60}
                className="mr-2"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <Link key={link.name} href={link.link}>
                  <motion.span
                    whileHover={{ scale: 1.1, color: "#60A5FA" }}
                    className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
              className="text-white hover:text-blue-400 focus:outline-none"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => {
              const isAnchorLink = link.link.includes('#') && pathname === AppRoute.home;

              if (isAnchorLink) {
                return (
                  <motion.span
                    key={link.name}
                    whileHover={{ x: 10 }}
                    className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
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
                    whileHover={{ x: 10 }}
                    className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
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
