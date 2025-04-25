import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  // Spring animation for smooth cursor movement
  const springConfig = { damping: 20, stiffness: 2000, mass: 0.2 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  // Spring animation for outer cursor with different settings
  const outerSpringConfig = { damping: 20, stiffness: 1500, mass: 0.3 };
  const outerCursorX = useSpring(0, outerSpringConfig);
  const outerCursorY = useSpring(0, outerSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursorX.set(clientX);
      cursorY.set(clientY);
      outerCursorX.set(clientX);
      outerCursorY.set(clientY);
      setMousePosition({ x: clientX, y: clientY });
    };

    const handlePointerCheck = () => {
      const hoveredElement = document.elementFromPoint(mousePosition.x, mousePosition.y);
      const isClickable = hoveredElement?.matches('button, a, input, textarea, select, [role="button"]') || false;
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handlePointerCheck);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handlePointerCheck);
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY, outerCursorX, outerCursorY, mousePosition]);

  return (
    <>
      {/* Inner cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#64ffda] rounded-full pointer-events-none z-50
          mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isPointer ? 1.5 : 1,
        }}
      />

      {/* Outer cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-[#64ffda] rounded-full pointer-events-none z-50
          mix-blend-difference"
        style={{
          x: outerCursorX,
          y: outerCursorY,
          scale: isPointer ? 1.5 : 1,
          translateX: -14, // Center the ring (half of width)
          translateY: -14, // Center the ring (half of height)
        }}
      />
    </>
  );
};

export default CustomCursor; 