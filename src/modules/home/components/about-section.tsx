"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Server,
  ShieldAlert,
  Zap,
  Users,
  LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const challengeIcons: LucideIcon[] = [Server, ShieldAlert, Zap, Users];
const challengeColors = [
  "from-blue-500 to-cyan-500",
  "from-red-500 to-orange-500",
  "from-yellow-500 to-amber-500",
  "from-purple-500 to-violet-500",
];

const statGradients = [
  "from-blue-500 to-cyan-500",
  "from-violet-500 to-purple-500",
  "from-green-500 to-emerald-500",
  "from-orange-500 to-amber-500",
];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-slate-950" id="about">
      {/* ── ENTERPRISE CHALLENGES ── */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-5" />
          <div className="absolute inset-0 bg-mesh opacity-20" />
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
              {t.about.challengesHeading}{" "}
              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t.about.challengesAccent}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.about.challenges.map((item, i) => {
              const Icon = challengeIcons[i];
              const grad = challengeColors[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/60 transition-all duration-300"
                >
                  <div
                    className={`w-11 h-11 rounded-xl bg-linear-to-br ${grad} flex items-center justify-center shrink-0 shadow-lg`}
                  >
                    <Icon size={20} className="text-white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── WHO WE ARE ── */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              {t.about.whoHeading}
            </h2>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mb-14"
          >
            <div className="relative bg-linear-to-br from-blue-600/15 via-slate-800/50 to-cyan-600/10 border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center overflow-hidden">
              <div className="absolute -top-4 left-8 text-8xl text-blue-500/20 font-serif select-none leading-none">
                &ldquo;
              </div>
              <p className="relative text-xl md:text-2xl text-white font-semibold italic leading-relaxed max-w-3xl mx-auto">
                {t.about.whoQuote}
              </p>
            </div>
          </motion.div>

          {/* Pillars + Origin/Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Pillars */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                {t.about.whoIntro}
              </p>
              <div className="space-y-3">
                {t.about.pillars.map((pillar, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-slate-200 font-medium">{pillar}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Origin & Approach */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-black">01</span>
                  </div>
                  <h3 className="text-white font-bold">{t.about.originTitle}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t.about.originText}
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-500 to-purple-500 flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-black">02</span>
                  </div>
                  <h3 className="text-white font-bold">
                    {t.about.approachTitle}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t.about.approachText}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── TRUST STATS ── */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {t.about.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 text-center"
              >
                <div
                  className={`text-3xl md:text-4xl font-black bg-linear-to-r ${statGradients[i]} bg-clip-text text-transparent mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-white font-semibold text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-slate-500 text-xs leading-relaxed">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
