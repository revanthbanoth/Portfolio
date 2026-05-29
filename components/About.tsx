"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiLinkedin, FiCalendar, FiBookOpen } from "react-icons/fi";

interface StatCardProps {
  icon: string;
  numericValue: number;
  suffix: string;
  label: string;
  delay: number;
}

function CountUp({
  target,
  suffix,
  started,
}: {
  target: number;
  suffix: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span className="stat-number">
      {count}
      {suffix}
    </span>
  );
}

function StatCard({ icon, numericValue, suffix, label, delay }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="glass-card glow-card-border"
      style={{
        padding: "24px 20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          fontSize: "24px",
          width: "48px",
          height: "48px",
          background: "rgba(124, 58, 237, 0.15)",
          border: "1px solid rgba(124, 58, 237, 0.3)",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "4px",
        }}
      >
        {icon}
      </div>
      <CountUp target={numericValue} suffix={suffix} started={inView} />
      <p
        style={{
          fontSize: "13px",
          color: "#94a3b8",
          fontWeight: 600,
          lineHeight: 1.3,
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}

const stats = [
  {
    icon: "📂",
    numericValue: 14,
    suffix: "+",
    label: "GitHub Repositories",
  },
  {
    icon: "🚀",
    numericValue: 4,
    suffix: "+",
    label: "Deployed Projects",
  },
  {
    icon: "🏆",
    numericValue: 1,
    suffix: "",
    label: "Hackathon Project",
  },
  {
    icon: "🎓",
    numericValue: 2026,
    suffix: "",
    label: "Graduation Year",
  },
];

const timelineData = [
  {
    year: "2022 - 2026",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Narsimha Reddy Engineering College",
    description: "Specializing in software engineering, full stack development, and web ecosystems. Actively leading project teams and building high-performance products.",
  },
  {
    year: "2020 - 2022",
    title: "Intermediate Education (MPC)",
    institution: "Board of Intermediate Education",
    description: "Focused on core Mathematics, Physics, and Chemistry, fostering early logical reasoning and mathematical problem-solving skills.",
  },
  {
    year: "2020",
    title: "Secondary School Certificate",
    institution: "State Board Schooling",
    description: "Acquired critical foundational literacy in basic computer sciences and science subjects.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="section-pad"
      style={{
        position: "relative",
        background: "#04040a",
        overflow: "hidden",
      }}
    >
      {/* Massive Faded Section Number "01" */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
          fontSize: "clamp(150px, 20vw, 320px)",
          fontWeight: 900,
          color: "rgba(124, 58, 237, 0.03)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      >
        01
      </div>

      {/* Grid Dot Overlay */}
      <div
        className="dot-grid"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          maskImage: "radial-gradient(circle, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 80%)",
        }}
      />

      {/* Top Background Blob */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "450px",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px" }}
        >
          <h2 className="section-heading">About Me</h2>
          <motion.div
            className="heading-line"
            initial={{ width: 0 }}
            animate={inView ? { width: "60px" } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* Grid Layout */}
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* LEFT COLUMN: Bio & Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="glass-card"
              style={{ padding: "36px" }}
            >
              {/* Decorative top stripe */}
              <div
                style={{
                  height: "3px",
                  background: "linear-gradient(90deg, #7c3aed, #a78bfa, transparent)",
                  borderRadius: "2px",
                  marginBottom: "28px",
                }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#f1f5f9",
                  marginBottom: "20px",
                }}
              >
                Who I Am
              </h3>
              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.8,
                  fontSize: "15px",
                  marginBottom: "20px",
                }}
              >
                I&apos;m a Final Year B.Tech CSE student at{" "}
                <span style={{ color: "#a78bfa", fontWeight: 600 }}>
                  Narsimha Reddy Engineering College
                </span>{" "}
                (2026), dedicated to building premium full-stack web applications. I craft
                seamless user interfaces and high-performance backend ecosystems using the MERN stack.
              </p>
              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.8,
                  fontSize: "15px",
                  marginBottom: "32px",
                }}
              >
                From deployed dental software on Render to multi-template web builders and
                intelligent application trackers, I transform abstract concepts into beautifully compiled,
                user-first software.
              </p>

              {/* Social Quick Links */}
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a
                  href="https://github.com/revanthbanoth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ padding: "10px 22px", fontSize: "14px" }}
                >
                  <FiGithub size={16} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/revanth-banoth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: "10px 22px", fontSize: "14px" }}
                >
                  <FiLinkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Stats Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "16px",
              }}
            >
              {stats.map((stat, i) => (
                <StatCard key={stat.label} {...stat} delay={i * 0.08} />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Education / Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="glass-card"
            style={{ padding: "36px" }}
          >
            <h3
              style={{
                fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
                fontSize: "22px",
                fontWeight: 700,
                color: "#f1f5f9",
                marginBottom: "32px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FiBookOpen style={{ color: "#a78bfa" }} />
              Education Timeline
            </h3>

            {/* Timeline wrapper */}
            <div style={{ position: "relative", paddingLeft: "24px" }}>
              {/* Vertical line divider */}
              <div
                style={{
                  position: "absolute",
                  top: "6px",
                  bottom: "6px",
                  left: "6px",
                  width: "2px",
                  background: "linear-gradient(180deg, #7c3aed, rgba(167, 139, 250, 0.2))",
                  boxShadow: "0 0 8px rgba(124, 58, 237, 0.4)",
                }}
              />

              {/* Timeline list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                {timelineData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ position: "relative" }}
                  >
                    {/* Glowing bullet checkpoint */}
                    <div
                      style={{
                        position: "absolute",
                        left: "-23px",
                        top: "5px",
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: "#7c3aed",
                        border: "3px solid #04040a",
                        boxShadow: "0 0 10px #8b5cf6, 0 0 5px #7c3aed",
                      }}
                    />

                    {/* Timeline card metadata */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "6px",
                      }}
                    >
                      <FiCalendar size={13} style={{ color: "#a78bfa" }} />
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "#a78bfa",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {item.year}
                      </span>
                    </div>

                    <h4
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#f1f5f9",
                        marginBottom: "4px",
                      }}
                    >
                      {item.title}
                    </h4>

                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#94a3b8",
                        marginBottom: "8px",
                      }}
                    >
                      {item.institution}
                    </p>

                    <p
                      style={{
                        fontSize: "13.5px",
                        color: "#64748b",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Styled JSX */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
