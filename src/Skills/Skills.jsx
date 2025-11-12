import { useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import { withBase } from "../Hooks/withBase";

const Skills = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, offset: 80 });
  }, []);

  const coreSkills = [
    { name: "Unity", icon: "unity.png", glow: "from-cyan-400 to-emerald-300" },
    { name: "C# Programming", icon: "csharp.png", glow: "from-indigo-400 to-sky-400" },
    { name: "Gameplay Systems", icon: "gameplay.png", glow: "from-fuchsia-400 to-pink-300" },
    { name: "Optimization & Profiling", icon: "optimization.png", glow: "from-orange-400 to-amber-300" },
    { name: "AI & Logic Design", icon: "ai.jpg", glow: "from-lime-400 to-emerald-300" },
  ];

  const webSkills = [
    { name: "React", icon: "React.png", glow: "from-sky-400 to-cyan-300" },
    { name: "Node.js", icon: "nodejs.png", glow: "from-green-400 to-emerald-300" },
    { name: "Express.js", icon: "Expressjs.png", glow: "from-gray-400 to-white" },
    { name: "MongoDB", icon: "mongodb.png", glow: "from-emerald-400 to-green-300" },
    { name: "Next.js", icon: "nextjs.png", glow: "from-neutral-300 to-white" },
  ];

  const programming = [
    { name: "C / C++", icon: "cpp.png", glow: "from-blue-400 to-cyan-300" },
    { name: "Java", icon: "java.png", glow: "from-orange-400 to-yellow-300" },
    { name: "SQL", icon: "sql.png", glow: "from-purple-400 to-pink-300" },
    { name: "JavaScript", icon: "javascript.png", glow: "from-yellow-300 to-orange-300" },
    { name: "HTML & CSS", icon: "html.png", glow: "from-red-400 to-pink-400" },
  ];

  const tools = [
    { name: "VS Code", icon: "vsc.webp" },
    { name: "Vercel", icon: "vercel.png" },
    { name: "Netlify", icon: "netlify.webp" },
    { name: "Eclipse", icon: "eclipse.png" },
    { name: "CodeBlocks", icon: "codeblocks.png" },
    { name: "Canva", icon: "canva.png" },
    { name: "Figma", icon: "figma.png" },
  ];

  const SkillPill = ({ skill }) => (
    <div
      data-aos="zoom-in"
      className={`group flex items-center gap-3 rounded-xl bg-gradient-to-r ${skill.glow} p-[1px] shadow-lg transition-transform duration-300 hover:scale-105`}
    >
      <div className="flex w-full items-center gap-3 rounded-xl bg-gray-950/80 px-4 py-2 backdrop-blur-sm">
        <img
          src={withBase(skill.icon)}
          alt={skill.name}
          className="h-8 w-8 rounded-md object-contain transition group-hover:scale-110"
        />
        <span className="text-base font-semibold text-white/90 group-hover:text-white">
          {skill.name}
        </span>
      </div>
    </div>
  );

  return (
    <section id="skills" className="scroll-mt-20 bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle title={"My Skills"} />

        <p
          data-aos="fade-up"
          className="mx-auto mb-12 max-w-3xl text-center text-white/80"
        >
          I design gameplay systems and interactive mechanics that feel tight, responsive, and optimized.
          Below are the core areas I specialize in — from real-time game logic to scalable full-stack development.
        </p>

        {/* Core Gameplay Skills */}
        <div data-aos="fade-up" className="mb-12">
          <h3 className="mb-5 text-center text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-300">
            Core Gameplay Development
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-6xl mx-auto">
            {coreSkills.map((s, i) => (
              <SkillPill key={i} skill={s} />
            ))}
          </div>
        </div>

        {/* Programming Skills */}
        <div data-aos="fade-up" className="mb-12">
          <h3 className="mb-5 text-center text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
            Programming Languages
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-6xl mx-auto">
            {programming.map((s, i) => (
              <SkillPill key={i} skill={s} />
            ))}
          </div>
        </div>

        {/* Web & Backend Skills */}
        <div data-aos="fade-up" className="mb-12">
          <h3 className="mb-5 text-center text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
            Web & Backend Development
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-6xl mx-auto">
            {webSkills.map((s, i) => (
              <SkillPill key={i} skill={s} />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div data-aos="fade-up" className="mt-12">
          <p className="my-5 text-center text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#0088ffc6] to-[#00ffd0]">
            Tools I Use
          </p>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900"
              aria-hidden="true"
            />
            <Marquee autoFill gradient={false} speed={45}>
              {tools.map((tool, i) => (
                <div
                  key={tool.name + i}
                  className="mr-10 flex items-center justify-center"
                >
                  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/90 transition hover:scale-105 hover:bg-white/10">
                    <img
                      className="h-8 w-8 object-contain drop-shadow-sm"
                      title={tool.name}
                      src={withBase(tool.icon)}
                      alt={tool.name}
                    />
                    <span className="text-sm">{tool.name}</span>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#projects"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-300 px-6 py-3 font-semibold text-gray-900 shadow-lg transition hover:from-cyan-300 hover:to-emerald-200"
          >
            See Projects in Action
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
