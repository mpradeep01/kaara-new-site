// "use client";

// import Center from "@/components/Center";
// import Section from "@/components/Section";
// import pageContent from "@/app/pageContent";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import Image from "next/image";
// import { useRef, useState } from "react";
// import { Autoplay } from "swiper/modules";
// import { useInView, motion } from "framer-motion";
// import { getCardAnimation } from "@/components/animations/TitleAnimations";

// export default function LifeAtKaara() {
//   const { homeLifeAtKaara } = pageContent;
//   const [activeIndex, setActiveIndex] = useState(0);
//   /////
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false });
//   return (
//     <Section className="bg-primary-10 xs:items-stretch pb-0 flex-col gap-20 justify-between">
//       <Center>
//         <motion.h3
//           className="h3-title font-bosch max-w-[700px] mt-6 mb-5"
//           ref={ref}
//           variants={getCardAnimation(0)} // Passing index to control delay
//           initial="initial"
//           animate={isInView ? "animate" : "initial"}
//         >
//           Kaara&apos;s foundation is, and always will be,
//           <span> centered around its people.</span>
//         </motion.h3>
//       </Center>
//       <Center className="xs:!px-0 w-full max-w-[1920px]">
//         <div className="bg-slate-600 relative">
//           <Swiper
//             spaceBetween={0}
//             loop={true}
//             slidesPerView={1}
//             modules={[Autoplay]}
//             grabCursor={true}
//             autoplay={{
//               delay: 7000,
//               disableOnInteraction: false,
//             }}
//             onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Use realIndex
//           >
//             {homeLifeAtKaara.map((item, key) => (
//               <SwiperSlide key={key}>
//                 <div className="h-[460px] relative">
//                   <div className="w-full h-full absolute top-0 bg-gradient-to-t from-black to-transparent"></div>
//                   <Image
//                     src={item.img}
//                     alt={item.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute bottom-[70px] max-w-[1340px] m-auto left-0 right-0 text-white  w-full ">
//                     <div className="max-w-[340px] text-white">
//                       <h4 className="text-[40px] font-normal mb-5">
//                         {item.title}
//                       </h4>
//                       <div className="flex xs:gap-3 lg:gap-5">
//                         <p className="font-light text-[24px]">/0{key + 1}</p>
//                         <p className="text-sm leading-7">{item.desc}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           <div className="dot absolute bottom-10 z-10 max-w-[1340px] m-auto left-28 right-0 flex gap-1">
//             {homeLifeAtKaara.map((_, key) => (
//               <div
//                 key={key}
//                 className={`w-2 h-2 rounded-full transition-all ${
//                   activeIndex === key ? "bg-primary-500" : "bg-white"
//                 }`}
//               ></div>
//             ))}
//           </div>
//         </div>
//       </Center>
//     </Section>
//   );
// }

"use client";

import Center from "@/components/Center";
import Section from "@/components/Section";
import pageContent from "@/app/pageContent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { useInView, motion } from "framer-motion";
import { getCardAnimation } from "@/components/animations/TitleAnimations";
import { Swiper as SwiperType } from "swiper/types"; // Import Swiper type

export default function LifeAtKaara() {
  const { homeLifeAtKaara } = pageContent;
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null); // Define the type

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const handleDotClick = (index: number) => {
    // Specify index type
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Use slideTo instead of slideToLoop
      setActiveIndex(index); // Update the active index
    }
  };

  return (
    <Section className="bg-primary-10 xs:items-stretch pb-0 flex-col gap-20 justify-between">
      <Center>
        <motion.h3
          className="h3-title font-bosch max-w-[700px] mt-6 mb-5"
          ref={ref}
          variants={getCardAnimation(0)}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          Kaara&apos;s foundation is, and always will be,
          <span> centered around its people.</span>
        </motion.h3>
      </Center>
      <Center className="xs:!px-0 w-full max-w-[1920px]">
        <div className="bg-slate-600 relative">
          <Swiper
            onSwiper={(swiperInstance) => (swiperRef.current = swiperInstance)} // Set swiperRef
            spaceBetween={0}
            loop={true}
            slidesPerView={1}
            modules={[Autoplay]}
            grabCursor={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {homeLifeAtKaara.map((item, key) => (
              <SwiperSlide key={key}>
                <div className="h-[460px] relative">
                  <div className="w-full h-full absolute top-0 bg-gradient-to-t from-black to-transparent"></div>
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-[70px] max-w-[1340px] m-auto left-0 right-0 text-white  w-full ">
                    <div className="max-w-[340px] text-white">
                      <h4 className="text-[40px] font-normal mb-5">
                        {item.title}
                      </h4>
                      <div className="flex xs:gap-3 lg:gap-5">
                        <p className="font-light text-[24px]">/0{key + 1}</p>
                        <p className="text-sm leading-7">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="dot absolute bottom-10 z-10 max-w-[1340px] m-auto left-28 right-0 flex gap-2">
            {homeLifeAtKaara.map((_, key) => (
              <div
                key={key}
                onClick={() => handleDotClick(key)} // Add onClick handler
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                  activeIndex === key ? "bg-primary-500" : "bg-white"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </Center>
    </Section>
  );
}
