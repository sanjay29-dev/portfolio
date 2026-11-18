# ⚡ Sanjay V — Personal Developer Portfolio

> **"The Engineer's Control Room"** — A distinctive, dark-themed personal portfolio built for technical interviewers and HR recruiters, highlighting back-end architecture with Spring Boot, relational data modeling with MySQL, and responsive front-end integration with React.

---

## 🛠️ Tech Stack

- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS + Custom Design Tokens
- **Animations:** Framer Motion (respects `prefers-reduced-motion`)
- **Icons:** Lucide React
- **Routing:** React Router v6
- **Typography:** Space Grotesk, Inter, JetBrains Mono (Self-hosted via `@fontsource`)
- **Deployment:** Vercel

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer)
- Git

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sanjay29-dev/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```text
portfolio/
├─ public/
│  ├─ favicon.svg
│  ├─ og-image.png                # Social share preview (1200x630)
│  ├─ robots.txt
│  ├─ sitemap.xml
│  └─ media/
│     ├─ profile/photo.png        # Sanjay's photo
│     └─ projects/pharmacare/     # PharmaCare verified screenshots
├─ src/
│  ├─ data/                       # ⭐ ALL CONTENT LIVES HERE
│  │  ├─ profile.js               # Bio, hero text, recruiter snapshot
│  │  ├─ skills.js                # Tech skills & SVG ecosystem nodes
│  │  ├─ projects.js              # Projects & case study details
│  │  ├─ experience.js            # Training & education timeline
│  │  ├─ certifications.js        # Verified certifications
│  │  └─ terminalCommands.js      # Terminal commands
│  ├─ components/
│  │  ├─ layout/                  # Navbar, Footer, MobileMenu, PageTransition
│  │  ├─ ui/                      # Button, Card, Tag, SectionHeading, Reveal, Tooltip
│  │  ├─ sections/                # Hero, Snapshot, About, Skills, FeaturedProjects, Timeline, Certifications, Contact
│  │  ├─ features/                # Terminal (>_), CommandPalette (Ctrl+K), SkillsGraph, CursorGlow, GithubStats
│  │  └─ project/                 # ArchitectureExplorer, Gallery, Lightbox, FeatureGrid, ApiTable, DatabaseDesign
│  ├─ pages/                      # Home.jsx, ProjectDetail.jsx, NotFound.jsx
│  ├─ hooks/                      # useScrollSpy, useHotkey
│  ├─ lib/                        # github.js
│  ├─ styles/index.css
│  ├─ App.jsx
│  └─ main.jsx
├─ vercel.json                    # Single Page App rewrite rules
└─ package.json
```

---

## ✏️ How to Edit Content & Add New Projects

All text and portfolio content is completely decoupled from UI components and lives in `src/data/`:

### 1. How to add a new project in `src/data/projects.js`
Open `src/data/projects.js` and append a new project object to the array:

```js
{
  slug: "my-new-project",
  title: "Project Name",
  subtitle: "One-line subtitle",
  tagline: "Short summary problem statement",
  pitch: "Detailed overview...",
  problem: "What real problem does this solve?",
  solution: "How did you engineer the solution?",
  role: "Sole Developer",
  duration: "2026",
  tags: ["Java", "Spring Boot", "MySQL", "React"],
  github: "https://github.com/sanjay29-dev/my-new-project",
  liveDemo: null,
  screenshots: [
    { src: "/media/projects/my-new-project/screen1.png", caption: "Dashboard view" }
  ],
  features: [
    { title: "Feature One", description: "...", icon: "Boxes" }
  ],
  architecture: {
    nodes: [ ... ],
    edges: [ ... ]
  },
  database: [
    { table: "users", description: "..." }
  ],
  api: [
    { method: "GET", path: "/api/v1/items", purpose: "Fetch items" }
  ],
  challenges: [
    "Overcoming database race conditions during concurrent requests."
  ]
}
```
*Note:* When you have 1 project, the portfolio automatically displays a full-width featured card. When you add a 2nd project, it automatically adapts to a 2-column grid layout without touching any code!

### 2. How to update your bio or social links
Edit `src/data/profile.js`. You can update your email, LinkedIn, location, intro text, and recruiter snapshot tiles.

### 3. How to add a resume without phone number
Place your web-safe PDF (name, email, LinkedIn, GitHub, city only — **strictly no phone number**) in `public/Sanjay_V_Resume.pdf`, then set `resumeAvailable: true` and `resumePath: "/Sanjay_V_Resume.pdf"` in `src/data/profile.js`.

---

## 🔒 Privacy Rule

To ensure personal safety and prevent automated telemarketing scrapers, Sanjay's phone number is **never published** in source code, data files, HTML meta tags, or public downloads.

---

## 👨‍💻 Developer

**Sanjay V**  
Java Full Stack Developer — Chennai, Tamil Nadu, India  
- GitHub: [sanjay29-dev](https://github.com/sanjay29-dev)  
- LinkedIn: [sanjay-v-a47452374](https://linkedin.com/in/sanjay-v-a47452374)  
- Email: wilsonsanjay29@gmail.com
