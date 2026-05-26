"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiPackage, FiAward, FiCalendar } from "react-icons/fi";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
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
    const duration = 1800;
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
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="glass-card glass-card-hover"
      style={{
        padding: "24px 20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          background: "rgba(124, 58, 237, 0.15)",
          border: "1px solid rgba(124, 58, 237, 0.3)",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#a78bfa",
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
          fontWeight: 500,
          lineHeight: 1.3,
          textAlign: "center",
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}

const stats = [
  {
    icon: <FiGithub size={22} />,
    value: "14+",
    numericValue: 14,
    suffix: "+",
    label: "GitHub Repositories",
  },
  {
    icon: <FiPackage size={22} />,
    value: "4+",
    numericValue: 4,
    suffix: "+",
    label: "Deployed Projects",
  },
  {
    icon: <FiAward size={22} />,
    value: "1",
    numericValue: 1,
    suffix: "",
    label: "Hackathon Project",
  },
  {
    icon: <FiCalendar size={22} />,
    value: "2026",
    numericValue: 2026,
    suffix: "",
    label: "Final Year (B.Tech CSE)",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-pad" style={{ position: "relative" }}>
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Section header */}
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

        {/* Two-column layout */}
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* LEFT — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
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
                </span>
                , passionate about building full-stack web applications. I work with the
                MERN stack and love turning ideas into deployed, working products.
              </p>
              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.8,
                  fontSize: "15px",
                  marginBottom: "28px",
                }}
              >
                I&apos;ve built and deployed projects ranging from{" "}
                <span style={{ color: "#a78bfa", fontWeight: 600 }}>
                  AI-powered job trackers
                </span>{" "}
                to{" "}
                <span style={{ color: "#a78bfa", fontWeight: 600 }}>
                  dental management systems
                </span>{" "}
                and complete web platforms — all shipped and live.
              </p>

              {/* Quick links */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="https://github.com/revanthbanoth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ padding: "8px 18px", fontSize: "14px" }}
                >
                  <FiGithub size={15} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/revanth-banoth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: "8px 18px", fontSize: "14px" }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {stats.map((stat, i) => (
                <StatCard key={stat.label} {...stat} delay={0.1 * i} />
              ))}
            </div>

            {/* College card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card"
              style={{ padding: "20px 24px", marginTop: "16px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(124, 58, 237, 0.15)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  🎓
                </div>
                <div>
                  <p style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "14px" }}>
                    Narsimha Reddy Engineering College
                  </p>
                  <p style={{ color: "#94a3b8", fontSize: "13px", marginTop: "2px" }}>
                    B.Tech CSE — Final Year (2026)
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
