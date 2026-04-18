"use client";

import { motion } from "framer-motion";
import { Code, Container, Globe, Settings, Cloud, UserPlus, Upload, QrCode, Sparkles, LucideIcon } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const serviceIcons: LucideIcon[] = [Container, Code, Globe, Settings, Cloud];
const serviceGradients = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-green-500 to-emerald-500",
  "from-orange-500 to-red-500",
  "from-teal-500 to-cyan-500",
];

const stepIcons: LucideIcon[] = [UserPlus, Upload, QrCode, Sparkles];
const stepColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-green-500 to-emerald-500",
  "from-orange-500 to-red-500",
];
const stepNumbers = ["01", "02", "03", "04"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// ── Moved outside ServicesSection so React never sees it as a new type on re-render ──
type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  index: number;
  large?: boolean;
};

const ServiceCard = ({ title, description, icon: IconComponent, gradient, large = false }: ServiceCardProps) => (
  <motion.div variants={itemVariants} whileHover={{ y: -12, scale: 1.03 }} className="group relative">
    <div
      className={`relative ${large ? "p-10" : "p-8"} bg-slate-800/40 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 h-full flex flex-col`}
    >
      <div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
      <motion.div whileHover={{ scale: 1.15, rotate: 8 }} className={`relative ${large ? "mb-8" : "mb-6"} self-start`}>
        <div className={`${large ? "w-20 h-20" : "w-16 h-16"} bg-linear-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
          <IconComponent className={`${large ? "w-10 h-10" : "w-8 h-8"} text-white`} />
        </div>
      </motion.div>
      <div className="relative flex-1 flex flex-col">
        <h3 className={`${large ? "text-2xl mb-6" : "text-xl mb-4"} font-bold text-white group-hover:text-blue-400 transition-colors`}>
          {title}
        </h3>
        <p className={`text-slate-400 leading-relaxed ${large ? "text-lg" : ""} flex-1`}>{description}</p>
      </div>
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r ${gradient} rounded-full`}
      />
    </div>
  </motion.div>
);

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = t.services.list.map((item, i) => ({
    ...item,
    icon: serviceIcons[i],
    gradient: serviceGradients[i],
  }));

  const steps = t.services.steps.map((item, i) => ({
    ...item,
    icon: stepIcons[i],
    color: stepColors[i],
    step: stepNumbers[i],
  }));

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-950" id="services">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-5" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-5" />
        <div className="absolute inset-0 bg-mesh opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {t.services.heading} <span className="text-blue-400">{t.services.headingAccent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            {t.services.subtitle}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* Desktop */}
          <div className="hidden lg:block">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
                {services.slice(0, 2).map((s, i) => (
                  <ServiceCard key={i} {...s} index={i} large />
                ))}
              </div>
              <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.slice(2, 5).map((s, i) => (
                  <ServiceCard key={i + 2} {...s} index={i + 2} />
                ))}
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="lg:hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
              {services.map((s, i) => (
                <ServiceCard key={i} {...s} index={i} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/40"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              {t.services.howTitle} <span className="text-blue-400">{t.services.howTitleAccent}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              {t.services.howSubtitle}
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLast = index === steps.length - 1;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start mb-12 last:mb-0"
                >
                  {!isLast && (
                    <div className="absolute left-8 top-20 w-0.5 h-24 bg-linear-to-b from-blue-500/50 to-transparent" />
                  )}
                  <div className="shrink-0 relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-16 h-16 bg-linear-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg relative z-10`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center z-20 border-2 border-slate-900 shadow-md">
                      <span className="text-xs font-bold text-white">{step.step}</span>
                    </div>
                  </div>
                  <div className="ml-8 flex-1">
                    <motion.div
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-slate-900/60 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                    >
                      <h3 className="text-2xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-lg">{step.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-400">{t.services.ctaText}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
