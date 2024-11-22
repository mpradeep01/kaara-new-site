// "use client";
// import { useRef, useState } from "react";
// import Center from "@/components/Center";

// import { GoArrowUpRight } from "react-icons/go";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import Section from "@/components/Section";
// import pageContent from "@/app/pageContent";
// import InViewTransition from "@/components/animations/InViewTransition";
// import { getCardAnimation } from "@/components/animations/TitleAnimations";

// export default function OurServices() {
//   const { homeOurServices } = pageContent;
//   const [activeIndex, setActiveIndex] = useState<number | null>(0); // Default to no section open
//   /////
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false });
//   return (
//     <Section>
//       <Center className="max-w-[1320px]">
//         <InViewTransition direction="bottom">
//           <h4 className="h4-title font-light">OUR SERVICES</h4>
//         </InViewTransition>

//         <motion.h3
//           className="h3-title font-bosch max-w-[700px] mt-6 mb-5"
//           ref={ref}
//           variants={getCardAnimation(0)} // Passing index to control delay
//           initial="initial"
//           animate={isInView ? "animate" : "initial"}
//         >
//           <span>Solutions</span> and <span>products</span> across industries
//         </motion.h3>

//         <div>
//           {homeOurServices.map((item, key) => {
//             return (
//               <div key={key}>
//                 <div
//                   className={`flex justify-between items-center border-b-[1px] border-gray-200`}
//                 >
//                   <div className="flex items-end py-10">
//                     <p className="font-extralight leading-none mb-2">
//                       0{item.id}/
//                     </p>
//                     <h3 className="h3-title font-extralight leading-none">
//                       {item.title}
//                     </h3>
//                   </div>
//                   <div>
//                     <GoArrowUpRight className="text-primary-500 xs:text-[20px] md-sm:text-[40px]" />
//                   </div>
//                 </div>
//                 <motion.div
//                   className="overflow-hidden"
//                   initial={{ y: 100, height: 0 }}
//                   whileInView={{ y: 0, height: "auto" }}
//                   //exit={{ y: 100, height: 0 }}
//                   transition={{
//                     duration: 1,
//                   }}
//                   viewport={{
//                     //amount: 1,
//                     margin: "-30%",
//                   }}
//                 >
//                   <div className="flex items-center gap-14 overflow-hidden py-5 xs:flex-col md-sm:flex-row">
//                     <div className="w-96 aspect-square">
//                       <Image
//                         src={item.img}
//                         width="1400"
//                         alt={item.title}
//                         className="object-cover"
//                         quality={100}
//                         loading="lazy"
//                       />
//                     </div>
//                     <div className="flex flex-col gap-8 flex-1">
//                       <p className="xs:text-base md-sm:text-2xl max-w">
//                         {item.desc}
//                       </p>

//                       <div>
//                         <Link
//                           href="#"
//                           className="bg-primary-500 px-4 py-3 text-white"
//                         >
//                           More +
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             );
//           })}
//         </div>
//       </Center>
//     </Section>
//   );
// }
"use client";
import InViewTransition from "@/components/animations/InViewTransition";
import { getCardAnimation } from "@/components/animations/TitleAnimations";
import Center from "@/components/Center";
import Section from "@/components/Section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import pageContent from "@/app/pageContent";
import AccordionOurServices from "../inner/layout/accrodinan/AccordionOurServices";
export default function OurServices() {
  const { homeOurServices } = pageContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <Section>
      <Center className="max-w-[1320px]">
        <InViewTransition direction="bottom">
          <h4 className="h4-title font-light">OUR SERVICES</h4>
        </InViewTransition>
        <motion.h3
          className="h3-title font-bosch max-w-[700px] mt-6 mb-5"
          ref={ref}
          variants={getCardAnimation(0)} // Passing index to control delay
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <span>Solutions</span> and <span>products</span> across industries
        </motion.h3>
        <div>
          {homeOurServices.map((item, key) => {
            const itemRef = useRef(null);
            const isItemInView = useInView(itemRef, {
              once: false,
              amount: 1,
              margin: "-20% 0px -20% 0px",
            });

            return (
              <div key={key}>
                <AccordionOurServices
                  ref={itemRef}
                  id={key}
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                  link={item.link}
                  isItemInView={isItemInView}
                />
              </div>
            );
          })}
        </div>
      </Center>
    </Section>
  );
}
