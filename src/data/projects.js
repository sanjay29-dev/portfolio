export const projectsData = [
  {
    slug: "hireloop",
    title: "Hireloop",
    subtitle: "Job Discovery & Recruitment Lifecycle Platform",
    tagline: "Unifies job seekers, recruiters, and administrators through role-based access control, safe cascade deletions, multi-currency compensation, and real-time applicant tracking.",
    pitch: "A full-stack recruitment platform built with Spring Boot 3, React 18, and MySQL. Features strict 3-tier Role-Based Access Control (CANDIDATE, EMPLOYER, ADMIN), localized dual-currency salary logic (₹ LPA / $k USD), safe foreign-key cascade deletions, authenticated PDF resume management, and dynamic category tracking.",
    problem: "Recruitment portals often suffer from rigid permission models, foreign-key deletion lockups from orphaned applicant records, and unoptimized candidate evaluation loops that leave applicants disconnected.",
    solution: "A complete multi-role platform that cleanly isolates permissions with Spring Security & JWT, enforces transactional cascade cleanup routines during job deletion, provides interactive recruitment pipeline stages with PDF resume downloads, and empowers candidates with 1-click applications.",
    role: "Sole Developer — Designed the 6-table relational MySQL schema, built the Spring Boot 3 REST API backend with Spring Security 6 & JWT, implemented the custom cascade deletion and currency formatting utilities, and developed the glassmorphic dark-themed React 18 frontend.",
    duration: "Full-Stack Project (Nov 2026 – Present)",
    tags: ["Java 17", "Spring Boot 3", "Spring Security", "Spring Data JPA", "Hibernate", "React 18", "Tailwind CSS", "MySQL", "JWT", "Axios"],
    github: "https://github.com/sanjay29-dev/hireloop",
    liveDemo: null,
    video: {
      type: "youtube",
      src: "",
      poster: "/media/projects/hireloop/01-landing-page.png"
    },
    screenshots: [
      {
        src: "/media/projects/hireloop/01-landing-page.png",
        caption: "Landing Page & Discovery — Dark glassmorphic interface with dynamic category opening counts and quick keyword search."
      },
      {
        src: "/media/projects/hireloop/02-find-jobs.png",
        caption: "Job Discovery Engine — Multi-parameter filtering by domain, job type, and Indian tech hub location chips (Bangalore, Hyderabad, Pune, Remote)."
      },
      {
        src: "/media/projects/hireloop/03-job-details.png",
        caption: "Job Details & 1-Click Apply — Detailed technical requirements, localized salary ranges (₹ LPA / $k), skills tags, and instant application flow."
      },
      {
        src: "/media/projects/hireloop/04-candidate-profile.png",
        caption: "Candidate Profile & Resume Hub — Centralized management for headline, technical skills, education, career experience, and default PDF resume."
      },
      {
        src: "/media/projects/hireloop/05-my-applications.png",
        caption: "Candidate Application Tracker — Real-time status badges tracking submissions from Applied to Shortlisted, Interview, and Selected."
      },
      {
        src: "/media/projects/hireloop/06-employer-dashboard.png",
        caption: "Employer Command Center — Operational metrics tracking total listings, active jobs, and 5-stage applicant pipeline conversion."
      },
      {
        src: "/media/projects/hireloop/07-manage-jobs.png",
        caption: "Job Postings Management — Live applicant counters, editing tools, status toggling (Active/Closed), and safe cascade deletion."
      },
      {
        src: "/media/projects/hireloop/08-applicant-pipeline.png",
        caption: "Interactive Applicant Pipeline — Recruiter candidate evaluation with PDF resume downloads, full profile preview modal, and status dropdowns."
      },
      {
        src: "/media/projects/hireloop/09-post-job.png",
        caption: "Job Creation Form — Flexible compensation configuration, skills tag chip generation, and application deadline scheduling."
      },
      {
        src: "/media/projects/hireloop/10-admin-dashboard.png",
        caption: "Administrator Control Center — Platform-wide analytics, employer company verification queue, job listing moderation, and user account controls."
      }
    ],
    features: [
      {
        title: "3-Tier Role-Based Access Control (RBAC)",
        description: "Stateless JWT authentication enforcing strict security filters and method-level @PreAuthorize permissions across CANDIDATE, EMPLOYER, and ADMIN roles.",
        icon: "ShieldCheck"
      },
      {
        title: "Safe Cascade Deletion Engine",
        description: "Transactional cleanup routines in ApplicationRepository and SavedJobRepository ensuring job removals safely cascade to child applications and bookmarks without foreign key conflicts.",
        icon: "Trash2"
      },
      {
        title: "Interactive Applicant Pipeline",
        description: "5-stage recruitment lifecycle (APPLIED ➔ SHORTLISTED ➔ INTERVIEW ➔ SELECTED / REJECTED) with instant status synchronization between recruiters and candidates.",
        icon: "Users"
      },
      {
        title: "Localized Dual-Currency Formatting",
        description: "Intelligent formatSalary utility dynamically formatting compensation in Indian Lakhs (₹ LPA) for domestic openings and thousands ($k/yr) for international positions.",
        icon: "Coins"
      },
      {
        title: "Secure PDF Resume Management",
        description: "Authenticated file upload and streaming endpoints allowing candidates to attach tailored resumes and recruiters to download submissions securely.",
        icon: "FileText"
      },
      {
        title: "Admin Moderation & Company Verification",
        description: "Governance workflow with pending company review queues, non-destructive employer suspension, and self-suspension safeguards.",
        icon: "Lock"
      }
    ],
    architecture: {
      nodes: [
        {
          id: "ui",
          label: "React 18 Client",
          role: "Glassmorphic Frontend & Routing",
          tech: "React 18, React Router v6, Tailwind CSS, Framer Motion, Axios",
          files: ["LandingPage.jsx", "EmployerDashboard.jsx", "JobsPage.jsx", "api.js"],
          example: "Manages role-specific views, client-side JWT token storage, and dynamic API requests with Axios interceptors"
        },
        {
          id: "controller",
          label: "REST Controllers",
          role: "API Gateway & RBAC Guards",
          tech: "Spring Boot 3.3.5, Spring Security 6",
          files: ["AuthController.java", "JobController.java", "EmployerController.java", "AdminController.java"],
          example: "Validates incoming DTOs, extracts authenticated user context from SecurityContextHolder, and routes requests"
        },
        {
          id: "service",
          label: "Business Service Layer",
          role: "Domain Logic & Orchestration",
          tech: "Spring @Service, @Transactional",
          files: ["JobService.java", "ApplicationService.java", "EmployerService.java", "AdminService.java"],
          example: "Enforces employer ownership checks, updates applicant pipeline stages, and triggers cascade deletions"
        },
        {
          id: "repo",
          label: "Data Access Layer",
          role: "JPA & Derived Queries",
          tech: "Spring Data JPA, Hibernate ORM",
          files: ["JobRepository.java", "ApplicationRepository.java", "CompanyRepository.java", "UserRepository.java"],
          example: "Performs query derivations, pagination/sorting specifications, and custom @Modifying JPQL deletions"
        },
        {
          id: "db",
          label: "MySQL Relational DB",
          role: "Persistent Storage & Integrity",
          tech: "MySQL 8.0, InnoDB",
          files: ["schema.sql", "application.properties"],
          example: "Maintains relational referential integrity across 6 entity tables with unique candidate-job constraints"
        }
      ],
      edges: [
        ["ui", "controller"],
        ["controller", "service"],
        ["service", "repo"],
        ["repo", "db"]
      ]
    },
    database: [
      {
        table: "users",
        description: "Core authentication entity storing credentials, BCrypt hashes, roles (ADMIN, EMPLOYER, CANDIDATE), and active status."
      },
      {
        table: "candidate_profiles",
        description: "1-to-1 extension of candidate users storing headline, location, phone, skills, education, experience, and default resume path."
      },
      {
        table: "companies",
        description: "1-to-1 extension of employer users storing company name, website, headquarters, about description, and admin approval status."
      },
      {
        table: "jobs",
        description: "Postings linked to companies with titles, descriptions, skills, job types, salary bounds, currency (INR/USD), and active/closed status."
      },
      {
        table: "applications",
        description: "Candidate job submissions with unique (job_id, candidate_id) constraint, resume PDF path, applied timestamp, and 5-stage status."
      },
      {
        table: "saved_jobs",
        description: "Candidate job bookmarks linking user_id and job_id for quick future reference."
      }
    ],
    api: [
      { method: "POST", path: "/api/auth/login", purpose: "Authenticate user credentials, verify active status, and return JWT token with role claims" },
      { method: "POST", path: "/api/auth/register/candidate", purpose: "Register a candidate user account and initialize profile tracking" },
      { method: "POST", path: "/api/auth/register/employer", purpose: "Register an employer account and queue company for administrative verification" },
      { method: "GET", path: "/api/jobs", purpose: "Search, filter, paginate, and sort active job postings by keyword, location, and job type" },
      { method: "POST", path: "/api/candidate/applications", purpose: "Submit job application with default profile resume or custom uploaded PDF resume" },
      { method: "GET", path: "/api/candidate/applications", purpose: "Track all applications submitted by candidate with real-time status progression badges" },
      { method: "POST", path: "/api/employer/jobs", purpose: "Create a new job posting with compensation ranges, required skills tags, and deadlines" },
      { method: "DELETE", path: "/api/employer/jobs/{id}", purpose: "Safely delete a job posting with automated cascade removal of applications and bookmarks" },
      { method: "GET", path: "/api/employer/jobs/{id}/applicants", purpose: "Retrieve candidate applicants for a specific job with resume links and profile data" },
      { method: "PATCH", path: "/api/employer/applications/{id}/status", purpose: "Progress candidate applicant through recruitment pipeline stages (Shortlisted, Interview, Selected, Rejected)" },
      { method: "GET", path: "/api/employer/dashboard/stats", purpose: "Compute recruiter metrics: total jobs, active jobs, total applicants, and pipeline stage counts" },
      { method: "PATCH", path: "/api/admin/companies/{id}/approve", purpose: "Approve pending employer company registration to unlock job posting privileges" },
      { method: "PATCH", path: "/api/admin/users/{id}/suspend", purpose: "Suspend platform user account with built-in safeguard preventing admin self-suspension" }
    ],
    challenges: [
      "Overcoming foreign key constraint conflicts during job deletion by designing a transactional cascade cleanup pattern in ApplicationRepository and SavedJobRepository.",
      "Implementing strict 3-tier Role-Based Access Control (RBAC) with Spring Security 6 filter chains and stateless JWT authentication.",
      "Building a synchronized applicant tracking lifecycle that updates recruiter KPI metrics and candidate application statuses in real time.",
      "Architecting a dual-currency compensation system supporting Indian Lakhs (₹ LPA) and international USD ($k) across search filters, job cards, and salary inputs."
    ]
  },
  {
    slug: "pharmacare",
    title: "PharmaCare",
    subtitle: "Pharmacy Stock, Expiry & Demand Management System",
    tagline: "Helps pharmacies eliminate stock-outs and expired medicine wastage through automated FEFO tracking, real-time alerts, and demand-driven replenishment.",
    pitch: "A production-grade full-stack pharmacy management system built from scratch with Spring Boot, React.js, and MySQL. Features custom FEFO (First Expiry, First Out) batch allocation logic, proactive expiry auditing, and demand-based reorder calculations.",
    problem: "Pharmacies suffer heavy revenue losses and compliance risks from expired medicines sitting unnoticed on shelves, while manual stock counts fail to alert staff before high-demand medicines run out.",
    solution: "A complete centralized solution featuring batch-level traceability, automated FEFO allocation during billing transactions, real-time low-stock/expiry alerts, and comprehensive purchase, sales, and supplier management.",
    role: "Sole Developer — Designed the 12-table relational MySQL schema, implemented the complete Spring Boot REST API layer with Spring Security & JPA, built the custom FEFO allocator and demand calculator algorithms, and created the responsive React interface.",
    duration: "Full-Stack Project (Jan 2026 – Present)",
    tags: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "React.js", "Axios", "MySQL"],
    github: "https://github.com/sanjay29-dev/pharmacare",
    liveDemo: null,
    video: {
      type: "youtube",
      src: "",
      poster: "/media/projects/pharmacare/dashboard.png"
    },
    screenshots: [
      {
        src: "/media/projects/pharmacare/dashboard.png",
        caption: "Operational Dashboard — Real-time metrics for daily sales, low-stock alerts, near-expiry count, and revenue telemetry."
      },
      {
        src: "/media/projects/pharmacare/inventory.png",
        caption: "Inventory Management — Live tracking across medicine stock, category filters, and safety threshold statuses."
      },
      {
        src: "/media/projects/pharmacare/new-sale.png",
        caption: "New Sale & Billing — Fast counter checkout with automated FEFO batch allocation and live inventory deduction."
      },
      {
        src: "/media/projects/pharmacare/expiry.png",
        caption: "Expiry Management — Categorized monitoring of expired and nearing-expiry batches with actionable audit logs."
      },
      {
        src: "/media/projects/pharmacare/medicines.png",
        caption: "Medicine Catalog — Master records with generic names, category mappings, and manufacturer details."
      },
      {
        src: "/media/projects/pharmacare/purchases.png",
        caption: "Procurement & Suppliers — Inbound stock registration, supplier GSTIN/contact details, and purchase invoices."
      },
      {
        src: "/media/projects/pharmacare/find-medicine.png",
        caption: "Quick Medicine Search — Instant lookup for medicine availability, active batches, and rack locations."
      },
      {
        src: "/media/projects/pharmacare/reports.png",
        caption: "Business Reports — Aggregated sales performance, purchase history, and stock movement analysis."
      }
    ],
    features: [
      {
        title: "Automated FEFO Allocation",
        description: "Custom allocation algorithm in FefoAllocator.java automatically sorts usable batches by expiry date, ensuring the oldest viable medicines are dispensed first.",
        icon: "ShieldAlert"
      },
      {
        title: "Batch-Level Inventory Tracking",
        description: "Tracks individual batch numbers, manufacturing dates, expiry dates, purchase rates, and MRPs for granular stock integrity.",
        icon: "Boxes"
      },
      {
        title: "Early Expiry & Low-Stock Alerts",
        description: "Background rule calculations flag medicines breaching minimum safety thresholds or approaching expiration within 30/60/90 days.",
        icon: "BellRing"
      },
      {
        title: "Demand & Reorder Forecasting",
        description: "DemandCalculator analyzes sales velocity to classify fast/slow-moving inventory and generate proactive restocking recommendations.",
        icon: "TrendingUp"
      },
      {
        title: "Atomic Sales Transactions",
        description: "Spring @Transactional service routines ensure multi-item sales and batch stock decrements execute atomically without race conditions.",
        icon: "Receipt"
      },
      {
        title: "Procurement & Supplier Tracking",
        description: "End-to-end purchasing workflow mapping inbound supplier consignments directly to batch creation and inventory replenishment.",
        icon: "Truck"
      }
    ],
    architecture: {
      nodes: [
        {
          id: "ui",
          label: "React Client",
          role: "User Interface & State",
          tech: "React 18, React Router, Tailwind CSS, Axios",
          files: ["src/pages/NewSale.jsx", "src/pages/Dashboard.jsx", "src/services/api.js"],
          example: "Manages interactive counter carts, triggers asynchronous HTTP requests with JWT Bearer auth"
        },
        {
          id: "controller",
          label: "REST Controllers",
          role: "API Gateway & Request Routing",
          tech: "Spring Boot @RestController, Spring Security",
          files: ["SaleController.java", "MedicineController.java", "ExpiryController.java", "DemandController.java"],
          example: "Validates incoming DTOs, enforces role permissions (@PreAuthorize), and returns standard ResponseEntity"
        },
        {
          id: "service",
          label: "Domain Service Layer",
          role: "Business Rules & Algorithms",
          tech: "Spring @Service, @Transactional, Custom Algorithms",
          files: ["FefoAllocator.java", "SaleService.java", "DemandCalculator.java", "ExpiryService.java"],
          example: "Executes FEFO allocation algorithm across viable batches and computes reorder thresholds"
        },
        {
          id: "repo",
          label: "Data Access Layer",
          role: "ORM & Query Derivation",
          tech: "Spring Data JPA, Hibernate",
          files: ["MedicineRepository.java", "BatchRepository.java", "SaleRepository.java", "StockTransactionRepository.java"],
          example: "Executes derived queries, pagination, and JPQL joins across relational tables"
        },
        {
          id: "db",
          label: "MySQL Relational DB",
          role: "ACID Persistent Storage",
          tech: "MySQL 8.0, InnoDB Engine",
          files: ["schema.sql", "backdated_sales.sql"],
          example: "Maintains relational referential integrity across 12 normalized entity tables"
        }
      ],
      edges: [
        ["ui", "controller"],
        ["controller", "service"],
        ["service", "repo"],
        ["repo", "db"]
      ]
    },
    database: [
      {
        table: "medicines",
        description: "Master catalog containing brand names, generic formulations, category relations, and minimum stock threshold limits."
      },
      {
        table: "batches",
        description: "Granular batch units with unique batch numbers, expiry dates, purchase rates, MRP, and remaining quantities."
      },
      {
        table: "categories",
        description: "Pharmacological classifications (e.g. Antibiotics, Analgesics, Antipyretics) for structured categorization."
      },
      {
        table: "suppliers",
        description: "Supplier contact registries, GSTIN credentials, and historical consignment links."
      },
      {
        table: "purchases",
        description: "Inbound stock procurement transactions linked to suppliers and invoice metadata."
      },
      {
        table: "purchase_items",
        description: "Line-item breakdown of inbound consignments mapping directly to newly created batch records."
      },
      {
        table: "sales",
        description: "Outbound customer transactions with invoice numbers, payment modes, and totals."
      },
      {
        table: "sale_items",
        description: "Line items linking sales to exact batch reductions and unit prices."
      },
      {
        table: "stock_transactions",
        description: "Comprehensive audit ledger recording every inventory IN/OUT movement with timestamps."
      },
      {
        table: "pharmacy_settings",
        description: "Global store configurations, tax settings, and invoice branding parameters."
      },
      {
        table: "inventory_settings",
        description: "Configurable alert thresholds for near-expiry days (30/60/90) and minimum safety buffers."
      },
      {
        table: "users",
        description: "Authentication and role-based access control records (ADMIN, STAFF)."
      }
    ],
    api: [
      { method: "GET", path: "/api/medicines", purpose: "Fetch paginated/filtered list of medicines with search and category queries" },
      { method: "POST", path: "/api/medicines", purpose: "Register a new medicine profile with safety threshold parameters" },
      { method: "POST", path: "/api/sales", purpose: "Execute a sale transaction, automatically invoking FefoAllocator and updating stock" },
      { method: "GET", path: "/api/sales", purpose: "Retrieve historical sales orders with date range and status filters" },
      { method: "GET", path: "/api/expiry/expiring-soon", purpose: "List all batches approaching shelf-life expiration within configured threshold days" },
      { method: "GET", path: "/api/expiry/expired", purpose: "Identify expired batches requiring immediate shelf removal and quarantine" },
      { method: "GET", path: "/api/demand/reorder", purpose: "Retrieve intelligent replenishment recommendations based on stock velocity" },
      { method: "GET", path: "/api/demand/fast-moving", purpose: "Analyze fastest-selling medicines for inventory priority optimization" },
      { method: "POST", path: "/api/purchases", purpose: "Record supplier stock procurement and automatically increment batch inventory" },
      { method: "GET", path: "/api/dashboard/summary", purpose: "Provide live KPIs: daily sales, low-stock count, expiring batches, and revenue" }
    ],
    challenges: [
      "Designing a deterministic FEFO (First Expiry, First Out) batch allocation algorithm in FefoAllocator that handles partial quantity fulfillment across multiple batch dates.",
      "Maintaining transactional consistency (@Transactional) during multi-item sales to prevent race conditions and synchronize batch deductions with the stock_transactions audit ledger.",
      "Building a dynamic demand calculation service to separate fast-moving and slow-moving medicines without straining database I/O.",
      "Structuring responsive React components and state management for quick counter checkout with real-time stock feedback."
    ]
  }
];
