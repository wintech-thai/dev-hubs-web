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
  GitPullRequest,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import ParticlesHero from "@/modules/home/components/ParticleBackground";

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
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1,
            }}
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
            I'm{" "}
            <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              Supreecha
            </span>
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
                  "Tech Lover",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                wrapperClassName: "text-slate-200 font-mono",
                cursorClassName: "text-blue-500",
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
            <SocialButton
              icon={<Facebook size={20} />}
              href="https://www.facebook.com/supreecha.monsa.2024?locale=th_TH"
              label="Facebook"
            />
            <SocialButton
              icon={<LineIcon size={20} />}
              href="https://line.me/ti/p/fAQv7L1FUu?fbclid=IwY2xjawP6UE1leHRuA2FlbQIxMABicmlkETEzZnNmRHpMS1dUbGRSa1lPc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHia7M-ZO3oMo_vAuPDjc6Jt7PafkgGSo0hJPZmg6KJGxSMUl0LCE1NOItxOQ_aem_WgA7SUeKhJIQbH7hONBFmw"
              label="LINE"
            />
            <SocialButton
              icon={<TikTokIcon size={20} />}
              href="https://www.tiktok.com/@2foxy03"
              label="TikTok"
            />
            <SocialButton
              icon={<Instagram size={20} />}
              href="https://instagram.com/yourname"
              label="Instagram"
            />
          </motion.div>

          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              className="group relative inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-blue-500 rounded-full text-blue-400 font-bold tracking-wide hover:bg-blue-500/10 transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download Resume <ExternalLink size={18} />
              </span>
              <div className="absolute inset-0 bg-blue-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
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
                ผมเป็นนักพัฒนาซอฟต์แวร์ที่มีความหลงใหลในโลกของ{" "}
                <span className="text-blue-400 font-semibold">
                  Cyber Security
                </span>{" "}
                และ{" "}
                <span className="text-blue-400 font-semibold">
                  Web Development
                </span>
                ปัจจุบันมุ่งเน้นการสร้าง Web Application
                ที่ไม่เพียงแค่ใช้งานได้ดี แต่ต้องมีความปลอดภัยและ Scalable
              </p>
              <p className="text-lg leading-relaxed text-slate-300 relative z-10">
                สนุกกับการเรียนรู้เทคโนโลยีใหม่ๆ เช่น Machine Learning และการทำ
                Cyber Defensive Operations เพื่อนำมาประยุกต์ใช้กับงานจริง
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <SkillCard
                icon={<Code size={30} />}
                title="Frontend"
                desc="React, Next.js, Tailwind"
                delay={0.1}
              />
              <SkillCard
                icon={<Database size={30} />}
                title="Backend"
                desc="C#, .NET, PostgreSQL"
                delay={0.2}
              />
              <SkillCard
                icon={<Shield size={30} />}
                title="Security"
                desc="Cyber Defense, ML"
                delay={0.3}
              />
              <SkillCard
                icon={<Cpu size={30} />}
                title="DevOps"
                desc="Docker, CI/CD"
                delay={0.4}
              />
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
                <li>
                  พัฒนา <strong>RTARF-Analytic-Web</strong>{" "}
                  ระบบวิเคราะห์ภัยคุกคาม
                </li>
                <li>
                  วิจัยและพัฒนา <strong>XGBoost Model</strong> สำหรับ Cyber
                  Defensive Operation
                </li>
                <li>จัดทำรายงานและนำเสนอความคืบหน้าต่อผู้บังคับบัญชา</li>
              </ul>
            </ExperienceItem>
          </div>
        </Section>

        {/* GitHub Stats Section */}
        <Section
          title="GitHub Contributions"
          icon={<Github className="text-blue-500" />}
        >
          <div className="flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6">
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
                  <StatRow
                    label="Total PRs"
                    value="45"
                    icon="git-pull-request"
                  />
                  <StatRow label="Contributed to" value="8" icon="repo" />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-500/30 transition-all shadow-lg"
              >
                <h3 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                  <Code size={18} /> Most Used Languages
                </h3>
                <div className="space-y-3 mt-2">
                  <LangProgress
                    lang="TypeScript"
                    percent={60}
                    color="bg-blue-500"
                  />
                  <LangProgress
                    lang="Python"
                    percent={25}
                    color="bg-yellow-500"
                  />
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
        <Section
          title="Featured Projects"
          icon={<Code className="text-blue-500" />}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="RTARF Analytic Web"
              desc="Web Application สำหรับวิเคราะห์ข้อมูลภัยคุกคามทางไซเบอร์ แสดงผลผ่าน Dashboard"
              tags={["Next.js", "TypeScript", "Recharts"]}
              image="/Rtarf-Web.png"
              link="https://defnex-analytic.please-scan.com/"
            />
            <ProjectCard
              title="RTARF SENSOR"
              desc="คือระบบ Web Interface สำหรับตรวจสอบและเฝ้าระวังภัยคุกคามทางไซเบอร์ (Cyber Threat Monitoring Dashboard) ที่ออกแบบมาเพื่อทำงานร่วมกับข้อมูลจาก Suricata Zeek และ Arkime โดยเน้นการแสดงผลข้อมูล Traffic ในระดับ Layer 3 และ Layer 7"
              tags={["Software", "Network Security", "Monitoring"]}
              image="/Rtarf-Sensor.png"
              link="https://web-dev.rtarf-censor.dev-hubs.com/"
            />
            <ProjectCard
              title="Dev Hub Web"
              desc="เว็บไซต์บริษัท Dev Hub พัฒนาด้วย Next.js และ Tailwind CSS ที่ทันสมัย"
              tags={["React", "Framer Motion", "Tailwind"]}
              image="/DevHub-Web.png"
              link="https://dev-hub.com"
            />
          </div>
        </Section>

        {/* Contact Section */}
        <Section title="Contact Me" icon={<Mail className="text-blue-500" />}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Info Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl relative overflow-hidden"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <MessageCircle className="text-blue-500" /> Let's Chat
              </h3>
              <p className="text-slate-400 mb-6 font-light">
                หากมีข้อสงสัย หรือสนใจร่วมงานกัน
                สามารถติดต่อผมได้ผ่านช่องทางต่างๆ ด้านล่างนี้ครับ
              </p>
              <div className="flex flex-col gap-4">
                {/* Email */}
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Mail size={18} />
                  </div>
                  supreechamonsar363@gmail.com
                </div>
                {/* Phone */}
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Phone size={18} />
                  </div>
                  097-003-6067
                </div>
                {/* Location */}
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <MapPin size={18} />
                  </div>
                  Bangkok, Thailand
                </div>
              </div>
            </motion.div>

            {/* Action Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/30 p-6 rounded-2xl flex flex-col justify-center items-center text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-500/5 blur-xl" />
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] relative z-10">
                <Mail size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                Email Me
              </h3>
              <p className="text-slate-400 text-sm mb-6 relative z-10">
                supreechamonsar363@gmail.com
              </p>
            </motion.div>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-slate-600 border-t border-slate-900 bg-[#0f172a]">
        <p>© 2026 Supreecha. All Rights Reserved.</p>
        <p className="text-xs mt-2">
          Built with Next.js, Tailwind & Framer Motion
        </p>
      </footer>
    </div>
  );
};

// --- Sub Components ---

const TikTokIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const LineIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21 10.5C21 6.36 17.14 3 12.5 3C7.86 3 4 6.36 4 10.5C4 14.14 6.94 17.23 10.81 18.03C11.04 18.08 11.35 18.18 11.43 18.36C11.5 18.52 11.48 18.77 11.45 18.93L11.31 19.71C11.28 19.88 11.17 20.38 11.78 20.1C12.39 19.82 15.42 17.97 16.96 16.46C19.14 14.55 21 12.68 21 10.5Z" />
    <path
      d="M9.5 11.5H9C8.72 11.5 8.5 11.72 8.5 12V14.5C8.5 14.78 8.72 15 9 15H9.5C9.78 15 10 14.78 10 14.5V12C10 11.72 9.78 11.5 9.5 11.5Z"
      fill="currentColor"
      stroke="none"
    />
    <path
      d="M12.5 11.5H12C11.72 11.5 11.5 11.72 11.5 12V13.75H10.5C10.22 13.75 10 13.97 10 14.25V14.5C10 14.78 10.22 15 10.5 15H12.5C12.78 15 13 14.78 13 14.5V12C13 11.72 12.78 11.5 12.5 11.5Z"
      fill="currentColor"
      stroke="none"
    />
    <path
      d="M16 11.5H15.5C15.39 11.5 15.3 11.56 15.25 11.65L13.75 14V12C13.75 11.72 13.53 11.5 13.25 11.5H12.75C12.47 11.5 12.25 11.72 12.25 12V14.5C12.25 14.78 12.47 15 12.75 15H13.25C13.36 15 13.45 14.94 13.5 14.85L15 12.5V14.5C15 14.78 15.22 15 15.5 15H16C16.28 15 16.5 14.78 16.5 14.5V12C16.5 11.72 16.28 11.5 16 11.5Z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const Section = ({
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
      <h2 className="text-3xl font-bold text-white tracking-wide">{title}</h2>
    </div>
    {children}
  </motion.section>
);

const SocialButton = ({
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

const SkillCard = ({
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
    <h3 className="font-bold text-white mb-1 group-hover:text-blue-200">
      {title}
    </h3>
    <p className="text-xs text-slate-500 group-hover:text-slate-400">{desc}</p>
  </motion.div>
);

const ExperienceItem = ({
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
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-blue-400 font-medium">{role}</p>
        </div>
        <span className="text-sm font-mono text-slate-500 bg-slate-950 px-3 py-1 rounded-full border border-slate-800 self-start md:self-auto group-hover:border-blue-500/30 transition-colors">
          {period}
        </span>
      </div>
      <p className="text-slate-300 mb-4 font-light">{description}</p>
      <div className="mb-4">{children}</div>
      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800/50">
        {tags.map((tag: string, i: number) => (
          <span
            key={i}
            className="text-xs font-medium px-2.5 py-1 rounded bg-blue-950/50 text-blue-300 border border-blue-900/30 hover:bg-blue-900/50 transition-colors cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Updated ProjectCard 
const ProjectCard = ({
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
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm mb-4 flex-grow font-light">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs text-slate-500 bg-slate-950 border border-slate-800 px-2 py-1 rounded group-hover:border-blue-900/30 group-hover:text-slate-400 transition-all"
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

// --- Helpers for Manual Stats ---
const StatRow = ({ label, value, icon }: any) => (
  <div className="flex justify-between items-center text-slate-300">
    <span className="flex items-center gap-2 text-sm">
      {icon === "code" && <GitCommit size={14} className="text-blue-400" />}
      {icon === "git-pull-request" && (
        <GitPullRequest size={14} className="text-purple-400" />
      )}
      {icon === "repo" && <Database size={14} className="text-green-400" />}
      {icon === "⭐" && <span className="text-yellow-400 text-xs">⭐</span>}
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
