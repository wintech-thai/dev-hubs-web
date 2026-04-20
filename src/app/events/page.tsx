"use client";

import Navbar from "@/modules/home/components/nav-bar";
import Footer from "@/modules/home/components/footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ImageOff, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Event = {
  id: string;
  name: string;
  nameTh: string;
  location: string;
  country: string;
  flag: string;
  date: string;
  descriptionEn: string;
  descriptionTh: string;
  tags: string[];
  images: string[];
};

// Newest first
const events: Event[] = [
  {
    id: "gitext-morocco-2025",
    name: "GITEX Africa — Global AI & Cloud Summit",
    nameTh: "GITEX Africa — สุดยอดงาน AI & Cloud ระดับโลก",
    location: "Marrakech, Morocco",
    country: "Morocco",
    flag: "🇲🇦",
    date: "April 2026",
    descriptionEn:
      "DevHubs represented Thailand's cloud-native ecosystem at GITEX Africa, one of Africa's largest technology exhibitions. We showcased our Kubernetes consulting services and on-premise cloud solutions to enterprise clients across Africa and the Middle East.",
    descriptionTh:
      "DevHubs เป็นตัวแทน ecosystem Cloud Native ของไทยในงาน GITEX Africa หนึ่งในงานเทคโนโลยีที่ใหญ่ที่สุดของแอฟริกา เราได้นำเสนอบริการ Kubernetes Consulting และโซลูชันคลาวด์ On-premise ให้แก่ลูกค้าองค์กรทั่วแอฟริกาและตะวันออกกลาง",
    tags: ["Kubernetes", "Cloud Native", "AI", "Enterprise"],
    images: [
      "https://storage.googleapis.com/public-software-download/dev-hubs/gitex-africa-1.jpg",
      "https://storage.googleapis.com/public-software-download/dev-hubs/gitex-africa-2.jpg",
    ],
  },
  {
    id: "kenya-2026",
    name: "Thailand – Kenya Business Matching and Digital Partnership 2026",
    nameTh: "Thailand – Kenya Business Matching and Digital Partnership 2026",
    location: "Nairobi, Kenya",
    country: "Kenya",
    flag: "🇰🇪",
    date: "2026",
    descriptionEn:
      "DevHubs represented Thailand's tech sector at the Thailand – Kenya Business Matching and Digital Partnership 2026, organized by DITP in Nairobi. The event united Thai technology companies with Kenyan enterprises and government agencies, forging new partnerships in cloud-native solutions and digital transformation across East Africa.",
    descriptionTh:
      "DevHubs เข้าร่วมเป็นตัวแทนภาคเทคโนโลยีของไทยในงาน Thailand – Kenya Business Matching and Digital Partnership 2026 จัดโดยกรมส่งเสริมการค้าระหว่างประเทศ (DITP) ณ กรุงไนโรบี งานนี้เปิดโอกาสให้บริษัทเทคโนโลยีไทยได้พบปะกับองค์กรธุรกิจและหน่วยงานภาครัฐของเคนยา สร้างความร่วมมือด้าน Cloud Native และการเปลี่ยนผ่านดิจิทัลในแอฟริกาตะวันออก",
    tags: ["Cloud Infrastructure", "East Africa", "DevOps"],
    images: [
      "https://storage.googleapis.com/public-software-download/dev-hubs/kenya-business-match-1.jpg",
      "https://storage.googleapis.com/public-software-download/dev-hubs/kenya-business-match-2.jpg",
    ],
  },
  {
    id: "docker-ai-bangkok-2025",
    name: "AI & Docker in Real-World Use Cases",
    nameTh: "AI & Docker in Real-World Use Cases",
    location: "Bangkok, Thailand",
    country: "Thailand",
    flag: "🇹🇭",
    date: "April 2025",
    descriptionEn:
      "DevHubs took the stage as a featured speaker at the AI & Docker in Real-World Use Cases event, held at Siam Kempinski Hotel Bangkok. We shared hands-on expertise in containerization, AI workload orchestration, and deploying production-grade Docker environments — bridging the gap between cutting-edge AI and real-world engineering.",
    descriptionTh:
      "DevHubs ได้รับเกียรติเป็นวิทยากรในงาน AI & Docker in Real-World Use Cases ณ โรงแรม Siam Kempinski กรุงเทพฯ เราแบ่งปันประสบการณ์จริงด้านการใช้ Containerization, การจัดการ AI Workload และการ Deploy Docker ในระดับ Production — เชื่อมโยงเทคโนโลยี AI สมัยใหม่สู่การใช้งานจริงในองค์กร",
    tags: ["AI", "Docker", "Speaker", "Containerization"],
    images: [
      "https://storage.googleapis.com/public-software-download/dev-hubs/docker-ai1.jpg",
      "https://storage.googleapis.com/public-software-download/dev-hubs/docker-ai2.jpg",
    ],
  },
];

