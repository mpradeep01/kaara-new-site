interface AnimationOptions {
  key: number;
  delayMultiplier?: number; // Optional multiplier for delay
  duration?: number; // Optional duration
  initialX?: number; // Optional initial x-offset
  initialY?: number; // Optional initial y-offset
  blur?: boolean; // Optional blur effect
  scale?: number; // Optional scaling effect
  rotate?: number; // Optional rotation effect
  skewX?: number; // Optional skew along the X-axis
  skewY?: number; // Optional skew along the Y-axis
  color?: string; // Optional text color change
  backgroundColor?: string; // Optional background color change
  borderColor?: string; // Optional border color change
}

// Default configuration for all animations
const defaultFadeInConfig = {
  delayMultiplier: 0.45,
  duration: 0.8,
  initialX: 20,
  initialY: 0,
  blur: true,
  scale: 1,
  rotate: 0, // Default rotation is 0 (no rotation)
  skewX: 0, // Default skewX is 0 (no skew)
  skewY: 0, // Default skewY is 0 (no skew)
  color: "", // Default no color change
  backgroundColor: "", // Default no background color change
  borderColor: "", // Default no border color change
};

// Animation variable function with extended options
const fadeInAnimationVariable = ({
  key,
  delayMultiplier = defaultFadeInConfig.delayMultiplier,
  duration = defaultFadeInConfig.duration,
  initialX = defaultFadeInConfig.initialX,
  initialY = defaultFadeInConfig.initialY,
  blur = defaultFadeInConfig.blur,
  scale = defaultFadeInConfig.scale,
  rotate = defaultFadeInConfig.rotate,
  skewX = defaultFadeInConfig.skewX,
  skewY = defaultFadeInConfig.skewY,
  color = defaultFadeInConfig.color,
  backgroundColor = defaultFadeInConfig.backgroundColor,
  borderColor = defaultFadeInConfig.borderColor,
}: AnimationOptions) => ({
  initial: {
    opacity: 0,
    x: initialX,
    y: initialY,
    filter: blur ? "blur(10px)" : "blur(0px)", // Conditionally apply blur
    scale, // Optional scale
    rotate, // Optional rotation
    skewX, // Optional skewX
    skewY, // Optional skewY
    color, // Optional text color
    backgroundColor, // Optional background color
    borderColor, // Optional border color
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)", // Remove blur in the final state
    scale: 1, // Reset scale to 1
    rotate: 0, // Reset rotation to 0
    skewX: 0, // Reset skewX to 0
    skewY: 0, // Reset skewY to 0
    color: "", // Reset color to default
    backgroundColor: "", // Reset background color to default
    borderColor: "", // Reset border color to default
    transition: {
      delay: delayMultiplier * key, // Apply staggered delay
      duration, // Use the provided or default duration
      ease: "easeInOut", // Smooth transition
    },
  },
});

export default fadeInAnimationVariable;
