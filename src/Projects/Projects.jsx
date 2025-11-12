import { useEffect, useMemo, useState } from "react";
import { withBase } from "../Hooks/withBase";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Projects.css";

const PROJECTS = [
  {
    id: "seconds",
    title: "Seconds to Spare",
    subtitle: "3D time manipulation puzzle",
    status: "Shipped",
    role: "Developer — terminals, optimization, QA",
    cover: "seconds.png",
    href: "https://xelaronnoc.itch.io/seconds-to-spare",
    description:
      "First-person puzzle experience built around synchronized time interactions and readable feedback loops. I owned terminal interactions, performance improvements, and contributed to bug fixing and QA. Released on itch.io with a plan to prepare a future Steam build.",
    tech: ["Unity", "C#", "Profiling", "QA", "Git"],
  },
  {
    id: "parry",
    title: "Parry Hero",
    subtitle: "Reaction-focused parry game",
    status: "Shipped",
    role: "Solo developer — game jam",
    cover: "parryhero.png",
    href: "https://moin-uddin-sami.itch.io/parryhero",
    description:
      "Solo jam project centered on precise timing windows and instant visual/audio feedback. Built for quick reads, tight feel, and fast iteration under time constraints.",
    tech: ["Unity", "C#", "Game Feel", "SFX/UX", "Git"],
    badge: "Game Jam",
  },
  {
    id: "damned",
    title: "Path of the Damned",
    subtitle: "Procedural roguelike CRPG",
    status: "WIP",
    role: "Lead developer",
    cover: "damned.png",
    href: "https://moin-uddin-sami.itch.io/path-of-the-damned-showcase",
    description:
      "Work-in-progress roguelike focused on procedural spaces, encounter pacing, and tactical combat. Iterating on progression, AI behavior, and run-to-run variety.",
    tech: ["Unity", "C#", "Procedural", "AI", "Git"],
  },
  {
    id: "dragon",
    title: "Way of the Dragon",
    subtitle: "MERN eLearning platform",
    status: "Shipped",
    role: "Full-stack developer",
    cover: "wayofthedragon.png",
    href: "https://way-of-the-dragon.web.app/",
    description:
      "Sample martial arts course platform with secure auth, payments, and instructor flows. Emphasis on responsiveness and clean UX across the stack. Made as a side-project intending to showcase my abilities as a Full-Stack Developer.",
    tech: ["React", "Node", "Express", "MongoDB", "Stripe", "Firebase"],
  },
];

// ---------- URL helpers (HashRouter-friendly) ----------
function readProjectIdFromURL() {
  const raw = window.location.hash || ""; // e.g. "#/", "#/?project=seconds", or "#/#projects?project=seconds"

  // Legacy double-hash format: "#/#projects?project=seconds"
  if (raw.includes("#projects")) {
    const q = raw.split("?")[1] || "";
    const pid = new URLSearchParams(q).get("project");
    return pid;
  }

  // Clean HashRouter format: "#/?project=seconds"
  if (raw.startsWith("#/")) {
    const idx = raw.indexOf("?");
    if (idx !== -1) {
      const qs = new URLSearchParams(raw.slice(idx + 1));
      return qs.get("project");
    }
  }
  return null;
}

function setURLForProject(id) {
  const url = new URL(window.location.href);
  url.hash = id ? `/?project=${encodeURIComponent(id)}` : `#/`;
  window.history.pushState({}, "", url.toString());
}

