"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiArrowDown, FiExternalLink } from "react-icons/fi";

const TYPEWRITER_TEXTS = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Problem Solver",
  "Final Year CSE Student",
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

// Particle Component
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number; size: number; opacity: number; color: string;
    }> = [];

    const colors = ["#7c3aed", "#a78bfa", "#8b5cf6", "#6d28d9", "#4c1d95"];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2.5 + 0.5,
          opacity: Math.random() * 0.6 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    const resizeObserver = new ResizeObserver(() => {
      resize();
      createParticles();
    });
    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particles-canvas"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export default function Hero() {
  const typeText = useTypewriter(TYPEWRITER_TEXTS);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  } as const;

  const handleScroll = () => {
    const about = document.getElementById("about");
    if (about) about.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "70px",
      }}
    >
      {/* Aurora blobs */}
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />

      {/* Particles */}
      <ParticleCanvas />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(30,27,75,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(30,27,75,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
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
          gap: "48px",
        }}
        className="hero-flex"
      >
        {/* LEFT TEXT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ flex: 1, minWidth: 0 }}
        >
          <motion.div variants={itemVariants}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(124, 58, 237, 0.1)",
                border: "1px solid rgba(124, 58, 237, 0.3)",
                borderRadius: "100px",
                padding: "6px 16px",
                fontSize: "13px",
                color: "#a78bfa",
                fontWeight: 500,
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  background: "#7c3aed",
                  borderRadius: "50%",
                  boxShadow: "0 0 6px rgba(124,58,237,0.8)",
                  display: "inline-block",
                  animation: "pulse-glow 2s ease-in-out infinite",
                }}
              />
              Available for opportunities
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "#94a3b8",
              marginBottom: "4px",
              fontWeight: 400,
            }}
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "16px",
              color: "#f1f5f9",
            }}
          >
            Banoth{" "}
            <span className="gradient-text">Revanth Kumar</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={itemVariants}
            style={{
              fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
              fontWeight: 600,
              color: "#a78bfa",
              height: "36px",
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <span>{typeText}</span>
            <span className="typewriter-cursor" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "clamp(14px, 1.8vw, 17px)",
              color: "#94a3b8",
              lineHeight: 1.7,
              maxWidth: "520px",
              marginBottom: "36px",
            }}
          >
            I build real-world web apps that solve real problems — from idea to
            deployment.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
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
        </motion.div>

        {/* RIGHT — Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          style={{
            flexShrink: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="hero-photo"
        >
          <div className="profile-ring-wrapper" style={{ width: "300px", height: "300px" }}>
            <div
              className="profile-img-inner"
              style={{ width: "300px", height: "300px", padding: "6px" }}
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
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
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
        }}
        onClick={handleScroll}
      >
        <span style={{ fontSize: "12px", color: "#94a3b8", letterSpacing: "2px" }}>
          SCROLL
        </span>
        <div className="bounce-arrow">
          <FiArrowDown color="#7c3aed" size={20} />
        </div>
      </motion.div>

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
          }
          .hero-flex > div:first-child {
            align-items: center;
          }
          .hero-flex p,
          .hero-flex h1 {
            text-align: center;
          }
          .hero-photo .profile-ring-wrapper {
            width: 220px !important;
            height: 220px !important;
          }
          .hero-photo .profile-img-inner {
            width: 220px !important;
            height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}
