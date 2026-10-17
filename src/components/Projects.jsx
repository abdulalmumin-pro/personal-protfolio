import { Link } from "react-router-dom";
import { HiExternalLink, HiArrowRight, HiOutlineSparkles } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

import bazarDorImg from "../assets/projects/bazar-dor.png";
import bookVibeImg from "../assets/projects/book-vibe.png";
import fitLogImg from "../assets/projects/fit-log.png";

const GITHUB_PROFILE = "https://github.com/abdulalmumin-pro";

const projects = [
  {
    id: 1,
    title: "Bazar Dor",
    category: "E-Commerce",
    description: "A modern commodity market price tracking web application built with Next.js, featuring smooth navigation, daily price updates, category filtering, and responsive UI design.",
    image: bazarDorImg,
    technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Vercel"],
    github: GITHUB_PROFILE,
    live: "https://ph-a7-bazar-dor.vercel.app/",
  },
  {
    id: 2,
    title: "Book Vibe",
    category: "Book Management",
    description: "An intuitive book review and management platform built with React, allowing users to browse books, read reviews, organize reading lists, and explore top titles.",
    image: bookVibeImg,
    technologies: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    github: GITHUB_PROFILE,
    live: "https://next-js-book-vibe-project-q18h-eight.vercel.app/",
  },
  {
    id: 3,
    title: "Fit Log",
    category: "Fitness & Health",
    description: "A comprehensive workout and fitness tracking application built with Next.js to discover exercises, log daily routines, and maintain a consistent health regimen.",
    image: fitLogImg,
    technologies: ["Next.js", "React", "Tailwind CSS", "Context API", "Vercel"],
    github: GITHUB_PROFILE,
    live: "https://ph-a6-fit-log.vercel.app/details/1",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-slate-950 text-slate-100 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
          <HiOutlineSparkles className="text-sm" />
          <span>My Portfolio Projects</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Projects</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
          Explore real-world web applications I built to solve practical problems, demonstrating clean code, modern UI/UX design, and responsive frontend architectures.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-800 shadow-2xl hover:border-blue-500/40 transition-all duration-300 flex flex-col overflow-hidden"
          >
            {/* Card Thumbnail / Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {project.category && (
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-slate-800 shadow-lg">
                  {project.category}
                </span>
              )}
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-2.5">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs font-medium rounded-lg bg-slate-950 text-slate-400 border border-slate-800">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition"
                >
                  <span>Details &amp; Tech</span>
                  <HiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View Source Code on GitHub"
                      className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl border border-slate-800 transition"
                    >
                      <FaGithub className="text-base" />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open Live Demo"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition"
                    >
                      <span>Demo</span>
                      <HiExternalLink className="text-sm" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Github Note */}
      <div className="mt-12 text-center">
        <p className="text-sm text-slate-400">
          Want to see more code and experiments? Check out my{" "}
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-blue-400 hover:underline inline-flex items-center gap-1"
          >
            GitHub profile <HiExternalLink />
          </a>
        </p>
      </div>
    </section>
  );
};

Projects.displayName = "Projects";
export default Projects;