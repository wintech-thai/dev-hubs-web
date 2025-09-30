"use client";

import { AppRoute } from '@/config/app.route';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

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

  const contactInfo = [
    { icon: Mail, text: 'contact@please-scan.com', href: 'mailto:contact@please-scan.com' },
    { icon: Phone, text: '66(0) 94-249-4880', href: 'tel:+66942494880' },
    { icon: MapPin, text: 'Dev Hub Co., Ltd. 55 Sutthisan Winitchai Road, Din Daeng Subdistrict, Din Daeng District, Bangkok 10400, Thailand', href: '#' },
  ];

  const services = [
    "Customizable UI/UX",
    "System Integration",
    "QR Sticker Design for Products",
    "Analytics & Insights",
    "Scalability & Performance",
    "Support & Maintenance"
  ]

  return (
    <footer className="relative bg-black/20 backdrop-blur-sm border-t border-white/10">
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
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Please Scan Logo"
                width={60}
                height={40}
                className="mr-2"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for innovative technology solutions.
              We transform ideas into digital reality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 hover:bg-blue-600/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300"
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
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors"
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
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors"
                >
                  <Link href={link.link}>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors group"
                  >
                    <IconComponent size={16} className="group-hover:text-blue-400 flex-shrink-0" />
                    <span className="text-sm">{contact.text}</span>
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
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Please Scan. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href={AppRoute.privacy} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600"></div>
      </div>
    </footer>
  );
};

export default Footer;
