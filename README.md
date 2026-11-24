# ⚡ Sanjay V — Personal Developer Portfolio

> **"The Engineer's Control Room"** — A production-grade, dark-themed personal portfolio engineered for technical interviewers and HR recruiters, highlighting back-end architecture with Java & Spring Boot, relational data modeling with MySQL, and responsive front-end integration with React.

---

## 🚀 Live Featured Projects

### 1. [Hireloop — Recruitment & Applicant Tracking Platform](https://github.com/sanjay29-dev/hireloop)
- **Stack:** Java 17, Spring Boot 3, Spring Data JPA, Spring Security + JWT, MySQL, React (Vite), Tailwind CSS
- **Highlights:** Role-based access control (Candidate, Employer, Admin), 5-stage recruitment pipeline tracking, resume management, employer job posting workflows, and admin organization approvals.
- **Deep Dive:** Dedicated case study page with interactive architecture graph, 6-table database schema, 13 REST API endpoints, and 10 UI screenshots.

### 2. [PharmaCare — Pharmacy Stock & Sales Management System](https://github.com/sanjay29-dev/pharmacare_repo)
- **Stack:** Java, Spring Boot, Spring Data JPA, Hibernate, MySQL, React (Vite), Axios, Tailwind CSS
- **Highlights:** FEFO (First-Expiry-First-Out) automated stock allocation, real-time inventory tracking, batch-level expiry management, sales billing, and analytics dashboards.
- **Deep Dive:** Case study with full database architecture, API contract table, and 8 verified application screenshots.

---

## 🛠️ Portfolio Tech Stack

- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS + Custom Design Tokens (Cyberpunk/Dark Slate Glassmorphism)
- **Animations:** Framer Motion (respects `prefers-reduced-motion`)
- **Document Rendering:** HTML5 Canvas-based clean PDF reader (zero browser editing toolbars/highlighters)
- **Icons:** Lucide React
- **Routing:** React Router v6
- **Typography:** Space Grotesk, Inter, JetBrains Mono (Self-hosted via `@fontsource`)
- **Form Forwarding:** Formspree (`xvkadvey`) -> direct Gmail alerts

---

## ✨ Key Portfolio Sections & Features

1. **Recruiter Snapshot Strip:** High-level summary of stack, projects, training, and academic background.
2. **Interactive Skills Ecosystem:** SVG graph mapping dependencies between Java, Spring Boot, Security, JPA, Hibernate, React, and MySQL with responsive category breakdown cards.
3. **Featured Projects Grid:** Side-by-side presentation of Hireloop and PharmaCare linking to in-depth engineering case studies.
4. **Experience & Training:** Chronological timeline covering 9-month Java Full Stack training at QSpiders, Java development at Internshala, and Cloud computing at HTGE.
5. **Education:** Dedicated section detailing B.Tech in Information Technology from Adhiparasakthi College of Engineering (APCE), `CGPA 8.12 / 10`, and core CS coursework.
6. **Certifications & Training:** Interactive 3-column grid of 6 verified technical credentials with an in-modal, toolbar-free high-DPI document viewer (featuring Internshala, Infosys Springboard, HTGE, and NPTEL Big Data Computing).
7. **Contact:** Live form integrated with Formspree with instant email alerts and direct one-click email copying.

---

## 📁 Project Structure

```text
portfolio/
├─ public/
│  ├─ favicon.svg
│  ├─ og-image.png                      # Social share preview card
│  ├─ robots.txt
│  ├─ sitemap.xml
│  └─ media/
│     ├─ profile/photo.png              # Developer photo
│     ├─ certificates/                  # Verified credential documents
│     │  ├─ core-java-ai.pdf            # Internshala Core Java
│     │  ├─ infosys-spring-basics.pdf   # Infosys Spring 5 Basics
│     │  ├─ infosys-spring-data-jpa.pdf # Infosys Spring Data JPA
│     │  ├─ infosys-spring-rest.pdf     # Infosys Spring REST
│     │  ├─ htge-cloud-internship.jpg   # HTGE Cloud Internship
│     │  └─ nptel-big-data-computing.pdf# NPTEL Big Data Computing (Elite 82%)
│     └─ projects/
│        ├─ hireloop/                   # 10 Hireloop UI screenshots
│        └─ pharmacare/                 # 8 PharmaCare UI screenshots
├─ src/
│  ├─ data/                             # Decoupled content store
│  │  ├─ profile.js                     # Bio, hero text, snapshot, Formspree ID
│  │  ├─ skills.js                      # Tech skills & SVG ecosystem nodes/edges
│  │  ├─ projects.js                    # Full case studies (Hireloop & PharmaCare)
│  │  ├─ experience.js                  # Industry experience & education records
│  │  └─ certifications.js              # 6 verified credentials with verification links
│  ├─ components/
│  │  ├─ layout/                        # Navbar, Footer, MobileMenu, PageTransition
│  │  ├─ ui/                            # Button, Card, Tag, SectionHeading, Reveal, CertificateModal
│  │  ├─ sections/                      # Hero, Snapshot, About, Skills, FeaturedProjects, Timeline, Education, Certifications, Contact
│  │  ├─ features/                      # SkillsGraph, CursorGlow, GithubStats
│  │  └─ project/                       # ArchitectureExplorer, Gallery, Lightbox, FeatureGrid, ApiTable, DatabaseDesign
│  ├─ pages/                            # Home.jsx, ProjectDetail.jsx, NotFound.jsx
│  ├─ hooks/                            # useScrollSpy, useHotkey
│  ├─ lib/                              # github.js
│  ├─ styles/index.css
│  ├─ App.jsx
│  └─ main.jsx
├─ vercel.json
└─ package.json
```

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer)
- Git

### Installation & Run

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
   Open [http://localhost:5173](http://localhost:5173) (or assigned port) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🔒 Privacy Rule

To ensure personal safety and prevent automated telemarketing scrapers, phone numbers are **never published** in source code, data files, HTML meta tags, or public downloads.

---

## 👨‍💻 Developer

**Sanjay V**  
Java Full Stack Developer — Chennai, Tamil Nadu, India  
- **GitHub:** [sanjay29-dev](https://github.com/sanjay29-dev)  
- **LinkedIn:** [sanjay-v-a47452374](https://linkedin.com/in/sanjay-v-a47452374)  
- **Email:** [wilsonsanjay29@gmail.com](mailto:wilsonsanjay29@gmail.com)
