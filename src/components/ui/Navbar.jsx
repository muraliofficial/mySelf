import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/portfolioData";

function Icon({ path, size = 17 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} height={size}
      viewBox="0 0 24 24"
      fill="none" stroke="currentColor"
      strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );
}

export default function Navbar({ darkMode, setDarkMode }) {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((n) => n.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed bottom-5 left-1/2 z-50"
      style={{ transform: "translateX(-50%)" }}
      aria-label="Main navigation"
    >
      <div
        className="flex items-center gap-1 px-3 py-2 rounded-2xl border border-white/10"
        style={{
          background:           darkMode ? "rgba(15,7,42,0.82)" : "rgba(55,10,130,0.82)",
          backdropFilter:       "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          boxShadow:            "0 8px 40px rgba(124,58,237,0.35), 0 1px 0 rgba(255,255,255,0.08) inset",
        }}
      >
        {NAV_LINKS.map((link) => {
          const isActive = active === link.href.replace("#", "");
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              title={link.label}
              className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-sm font-medium transition-all duration-200
                ${isActive ? "text-white" : "text-white/55 hover:text-white/90"}`}
              style={
                isActive
                  ? {
                      background: "linear-gradient(135deg,rgba(124,58,237,0.85),rgba(76,29,149,0.9))",
                      boxShadow:  "0 2px 12px rgba(124,58,237,0.55)",
                    }
                  : {}
              }
            >
              <Icon path={link.icon} />
              <span className="hidden md:inline">{link.label}</span>
            </a>
          );
        })}

        {/* Divider */}
        <div className="w-px h-6 bg-white/10 mx-1" />

        {/* Theme toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? "Switch to Light" : "Switch to Dark"}
          className="flex items-center justify-center w-9 h-9 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1"    x2="12" y2="3"    />
              <line x1="12" y1="21"   x2="12" y2="23"   />
              <line x1="4.22" y1="4.22"   x2="5.64"  y2="5.64"  />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1"  y1="12" x2="3"  y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36" />
              <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
