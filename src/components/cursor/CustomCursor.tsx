"use client";
import useMousePosition from "@/lib/useMousePosition";
import { motion } from "framer-motion";
const CustomCursor = () => {
  const {
    mousePosition: { x, y },
    isClicked,
    cursorType,
  } = useMousePosition();

  return (
    <div>
      <>
        <motion.div
          className="w-6 h-6 fixed z-50 rounded-full bg-red-500 bg-opacity-85 pointer-events-none"
          animate={{
            x: x ? x - 10 : 0,
            y: y ? y - 10 : 0, // Adjust by half of dot height to center

            scale: isClicked ? 2 : 1,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.6 }}
        />
      </>
      {/* <div className="fixed top-4 bg-white p-6 z-50">
        <p className="text-xl font-semibold">Mouse Position:</p>

        <p className="text-lg">
          X: {x}, Y: {y}
        </p>
        <p>{cursorType}</p>
      </div> */}
    </div>
  );
};

export default CustomCursor;
