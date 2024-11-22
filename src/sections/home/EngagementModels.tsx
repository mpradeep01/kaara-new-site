"use client";

import Section from "@/components/Section";
import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Center from "@/components/Center";
//import InViewTransition from "@/components/animations/InViewTransition";
import pageContent from "@/app/pageContent";
import { getCardAnimation } from "@/components/animations/TitleAnimations";
import AccordionEngagementModels from "../inner/layout/accrodinan/AccordionEngagementModels";

export default function EngagementModels() {
  const { homeEngagementModels } = pageContent;

  const [activeIndex, setActiveIndex] = useState(-1); // Default first section open
  /////
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <Section>
      <Center>
        <div className="flex gap-10 justify-between xs:flex-col md:flex-row">
          <div className="md:pl-14 ">
            <motion.h3
              className="h3-title font-bosch md:text-right"
              ref={ref}
              variants={getCardAnimation(0)} // Passing index to control delay
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              Engagement <span className="block">Models</span>
            </motion.h3>
          </div>
          {/* <div>
            {homeEngagementModels.map((item, key) => {
              const isOpen = key === activeIndex; // Check if the section is open
              return (
                <div key={key} className="mb-5">
                  <motion.div
                    className={`flex justify-between items-center cursor-pointer ${
                      isOpen ? "pointer-events-none" : "pointer-events-auto"
                    }`}
                  >
                    <div className="mb-3 flex items-end gap-1.5">
                      <p className="mb-1.5">0{key + 1}/</p>
                      <h3
                        className="h3-title font-extralight leading-none"
                        onClick={() => setActiveIndex(isOpen ? -1 : key)} // Toggle open/close on click
                      >
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
                        <ul className="ml-9">
                          {item.desc.map((item, key) => (
                            <li key={key} className="text-lg py-1">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div> */}
          <div>
            {homeEngagementModels.map((item, key) => {
              const itemRef = useRef(null);
              const isItemInView = useInView(itemRef, {
                once: false,
                amount: 0.2,
                margin: "-20% 0px -20% 0px",
              });

              return (
                <div key={key}>
                  <AccordionEngagementModels
                    ref={itemRef}
                    id={key}
                    title={item.title}
                    desc={item.desc}
                    isItemInView={isItemInView}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Center>
    </Section>
  );
}