function scrollToProjects() {
  const el = document.getElementById("projects");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ---------- UI bits ----------
const StatusPill = ({ status }) => {
  const color =
    status === "Shipped"
      ? "bg-emerald-500/90 text-emerald-950"
      : "bg-amber-400/90 text-amber-950";
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${color}`}>
      {status}
    </span>
  );
};

// ---------- Main ----------
export default function Projects() {
  const [openId, setOpenId] = useState(null);
  const openProject = useMemo(
    () => PROJECTS.find((p) => p.id === openId) || null,
    [openId]
  );

  useEffect(() => {
    const applyFromURL = () => {
      const pid = readProjectIdFromURL();
      setOpenId(pid);
      const hash = window.location.hash || "";
      if (hash.includes("projects")) scrollToProjects();
    };

    applyFromURL();
    window.addEventListener("popstate", applyFromURL);
    window.addEventListener("hashchange", applyFromURL);
    return () => {
      window.removeEventListener("popstate", applyFromURL);
      window.removeEventListener("hashchange", applyFromURL);
    };
  }, []);

  const handleOpen = (id) => {
    setOpenId(id);
    setURLForProject(id);
    scrollToProjects();
  };

  const handleClose = () => {
    setOpenId(null);
    setURLForProject(null);
  };

  return (
    <section id="projects" className="bg-gray-900 py-14">
      <div className="container mx-auto px-4">
        <SectionTitle title={"My Projects"} />

        {/* ---------- Grid ---------- */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.id}
              className="relative group overflow-hidden h-[600px] bg-black rounded-xl border border-white/10"
            >
              {/* Background image with vertical scroll on hover */}
              <div
                className="absolute inset-0 bg-cover bg-top transition-all duration-[5s] ease-in-out group-hover:bg-bottom"
                style={{ backgroundImage: `url("${withBase(p.cover)}")` }}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/0" />

              {/* Bar */}
              <div className="absolute left-0 right-0 top-0 flex items-center justify-between gap-3 bg-black/60 px-4 py-3 backdrop-blur-sm border-b border-cyan-500/70">
                <div className="flex items-center gap-2">
                  <StatusPill status={p.status} />
                  {p.badge && (
                    <span className="inline-flex items-center rounded-full bg-cyan-400/90 px-2 py-0.5 text-xs font-semibold text-cyan-950">
                      {p.badge}
                    </span>
                  )}
                </div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-md bg-white/10 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  {p.id === "dragon" ? `Live Link` : `View on Itch`}
                </a>
              </div>

              {/* Title + details */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5">
                <h3 className="text-2xl font-semibold text-white drop-shadow-md">
                  {p.title}{" "}
                  {p.subtitle && (
                    <span className="text-white/70 text-lg font-normal">· {p.subtitle}</span>
                  )}
                </h3>
                <p className="mt-1 text-sm text-white/80">{p.role}</p>

                {/* Tech tags */}
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-white/10 px-2 py-1 text-xs font-medium text-white/90"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => handleOpen(p.id)}
                    className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-300 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:from-cyan-300 hover:to-emerald-200"
                  >
                    Project details
                  </button>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Play / View
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ---------- Modal ---------- */}
        {openProject && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <div
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-gray-950 ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative h-44 bg-cover bg-top transition-all duration-[5s] ease-in-out hover:bg-bottom"
                style={{ backgroundImage: `url("${withBase(openProject.cover)}")` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/0" />
                <div className="absolute left-0 right-0 top-0 flex items-center justify-between bg-black/30 px-4 py-2 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <StatusPill status={openProject.status} />
                    {openProject.badge && (
                      <span className="inline-flex items-center rounded-full bg-cyan-400/90 px-2 py-0.5 text-xs font-semibold text-cyan-950">
                        {openProject.badge}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={handleClose}
                    aria-label="Close dialog"
                    className="rounded-md bg-white/10 px-2 py-1 text-sm text-white transition hover:bg-white/20"
                  >
                    ✕
                  </button>
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-2xl font-semibold text-white">
                    {openProject.title}{" "}
                    {openProject.subtitle && (
                      <span className="text-white/70 font-normal">
                        · {openProject.subtitle}
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-white/85">{openProject.role}</p>
                </div>
              </div>

              <div className="space-y-4 p-5 text-white/90">
                <p className="leading-relaxed">{openProject.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-white/90">Tech</h4>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {openProject.tech.map((t) => (
                      <li key={t} className="rounded-md bg-white/10 px-2 py-1 text-xs">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={openProject.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-300 px-4 py-2 font-semibold text-gray-900 transition hover:from-cyan-300 hover:to-emerald-200"
                  >
                    {openProject.id === "dragon" ? `View Website` : `Play on Itch`}
                  </a>
                  <button
                    onClick={handleClose}
                    className="inline-flex items-center rounded-lg border border-white/20 px-4 py-2 font-semibold text-white transition hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
