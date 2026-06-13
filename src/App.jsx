import { useState, useEffect } from "react";

/* ── UI Components ── */
import Navbar        from "./components/ui/Navbar";
import LoadingScreen from "./components/ui/LoadingScreen";
import Reveal        from "./components/ui/Reveal";
import Footer        from "./components/ui/Footer";

/* ── Section Components ── */
import Hero       from "./components/sections/Hero";
import About      from "./components/sections/About";
import Skills     from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects   from "./components/sections/Projects";
import Contact    from "./components/sections/Contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading,  setLoading]  = useState(true);

  /* Apply dark class to <html> for Tailwind v4 dark: utilities */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const bg = darkMode ? "#0f072a" : "#1e1245";

  return (
    <>
      {/* Loading Screen — fades out automatically */}
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}

      <div
        style={{
          background:  bg,
          color:       "#ffffff",
          minHeight:   "100vh",
          fontFamily:  "'Nunito', sans-serif",
          visibility:  loading ? "hidden" : "visible",
          transition:  "background 0.5s ease",
        }}
      >
        {/* Floating glassmorphic bottom navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Hero — no Reveal (it IS the landing) */}
        <Hero />

        {/* All other sections animate in on scroll */}
        <Reveal direction="up">
          <About />
        </Reveal>

        <Reveal direction="up" delay={0.05}>
          <Skills />
        </Reveal>

        <Reveal direction="left" delay={0.05}>
          <Experience />
        </Reveal>

        <Reveal direction="up" delay={0.05}>
          <Projects />
        </Reveal>

        <Reveal direction="up" delay={0.05}>
          <Contact />
        </Reveal>

        <Footer />
      </div>
    </>
  );
}