const EventCard = ({ event, index }: { event: Event; index: number }) => {
  const { lang, t } = useLanguage();
  const hasImages = event.images.length > 0;
  const [current, setCurrent] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + event.images.length) % event.images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % event.images.length);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="bg-slate-800/40 backdrop-blur-sm rounded-3xl border border-slate-700/50 overflow-hidden hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500"
    >
      {/* Image area */}
      <div className="relative h-64 md:h-72 bg-slate-900/60 overflow-hidden">
        {hasImages ? (
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={event.images[current]}
                  alt={`${event.name} photo ${current + 1}`}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next buttons */}
            {event.images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-slate-900/60 hover:bg-slate-900/90 text-white rounded-full p-1.5 backdrop-blur-sm transition-all duration-200"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-slate-900/60 hover:bg-slate-900/90 text-white rounded-full p-1.5 backdrop-blur-sm transition-all duration-200"
                >
                  <ChevronRight size={18} />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                  {event.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === current ? "bg-white w-4" : "bg-white/40"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 via-slate-900/60 to-cyan-900/30" />
            <div className="absolute inset-0 bg-mesh opacity-20" />
            <div className="relative z-10 flex flex-col items-center gap-3">
              <span className="text-7xl">{event.flag}</span>
              <div className="flex items-center gap-2 text-slate-400">
                <ImageOff size={16} />
                <span className="text-sm font-medium">{t.events.photosComingSoon}</span>
              </div>
            </div>
          </div>
        )}

        {/* Latest badge */}
        {index === 0 && (
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-blue-500/30">
              Latest
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
          {lang === "th" ? event.nameTh : event.name}
        </h2>

        <div className="flex flex-wrap items-center gap-4 mb-4 text-slate-400 text-sm">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-blue-400 shrink-0" />
            {event.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-blue-400 shrink-0" />
            {event.date}
          </span>
        </div>

        <p className="text-slate-400 leading-relaxed">
          {lang === "th" ? event.descriptionTh : event.descriptionEn}
        </p>
      </div>
    </motion.article>
  );
};

const EventsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-slate-950">
      {/* Glow accents */}
      <div className="fixed top-20 right-10 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />

      <Navbar />

      <main className="container mx-auto px-4 py-24 mt-8 relative z-10 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.events.heading}{" "}
            <span className="text-blue-400">{t.events.headingAccent}</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.events.subtitle}</p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{events.length}</div>
              <div className="text-slate-400 text-sm mt-1">Events</div>
            </div>
            <div className="w-px h-10 bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {[...new Set(events.map((e) => e.country))].length}
              </div>
              <div className="text-slate-400 text-sm mt-1">Countries</div>
            </div>
            <div className="w-px h-10 bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {[...new Set(events.flatMap((e) => e.tags))].length}+
              </div>
              <div className="text-slate-400 text-sm mt-1">Topics</div>
            </div>
          </div>
        </motion.div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;
