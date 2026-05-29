"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVite,
  SiPostman,
  SiJavascript,
  SiPython,
  SiFramer,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

interface Skill {
  name: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  color: string;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "React.js", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", category: "Frontend" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "Frontend" },
  { name: "CSS3", icon: SiCss, color: "#1572B6", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
  { name: "Framer Motion", icon: SiFramer, color: "#BB4B96", category: "Frontend" },
  // Backend
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff", category: "Backend" },
  // Database
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database" },
  // Tools
  { name: "Git", icon: SiGit, color: "#F05032", category: "Tools" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff", category: "Tools" },
  { name: "Vite", icon: SiVite, color: "#646CFF", category: "Tools" },
  { name: "VS Code", icon: VscCode, color: "#007ACC", category: "Tools" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "Tools" },
  // Languages
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Languages" },
  { name: "Python", icon: SiPython, color: "#3776AB", category: "Languages" },
];

const categories = ["Frontend", "Backend", "Database", "Tools", "Languages"];

// Icon animation variants for 360 spin
const iconVariants = {
  initial: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
} as const;

// Pill animation variants for fade up and hover highlights
const pillVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 1,
    borderColor: "rgba(124, 58, 237, 0.25)",
    backgroundColor: "rgba(124, 58, 237, 0.08)",
    boxShadow: "0 0 0px rgba(124, 58, 237, 0)",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.08,
    borderColor: "rgba(139, 92, 246, 0.7)",
    backgroundColor: "rgba(124, 58, 237, 0.15)",
    boxShadow: "0 0 12px rgba(124, 58, 237, 0.4)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
} as const;

function SkillPill({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <motion.div
      variants={pillVariants}
      whileHover="hover"
      initial="initial"
      animate="animate"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        borderRadius: "9999px",
        padding: "8px 16px",
        cursor: "default",
        userSelect: "none",
        borderStyle: "solid",
        borderWidth: "1px",
      }}
    >
      <motion.span
        variants={iconVariants}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={20} style={{ color: skill.color }} />
      </motion.span>
      <span
        style={{
          fontSize: "13px",
          fontWeight: 500,
          color: "#e2e8f0",
          letterSpacing: "0.2px",
        }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="section-pad"
      style={{
        position: "relative",
        background: "#04040a",
      }}
    >
      {/* Background Accent */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.03) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        {/* Header Container */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px", position: "relative" }}
        >
          {/* Subtle rotating conic-gradient ring behind the section title */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "40px",
              transform: "translate(-50%, -50%)",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: "conic-gradient(from 0deg, transparent 30%, rgba(124, 58, 237, 0.15) 70%, rgba(167, 139, 250, 0.1) 90%, transparent)",
              animation: "spin-ring 15s linear infinite",
              filter: "blur(24px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <h2 className="section-heading" style={{ zIndex: 1, position: "relative" }}>Tech Stack</h2>
          <motion.div
            className="heading-line"
            initial={{ width: 0 }}
            animate={inView ? { width: "60px" } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ zIndex: 1, position: "relative" }}
          />
          <p
            style={{
              color: "#94a3b8",
              marginTop: "16px",
              fontSize: "16px",
              maxWidth: "480px",
              zIndex: 1,
              position: "relative",
            }}
          >
            Technologies I use to build full-stack products from scratch to deployment.
          </p>
        </motion.div>

        {/* Category Groups in compact horizontal rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {categories.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat);
            return (
              <div
                key={cat}
                className="category-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "16px",
                  padding: "24px 0",
                  borderBottom: "1px solid rgba(124, 58, 237, 0.08)",
                }}
              >
                {/* Category Heading (animated slightly before its pills) */}
                <div className="category-header">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#a78bfa",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      margin: 0,
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#7c3aed",
                        boxShadow: "0 0 8px rgba(124, 58, 237, 0.8)",
                        display: "inline-block",
                      }}
                    />
                    {cat}
                  </motion.h3>
                </div>

                {/* Staggered Pills */}
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={{
                    initial: {},
                    animate: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.12, // leading stagger
                      },
                    },
                  }}
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                  }}
                >
                  {catSkills.map((skill) => (
                    <SkillPill key={skill.name} skill={skill} />
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Styled JSX for desktop layout adjustments */}
      <style jsx>{`
        .category-row:last-child {
          border-bottom: none !important;
        }

        @media (min-width: 768px) {
          .category-row {
            grid-template-columns: 200px 1fr !important;
            align-items: center !important;
            gap: 32px !important;
          }
          .category-header {
            display: flex;
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
