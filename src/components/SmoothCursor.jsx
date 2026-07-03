import { motion, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Normal hand cursor (your existing one)
const DefaultCursorSVG = ({ isMoving }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 32 32"
    fill="none"
    style={{
      filter: "drop-shadow(0 8px 48px #5227ff99)",
      transition: "transform 0.2s cubic-bezier(.4,2,.6,1)",
      transform: isMoving ? "scale(1.12) rotate(-8deg)" : "scale(1) rotate(0deg)",
      pointerEvents: "none",
      display: "block",
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path fill="#FFFFFF" d="M11.3,20.4c-0.3-0.4-0.6-1.1-1.2-2c-0.3-0.5-1.2-1.5-1.5-1.9
        c-0.2-0.4-0.2-0.6-0.1-1c0.1-0.6,0.7-1.1,1.4-1.1c0.5,0,1,0.4,1.4,0.7c0.2,0.2,0.5,0.6,0.7,0.8c0.2,0.2,0.2,0.3,0.4,0.5
        c0.2,0.3,0.3,0.5,0.2,0.1c-0.1-0.5-0.2-1.3-0.4-2.1c-0.1-0.6-0.2-0.7-0.3-1.1c-0.1-0.5-0.2-0.8-0.3-1.3c-0.1-0.3-0.2-1.1-0.3-1.5
        c-0.1-0.5-0.1-1.4,0.3-1.8c0.3-0.3,0.9-0.4,1.3-0.2c0.5,0.3,0.8,1,0.9,1.3c0.2,0.5,0.4,1.2,0.5,2c0.2,1,0.5,2.5,0.5,2.8
        c0-0.4-0.1-1.1,0-1.5c0.1-0.3,0.3-0.7,0.7-0.8c0.3-0.1,0.6-0.1,0.9-0.1c0.3,0.1,0.6,0.3,0.8,0.5c0.4,0.6,0.4,1.9,0.4,1.8
        c0.1-0.4,0.1-1.2,0.3-1.6c0.1-0.2,0.5-0.4,0.7-0.5c0.3-0.1,0.7-0.1,1,0c0.2,0,0.6,0.3,0.7,0.5c0.2,0.3,0.3,1.3,0.4,1.7
        c0,0.1,0.1-0.4,0.3-0.7c0.4-0.6,1.8-0.8,1.9,0.6c0,0.7,0,0.6,0,1.1c0,0.5,0,0.8,0,1.2c0,0.4-0.1,1.3-0.2,1.7
        c-0.1,0.3-0.4,1-0.7,1.4c0,0-1.1,1.2-1.2,1.8c-0.1,0.6-0.1,0.6-0.1,1c0,0.4,0.1,0.9,0.1,0.9s-0.8,0.1-1.2,0c-0.4-0.1-0.9-0.8-1-1.1
        c-0.2-0.3-0.5-0.3-0.7,0c-0.2,0.4-0.7,1.1-1.1,1.1c-0.7,0.1-2.1,0-3.1,0c0,0,0.2-1-0.2-1.4c-0.3-0.3-0.8-0.8-1.1-1.1L11.3,20.4z"/>
      <path fill="none" stroke="#000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="
        M11.3,20.4c-0.3-0.4-0.6-1.1-1.2-2c-0.3-0.5-1.2-1.5-1.5-1.9c-0.2-0.4-0.2-0.6-0.1-1c0.1-0.6,0.7-1.1,1.4-1.1
        c0.5,0,1,0.4,1.4,0.7c0.2,0.2,0.5,0.6,0.7,0.8c0.2,0.2,0.2,0.3,0.4,0.5c0.2,0.3,0.3,0.5,0.2,0.1
        c-0.1-0.5-0.2-1.3-0.4-2.1c-0.1-0.6-0.2-0.7-0.3-1.1c-0.1-0.5-0.2-0.8-0.3-1.3c-0.1-0.3-0.2-1.1-0.3-1.5
        c-0.1-0.5-0.1-1.4,0.3-1.8c0.3-0.3,0.9-0.4,1.3-0.2c0.5,0.3,0.8,1,0.9,1.3c0.2,0.5,0.4,1.2,0.5,2
        c0.2,1,0.5,2.5,0.5,2.8c0-0.4-0.1-1.1,0-1.5c0.1-0.3,0.3-0.7,0.7-0.8c0.3-0.1,0.6-0.1,0.9-0.1
        c0.3,0.1,0.6,0.3,0.8,0.5c0.4,0.6,0.4,1.9,0.4,1.8c0.1-0.4,0.1-1.2,0.3-1.6c0.1-0.2,0.5-0.4,0.7-0.5
        c0.3-0.1,0.7-0.1,1,0c0.2,0,0.6,0.3,0.7,0.5c0.2,0.3,0.3,1.3,0.4,1.7c0,0.1,0.1-0.4,0.3-0.7
        c0.4-0.6,1.8-0.8,1.9,0.6c0,0.7,0,0.6,0,1.1c0,0.5,0,0.8,0,1.2c0,0.4-0.1,1.3-0.2,1.7
        c-0.1,0.3-0.4,1-0.7,1.4c0,0-1.1,1.2-1.2,1.8c-0.1,0.6-0.1,0.6-0.1,1c0,0.4,0.1,0.9,0.1,0.9s-0.8,0.1-1.2,0c-0.4-0.1-0.9-0.8-1-1.1
        c-0.2-0.3-0.5-0.3-0.7,0c-0.2,0.4-0.7,1.1-1.1,1.1c-0.7,0.1-2.1,0-3.1,0c0,0,0.2-1-0.2-1.4c-0.3-0.3-0.8-0.8-1.1-1.1L11.3,20.4z"/>
    </g>
  </svg>
);

// Pointer hand SVG (the one you just provided)
const PointerCursorSVG = ({ isMoving }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 32 32"
    fill="none"
    style={{
      filter: "drop-shadow(0 8px 48px #5227ff99)",
      transition: "transform 0.2s cubic-bezier(.4,2,.6,1)",
      transform: isMoving ? "scale(1.12) rotate(-8deg)" : "scale(1) rotate(0deg)",
      pointerEvents: "none",
      display: "block",
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <defs>
        <rect id="SVGID_1_" width="32" height="32"/>
      </defs>
      <clipPath id="SVGID_2_">
        <use xlinkHref="#SVGID_1_" overflow="visible"/>
      </clipPath>
      <path clipPath="url(#SVGID_2_)" fill="#FFFFFF" d="M12.6,16.6c-0.1-0.4-0.2-0.8-0.4-1.6c-0.2-0.6-0.3-0.9-0.5-1.2
        c-0.2-0.5-0.3-0.7-0.5-1.2c-0.1-0.3-0.4-1-0.5-1.4c-0.1-0.5,0-0.9,0.2-1.2c0.3-0.3,1-0.5,1.4-0.4c0.4,0.1,0.7,0.5,0.9,0.8
        c0.3,0.5,0.4,0.6,0.7,1.5c0.4,1,0.6,1.9,0.6,2.2l0.1,0.5c0,0,0-1.1,0-1.2c0-1-0.1-1.8,0-2.9c0-0.1,0.1-0.6,0.1-0.7
        c0.1-0.5,0.3-0.8,0.7-1c0.4-0.2,0.9-0.2,1.4,0c0.4,0.2,0.6,0.5,0.7,1c0,0.1,0.1,1,0.1,1.1c0,1,0,1.6,0,2.2c0,0.2,0,1.6,0,1.5
        c0.1-0.7,0.1-3.2,0.3-3.9c0.1-0.4,0.4-0.7,0.8-0.9c0.4-0.2,1.1-0.1,1.4,0.2c0.3,0.3,0.4,0.7,0.5,1.2c0,0.4,0,0.9,0,1.2
        c0,0.9,0,1.3,0,2.1c0,0,0,0.3,0,0.2c0.1-0.3,0.2-0.5,0.3-0.7c0-0.1,0.2-0.6,0.4-0.9c0.1-0.2,0.2-0.4,0.4-0.7
        c0.2-0.3,0.4-0.4,0.7-0.6c0.5-0.2,1.1,0.1,1.3,0.6c0.1,0.2,0,0.7,0,1.1c-0.1,0.6-0.3,1.3-0.4,1.6c-0.1,0.4-0.3,1.2-0.3,1.6
        c-0.1,0.4-0.2,1.4-0.4,1.8c-0.1,0.3-0.4,1-0.7,1.4c0,0-1.1,1.2-1.2,1.8c-0.1,0.6-0.1,0.6-0.1,1c0,0.4,0.1,0.9,0.1,0.9
        s-0.8,0.1-1.2,0c-0.4-0.1-0.9-0.8-1-1.1c-0.2-0.3-0.5-0.3-0.7,0c-0.2,0.4-0.7,1.1-1.1,1.1c-0.7,0.1-2.1,0-3.1,0c0,0,0.2-1-0.2-1.4
        c-0.3-0.3-0.8-0.8-1.1-1.1l-0.8-0.9c-0.3-0.4-0.6-1.1-1.2-2c-0.3-0.5-1-1.1-1.3-1.6c-0.2-0.4-0.3-1-0.2-1.3
        c0.2-0.6,0.7-0.9,1.4-0.8c0.5,0,0.8,0.2,1.2,0.5c0.2,0.2,0.6,0.5,0.8,0.7c0.2,0.2,0.2,0.3,0.4,0.5
        C12.6,16.8,12.6,16.9,12.6,16.6"
      />
      <path clipPath="url(#SVGID_2_)" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="
        M12.6,16.6c-0.1-0.4-0.2-0.8-0.4-1.6c-0.2-0.6-0.3-0.9-0.5-1.2c-0.2-0.5-0.3-0.7-0.5-1.2c-0.1-0.3-0.4-1-0.5-1.4
        c-0.1-0.5,0-0.9,0.2-1.2c0.3-0.3,1-0.5,1.4-0.4c0.4,0.1,0.7,0.5,0.9,0.8c0.3,0.5,0.4,0.6,0.7,1.5c0.4,1,0.6,1.9,0.6,2.2l0.1,0.5
        c0,0,0-1.1,0-1.2c0-1-0.1-1.8,0-2.9c0-0.1,0.1-0.6,0.1-0.7c0.1-0.5,0.3-0.8,0.7-1c0.4-0.2,0.9-0.2,1.4,0c0.4,0.2,0.6,0.5,0.7,1
        c0,0.1,0.1,1,0.1,1.1c0,1,0,1.6,0,2.2c0,0.2,0,1.6,0,1.5c0.1-0.7,0.1-3.2,0.3-3.9c0.1-0.4,0.4-0.7,0.8-0.9c0.4-0.2,1.1-0.1,1.4,0.2
        c0.3,0.3,0.4,0.7,0.5,1.2c0,0.4,0,0.9,0,1.2c0,0.9,0,1.3,0,2.1c0,0,0,0.3,0,0.2c0.1-0.3,0.2-0.5,0.3-0.7c0-0.1,0.2-0.6,0.4-0.9
        c0.1-0.2,0.2-0.4,0.4-0.7c0.2-0.3,0.4-0.4,0.7-0.6c0.5-0.2,1.1,0.1,1.3,0.6c0.1,0.2,0,0.7,0,1.1c-0.1,0.6-0.3,1.3-0.4,1.6
        c-0.1,0.4-0.3,1.2-0.3,1.6c-0.1,0.4-0.2,1.4-0.4,1.8c-0.1,0.3-0.4,1-0.7,1.4c0,0-1.1,1.2-1.2,1.8c-0.1,0.6-0.1,0.6-0.1,1
        c0,0.4,0.1,0.9,0.1,0.9s-0.8,0.1-1.2,0c-0.4-0.1-0.9-0.8-1-1.1c-0.2-0.3-0.5-0.3-0.7,0c-0.2,0.4-0.7,1.1-1.1,1.1
        c-0.7,0.1-2.1,0-3.1,0c0,0,0.2-1-0.2-1.4c-0.3-0.3-0.8-0.8-1.1-1.1l-0.8-0.9c-0.3-0.4-0.6-1.1-1.2-2c-0.3-0.5-1-1.1-1.3-1.6
        c-0.2-0.4-0.3-1-0.2-1.3c0.2-0.6,0.7-0.9,1.4-0.8c0.5,0,0.8,0.2,1.2,0.5c0.2,0.2,0.6,0.5,0.8,0.7c0.2,0.2,0.2,0.3,0.4,0.5
        C12.6,16.8,12.6,16.9,12.6,16.6"/>
      <line clipPath="url(#SVGID_2_)" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" x1="19.6" y1="20.7" x2="19.6" y2="17.3"/>
      <line clipPath="url(#SVGID_2_)" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" x1="17.6" y1="20.7" x2="17.5" y2="17.3"/>
      <line clipPath="url(#SVGID_2_)" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" x1="15.6" y1="17.3" x2="15.6" y2="20.7"/>
    </g>
  </svg>
);

export function SmoothCursor({
  cursor,
  springConfig = {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 0.001,
  },
}) {
  const [mounted, setMounted] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const lastUpdateTime = useRef(Date.now());
  const previousAngle = useRef(0);
  const accumulatedRotation = useRef(0);

  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const rotation = useSpring(0, {
    ...springConfig,
    damping: 60,
    stiffness: 300,
  });
  const scale = useSpring(1, {
    ...springConfig,
    stiffness: 500,
    damping: 35,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateVelocity = (currentPos) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastUpdateTime.current;

      if (deltaTime > 0) {
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) / deltaTime,
          y: (currentPos.y - lastMousePos.current.y) / deltaTime,
        };
      }

      lastUpdateTime.current = currentTime;
      lastMousePos.current = currentPos;
    };

    const smoothMouseMove = (e) => {
      const currentPos = { x: e.clientX, y: e.clientY };
      updateVelocity(currentPos);

      const speed = Math.sqrt(
        Math.pow(velocity.current.x, 2) + Math.pow(velocity.current.y, 2)
      );

      cursorX.set(currentPos.x);
      cursorY.set(currentPos.y);

      if (speed > 0.1) {
        const currentAngle =
          Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) +
          90;

        let angleDiff = currentAngle - previousAngle.current;
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;
        accumulatedRotation.current += angleDiff;
        rotation.set(accumulatedRotation.current);
        previousAngle.current = currentAngle;

        scale.set(0.95);
        setIsMoving(true);

        const timeout = setTimeout(() => {
          scale.set(1);
          setIsMoving(false);
        }, 150);

        return () => clearTimeout(timeout);
      }
    };

    let rafId;
    const throttledMouseMove = (e) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        smoothMouseMove(e);
        rafId = 0;
      });
    };

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", throttledMouseMove);

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
      document.body.style.cursor = "auto";
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [cursorX, cursorY, rotation, scale]);

  useEffect(() => {
    // Listen for mouseover/mouseout to detect pointer elements
    const handlePointer = (e) => {
      let el = e.target;
      let pointer = false;
      while (el) {
        const tag = el.tagName?.toLowerCase();
        if (
          tag === "a" ||
          tag === "button" ||
          tag === "input" ||
          tag === "textarea" ||
          tag === "select" ||
          el.getAttribute?.("role") === "button" ||
          el.tabIndex >= 0 ||
          window.getComputedStyle(el).cursor === "pointer"
        ) {
          pointer = true;
          break;
        }
        el = el.parentElement;
      }
      setIsPointer(pointer);
    };
    window.addEventListener("mousemove", handlePointer);
    return () => window.removeEventListener("mousemove", handlePointer);
  }, []);

  if (!mounted) return null;

  const cursorContent = (
    <motion.div
      style={{
        position: "fixed",
        left: cursorX,
        top: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        rotate: rotation,
        scale: scale,
        zIndex: 99999,
        pointerEvents: "none",
        willChange: "transform",
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
      className="hidden lg:block"
    >
      {isPointer ? <PointerCursorSVG isMoving={isMoving} /> : <DefaultCursorSVG isMoving={isMoving} />}
    </motion.div>
  );

  return createPortal(cursorContent, document.body);
}

export default SmoothCursor;
