import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please fill in all required fields.",
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Simulate sending message
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Auto-hide success message after 6 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative bg-slate-950 py-24 px-6 md:px-12 max-w-7xl mx-auto text-slate-100 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
          <HiOutlineChatAlt2 className="text-sm" />
          <span>Get In Touch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Connect</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
          Have an entry-level opening, internship, freelance project, or simply want to chat about tech? My inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Info Cards & Social Links (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                I am actively looking for full-time junior frontend or full-stack opportunities and I am available to join immediately.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Email */}
              <a
                href="mailto:abdulalmumin0332@gmail.com"
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/60 hover:bg-blue-600/10 border border-slate-800/80 hover:border-blue-500/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <HiOutlineMail className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">
                    Email Address
                  </span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition-colors break-all">
                    abdulalmumin0332@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+8801624781103"
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/60 hover:bg-blue-600/10 border border-slate-800/80 hover:border-blue-500/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <HiOutlinePhone className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">
                    Phone / WhatsApp
                  </span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                    +880 1624-781103
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                  <HiOutlineLocationMarker className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-slate-200">
                    Mymensingh, Bangladesh (Remote / On-site)
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                Social Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/abdulalmumin-pro"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="w-11 h-11 rounded-xl bg-slate-950 hover:bg-white hover:text-slate-950 flex items-center justify-center text-slate-300 border border-slate-800 transition-all"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdul-al-mumin/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-11 h-11 rounded-xl bg-slate-950 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-300 border border-slate-800 transition-all"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href="https://x.com/Al69889Mumin"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter Profile"
                  className="w-11 h-11 rounded-xl bg-slate-950 hover:bg-sky-500 hover:text-white flex items-center justify-center text-slate-300 border border-slate-800 transition-all"
                >
                  <FaTwitter className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Fill out the form below and I'll respond as soon as possible.
            </p>

            {/* Success Toast */}
            {status.submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-3">
                <HiOutlineCheckCircle className="text-2xl shrink-0" />
                <div>
                  <p className="text-sm font-bold">Message sent successfully!</p>
                  <p className="text-xs text-emerald-400/80">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status.error && (
              <div className="mb-6 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm">
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase mb-1.5 tracking-wider">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/60 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase mb-1.5 tracking-wider">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/60 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 uppercase mb-1.5 tracking-wider">
                  Subject / Role
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/60 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase mb-1.5 tracking-wider">
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello! We are looking for a Junior Frontend Developer to join our team..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/60 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-sm" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

Contact.displayName = "Contact";
export default Contact;