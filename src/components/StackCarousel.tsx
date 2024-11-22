// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// type TeamMember = {
//   id: number;
//   name: string;
//   designation: string;
//   profilePic: string;
// };

// interface StackCarouselProps {
//   team: TeamMember[];
// }

// const StackCarousel: React.FC<StackCarouselProps> = ({ team }) => {
//   const [current, setCurrent] = useState(0);

//   const handleNext = () => setCurrent((prev) => (prev + 1) % team.length);
//   const handlePrev = () =>
//     setCurrent((prev) => (prev - 1 + team.length) % team.length);

//   return (
//     <div className="relative w-full h-96 flex items-center justify-center">
//       <AnimatePresence initial={false}>
//         {team.map((member, index) =>
//           index === current ? (
//             <motion.div
//               key={member.id}
//               className="absolute flex flex-col items-center p-4 bg-white shadow-xl rounded-lg"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               transition={{ duration: 0.5 }}
//             >
//               <img
//                 src={member.profilePic}
//                 alt={member.name}
//                 className="w-32 h-32 rounded-full mb-4"
//               />
//               <h2 className="text-xl font-semibold">{member.name}</h2>
//               <p className="text-gray-500">{member.designation}</p>
//             </motion.div>
//           ) : null
//         )}
//       </AnimatePresence>

//       <button
//         onClick={handlePrev}
//         className="absolute left-4 p-2 bg-gray-200 rounded-full"
//       >
//         &#9664;
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-4 p-2 bg-gray-200 rounded-full"
//       >
//         &#9654;
//       </button>
//     </div>
//   );
// };

// export default StackCarousel;

"use client";
// components/StackCarousel.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TeamMember = {
  id: number;
  name: string;
  designation: string;
  profilePic: string;
};

interface StackCarouselProps {
  team: TeamMember[];
}

const StackCarousel: React.FC<StackCarouselProps> = ({ team }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % team.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + team.length) % team.length);

  //   const variants = {
  //     visible: (i: number) => ({
  //       x: i === 0 ? 0 : -30, // Slight horizontal shift for second card
  //       y: i * 15, // Stacked vertical offset
  //       scale: 1 - i * 0.1, // Shrink second card slightly
  //       opacity: i <= 1 ? 1 : 0, // Show only two items (i <= 1)
  //       zIndex: team.length - i, // Proper stacking
  //       transition: { duration: 0.4 },
  //     }),
  //     hidden: { opacity: 0, scale: 0.8 },
  //   };
  const variants = {
    visible: (i: number) => ({
      x: i === 0 ? 0 : -30, // Slight horizontal shift for second card
      y: i * 15, // Stacked vertical offset
      scale: 1 - i * 0.1, // Shrink second card slightly
      rotate: i === 0 ? 0 : -5, // Rotate the second card slightly
      opacity: i <= 1 ? 1 : 0, // Show only two items
      zIndex: team.length - i, // Proper stacking
      transition: {
        type: "spring",
        stiffness: 100, // Higher = faster motion
        damping: 10, // Lower = more bounce
        mass: 1, // Affects how heavy the object feels
      },
    }),
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10, // Slight rotation for hidden state
    },
  };

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <AnimatePresence initial={false}>
        {team.map((member, index) => {
          const position = (index - current + team.length) % team.length;

          // Render only the first 2 cards in the stack
          if (position > 1) return null;

          return (
            <motion.div
              key={member.id}
              custom={position}
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute w-64 p-6 bg-white shadow-xl rounded-lg flex flex-col items-center"
            >
              <img
                src={member.profilePic}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h2 className="text-lg font-semibold">{member.name}</h2>
              <p className="text-gray-500">{member.designation}</p>
            </motion.div>
          );
        })}
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-4 p-2 bg-gray-300 rounded-full"
      >
        &#9664;
      </button>
      <button
        onClick={next}
        className="absolute right-4 p-2 bg-gray-300 rounded-full"
      >
        &#9654;
      </button>
    </div>
  );
};

export default StackCarousel;
