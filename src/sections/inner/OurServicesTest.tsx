"use client";
import React, { useState, useEffect, useRef } from "react";
//import data from "../../data/data";
//import Image from "next/image";
import { motion, useInView } from "framer-motion";

const OurServices = () => {
  //const { homeOurServices } = data;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    console.log("is in View", isInView);
  }, [isInView]);

  const accordionRefs = useRef<HTMLElement[]>([]);
  // const setRef = useCallback((ref: HTMLDivElement | null) => {
  //   if (ref) {
  //     accordionRefs.current.push(ref);
  //   }
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = accordionRefs.current.indexOf(
              entry.target as HTMLElement
            );
            if (index !== -1 && (activeIndex === null || index > activeIndex)) {
              setActiveIndex(index);
            }
          } else {
            const index = accordionRefs.current.indexOf(
              entry.target as HTMLElement
            );
            if (index !== -1 && index === activeIndex) {
              setActiveIndex(null);
            }
          }
        });
      },
      { threshold: 1, rootMargin: "0px 0px -50% 0px" }
    );

    accordionRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [accordionRefs, activeIndex]);

  return (
    <motion.section
      ref={sectionRef}
      className={`bg-red-200 min-h-screen p-20 relative`}
    >
      <div className="w-full max-w-[1400px] h-full mx-auto  bg-white/5 ">
        <div>
          <div className="font-extralight text-4xl">
            Our Services {isInView ? 1 : 0}
            {/* Render the transformed value */}
          </div>
          <div className="text-sm max-w-[400px]">
            Our Secret Season 1 Episode 1 available for streaming online. Browse
            all the episodes of Our Secret, a popular Mandarin,Romance web
            series in HD for free
          </div>
        </div>
        <div className="mt-10">
          {/* {homeOurServices.map((item, key) => {
            return (
              <div key={key} ref={setRef}>
                <h3
                  className="text-2xl font-bold py-8"
                  onClick={() =>
                    setActiveIndex(key === activeIndex ? null : key)
                  }
                >
                  {item.title}
                </h3>
                <motion.div
                  className="flex gap-10 items-center"
                  initial={{ opacity: 0, height: 0 }}
                  animate={
                    activeIndex === key
                      ? { opacity: 1, height: "auto" }
                      : { opacity: 0, height: 0 }
                  }
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-[300px]">
                    <Image src={item.img} alt={item.title} priority />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold py-2">{item.title}</h3>
                    <p>{item.desc}</p>
                    <p>{item.desc}</p>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              </div>
            );
          })} */}
        </div>
      </div>
    </motion.section>
  );
};

export default OurServices;
