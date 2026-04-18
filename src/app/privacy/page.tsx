"use client";

import Footer from "@/modules/home/components/footer";
import Navbar from "@/modules/home/components/nav-bar";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const PrivacyPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-slate-950">
      <div className="fixed top-20 right-10 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />

      <Navbar />

      <div className="container mx-auto px-4 py-16 mt-10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">{t.privacy.title}</h1>

          <p className="text-slate-300 text-lg mb-8">{t.privacy.intro}</p>

          {t.privacy.sections.map((section, i) => (
            <section key={i} className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4">{section.heading}</h2>

              {"intro" in section && section.intro && (
                <p className="text-slate-400 mb-4">{section.intro}</p>
              )}

              {"items" in section && section.items && (
                <div className="text-slate-400 space-y-3">
                  {section.items.map((item, j) => (
                    <p key={j}>
                      <strong className="text-slate-200">{item.label}</strong>
                      {"text" in item && item.text ? ` ${item.text}` : ""}
                    </p>
                  ))}
                </div>
              )}

              {"text" in section && section.text && (
                <p className="text-slate-400">{section.text}</p>
              )}

              {"contact" in section && section.contact && (
                <div className="text-slate-400 space-y-3">
                  <p><strong className="text-slate-200">{section.contact.company}</strong></p>
                  <p><strong className="text-slate-200">📍</strong> {section.contact.address}</p>
                  <p>
                    <strong className="text-slate-200">📧</strong>{" "}
                    <a
                      href={`mailto:${section.contact.email}`}
                      className="text-blue-400 hover:text-blue-300 underline transition-colors"
                    >
                      {section.contact.email}
                    </a>
                  </p>
                  <p><strong className="text-slate-200">📞</strong> {section.contact.phone}</p>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
