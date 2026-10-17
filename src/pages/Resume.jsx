import { Link } from "react-router-dom";
import {
  HiArrowLeft,
  HiPrinter,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 text-slate-200 font-sans print:bg-white print:py-0 print:px-0 print:text-gray-800">
      {/* Top Action Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl shadow-lg hover:bg-slate-800 hover:text-blue-400 transition"
        >
          <HiArrowLeft className="text-base" /> Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/25 transition cursor-pointer"
          >
            <HiPrinter className="text-base" /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-800 p-8 sm:p-12 print:bg-white print:text-gray-800 print:shadow-none print:border-none print:p-0 print:rounded-none">
        
        {/* Header Section */}
        <header className="border-b border-slate-800 print:border-gray-200 pb-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-gray-900 tracking-tight">
                Abdul Al Mumin
              </h1>
              <p className="text-lg font-semibold text-blue-400 print:text-blue-600 mt-1">
                Frontend &amp; Web Developer | React &amp; Next.js Enthusiast
              </p>
              <p className="text-sm text-slate-400 print:text-gray-500 mt-1">
                Passionately building responsive, high-performance web applications with modern UI/UX.
              </p>
            </div>

            {/* Quick Badges / Availability */}
            <div className="flex flex-col items-start md:items-end gap-1 text-sm text-slate-400 print:text-gray-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 print:bg-emerald-50 print:text-emerald-700 print:border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Open for Junior / Entry-Level Roles
              </span>
              <span className="text-xs text-slate-400 print:text-gray-500 mt-1">Ready to join immediately</span>
            </div>
          </div>

          {/* Contact Details Bar */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs sm:text-sm text-slate-300 print:text-gray-600 pt-4 border-t border-slate-800/80 print:border-gray-100">
            <a
              href="mailto:abdulalmumin0332@gmail.com"
              className="flex items-center gap-1.5 hover:text-blue-400 transition"
            >
              <HiMail className="text-blue-400 text-base shrink-0" />
              <span className="truncate">abdulalmumin0332@gmail.com</span>
            </a>
            <a
              href="tel:+8801624781103"
              className="flex items-center gap-1.5 hover:text-blue-400 transition"
            >
              <HiPhone className="text-blue-400 text-base shrink-0" />
              <span>+880 1624-781103</span>
            </a>
            <div className="flex items-center gap-1.5">
              <HiLocationMarker className="text-blue-400 text-base shrink-0" />
              <span>Mymensingh, Bangladesh</span>
            </div>
            <a
              href="https://github.com/abdulalmumin-pro"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-400 transition"
            >
              <FaGithub className="text-slate-200 print:text-gray-900 text-base shrink-0" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-al-mumin/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-400 transition"
            >
              <FaLinkedin className="text-blue-400 text-base shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href="/"
              className="flex items-center gap-1.5 hover:text-blue-400 transition"
            >
              <FaGlobe className="text-blue-400 text-base shrink-0" />
              <span>Portfolio</span>
            </a>
          </div>
        </header>

        {/* Section: Professional Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-slate-800 print:border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-sm"></span>
            Professional Summary
          </h2>
          <p className="text-sm text-slate-300 print:text-gray-700 leading-relaxed text-justify">
            Passionate, detail-oriented, and highly motivated <strong className="text-white print:text-gray-900">Frontend &amp; Web Developer</strong> with strong foundational proficiency in <strong className="text-white print:text-gray-900">JavaScript (ES6+)</strong>, <strong className="text-white print:text-gray-900">React.js</strong>, <strong className="text-white print:text-gray-900">Next.js</strong>, and <strong className="text-white print:text-gray-900">Tailwind CSS</strong>. Dedicated to building responsive real-world web applications, modern component architectures, and user-friendly interfaces. Seeking an entry-level Junior Web Developer / Frontend Developer position to contribute to impactful software products.
          </p>
        </section>

        {/* Section: Technical Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-slate-800 print:border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-sm"></span>
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3.5 bg-slate-950/60 print:bg-gray-50 rounded-2xl border border-slate-800 print:border-gray-100">
              <span className="font-semibold text-white print:text-gray-900 block mb-1">
                Frontend Technologies:
              </span>
              <p className="text-slate-300 print:text-gray-700 leading-relaxed text-xs sm:text-sm">
                Next.js, React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, React Router, Context API, Responsive Design.
              </p>
            </div>

            <div className="p-3.5 bg-slate-950/60 print:bg-gray-50 rounded-2xl border border-slate-800 print:border-gray-100">
              <span className="font-semibold text-white print:text-gray-900 block mb-1">
                Backend &amp; Database (Foundational):
              </span>
              <p className="text-slate-300 print:text-gray-700 leading-relaxed text-xs sm:text-sm">
                Node.js (Basics), Express.js, MongoDB (CRUD), RESTful APIs, JSON, Authentication (Better Auth).
              </p>
            </div>

            <div className="p-3.5 bg-slate-950/60 print:bg-gray-50 rounded-2xl border border-slate-800 print:border-gray-100">
              <span className="font-semibold text-white print:text-gray-900 block mb-1">
                Developer Tools &amp; Workflow:
              </span>
              <p className="text-slate-300 print:text-gray-700 leading-relaxed text-xs sm:text-sm">
                Git, GitHub, VS Code, Vite, npm, Vercel CLI, Chrome DevTools.
              </p>
            </div>

            <div className="p-3.5 bg-slate-950/60 print:bg-gray-50 rounded-2xl border border-slate-800 print:border-gray-100">
              <span className="font-semibold text-white print:text-gray-900 block mb-1">
                Core Competencies &amp; Practices:
              </span>
              <p className="text-slate-300 print:text-gray-700 leading-relaxed text-xs sm:text-sm">
                Component-Driven Architecture, UI/UX Principles, Cross-Browser Compatibility, Performance Optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Featured Projects */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-slate-800 print:border-gray-200 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-sm"></span>
            Featured Projects
          </h2>

          <div className="space-y-4">
            {/* Project 1: Bazar Dor */}
            <div className="border-l-2 border-blue-500 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-white print:text-gray-900 flex items-center gap-2">
                  Bazar Dor - Daily Market Price Tracker
                  <span className="text-xs font-normal text-blue-400 print:text-blue-600 font-mono bg-blue-500/10 print:bg-blue-50 px-2 py-0.5 rounded">
                    E-Commerce / Web App
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-blue-400 print:text-blue-600">
                  <a href="https://ph-a7-bazar-dor.vercel.app/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/abdulalmumin-pro" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-400 print:text-gray-500 font-medium mt-0.5">
                Tech Stack: Next.js, React, Tailwind CSS, MongoDB, Vercel
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-slate-300 print:text-gray-700 space-y-1">
                <li>
                  Built a modern commodity market price tracking web application with responsive UI design and category filtering.
                </li>
                <li>
                  Integrated smooth navigation and product catalog components for real-time price updates.
                </li>
              </ul>
            </div>

            {/* Project 2: Book Vibe */}
            <div className="border-l-2 border-indigo-500 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-white print:text-gray-900 flex items-center gap-2">
                  Book Vibe - Book Management &amp; Review Platform
                  <span className="text-xs font-normal text-indigo-400 print:text-indigo-600 font-mono bg-indigo-500/10 print:bg-indigo-50 px-2 py-0.5 rounded">
                    React Application
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-indigo-400 print:text-indigo-600">
                  <a href="https://next-js-book-vibe-project-q18h-eight.vercel.app/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/abdulalmumin-pro" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-400 print:text-gray-500 font-medium mt-0.5">
                Tech Stack: React, JavaScript, Tailwind CSS, Vercel
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-slate-300 print:text-gray-700 space-y-1">
                <li>
                  Developed an intuitive book review and management platform allowing users to browse and organize reading lists.
                </li>
                <li>
                  Implemented clean component structure and interactive UI/UX features for seamless user navigation.
                </li>
              </ul>
            </div>

            {/* Project 3: Fit Log */}
            <div className="border-l-2 border-emerald-500 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-white print:text-gray-900 flex items-center gap-2">
                  Fit Log - Workout &amp; Fitness Tracker
                  <span className="text-xs font-normal text-emerald-400 print:text-emerald-600 font-mono bg-emerald-500/10 print:bg-emerald-50 px-2 py-0.5 rounded">
                    Fitness Web App
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-emerald-400 print:text-emerald-600">
                  <a href="https://ph-a6-fit-log.vercel.app/details/1" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/abdulalmumin-pro" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-400 print:text-gray-500 font-medium mt-0.5">
                Tech Stack: Next.js, React, Tailwind CSS, Context API, Vercel
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-slate-300 print:text-gray-700 space-y-1">
                <li>
                  Created a comprehensive workout and fitness tracking application to discover exercises and manage daily exercise routines.
                </li>
                <li>
                  Utilized React Context API for state management and dynamic detail routing.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Education */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-slate-800 print:border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-sm"></span>
            Education
          </h2>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
              <div>
                <h3 className="font-bold text-white print:text-gray-900">
                  Higher Secondary Certificate (HSC) — In Progress
                </h3>
                <p className="text-slate-400 print:text-gray-600 text-xs sm:text-sm">
                  Bangladesh (Currently Enrolled)
                </p>
              </div>
              <div className="text-xs sm:text-sm text-slate-400 print:text-gray-500 font-medium mt-1 sm:mt-0 sm:text-right">
                <span className="text-blue-400 print:text-blue-600 font-semibold">Academic Learning &amp; Problem Solving</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm pt-2 border-t border-slate-800/80 print:border-gray-100">
              <div>
                <h3 className="font-bold text-white print:text-gray-900">
                  Secondary School Certificate (SSC) — Completed
                </h3>
                <p className="text-slate-400 print:text-gray-600 text-xs sm:text-sm">
                  Bangladesh
                </p>
              </div>
              <div className="text-xs sm:text-sm text-slate-400 print:text-gray-500 font-medium mt-1 sm:mt-0 sm:text-right">
                <span className="text-emerald-400 print:text-emerald-600 font-semibold">Science &amp; Mathematics Foundation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Certifications & Training */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-slate-800 print:border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-sm"></span>
            Training &amp; Professional Learning
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="p-3.5 bg-slate-950/60 print:bg-gray-50 rounded-2xl border border-slate-800 print:border-gray-100">
              <h4 className="font-semibold text-white print:text-gray-900">
                Web Development Program
              </h4>
              <p className="text-xs text-blue-400 print:text-blue-600 font-medium mt-0.5">Programming Hero</p>
              <p className="text-xs text-slate-400 print:text-gray-600 mt-1">
                Learning web development through practical lessons, coding exercises, and hands-on projects (HTML, CSS, JavaScript, React, Tailwind).
              </p>
            </div>

            <div className="p-3.5 bg-slate-950/60 print:bg-gray-50 rounded-2xl border border-slate-800 print:border-gray-100">
              <h4 className="font-semibold text-white print:text-gray-900">
                Modern Frontend Architecture
              </h4>
              <p className="text-xs text-blue-400 print:text-blue-600 font-medium mt-0.5">Self-Directed &amp; Project-Based</p>
              <p className="text-xs text-slate-400 print:text-gray-600 mt-1">
                Built multiple full-featured applications using Next.js, Tailwind CSS, and Git workflow.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Soft Skills & Languages */}
        <section>
          <h2 className="text-lg font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-slate-800 print:border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-sm"></span>
            Soft Skills &amp; Languages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300 print:text-gray-700">
            <div>
              <span className="font-semibold text-white print:text-gray-900 block mb-1">Soft Skills:</span>
              <p>Problem Solving, Collaborative Teamwork, Fast Learner &amp; Adaptability, Time Management, Attention to Detail.</p>
            </div>
            <div>
              <span className="font-semibold text-white print:text-gray-900 block mb-1">Languages:</span>
              <p>Bengali (Native), English (Professional Working Proficiency).</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

Resume.displayName = "Resume";
export default Resume;