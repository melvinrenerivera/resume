"use client";

import { useLang } from "@/context/LanguageContext";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useRef } from "react";

export default function Contact() {
  const { tr } = useLang();
  const c = tr.contact;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const contactItems = [
    { Icon: Mail, label: c.emailLabel, value: "melvin2rm@gmail.com", href: "mailto:melvin2rm@gmail.com", color: "#6366F1", bg: "rgba(99,102,241,0.1)" },
    { Icon: Phone, label: c.phoneLabel, value: "+503 7682 3315", href: "tel:+50376823315", color: "#22D3EE", bg: "rgba(34,211,238,0.08)" },
    { Icon: MapPin, label: c.locationLabel, value: c.locationValue, href: undefined, color: "#8B5CF6", bg: "rgba(139,92,246,0.08)" },
  ];

  return (
    <section ref={ref} id="contact" style={{ background: "#060B18", padding: "6rem 0 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="section-label" style={{ justifyContent: "center", display: "flex" }}>{c.label}</p>
          <h2 style={{ fontFamily: "var(--font-manrope)", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 3.8rem)", letterSpacing: "-2px", marginBottom: "1rem" }}>
            <span style={{ color: "#F1F5F9" }}>{c.heading1} </span>
            <span className="gradient-text">{c.heading2}</span>
          </h2>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "#94A3B8", maxWidth: "28rem", margin: "0 auto 3rem" }}>{c.subtext}</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", marginBottom: "2.5rem" }} className="contact-grid">
            {contactItems.map(({ Icon, label, value, href, color, bg }) => (
              <div key={label}
                className="card-hover"
                style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 18, padding: "2rem 1.25rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", transition: "transform 0.3s, border-color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = `${color}44`)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              >
                <div style={{ width: 50, height: 50, borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center", color }}>
                  <Icon size={20} />
                </div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#64748B" }}>{label}</p>
                {href ? (
                  <a href={href} style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", fontWeight: 500, color: "#94A3B8", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = color)}
                    onMouseLeave={e => (e.currentTarget.style.color = "#94A3B8")}
                  >{value}</a>
                ) : (
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", fontWeight: 500, color: "#94A3B8" }}>{value}</p>
                )}
              </div>
            ))}
          </div>

          <a href="mailto:melvin2rm@gmail.com" className="btn-glow" style={{ fontSize: "1rem", padding: "0.85rem 2.5rem" }}>
            <Mail size={18} />{c.cta}
          </a>
        </motion.div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "2rem 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "#475569" }}>
            © {new Date().getFullYear()} Melvin René Rivera Machado · {c.footer}
          </p>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[{ href: "https://github.com", Icon: Github }, { href: "https://linkedin.com", Icon: Linkedin }, { href: "mailto:melvin2rm@gmail.com", Icon: Mail }].map(({ href, Icon }, i) => (
              <a key={i} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748B", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,102,241,0.15)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"; e.currentTarget.style.color = "#A5B4FC"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#64748B"; }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:640px){.contact-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
