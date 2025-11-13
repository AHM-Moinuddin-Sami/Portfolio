import SmoothAnchor from "../Components/SmoothAnchor";
import { withBase } from "../Hooks/withBase";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gray-950 text-white py-10">
      {/* gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(0,212,255,0.15),transparent_60%),radial-gradient(circle_at_90%_80%,rgba(0,255,208,0.15),transparent_60%)] pointer-events-none"></div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3 mb-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-cyan-400"
            >
              <path
                d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847z"
                fill="currentColor"
              />
            </svg>
            <p className="font-bold text-lg bg-gradient-to-r from-[#00d4ff] to-[#00ffd0] bg-clip-text text-transparent">
              A.H.M. Moin Uddin Sami
            </p>
          </div>
          <p className="text-sm text-white/70 max-w-xs">
            Developer of interactive and optimized digital experiences — combining creativity with technology.
          </p>
          <p className="mt-3 text-xs text-white/50">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social links */}
        <div className="flex gap-5 items-center">
          <a
            href="https://github.com/AHM-Moinuddin-Sami"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <img
              src={withBase("github.png")}
              alt="GitHub"
              className="h-9 w-9 opacity-80 transition-transform duration-300 group-hover:scale-110 group-hover:opacity-100"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/a-h-m-moin-uddin-sami-164b3b252/"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <img
              src={withBase("linkedin.png")}
              alt="LinkedIn"
              className="h-9 w-9 opacity-80 transition-transform duration-300 group-hover:scale-110 group-hover:opacity-100"
            />
          </a>
        </div>
      </div>

      {/* Subtle separator */}
      <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Footer base line */}
      <div className="relative z-10 mt-6 flex flex-col items-center justify-center text-xs text-white/60 md:flex-row md:justify-between md:px-12">
        <p className="text-center mb-2 md:mb-0">
          Designed & Developed by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ffd0] font-medium">
            A.H.M. Moin Uddin Sami
          </span>
        </p>
        <SmoothAnchor
          href="#contact"
          className="cursor-pointer rounded-md border border-white/20 px-3 py-1 text-white/70 hover:text-white hover:border-cyan-300 transition"
        >
          Contact Me
        </SmoothAnchor>
      </div>
    </footer>
  );
};

export default Footer;
