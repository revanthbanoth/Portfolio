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
  icon: React.ReactNode;
  color: string;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "React.js", icon: <SiReact size={28} />, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs size={28} />, color: "#ffffff", category: "Frontend" },
  { name: "HTML5", icon: <SiHtml5 size={28} />, color: "#E34F26", category: "Frontend" },
  { name: "CSS3", icon: <SiCss size={28} />, color: "#1572B6", category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={28} />, color: "#06B6D4", category: "Frontend" },
  { name: "Framer Motion", icon: <SiFramer size={28} />, color: "#BB4B96", category: "Frontend" },
  // Backend
  { name: "Node.js", icon: <SiNodedotjs size={28} />, color: "#339933", category: "Backend" },
  { name: "Express.js", icon: <SiExpress size={28} />, color: "#ffffff", category: "Backend" },
  // Database
  { name: "MongoDB", icon: <SiMongodb size={28} />, color: "#47A248", category: "Database" },
  // Tools
  { name: "Git", icon: <SiGit size={28} />, color: "#F05032", category: "Tools" },
  { name: "GitHub", icon: <SiGithub size={28} />, color: "#ffffff", category: "Tools" },
  { name: "Vite", icon: <SiVite size={28} />, color: "#646CFF", category: "Tools" },
  { name: "VS Code", icon: <VscCode size={28} />, color: "#007ACC", category: "Tools" },
  { name: "Postman", icon: <SiPostman size={28} />, color: "#FF6C37", category: "Tools" },
  // Languages
  { name: "JavaScript", icon: <SiJavascript size={28} />, color: "#F7DF1E", category: "Languages" },
  { name: "Python", icon: <SiPython size={28} />, color: "#3776AB", category: "Languages" },
];

const categories = ["Frontend", "Backend", "Database", "Tools", "Languages"];

function SkillCard({ skill, delay }: { skill: Skill; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.03 }}
      className="skill-card"
      style={{ cursor: "default" }}
    >
      {/* Icon */}
      <div
        style={{
          width: "52px",
          height: "52px",
          background: `rgba(${hexToRgb(skill.color)}, 0.1)`,
          border: `1px solid rgba(${hexToRgb(skill.color)}, 0.25)`,
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 12px",
          color: skill.color,
          transition: "all 0.3s ease",
        }}
      >
        {skill.icon}
      </div>
      <p
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: "#f1f5f9",
          textAlign: "center",
        }}
      >
        {skill.name}
      </p>
    </motion.div>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "255,255,255";
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
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
        background:
          "linear-gradient(180deg, transparent, rgba(124,58,237,0.04) 50%, transparent)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px" }}
        >
          <h2 className="section-heading">Tech Stack</h2>
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
              maxWidth: "480px",
            }}
          >
            Technologies I use to build full-stack products from scratch to deployment.
          </p>
        </motion.div>

        {/* Category groups */}
        {categories.map((cat, ci) => {
          const catSkills = skills.filter((s) => s.category === cat);
          return (
            <div key={cat} style={{ marginBottom: "48px" }}>
              {/* Category label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.05 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#7c3aed",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                  }}
                >
                  {cat}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background: "rgba(124, 58, 237, 0.2)",
                  }}
                />
              </motion.div>

              {/* Skills grid */}
              <div
                className="skills-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "16px",
                }}
              >
                {catSkills.map((skill, i) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    delay={i * 0.07}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
