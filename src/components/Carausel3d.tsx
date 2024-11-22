"use client"; // For Next.js app router (if using)
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect, useRef } from "react";

type Profile = {
  name: string;
  pic: string | StaticImageData;
  designation: string;
};

type CarouselItem = {
  title: string;
  desc: string;
  profile: Profile;
};

interface CarouselProps {
  items: CarouselItem[];
}

export default function Carousel3d({ items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [height, setHeight] = useState<number | undefined>();
  const itemCount = items.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeSlideRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % itemCount);

  // Update height whenever the slide content changes
  useEffect(() => {
    const updateHeight = () => {
      if (activeSlideRef.current) {
        setHeight(activeSlideRef.current.clientHeight);
      }
    };

    updateHeight(); // Initial height setup

    // Use ResizeObserver to track height changes
    const observer = new ResizeObserver(updateHeight);
    if (activeSlideRef.current) {
      observer.observe(activeSlideRef.current);
    }

    return () => observer.disconnect();
  }, [activeIndex]);

  // Auto-slide setup
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [itemCount]);

  return (
    <div
      className="relative w-full max-w-3xl mx-auto overflow-hidden"
      style={{ height }}
    >
      <div className="relative w-full flex items-center justify-center">
        <AnimatePresence initial={false}>
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              isActive && (
                <motion.div
                  key={index}
                  ref={isActive ? activeSlideRef : null}
                  className="absolute top-0 w-full flex items-center justify-center p-1"
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: -50 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <div className="border border-primary-500 rounded-xl text-center p-5 bg-white shadow-lg">
                    <h4 className="font-semibold text-xl">{item.title}</h4>
                    <div className="my-3">{item.desc}</div>
                    <div className="flex flex-col items-center mt-5">
                      <Image
                        src={item.profile.pic}
                        alt={item.profile.name}
                        width={48}
                        height={48}
                        className="rounded-full mb-3"
                      />
                      <h5 className="font-semibold text-sm">
                        {item.profile.name}
                      </h5>
                      <p className="text-[12px]">{item.profile.designation}</p>
                    </div>
                  </div>
                </motion.div>
              )
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
