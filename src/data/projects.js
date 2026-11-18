export const projectsData = [
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
