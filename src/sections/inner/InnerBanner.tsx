"use client";
import Center from "@/components/Center";
import { FaArrowRightLong } from "react-icons/fa6";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getCardAnimation } from "@/components/animations/TitleAnimations";
import InViewTransition from "@/components/animations/InViewTransition";

interface Props {
  page?: string;
  pageTitle?: string;
  children?: React.ReactNode;
  bannerRight?: React.ReactNode;
  letUstalk?: boolean;
}

export default function InnerBanner({
  page = "Page Title",
  pageTitle = "Banner <span>Title</span>",
  children,
  bannerRight,
  letUstalk = false,
}: Props) {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.preventDefault(); // Prevent URL change

    // Find the target element by its id (footer)
    const target = document.getElementById("footer");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth", // Enable smooth scrolling
        block: "start", // Align to the top of the section
      });
    }
  };
  const bannerText = ["Cloud", "Data & Analytics", "AI & Automation", "UI UX"];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="min-h-96 flex">
      <Center className="flex items-end">
        <div className="flex-1 xs:pt-0 sm:pt-40 pb-16 flex justify-between gap-36 xs:flex-col sm:flex-row">
          <div className="flex-1 max-w-[1020px] flex flex-col gap-8">
            <div>
              <InViewTransition direction="top">
                <h5 className="font-medium text-primary-500 mb-4">{page}</h5>
              </InViewTransition>
              {/* <h2
                className="h2-title font-bosch"
                dangerouslySetInnerHTML={{ __html: pageTitle }}
              /> */}
              <motion.h2
                ref={ref}
                variants={getCardAnimation(0)} // Passing index to control delay
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                className="h2-title font-bosch"
                dangerouslySetInnerHTML={{ __html: pageTitle }}
              />
            </div>
            <div>
              <InViewTransition direction="top">
                <div className="max-w-[772px] font-light text-[24px]">
                  {children}
                </div>
              </InViewTransition>
            </div>
            {letUstalk && (
              <InViewTransition direction="left" blur>
                <div className="flex">
                  <motion.p
                    onClick={handleSmoothScroll}
                    className="btn flex items-center gap-3 cursor-pointer"
                    whileHover={{ scale: 1.05 }} // Optional hover effect
                    whileTap={{ scale: 0.95 }} // Optional tap effect
                  >
                    Let&apos;s Talk <FaArrowRightLong />
                  </motion.p>
                </div>
              </InViewTransition>
            )}
          </div>
          {bannerRight && (
            <div className="xs:w-full sm:w-[400px]  xs:hidden sm:block  flex flex-col">
              {bannerRight}
            </div>
          )}
        </div>
      </Center>
    </div>
  );
}
