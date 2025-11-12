import { TypeAnimation } from "react-type-animation";
import SmoothAnchor from "../Components/SmoothAnchor";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { withBase } from "../Hooks/withBase";

const Header = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 100 });
  }, []);

  return (
    <header
      id="home"
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-center"
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,200,255,0.25),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(0,255,200,0.25),transparent_60%)] animate-pulse-slow"></div>

      {/* Subtle particle glow */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{ backgroundImage: `url("${withBase("noise.png")}")` }}
      />

      <div
        data-aos="fade-up"
        className="z-10 flex flex-col items-center justify-center px-4"
      >
        <p className="text-lg md:text-xl text-white/80 mb-2 tracking-wide">
          Hello!
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold mb-3">
          I am{" "}
          <span className="bg-gradient-to-r from-[#00d4ff] via-[#00ffd0] to-[#00ff9c] bg-clip-text text-transparent">
            A.H.M. Moin Uddin Sami
          </span>
        </h1>

        <TypeAnimation
          className="text-lg md:text-2xl font-semibold text-white/90"
          sequence={[
            "a Full Stack Developer",
            1000,
            "a Game Developer",
            1000,
            "a Software Developer",
            1000,
          ]}
          speed={55}
          repeat={Infinity}
          wrapper="span"
        />

        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-6 max-w-2xl text-white/70 text-sm md:text-base leading-relaxed"
        >
          I build interactive systems that merge <strong>software precision</strong> with{" "}
          <strong>creative gameplay</strong>. Passionate about code architecture, player experience,
          and optimization.
        </p>

        {/* CTA Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="mt-8 flex gap-3 flex-wrap justify-center"
        >
          <SmoothAnchor
            href="#projects"
            className="rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#00ffd0] px-6 py-3 font-semibold text-gray-900 shadow-lg transition hover:from-[#00ffd0] hover:to-[#00d4ff]"
          >
            View My Projects
          </SmoothAnchor>

          <SmoothAnchor
            href="#contact"
            className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Get in Touch
          </SmoothAnchor>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 animate-bounce">
        <p className="text-xs mb-1">Scroll Down</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
