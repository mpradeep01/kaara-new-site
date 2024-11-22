// "use client";

// import Image from "next/image";
// import {
//   EffectCoverflow,
//   Navigation,
//   Pagination,
//   Zoom,
//   Mousewheel,
//   Keyboard,
// } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow"; // Import effect styles

// interface Slide {
//   img: string;
// }

// interface Props {
//   slides: Slide[];
// }

// export default function CoverflowCarousel({ slides }: Props) {
//   return (
//     <div>
//       <Swiper
//         // spaceBetween={50}
//         // slidesPerView={5}
//         // centeredSlides={true}
//         // loop={true}
//         // grabCursor={true} // Change cursor to grab
//         // effect={"coverflow"} // Set effect to coverflow
//         // //modules={[EffectCoverflow, Navigation, Zoom]} // Register the modules
//         // // onSlideChange={() => console.log("slide change")}
//         // // onSwiper={(swiper) => console.log(swiper)}
//         // spaceBetween={20}
//         // effect={"coverflow"}
//         // grabCursor={true}
//         // centeredSlides={true}
//         // loop={true}
//         // slidesPerView={5}
//         // coverflowEffect={{
//         //   rotate: 0,
//         //   stretch: 100,
//         //   depth: 250,
//         //   modifier: 0.5,
//         // }}
//         // pagination={{ el: ".swiper-pagination", clickable: true }}
//         // navigation={{
//         //   nextEl: ".swiper-button-next",
//         //   prevEl: ".swiper-button-prev",
//         //   // clickable: true,
//         // }}
//         // modules={[EffectCoverflow, Pagination, Navigation]}
//         // className="swiper_container"
//         effect={"coverflow"}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         loop={true}
//         spaceBetween={120}
//         grabCursor={true}
//         modules={[EffectCoverflow, Mousewheel]}
//         mousewheel={{
//           forceToAxis: true, // Helps prevent horizontal and vertical conflicts
//           thresholdDelta: 70, // Amount of delta to trigger a change
//           sensitivity: 1, // Adjust sensitivity
//         }}
//         keyboard={{
//           enabled: true,
//         }}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 5,
//           depth: 50,
//           modifier: 2,
//           slideShadows: false,
//         }}
//         className="swiper_container"
//       >
//         {slides.map((item, key) => {
//           return (
//             <SwiperSlide key={key} style={{ width: "263px", height: "530px" }}>
//               <Image src={item.img} alt={""} width={263} height={530} />
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import {
  EffectCoverflow,
  Mousewheel,
  Keyboard,
  Autoplay,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

interface Slide {
  img: string;
}

interface Props {
  slides: Slide[];
}

export default function CoverflowCarousel({ slides }: Props) {
  return (
    <div className="overflow-hidden bg-gradient-custom flex justify-between items-center">
      <div className="xs:w-10 sm:w-24 flex justify-center items-center">
        <div className=" swiper-button-prevcursor-pointer text-2xl bg-white shadow-md xs:p-1.5 sm:p-2 xs:w-6 sm:w-12 xs:h-6 sm:h-12 rounded-full flex justify-center items-center hover:bg-slate-100">
          <FaArrowLeftLong />
        </div>
      </div>
      <div className="flex-1 w-[calc(100%-150px)] ">
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          spaceBetween={60}
          grabCursor={true}
          modules={[
            EffectCoverflow,
            Mousewheel,
            Keyboard,
            Autoplay,
            Navigation,
          ]} // Register modules
          navigation={{
            nextEl: ".swiper-button-next", // Link to custom buttons
            prevEl: ".swiper-button-prev",
          }}
          mousewheel={{
            forceToAxis: true,
            thresholdDelta: 70,
            sensitivity: 1,
          }}
          keyboard={{
            enabled: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 5,
            depth: 50,
            modifier: 2,
            slideShadows: false,
          }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          className="swiper_container"
        >
          {slides.map((item, key) => (
            <SwiperSlide key={key} style={{ width: "263px", height: "530px" }}>
              <Image src={item.img} alt="" width={263} height={530} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="xs:w-10 sm:w-24 flex justify-center items-center">
        <div className=" swiper-button-next cursor-pointer text-2xl bg-white shadow-md xs:p-1.5 sm:p-2 xs:w-6 sm:w-12 xs:h-6 sm:h-12  rounded-full flex justify-center items-center hover:bg-slate-100">
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
}
