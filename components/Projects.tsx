"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { BsStars } from "react-icons/bs";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  liveLink?: string;
  githubLink?: string;
  featured?: boolean;
  badge?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "EasyWeb",
    description:
      "A web platform for creating and managing websites easily. Built and deployed as a real product serving real users — a full-featured website builder with templates, customization, and publishing tools.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveLink: "https://myeasyweb.in",
    githubLink: "https://github.com/revanthbanoth",
    featured: true,
  },
  {
    id: 2,
    title: "Dental Management System",
    description:
      "A full-stack dental clinic management system with patient records, appointment scheduling, and billing — live and deployed on Render with real functionality.",
    tech: ["React", "Node.js", "Express", "MongoDB", "MERN Stack"],
    liveLink: "https://dental-j6kg.onrender.com",
    githubLink: "https://github.com/revanthbanoth",
  },
  {
    id: 3,
    title: "AI Job Tracker",
    description:
      "A premium AI-powered job application tracker with dashboard analytics, authentication, glassmorphism UI, application stages, and an AI service for smart recommendations.",
    tech: ["Vite", "React", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Node.js", "Python (AI)"],
    githubLink: "https://github.com/revanthbanoth/AI_Job_Tracker",
  },
  {
    id: 4,
    title: "Student Management System",
    description:
      "A full-stack student data management application with complete CRUD operations — add, view, edit, and delete student records with a clean and intuitive interface.",
    tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/revanthbanoth/Student-Management",
  },
  {
    id: 5,
    title: "CodeStorm Hackathon Website",
    description:
      "A premium MERN stack hackathon event website with registration flows, idea submission portal, and animated UI — built for a real college event at NRCM. Delivered under pressure in record time.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    badge: "🏆 Real College Event",
  },
];

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const isBadgeOnly = !project.liveLink && !project.githubLink && project.badge;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    // Calculate rotation angles (max 10 degrees)
    const rY = (mouseX / (width / 2)) * 10;
    const rX = -(mouseY / (height / 2)) * 10;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="glow-card-border"
      style={{
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease-out, box-shadow 0.3s ease",
        background: "var(--bg-card)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "28px",
      }}
    >
      {/* Top Part: Icon, Title, and Featured Badge */}
      <div style={{ transform: "translateZ(30px)", transition: "all 0.3s ease" }}>
        {/* Header Icon + Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", position: "relative" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              background: "rgba(124, 58, 237, 0.15)",
              border: "1px solid rgba(124, 58, 237, 0.3)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#a78bfa",
            }}
          >
            <BsStars size={16} />
          </div>
          <h3
            style={{
              fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              color: "#f1f5f9",
              paddingRight: project.featured ? "90px" : "0px",
            }}
          >
            {project.title}
          </h3>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <span
            style={{
              position: "absolute",
              top: "28px",
              right: "28px",
              background: "linear-gradient(135deg, #7c3aed, #8b5cf6)",
              color: "#fff",
              borderRadius: "20px",
              padding: "4px 12px",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "1px",
              boxShadow: "0 0 10px rgba(124,58,237,0.5)",
            }}
          >
            ★ FEATURED
          </span>
        )}

        {/* Description text - ALWAYS VISIBLE */}
        <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
          {project.description}
        </p>
      </div>

      {/* Middle Part: Tech stack pills */}
      <div style={{ transform: "translateZ(20px)", marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {project.tech.map((t) => (
            <span key={t} className="tech-badge-pill">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Part: Action buttons (Always visible, pushed to bottom) */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginTop: "auto",
          paddingTop: "12px",
          transform: "translateZ(25px)",
        }}
      >
        {!isBadgeOnly ? (
          <>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  background: "transparent",
                  border: "1px solid rgba(124, 58, 237, 0.5)",
                  color: "#a78bfa",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                <FiGithub size={14} />
                GitHub
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  background: "#7c3aed",
                  color: "#fff",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                <FiExternalLink size={14} />
                Live Demo
              </a>
            )}
          </>
        ) : (
          <div
            style={{
              width: "100%",
              padding: "10px 14px",
              background: "rgba(245, 158, 11, 0.08)",
              border: "1px solid rgba(245, 158, 11, 0.2)",
              borderRadius: "8px",
              textAlign: "center",
              fontSize: "13px",
              color: "#fbbf24",
              fontWeight: 500,
            }}
          >
            {project.badge}
          </div>
        )}
      </div>

      {/* Styled JSX for premium hovers */}
      <style jsx>{`
        .github-btn:hover {
          background: rgba(124, 58, 237, 0.15) !important;
          box-shadow: 0 0 12px rgba(124, 58, 237, 0.3);
          border-color: rgba(139, 92, 246, 0.8) !important;
        }
        .live-btn:hover {
          background: #6d28d9 !important;
          transform: scale(1.03);
          box-shadow: 0 0 14px rgba(124, 58, 237, 0.5);
        }
      `}</style>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="section-pad"
      style={{ position: "relative", background: "#04040a" }}
    >
      {/* Background Accent */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px" }}
        >
          <h2 className="section-heading">Projects</h2>
          <motion.div
            className="heading-line"
            initial={{ width: 0 }}
            animate={inView ? { width: "60px" } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p
            style={{
              color: "#94a3b8",
              marginTop: "16px",
              fontSize: "16px",
              maxWidth: "520px",
            }}
          >
            Real products I&apos;ve built and shipped — from concept to deployment.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            position: "relative",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.08} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            textAlign: "center",
            marginTop: "52px",
          }}
        >
          <a
            href="https://github.com/revanthbanoth"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ padding: "12px 28px" }}
          >
            <FiGithub size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
