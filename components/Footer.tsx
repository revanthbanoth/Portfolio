"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "relative",
        borderTop: "1px solid rgba(30, 27, 75, 0.6)",
        background: "rgba(10, 10, 15, 0.95)",
        padding: "40px 24px",
      }}
    >
      {/* Top divider glow */}
      <div className="footer-divider" style={{ marginBottom: "40px" }} />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center" }}
        >
          <span
            style={{
              fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
              fontSize: "32px",
              fontWeight: 800,
              background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            RK
          </span>
          <p style={{ color: "#94a3b8", fontSize: "14px", marginTop: "4px" }}>
            Full Stack Developer
          </p>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
            whileHover={{ y: -3, scale: 1.1 }}
            style={{
              width: "44px",
              height: "44px",
              background: "rgba(124, 58, 237, 0.1)",
              border: "1px solid rgba(124, 58, 237, 0.3)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#a78bfa",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(124, 58, 237, 0.2)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(124,58,237,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(124, 58, 237, 0.1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <FiGithub size={20} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/revanth-banoth"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ y: -3, scale: 1.1 }}
            style={{
              width: "44px",
              height: "44px",
              background: "rgba(124, 58, 237, 0.1)",
              border: "1px solid rgba(124, 58, 237, 0.3)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#a78bfa",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(124, 58, 237, 0.2)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(124,58,237,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(124, 58, 237, 0.1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <FiLinkedin size={20} />
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "rgba(30, 27, 75, 0.6)",
          }}
        />

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#94a3b8",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            Built by{" "}
            <span style={{ color: "#a78bfa", fontWeight: 600 }}>
              Banoth Revanth Kumar
            </span>{" "}
            with{" "}
            <FiHeart
              size={14}
              style={{
                color: "#7c3aed",
                fill: "#7c3aed",
                filter: "drop-shadow(0 0 4px rgba(124,58,237,0.8))",
              }}
            />
          </p>
          <p style={{ color: "#475569", fontSize: "13px" }}>
            © {year} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
