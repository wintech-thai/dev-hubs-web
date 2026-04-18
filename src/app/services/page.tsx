"use client";

import Navbar from "@/modules/home/components/nav-bar";
import Footer from "@/modules/home/components/footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion } from "framer-motion";
import {
  Server,
  Cpu,
  Network,
  Package,
  Layers,
  Code2,
  GitBranch,
  TrendingDown,
  Database,
  Building2,
} from "lucide-react";

const serviceIcons = [
  Server,
  Cpu,
  Network,
  Package,
  Layers,
  Code2,
  GitBranch,
  TrendingDown,
  Database,
  Building2,
];

const serviceGradients = [
  "from-blue-500 to-cyan-400",
  "from-cyan-500 to-teal-400",
  "from-indigo-500 to-blue-400",
  "from-violet-500 to-purple-400",
  "from-purple-500 to-fuchsia-400",
  "from-pink-500 to-rose-400",
  "from-orange-500 to-amber-400",
  "from-green-500 to-emerald-400",
  "from-yellow-500 to-orange-400",
  "from-teal-500 to-cyan-400",
];

const categoryColors: Record<string, string> = {
  "Edge Computing": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Infrastructure: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "On-Premise": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  Kubernetes: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Architecture: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Development: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  DevOps: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  FinOps: "bg-green-500/10 text-green-400 border-green-500/20",
  Data: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Hospitality: "bg-teal-500/10 text-teal-400 border-teal-500/20",
};

type ServiceItem = {
  category: string;
  title: string;
  description: string;
};

const ServiceCard = ({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) => {
  const Icon = serviceIcons[index];
  const gradient = serviceGradients[index];
  const categoryClass =
    categoryColors[service.category] ??
    "bg-blue-500/10 text-blue-400 border-blue-500/20";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-7 hover:border-slate-600/70 hover:bg-slate-800/60 hover:shadow-xl hover:shadow-slate-950/40 transition-all duration-400 flex flex-col gap-4"
    >
      {/* Number */}
      <span className="absolute top-5 right-6 text-5xl font-black text-slate-800/60 select-none group-hover:text-slate-700/60 transition-colors">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center shrink-0 shadow-lg`}
      >
        <Icon size={22} className="text-white" strokeWidth={1.8} />
      </div>

      {/* Category badge */}
      <span
        className={`self-start text-xs font-semibold border px-2.5 py-1 rounded-full ${categoryClass}`}
      >
        {service.category}
      </span>

      {/* Title */}
      <h3 className="text-lg font-bold text-white leading-snug">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1">
        {service.description}
      </p>
    </motion.div>
  );
};

const ServicesPage = () => {
  const { t } = useLanguage();
  const services = t.servicesPage.list;

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-slate-950">
      {/* Glow accents */}
      <div className="fixed top-20 right-10 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />

      <Navbar />

      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-36 pb-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Tag */}
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                10 Core Services
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-white mb-5 tracking-tight leading-tight">
                {t.servicesPage.heading}{" "}
                <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {t.servicesPage.headingAccent}
                </span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                {t.servicesPage.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services grid */}
        <section className="pb-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
