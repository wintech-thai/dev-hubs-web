"use client";

import React from "react";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const Section = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7 }}
  >
    <div className="flex items-center gap-3 mb-8">
      <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
        {icon}
      </div>
      <h2
        className={`text-3xl font-bold text-white tracking-wide ${spaceGrotesk.className}`}
      >
        {title}
      </h2>
    </div>
    {children}
  </motion.section>
);

export const SocialButton = ({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{
      y: -5,
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      scale: 1.1,
    }}
    className="p-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-lg"
    title={label}
  >
    {icon}
  </motion.a>
);

export const SkillCard = ({
  icon,
  title,
  desc,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{
      y: -5,
      boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
    }}
    className="bg-slate-800/40 p-5 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all group cursor-default"
  >
    <div className="mb-3 text-slate-400 group-hover:text-blue-400 transition-colors duration-300">
      {icon}
    </div>
    <h3
      className={`font-bold text-white mb-1 group-hover:text-blue-200 ${spaceGrotesk.className}`}
    >
      {title}
    </h3>
    <p className="text-xs text-slate-500 group-hover:text-slate-400">{desc}</p>
  </motion.div>
);
import { JetBrains_Mono } from "next/font/google";
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

const techRow1 = [
  "React", "Next.js", "TypeScript", "C#", "ASP.NET Core", "Tailwind CSS", "Python", "PostgreSQL"
];
const techRow2 = [
  "Suricata", "Zeek", "Arkime", "XGBoost", "Machine Learning", "Docker", "CI/CD", "Git"
];

const MarqueeRow = ({ items, direction = "left" }: { items: string[], direction?: "left" | "right" }) => {
  return (
    <div className="flex w-full overflow-hidden relative py-2">
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-4 min-w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
      >
        {[...items, ...items].map((tech, idx) => (
          <div
            key={idx}
            className={`px-6 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-300 font-medium tracking-wide flex items-center justify-center hover:border-blue-500/50 hover:text-blue-400 hover:bg-slate-800 transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] ${jetbrainsMono.className}`}
          >
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const TechArsenal = () => {
  return (
    <div className="w-full flex flex-col gap-4 mt-8">
      <MarqueeRow items={techRow1} direction="left" />
      <MarqueeRow items={techRow2} direction="right" />
    </div>
  );
};

