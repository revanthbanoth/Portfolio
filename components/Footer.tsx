"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "relative",
        background: "#04040a",
        padding: "48px 24px",
        borderTop: "1px solid rgba(124, 58, 237, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          textAlign: "center",
        }}
      >
        {/* Name in animated-style gradient */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="gradient-text"
            style={{
              fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
              fontSize: "20px",
              fontWeight: 800,
              letterSpacing: "0.5px",
            }}
          >
            Banoth Revanth Kumar
          </span>
          <p style={{ color: "#64748b", fontSize: "13px", marginTop: "4px" }}>
            Full Stack Developer • Final Year CSE B.Tech 2026
          </p>
        </motion.div>

        {/* Social Icons with custom hover glow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: "flex", gap: "16px" }}
        >
          <motion.a
            href="https://github.com/revanthbanoth"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ y: -3, scale: 1.08 }}
            style={{
              width: "44px",
              height: "44px",
              background: "rgba(124, 58, 237, 0.05)",
              border: "1px solid rgba(124, 58, 237, 0.25)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#a78bfa",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(139, 92, 246, 0.7)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 14px rgba(124, 58, 237, 0.4)";
              (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(124, 58, 237, 0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(124, 58, 237, 0.25)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(124, 58, 237, 0.05)";
            }}
          >
            <FiGithub size={20} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/revanth-banoth"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ y: -3, scale: 1.08 }}
            style={{
              width: "44px",
              height: "44px",
              background: "rgba(124, 58, 237, 0.05)",
              border: "1px solid rgba(124, 58, 237, 0.25)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#a78bfa",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(139, 92, 246, 0.7)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 14px rgba(124, 58, 237, 0.4)";
              (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(124, 58, 237, 0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(124, 58, 237, 0.25)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(124, 58, 237, 0.05)";
            }}
          >
            <FiLinkedin size={20} />
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "1px",
            background: "rgba(124, 58, 237, 0.2)",
            margin: "8px 0",
          }}
        />

        {/* Credits Row with Beating Purple Heart */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <p
            style={{
              color: "#94a3b8",
              fontSize: "13.5px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              justifyContent: "center",
            }}
          >
            Designed & Built by{" "}
            <span style={{ color: "#a78bfa", fontWeight: 600 }}>Revanth</span>{" "}
            with{" "}
            <FiHeart
              size={13}
              className="beating-heart"
            />
          </p>
          <p style={{ color: "#475569", fontSize: "12px" }}>
            © {year} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
