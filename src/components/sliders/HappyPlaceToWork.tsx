// "use client";
// import { useState } from "react";
// import Image, { StaticImageData } from "next/image";
// import { motion, TargetAndTransition, Variant } from "framer-motion";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { FaArrowRightLong } from "react-icons/fa6";
// export type CarouselItem = {
//   img: string;
// };

// interface CarouselProps {
//   data: CarouselItem[];
//   animationStyle?:
//     | "fade"
//     | "zoom"
//     | "rotate"
//     | "flip"
//     | "3d-flip"
//     | "carousel-spin"
//     | "parallax"
//     | "swipe-spring"
//     | "stacked-card"
//     | "slide";
// }

// export default function HappyPlaceToWork({
//   data,
//   animationStyle = "fade",
// }: CarouselProps) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleNext = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === data.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? data.length - 1 : prevIndex - 1
//     );
//   };

//   const handleDotClick = (index: number) => {
//     setActiveIndex(index);
//   };

//   const getAnimationProps = (
//     animationStyle: string,
//     duration: number = 0.5,
//     delay: number = 0
//   ) => {
//     switch (animationStyle) {
//       case "fade":
//         return {
//           initial: { opacity: 0 },
//           animate: { opacity: 1 },
//           exit: { opacity: 0 },
//           transition: { duration, delay },
//         };
//       case "zoom":
//         return {
//           initial: { scale: 0.8 },
//           animate: { scale: 1 },
//           exit: { scale: 0.8 },
//           transition: { duration, delay },
//         };
//       case "rotate":
//         return {
//           initial: { rotateY: 90 },
//           animate: { rotateY: 0 },
//           exit: { rotateY: 90 },
//           transition: { duration, delay },
//         };
//       case "flip":
//         return {
//           initial: { rotateX: 90 },
//           animate: { rotateX: 0 },
//           exit: { rotateX: 90 },
//           transition: { duration, delay },
//         };
//       case "3d-flip":
//         return {
//           initial: { rotateY: 180 },
//           animate: { rotateY: 0 },
//           exit: { rotateY: 180 },
//           transition: { duration, delay },
//         };
//       case "carousel-spin":
//         return {
//           initial: { rotate: -90, scale: 0.8 },
//           animate: { rotate: 0, scale: 1 },
//           exit: { rotate: 90, scale: 0.8 },
//           transition: { duration, delay },
//         };
//       case "parallax":
//         return {
//           initial: { x: "100%" },
//           animate: { x: 0 },
//           exit: { x: "-100%" },
//           transition: { duration, delay, type: "spring", stiffness: 100 },
//         };
//       case "swipe-spring":
//         return {
//           initial: { x: "-100%", opacity: 0 },
//           animate: { x: 0, opacity: 1 },
//           exit: { x: "100%", opacity: 0 },
//           transition: {
//             duration,
//             delay,
//             type: "spring",
//             stiffness: 120,
//             damping: 10,
//           },
//         };
//       case "stacked-card":
//         return {
//           initial: { scale: 0.9, y: 100 },
//           animate: { scale: 1, y: 0 },
//           exit: { scale: 0.9, y: -100 },
//           transition: { duration, delay },
//         };
//       default:
//         // Slide animation (default)
//         return {
//           initial: { opacity: 0, x: 10 },
//           animate: { opacity: 1, x: 0 },
//           exit: { opacity: 0, x: -10 },
//           transition: { duration, delay },
//         };
//     }
//   };

//   const currentItem = data[activeIndex];

//   return (
//     <div className="relative w-full h-full">
//       <motion.div
//         key={activeIndex}
//         {...getAnimationProps("fade", 2, 0)}
//         className="w-full h-full bg-black"
//       >
//         <Image
//           src={currentItem.img}
//           alt={currentItem.img}
//           width={600}
//           height={600}
//           className="object-cover w-full h-full"
//         />
//       </motion.div>
//       <div className="absolute bottom-5 z-50 flex justify-center gap-5 w-full">
//         <div
//           onClick={handlePrev}
//           className="cursor-pointer text-xl bg-white shadow-md p-1 w-6 h-6 rounded-full flex justify-center items-center hover:bg-slate-100"
//         >
//           <FaArrowLeftLong />
//         </div>
//         <div
//           onClick={handleNext}
//           className="cursor-pointer text-xl bg-white shadow-md p-1 w-6 h-6 rounded-full flex justify-center items-center hover:bg-slate-100"
//         >
//           <FaArrowRightLong />
//         </div>
//       </div>
//       {/* <div className="flex justify-center mt-6 space-x-2">
//         {data.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full ${
//               activeIndex === index ? "bg-gray-900" : "bg-gray-400"
//             }`}
//             onClick={() => handleDotClick(index)}
//           ></button>
//         ))}
//       </div> */}
//     </div>
//   );
// }
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

export type CarouselItem = {
  img: string;
};

interface Props {
  data: CarouselItem[];
}

export default function HappyPlaceToWork({ data }: Props) {
  return (
    <div className="relative">
      <Swiper
        style={{ width: 640, height: 750 }}
        modules={[EffectFade, Autoplay, Navigation]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {data.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <Image
                src={item.img}
                alt="Happy Place to Work"
                width={640}
                height={700}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-center gap-4 w-full  absolute bottom-5 z-10">
        <div className=" swiper-button-prev cursor-pointer text-xl bg-white shadow-md p-1 w-6 h-6 rounded-full flex justify-center items-center hover:bg-slate-100">
          <FaArrowLeftLong />
        </div>
        <div className=" swiper-button-next cursor-pointer text-xl bg-white shadow-md p-1 w-6 h-6 rounded-full flex justify-center items-center hover:bg-slate-100">
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
}
