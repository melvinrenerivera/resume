"use client";

import { useLang } from "@/context/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillData = [
  { badgeClass: "skill-badge", skills: ["Java 8/11/17", "Kotlin", "PHP", "TypeScript", "JavaScript", "Python", "Angular", "ReactJS", "Spring Boot", "Spring Cloud", "Symfony", "Tailwind CSS", "Bootstrap"] },
  { badgeClass: "skill-badge-cyan", skills: ["AWS", "Docker", "Kubernetes", "Microservices", "Git", "Maven", "JWT", "OAuth2", "CI/CD"] },
  { badgeClass: "skill-badge-violet", skills: ["Oracle", "SQL Server", "MySQL", "MariaDB", "JPA", "Hibernate", "Doctrine"] },
  { badgeClass: "skill-badge", skills: ["SCRUM", "XP", "RUP", "Microservices Architecture"] },
];

export default function Skills() {
  const { tr } = useLang();
  const s = tr.skills;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="skills" style={{ background: "#080D1C", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: "-10%", left: "10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: "3.5rem" }}>
          <p className="section-label">{s.label}</p>
          <div className="h-divider" />
          <h2 style={{ fontFamily: "var(--font-manrope)", fontWeight: 900, fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", color: "#F1F5F9", letterSpacing: "-1px" }}>{s.heading}</h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="skills-grid">
          {s.groups.map((g, i) => (
            <motion.div key={g.label} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card card-hover" style={{ padding: "1.75rem 2rem", borderRadius: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
                  {g.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "0.95rem", color: "#CBD5E1" }}>{g.label}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {skillData[i].skills.map((skill) => <span key={skill} className={skillData[i].badgeClass}>{skill}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:640px){.skills-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
