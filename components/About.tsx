"use client";

import { useLang } from "@/context/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const { tr } = useLang();
  const a = tr.about;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { n: "8+", label: a.stat1 },
    { n: "3", label: a.stat2 },
    { n: "95%", label: a.stat3 },
    { n: "15+", label: a.stat4 },
  ];

  return (
    <section ref={ref} id="about" style={{ background: "#080D1C", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", right: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center", position: "relative" }}
        className="about-grid"
      >
        <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
          <p className="section-label">{a.label}</p>
          <div className="h-divider" />
          <h2 style={{ fontFamily: "var(--font-manrope)", fontWeight: 900, fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", color: "#F1F5F9", letterSpacing: "-1px", lineHeight: 1.15, marginBottom: "1.25rem" }}>
            {a.heading1}<br /><span className="gradient-text">{a.heading2}</span>
          </h2>
          <blockquote style={{ fontFamily: "var(--font-manrope)", fontStyle: "italic", fontSize: "1.1rem", color: "#94A3B8", lineHeight: 1.75, paddingLeft: "1.25rem", borderLeft: "2px solid #6366F1", marginBottom: "1.5rem" }}>
            {a.quote}
          </blockquote>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.93rem", lineHeight: 1.8, color: "#94A3B8" }}>{a.body}</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 24, scale: 0.95 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="card card-hover" style={{ padding: "1.75rem 1.5rem", borderRadius: 18 }}>
              <p className="gradient-text" style={{ fontFamily: "var(--font-manrope)", fontWeight: 900, fontSize: "2.6rem", letterSpacing: "-1.5px", lineHeight: 1 }}>{s.n}</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "#64748B", marginTop: "0.5rem", lineHeight: 1.4 }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr !important;gap:2.5rem !important;}}`}</style>
    </section>
  );
}
