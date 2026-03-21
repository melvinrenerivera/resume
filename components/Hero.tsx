"use client";

import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

function FadeUp({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.65, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const { tr } = useLang();
  const h = tr.hero;

  const metaItems = [
    { Icon: MapPin, text: "San Salvador, El Salvador", href: undefined },
    { Icon: Phone, text: "+503 7682 3315", href: "tel:+50376823315" },
    { Icon: Mail, text: "melvin2rm@gmail.com", href: "mailto:melvin2rm@gmail.com" },
  ];

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", background: "#060B18", paddingTop: "6rem", paddingBottom: "4rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", bottom: "-15%", left: "-8%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.09) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", top: "40%", left: "35%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", width: "100%", display: "grid", gridTemplateColumns: "1fr 420px", gap: "3rem", alignItems: "center", position: "relative", zIndex: 1 }}
        className="hero-grid"
      >
        <div>
          <FadeUp delay={0}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.45rem 1rem", borderRadius: 99, border: "1px solid rgba(34,211,238,0.25)", background: "rgba(34,211,238,0.06)", color: "#67E8F9", fontFamily: "var(--font-inter)", fontSize: "0.78rem", fontWeight: 600, marginBottom: "1.75rem" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22D3EE", boxShadow: "0 0 8px rgba(34,211,238,0.9)" }} />
              {h.available}
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 style={{ fontFamily: "var(--font-manrope)", fontWeight: 900, fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-2px", marginBottom: "0.6rem", color: "#F1F5F9" }}>
              Melvin René<br />
              <span className="gradient-text">Rivera Machado</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.16}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "1.05rem", fontWeight: 400, color: "#94A3B8" }}>{h.role}</span>
              {["Angular", "Java", "AWS"].map((t) => (
                <span key={t} style={{ padding: "0.22rem 0.75rem", borderRadius: 99, background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.3)", color: "#A5B4FC", fontFamily: "var(--font-inter)", fontSize: "0.78rem", fontWeight: 600 }}>{t}</span>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.22}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", lineHeight: 1.8, color: "#94A3B8", maxWidth: "32rem", marginBottom: "2rem" }}>
              {h.tagline}
            </p>
          </FadeUp>

          <FadeUp delay={0.28}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2.25rem" }}>
              {metaItems.map(({ Icon, text, href }) => (
                href ? (
                  <a key={text} href={href} style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: "var(--font-inter)", fontSize: "0.83rem", color: "#94A3B8", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#A5B4FC")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#94A3B8")}
                  ><Icon size={14} /> {text}</a>
                ) : (
                  <span key={text} style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: "var(--font-inter)", fontSize: "0.83rem", color: "#94A3B8" }}>
                    <Icon size={14} /> {text}
                  </span>
                )
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.34}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <a href="mailto:melvin2rm@gmail.com" className="btn-glow"><Download size={15} />{h.downloadCv}</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-outline"><Github size={15} />GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-outline"><Linkedin size={15} />LinkedIn</a>
            </div>
          </FadeUp>
        </div>

        {/* Profile card */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: 380 }}>
            <div style={{ position: "absolute", inset: -20, borderRadius: 36, background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)", filter: "blur(20px)" }} />
            <div className="card glow-indigo" style={{ borderRadius: 28, padding: "2.5rem 2rem", textAlign: "center", position: "relative" }}>
              <div style={{ width: 100, height: 100, borderRadius: "50%", margin: "0 auto 1.25rem", background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #22D3EE 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 40px rgba(99,102,241,0.4)" }}>
                <span style={{ fontFamily: "var(--font-manrope)", fontWeight: 900, fontSize: "2rem", color: "#ffffff", letterSpacing: "-3px" }}>MR</span>
              </div>
              <p style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "1.15rem", color: "#F1F5F9", marginBottom: "0.25rem" }}>Melvin Rivera</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.82rem", color: "#94A3B8", marginBottom: "1.75rem" }}>{h.cardRole}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem", marginBottom: "1.75rem" }}>
                {[{ n: "8+", l: h.statsYears }, { n: "3", l: h.statsCompanies }, { n: "15+", l: h.statsTechs }].map((s) => (
                  <div key={s.l} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "0.75rem 0.5rem" }}>
                    <p className="gradient-text" style={{ fontFamily: "var(--font-manrope)", fontWeight: 900, fontSize: "1.4rem" }}>{s.n}</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.68rem", color: "#94A3B8", marginTop: 2 }}>{s.l}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", justifyContent: "center" }}>
                {["Angular", "Java", "AWS", "Docker", "Spring Boot"].map((t) => (
                  <span key={t} className="skill-badge" style={{ fontSize: "0.7rem" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", color: "#64748B", letterSpacing: "0.15em", textTransform: "uppercase" }}>{h.scroll}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 1, height: 36, background: "linear-gradient(to bottom, #6366F1, transparent)" }} />
      </motion.div>

      <style>{`@media(max-width:900px){ .hero-grid{grid-template-columns:1fr !important; gap:3rem !important;} }`}</style>
    </section>
  );
}
