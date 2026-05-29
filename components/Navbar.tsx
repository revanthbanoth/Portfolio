"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

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

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Track active section
      const sections = ["home", "about", "skills", "projects"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #7c3aed, #8b5cf6, #a78bfa)",
          transformOrigin: "0%",
          zIndex: 1001,
        }}
      />

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
          background: scrolled ? "rgba(4, 4, 10, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(124, 58, 237, 0.25)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(124, 58, 237, 0.06)" : "none",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* LOGO */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
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
              fontSize: "26px",
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
              boxShadow: "0 0 10px #8b5cf6, 0 0 20px #7c3aed",
              display: "inline-block",
              animation: "pulse-glow 2s ease-in-out infinite",
            }}
          />
        </motion.a>

        {/* DESKTOP LINKS */}
        <div
          style={{
            gap: "36px",
            alignItems: "center",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                whileHover={{ y: -1 }}
                style={{
                  textDecoration: "none",
                  color: isActive ? "#f1f5f9" : "#94a3b8",
                  fontSize: "14px",
                  fontWeight: 500,
                  position: "relative",
                  transition: "color 0.3s ease",
                  padding: "6px 0",
                  letterSpacing: "0.5px",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = "#f1f5f9";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                  }
                }}
              >
                {link.label}
                {/* Active Link dot slide effect */}
                {isActive && (
                  <motion.span
                    layoutId="activeDot"
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#a78bfa",
                      boxShadow: "0 0 12px #8b5cf6, 0 0 6px #7c3aed",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </motion.a>
            );
          })}

          <motion.a
            href="https://www.linkedin.com/in/revanth-banoth"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glow-border-btn"
          >
            Hire Me
          </motion.a>
        </div>

        {/* HAMBURGER — mobile only */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer z-50"
        >
          <div
            className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-[70px] left-0 w-full bg-[#0a0a0f] border-t border-purple-900/30 py-4 px-6 flex flex-col gap-4 md:hidden z-[999] overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`text-lg font-medium py-2 transition-colors duration-200 ${
                  activeSection === link.href.replace("#", "") ? "text-[#a78bfa]" : "text-[#f1f5f9] hover:text-[#a78bfa]"
                }`}
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(124, 58, 237, 0.1)",
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://www.linkedin.com/in/revanth-banoth"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="glow-border-btn w-full text-center"
              style={{ marginTop: "8px" }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
