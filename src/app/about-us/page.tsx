"use client";
import OurServices from "@/sections/inner/layout/accrodinan/OurSerives";
import OurServicesImg from "../../../public/images/our_services.jpg";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const homeOurServices = [
  {
    title: "Data & Analytics",
    desc: "Kaara's data and analytics services can empower any organization to thrive and distinguish itself from its competitors. We pinpoint use cases that align with your business priorities and develop customized analytics solutions using the appropriate expertise and technologies to meet your specific needs.",
    img: OurServicesImg.src,
    link: "/",
  },
  {
    title: "AI & Automation",
    desc: "We specialize in delivering cutting-edge AI solutions that transform businesses. From predictive analytics to intelligent automation, our AI services empower companies to make data-driven decisions, enhance customer experiences, and optimize processes for greater efficiency and innovation.",
    img: OurServicesImg.src,
    link: "/",
  },
  {
    title: "Cloud and Infra",
    desc: "Our Cloud services help enterprises achieve their Digital Transformation goals and serve their stakeholders better with our Cloud Advisory Services and decrease their operational expenses, improve productivity, and quicker time-to-market and achieve seamless Business Continuity",
    img: OurServicesImg.src,
    link: "/",
  },
  {
    title: "Custom Development",
    desc: "We create bespoke solutions tailored to your unique requirements and merging your business and customer needs with unlimited technical possibilities for both enterprise as well as consumer apps. We stand out by prioritizing the visual appeal, user-friendliness, and intuitiveness, going beyond mere functionality and use-cases.",
    img: OurServicesImg.src,
    link: "/",
  },
  {
    title: "Design Services",
    desc: "Kaara's data and analytics services can empower any organization to thrive and distinguish itself from its competitors. We pinpoint use cases that align with your business priorities and develop customized analytics solutions using the appropriate expertise and technologies to meet your specific needs.",
    img: OurServicesImg.src,
    link: "/",
  },
];

// const AnimatedInput = () => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [inputValue, setInputValue] = useState("");

//   // Variants for character animations
//   const characterVariants = {
//     hidden: { y: 10, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.05, // Delay between each character animation
//       },
//     },
//   };

//   return (
//     <label htmlFor="name" className="block relative">
//       {/* Input field to capture user input and show cursor */}
//       <input
//         name="name"
//         value={inputValue}
//         placeholder=""
//         className="p-2 w-full bg-transparent focus:outline-none text-transparent caret-black relative z-10"
//         onChange={(e) => setInputValue(e.target.value)}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//       />
//       {/* Visible animated user input text */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         className="p-2 w-full"
//         variants={containerVariants}
//       >
//         {inputValue.split("").map((char, index) => (
//           <motion.span
//             key={index}
//             variants={characterVariants}
//             className="inline-block"
//           >
//             {char}
//           </motion.span>
//         ))}
//       </motion.div>

//       {/* Animated placeholder characters */}
//       {inputValue === "" && (
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="absolute top-0 left-0 p-2 pointer-events-none text-gray-400"
//         >
//           {"Name".split("").map((char, index) => (
//             <motion.span
//               key={index}
//               variants={characterVariants}
//               className="inline-block"
//             >
//               {char}
//             </motion.span>
//           ))}
//         </motion.div>
//       )}
//       {/* Underline animations */}
//       <motion.div
//         className="border-b-[1px] border-primary-500 absolute left-0 right-0 bottom-0"
//         initial={{ scaleX: 0 }}
//         animate={{ scaleX: isFocused ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//         style={{ originX: 0 }}
//       />
//       <motion.div
//         className="border-b-[1px] border-gray-300 absolute left-0 right-0 bottom-0"
//         initial={{ scaleX: 1 }}
//         animate={{ scaleX: isFocused ? 0 : 1 }}
//         transition={{ duration: 0.3 }}
//         style={{ originX: 0 }}
//       />
//     </label>
//   );
// };

interface AnimatedInputProps {
  placeholder?: string;
}
const AnimatedInput = ({ placeholder = "Placeholder" }: AnimatedInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Variants for the container (controls the stagger effect for characters)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Stagger the animation of children
      },
    },
  };

  // Variants for individual characters
  const characterVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="relative">
      {/* Input element */}
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        name="name"
        placeholder={isFocused ? "" : ""}
        className="p-2 w-full bg-transparent border-gray-300 focus:outline-none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {/* Animated placeholder characters */}
      {!isFocused && inputValue === "" && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-0 left-0 p-2 pointer-events-none text-gray-400"
        >
          {placeholder.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={characterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      )}

      {/* Border animations */}
      <motion.div
        className="border-b-[1px] border-primary-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="border-b-[1px] border-gray-300"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: isFocused ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default function AboutUs() {
  return (
    <div>
      <div className="w-full min-h-screen py-40 bg-slate-200">
        <div className="w-full max-w-[1400px]  mx-auto">
          <AnimatedInput placeholder="Name" />
          <AnimatedInput placeholder="Email" />
          <AnimatedInput placeholder="Phone" />
          <AnimatedInput placeholder="Comment" />
        </div>
      </div>
      <div className="w-full min-h-screen py-40 bg-slate-400">
        <div className="w-full max-w-[1400px]  mx-auto snap-mandatory snap-start">
          {homeOurServices.map((item, key) => {
            const itemRef = useRef(null);
            const isItemInView = useInView(itemRef, {
              once: false,
              amount: 0.2,
              margin: "-20% 0px -20% 0px",
            });

            return (
              <div key={key}>
                <OurServices
                  ref={itemRef}
                  id={key}
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                  link={item.link}
                  isItemInView={isItemInView}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full min-h-screen py-40 bg-slate-200"></div>
    </div>
  );
}
