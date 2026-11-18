import { profileData } from './profile.js';
import { skillsData } from './skills.js';
import { projectsData } from './projects.js';
import { experienceData } from './experience.js';
import { certificationsData } from './certifications.js';

export const terminalCommands = {
  help: () => [
    "Available commands:",
    "  about        - View background summary and profile overview",
    "  skills       - List technical skills and core stack",
    "  projects     - View featured projects (PharmaCare)",
    "  experience   - Display training & internship timeline",
    "  education    - Display academic background",
    "  certs        - Show professional certifications",
    "  contact      - Display contact channels (Email, LinkedIn, GitHub)",
    "  resume       - Download Sanjay's web resume",
    "  github       - Open GitHub profile",
    "  linkedin     - Open LinkedIn profile",
    "  clear        - Clear terminal screen",
    "  exit         - Close the terminal"
  ],

  about: () => [
    `${profileData.name} — ${profileData.title}`,
    `Location: ${profileData.location}`,
    `Status: ${profileData.status}`,
    "",
    ...profileData.about.paragraphs
  ],

  skills: () => {
    const lines = ["TECHNICAL SKILLS & COMPETENCIES:"];
    skillsData.categories.forEach(cat => {
      lines.push(`\n[${cat.name}]`);
      const list = cat.skills.map(s => `${s.name}${s.inProject ? ' (in ' + s.project + ')' : ''}`).join(", ");
      lines.push(`  ${list}`);
    });
    return lines;
  },

  projects: () => {
    const lines = ["FEATURED PROJECTS:"];
    projectsData.forEach(p => {
      lines.push(`\n* ${p.title} - ${p.subtitle}`);
      lines.push(`  Tech: ${p.tags.join(", ")}`);
      lines.push(`  Summary: ${p.tagline}`);
      lines.push(`  Route: /projects/${p.slug}`);
    });
    return lines;
  },

  experience: () => {
    const lines = ["TRAINING & EXPERIENCE:"];
    experienceData.filter(e => e.type !== "education").forEach(e => {
      lines.push(`\n* ${e.title} | ${e.organization}`);
      lines.push(`  Period: ${e.period} (${e.duration})`);
      lines.push(`  ${e.description}`);
    });
    return lines;
  },

  education: () => {
    const lines = ["EDUCATION:"];
    experienceData.filter(e => e.type === "education").forEach(e => {
      lines.push(`* ${e.title}`);
      lines.push(`  ${e.organization} (${e.period})`);
      lines.push(`  ${e.highlights.join(" | ")}`);
    });
    return lines;
  },

  certs: () => {
    const lines = ["CERTIFICATIONS:"];
    certificationsData.forEach(c => {
      lines.push(`* ${c.title} — ${c.issuer} (${c.year})`);
    });
    return lines;
  },

  contact: () => [
    "CONTACT INFORMATION:",
    `  Email:    ${profileData.email}`,
    `  LinkedIn: ${profileData.linkedin}`,
    `  GitHub:   ${profileData.github}`,
    `  Location: ${profileData.location}`,
    "  (Fastest response via Email)"
  ],

  resume: () => [
    `Resume download available at: ${profileData.resumePath}`
  ],

  github: () => {
    window.open(profileData.github, "_blank");
    return [`Opening ${profileData.github}...`];
  },

  linkedin: () => {
    window.open(profileData.linkedin, "_blank");
    return [`Opening ${profileData.linkedin}...`];
  }
};
