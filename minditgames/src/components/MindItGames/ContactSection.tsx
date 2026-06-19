import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, MessageCircle } from "lucide-react";
import SectionTitle from "./SectionTitle.tsx";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          eyebrow="Get In Touch"
          icon={<MessageCircle size={14} />}
          title="Let's Talk"
          description="Have a question, feedback, or a partnership idea? We'd genuinely love to hear from you."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="-mt-4 grid gap-0 overflow-hidden rounded-3xl border border-brand-border bg-brand-surface/70 lg:grid-cols-5"
        >
          {/* Side panel */}
          <div className="relative flex flex-col justify-between bg-gradient-to-br from-brand-blue/15 via-brand-violet/10 to-brand-orange/10 p-8 lg:col-span-2 lg:p-10">
            <div>
              <h3 className="font-display text-xl font-bold text-white">
                Reach out directly
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Prefer email? We typically respond within 2–3 business days.
              </p>
            </div>

            <a
              href="mailto:fassijutt@gmail.com"
              className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-brand-blue-soft transition-colors hover:bg-white/10"
            >
              <Mail size={18} />
              fassijutt@gmail.com
            </a>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-8 lg:col-span-3 lg:p-10"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Your name"
                className="rounded-xl border border-brand-border bg-brand-ink/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-brand-blue/50"
              />
              <input
                type="email"
                required
                placeholder="Your email"
                className="rounded-xl border border-brand-border bg-brand-ink/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-brand-blue/50"
              />
            </div>
            <textarea
              required
              rows={4}
              placeholder="Your message…"
              className="resize-none rounded-xl border border-brand-border bg-brand-ink/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-brand-blue/50"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-violet px-6 py-3.5 text-sm font-bold text-white shadow-glow transition-transform duration-200 hover:scale-[1.02]"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
