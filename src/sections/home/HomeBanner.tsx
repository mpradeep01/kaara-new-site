"use client";
import Center from "@/components/Center";
import Section from "@/components/Section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlineLink } from "react-icons/hi";
import InViewTransition from "@/components/animations/InViewTransition";
import { getCardAnimation } from "@/components/animations/TitleAnimations";
export default function HomeBanner() {
  const bannerText = ["Cloud", "Data & Analytics", "AI & Automation", "UI UX"];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Section className="flex-col bg-gradient-to-tr from-primary-50/30 via-transparent to-transparent bg-opacity-5">
      <Center className="flex-1 flex flex-col justify-between mt-40">
        <div className="flex justify-end">
          <div className="w-[270px]  xs:hidden lg:block ">
            <InViewTransition direction="none" blur={true}>
              <div className="flex items-center gap-4 mb-3">
                <h3 className="font-medium text-[20px] leading-none  items-center flex gap-2">
                  <span className="font-poppins text-2xl font-medium text-primary-500 ">
                    कारा
                  </span>
                  Kaara—do
                </h3>
                <HiOutlineLink className="text-[20px]" />
              </div>
            </InViewTransition>
            <InViewTransition direction="top">
              <h4 className="font-medium">Doing things beyond perfection</h4>
            </InViewTransition>
            <InViewTransition direction="top">
              <p className="text-[12px]">
                Kaara is the Sanskrit word for Doers. We are a firm of Doers
                focused on strategy, transformation, engineering, data, cloud
                and design services.
              </p>
            </InViewTransition>
          </div>
        </div>
        <div>
          <div>
            <InViewTransition direction="bottom">
              <h4 className="max-w-[520px] font-light mb-20 xs:text-[20px] lg:text-[32px]">
                Empowering Enterprises with Innovating Solutions and
                Cutting-Edge Technology
              </h4>
            </InViewTransition>

            <div
              className="flex flex-wrap gap-x-10 gap-y-3 xs:flex-col md-sm:flex-row"
              style={{ perspective: "1200px" }}
            >
              {bannerText.map((item, key) => (
                <motion.div
                  key={key}
                  ref={ref}
                  variants={getCardAnimation(key)} // Passing index to control delay
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  className="flex items-start gap-10"
                >
                  <div className="flex xs:flex-col md-sm:flex-row">
                    <p className="mt-1 text-2xl font-light ">/0{key + 1}</p>
                    <h3 className="h2-title font-bosch text-primary-500">
                      {item}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Center>
    </Section>
  );
}
