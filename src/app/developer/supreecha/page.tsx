"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { 
  Shield, 
  Code, 
  Database, 
  Terminal, 
  Cpu, 
  ExternalLink,
  Facebook,
  Instagram,
  MessageCircle,
  Github,
  GitCommit,
  GitPullRequest
} from "lucide-react";
import ParticlesHero from "@/modules/home/components/ParticleBackground"; 

// เปลี่ยน Username ตรงนี้
const GITHUB_USERNAME = "auttz";

const SupreechaPortfolioPage = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-blue-500 selection:text-white overflow-hidden font-sans">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <ParticlesHero />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 pt-10 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center"
        >
          {/* Profile Image with Neon Glow */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="mb-8 relative"
          >
            {/* Animated Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 rounded-full blur opacity-75 animate-pulse" />
            
            {/* Image Container */}
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-[4px] border-[#0f172a] bg-slate-800 overflow-hidden shadow-2xl z-10">
              <Image 
                src="/supreecha.png" 
                alt="Supreecha" 
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>
          </motion.div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 drop-shadow-lg">
            I'm <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Supreecha</span>
          </h1>

          {/* Typewriter */}
          <div className="text-2xl md:text-4xl font-light text-slate-400 mb-10 h-16 flex items-center justify-center">
            <span className="mr-3 text-blue-500">{">"}</span>
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Cyber Security Enthusiast",
                  "Full Stack Engineer",
                  "Tech Lover"
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                wrapperClassName: "text-slate-200 font-mono",
                cursorClassName: "text-blue-500"
              }}
            />
          </div>

          {/* Social Icons */}
          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <SocialButton icon={<Facebook size={20} />} href="https://facebook.com/yourname" label="Facebook" />
            <SocialButton icon={<LineIcon size={20} />} href="https://line.me/ti/p/~yourid" label="LINE" />
            <SocialButton icon={<TikTokIcon size={20} />} href="https://tiktok.com/@yourname" label="TikTok" />
            <SocialButton icon={<Instagram size={20} />} href="https://instagram.com/yourname" label="Instagram" />
          </motion.div>
        </motion.div>
      </section>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 space-y-32">
        
        {/* About Me */}
        <Section title="About Me" icon={<Terminal className="text-blue-500" />}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-blue-900/20 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code size={100} />
              </div>
              <p className="text-lg leading-relaxed text-slate-300 mb-4 relative z-10">
                ผมเป็นนักพัฒนาซอฟต์แวร์ที่มีความหลงใหลในโลกของ <span className="text-blue-400 font-semibold">Cyber Security</span> และ <span className="text-blue-400 font-semibold">Web Development</span> 
                ปัจจุบันมุ่งเน้นการสร้าง Web Application ที่ไม่เพียงแค่ใช้งานได้ดี แต่ต้องมีความปลอดภัยและ Scalable
              </p>
              <p className="text-lg leading-relaxed text-slate-300 relative z-10">
                สนุกกับการเรียนรู้เทคโนโลยีใหม่ๆ เช่น Machine Learning และการทำ Cyber Defensive Operations เพื่อนำมาประยุกต์ใช้กับงานจริง
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <SkillCard icon={<Code size={30} />} title="Frontend" desc="React, Next.js, Tailwind" delay={0.1} />
              <SkillCard icon={<Database size={30} />} title="Backend" desc="C#, .NET, PostgreSQL" delay={0.2} />
              <SkillCard icon={<Shield size={30} />} title="Security" desc="Cyber Defense, ML" delay={0.3} />
              <SkillCard icon={<Cpu size={30} />} title="DevOps" desc="Docker, CI/CD" delay={0.4} />
            </div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section title="Experience" icon={<Shield className="text-blue-500" />}>
          <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12 pl-8 md:pl-12 py-4">
            <ExperienceItem 
              title="Military Cyber Unit (Internship)"
              role="Cyber Security & Developer Intern"
              period="4 Months"
              description="ฝึกงานที่หน่วยไซเบอร์ทหาร กองบัญชาการกองทัพไทย (RTARF HQ)"
              tags={["Cyber Security", "Web Dev", "Machine Learning"]}
            >
              <ul className="list-disc list-inside text-slate-400 space-y-1 mt-2">
                <li>พัฒนา <strong>RTARF-Analytic-Web</strong> ระบบวิเคราะห์ภัยคุกคาม</li>
                <li>วิจัยและพัฒนา <strong>XGBoost Model</strong> สำหรับ Cyber Defensive Operation</li>
                <li>จัดทำรายงานและนำเสนอความคืบหน้าต่อผู้บังคับบัญชา</li>
              </ul>
            </ExperienceItem>
          </div>
        </Section>

        {/* NEW: GitHub Stats Section (MANUAL FIXED) */}
        <Section title="GitHub Contributions" icon={<Github className="text-blue-500" />}>
          <div className="flex flex-col gap-6">
             {/* Custom Stats Grid */}
             <div className="grid md:grid-cols-2 gap-6">
                
                {/* 1. General Stats Card (Manual Input) */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-500/30 transition-all shadow-lg"
                >
                   <h3 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                     <Github size={18} /> Supreecha's Stats
                   </h3>
                   <div className="space-y-3">
                      <StatRow label="Total Stars" value="128" icon="⭐" />
                      <StatRow label="Total Commits" value="2,450" icon="code" />
                      <StatRow label="Total PRs" value="45" icon="git-pull-request" />
                      <StatRow label="Contributed to" value="8" icon="repo" />
                   </div>
                </motion.div>

                {/* 2. Top Languages Card (Manual Input) */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-500/30 transition-all shadow-lg"
                >
                   <h3 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                     <Code size={18} /> Most Used Languages
                   </h3>
                   <div className="space-y-3 mt-2">
                      <LangProgress lang="TypeScript" percent={60} color="bg-blue-500" />
                      <LangProgress lang="Python" percent={25} color="bg-yellow-500" />
                      <LangProgress lang="C#" percent={15} color="bg-green-500" />
                   </div>
                </motion.div>
             </div>

             <div className="flex justify-center mt-4">
                <a 
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                >
                  <Github size={20} />
                  Visit My GitHub
                </a>
             </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section title="Featured Projects" icon={<Code className="text-blue-500" />}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="RTARF Analytic Web"
              desc="Web Application สำหรับวิเคราะห์ข้อมูลภัยคุกคามทางไซเบอร์ แสดงผลผ่าน Dashboard"
              tags={["Next.js", "TypeScript", "Recharts"]}
            />
            <ProjectCard 
              title="Cyber Defense ML"
              desc="โมเดล Machine Learning (XGBoost) เพื่อตรวจจับและป้องกันการโจมตีทางไซเบอร์"
              tags={["Python", "XGBoost", "Security"]}
            />
             <ProjectCard 
              title="Dev Hub Web"
              desc="เว็บไซต์บริษัท Dev Hub พัฒนาด้วย Next.js และ Tailwind CSS ที่ทันสมัย"
              tags={["React", "Framer Motion", "Tailwind"]}
            />
          </div>
        </Section>

      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-slate-600 border-t border-slate-900 bg-[#0f172a]">
        <p>© 2026 Supreecha. All Rights Reserved.</p>
        <p className="text-xs mt-2">Built with Next.js, Tailwind & Framer Motion</p>
      </footer>
    </div>
  );
};

// --- Sub Components ---

const TikTokIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
     <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);
