"use client";

import { useRef } from "react";
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

function TechBadge({ tech }: { tech: string }) {
  return <span className="tech-badge">{tech}</span>;
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const isBadgeOnly = !project.liveLink && !project.githubLink && project.badge;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="project-card"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top accent gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), transparent)",
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: "16px",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              background: "rgba(124, 58, 237, 0.15)",
              border: "1px solid rgba(124, 58, 237, 0.3)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#a78bfa",
              flexShrink: 0,
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
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>
        </div>

        {/* Badges */}
        <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
          {project.featured && (
            <span
              style={{
                background: "rgba(124, 58, 237, 0.2)",
                border: "1px solid rgba(124, 58, 237, 0.4)",
                color: "#a78bfa",
                borderRadius: "20px",
                padding: "3px 10px",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}
            >
              ★ LIVE
            </span>
          )}
          {project.badge && (
            <span
              style={{
                background: "rgba(245, 158, 11, 0.15)",
                border: "1px solid rgba(245, 158, 11, 0.3)",
                color: "#fbbf24",
                borderRadius: "20px",
                padding: "3px 10px",
                fontSize: "11px",
                fontWeight: 600,
              }}
            >
              EVENT
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          color: "#94a3b8",
          fontSize: "14px",
          lineHeight: 1.7,
          flex: 1,
          marginBottom: "20px",
        }}
      >
        {project.description}
      </p>

      {/* Tech badges */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          marginBottom: "20px",
        }}
      >
        {project.tech.map((t) => (
          <TechBadge key={t} tech={t} />
        ))}
      </div>

      {/* Action buttons */}
      {!isBadgeOnly && (
        <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{
                padding: "8px 16px",
                fontSize: "13px",
                flex: project.liveLink ? undefined : 1,
                justifyContent: project.liveLink ? undefined : "center",
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
              className="btn-primary"
              style={{ padding: "8px 16px", fontSize: "13px", flex: 1, justifyContent: "center" }}
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      )}

      {/* Badge-only card footer */}
      {isBadgeOnly && (
        <div
          style={{
            marginTop: "auto",
            padding: "12px 16px",
            background: "rgba(245, 158, 11, 0.07)",
            border: "1px solid rgba(245, 158, 11, 0.2)",
            borderRadius: "8px",
            textAlign: "center",
            fontSize: "13px",
            color: "#fbbf24",
          }}
        >
          {project.badge} — Internal Event Project
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-pad" style={{ position: "relative" }}>
      {/* BG accent */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
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
          <p style={{ color: "#94a3b8", marginTop: "16px", fontSize: "16px", maxWidth: "520px" }}>
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
            <ProjectCard key={project.id} project={project} delay={i * 0.1} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
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
