"use client";
// components/StackCarousel.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

type Profile = {
  name: string;
  pic: string;
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

const SayAboutKaaraSlider: React.FC<CarouselProps> = ({ items }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % items.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + items.length) % items.length);

  const variants = {
    visible: (i: number) => ({
      x: i === 0 ? 0 : 5, // Slight horizontal shift for second card
      y: i * 15, // Stacked vertical offset
      scale: 1 - i * 0.1, // Shrink second card slightly
      rotate: i === 0 ? 0 : 10, // Rotate the second card slightly
      opacity: i <= 1 ? 1 : 0, // Show only two items
      zIndex: items.length - i, // Proper stacking
      transition: {
        type: "spring",
        stiffness: 100, // Higher = faster motion
        damping: 10, // Lower = more bounce
        mass: 1, // Affects how heavy the object feels
      },
    }),
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: 10, // Slight rotation for hidden state
    },
  };

  return (
    <div className="relative  w-full h-full flex justify-center">
      <AnimatePresence initial={false}>
        {items.map((member, index) => {
          const position = (index - current + items.length) % items.length;

          // Render only the first 2 cards in the stack
          if (position > 1) return null;

          return (
            <motion.div
              key={index}
              custom={position}
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute w-[350px] p-6 bg-white flex flex-col items-center border border-primary-500 rounded-xl text-center"
            >
              <h4 className="font-semibold text-xl">{member.title}</h4>
              <div className="my-3">{member.desc}</div>

              <div className="flex flex-col items-center mt-5">
                <Image
                  src={member.profile.pic}
                  alt={member.profile.name}
                  width={48}
                  height={48}
                  className="rounded-full mb-3"
                />
                <h5 className="font-semibold text-sm">{member.profile.name}</h5>
                <p className="text-[12px]">{member.profile.designation}</p>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
      <div className="absolute -bottom-16 z-10 flex gap-4">
        <div
          onClick={prev}
          className="cursor-pointer text-2xl bg-white shadow-md p-2 w-12 h-12 rounded-full flex justify-center items-center hover:bg-slate-100"
        >
          <FaArrowLeftLong />
        </div>
        <div
          onClick={next}
          className="cursor-pointer text-2xl bg-white shadow-md p-2 w-12 h-12 rounded-full flex justify-center items-center hover:bg-slate-100"
        >
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default SayAboutKaaraSlider;

// ("use client");
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-cards";
// import { EffectCards, Navigation } from "swiper/modules";
// import Image from "next/image";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { FaArrowRightLong } from "react-icons/fa6";

// type Profile = {
//   name: string;
//   pic: string;
//   designation: string;
// };

// type CarouselItem = {
//   title: string;
//   desc: string;
//   profile: Profile;
// };

// interface CarouselProps {
//   items: CarouselItem[];
// }

// export default function SayAboutKaaraSlider({ items }: CarouselProps) {
//   return (
//     <div>
//       <Swiper
//         slidesPerView={1}
//         loop={true}
//         effect={"cards"}
//         grabCursor={true}
//         modules={[EffectCards, Navigation]}
//         cardsEffect={{
//           perSlideRotate: 4,
//           perSlideOffset: 1,
//           slideShadows: false,
//         }}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         className="mySwiper"
//       >
//         {items.map((item, key) => {
//           return (
//             <SwiperSlide key={key}>
//               <div className="w-full max-w-[450px] p-6 bg-white flex flex-col items-center border border-primary-500 rounded-xl text-center">
//                 <h4 className="font-semibold text-xl">{item.title}</h4>
//                 <div className="my-3">{item.desc}</div>
//                 <div className="flex flex-col items-center mt-5">
//                   <Image
//                     src={item.profile.pic}
//                     alt={item.profile.name}
//                     width={48}
//                     height={48}
//                     className="rounded-full mb-3"
//                   />
//                   <h5 className="font-semibold text-sm">{item.profile.name}</h5>
//                   <p className="text-[12px]">{item.profile.designation}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//       <div className="mt-8 flex justify-center gap-4 w-full">
//         <div className=" swiper-button-prev cursor-pointer text-xl bg-white shadow-xl p-1 w-10 h-10 rounded-full flex justify-center items-center hover:bg-slate-100">
//           <FaArrowLeftLong />
//         </div>
//         <div className=" swiper-button-next cursor-pointer text-xl bg-white shadow-xl p-1 w-10 h-10 rounded-full flex justify-center items-center hover:bg-slate-100">
//           <FaArrowRightLong />
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-cards";
// import { Autoplay, EffectCards, Navigation } from "swiper/modules";
// import Image from "next/image";
// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// import { useState, useRef } from "react";

// type Profile = {
//   name: string;
//   pic: string;
//   designation: string;
// };

// type CarouselItem = {
//   title: string;
//   desc: string;
//   profile: Profile;
// };

// interface CarouselProps {
//   items: CarouselItem[];
// }

// export default function SayAboutKaaraSlider({ items }: CarouselProps) {
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);
//   const swiperRef = useRef<any>(null); // Ref for Swiper instance

//   const handleSwiperInit = (swiper: any) => {
//     swiperRef.current = swiper;
//     setIsBeginning(swiper.isBeginning);
//     setIsEnd(swiper.isEnd);
//   };

//   const handleSlideChange = (swiper: any) => {
//     setIsBeginning(swiper.isBeginning);
//     setIsEnd(swiper.isEnd);
//   };

//   return (
//     <div>
//       <Swiper
//         slidesPerView={1}
//         effect={"cards"}
//         grabCursor={true}
//         modules={[EffectCards, Navigation, Autoplay]}
//         autoplay={{
//           delay: 25000,
//           disableOnInteraction: false,
//         }}
//         cardsEffect={{
//           rotate: true,
//           perSlideRotate: 10,
//           perSlideOffset: -5,
//           slideShadows: false,
//         }}
//         onInit={handleSwiperInit} // Initialize swiper
//         onSlideChange={handleSlideChange} // Track slide changes
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         className="mySwiper"
//       >
//         {items.map((item, key) => (
//           <SwiperSlide key={key}>
//             <div className="w-full max-w-[450px] p-6 bg-white flex flex-col items-center border border-primary-500 rounded-xl text-center">
//               <h4 className="font-semibold text-xl">{item.title}</h4>
//               <div className="my-3">{item.desc}</div>
//               <div className="flex flex-col items-center mt-5">
//                 <Image
//                   src={item.profile.pic}
//                   alt={item.profile.name}
//                   width={48}
//                   height={48}
//                   className="rounded-full mb-3"
//                 />
//                 <h5 className="font-semibold text-sm">{item.profile.name}</h5>
//                 <p className="text-[12px]">{item.profile.designation}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="mt-8 flex justify-center gap-4 w-full">
//         {/* Prev Button */}
//         <div
//           className={`swiper-button-prev cursor-pointer text-xl bg-white shadow-xl p-1 w-10 h-10 rounded-full flex justify-center items-center hover:bg-slate-100 ${
//             isBeginning ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           <FaArrowLeftLong />
//         </div>

//         {/* Next Button */}
//         <div
//           className={`swiper-button-next cursor-pointer text-xl bg-white shadow-xl p-1 w-10 h-10 rounded-full flex justify-center items-center hover:bg-slate-100 ${
//             isEnd ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           <FaArrowRightLong />
//         </div>
//       </div>
//     </div>
//   );
// }
