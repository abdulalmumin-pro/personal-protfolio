import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineBadgeCheck,
  HiOutlineCode,
} from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";

const educationHistory = [
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "SSC Graduate",
    location: "Bangladesh",
    period: "Completed",
    status: "Completed",
    description:
      "Successfully completed my Secondary School Certificate (SSC). This achievement helped me build a foundation for further education and my journey into technology.",
    coursework: [
      "Secondary Education",
      "Science & Mathematics",
      "Computer Fundamentals",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Currently Studying",
    location: "Bangladesh",
    period: "Currently Enrolled",
    status: "In Progress",
    description:
      "Currently continuing my higher secondary education while developing my programming skills and exploring modern web development.",
    coursework: [
      "Higher Secondary Education",
      "Academic Learning",
      "Problem Solving",
    ],
  },
];

const learningJourney = [
  {
    title: "Web Development",
    issuer: "Programming Hero",
    status: "Currently Learning",
    description:
      "Learning web development through practical lessons, coding exercises, and hands-on projects to build a strong foundation in modern web technologies.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
    ],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative mx-auto max-w-7xl overflow-hidden px-5 py-24 sm:px-8 md:px-12 bg-slate-950 text-slate-100"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-32 top-32 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-20 -z-10 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />

      {/* Section Header */}
      <div className="mx-auto mb-16 max-w-3xl space-y-3 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 backdrop-blur-md">
          <HiOutlineAcademicCap className="text-sm" />
          My Learning Journey
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Education &{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Learning
          </span>
        </h2>

        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
          My academic background and ongoing journey into programming and modern web development.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">

        {/* LEFT: Academic Qualifications */}
        <div className="space-y-6 lg:col-span-7">
          <h3 className="mb-5 flex items-center gap-3 text-xl font-bold text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <FaGraduationCap className="text-xl" />
            </span>
            Academic Qualifications
          </h3>

          <div className="relative space-y-6">
            {/* Timeline Line */}
            <div className="absolute bottom-10 left-[19px] top-10 w-px bg-gradient-to-b from-blue-500/60 to-slate-800" />

            {educationHistory.map((edu, index) => (
              <article
                key={edu.degree}
                className="relative ml-1 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-6 pl-11 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 sm:p-8 sm:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[10px] top-8 z-10 flex h-5 w-5 items-center justify-center rounded-full border-4 border-slate-950 bg-blue-500 shadow-md" />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-lg font-bold leading-snug text-white sm:text-xl">
                      {edu.degree}
                    </h4>
                    <p className="mt-1 text-sm font-medium text-blue-400">
                      {edu.institution}
                    </p>
                  </div>

                  <span
                    className={`inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md ${
                      index === 0
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                        : "border-blue-500/30 bg-blue-500/10 text-blue-400"
                    }`}
                  >
                    <HiOutlineBadgeCheck className="text-sm" />
                    {edu.status}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400 sm:text-sm">
                  <span className="flex items-center gap-1.5">
                    <HiOutlineCalendar className="text-base text-blue-400" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <HiOutlineLocationMarker className="text-base text-blue-400" />
                    {edu.location}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {edu.description}
                </p>

                <div className="mt-5 border-t border-slate-800 pt-4">
                  <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <HiOutlineBookOpen className="text-base text-blue-400" />
                    Key Learning Areas
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* RIGHT: Professional Learning */}
        <div className="space-y-6 lg:col-span-5">
          <h3 className="flex items-center gap-3 text-xl font-bold text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <HiOutlineCode className="text-2xl" />
            </span>
            Professional Learning
          </h3>

          {learningJourney.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-6 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 sm:p-8"
            >
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-indigo-500/10 blur-3xl transition group-hover:bg-blue-500/20" />

              <div className="relative">
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30">
                    <HiOutlineCode className="text-3xl" />
                  </div>

                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-400 backdrop-blur-md">
                    {item.status}
                  </span>
                </div>

                <p className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                  {item.issuer}
                </p>

                <h4 className="mt-2 text-2xl font-bold tracking-tight text-white">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>

                <div className="mt-6 border-t border-slate-800 pt-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Technologies I’m Learning
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* Continuous Learning Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-6 text-white shadow-2xl sm:p-8">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/20" />
            <div className="absolute -bottom-12 -right-4 h-36 w-36 rounded-full bg-white/10 blur-2xl" />

            <div className="relative">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20 backdrop-blur-md">
                <HiOutlineAcademicCap className="text-2xl" />
              </div>

              <h4 className="text-xl font-bold">
                Always Learning, Always Growing
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-blue-100">
                Balancing academic studies with programming practice, improving problem-solving skills, and building projects to grow as a future web developer.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Focused on Growth
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

Education.displayName = "Education";
export default Education;