"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Target, CheckCircle, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const statIcons = [Clock, Users, Award, TrendingUp];
const statNumbers = ["10+", "100+", "50+", "99%"];

const AboutSection = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-950" id="about">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
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
            {t.about.heading} <span className="text-blue-400">{t.about.headingAccent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            {t.about.intro}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                {t.about.leftHeading} <br />
                <span className="text-blue-400">{t.about.leftHeadingAccent}</span>
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">{t.about.p1}</p>
              <p className="text-slate-300 text-lg leading-relaxed">{t.about.p2}</p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {t.about.features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-200 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {t.about.stats.map((stat, index) => {
              const IconComponent = statIcons[index];
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{statNumbers[index]}</div>
                  <div className="text-blue-400 font-semibold mb-1">{stat.label}</div>
                  <div className="text-slate-400 text-sm">{stat.description}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50"
        >
          <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{t.about.missionTitle}</h3>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">{t.about.mission}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
