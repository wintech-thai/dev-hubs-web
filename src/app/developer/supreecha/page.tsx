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
  Facebook,
  Instagram,
  MessageCircle,
  Github,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  GraduationCap
} from "lucide-react";

import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

import ParticlesHero from "@/modules/home/components/ParticleBackground";
import { TikTokIcon, LineIcon } from "@/components/profile/custom-icons";
import {
  Section,
  SocialButton,
  SkillCard,
  TechArsenal,
  
} from "@/components/profile/ui-components";
import { ExperienceItem, ProjectCard, EducationItem } from "@/components/profile/cards";
import { StatRow, LangProgress } from "@/components/profile/github-stats";


const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

const GITHUB_USERNAME = "auttz";

const SupreechaPortfolioPage = () => {
  return (
    <div
      className={`min-h-screen bg-[#0f172a] text-slate-200 selection:bg-blue-500 selection:text-white overflow-hidden ${inter.className}`}
    >
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
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 rounded-full blur opacity-75 animate-pulse" />
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
          <h1
            className={`text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 drop-shadow-lg ${spaceGrotesk.className}`}
          >
            I'm{" "}
            <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              Supreecha
            </span>
          </h1>

          {/* Typewriter */}
          <div
            className={`text-2xl md:text-4xl font-light text-slate-400 mb-10 h-16 flex items-center justify-center ${jetbrainsMono.className}`}
          >
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
                wrapperClassName: "text-slate-200",
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
              className={`group relative inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-blue-500 rounded-full text-blue-400 font-bold tracking-wide hover:bg-blue-500/10 transition-all overflow-hidden ${spaceGrotesk.className}`}
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
                </span>{" "}
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

          <div className="mt-16 pt-10 border-t border-slate-800/50">
            <h3
              className={`text-xl font-bold text-slate-300 mb-6 text-center ${spaceGrotesk.className}`}
            >
              <span className="text-blue-500">{"// "}</span>Tech Stack Arsenal
            </h3>
            <TechArsenal />
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

        {/* Education Section */}
        <Section title="Education" icon={<GraduationCap className="text-blue-500" />}>
          <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-8 pl-8 md:pl-12 py-4">
            
            <EducationItem
              degree="คณะวิศวกรรมศาสตร์สาขาคอมพิวเตอร์และปัญญาประดิษฐ์" 
              school="มหาวิทยาลัยหอการค้าไทย" 
              period="2022 - 2026"
              description="มุ่งเน้นการศึกษาด้านการพัฒนาซอฟต์แวร์ โครงสร้างข้อมูล และความมั่นคงปลอดภัยทางไซเบอร์"
            />
            
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
                <h3
                  className={`text-blue-400 font-bold mb-2 flex items-center gap-2 ${spaceGrotesk.className}`}
                >
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
                <h3
                  className={`text-blue-400 font-bold mb-2 flex items-center gap-2 ${spaceGrotesk.className}`}
                >
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
                className={`flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] ${spaceGrotesk.className}`}
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
              <h3
                className={`text-xl font-bold text-white mb-4 flex items-center gap-2 ${spaceGrotesk.className}`}
              >
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
              <h3
                className={`text-2xl font-bold text-white mb-2 relative z-10 ${spaceGrotesk.className}`}
              >
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

export default SupreechaPortfolioPage;
