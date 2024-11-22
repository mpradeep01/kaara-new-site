"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "top" | "bottom" | "none";
  scale?: number; // Optional starting scale effect
  rotate?: number; // Optional starting rotation effect
  skewX?: number; // Optional starting skew along the X-axis
  skewY?: number; // Optional starting skew along the Y-axis
  blur?: boolean; // Optional starting blur effect
  color?: string; // Optional starting text color
  backgroundColor?: string; // Optional starting background color
  borderColor?: string; // Optional starting border color
  delay?: number;
}

export default function InViewTransition({
  children,
  className = "",
  direction = "bottom", // Default direction is "bottom"
  scale = 1, // Default starting scale
  rotate = 0, // Default starting rotation
  skewX = 0, // Default starting skewX
  skewY = 0, // Default starting skewY
  blur = false, // Default starting blur
  color = "", // Default starting text color
  backgroundColor = "", // Default starting background color
  borderColor = "", // Default starting border color
  delay = 0,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Function to determine initial position based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -60 }; // Start off-screen left
      case "right":
        return { opacity: 0, x: 60 }; // Start off-screen right
      case "top":
        return { opacity: 0, y: -60 }; // Start off-screen top
      case "bottom":
        return { opacity: 0, y: 60 }; // Start off-screen bottom
      case "none":
      default:
        return { opacity: 0 }; // Start fully transparent without movement
    }
  };

  // Define the animation's final state (default values)
  const getDefaultPosition = () => {
    return {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1, // Default scale
      rotate: 0, // Default rotation
      skewX: 0, // Default skewX
      skewY: 0, // Default skewY
      filter: "blur(0px)", // Remove blur
      color: undefined, // Reset to default text color (CSS-controlled)
      backgroundColor: undefined, // Reset to default background color (CSS-controlled)
      borderColor: undefined, // Reset to default border color (CSS-controlled)
    };
  };

  // Define the initial animation state with custom values
  const getInitialState = () => {
    return {
      ...getInitialPosition(),
      scale,
      rotate,
      skewX,
      skewY,
      filter: blur ? "blur(10px)" : undefined, // Apply blur initially if enabled
      color: color || undefined, // Apply initial text color
      backgroundColor: backgroundColor || undefined, // Apply initial background color
      borderColor: borderColor || undefined, // Apply initial border color
    };
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialState()} // Start with custom values
      animate={isInView ? getDefaultPosition() : getInitialState()} // Animate to default
      transition={{ duration: 1, ease: "easeInOut", delay: delay }} // Customize the timing
    >
      {children}
    </motion.div>
  );
}
