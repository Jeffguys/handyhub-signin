import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Mouse-driven 3D stage. Children are laid out on separate Z planes,
 * so the whole hero tilts and parallaxes as one physical object.
 */
const HeroStage = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 120, damping: 20, mass: 0.6 };
  const rotateY = useSpring(px, spring);
  const rotateX = useSpring(py, spring);
  const transform = useMotionTemplate`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    px.set(nx * 12);
    py.set(-ny * 8);
  };

  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="perspective-hero w-full"
    >
      <motion.div style={{ transform }} className="preserve-3d w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
};

export default HeroStage;