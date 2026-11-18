export const projectsData = [
  {
    slug: "pharmacare",
    title: "PharmaCare",
    subtitle: "Pharmacy Stock, Expiry and Demand Management System",
    tagline: "Helps pharmacies avoid stock-outs and expired medicines with batch-level tracking and demand-based reordering.",
    pitch: "A full-stack pharmacy management system built from scratch to solve inventory shrinkage and expired medicine wastage through automated FEFO tracking and real-time stock alerts.",
    problem: "Pharmacies lose significant revenue from expired stock and run out of fast-selling medicines when inventory is tracked manually or with rudimentary spreadsheets.",
    solution: "A robust full-stack solution featuring batch-level tracking, automated First Expiry First Out (FEFO) dispensing logic, threshold-based reordering alerts, and comprehensive purchase/sales management.",
    role: "Sole Developer — Designed the normalized MySQL schema, implemented Spring Boot REST APIs with Spring Data JPA/Hibernate, and engineered the responsive React interface.",
    duration: "Academic & Training Capstone (2026)",
    tags: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "React", "Axios", "MySQL"],
    github: "https://github.com/sanjay-2004-dev",
    liveDemo: null,
    video: {
      type: "youtube",
      src: "",
      poster: "/media/projects/pharmacare/poster.png"
    },
    screenshots: [
      {
        src: "/media/projects/pharmacare/screenshot-1.png",
        caption: "Inventory Dashboard — Real-time overview of active batches, stock levels, and alert status"
      },
      {
        src: "/media/projects/pharmacare/screenshot-2.png",
        caption: "FEFO Batch Tracking — Automated sorting by expiry date ensuring oldest stock dispenses first"
      },
      {
        src: "/media/projects/pharmacare/screenshot-3.png",
        caption: "Demand & Reorder Panel — Automated suggestions for low-stock medicines based on sales velocity"
      }
    ],
    features: [
      {
        title: "Batch-Level Inventory Tracking",
        description: "Monitors each medicine batch with individual manufacturing dates, expiry dates, supplier details, and quantity counts.",
        icon: "Boxes"
      },
      {
        title: "FEFO Stock Allocation",
        description: "First Expiry, First Out business logic ensures batches expiring soonest are allocated first during sale generation.",
        icon: "ShieldAlert"
      },
      {
        title: "Automated Expiry & Low-Stock Alerts",
        description: "Proactive warnings for medicines reaching critical shelf life or minimum threshold levels before outages occur.",
        icon: "BellRing"
      },
      {
        title: "Purchasing & Supplier Management",
        description: "Tracks incoming consignments from verified suppliers and automatically updates batch stock figures upon receipt.",
        icon: "Truck"
      },
      {
        title: "Sales & Invoicing Workflow",
        description: "Fast counter billing with real-time stock deductions and instant invoice generation.",
        icon: "Receipt"
      },
      {
        title: "Demand-Based Reorder Suggestions",
        description: "Analyzes fast-moving inventory to forecast replenishment needs and reduce inventory downtime.",
        icon: "TrendingUp"
      }
    ],
    architecture: {
      nodes: [
        {
          id: "ui",
          label: "React Client",
          role: "User Interface",
          tech: "React 18, Axios, Tailwind CSS",
          files: ["src/pages/Inventory.jsx", "src/services/api.js"],
          example: "Renders batch tables, handles responsive forms, triggers API requests via Axios"
        },
        {
          id: "controller",
          label: "REST Controllers",
          role: "API Gateway & Request Routing",
          tech: "Spring Boot @RestController",
          files: ["MedicineController.java", "BatchController.java", "SaleController.java"],
          example: "Validates incoming DTOs, maps HTTP routes (/api/v1/medicines), returns ResponseEntity"
        },
        {
          id: "service",
          label: "Business Service Layer",
          role: "Domain Logic & Rule Execution",
          tech: "Spring @Service, Transaction Management",
          files: ["MedicineService.java", "BatchAllocationService.java"],
          example: "Applies FEFO algorithm to select candidate batches for outgoing sales orders"
        },
        {
          id: "repo",
          label: "Data Access Layer",
          role: "Object-Relational Mapping & Query Execution",
          tech: "Spring Data JPA, Hibernate ORM",
          files: ["MedicineRepository.java", "BatchRepository.java"],
          example: "Queries database using derived method names and custom JPQL queries"
        },
        {
          id: "db",
          label: "MySQL Relational DB",
          role: "Persistent Storage",
          tech: "MySQL 8.0, InnoDB Engine",
          files: ["schema.sql"],
          example: "Enforces foreign key constraints between medicines, batches, purchases, and sales"
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
        description: "Master record of medicines, generic names, categories, and safety thresholds"
      },
      {
        table: "batches",
        description: "Individual batch units with batch number, purchase price, MRP, expiry date, and quantity"
      },
      {
        table: "suppliers",
        description: "Supplier contact information, GSTIN, and consignment history"
      },
      {
        table: "purchases",
        description: "Inbound stock procurement transactions linked to supplier and batch records"
      },
      {
        table: "sales",
        description: "Outbound customer transactions with line items tied to specific batch deductions"
      }
    ],
    api: [
      { method: "GET", path: "/api/v1/medicines", purpose: "Fetch list of all catalogued medicines with current total stock" },
      { method: "POST", path: "/api/v1/medicines", purpose: "Register a new medicine profile into the database" },
      { method: "GET", path: "/api/v1/batches/expiring", purpose: "Retrieve batches nearing expiry within the configured threshold days" },
      { method: "POST", path: "/api/v1/sales", purpose: "Execute a sale transaction, applying FEFO batch allocation and reducing inventory" },
      { method: "GET", path: "/api/v1/reorder/suggestions", purpose: "Get inventory items falling below safety stock limits" }
    ],
    challenges: [
      "Implementing strict FEFO (First Expiry, First Out) allocation across multi-batch stock deductions during checkout transactions.",
      "Ensuring database ACID compliance during simultaneous sales and restocking operations to prevent race conditions in batch counts.",
      "Optimizing query performance for real-time expiry and low-stock dashboard alert aggregations."
    ]
  }
];
