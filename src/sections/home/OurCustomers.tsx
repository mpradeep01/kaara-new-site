"use client";

import Image from "next/image";
import CustomersLogo from "../../../public/images/customers/logo.png"; // Your logo path
//import InViewTransition from "@/components/animations/InViewTransition";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getCardAnimation } from "@/components/animations/TitleAnimations";

// Array of logos (replace with actual logo paths)
const logos = Array(20).fill(CustomersLogo); // 20 logos as placeholders

export default function OurCustomers() {
  /////
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div
      data-section="one"
      className="bg-primary-10 py-20 flex justify-center items-center "
    >
      <div className="w-full max-w-[1200px] xs:px-2 md:px-[62px] 2xl:px-0 overflow-x-hidden">
        <div className="mb-10">
          <motion.h3
            className="h3-title font-bosch"
            ref={ref}
            variants={getCardAnimation(0)} // Passing index to control delay
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            Our <span>Customers</span>
          </motion.h3>
        </div>
        <div className="flex mygradient">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
          >
            {logos.map((_, key) => {
              return (
                <div
                  key={key}
                  className="bg-white flex flex-1 h-full p-3 mx-2  justify-center items-center mr-6"
                >
                  <Image
                    src={CustomersLogo}
                    alt={`logo-${key}`}
                    width={130}
                    height={38}
                    className=""
                  />
                </div>
              );
            })}
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
          >
            {logos.map((_, key) => {
              return (
                <div
                  key={key}
                  className="bg-white flex flex-1 h-full p-3 mx-2  justify-center items-center mr-6"
                >
                  <Image
                    src={CustomersLogo}
                    alt={`logo-${key}`}
                    width={130}
                    height={38}
                    className=""
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
