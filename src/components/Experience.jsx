import {
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineCode,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
} from "react-icons/hi";
import {
  FaLaptopCode,
  FaHandsHelping,
  FaGraduationCap,
} from "react-icons/fa";

const experiences = [
  {
    role: "Frontend Development",
    company: "Programming Hero",
    location: "Online Learning",
    period: "Currently Learning",
    type: "Course & Training",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    responsibilities: [
      "Learning modern frontend development using HTML5, CSS3, JavaScript, React.js., and Next.js",
      "Practicing responsive web design with Tailwind CSS and reusable UI components.",
      "Building hands-on projects to strengthen problem-solving and frontend development skills.",
      "Learning Git, GitHub, API integration, and modern web development workflows.",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Git & GitHub",
    ],
  },
  {
    role: "Personal Web Development Projects",
    company: "Self-Learning & Practice",
    location: "Independent Learning",
    period: "Ongoing",
    type: "Personal Projects",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    responsibilities: [
      "Developing responsive websites to apply concepts learned during training.",
      "Practicing component-based development and reusable React or Next.js components.",
      "Improving UI design, mobile responsiveness, and user experience.",
      "Exploring deployment workflows to publish projects online.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Vercel",
    ],
  },
  {
    role: "Continuous Learning & Skill Development",
    company: "Self-Directed Practice",
    location: "Online",
    period: "Ongoing",
    type: "Professional Development",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    responsibilities: [
      "Strengthening JavaScript fundamentals and problem-solving abilities.",
      "Practicing API integration and asynchronous JavaScript.",
      "Exploring modern frontend tools and development best practices.",
      "Preparing for an entry-level Frontend Developer or React Developer role.",
    ],
    technologies: [
      "JavaScript ES6+",
      "REST APIs",
      "React.js",
      "Next.js",
      "GitHub",
      "Web Development",
    ],
  },
];

const valueProps = [
  {
    icon: FaLaptopCode,
    title: "Practical Learning",
    desc: "Applying development concepts through hands-on coding exercises and personal projects.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Growth Mindset",
    desc: "Eager to learn new technologies, accept feedback, and continuously improve development skills.",
  },
  {
    icon: FaHandsHelping,
    title: "Collaboration",
    desc: "Ready to collaborate with experienced developers, learn from teammates, and contribute to projects.",
  },
  {
    icon: FaGraduationCap,
    title: "Career Preparation",
    desc: "Building a strong foundation in modern frontend technologies and preparing for my first professional opportunity.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-slate-950 text-slate-100 relative overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/3 right-0 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
          <HiOutlineBookOpen className="text-sm" />
          <span>My Learning Journey</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Learning{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            & Experience
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
          I am building my web development skills through Programming Hero, hands-on practice, and personal projects as I prepare for my first professional opportunity.
        </p>
      </div>

      {/* Learning Journey Cards */}
      <div className="max-w-4xl mx-auto space-y-8 mb-16">
        {experiences.map((exp) => (
          <div
            key={exp.role}
            className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl hover:border-blue-500/40 transition-all duration-300 relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-2 ${exp.badgeColor}`}
                >
                  {exp.type}
                </span>

                <h3 className="text-xl font-bold text-white">
                  {exp.role}
                </h3>

                <p className="text-sm font-semibold text-blue-400 mt-1">
                  {exp.company}
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-slate-400 gap-1 shrink-0">
                <span className="flex items-center gap-1 font-medium text-slate-200">
                  <HiOutlineCalendar className="text-blue-400" />
                  {exp.period}
                </span>

                <span className="flex items-center gap-1">
                  <HiOutlineCode className="text-slate-500" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Learning Activities */}
            <ul className="space-y-2.5 mb-6">
              {exp.responsibilities.map((task) => (
                <li
                  key={task}
                  className="flex items-start gap-2.5 text-sm text-slate-300"
                >
                  <HiOutlineCheckCircle className="text-blue-400 text-base shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase text-slate-500 mr-1">
                Skills:
              </span>

              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-950 text-slate-300 border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Fresher Strengths */}
      <div className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-blue-500/20 p-8 shadow-2xl">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            What I Bring to the Team
          </h3>
          <p className="text-sm text-slate-400">
            My strengths and mindset as an aspiring Frontend Developer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {valueProps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-blue-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Icon className="text-lg" />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

Experience.displayName = "Experience";
export default Experience;