// import React, { forwardRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { GoArrowUpRight } from "react-icons/go";
// import { motion } from "framer-motion";

// interface OurServicesProps {
//   id: number;
//   title: string;
//   img: string;
//   desc: string;
//   link: string;
//   isItemInView: boolean;
// }

// const OurServices = forwardRef<HTMLDivElement, OurServicesProps>(
//   ({ id, title, img, desc, link, isItemInView }, ref) => {
//     return (
//       <div>
//         <div>
//           <div className="flex justify-between items-center border-b-[1px] border-gray-200">
//             <div className="flex items-end py-10">
//               <p className="font-extralight leading-none mb-2">0{id + 1}/</p>
//               <h3 className="h3-title font-extralight leading-none">{title}</h3>
//             </div>
//             <div>
//               <GoArrowUpRight className="text-primary-500 xs:text-[20px] md-sm:text-[40px]" />
//             </div>
//           </div>
//         </div>
//         <motion.div
//           ref={ref}
//           initial={{ height: 0, opacity: 0 }}
//           animate={{
//             height: isItemInView ? "auto" : 0,
//             opacity: isItemInView ? 1 : 0,
//           }}
//           exit={{ height: 0, opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           className="!overflow-hidden"
//         >
//           <div className="flex items-center gap-14 overflow-hidden py-5 xs:flex-col md-sm:flex-row">
//             <div className="w-96 aspect-square">
//               <motion.div>
//                 <Image
//                   src={img}
//                   width="1400"
//                   height="1400"
//                   alt={title}
//                   className="object-cover"
//                   quality={100}
//                   loading="lazy"
//                 />
//               </motion.div>
//             </div>
//             <div className="flex flex-col gap-8 flex-1">
//             <motion.div>
//               <p className="xs:text-base md-sm:text-2xl max-w">{desc}</p>

//               <div>
//                 <Link
//                   href={link ? link : "#"}
//                   className="bg-primary-500 px-4 py-3 text-white"
//                 >
//                   More +
//                 </Link>
//               </div>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     );
//   }
// );

// OurServices.displayName = "OurServices";
// export default OurServices;

import React, { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

interface OurServicesProps {
  id: number;
  title: string;
  img: string;
  desc: string;
  link: string;
  isItemInView: boolean;
}

const AccordionOurServices = forwardRef<HTMLDivElement, OurServicesProps>(
  ({ id, title, img, desc, link, isItemInView }, ref) => {
    return (
      <div>
        <div>
          <div className="flex justify-between items-center border-b-[1px] border-gray-200">
            {/* Animated ID and Title */}
            <motion.div className="flex items-end py-10">
              <p className="font-extralight leading-none mb-2">0{id + 1}/</p>
              <h3 className="h3-title font-extralight leading-none">{title}</h3>
            </motion.div>

            <div>
              <GoArrowUpRight className="text-primary-500 xs:text-[20px] md-sm:text-[40px]" />
            </div>
          </div>
        </div>

        {/* Collapsible Section */}
        <motion.div
          ref={ref}
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isItemInView ? "auto" : 0,
            opacity: isItemInView ? 1 : 0,
          }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="!overflow-hidden"
        >
          <div className="flex items-center gap-14 overflow-hidden py-5 xs:flex-col md-sm:flex-row">
            {/* Animated Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: isItemInView ? 1 : 0,
                scale: isItemInView ? 1 : 0.9,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-96 aspect-square"
            >
              <Image
                src={img}
                width="1400"
                height="1400"
                alt={title}
                className="object-cover"
                quality={100}
                loading="lazy"
              />
            </motion.div>

            {/* Animated Description and Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isItemInView ? 1 : 0,
                x: isItemInView ? 0 : -20,
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-8 flex-1"
            >
              <p className="xs:text-base md-sm:text-2xl max-w">{desc}</p>
              <div>
                <Link
                  href={link ? link : "#"}
                  className="bg-primary-500 px-4 py-3 text-white"
                >
                  More +
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }
);

export default AccordionOurServices;
