# 🌌 Banoth Revanth Kumar — Premium Personal Portfolio

A visually stunning, highly animated, and fully responsive personal portfolio designed to showcase projects, skills, and academic history with cutting-edge visual design standards.

Built with **Next.js (Static HTML Export)**, **Tailwind CSS**, **Framer Motion**, and **TypeScript** — optimized to deploy permanently warm and free on global Static CDN networks (like Render Static Sites).

---

## 📂 Project File Structure

Below is the structured overview of the portfolio repository, explaining the role of each key directory and visual file:

```text
Portfolio/
├── app/
│   ├── favicon.ico         # Tab shortcut icon
│   ├── globals.css         # DESIGN SYSTEM: variables, custom rounded scrollbars, morphing radial blobs,
│   │                       # spinning dash/dot rings, float animations, and rotating conic glowing card borders.
│   ├── layout.tsx          # Global HTML container, Google Fonts (Space Grotesk & Inter) configuration,
│   │                       # custom scroll wrapper, and body background color styling (#04040a).
│   └── page.tsx            # Main layout rendering the unified personal portfolio sections.
│
├── components/
│   ├── Navbar.tsx          # Scrolling progress bar, active gliding layoutId indicator dots, logo pulse
│   │                       # indicators, backdrop blur, and rotating conic gradient "Hire Me" button.
│   ├── Hero.tsx            # Morphing mesh blob backdrop, staggered name character animations, vertical spinning
│   │                       # concentric profile rings, floating tech badges, typewriter hook, and scroll mouse indicator.
│   ├── About.tsx           # Large decorative background section marker "01", dot grid overlay, stats cards
│   │                       # count-up trackers, and academic education timeline with glowing pulse progress markers.
│   ├── Skills.tsx          # Wrapped flex-pills categorized stack grid, rotating header conic gradient ring backdrop,
│   │                       # stagger entrance load offsets, and clockwise 360-degree SVG rotation on hover.
│   ├── Projects.tsx        # Always-visible action buttons (GitHub/Live Demo), custom 3D perspective mouse tilt,
│   │                       # rotating conic-gradient hover borders, and featured highlight badges.
│   └── Footer.tsx          # Centered minimalist copyright credits, animated gradient name, custom glowing
│                           # social icons, and pulse beating purple CSS heart animation.
│
├── public/
│   └── revanth.jpg         # Profile photograph asset.
│
├── next.config.ts          # Next.js compiler settings for zero-backend static export (output: 'export')
│                           # and CDN optimized image parameters.
├── tailwind.config.ts      # Tailwind design system settings, spacing, custom fonts, and screen break points.
├── tsconfig.json           # Strict TypeScript compilation criteria.
├── package.json            # Scripts (dev, build, start) and core dependency configurations.
└── README.md               # Visual directory documentation and setup instructions.
```

---

## ✨ Premium Features & Kinetics

*   **3D Mouse-Move Tilt**: Project cards pivot dynamically in 3D space tracking mouse movements in a `perspective(1000px)` viewport (pure vanilla JS calculations without heavy external packages).
*   **Rotating Conic Border Glows**: Button borders and card edges light up on hover, rotating a smooth violet gradient around the corners (`glow-card-border` using GPU accelerated custom properties).
*   **Seamless Navbar Sliding Tracker**: Utilizing Framer Motion's `layoutId`, active links glide smoothly underneath anchor options like a physical bead sliding on a string.
*   **Academic Vertical Timeline**: Structured timeline featuring glowing paths and pulsing checkpoints tracking B.Tech CSE details at *Narsimha Reddy Engineering College*.
*   **Aurora Mesh Blob**: Organic keyframe loops modifying background border-radius shapes, creating a slow-morphing blurry violet backdrop mesh.

---

## 🛠️ Local Development

Follow these steps to run the portfolio on your local machine:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/revanthbanoth/Portfolio.git
   cd Portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```

4. **View the Site**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Render Static Site Deployment (Warm 24/7 & 100% Free)

Since the Next.js config is pre-configured for a static export (`output: "export"`), this portfolio is hosted directly on a global CDN as a **Static Site** on Render. It stays active 24/7 (zero wake-up delay) and is permanently free.

### Configuration Settings
When creating a **"New Static Site"** on your [Render Dashboard](https://dashboard.render.com/):

1. **Git Repository**: Connect to `https://github.com/revanthbanoth/Portfolio`.
2. **Build Command**: 
   ```bash
   npm install && npm run build
   ```
3. **Publish Directory**: 
   ```bash
   out
   ```
4. Click **Create Static Site** — it will build and launch in under 90 seconds!
