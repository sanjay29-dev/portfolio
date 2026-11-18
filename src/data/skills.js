export const skillsData = {
  categories: [
    {
      name: "Core & Languages",
      skills: [
        { name: "Java", level: "Core & Advanced", inProject: true, project: "PharmaCare", note: "Primary language for OOP & back-end logic" },
        { name: "JavaScript", level: "ES6+", inProject: true, project: "PharmaCare", note: "Client-side interactivity & API consumption" },
        { name: "SQL", level: "Queries & Schema Design", inProject: true, project: "PharmaCare", note: "Relational data modelling & queries" }
      ]
    },
    {
      name: "Backend Architecture",
      skills: [
        { name: "Spring Boot", level: "Framework", inProject: true, project: "PharmaCare", note: "RESTful micro-services, dependency injection" },
        { name: "Spring Data JPA", level: "Data Access", inProject: true, project: "PharmaCare", note: "Repository pattern, derived queries" },
        { name: "Hibernate", level: "ORM", inProject: true, project: "PharmaCare", note: "Entity mapping, relationship management" },
        { name: "REST APIs", level: "API Design", inProject: true, project: "PharmaCare", note: "HTTP status codes, structured JSON payloads" },
        { name: "Spring MVC", level: "Controller Layer", inProject: false, note: "Learned during training (QSpiders)" },
        { name: "JDBC / Servlets / JSP", level: "Java EE Fundamentals", inProject: false, note: "Learned during training (QSpiders)" },
        { name: "Node.js & Express.js", level: "Runtime & Framework", inProject: false, note: "Learned during training" }
      ]
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "React.js", level: "Components & Hooks", inProject: true, project: "PharmaCare", note: "Modular component architecture & state" },
        { name: "Axios", level: "HTTP Client", inProject: true, project: "PharmaCare", note: "Asynchronous API integration & interceptors" },
        { name: "HTML5 & CSS3", level: "Semantic & Responsive", inProject: true, project: "PharmaCare", note: "Modern responsive web layouts" }
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "MySQL", level: "Relational DB", inProject: true, project: "PharmaCare", note: "Normalized tables, foreign keys, indexing" },
        { name: "MongoDB Atlas", level: "NoSQL DB", inProject: false, note: "Learned during training" }
      ]
    },
    {
      name: "Cloud & Dev Tools",
      skills: [
        { name: "AWS (EC2, S3, IAM)", level: "Cloud Basics", inProject: false, note: "Hands-on during HTGE internship" },
        { name: "Git & GitHub", level: "Version Control", inProject: true, project: "PharmaCare", note: "Branching, commits, pull requests" },
        { name: "Maven", level: "Build Tool", inProject: true, project: "PharmaCare", note: "Dependency resolution & lifecycle builds" },
        { name: "Postman", level: "API Testing", inProject: true, project: "PharmaCare", note: "Endpoint validation & automated requests" }
      ]
    }
  ],
  // Graph coordinates for interactive ecosystem
  graphNodes: [
    { id: "java", label: "Java", x: 450, y: 220, category: "core", isCenter: true, inProject: true },
    { id: "spring-boot", label: "Spring Boot", x: 550, y: 220, category: "backend", isCenter: true, inProject: true },
    { id: "jpa", label: "Spring Data JPA", x: 670, y: 150, category: "backend", inProject: true },
    { id: "hibernate", label: "Hibernate", x: 740, y: 230, category: "backend", inProject: true },
    { id: "rest", label: "REST APIs", x: 520, y: 110, category: "backend", inProject: true },
    { id: "mysql", label: "MySQL", x: 650, y: 310, category: "database", inProject: true },
    { id: "react", label: "React.js", x: 330, y: 150, category: "frontend", inProject: true },
    { id: "javascript", label: "JavaScript", x: 260, y: 230, category: "frontend", inProject: true },
    { id: "axios", label: "Axios", x: 380, y: 90, category: "frontend", inProject: true },
    { id: "sql", label: "SQL", x: 540, y: 340, category: "database", inProject: true },
    { id: "git", label: "Git / GitHub", x: 320, y: 320, category: "tools", inProject: true },
    { id: "maven", label: "Maven", x: 440, y: 350, category: "tools", inProject: true },
    { id: "postman", label: "Postman", x: 620, y: 70, category: "tools", inProject: true },
    { id: "aws", label: "AWS", x: 760, y: 120, category: "cloud", inProject: false }
  ],
  graphEdges: [
    { from: "java", to: "spring-boot" },
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
