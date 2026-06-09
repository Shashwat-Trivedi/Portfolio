export const navItems = [
  ["home", "home"],
  ["about", "about"],
  ["work", "work"],
  ["services", "services"],
  ["experience", "writing"],
  ["reach out", "contact"],
] as const;

export const sections = [
  { id: "home", path: "init", mode: "EXPLORING" },
  { id: "problem", path: "focus", mode: "READING" },
  { id: "about", path: "who_i_am", mode: "READING" },
  { id: "work", path: "proof", mode: "READING" },
  { id: "services", path: "builds", mode: "READING" },
  { id: "writing", path: "experience", mode: "READING" },
  { id: "proof", path: "journey", mode: "READING" },
  { id: "contact", path: "start", mode: "EXPLORING" },
  { id: "footer", path: "start", mode: "VISITOR" },
] as const;

export type Section = (typeof sections)[number];

export const rainColumns = [
  { left: "5%", delay: "-1.2s", duration: "4.2s", size: "14px", opacity: 0.09, chars: ["人", "エ", "ネ", "7", "*", "3"] },
  { left: "14%", delay: "-2.5s", duration: "5.5s", size: "18px", opacity: 0.08, chars: ["ケ", "7", "3", "人", "ヌ", "*"] },
  { left: "23%", delay: "-0.6s", duration: "3.5s", size: "12px", opacity: 0.06, chars: ["0", "1", "x", "y", "z", "7"] },
  { left: "32%", delay: "-3.8s", duration: "4.7s", size: "16px", opacity: 0.07, chars: ["*", "3", "人", "エ", "ネ", "1"] },
  { left: "41%", delay: "-0.2s", duration: "4.0s", size: "20px", opacity: 0.1, chars: ["ル", "エ", "ネ", "7", "*", "3"] },
  { left: "50%", delay: "-1.9s", duration: "5.2s", size: "13px", opacity: 0.07, chars: ["ネ", "*", "3", "0", "1", "タ"] },
  { left: "59%", delay: "-3.1s", duration: "3.7s", size: "18px", opacity: 0.08, chars: ["7", "3", "人", "エ", "ホ", "y"] },
  { left: "68%", delay: "-1.0s", duration: "6.0s", size: "15px", opacity: 0.06, chars: ["王", "子", "中", "大", "小", "一"] },
  { left: "77%", delay: "-2.3s", duration: "4.5s", size: "21px", opacity: 0.1, chars: ["*", "3", "0", "1", "オ", "z"] },
  { left: "86%", delay: "-4.1s", duration: "5.0s", size: "14px", opacity: 0.08, chars: ["人", "シ", "ネ", "7", "*", "3"] },
  { left: "93%", delay: "-3.4s", duration: "5.7s", size: "16px", opacity: 0.06, chars: ["0", "1", "x", "7", "*", "3"] },
  { left: "46%", delay: "-0.9s", duration: "4.6s", size: "15px", opacity: 0.04, chars: ["エ", "ネ", "7", "x", "y", "z"] },
] as const;

export const problemCards = [
  {
    title: "Full Stack Development",
    text: "Building modern applications using React, Next.js, TypeScript, Node.js, and databases.",
  },
  {
    title: "Backend Engineering",
    text: "Designing APIs, authentication systems, scalable architectures, and efficient data flows.",
  },
  {
    title: "AI & Automation",
    text: "Exploring AI-powered workflows, intelligent systems, and practical automation tools.",
  },
  {
    title: "Problem Solving",
    text: "Strengthening software engineering fundamentals through projects, internships, and continuous learning.",
  },
];

export const projects = [
  {
    title: "Cloud Club",
    meta: "AI-Powered Salesforce Talent Marketplace",
    year: "2026",
    text: "Contributed to a production-grade platform that uses AI to connect businesses with pre-vetted Salesforce consultants. Worked within a large-scale monorepo architecture involving Next.js, Express, TypeScript, Docker, and AI-powered matching systems while following professional development practices.",
    tags: ["Next.js", "TypeScript", "Express", "Docker", "Turborepo"],
    shot: "recorder",
  },
  {
    title: "Offline Drone Monitoring System",
    meta: "Security & Drone Telemetry",
    year: "2026",
    text: "A secure offline drone tracking solution designed for environments where internet connectivity is restricted. The system receives telemetry data from Raspberry Pi devices and visualizes drone information through an Electron-based desktop application, making it suitable for defense and high-security use cases.",
    tags: ["Electron", "Node.js", "Raspberry Pi", "JavaScript"],
    shot: "config",
    active: true,
  },
  {
    title: "CleanTrack",
    meta: "Smart Waste Management Tracking Platform",
    year: "2025",
    text: "A comprehensive smart waste management platform that connects citizens, sanitation workers, and administrators through a transparent ecosystem. The system enables issue reporting, GPS-verified cleaning records, real-time worker tracking, photo verification, and analytics dashboards to improve urban waste management accountability.",
    tags: ["React", "TypeScript", "Supabase", "Mapbox", "TailwindCSS"],
    shot: "map",
  }

] as const;

export const services = [
  {
    title: "Full Stack Applications",
    text: "Building responsive and scalable web applications from frontend interfaces to backend systems.",
    color: "blue",
  },
  {
    title: "Backend Systems",
    text: "Creating APIs, database schemas, authentication flows, and server-side architectures.",
    color: "orange",
  },
  {
    title: "Technical Solutions",
    text: "Developing practical software solutions for real-world challenges using modern technologies.",
    color: "black",
  },
] as const;

export const btnBase = "btn-fill inline-flex items-center justify-center min-h-[48px] px-6 border border-[rgba(25,24,24,0.36)] font-mono text-sm tracking-[0.04em] transition-[transform,border-color,background-color,color] duration-[240ms]";
export const btnPrimary = `${btnBase} btn-primary-fill bg-blue text-white border-blue`;
export const btnGhost = `${btnBase} btn-ghost-fill bg-transparent text-ink`;
export const btnPrimaryLarge = "btn-fill btn-primary-fill inline-flex items-center justify-center min-h-[56px] min-w-[260px] px-8 bg-blue text-white border border-blue font-mono text-base tracking-[0.04em] transition-[transform,border-color,background-color,color] duration-[240ms]";

export const delays = ["", "delay-100", "delay-200", "delay-300", "delay-300"] as const;
