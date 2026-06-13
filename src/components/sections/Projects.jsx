import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import { PROJECTS } from "../../data/portfolioData";

function ProjectChip({ name, accent }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11.5px] font-bold cursor-default transition-all duration-200"
      style={{
        border:     `1px solid ${hovered ? `${accent}55` : "rgba(255,255,255,0.09)"}`,
        background: hovered ? `${accent}14` : "rgba(255,255,255,0.04)",
        color:      hovered ? "#fff"        : "rgba(255,255,255,0.7)",
      }}
    >
      <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: accent }} />
      {name}
    </span>
  );
}

function FeaturedCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden transition-all duration-300 mb-5"
      style={{
        border:     `1px solid ${hovered ? "rgba(167,139,250,0.7)" : "rgba(124,58,237,0.45)"}`,
        background: "rgba(124,58,237,0.06)",
        transform:  hovered ? "translateY(-4px)" : "none",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(90deg,#7c3aed,#a78bfa,#7c3aed)", borderRadius: "20px 20px 0 0" }} />
      <div className="absolute top-[-60px] right-[-60px] w-[220px] h-[220px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(124,58,237,0.18),transparent 70%)" }} />

      <div className="relative p-7 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ background: "rgba(124,58,237,0.18)", border: "1px solid rgba(124,58,237,0.35)" }}>
              {project.icon}
            </div>
            <div>
              <p className="text-[22px] font-black text-white m-0 leading-tight">{project.name}</p>
              <p className="text-[12px] text-white/50 font-semibold mt-1">{project.subtitle}</p>
            </div>
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full flex-shrink-0"
            style={{ color: "#a78bfa", background: "rgba(124,58,237,0.18)", border: "1px solid rgba(167,139,250,0.3)" }}>
            {project.badge}
          </span>
        </div>

        <p className="text-[13px] text-white/58 leading-[1.75] mb-5 max-w-2xl">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((s) => <ProjectChip key={s} name={s} accent={project.accent} />)}
        </div>

        <a href={project.link} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[13px] font-extrabold text-white transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ background: "linear-gradient(135deg,#7c3aed,#4c1d95)", boxShadow: "0 4px 18px rgba(124,58,237,0.45)" }}>
          View Live Project
          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function MiniCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        border:     `1px solid ${hovered ? project.accentDim : "rgba(255,255,255,0.07)"}`,
        background: "rgba(255,255,255,0.03)",
        transform:  hovered ? "translateY(-4px)" : "none",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: project.accent, opacity: 0.8, borderRadius: "18px 18px 0 0" }} />
      <div className="p-6 pt-7">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            style={{ background: project.accentBg }}>
            {project.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[15px] font-black text-white m-0 leading-tight">{project.name}</p>
            <p className="text-[11px] text-white/45 font-semibold mt-0.5">{project.subtitle}</p>
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full flex-shrink-0"
            style={{ color: project.accent, background: project.accentBg, border: `1px solid ${project.accentDim}` }}>
            {project.badge}
          </span>
        </div>
        <p className="text-[12px] text-white/52 leading-[1.7] mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((s) => <ProjectChip key={s} name={s} accent={project.accent} />)}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[13px] font-extrabold text-white transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ background: "linear-gradient(135deg,#7c3aed,#4c1d95)", boxShadow: "0 4px 18px rgba(124,58,237,0.45)" }}>
          View Live Project
          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        {/* <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white/28">⚙ Not deployed</span> */}
      </div>
    </div>
  );
}

function MoreCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden transition-all duration-300 flex items-center justify-center my-4"
      style={{
        border:     `1px solid ${hovered ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.07)"}`,
        background: "rgba(255,255,255,0.02)",
        transform:  hovered ? "translateY(-4px)" : "none",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "rgba(255,255,255,0.08)", borderRadius: "18px 18px 0 0" }} />
      <p className="text-[13px] font-bold text-white/28 my-2 leading-tight">More projects in the pipeline...</p>
    </div>
  );
}

export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured);
  const mini     = PROJECTS.filter((p) => !p.featured);
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full mx-auto">
        <SectionHeader label="Featured Work" title="Projects I've Shipped" />
        <FeaturedCard project={featured} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {mini.map((p) => <MiniCard key={p.name} project={p} />)}
        </div>
        <MoreCard />
      </div>
    </section>
  );
}
