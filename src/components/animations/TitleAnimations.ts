import { Variants } from "framer-motion";

/**
 * Generates animation variants with an optional delay.
 *
 * @param key - Optional key/index for delay calculation
 * @returns Variants object for Framer Motion animation
 */
export const getCardAnimation = (key?: number): Variants => ({
  initial: {
    opacity: 0,
    rotateX: -90,
    scale: 0.9,
    transformOrigin: "50% 50% -100px",
  },
  animate: {
    opacity: 1,
    rotateX: 0,
    scale: 1,
    transformOrigin: "50% 50% -100px",
    transition: {
      duration: 1,
      delay: key != null ? key * 0.5 : 0, // Conditionally apply delay
      ease: [0.37, 0, 0.63, 1],
    },
  },
});
