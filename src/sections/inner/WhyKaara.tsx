"use client";
import Center from "@/components/Center";
import Section from "@/components/Section";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export type Item = {
  //id: number;
  title: string;
  desc: string;
};

interface Props {
  data: Item[];
  desc: string;
}

export default function WhyKaara({ data, desc }: Props) {
  const [activeIndex, setActiveIndex] = useState(-1); // Default first section open

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index); // Collapse if already open, otherwise expand
  };
  return (
    <Section>
      <Center className="max-w-[980px] bg-primary-10 py-14 xs:!pr-5 xs:!pl-5 sm:!pr-24 sm:!pl-20">
        <h3 className="h3-title mb-8">
          Why <span>Kaara ?</span>
        </h3>
        <p className="w-full max-w-[580px] font-light text-2xl">{desc}</p>
        <div className="mt-20">
          {data.map((item, key) => {
            const isOpen = key === activeIndex; // Check if the section is open
            const isLast = key === data.length - 1; // Check if it's the last item
            return (
              <div
                key={key}
                className={`mb-2 pb-2 ${!isLast ? "border-b-[1px]" : ""}`}
              >
                <motion.div
                  className={`flex justify-between items-center cursor-pointer ${
                    isOpen ? "pointer-events-none" : "pointer-events-auto"
                  }`}
                  onClick={() => handleToggle(key)}
                >
                  <div className="mb-3 flex items-end gap-1.5">
                    <p className="mb-1.5">0{key + 1}/</p>
                    <h3 className="h3-title font-extralight leading-none">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className=""
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {item.desc}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Center>
    </Section>
  );
}
