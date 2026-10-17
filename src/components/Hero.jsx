import { Link } from "react-router-dom";
import {
  HiDocumentText,
  HiArrowRight,
  HiSparkles,
  HiCode,
} from "react-icons/hi";
import { FaReact, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import profileImage from "../assets/projects/profile-2.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate mx-auto flex min-h-[88vh] max-w-7xl items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 md:px-12 bg-slate-950 text-slate-100"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-6 text-left lg:col-span-7">

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-400 shadow-xl backdrop-blur-md sm:text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for Hire · React & Next.js Developer
          </div>

          {/* Introduction */}
          <div className="space-y-3">
            <p className="text-lg font-medium text-slate-400">
              Hello, I am{" "}
              <span className="font-bold text-white">
                Abdul Al Mumin
              </span>
            </p>

            <h1 className="text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              React &{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Next.js Developer
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I build modern, high-performance web applications using{" "}
            <strong className="font-semibold text-white">
              Next.js
            </strong>
            , React.js, JavaScript and Tailwind CSS. Focused on scalable architecture, SEO-friendly solutions and beautiful user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/resume"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/50 sm:text-base"
            >
              <HiDocumentText className="text-xl" />
              View Resume / CV
            </Link>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-5 py-3.5 text-sm font-semibold text-slate-200 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-slate-800 hover:text-white sm:text-base"
            >
              Explore Projects
              <HiArrowRight className="text-lg text-blue-400" />
            </a>

            <a
              href="#contact"
              className="px-2 py-3 text-sm font-semibold text-slate-400 transition hover:text-blue-400"
            >
              Get in Touch →
            </a>
          </div>

          {/* Tech Stack */}
          <div className="border-t border-slate-800 pt-6">
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              <HiSparkles className="text-lg text-blue-400" />
              Core Tech Stack
            </p>

            <div className="flex flex-wrap gap-2.5">
              {[
                {
                  name: "Next.js",
                  icon: <SiNextdotjs />,
                  color: "text-white",
                },
                {
                  name: "React.js",
                  icon: <FaReact />,
                  color: "text-cyan-400",
                },
                {
                  name: "JavaScript",
                  icon: <FaJsSquare />,
                  color: "text-yellow-400",
                },
                {
                  name: "Tailwind CSS",
                  icon: <SiTailwindcss />,
                  color: "text-teal-400",
                },
                {
                  name: "Git & GitHub",
                  icon: <FaGitAlt />,
                  color: "text-orange-400",
                },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-2 text-xs font-semibold text-slate-300 shadow-md transition hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-slate-900 sm:text-sm"
                >
                  <span className={`text-base ${tech.color}`}>
                    {tech.icon}
                  </span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: PROFILE PHOTO */}
        <div className="relative mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none lg:pl-5">

          {/* Outer Glow */}
          <div className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-cyan-500/20 blur-3xl" />

          {/* Decorative Rings */}
          <div className="absolute -right-3 top-10 h-24 w-24 rounded-full border border-blue-500/20 sm:-right-5 sm:h-32 sm:w-32" />
          <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full border border-indigo-500/20 sm:-left-8 sm:h-32 sm:w-32" />

          {/* Main Photo Card */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/60 p-2 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1">

            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-gradient-to-b from-slate-900 to-slate-950">
              <img
                src={profileImage}
                alt="Abdul Al Mumin - React and Next.js Developer"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
              />

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

              {/* Name on Photo */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <p className="mb-1 text-xs font-medium tracking-[0.2em] text-blue-400">
                  FRONTEND DEVELOPER
                </p>
                <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl text-white">
                  Abdul Al Mumin
                </h2>
                <p className="mt-1 text-sm text-slate-300">
                  Turning ideas into digital experiences.
                </p>
              </div>

              {/* Decorative Code Icon */}
              <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/80 text-xl text-blue-400 shadow-lg backdrop-blur-md">
                <HiCode />
              </div>
            </div>
          </div>

          {/* Floating: Framework Badge */}
          <div className="absolute -right-2 bottom-20 flex items-center gap-2.5 rounded-2xl border border-slate-800 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-xl sm:-right-5 sm:bottom-24 sm:gap-3 sm:p-3.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-2xl text-white border border-slate-800">
              <SiNextdotjs />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Next.js</p>
              <p className="text-xs text-slate-400">Modern Web Apps</p>
            </div>
          </div>

          {/* Bottom Floating Tech Icons */}
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/90 px-5 py-3.5 shadow-2xl backdrop-blur-xl sm:gap-5 sm:px-6">
            <FaReact className="animate-pulse text-2xl text-cyan-400" />
            <SiTailwindcss className="text-2xl text-teal-400" />
            <FaJsSquare className="text-2xl text-yellow-400" />
            <FaGitAlt className="text-2xl text-orange-400" />
          </div>
        </div>

      </div>
    </section>
  );
};

Hero.displayName = "Hero";
export default Hero;