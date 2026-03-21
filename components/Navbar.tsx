"use client";

import { useLang } from "@/context/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { lang, toggle, tr } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "#about", label: tr.nav.about },
    { href: "#experience", label: tr.nav.experience },
    { href: "#skills", label: tr.nav.skills },
    { href: "#projects", label: tr.nav.projects },
    { href: "#contact", label: tr.nav.contact },
  ];

  const nav: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    transition: "all 0.4s ease",
    padding: scrolled ? "0.7rem 0" : "1.2rem 0",
    background: scrolled ? "rgba(6,11,24,0.88)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(99,102,241,0.12)" : "none",
  };

  return (
    <motion.header
      style={nav}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#hero" style={{ fontFamily: "var(--font-manrope)", fontWeight: 900, fontSize: "1.25rem", textDecoration: "none", letterSpacing: "-0.5px" }}>
          <span className="gradient-text">MR</span>
          <span style={{ color: "#475569" }}>.</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desk-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", fontWeight: 500, color: "#94A3B8", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#E2E8F0")}
              onMouseLeave={e => (e.currentTarget.style.color = "#94A3B8")}
            >
              {l.label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggle}
            style={{
              display: "flex", alignItems: "center", gap: 2,
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8, padding: "0.3rem 0.1rem", cursor: "pointer",
              fontFamily: "var(--font-inter)", fontSize: "0.75rem", fontWeight: 700,
              overflow: "hidden",
            }}
            aria-label="Toggle language"
          >
            {(["en", "es"] as const).map((l) => (
              <span key={l} style={{
                padding: "0.2rem 0.55rem", borderRadius: 6,
                background: lang === l ? "linear-gradient(135deg,#6366F1,#8B5CF6)" : "transparent",
                color: lang === l ? "#ffffff" : "#64748B",
                transition: "all 0.25s",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}>
                {l}
              </span>
            ))}
          </button>

          <a href="#contact" className="btn-glow" style={{ padding: "0.5rem 1.2rem", fontSize: "0.8rem" }}>
            {tr.nav.hire}
          </a>
        </nav>

        {/* Mobile toggle */}
        <div style={{ display: "none", alignItems: "center", gap: "0.75rem" }} className="mob-controls">
          <button onClick={toggle}
            style={{ display: "flex", alignItems: "center", gap: 1, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "0.25rem 0.1rem", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "0.72rem", fontWeight: 700, overflow: "hidden" }}
          >
            {(["en", "es"] as const).map((l) => (
              <span key={l} style={{ padding: "0.2rem 0.5rem", borderRadius: 6, background: lang === l ? "linear-gradient(135deg,#6366F1,#8B5CF6)" : "transparent", color: lang === l ? "#ffffff" : "#64748B", transition: "all 0.25s", textTransform: "uppercase" }}>
                {l}
              </span>
            ))}
          </button>
          <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", color: "#94A3B8" }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div key="mob-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            style={{ background: "rgba(6,11,24,0.98)", borderBottom: "1px solid rgba(99,102,241,0.15)", overflow: "hidden" }}
          >
            <div style={{ padding: "1rem 1.5rem 1.5rem" }}>
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  style={{ display: "block", padding: "0.7rem 0", fontFamily: "var(--font-inter)", fontSize: "0.9rem", color: "#94A3B8", textDecoration: "none" }}>
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:768px){ .desk-nav{display:none !important;} .mob-controls{display:flex !important;} }
      `}</style>
    </motion.header>
  );
}
