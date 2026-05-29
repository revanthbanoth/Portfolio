"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript } from "react-icons/si";

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
      className="px-4 md:px-8 lg:px-16 relative min-h-screen flex flex-col justify-center items-center overflow-hidden py-20 bg-[#04040a]"
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
        className="hero-flex relative z-2 w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 md:gap-16"
        style={{
          padding: "60px 24px",
        }}
      >
        {/* LEFT — TEXT BIO */}
        <div className="w-full md:w-1/2 lg:w-[55%] text-center md:text-left px-4 md:px-0 flex flex-col items-center md:items-start">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center md:justify-start w-full md:w-auto mb-5"
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

          {/* Staggered Name Reveal wrapped in a max-w-lg container to prevent wrap issues */}
          <div className="max-w-lg mx-auto md:mx-0 w-full px-4 text-center md:text-left">
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
              className="text-[1.6rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
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
          </div>

          {/* Glowing divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
            className="mx-auto md:mx-0"
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
            className="text-xl md:text-2xl font-semibold w-full text-center md:text-left min-h-[2.5rem] flex items-center justify-center md:justify-start overflow-visible whitespace-normal"
            style={{
              color: "#a78bfa",
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
            className="mx-auto md:mx-0"
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
            className="w-full md:w-auto flex flex-col md:flex-row gap-3 justify-center md:justify-start items-center"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleScroll();
              }}
              className="btn-primary w-full md:w-auto text-center justify-center"
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
              className="btn-outline w-full md:w-auto text-center justify-center"
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
          className="hero-photo order-first md:order-last flex-shrink-0 flex flex-col items-center justify-center relative"
        >
          {/* Centered Avatar and concentric rings container */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 flex items-center justify-center">
            {/* Animated decorative rings */}
            <div className="profile-ring" />
            <div className="profile-ring-dots" />

            {/* Floating tech badges (Hidden on Mobile) */}
            {/* Badge 1: React (Top Left) */}
            <div
              className="floating-badge hidden md:flex items-center justify-center"
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
                backdropFilter: "blur(8px)",
                color: "#61DAFB",
              }}
            >
              <SiReact size={22} />
            </div>

            {/* Badge 2: Node.js (Bottom Right) */}
            <div
              className="floating-badge-delay-1 hidden md:flex items-center justify-center"
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
                backdropFilter: "blur(8px)",
                color: "#339933",
              }}
            >
              <SiNodedotjs size={22} />
            </div>

            {/* Badge 3: MongoDB (Bottom Left) */}
            <div
              className="floating-badge-delay-2 hidden md:flex items-center justify-center"
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
                backdropFilter: "blur(8px)",
                color: "#47A248",
              }}
            >
              <SiMongodb size={22} />
            </div>

            {/* Profile image wrapper */}
            <div
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
              style={{
                position: "relative",
                borderRadius: "50%",
                padding: "4px", // Sits just outside the image
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
                  width={320}
                  height={320}
                  priority
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "center 10%", // Shift crop upward to focus perfectly on the face
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Tech icons row visible ONLY on mobile (md:hidden) */}
          <div className="flex md:hidden items-center justify-center gap-6 mt-6">
            {/* React Icon */}
            <div
              className="p-3 bg-[rgba(13,13,26,0.7)] border border-[rgba(97,218,251,0.3)] rounded-full text-[#61DAFB]"
              style={{
                boxShadow: "0 0 15px rgba(97,218,251,0.25)",
              }}
            >
              <SiReact size={24} />
            </div>
            {/* Node.js Icon */}
            <div
              className="p-3 bg-[rgba(13,13,26,0.7)] border border-[rgba(104,160,99,0.3)] rounded-full text-[#68A063]"
              style={{
                boxShadow: "0 0 15px rgba(104,160,99,0.25)",
              }}
            >
              <SiNodedotjs size={24} />
            </div>
            {/* MongoDB Icon */}
            <div
              className="p-3 bg-[rgba(13,13,26,0.7)] border border-[rgba(77,179,61,0.3)] rounded-full text-[#4DB33D]"
              style={{
                boxShadow: "0 0 15px rgba(77,179,61,0.25)",
              }}
            >
              <SiMongodb size={24} />
            </div>
            {/* JavaScript Icon */}
            <div
              className="p-3 bg-[rgba(13,13,26,0.7)] border border-[rgba(247,223,30,0.3)] rounded-full text-[#F7DF1E]"
              style={{
                boxShadow: "0 0 15px rgba(247,223,30,0.25)",
              }}
            >
              <SiJavascript size={24} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator centered exactly 32px above the bottom edge */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer z-5"
        style={{
          pointerEvents: "auto",
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
    </section>
  );
}
