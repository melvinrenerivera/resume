"use client";

import { useLang } from "@/context/LanguageContext";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";

const projectMeta = [
  { emoji: "🛒", gradientBg: "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.08) 100%)", accentColor: "#6366F1", stack: ["Angular", "Angular Material", "Spring Boot", "REST API", "MariaDB", "PayPal API"], badgeClass: "skill-badge" },
  { emoji: "🏥", gradientBg: "linear-gradient(135deg, rgba(34,211,238,0.12) 0%, rgba(99,102,241,0.06) 100%)", accentColor: "#22D3EE", stack: ["Angular", "Angular Material", "Spring Boot", "JWT", "OAuth2", "Spring Security"], badgeClass: "skill-badge-cyan" },
];

export default function Projects() {
  const { tr } = useLang();
  const p = tr.projects;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="projects" style={{ background: "#060B18", padding: "6rem 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: "3.5rem" }}>
          <p className="section-label">{p.label}</p>
          <div className="h-divider" />
          <h2 style={{ fontFamily: "var(--font-manrope)", fontWeight: 900, fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", color: "#F1F5F9", letterSpacing: "-1px" }}>{p.heading}</h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="proj-grid">
          {p.items.map((item, i) => {
            const meta = projectMeta[i];
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.15 }}
                className="card card-hover" style={{ borderRadius: 22, overflow: "hidden" }} whileHover={{ y: -6 }}>
                <div style={{ height: 130, background: meta.gradientBg, display: "flex", alignItems: "center", padding: "0 2rem", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "2.8rem" }}>{meta.emoji}</span>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: meta.accentColor }}>
                    <ExternalLink size={14} />
                  </div>
                </div>
                <div style={{ padding: "1.75rem 2rem" }}>
                  <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "1.15rem", color: "#F1F5F9", marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", lineHeight: 1.75, color: "#94A3B8", marginBottom: "1.25rem" }}>{item.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                    {meta.stack.map(t => <span key={t} className={meta.badgeClass} style={{ fontSize: "0.7rem" }}>{t}</span>)}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{`@media(max-width:640px){.proj-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
