// "use client";

// import { useState, useEffect } from "react";

// const useMousePosition = () => {
//   const [mousePosition, setMousePosition] = useState<{
//     x: number | null;
//     y: number | null;
//   }>({ x: null, y: null });

//   const updateMousePosition = (e: MouseEvent) => {
//     setMousePosition({ x: e.clientX, y: e.clientY });
//   };

//   //////click
//   const [isClicked, setIsClicked] = useState(false);

//   const handleMouseDown = () => setIsClicked(true);
//   const handleMouseUp = () => setIsClicked(false);

//   useEffect(() => {
//     window.addEventListener("mousemove", updateMousePosition);

//     return () => window.removeEventListener("mousemove", updateMousePosition);
//   }, []);

//   return mousePosition;
// };

// export default useMousePosition;

// "use client";

// import { useState, useEffect } from "react";

// const useMousePosition = () => {
//   const [mousePosition, setMousePosition] = useState<{
//     x: number | null;
//     y: number | null;
//   }>({ x: null, y: null });
//   const [isClicked, setIsClicked] = useState(false);

//   const updateMousePosition = (e: MouseEvent) => {
//     setMousePosition({ x: e.clientX, y: e.clientY });
//   };

//   const handleMouseDown = () => setIsClicked(true);
//   const handleMouseUp = () => setIsClicked(false);

//   useEffect(() => {
//     window.addEventListener("mousemove", updateMousePosition);
//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       window.removeEventListener("mousemove", updateMousePosition);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return { mousePosition, isClicked };
// };

// export default useMousePosition;

"use client";

import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number | null;
    y: number | null;
  }>({
    x: null,
    y: null,
  });
  const [isClicked, setIsClicked] = useState(false);
  const [cursorType, setCursorType] = useState("");

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });

    // Type guard to check if e.target is an HTMLElement
    if (e.target instanceof HTMLElement) {
      const cursorAttr = e.target.getAttribute("data-cursor");
      setCursorType(cursorAttr || "default");
    }
  };

  const handleMouseDown = () => setIsClicked(true);
  const handleMouseUp = () => setIsClicked(false);

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return { mousePosition, isClicked, cursorType };
};

export default useMousePosition;
