export const skillsData = {
  categories: [
    {
      name: "Core & Languages",
      skills: [
        { name: "Java", level: "Core & Advanced", inProject: true, projects: ["Hireloop", "PharmaCare"], note: "Primary language for OOP & back-end logic across applications" },
        { name: "JavaScript", level: "ES6+", inProject: true, projects: ["Hireloop", "PharmaCare"], note: "Client-side interactivity & asynchronous API integration" },
        { name: "SQL", level: "Queries & Schema Design", inProject: true, projects: ["Hireloop", "PharmaCare"], note: "Relational data modeling, foreign keys & complex joins" }
      ]
    },
    {
      name: "Backend Architecture",
      skills: [
        { name: "Spring Boot", level: "Framework", inProject: true, projects: ["Hireloop", "PharmaCare"], note: "RESTful micro-services, dependency injection & application lifecycle" },
        { name: "Spring Security & JWT", level: "Auth & RBAC", inProject: true, projects: ["Hireloop"], note: "Stateless authentication, filter chains & @PreAuthorize security guards" },
        { name: "Spring Data JPA", level: "Data Access", inProject: true, projects: ["Hireloop", "PharmaCare"], note: "Repository pattern, derived queries & custom JPQL operations" },
        { name: "Hibernate", level: "ORM", inProject: true, projects: ["Hireloop", "PharmaCare"], note: "Entity mapping, cascade management & relationship referential integrity" },
        { name: "REST APIs", level: "API Design", inProject: true, projects: ["Hireloop", "PharmaCare"], note: "HTTP status codes, structured JSON payloads & error handling" },
        { name: "Spring MVC", level: "Controller Layer", inProject: false, note: "Learned during training (QSpiders)" },
        { name: "JDBC / Servlets / JSP", level: "Java EE Fundamentals", inProject: false, note: "Learned during training (QSpiders)" },
        { name: "Node.js & Express.js", level: "Runtime & Framework", inProject: false, note: "Learned during training" }
      ]
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "React.js", level: "Components & Hooks", inProject: true, projects: ["Hireloop", "PharmaCare"], note: "Modular component architecture, custom hooks & application state" },
        { name: "Tailwind CSS", level: "Styling & Glassmorphism", inProject: true, projects: ["Hireloop"], note: "Modern dark glassmorphic design systems & responsive utility styling" },
        { name: "Axios", level: "HTTP Client", inProject: true, projects: ["Hireloop", "PharmaCare"], note: "Asynchronous API integration, Bearer tokens & interceptors" },
        { name: "HTML5 & CSS3", level: "Semantic & Responsive", inProject: true, projects: ["Hireloop", "PharmaCare"], note: "Modern responsive web layouts & accessible structures" }
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "MySQL", level: "Relational DB", inProject: true, projects: ["Hireloop", "PharmaCare"], note: "Normalized tables, foreign keys, cascade rules & indexing" },
        { name: "MongoDB Atlas", level: "NoSQL DB", inProject: false, note: "Learned during training" }
      ]
    },
    {
      name: "Cloud & Dev Tools",
      skills: [
        { name: "Git & GitHub", level: "Version Control", inProject: true, projects: ["Hireloop", "PharmaCare"], note: "Branching, atomic commits, pull requests & code review" },
        { name: "Maven", level: "Build Tool", inProject: true, projects: ["Hireloop", "PharmaCare"], note: "Dependency resolution & automated lifecycle builds" },
        { name: "Postman", level: "API Testing", inProject: true, projects: ["Hireloop", "PharmaCare"], note: "Endpoint validation & role-based token testing" },
        { name: "AWS (EC2, S3, IAM)", level: "Cloud Basics", inProject: false, note: "Hands-on during HTGE internship" }
      ]
    }
  ],
  // Graph coordinates for interactive ecosystem
  graphNodes: [
    { id: "java", label: "Java", x: 450, y: 220, category: "core", isCenter: true, inProject: true, projects: ["Hireloop", "PharmaCare"] },
    { id: "spring-boot", label: "Spring Boot", x: 550, y: 220, category: "backend", isCenter: true, inProject: true, projects: ["Hireloop", "PharmaCare"] },
    { id: "security", label: "Spring Security", x: 480, y: 150, category: "backend", inProject: true, projects: ["Hireloop"] },
    { id: "jpa", label: "Spring Data JPA", x: 670, y: 150, category: "backend", inProject: true, projects: ["Hireloop", "PharmaCare"] },
    { id: "hibernate", label: "Hibernate", x: 740, y: 230, category: "backend", inProject: true, projects: ["Hireloop", "PharmaCare"] },
    { id: "rest", label: "REST APIs", x: 560, y: 100, category: "backend", inProject: true, projects: ["Hireloop", "PharmaCare"] },
    { id: "mysql", label: "MySQL", x: 650, y: 310, category: "database", inProject: true, projects: ["Hireloop", "PharmaCare"] },
    { id: "react", label: "React.js", x: 330, y: 150, category: "frontend", inProject: true, projects: ["Hireloop", "PharmaCare"] },
    { id: "javascript", label: "JavaScript", x: 260, y: 230, category: "frontend", inProject: true, projects: ["Hireloop", "PharmaCare"] },
    { id: "axios", label: "Axios", x: 370, y: 80, category: "frontend", inProject: true, projects: ["Hireloop", "PharmaCare"] },
    { id: "sql", label: "SQL", x: 540, y: 340, category: "database", inProject: true, projects: ["Hireloop", "PharmaCare"] },
    { id: "git", label: "Git / GitHub", x: 320, y: 320, category: "tools", inProject: true, projects: ["Hireloop", "PharmaCare"] },
    { id: "maven", label: "Maven", x: 440, y: 350, category: "tools", inProject: true, projects: ["Hireloop", "PharmaCare"] },
    { id: "postman", label: "Postman", x: 660, y: 60, category: "tools", inProject: true, projects: ["Hireloop", "PharmaCare"] },
    { id: "aws", label: "AWS", x: 760, y: 120, category: "cloud", inProject: false }
  ],
  graphEdges: [
    { from: "java", to: "spring-boot" },
    { from: "spring-boot", to: "security" },
    { from: "spring-boot", to: "rest" },
    { from: "spring-boot", to: "jpa" },
    { from: "jpa", to: "hibernate" },
    { from: "hibernate", to: "mysql" },
    { from: "react", to: "axios" },
    { from: "axios", to: "rest" },
    { from: "react", to: "javascript" },
    { from: "java", to: "maven" },
    { from: "rest", to: "postman" },
    { from: "mysql", to: "sql" },
    { from: "spring-boot", to: "aws" }
  ]
};
