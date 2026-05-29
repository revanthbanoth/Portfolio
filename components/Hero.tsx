"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";

const TYPEWRITER_TEXTS = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Problem Solver",
  "Final Year CS Student",
];

function useTypewriter(texts: string[], speed = 80, pause = 1800) {
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setTextIdx((i) => (i + 1) % texts.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx, texts, speed, pause]);

  return texts[textIdx].slice(0, charIdx);
}

export default function Hero() {
  const typeText = useTypewriter(TYPEWRITER_TEXTS);

  const nameFirst = "Banoth ";
  const nameLast = "Revanth Kumar";

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 150,
      },
    },
  } as const;

  const handleScroll = () => {
    const about = document.getElementById("about");
    if (about) {
      const topOffset = about.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "70px",
        background: "#04040a",
      }}
    >
      {/* Aurora mesh background blob behind text */}
      <div className="morphing-blob" style={{ top: "15%", left: "10%" }} />

      {/* Subtle background grid pattern */}
      <div
        className="dot-grid"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Main Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "64px",
        }}
        className="hero-flex"
      >
        {/* LEFT — TEXT BIO */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ marginBottom: "20px" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(124, 58, 237, 0.08)",
                border: "1px solid rgba(124, 58, 237, 0.25)",
                borderRadius: "100px",
                padding: "6px 16px",
                fontSize: "13px",
                color: "#a78bfa",
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  background: "#7c3aed",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px rgba(124,58,237,0.8)",
                  display: "inline-block",
                  animation: "heart-beat 1.5s infinite ease-in-out",
                }}
              />
              Available for Opportunities
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "#94a3b8",
              marginBottom: "6px",
              fontWeight: 400,
            }}
          >
            Hi, I&apos;m
          </motion.p>

          {/* Staggered Name Reveal */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.03,
                  delayChildren: 0.25,
                },
              },
            }}
            style={{
              fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.25rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "12px",
              color: "#f1f5f9",
            }}
          >
            {/* Split first name */}
            {Array.from(nameFirst).map((char, index) => (
              <motion.span
                key={`first-${index}`}
                variants={letterVariants}
                style={{ display: "inline-block", whiteSpace: "pre" }}
              >
                {char}
              </motion.span>
            ))}
            {/* Split last name as gradient text */}
            <span className="gradient-text">
              {Array.from(nameLast).map((char, index) => (
                <motion.span
                  key={`last-${index}`}
                  variants={letterVariants}
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Glowing divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
            style={{
              height: "2px",
              background: "linear-gradient(90deg, #7c3aed, #a78bfa, transparent)",
              width: "140px",
              transformOrigin: "left",
              margin: "20px 0 24px",
              boxShadow: "0 0 10px rgba(124, 58, 237, 0.5)",
            }}
          />

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
              fontWeight: 600,
              color: "#a78bfa",
              height: "36px",
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <span>{typeText}</span>
            <span className="typewriter-cursor" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            style={{
              fontSize: "clamp(15px, 1.8vw, 17px)",
              color: "#94a3b8",
              lineHeight: 1.7,
              maxWidth: "520px",
              marginBottom: "36px",
            }}
          >
            I build real-world web apps that solve real problems — from idea to
            deployment.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleScroll();
              }}
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiExternalLink size={16} />
              View My Projects
            </motion.a>

            <motion.a
              href="https://github.com/revanthbanoth"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiGithub size={16} />
              GitHub Profile
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT — PROFILE PHOTO & DECORATIONS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          style={{
            flexShrink: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
          className="hero-photo"
        >
          {/* Animated decorative rings */}
          <div className="profile-ring" />
          <div className="profile-ring-dots" />

          {/* Floating tech badges */}
          {/* Badge 1: React (Top Left) */}
          <div
            className="floating-badge"
            style={{
              position: "absolute",
              top: "-15px",
              left: "-15px",
              zIndex: 10,
              width: "48px",
              height: "48px",
              background: "rgba(13, 13, 26, 0.7)",
              border: "1px solid rgba(97, 218, 251, 0.4)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
              color: "#61DAFB",
            }}
          >
            <SiReact size={22} />
          </div>

          {/* Badge 2: Node.js (Bottom Right) */}
          <div
            className="floating-badge-delay-1"
            style={{
              position: "absolute",
              bottom: "10px",
              right: "-20px",
              zIndex: 10,
              width: "48px",
              height: "48px",
              background: "rgba(13, 13, 26, 0.7)",
              border: "1px solid rgba(51, 153, 51, 0.4)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
              color: "#339933",
            }}
          >
            <SiNodedotjs size={22} />
          </div>

          {/* Badge 3: MongoDB (Bottom Left) */}
          <div
            className="floating-badge-delay-2"
            style={{
              position: "absolute",
              bottom: "0px",
              left: "-10px",
              zIndex: 10,
              width: "48px",
              height: "48px",
              background: "rgba(13, 13, 26, 0.7)",
              border: "1px solid rgba(71, 162, 72, 0.4)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
              color: "#47A248",
            }}
          >
            <SiMongodb size={22} />
          </div>

          {/* Profile image wrapper */}
          <div
            style={{
              position: "relative",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              padding: "6px",
              background: "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(167,139,250,0.2))",
              boxShadow: "0 0 35px rgba(124,58,237,0.25)",
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                background: "#0f0f1a",
              }}
            >
              <Image
                src="/revanth.jpg"
                alt="Banoth Revanth Kumar — Full Stack Developer"
                width={300}
                height={300}
                priority
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator centered exactly 32px above the bottom edge */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          zIndex: 5,
        }}
        onClick={handleScroll}
      >
        {/* Child motion.div is used for simple entrance fade-in, avoiding Framer Motion transform overrides */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              color: "#94a3b8",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Scroll
          </span>
          <div className="mouse-scroll">
            <div className="mouse-wheel" />
          </div>
        </motion.div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        .hero-flex {
          flex-direction: row;
        }
        .hero-photo {
          display: flex;
        }
        @media (max-width: 768px) {
          .hero-flex {
            flex-direction: column-reverse !important;
            text-align: center;
            padding-bottom: 80px !important;
          }
          .hero-flex > div:first-child {
            align-items: center;
            display: flex;
            flex-direction: column;
          }
          .hero-photo {
            width: 220px !important;
            height: 220px !important;
            margin: 0 auto;
          }
          .hero-photo > div:nth-child(5) {
            width: 220px !important;
            height: 220px !important;
          }
          .floating-badge, .floating-badge-delay-1, .floating-badge-delay-2 {
            width: 38px !important;
            height: 38px !important;
          }
        }
      `}</style>
    </section>
  );
}
