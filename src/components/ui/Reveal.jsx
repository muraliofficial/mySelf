import { useScrollReveal } from "../../hooks/useScrollReveal";

const TRANSFORMS = {
  up:    "translateY(40px)",
  down:  "translateY(-40px)",
  left:  "translateX(-40px)",
  right: "translateX(40px)",
};

/**
 * Reveal — wraps any content with a scroll-triggered
 * fade-in + slide animation.
 *
 * Props:
 *   direction  "up" | "down" | "left" | "right"  (default "up")
 *   delay      seconds (default 0)
 */
export default function Reveal({ children, delay = 0, direction = "up" }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "none" : TRANSFORMS[direction],
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
