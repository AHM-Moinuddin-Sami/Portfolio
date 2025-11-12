import { useEffect, useMemo, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { withBase } from "../Hooks/withBase";

const SECTIONS = ["home", "about", "skills", "projects", "contact"];

export default function NavigationBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navigate = useNavigate();
  const { pathname, hash } = useLocation();

  // Sticky bg on scroll
  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const opts = { root: null, rootMargin: "0px 0px -60% 0px", threshold: 0.1 };
    const handler = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (SECTIONS.includes(id)) setActive(id);
        }
      });
    };
    const observer = new IntersectionObserver(handler, opts);
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close mobile when route or hash changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname, hash]);

  const scrollToId = useCallback(
    (id) => {
      navigate(`${pathname}#${id}`, { replace: false });
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [navigate, pathname]
  );

  const NavLink = ({ id, children }) => {
    const isActive = active === id;
    return (
      <button
        onClick={() => scrollToId(id)}
        className={`relative px-3 py-2 text-sm font-semibold tracking-wide transition ${
          isActive ? "text-white" : "text-white/80 hover:text-white"
        }`}
      >
        {children}
        <span
          className={`absolute left-3 right-3 -bottom-0.5 h-[2px] transform-gpu rounded-full transition-all ${
            isActive ? "bg-gradient-to-r from-[#00d4ff] to-[#00ffd0] opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        />
      </button>
    );
  };

  const DesktopNav = useMemo(
    () => (
      <nav className="hidden items-center gap-1 md:flex">
        <div className="group relative">
          <NavLink id="home">Home</NavLink>
        </div>
        <div className="group relative">
          <NavLink id="about">About</NavLink>
        </div>
        <div className="group relative">
          <NavLink id="skills">Skills</NavLink>
        </div>
        <div className="group relative">
          <NavLink id="projects">Projects</NavLink>
        </div>
        <div className="group relative">
          <NavLink id="contact">Contact</NavLink>
        </div>
      </nav>
    ),
    [active, scrollToId]
  );

  return (
    <header
      className={`${
        isSticky ? "backdrop-blur-md bg-black/40 border-b border-white/10 py-2" : "bg-transparent py-4"
      } fixed inset-x-0 top-0 z-[999] transition-all`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        {/* Brand */}
        <button
          onClick={() => scrollToId("home")}
          className="inline-flex items-center gap-2"
          aria-label="Go to home"
        >
          <span className="h-3 w-3 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#00ffd0]" />
          <span className="text-sm font-extrabold tracking-wide text-white">
            Moin Uddin Sami
          </span>
        </button>

        {/* Desktop */}
        {DesktopNav}

        {/* Right actions */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={withBase("Resume.pdf")}
            className="rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#00ffd0] px-4 py-2 text-sm font-semibold text-gray-900 shadow transition hover:from-[#00ffd0] hover:to-[#00d4ff]"
            download
          >
            Download Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-white/90 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden">
          <div className="mx-3 mt-2 rounded-xl border border-white/10 bg-black/70 p-2 backdrop-blur">
            <button
              onClick={() => scrollToId("home")}
              className="w-full rounded-lg px-3 py-2 text-left text-white/90 hover:bg-white/10"
            >
              Home
            </button>
            <button
              onClick={() => scrollToId("about")}
              className="w-full rounded-lg px-3 py-2 text-left text-white/90 hover:bg-white/10"
            >
              About
            </button>
            <button
              onClick={() => scrollToId("skills")}
              className="w-full rounded-lg px-3 py-2 text-left text-white/90 hover:bg-white/10"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToId("projects")}
              className="w-full rounded-lg px-3 py-2 text-left text-white/90 hover:bg-white/10"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToId("contact")}
              className="w-full rounded-lg px-3 py-2 text-left text-white/90 hover:bg-white/10"
            >
              Contact
            </button>
            <a
              href={withBase("Resume.pdf")}
              className="mt-2 block w-full rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#00ffd0] px-3 py-2 text-center font-semibold text-gray-900 hover:from-[#00ffd0] hover:to-[#00d4ff]"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
