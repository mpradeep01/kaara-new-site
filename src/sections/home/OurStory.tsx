"use client";
import Center from "@/components/Center";
import OurStoryImg from "../../../public/images/our_story.jpg";
import Image from "next/image";
import Section from "@/components/Section";
import InViewTransition from "@/components/animations/InViewTransition";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { getCardAnimation } from "@/components/animations/TitleAnimations";

//import InViewTransition from "@/components/animations/InViewTransition";
export default function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <Section className="bg-primary-10 xs:pt-20 pb-0 lg:pt-0">
      <Center className="xs:!px-0">
        <div className="flex justify-between items-center gap-12 xs:flex-col md-sm:flex-row ">
          <div className=" flex-1 max-w-[640px] xs:px-2">
            <InViewTransition direction="bottom">
              <h4 className="h4-title font-light">Our Story</h4>
            </InViewTransition>
            <motion.h3
              className="h3-title font-bosch mt-6 mb-5"
              ref={ref}
              variants={getCardAnimation(0)} // Passing index to control delay
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              Doing Things The Right <span>Way</span>, Right <span>Away</span>
            </motion.h3>
            <InViewTransition direction="bottom">
              <p className="max-w-[470px] text-lg">
                Since 2012, we have empowered many enterprises and businesses
                serve their stakeholders better. We have developed products to
                help them utilize the true potential of today&apos;s technology
                and be future ready.
              </p>
            </InViewTransition>
          </div>

          <div>
            <InViewTransition direction="right">
              <Image
                src={OurStoryImg}
                width="562"
                alt="Our Story"
                className="object-cover"
              />
            </InViewTransition>
          </div>
        </div>
      </Center>
    </Section>
  );
}
