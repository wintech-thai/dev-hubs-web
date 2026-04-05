"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const ExperienceItem = ({
  title,
  role,
  period,
  description,
  children,
  tags,
}: any) => (
  <div className="relative group">
    <div className="absolute -left-[41px] md:-left-[59px] top-0 w-5 h-5 rounded-full bg-slate-900 border-4 border-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)] group-hover:scale-125 group-hover:bg-blue-600 group-hover:border-white transition-all duration-300" />

    <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/30 hover:bg-slate-900/60 transition-all duration-300 shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
        <div>
          <h3
            className={`text-xl font-bold text-white group-hover:text-blue-400 transition-colors ${spaceGrotesk.className}`}
          >
            {title}
          </h3>
          <p className="text-blue-400 font-medium">{role}</p>
        </div>
        <span
          className={`text-sm text-slate-500 bg-slate-950 px-3 py-1 rounded-full border border-slate-800 self-start md:self-auto group-hover:border-blue-500/30 transition-colors ${jetbrainsMono.className}`}
        >
          {period}
        </span>
      </div>
      <p className="text-slate-300 mb-4 font-light">{description}</p>
      <div className="mb-4">{children}</div>
      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800/50">
        {tags.map((tag: string, i: number) => (
          <span
            key={i}
            className={`text-xs font-medium px-2.5 py-1 rounded bg-blue-950/50 text-blue-300 border border-blue-900/30 hover:bg-blue-900/50 transition-colors cursor-default ${jetbrainsMono.className}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export const ProjectCard = ({
  title,
  desc,
  tags,
  image,
  link,
}: {
  title: string;
  desc: string;
  tags: string[];
  image?: string;
  link?: string;
}) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col h-full"
  >
    <div className="h-48 relative bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center overflow-hidden">
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        />
      ) : (
        <Code className="text-slate-600 group-hover:text-blue-500 transition-colors w-16 h-16 transform group-hover:scale-110 duration-500" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3
        className={`text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors ${spaceGrotesk.className}`}
      >
        {title}
      </h3>
      <p className="text-slate-400 text-sm mb-4 flex-grow font-light">
        {desc}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span
            key={i}
            className={`text-xs text-slate-500 bg-slate-950 border border-slate-800 px-2 py-1 rounded group-hover:border-blue-900/30 group-hover:text-slate-400 transition-all ${jetbrainsMono.className}`}
          >
            #{tag}
          </span>
        ))}
      </div>
      <a
        href={link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 gap-1 group-hover:gap-2 transition-all mt-auto font-medium"
      >
        View Project <ExternalLink size={14} />
      </a>
    </div>
  </motion.div>
);

export const EducationItem = ({ degree, school, period, description }: any) => (
  <div className="relative group">
    <div className="absolute -left-[41px] md:-left-[59px] top-0 w-5 h-5 rounded-full bg-slate-900 border-4 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] group-hover:scale-125 group-hover:bg-cyan-500 group-hover:border-white transition-all duration-300" />

    <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all duration-300 shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
        <div>
          <h3
            className={`text-xl font-bold text-white group-hover:text-cyan-400 transition-colors ${spaceGrotesk.className}`}
          >
            {degree}
          </h3>
          <p className="text-cyan-400 font-medium">{school}</p>
        </div>
        <span
          className={`text-sm text-slate-500 bg-slate-950 px-3 py-1 rounded-full border border-slate-800 self-start md:self-auto group-hover:border-cyan-500/30 transition-colors ${jetbrainsMono.className}`}
        >
          {period}
        </span>
      </div>
      <p className="text-slate-300 mb-4 font-light">{description}</p>
    </div>
  </div>
);