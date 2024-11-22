"use client";
import { useInView, useScroll } from "framer-motion";
import { filter } from "framer-motion/client";
import React, { ReactNode, useEffect, useRef, useState } from "react";

interface StickyContainerProps {
  children: ReactNode;
}

const StickyContainer = ({ children }: StickyContainerProps) => {
  const vertMargin = 10;
  const container = useRef(null);
  //const [maxScrollY, setMaxScrollY] = useState(null);
  const [maxScrollY, setMaxScrollY] = useState<number | null>(null); // Added type `number | null`

  const [dynamicStyles, setDynamicStyles] = useState({
    scale: 1,
    filter: 0,
  });
  const { scrollY } = useScroll({
    target: container,
  });
  const isInView = useInView(container, {
    margin: `0px 0px -${100 - vertMargin}% 0px`,
    once: true,
  });

  scrollY.on("change", (scrollY) => {
    let animationValue = 1;
    //if (scrollY > maxScrollY) {
    if (maxScrollY !== null && scrollY > maxScrollY) {
      animationValue = Math.max(0, 1 - (scrollY - maxScrollY) / 10000);
    }
    setDynamicStyles({
      scale: animationValue,
      filter: (1 - animationValue) * 100,
    });
  });

  useEffect(() => {
    if (isInView) {
      setMaxScrollY(scrollY.get());
    }
  }, [isInView]);

  return (
    <div
      ref={container}
      className="sticky w-full h-[90vh] bg-white"
      style={{
        top: `${vertMargin}vh`,
        scale: dynamicStyles.scale,
        filter: `blur(${dynamicStyles.filter}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default StickyContainer;
