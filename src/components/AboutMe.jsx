import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineSparkles,
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineCode,
} from "react-icons/hi";
import { FaLaptopCode, FaRocket } from "react-icons/fa";

import Img from "../assets/projects/profile-2.jpg";

const highlights = [
  {
    title: "Clean & Maintainable Code",
    desc: "Building reusable components with readable, organized code and modern practices.",
  },
  {
    title: "Fast Learner",
    desc: "Continuously learning new tools, technologies, and frontend development techniques.",
  },
  {
    title: "Responsive UI Design",
    desc: "Creating accessible, mobile-friendly layouts that work across different screen sizes.",
  },
  {
    title: "Problem Solving",
    desc: "Enjoying debugging, breaking down challenges, and improving user experiences.",
  },
];

const AboutMe = () => {
  return (
    <section id="about" className="relative bg-slate-900 px-5 py-24 text-slate-100 sm:px-8 lg:px-12 overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 backdrop-blur-md">
            <HiOutlineUser className="text-sm" />
            About Me
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A Little About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            I'm a passionate fresher web developer who enjoys turning ideas
            into modern, responsive, and user-friendly web experiences.
          </p>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          
          {/* Left Side: Profile Sidebar Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950/50 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <div>
              {/* Profile Image Box */}
              <div className="relative mx-auto flex w-fit justify-center">
                <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-xl">
                  <img
                    src={Img}
                    alt="Abdul Al Mumin — Web Developer"
                    className="h-36 w-36 rounded-2xl object-cover object-center sm:h-44 sm:w-44"
                    loading="lazy"
                  />
                </div>
                <span className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-xl border-4 border-slate-900 bg-emerald-500 text-white shadow-lg">
                  <HiOutlineCheckCircle className="text-xl" />
                </span>
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Abdul Al Mumin
                </h3>
                <p className="mt-1 text-sm font-medium text-blue-400">
                  Fresher Web Developer
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300 border border-slate-800">
                  <HiOutlineLocationMarker className="text-blue-400 text-sm" />
                  Mymensingh, Bangladesh
                </div>
              </div>

              {/* Status details list */}
              <div className="mt-8 space-y-3.5 border-t border-slate-800/80 pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-slate-400">
                    <HiOutlineBriefcase className="text-blue-400 text-base" /> Availability
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                    Open to Opportunities
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-slate-400">
                    <FaLaptopCode className="text-blue-400 text-base" /> Main Focus
                  </span>
                  <span className="font-medium text-slate-200">Frontend Development</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-slate-400">
                    <HiOutlineCode className="text-blue-400 text-base" /> Learning
                  </span>
                  <span className="font-medium text-slate-200">Modern Web Technologies</span>
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <div className="mt-8 pt-4">
              <Link
                to="/resume"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/50"
              >
                <HiOutlineSparkles className="text-lg" />
                View My Resume
                <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Side: Bio, Tech Stack & Strengths (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950/50 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                // My Journey
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Building modern web experiences, one project at a time.
              </h3>

              <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                <p>
                  Hello! I'm <strong className="text-white font-semibold">Abdul Al Mumin</strong>,
                  an aspiring web developer passionate about building clean,
                  responsive, and user-friendly websites. My journey started
                  with the fundamentals of HTML, CSS, and JavaScript, and I
                  continue to strengthen my skills by building practical projects.
                </p>
                <p>
                  I enjoy working with{" "}
                  <strong className="text-white font-semibold">
                    Next.js, Tailwind CSS, and modern frontend tools
                  </strong>{" "}
                  to turn designs into interactive web interfaces. I'm focused
                  on writing reusable code, understanding core concepts, and
                  improving my problem-solving skills through consistent practice.
                </p>
                <p>
                  As a fresher, I'm eager to learn from experienced developers,
                  collaborate with a team, and contribute to meaningful projects.
                  I'm looking for opportunities where I can grow as a developer
                  while delivering thoughtful user experiences.
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Technologies I Work With
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "Next.js",
                    "Tailwind CSS",
                    "Git",
                    "GitHub",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths / Highlights Grid */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <h4 className="text-base font-bold text-white mb-4">
                  What I Bring to the Team
                </h4>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div
                      key={item.title}
                      className="group flex items-start gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4 transition duration-300 hover:border-blue-500/30 hover:bg-slate-900"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <HiOutlineCheckCircle className="text-lg" />
                      </span>
                      <div>
                        <h5 className="text-xs font-bold text-white uppercase tracking-wide">
                          {item.title}
                        </h5>
                        <p className="mt-1 text-xs leading-relaxed text-slate-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 flex flex-col gap-3 border-t border-slate-800 pt-6 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-5 py-3.5 text-sm font-bold text-slate-900 transition-all hover:bg-white hover:shadow-lg"
              >
                <FaRocket className="text-blue-600" />
                Let's Work Together
                <HiOutlineArrowRight className="transition-transform duration-300 hover:translate-x-1" />
              </a>

              <a
                href="mailto:abdulalmumin0332@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-5 py-3.5 text-sm font-bold text-slate-300 transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-white"
              >
                <HiOutlineUser className="text-lg text-blue-400" />
                Get in Touch
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

AboutMe.displayName = "AboutMe";
export default AboutMe;