import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail, HiArrowUp } from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 print:hidden mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <Link
              to="/"
              className="text-xl font-bold text-white flex items-center gap-2"
            >
              <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono text-sm shadow-md">
                D
              </span>
              <span>
                DevPortfolio<span className="text-blue-400">.</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Passionate Fresher Web Developer specializing in building clean, responsive, and user-centric web applications with Next.js and modern technologies.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs text-slate-400 font-medium">
                Open to Junior Frontend / Full-Stack Opportunities
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#home" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-blue-400 transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-blue-400 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-blue-400 transition">
                  Featured Projects
                </a>
              </li>
              <li>
                <Link
                  to="/resume"
                  className="text-blue-400 font-semibold hover:underline"
                >
                  Resume / CV &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Get in Touch
            </h4>
            <p className="text-sm text-slate-400">
              Have a question or looking to hire? Feel free to reach out anytime.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/abdulalmumin-pro"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-white hover:text-slate-950 flex items-center justify-center text-slate-300 border border-slate-800 transition"
              >
                <FaGithub className="text-base" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-al-mumin/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-300 border border-slate-800 transition"
              >
                <FaLinkedin className="text-base" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=abdulalmumin0332@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send me an email"
                title="Send me an email"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-rose-500 hover:text-white flex items-center justify-center text-slate-300 border border-slate-800 transition"
              >
                <HiMail className="text-base" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} DevPortfolio. Designed &amp; Built with Next.js &amp; Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-400 font-medium transition cursor-pointer"
          >
            <span>Back to top</span>
            <HiArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";
export default Footer;