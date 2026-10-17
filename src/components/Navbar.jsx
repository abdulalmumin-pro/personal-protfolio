import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX, HiDocumentText } from "react-icons/hi";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sections = navLinks.map((link) =>
        document.getElementById(link.id)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 100;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 print:hidden ${
        scrolled || !isHomePage
          ? "bg-slate-950/80 backdrop-blur-xl shadow-2xl border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-white group flex items-center gap-2"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono text-lg shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform">
            D
          </span>
          <span className="bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
            DevPortfolio<span className="text-blue-400">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
            const isLinkActive = isHomePage && active === link.id;

            return (
              <li key={link.id}>
                <a
                  href={href}
                  className={`relative py-1 font-medium text-sm transition-colors duration-200 ${
                    isLinkActive
                      ? "text-blue-400 font-semibold"
                      : "text-slate-300 hover:text-blue-400"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300 ${
                      isLinkActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Right CTA (Resume Button) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <HiDocumentText className="text-lg" />
            Resume
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden text-2xl text-white p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 transition focus:outline-none"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 shadow-2xl overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-6 px-6" : "max-h-0 py-0 px-6"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
            const isLinkActive = isHomePage && active === link.id;

            return (
              <li key={link.id}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className={`block py-1.5 text-base font-medium transition ${
                    isLinkActive ? "text-blue-400 font-semibold" : "text-slate-300 hover:text-blue-400"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}

          {/* Mobile Resume Button */}
          <li className="pt-2 border-t border-slate-800">
            <Link
              to="/resume"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-500 transition"
            >
              <HiDocumentText className="text-xl" />
              View Full Resume
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

Navbar.displayName = "Navbar";
export default Navbar;