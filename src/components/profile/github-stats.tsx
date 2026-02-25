"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitCommit, GitPullRequest, Database } from "lucide-react";

export const StatRow = ({ label, value, icon }: any) => (
  <div className="flex justify-between items-center text-slate-300">
    <span className="flex items-center gap-2 text-sm">
      {icon === "code" && <GitCommit size={14} className="text-blue-400" />}
      {icon === "git-pull-request" && <GitPullRequest size={14} className="text-purple-400" />}
      {icon === "repo" && <Database size={14} className="text-green-400" />}
      {icon === "⭐" && <span className="text-yellow-400 text-xs">⭐</span>}
      {label}
    </span>
    <span className="font-bold text-white">{value}</span>
  </div>
);

export const LangProgress = ({ lang, percent, color }: any) => (
  <div>
    <div className="flex justify-between text-xs mb-1">
      <span className="text-slate-300">{lang}</span>
      <span className="text-slate-500">{percent}%</span>
    </div>
    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full ${color}`}
      />
    </div>
  </div>
);