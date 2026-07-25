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
  const accent = project.accent || "#7c3aed";
  const accentBg = project.accentBg || "rgba(124,58,237,0.08)";
  const accentDim = project.accentDim || "rgba(124,58,237,0.45)";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden transition-all duration-300 mb-6 group"
      style={{
        border:     `1px solid ${hovered ? accent : accentDim}`,
        background: accentBg,
        transform:  hovered ? "translateY(-4px)" : "none",
        boxShadow:  hovered ? `0 12px 36px ${accent}25` : "none",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${accent}, #ffffff, ${accent})`, borderRadius: "20px 20px 0 0" }} />
      <div className="absolute top-[-60px] right-[-60px] w-[240px] h-[240px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${accent}28, transparent 70%)` }} />

      <div className="relative p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ background: accentBg, border: `1px solid ${accentDim}` }}>
                {project.icon}
              </div>
              <div>
                <p className="text-[22px] font-black text-white m-0 leading-tight">{project.name}</p>
                <p className="text-[12px] text-white/50 font-semibold mt-1">{project.subtitle}</p>
              </div>
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full flex-shrink-0"
              style={{ color: accent, background: accentBg, border: `1px solid ${accentDim}` }}>
              {project.badge}
            </span>
          </div>

          <p className="text-[13px] text-white/70 leading-[1.75] mb-5 max-w-2xl">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((s) => <ProjectChip key={s} name={s} accent={accent} />)}
          </div>

          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[13px] font-extrabold text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)`, boxShadow: `0 4px 18px ${accent}45` }}>
            View Live Project
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {project.image && (
          <div className="w-full md:w-56 h-48 md:h-52 rounded-2xl overflow-hidden flex items-center justify-center p-4 flex-shrink-0 border border-white/10 transition-all duration-300 shadow-2xl"
               style={{ background: `radial-gradient(circle at center, ${accent}20, rgba(0,0,0,0.4))` }}>
            <img src={project.image} alt={project.name} className="max-w-full max-h-full object-contain filter drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-300" />
          </div>
        )}
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
      className="relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
      style={{
        border:     `1px solid ${hovered ? project.accentDim : "rgba(255,255,255,0.07)"}`,
        background: "rgba(255,255,255,0.03)",
        transform:  hovered ? "translateY(-4px)" : "none",
        boxShadow:  hovered ? `0 8px 24px ${project.accent}15` : "none",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: project.accent, opacity: 0.8, borderRadius: "18px 18px 0 0" }} />
      <div className="p-6 pt-7 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start gap-3 mb-3">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 overflow-hidden"
              style={{ background: project.accentBg, border: `1px solid ${project.accentDim}` }}>
              {project.image ? (
                <img src={project.image} alt={project.name} className="w-full h-full object-contain p-1" />
              ) : (
                project.icon
              )}
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
        </div>
        <div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.map((s) => <ProjectChip key={s} name={s} accent={project.accent} />)}
          </div>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[12px] font-extrabold text-white transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ background: `linear-gradient(135deg, ${project.accent}, ${project.accent}bb)`, boxShadow: `0 4px 14px ${project.accent}35` }}>
              View Live Project
              <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function MoreCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col items-center justify-center p-6 text-center h-full min-h-[200px]"
      style={{
        border:     `1px solid ${hovered ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.07)"}`,
        background: "rgba(255,255,255,0.02)",
        transform:  hovered ? "translateY(-4px)" : "none",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "rgba(255,255,255,0.08)", borderRadius: "18px 18px 0 0" }} />
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl mb-2 text-white/40">
        🚀
      </div>
      <p className="text-[13px] font-bold text-white/40 my-1 leading-tight">More projects coming soon...</p>
      <p className="text-[11px] text-white/25">Building exciting web apps continuously</p>
    </div>
  );
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const mini     = PROJECTS.filter((p) => !p.featured);
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full mx-auto">
        <SectionHeader label="Featured Work" title="Projects I've Shipped" />
        {featured.map((p) => (
          <FeaturedCard key={p.name} project={p} />
        ))}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {mini.map((p) => <MiniCard key={p.name} project={p} />)}
          <MoreCard />
        </div>
      </div>
    </section>
  );
}
