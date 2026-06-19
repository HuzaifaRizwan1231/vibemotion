import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Database,
  Settings,
  Share2,
  Megaphone,
  Smile,
  Clock,
  ShieldCheck,
  Mail,
  Info,
  ArrowUp,
  Home as HomeIcon,
} from "lucide-react";
import Navbar from "../components/MindItGames/Navbar.tsx";
import Footer from "../components/MindItGames/Footer.tsx";

const LAST_UPDATED = "June 2026";

const SECTIONS = [
  {
    id: "information-collection",
    title: "Information We Collect",
    icon: Database,
    content: `We collect limited information to provide and improve our games.
    The types of data we may collect include:
    - Device identifiers (such as advertising ID) for analytics and ad serving
    - Gameplay data (level progress, scores, session duration) to improve game balance
    - Crash reports and diagnostic data to fix bugs and improve stability
    - General location data (country/region) derived from IP address for regional analytics

    We do not collect your name, email address, phone number, or any personally identifiable information
    unless you explicitly provide it through a contact form or support request.`,
  },
  {
    id: "usage",
    title: "How We Use Information",
    icon: Settings,
    content: `Information collected is used solely for the following purposes:
    - To operate, maintain, and improve our games and services
    - To serve relevant advertisements through our advertising partners
    - To analyze gameplay trends and improve game design
    - To respond to support requests and player feedback
    - To comply with legal obligations

    We do not sell your personal information to third parties.
    Data is processed in accordance with applicable data protection regulations.`,
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    icon: Share2,
    content: `Our games may integrate third-party services to support functionality and monetization.
    These partners have their own privacy policies. Common integrations include:
    - Google AdMob — for in-app advertising (https://policies.google.com/privacy)
    - Google Analytics for Firebase — for app analytics
    - Unity Analytics — for gameplay metrics (where applicable)
    - AppLovin — for advertising (https://www.applovin.com/privacy/)

    We encourage you to review the privacy policies of these third-party providers.
    Their data practices are governed by their own terms and are outside our control.`,
  },
  {
    id: "advertising",
    title: "Advertising",
    icon: Megaphone,
    content: `Our free games are supported by advertising. We use AdMob and other ad networks to
    display advertisements within our apps. These networks may use your device's advertising ID
    to serve personalized or contextual ads.

    You can opt out of personalized advertising by:
    - Resetting your device's advertising ID in your device settings
    - Enabling "Limit Ad Tracking" (iOS) or "Opt out of Ads Personalization" (Android)
    - Using the privacy settings within individual games where available

    Opting out does not remove ads — you'll still see non-personalized advertisements.`,
  },
  {
    id: "children",
    title: "Children's Privacy",
    icon: Smile,
    content: `Many of our games are designed for a family audience including children.
    We take children's privacy very seriously and comply with:
    - COPPA (Children's Online Privacy Protection Act)
    - GDPR-K (EU data regulations for minors)
    - Google Play Families Policy

    For games designated as family or children's apps:
    - We do not collect personal information from children under 13
    - We serve only child-appropriate, non-personalized advertisements
    - We do not include social features, external links, or in-app purchases targeting children

    Parents and guardians may contact us at fassijutt@gmail.com to request
    information about data collected or to request deletion of any data.`,
  },
  {
    id: "data-retention",
    title: "Data Retention & Deletion",
    icon: Clock,
    content: `We retain aggregated gameplay analytics data for up to 24 months to improve our services.
    Crash and diagnostic data is retained for up to 90 days. Advertising identifiers are handled
    according to our ad partners' own retention policies.

    You may request deletion of your data by contacting us at fassijutt@gmail.com.
    Please include your device's advertising ID (if available) to help us locate associated data.
    We will respond to deletion requests within 30 days.`,
  },
  {
    id: "security",
    title: "Security",
    icon: ShieldCheck,
    content: `We implement industry-standard security measures to protect any data we collect, including:
    - Encrypted data transmission (HTTPS/TLS)
    - Restricted access to analytics dashboards
    - Regular security audits of our data practices

    While we strive to protect your information, no method of transmission or storage is 100% secure.
    We cannot guarantee absolute security but are committed to using best practices to protect your data.`,
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: Mail,
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our
    data practices, please contact us:

    MindIt Games
    Email: fassijutt@gmail.com

    We aim to respond to all privacy-related inquiries within 5 business days.`,
  },
];

const renderContent = (content: string) =>
  content.split("\n").map((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith("- ")) {
      return (
        <div key={i} className="flex items-start gap-2.5 py-1">
          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue" />
          <span className="text-sm leading-relaxed text-slate-400">
            {trimmed.replace(/^- /, "")}
          </span>
        </div>
      );
    }
    return (
      <p key={i} className="mb-2 text-sm leading-relaxed text-slate-400">
        {trimmed}
      </p>
    );
  });

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-brand-ink">
      <Navbar />

      {/* Header */}
      <div className="relative overflow-hidden bg-brand-radial py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-blue/15 blur-[100px]" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-brand-orange/10 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl px-6">
          <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-slate-300">Privacy Policy</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl font-extrabold text-white sm:text-5xl"
          >
            Privacy Policy
          </motion.h1>
          <p className="mt-4 max-w-xl text-slate-400">
            At MindIt Games, your privacy matters. Here's exactly how we handle
            your data — in plain language.
          </p>
          <p className="mt-4 text-xs text-slate-500">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          {/* TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-brand-border bg-brand-surface/60 p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Contents
              </h4>
              <ul className="mt-4 flex flex-col gap-1">
                {SECTIONS.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      <span className="font-display text-[10px] font-bold text-brand-blue-soft">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Content */}
          <div>
            <div className="mb-10 flex gap-3 rounded-2xl border-l-2 border-brand-blue bg-brand-surface/50 p-5">
              <Info
                size={18}
                className="mt-0.5 flex-shrink-0 text-brand-blue-soft"
              />
              <p className="text-sm leading-relaxed text-slate-400">
                This Privacy Policy applies to all mobile games, applications,
                and websites operated by{" "}
                <strong className="text-slate-200">MindIt Games</strong>. By
                using our games, you agree to the terms described below.
              </p>
            </div>

            {SECTIONS.map((section, idx) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-12 scroll-mt-28"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-display text-xs font-extrabold text-gradient-brand">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-blue/25 bg-brand-blue/10 text-brand-blue-soft">
                    <section.icon size={18} />
                  </span>
                  <h2 className="font-display text-xl font-bold text-white">
                    {section.title}
                  </h2>
                </div>
                <div className="rounded-2xl border border-brand-border bg-brand-surface/40 p-6">
                  {renderContent(section.content)}
                </div>
              </section>
            ))}

            {/* Back row */}
            <div className="mt-10 flex flex-wrap gap-3 border-t border-brand-border pt-8">
              <a
                href="#top"
                className="inline-flex items-center gap-2 rounded-full border border-brand-border px-5 py-2.5 text-sm font-semibold text-slate-300 hover:border-white/30 hover:text-white"
              >
                <ArrowUp size={15} />
                Back to Top
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-5 py-2.5 text-sm font-semibold text-white"
              >
                <HomeIcon size={15} />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
