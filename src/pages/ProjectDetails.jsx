import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import { HiArrowLeft, HiExternalLink, HiCode, HiLightBulb, HiShieldCheck } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6 bg-slate-950 text-slate-100">
        <div className="text-center max-w-md bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-2">Project Not Found</h2>
          <p className="text-slate-400 text-sm mb-6">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-600/25 transition"
          >
            <HiArrowLeft /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-20 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background Glows */}
      <div className="pointer-events-none absolute top-1/4 left-10 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 -z-10 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-blue-400 transition"
          >
            <HiArrowLeft /> Back to All Projects
          </Link>
        </div>

        {/* Project Card */}
        <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-800 shadow-2xl overflow-hidden p-6 sm:p-10 space-y-8">
          
          {/* Main Screenshot */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl aspect-video bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Title & Category */}
          <div className="space-y-3">
            {project.category && (
              <span className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold px-3.5 py-1 rounded-full backdrop-blur-md">
                {project.category}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <HiCode className="text-blue-400 text-base" /> Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-950 text-slate-300 border border-slate-800 px-3.5 py-1 rounded-xl text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white">Project Overview</h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-3 p-6 rounded-2xl bg-slate-950/60 border border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HiShieldCheck className="text-emerald-400 text-lg" />
                Technical Challenges &amp; Solutions
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Future Enhancements */}
          {project.future && project.future.length > 0 && (
            <div className="space-y-3 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HiLightBulb className="text-amber-400 text-lg" />
                Future Roadmap &amp; Enhancements
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
                {project.future.map((enhancement) => (
                  <li key={enhancement}>{enhancement}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-600/25 transition"
              >
                <span>Live Demo</span>
                <HiExternalLink className="text-base" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 px-6 py-3 rounded-xl font-semibold shadow-lg transition"
              >
                <FaGithub className="text-lg" />
                <span>Source Code</span>
              </a>
            )}

            <Link
              to="/resume"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 hover:underline ml-auto"
            >
              View Developer Resume &rarr;
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
};

ProjectDetails.displayName = "ProjectDetails";
export default ProjectDetails;