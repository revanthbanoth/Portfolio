"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Update active section
      const sections = ["home", "about", "skills", "projects"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0 24px",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled
            ? "rgba(10, 10, 15, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(30, 27, 75, 0.6)"
            : "none",
          transition: "all 0.4s ease",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* LOGO */}
        <motion.a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          whileHover={{ scale: 1.05 }}
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
              fontSize: "28px",
              fontWeight: 800,
              background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-1px",
            }}
          >
            RK
          </span>
          <span
            style={{
              width: "6px",
              height: "6px",
              background: "#7c3aed",
              borderRadius: "50%",
              boxShadow: "0 0 8px rgba(124, 58, 237, 0.8)",
              display: "inline-block",
            }}
          />
        </motion.a>

        {/* DESKTOP LINKS */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              whileHover={{ y: -2 }}
              className={activeSection === link.href.replace("#", "") ? "nav-link-active" : ""}
              style={{
                textDecoration: "none",
                color:
                  activeSection === link.href.replace("#", "")
                    ? "#a78bfa"
                    : "#94a3b8",
                fontSize: "15px",
                fontWeight: 500,
                position: "relative",
                transition: "color 0.3s ease",
                paddingBottom: "4px",
              }}
              onMouseEnter={(e) => {
                if (activeSection !== link.href.replace("#", "")) {
                  (e.currentTarget as HTMLElement).style.color = "#f1f5f9";
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== link.href.replace("#", "")) {
                  (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                }
              }}
            >
              {link.label}
            </motion.a>
          ))}

          <motion.a
            href="https://github.com/revanthbanoth"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
            style={{ padding: "8px 20px", fontSize: "14px" }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* HAMBURGER — mobile only */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
        >
          <motion.div
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="hamburger-line"
          />
          <motion.div
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="hamburger-line"
          />
          <motion.div
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="hamburger-line"
          />
        </button>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mobile-menu"
            style={{
              position: "fixed",
              top: "70px",
              left: 0,
              right: 0,
              zIndex: 999,
              padding: "20px 24px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{
                  textDecoration: "none",
                  color:
                    activeSection === link.href.replace("#", "")
                      ? "#a78bfa"
                      : "#f1f5f9",
                  fontSize: "18px",
                  fontWeight: 500,
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(30, 27, 75, 0.5)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://github.com/revanthbanoth"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              className="btn-primary"
              style={{ marginTop: "16px", justifyContent: "center" }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive style tag */}
      <style jsx global>{`
        .hidden-mobile {
          display: flex;
        }
        .show-mobile {
          display: none;
        }
        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }
          .show-mobile {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
