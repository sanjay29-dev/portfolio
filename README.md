# ⚡ Sanjay V — Personal Developer Portfolio

> **"The Engineer's Control Room"** — A production-grade, dark-themed personal portfolio engineered for technical interviewers and HR recruiters, highlighting back-end architecture with Java & Spring Boot, relational data modeling with MySQL, and responsive front-end integration with React.

🌐 **Live Portfolio:** [sanjay-portfolio-mu.vercel.app](https://sanjay-portfolio-mu.vercel.app)

---

## 🚀 Live Featured Projects

### 1. [Hireloop — Recruitment & Applicant Tracking Platform](https://github.com/sanjay29-dev/hireloop)
- **Stack:** Java 17, Spring Boot 3, Spring Data JPA, Spring Security + JWT, MySQL, React (Vite), Tailwind CSS
- **Highlights:** Role-based access control (Candidate, Employer, Admin), 5-stage recruitment pipeline tracking, resume management, employer job posting workflows, and admin organization approvals.
- **Deep Dive:** Dedicated case study page (`/projects/hireloop`) with interactive architecture graph, 6-table database schema, 13 REST API endpoints, and 10 UI screenshots.

### 2. [PharmaCare — Pharmacy Stock & Sales Management System](https://github.com/sanjay29-dev/pharmacare_repo)
- **Stack:** Java, Spring Boot, Spring Data JPA, Hibernate, MySQL, React (Vite), Axios, Tailwind CSS
- **Highlights:** FEFO (First-Expiry-First-Out) automated stock allocation, real-time inventory tracking, batch-level expiry management, sales billing, and analytics dashboards.
- **Deep Dive:** Case study page (`/projects/pharmacare`) with full database architecture, API contract table, and 8 verified application screenshots.

---

## 🛠️ Portfolio Tech Stack

- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS + Custom Design Tokens (Dark Slate Glassmorphism)
- **Animations:** Framer Motion (respects `prefers-reduced-motion`)
- **Document Rendering:** Shared PDF.js HTML5 Canvas viewer (`CleanPdfViewer`) for high-DPI, toolbar-free on-page resume and certificate previews
- **Icons:** Lucide React
- **Routing:** React Router v6
- **Typography:** Space Grotesk, Inter, JetBrains Mono (self-hosted via `@fontsource`)
- **Form Forwarding:** Formspree (`xvkadvey`) -> direct email alerts
- **Hosting & SEO:** Vercel SPA deployment (`vercel.json`), `robots.txt`, and `sitemap.xml`

---

## ✨ Key Portfolio Sections & Features

1. **Hero & On-Page Resume Viewer:** Direct preview modal (`ResumeModal`) triggered from both the top navigation bar and Hero/mobile buttons, rendering the resume cleanly via PDF.js without browser editing toolbars alongside a one-click PDF download button.
2. **Recruiter Snapshot Strip:** High-level summary of stack, projects, training, and academic background.
3. **Interactive Skills Ecosystem:** SVG graph mapping dependencies between Java, Spring Boot, Security, JPA, Hibernate, React, MySQL, and AWS with responsive category breakdown cards.
4. **Featured Projects Grid:** Side-by-side presentation of Hireloop and PharmaCare linking to in-depth engineering case studies.
5. **Experience & Training:** Chronological timeline covering 9-month Java Full Stack training at QSpiders, 3-month online Java development internship at Internshala, and 2-month on-campus AWS Cloud Computing Internship with HTGE (EC2, IAM, S3, load balancing, and instance backups).
6. **Education:** Dedicated section detailing B.Tech in Information Technology from Adhiparasakthi College of Engineering (APCE), `CGPA 8.12 / 10`, and core CS coursework.
7. **Certifications & Training:** Interactive 3-column grid of 6 verified technical credentials with an in-modal, toolbar-free high-DPI document viewer (`CertificateModal`) featuring Internshala, Infosys Springboard, HTGE, and NPTEL Big Data Computing.
8. **Contact:** Live form integrated with Formspree with instant email alerts and direct one-click email copying.

---

## 📁 Project Structure

```text
portfolio/
├─ public/
│  ├─ favicon.svg
│  ├─ og-image.png                        # Social share preview card
│  ├─ robots.txt                          # Search crawler rules & sitemap reference
│  ├─ sitemap.xml                         # Indexed routes for Vercel deployment
│  └─ media/
│     ├─ profile/photo.png                # Developer photo
│     ├─ resume/Sanjay_V_Resume.pdf       # Public portfolio resume PDF
│     ├─ certificates/                    # Verified credential documents
│     │  ├─ core-java-ai.pdf              # Internshala Core Java
│     │  ├─ infosys-spring-basics.pdf     # Infosys Spring 5 Basics
│     │  ├─ infosys-spring-data-jpa.pdf   # Infosys Spring Data JPA
│     │  ├─ infosys-spring-rest.pdf       # Infosys Spring REST
│     │  ├─ htge-cloud-internship.jpg     # HTGE Cloud Internship
│     │  └─ nptel-big-data-computing.pdf  # NPTEL Big Data Computing (Elite 82%)
│     └─ projects/
│        ├─ hireloop/                     # 10 Hireloop UI screenshots
│        └─ pharmacare/                   # 8 PharmaCare UI screenshots
├─ src/
│  ├─ context/
│  │  └─ ResumeContext.jsx                # Global resume modal state provider
│  ├─ data/                               # Decoupled content store
│  │  ├─ profile.js                       # Bio, hero text, resume path, Formspree ID
│  │  ├─ skills.js                        # Tech skills & SVG ecosystem nodes/edges
│  │  ├─ projects.js                      # Full case studies (Hireloop & PharmaCare)
│  │  ├─ experience.js                    # Industry experience & education records
│  │  └─ certifications.js                # 6 verified credentials with verification links
│  ├─ components/
│  │  ├─ layout/                          # Navbar, Footer, MobileMenu, PageTransition
│  │  ├─ ui/                              # Button, Card, Tag, Tooltip, SectionHeading, Reveal, CleanPdfViewer, ResumeModal, CertificateModal
│  │  ├─ sections/                        # Hero, Snapshot, About, Skills, FeaturedProjects, Timeline, Education, Certifications, Contact
│  │  ├─ features/                        # SkillsGraph, CursorGlow, GithubStats
│  │  └─ project/                         # ArchitectureExplorer, Gallery, Lightbox, FeatureGrid, ApiTable, DatabaseDesign
│  ├─ pages/                              # Home.jsx, ProjectDetail.jsx, NotFound.jsx
│  ├─ hooks/                              # useScrollSpy.js
│  ├─ lib/                                # github.js
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

## 👨‍💻 Developer

**Sanjay V**  
Java Full Stack Developer — Chennai, Tamil Nadu, India  
- **Portfolio:** [sanjay-portfolio-mu.vercel.app](https://sanjay-portfolio-mu.vercel.app)  
- **GitHub:** [sanjay29-dev](https://github.com/sanjay29-dev)  
- **LinkedIn:** [sanjay-v-a47452374](https://linkedin.com/in/sanjay-v-a47452374)  
- **Email:** [wilsonsanjay29@gmail.com](mailto:wilsonsanjay29@gmail.com)
