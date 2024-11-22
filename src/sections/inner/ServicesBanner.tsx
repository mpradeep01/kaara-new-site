// "use client";
// import Center from "@/components/Center";
// import Section from "@/components/Section";
// import DataAndAnalyticsBanner from "../../../public/images/services/data-and-analytics.jpg";
// import { useEffect, useState } from "react";
// interface Props {
//   bannerImage?: string;
//   children?: React.ReactNode;
//   bannerTitle?: string;
// }
// export default function ServicesBanner({
//   bannerImage = DataAndAnalyticsBanner.src,
//   children,
//   bannerTitle = "Banner <span>Title</span>",
// }: Props) {
//   /////////////////////
//   const centerDiv = 1340;
//   const browserWidth = window.innerWidth;
//   const remainSpace = browserWidth - centerDiv;
//   const leftSpace = remainSpace / 2;

//   /////////////////////

//   return (
//     <div id="wrapper">
//       <Section
//         className={`xs:items-stretch xs:min-h-0 xs:py-0 xs:pb-40 flex-col`}
//       >
//         <div
//           className="xs:h-[500px] sm:h-[475px] w-full bg-cover"
//           style={{ background: `url(${bannerImage})` }}
//         >
//           <Center className="min-h-full flex-1 relative">
//             <div className="bg-primary-10 max-w-[520px] xs:p-8 xs:relative xs:-top-10 sm:p-10 sm:absolute sm:right-0 sm:-top-10 md:-top-32">
//               {children}
//             </div>
//           </Center>
//         </div>
//         <div className="w-full">
//           <div className="bg-slate-100" style={{ paddingLeft: leftSpace }}>
//             {leftSpace}
//             {browserWidth}
//             <h3
//               className="h3-title font-bosch"
//               dangerouslySetInnerHTML={{ __html: bannerTitle }}
//             />
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// }

"use client";
import { useEffect, useState, useRef } from "react";
import Center from "@/components/Center";
import Section from "@/components/Section";
import DataAndAnalyticsBanner from "../../../public/images/services/data-and-analytics.jpg";
import InViewTransition from "@/components/animations/InViewTransition";
import { useInView, motion } from "framer-motion";
import { getCardAnimation } from "@/components/animations/TitleAnimations";

interface Props {
  bannerImage?: string;
  children?: React.ReactNode;
  bannerTitle?: string;
}

export default function ServicesBanner({
  bannerImage = DataAndAnalyticsBanner.src,
  children,
  bannerTitle = "Banner <span>Title</span>",
}: Props) {
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const centerDiv = 1340;

  const remainSpace = wrapperWidth - centerDiv;
  const leftSpace = remainSpace / 2;

  useEffect(() => {
    // Function to calculate and update the width of the wrapper
    const updateWrapperWidth = () => {
      if (wrapperRef.current) {
        setWrapperWidth(wrapperRef.current.offsetWidth);
      }
    };

    // Initial calculation
    updateWrapperWidth();

    // Add resize event listener
    window.addEventListener("resize", updateWrapperWidth);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", updateWrapperWidth);
  }, []);
  /////
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div id="wrapper" ref={wrapperRef}>
      <Section
        className={`xs:items-stretch xs:min-h-0 xs:py-0 xs:pb-40 flex-col `}
      >
        <div
          className="xs:h-[500px] sm:h-[475px] w-full bg-cover"
          style={{ background: `url(${bannerImage})` }}
        >
          <Center className="min-h-full flex-1 relative">
            <InViewTransition>
              <div className="bg-primary-10 max-w-[520px] xs:p-8 xs:relative xs:-top-10 sm:p-10 sm:absolute sm:right-0 sm:-top-10 md:-top-32">
                {children}
              </div>
            </InViewTransition>
          </Center>
        </div>

        <div>
          <div
            className="bg-white float-left -mt-40"
            style={{ paddingLeft: leftSpace < 0 ? 0 : leftSpace }}
          >
            <div className="w-full max-w-[1080px] xs:px-2 md:px-0">
              <div className="py-10 xs:pr-0 md:pr-20">
                <motion.h3
                  className="h3-title font-bosch"
                  dangerouslySetInnerHTML={{ __html: bannerTitle }}
                  ref={ref}
                  variants={getCardAnimation(0)} // Passing index to control delay
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
