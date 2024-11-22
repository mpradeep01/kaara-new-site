// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";

// interface Slide {
//   img: string;
// }

// interface RoundSliderProps {
//   slides: Slide[];
// }

// const RoundSlider: React.FC<RoundSliderProps> = ({ slides }) => {
//   const positions = ["center", "left1", "left", "right", "right1"];

//   const [positionIndexes, setPositionIndexes] = useState(
//     Array.from({ length: slides.length }, (_, i) => i)
//   );

//   const handleNext = () => {
//     setPositionIndexes((prevIndexes) =>
//       prevIndexes.map((index) => (index + 1) % slides.length)
//     );
//   };

//   const handleBack = () => {
//     setPositionIndexes((prevIndexes) =>
//       prevIndexes.map((index) => (index - 1 + slides.length) % slides.length)
//     );
//   };

//   const imageVariants = {
//     center: { x: "0%", scale: 1, zIndex: 5 },
//     left1: { x: "-105%", scale: 0.9, zIndex: 3 },
//     left: { x: "-200%", scale: 0.8, zIndex: 2 },
//     right: { x: "200%", scale: 0.8, zIndex: 2 },
//     right1: { x: "105%", scale: 0.9, zIndex: 3 },
//   };

//   return (
//     <div className="relative flex items-center justify-center h-screen bg-slate-400">
//       {/* Buttons */}
//       <button
//         onClick={handleBack}
//         className="absolute left-2 z-20 bg-gray-300 p-2 rounded"
//       >
//         Back
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-2 z-20 bg-gray-300 p-2 rounded"
//       >
//         Next
//       </button>

//       {/* Images */}
//       {slides.map((slide, index) => (
//         <>
//           <p className="absolute z-50">{index + 1}</p>
//           <motion.img
//             key={index}
//             src={slide.img}
//             alt={`Slide ${index + 1}`}
//             className="rounded-lg shadow-lg"
//             initial="center"
//             animate={positions[positionIndexes[index] % positions.length]}
//             variants={imageVariants}
//             transition={{ duration: 0.5 }}
//             style={{
//               width: "263px",
//               height: "530px",
//               position: "absolute",
//             }}
//           />
//         </>
//       ))}
//     </div>
//   );
// };

// export default RoundSlider;

// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";

// interface Slide {
//   img: string;
// }

// interface RoundSliderProps {
//   slides: Slide[];
// }

// const RoundSlider: React.FC<RoundSliderProps> = ({ slides }) => {
//   const positions = ["center", "left1", "left", "right", "right1"];

//   const [positionIndexes, setPositionIndexes] = useState(
//     Array.from({ length: slides.length }, (_, i) => i)
//   );

//   const handleNext = () => {
//     setPositionIndexes((prevIndexes) =>
//       prevIndexes.map((index) => (index + 1) % slides.length)
//     );
//   };

//   const handleBack = () => {
//     setPositionIndexes((prevIndexes) =>
//       prevIndexes.map((index) => (index - 1 + slides.length) % slides.length)
//     );
//   };

//   // Handle click on a specific slide to make it active (centered)
//   const handleSlideClick = (clickedIndex: number) => {
//     const newIndexes = Array.from(
//       { length: slides.length },
//       (_, i) => (clickedIndex + i) % slides.length
//     );
//     setPositionIndexes(newIndexes);
//   };

//   const imageVariants = {
//     center: { x: "0%", scale: 1, zIndex: 5 },
//     left1: { x: "-105%", scale: 0.9, zIndex: 3 },
//     left: { x: "-200%", scale: 0.8, zIndex: 2 },
//     right: { x: "200%", scale: 0.8, zIndex: 2 },
//     right1: { x: "105%", scale: 0.9, zIndex: 3 },
//   };

//   return (
//     <div className="relative flex items-center justify-center h-screen bg-slate-400">
//       {/* Navigation Buttons */}
//       <button
//         onClick={handleBack}
//         className="absolute left-2 z-20 bg-gray-300 p-2 rounded"
//       >
//         Back
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-2 z-20 bg-gray-300 p-2 rounded"
//       >
//         Next
//       </button>

//       {/* Render Slides */}
//       {slides.map((slide, index) => (
//         <motion.img
//           key={index}
//           src={slide.img}
//           alt={`Slide ${index + 1}`}
//           className="rounded-lg shadow-lg cursor-pointer"
//           initial="center"
//           animate={positions[positionIndexes[index] % positions.length]}
//           variants={imageVariants}
//           transition={{ duration: 0.5 }}
//           style={{
//             width: "263px",
//             height: "530px",
//             position: "absolute",
//           }}
//           onClick={() => handleSlideClick(index)}
//         />
//       ))}
//     </div>
//   );
// };

// export default RoundSlider;

"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface Slide {
  img: string;
}

interface RoundSliderProps {
  slides: Slide[];
}

const RoundSlider: React.FC<RoundSliderProps> = ({ slides }) => {
  const totalVisible = 5; // Number of visible items at a time

  // **Initial Start Index** (Third item will be at the center, followed by previous items)
  const initialStartIndex = 2; // Index of the 3rd item

  const [startIndex, setStartIndex] = useState(initialStartIndex);

  // Helper to get the visible slides in reverse order from the current start index
  const getVisibleSlides = () => {
    return Array.from(
      { length: totalVisible },
      (_, i) => (startIndex - i + slides.length) % slides.length
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % slides.length); // Move forward circularly
  };

  const handleBack = () => {
    setStartIndex((prev) => (prev - 1 + slides.length) % slides.length); // Move backward circularly
  };

  const handleSlideClick = (clickedIndex: number) => {
    setStartIndex(clickedIndex); // Center the clicked slide
  };

  const positions = ["center", "left1", "left", "right", "right1"]; // 5 positions

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-105%", scale: 0.9, zIndex: 3 },
    left: { x: "-200%", scale: 0.8, zIndex: 2 },
    right: { x: "200%", scale: 0.8, zIndex: 2 },
    right1: { x: "105%", scale: 0.9, zIndex: 3 },
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-slate-400">
      {/* Navigation Buttons */}
      <button
        onClick={handleBack}
        className="absolute left-2 z-20 bg-gray-300 p-2 rounded"
      >
        Back
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 z-20 bg-gray-300 p-2 rounded"
      >
        Next
      </button>

      {/* Render Visible Slides */}
      {getVisibleSlides().map((slideIndex, positionIndex) => (
        <motion.img
          key={slideIndex}
          src={slides[slideIndex].img}
          alt={`Slide ${slideIndex + 1}`}
          className="rounded-lg shadow-lg cursor-pointer"
          initial="center"
          animate={positions[positionIndex]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{
            width: "263px",
            height: "530px",
            position: "absolute",
          }}
          onClick={() => handleSlideClick(slideIndex)}
        />
      ))}
    </div>
  );
};

export default RoundSlider;