const LineIcon = MessageCircle;

const Section = ({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) => (
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
      <h2 className="text-3xl font-bold text-white tracking-wide">{title}</h2>
    </div>
    {children}
  </motion.section>
);

const SocialButton = ({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, backgroundColor: "rgba(59, 130, 246, 0.2)", scale: 1.1 }}
    className="p-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-lg"
    title={label}
  >
    {icon}
  </motion.a>
);

const SkillCard = ({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)" }}
    className="bg-slate-800/40 p-5 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all group cursor-default"
  >
    <div className="mb-3 text-slate-400 group-hover:text-blue-400 transition-colors duration-300">{icon}</div>
    <h3 className="font-bold text-white mb-1 group-hover:text-blue-200">{title}</h3>
    <p className="text-xs text-slate-500 group-hover:text-slate-400">{desc}</p>
  </motion.div>
);

const ExperienceItem = ({ title, role, period, description, children, tags }: any) => (
  <div className="relative group">
    <div className="absolute -left-[41px] md:-left-[59px] top-0 w-5 h-5 rounded-full bg-slate-900 border-4 border-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)] group-hover:scale-125 group-hover:bg-blue-600 group-hover:border-white transition-all duration-300" />
    
    <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/30 hover:bg-slate-900/60 transition-all duration-300 shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
        <div>
           <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
           <p className="text-blue-400 font-medium">{role}</p>
        </div>
        <span className="text-sm font-mono text-slate-500 bg-slate-950 px-3 py-1 rounded-full border border-slate-800 self-start md:self-auto group-hover:border-blue-500/30 transition-colors">
          {period}
        </span>
      </div>
      <p className="text-slate-300 mb-4 font-light">{description}</p>
      <div className="mb-4">
          {children}
      </div>
      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800/50">
        {tags.map((tag: string, i: number) => (
          <span key={i} className="text-xs font-medium px-2.5 py-1 rounded bg-blue-950/50 text-blue-300 border border-blue-900/30 hover:bg-blue-900/50 transition-colors cursor-default">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectCard = ({ title, desc, tags }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col h-full"
  >
    <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center group-hover:from-blue-950/50 group-hover:to-slate-900 transition-all duration-500 relative overflow-hidden">
       <Code className="text-slate-600 group-hover:text-blue-500 transition-colors w-16 h-16 transform group-hover:scale-110 duration-500" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm mb-4 flex-grow font-light">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag: string, i: number) => (
           <span key={i} className="text-xs text-slate-500 bg-slate-950 border border-slate-800 px-2 py-1 rounded group-hover:border-blue-900/30 group-hover:text-slate-400 transition-all">#{tag}</span>
        ))}
      </div>
      <a href="#" className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 gap-1 group-hover:gap-2 transition-all mt-auto font-medium">
        View Project <ExternalLink size={14} />
      </a>
    </div>
  </motion.div>
);

// --- Helpers for Manual Stats ---
const StatRow = ({ label, value, icon }: any) => (
  <div className="flex justify-between items-center text-slate-300">
    <span className="flex items-center gap-2 text-sm">
       {icon === 'code' && <GitCommit size={14} className="text-blue-400" />}
       {icon === 'git-pull-request' && <GitPullRequest size={14} className="text-purple-400" />}
       {icon === 'repo' && <Database size={14} className="text-green-400" />}
       {icon === '⭐' && <span className="text-yellow-400 text-xs">⭐</span>}
       {label}
    </span>
    <span className="font-bold text-white">{value}</span>
  </div>
);

const LangProgress = ({ lang, percent, color }: any) => (
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

export default SupreechaPortfolioPage;