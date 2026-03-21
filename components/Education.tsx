"use client";

import { useLang } from "@/context/LanguageContext";
import { motion, useInView } from "framer-motion";
import { Award, BookOpen } from "lucide-react";
import { useRef } from "react";

const certAbbr = ["CCNA", "AWS", "AWS+"];
const certColors = [
  { color: "#6366F1", bg: "rgba(99,102,241,0.12)", border: "rgba(99,102,241,0.3)" },
  { color: "#22D3EE", bg: "rgba(34,211,238,0.08)", border: "rgba(34,211,238,0.25)" },
  { color: "#8B5CF6", bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.3)" },
];

export default function Education() {
  const { tr } = useLang();
  const e = tr.education;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="education" style={{ background: "#080D1C", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-10%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", position: "relative" }}
        className="edu-grid"
      >
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BookOpen size={16} color="#6366F1" />
            </div>
            <h2 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "1.5rem", color: "#F1F5F9" }}>{e.degreeLabel}</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {e.degrees.map((d, i) => (
              <div key={i} className="card" style={{ padding: "1.5rem 1.75rem", borderRadius: 16 }}>
                <p style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "0.72rem", color: "#6366F1", marginBottom: "0.4rem", letterSpacing: "0.05em" }}>{d.period}</p>
                <p style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "1rem", color: "#E2E8F0", marginBottom: "0.2rem" }}>{d.degree}</p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.82rem", color: "#94A3B8" }}>{d.inst}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Award size={16} color="#22D3EE" />
            </div>
            <h2 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "1.5rem", color: "#F1F5F9" }}>{e.certLabel}</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {e.certs.map((c, i) => {
              const cl = certColors[i];
              return (
                <div key={i} className="card-hover" style={{ background: cl.bg, border: `1px solid ${cl.border}`, borderRadius: 16, padding: "1.2rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem", transition: "transform 0.3s ease" }}>
                  <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: 13, background: cl.bg, border: `1px solid ${cl.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-manrope)", fontWeight: 900, fontSize: "0.68rem", color: cl.color, letterSpacing: "0.05em" }}>
                    {certAbbr[i]}
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "0.9rem", color: "#E2E8F0" }}>{c.title}</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.76rem", color: "#94A3B8", marginTop: "0.2rem" }}>{c.issuer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <style>{`@media(max-width:768px){.edu-grid{grid-template-columns:1fr !important;gap:2.5rem !important;}}`}</style>
    </section>
  );
}
