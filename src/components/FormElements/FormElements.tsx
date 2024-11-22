"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface FormElementsProps {
  placeholder?: string;
}

export default function FormElements({
  placeholder = "Placeholder",
}: FormElementsProps) {
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
        className="p-1 w-full bg-transparent border-gray-300 focus:outline-none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {/* Visible animated user input text */}
      {/* <motion.div
        initial="hidden"
        animate="visible"
        className="p-2 w-full"
        variants={containerVariants}
      >
        {inputValue.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={characterVariants}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.div> */}

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
}
