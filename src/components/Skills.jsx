import { useState } from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiVercel,
} from "react-icons/si";
import { HiOutlineCode, HiOutlineServer, HiOutlineTerminal } from "react-icons/hi";

const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend", icon: HiOutlineCode },
  { id: "backend", name: "Backend & DB", icon: HiOutlineServer },
  { id: "tools", name: "Tools & Deploy", icon: HiOutlineTerminal },
];

const skillsData = [
  {
    name: "HTML5",
    category: "frontend",
    icon: FaHtml5,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
    level: "Advanced",
    description: "Semantic Elements, Forms, Audio/Video, SEO-Friendly Structure",
  },
  {
    name: "CSS3 & Modern Layouts",
    category: "frontend",
    icon: FaCss3Alt,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    level: "Advanced",
    description: "Flexbox, CSS Grid, Transitions, Keyframe Animations",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/20",
    level: "Proficient",
    description: "Utility classes, Flex/Grid layouts, Dark mode, Custom themes",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: FaJsSquare,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
    level: "Proficient",
    description: "Async/Await, DOM manipulation, Array methods, ES6 Modules",
  },
  {
    name: "React.js",
    category: "frontend",
    icon: FaReact,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    level: "Proficient",
    description: "Hooks, Router, Context API, Component Lifecycle",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: SiNextdotjs,
    color: "text-white",
    bg: "bg-slate-800 border-slate-700",
    level: "Comfortable",
    description: "App Router, Server Components, SSR, API Routes",
  },
  {
    name: "Node.js (Basics)",
    category: "backend",
    icon: FaNodeJs,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    level: "Familiar",
    description: "Server architecture, Event loop, NPM packages",
  },
  {
    name: "Express.js (Basics)",
    category: "backend",
    icon: HiOutlineServer,
    color: "text-slate-300",
    bg: "bg-slate-800 border-slate-700",
    level: "Familiar",
    description: "Routing, Middleware, RESTful API endpoints",
  },
  {
    name: "MongoDB (CRUD)",
    category: "backend",
    icon: SiMongodb,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    level: "Familiar",
    description: "Collections, Documents, Query filters, Aggregations",
  },
  {
    name: "Git & GitHub",
    category: "tools",
    icon: FaGitAlt,
    color: "text-orange-500",
    bg: "bg-orange-500/10 border-orange-500/20",
    level: "Proficient",
    description: "Branching, Pull Requests, Merge conflicts, Versioning",
  },
  {
    name: "Vercel & Netlify",
    category: "tools",
    icon: SiVercel,
    color: "text-white",
    bg: "bg-slate-800 border-slate-700",
    level: "Proficient",
    description: "CI/CD auto-deployments, Custom domains, Environment variables",
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
          <HiOutlineCode className="text-sm" />
          <span>Technical Arsenal</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Skills</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
          The technologies, libraries, and developer tools I leverage to build fast, responsive, and delightful web applications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer backdrop-blur-md ${
              activeTab === cat.id
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105 border border-blue-500"
                : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-blue-500/40 hover:text-blue-400 hover:bg-slate-900"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 shadow-2xl hover:border-blue-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border text-2xl ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform shadow-inner`}
                  >
                    <Icon />
                  </div>

                  <span
                    className={`text-[11px] font-semibold px-3 py-1 rounded-full border backdrop-blur-md ${
                      skill.level === "Advanced"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : skill.level === "Proficient"
                        ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                        : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base mb-1 group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[11px] text-slate-400 font-medium capitalize">
                  {skill.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

Skills.displayName = "Skills";
export default Skills;