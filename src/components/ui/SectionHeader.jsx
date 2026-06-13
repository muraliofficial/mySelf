export default function SectionHeader({ label, title }) {
  return (
    <div className="text-center mb-14">
      <span
        className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] px-4 py-1.5 rounded-full mb-4 border"
        style={{
          color:       "#a78bfa",
          borderColor: "rgba(167,139,250,0.28)",
          background:  "rgba(124,58,237,0.1)",
        }}
      >
        {label}
      </span>

      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-black text-white"
        style={{ fontFamily: "'Nunito', sans-serif" }}
      >
        {title}
      </h2>

      <div className="flex items-center justify-center gap-2 mt-4">
        <div className="w-12 h-px"  style={{ background: "rgba(124,58,237,0.55)" }} />
        <div className="w-2 h-2 rounded-full" style={{ background: "#7c3aed" }} />
        <div className="w-12 h-px"  style={{ background: "rgba(124,58,237,0.55)" }} />
      </div>
    </div>
  );
}
