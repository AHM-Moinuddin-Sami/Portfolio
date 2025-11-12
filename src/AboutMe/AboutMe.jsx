import { useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { withBase } from "../Hooks/withBase";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 600, offset: 80 });
  }, []);

  return (
    <section id="about" className="bg-gray-900 py-14">
      <div className="container mx-auto px-4">
        <SectionTitle title={"About Me"} />

        <div
          data-aos="fade-up"
          className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[280px_1fr]"
        >
          {/* Left: Avatar + quick links */}
          <aside className="flex flex-col items-center gap-5">
            <img
              src={withBase("SamiCropped.png")}
              alt="Portrait of A H M Moin Uddin Sami"
              className="h-48 w-48 rounded-full object-cover ring-2 ring-cyan-300/40"
            />

            {/* Socials */}
            <nav aria-label="Social links" className="flex items-center gap-4">
              <a
                href="https://github.com/AHM-Moinuddin-Sami"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center rounded-full p-2 ring-1 ring-white/10 transition hover:bg-white/10"
                aria-label="GitHub"
                title="GitHub"
              >
                {/* GitHub icon */}
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white/90">
                  <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2c-3.22.7-3.9-1.39-3.9-1.39-.53-1.33-1.3-1.69-1.3-1.69-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.21 1.78 1.21 1.04 1.78 2.72 1.26 3.38.96.1-.76.4-1.26.73-1.55-2.57-.29-5.28-1.28-5.28-5.71 0-1.26.45-2.28 1.2-3.08-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.6.23 2.78.11 3.07.75.8 1.2 1.82 1.2 3.08 0 4.44-2.71 5.41-5.3 5.7.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/a-h-m-moin-uddin-sami-164b3b252/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center rounded-full p-2 ring-1 ring-white/10 transition hover:bg-white/10"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                {/* LinkedIn icon */}
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white/90">
                  <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5Zm.02 5.5H2V22h3V9ZM22 13.5c0-4.02-2.15-5.9-5.01-5.9-2.31 0-3.35 1.27-3.93 2.16V9H9v13h3.99v-7.13c0-1.87.35-3.68 2.67-3.68 2.29 0 2.33 2.14 2.33 3.8V22H22Z"/>
                </svg>
              </a>

              <a
                href="mailto:moinuddinsami1205@gmail.com"
                className="group inline-flex items-center justify-center rounded-full p-2 ring-1 ring-white/10 transition hover:bg-white/10"
                aria-label="Email"
                title="Email"
              >
                {/* Mail icon */}
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white/90">
                  <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.35l-10 6.25L2 6.35V6Zm0 2.73V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.73l-9.37 5.86a2 2 0 0 1-2.26 0L2 8.73Z"/>
                </svg>
              </a>
            </nav>

            {/* Actions */}
            <div className="flex w-full flex-col items-stretch gap-3 pt-2 sm:flex-row">
              <a
                href={withBase("Resume.pdf")}
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-300 px-5 py-2 font-semibold text-gray-900 transition hover:from-cyan-300 hover:to-emerald-200"
                download
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-2 font-semibold text-white transition hover:bg-white/10"
              >
                Contact
              </a>
            </div>
          </aside>

          {/* Right: Copy */}
          <article className="text-white">
            {/* Headline */}
            <h3 className="text-2xl font-semibold tracking-tight">
              Gameplay Programmer and Software Developer
            </h3>
            <p className="mt-2 text-white/80">
              I build responsive gameplay systems in Unity and C# that connect technical precision with engaging player
              experiences. I study Information Technology in Software Technology at Macquarie University and focus on
              system design, optimization, and collaborative workflows.
            </p>

            {/* Projects summary */}
            <div className="mt-6 grid gap-4">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <h4 className="font-semibold">Seconds to Spare <span className="text-white/60">(shipped on itch.io)</span></h4>
                <p className="mt-1 text-white/80">
                  3D time manipulation puzzle game. I owned terminal interactions and optimization and contributed to
                  bug fixing and QA testing.{" "}
                  <a href="[insert Seconds to Spare itch link]" className="text-cyan-300 underline underline-offset-2">
                    View project
                  </a>
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <h4 className="font-semibold">
                  Parry Hero <span className="text-white/60">(shipped on itch.io)</span>
                </h4>
                <p className="mt-1 text-white/80">
                  Solo game jam project centered on precision parry timing and clear feedback.{" "}
                  <a href="[insert Parry Hero itch link]" className="text-cyan-300 underline underline-offset-2">
                    View project
                  </a>
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <h4 className="font-semibold">Path of the Damned <span className="text-white/60">(work in progress)</span></h4>
                <p className="mt-1 text-white/80">
                  Procedural roguelike CRPG in active development. I lead development, focusing on encounter flow and
                  systemic progression.{" "}
                  <a href="[insert Path of the Damned itch or devlog link]" className="text-cyan-300 underline underline-offset-2">
                    View project
                  </a>
                </p>
              </div>
            </div>

            {/* What I do best */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold">What I do best</h4>
              <ul className="mt-2 grid list-disc gap-2 pl-5 text-white/85 sm:grid-cols-2">
                <li>Gameplay systems for input, state, timing, and feedback</li>
                <li>Profiling and optimization to keep frame times stable</li>
                <li>Clear docs, PR reviews, and designer-friendly interfaces</li>
                <li>Agile habits with iterative delivery and testing</li>
              </ul>
            </div>

            {/* Tools and tech */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold">Tools and tech</h4>
              <p className="mt-2 text-white/80">
                Unity, C#, Git, gameplay programming, basic shader and VFX integration, build profiling, QA workflows.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-300 px-6 py-3 font-semibold text-gray-900 transition hover:from-cyan-300 hover:to-emerald-200"
              >
                Let’s build something great
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
