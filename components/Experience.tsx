"use client";

import { useLang } from "@/context/LanguageContext";
import { motion, useInView } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useRef } from "react";

export default function Experience() {
  const { tr } = useLang();
  const e = tr.experience;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="experience" style={{ background: "#060B18", padding: "6rem 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: "3.5rem" }}>
          <p className="section-label">{e.label}</p>
          <div className="h-divider" />
          <h2 style={{ fontFamily: "var(--font-manrope)", fontWeight: 900, fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", color: "#F1F5F9", letterSpacing: "-1px" }}>{e.heading}</h2>
        </motion.div>

        <div style={{ position: "relative", paddingLeft: "3rem" }}>
          <div style={{ position: "absolute", left: "0.9rem", top: 8, bottom: 80, width: 1, background: "linear-gradient(to bottom, #6366F1 0%, rgba(99,102,241,0.1) 80%, transparent 100%)" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {e.jobs.map((job, i) => {
              const isCurrent = i === 0;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: i * 0.15 }} style={{ position: "relative" }}>
                  <div className={`timeline-dot ${isCurrent ? "timeline-dot-active" : ""}`} style={{ top: "1.75rem" }} />
                  <div className="card card-hover" style={{ padding: "1.75rem 2rem", borderLeft: isCurrent ? "2px solid #6366F1" : "1px solid rgba(255,255,255,0.1)", borderRadius: 18 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1rem", alignItems: "flex-start", marginBottom: "1rem" }}>
                      <div>
                        <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "1.1rem", color: "#F1F5F9", marginBottom: "0.3rem" }}>{job.role}</h3>
                        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", fontWeight: 600, color: "#6366F1" }}>{job.company}</p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.6rem" }}>
                          {job.stack.map(t => <span key={t} className="skill-badge" style={{ fontSize: "0.68rem" }}>{t}</span>)}
                        </div>
                      </div>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "0.35rem 0.85rem", borderRadius: 99, fontFamily: "var(--font-inter)", fontSize: "0.72rem", fontWeight: 600, background: isCurrent ? "rgba(99,102,241,0.12)" : "rgba(255,255,255,0.04)", border: `1px solid ${isCurrent ? "rgba(99,102,241,0.35)" : "rgba(255,255,255,0.08)"}`, color: isCurrent ? "#A5B4FC" : "#64748B", whiteSpace: "nowrap" }}>
                        <Briefcase size={10} />{job.period}
                      </span>
                    </div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                      {job.bullets.map((b, j) => (
                        <li key={j} style={{ display: "flex", gap: "0.75rem", fontFamily: "var(--font-inter)", fontSize: "0.865rem", lineHeight: 1.7, color: "#94A3B8" }}>
                          <span style={{ marginTop: "0.6rem", flexShrink: 0, width: 4, height: 4, borderRadius: "50%", background: "#6366F1" }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
