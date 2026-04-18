import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { PublicEnvScript } from "next-runtime-env";
import { GoogleAnalytics } from "@next/third-parties/google";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Dev Hub Co.,Ltd.",
  description:
    "DevHubs delivers enterprise-grade Kubernetes solutions, CI/CD pipelines, Cloud Architecture, and Cloud Native software development for modern businesses in Thailand and globally.",
  keywords: [
    "Kubernetes",
    "K8S",
    "CICD",
    "CI/CD",
    "Cloud Architect",
    "Cloud Native",
    "DevOps",
    "On-premise Kubernetes",
    "Kubernetes Thailand",
    "Cloud Cost Optimization",
    "Container Orchestration",
    "Edge Computing",
  ],
  alternates: {
    canonical: "https://dev-hubs.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "DevHubs | Kubernetes, Cloud Native & CI/CD Experts",
    description:
      "DevHubs delivers enterprise-grade Kubernetes solutions, CI/CD pipelines, Cloud Architecture, and Cloud Native software development for modern businesses in Thailand and globally.",
    url: "https://dev-hubs.com",
    siteName: "DevHubs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevHubs | Kubernetes, Cloud Native & CI/CD Experts",
    description:
      "DevHubs delivers enterprise-grade Kubernetes solutions, CI/CD pipelines, Cloud Architecture, and Cloud Native software development for modern businesses in Thailand and globally.",
  },
  icons: {
    icon: "/Devhub_logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DevHubs",
  url: "https://dev-hubs.com",
  serviceType: [
    "Kubernetes Consulting",
    "Cloud Architecture",
    "CI/CD Implementation",
    "Cloud Native Development",
    "Cloud Cost Optimization",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PublicEnvScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${notoSansThai.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
      <GoogleAnalytics gaId="G-XC3YDHKPC5" />
    </html>
  );
}
