"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Shield,
  GitBranch,
  Database,
  Wrench,
  Cpu,
  Lock,
  Globe,
  Zap,
  LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const practiceIcons: LucideIcon[] = [Cloud, Shield, GitBranch, Database];
const practiceGradients = [
  "from-blue-500 to-cyan-500",
  "from-red-500 to-rose-500",
  "from-orange-500 to-amber-500",
  "from-violet-500 to-purple-500",
];

const whyIcons: LucideIcon[] = [Wrench, Cpu, Lock, Globe, Zap];
const whyGradients = [
  "from-blue-500 to-cyan-400",
  "from-cyan-500 to-teal-400",
  "from-violet-500 to-purple-400",
  "from-green-500 to-emerald-400",
  "from-orange-500 to-amber-400",
];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-slate-950" id="services">
      {/* ── PRACTICE AREAS ── */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-5" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-700 rounded-full blur-3xl opacity-5" />
          <div className="absolute inset-0 bg-mesh opacity-15" />
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              {t.services.practiceHeading}{" "}
              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t.services.practiceAccent}
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t.services.practiceSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.services.practices.map((item, i) => {
              const Icon = practiceIcons[i];
              const grad = practiceGradients[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-7 hover:border-slate-600/70 hover:shadow-xl hover:shadow-slate-950/50 transition-all duration-400"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-linear-to-br ${grad} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <Icon size={26} className="text-white" strokeWidth={1.7} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className={`mt-5 h-0.5 bg-linear-to-r ${grad} rounded-full`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── WHY DEV HUB ── */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              {t.services.whyHeading}{" "}
              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t.services.whyAccent}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.services.whyList.map((item, i) => {
              const Icon = whyIcons[i];
              const grad = whyGradients[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className={`relative bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/60 transition-all duration-300 ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-linear-to-br ${grad} flex items-center justify-center mb-4 shadow-md`}
                  >
                    <Icon size={18} className="text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── METHODOLOGY ── */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              {t.services.methodHeading}{" "}
              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t.services.methodAccent}
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-7 top-8 bottom-8 w-px bg-linear-to-b from-blue-500/40 via-blue-500/20 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {t.services.methodSteps.map((step, i) => {
                const isLast = i === t.services.methodSteps.length - 1;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="flex gap-5 items-start"
                  >
                    {/* Step number bubble */}
                    <div className="relative shrink-0 z-10">
                      <div className="w-14 h-14 bg-linear-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 border-2 border-blue-500/30">
                        <span className="text-white text-sm font-black">
                          {step.step}
                        </span>
                      </div>
                      {!isLast && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-14 w-px h-6 bg-blue-500/30 sm:hidden" />
                      )}
                    </div>

                    {/* Content */}
                    <motion.div
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex-1 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                    >
                      <h3 className="text-white font-bold text-lg mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
