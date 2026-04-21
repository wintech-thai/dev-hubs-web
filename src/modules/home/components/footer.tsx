"use client";

import { AppRoute } from "@/config/app.route";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Code2, Briefcase, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const socialLinks = [
  { icon: Code2, href: "#", label: "GitHub" },
  { icon: Briefcase, href: "#", label: "LinkedIn" },
  { icon: MessageCircle, href: "#", label: "Twitter" },
];

const contactInfo = [
  { icon: Mail, text: "contact@dev-hubs.com", href: "mailto:contact@dev-hubs.com" },
  { icon: Phone, text: "66(0) 94-249-4880", href: "tel:+66942494880" },
  {
    icon: MapPin,
    text: "Dev Hub Co., Ltd.",
    text2: "55 Sutthisan Winitchai Road, Din Daeng, Bangkok 10400, Thailand",
    href: "#",
  },
];

const services = [
  "Container Orchestration",
  "Custom Software Development",
  "Enterprise Web Solutions",
  "DevOps Engineering",
  "Cloud Infrastructure",
];

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { name: t.nav.about, link: AppRoute.home + "#about" },
    { name: t.nav.services, link: AppRoute.services },
    { name: t.nav.privacy, link: AppRoute.privacy },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center gap-3">
              <Image src="/Devhub_logo.png" alt="Dev Hub Logo" width={44} height={44} />
              <span className="text-xl font-bold text-white">
                Dev<span className="text-blue-400"> Hub</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">{t.footer.description}</p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-base font-semibold text-white">{t.footer.servicesTitle}</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-slate-400 hover:text-blue-400 cursor-pointer transition-colors text-sm"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-base font-semibold text-white">{t.footer.linksTitle}</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-slate-400 hover:text-blue-400 cursor-pointer transition-colors text-sm"
                >
                  <Link href={link.link}>{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-base font-semibold text-white">{t.footer.contactTitle}</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3 text-slate-400 hover:text-blue-400 transition-colors group"
                  >
                    <IconComponent size={16} className="group-hover:text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-sm">
                      {contact.text}
                      {"text2" in contact && contact.text2 && (
                        <><br />{contact.text2}</>
                      )}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} DevHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href={AppRoute.privacy} className="text-slate-500 hover:text-blue-400 text-sm transition-colors font-medium">
              {t.footer.privacy}
            </Link>
            <Link href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors font-medium">
              {t.footer.terms}
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-blue-600 via-cyan-500 to-blue-600" />
    </footer>
  );
};

export default Footer;
