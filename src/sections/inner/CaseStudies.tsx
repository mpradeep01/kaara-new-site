"use client";
import { useEffect, useState } from "react";
import pageContent from "../../app/insights/case-studies/pageContent";
import Image from "next/image";

import Link from "next/link";

import {
  EffectCoverflow,
  Mousewheel,
  Keyboard,
  //Autoplay,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function CaseStudies() {
  //////////////////
  const centerDiv = 1400;
  const [width, setWidth] = useState(0);
  const [leftValue, setLeftValue] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const browserWidth = window.innerWidth;
      setWidth(browserWidth);

      // Calculate leftValue based on the browser width
      if (browserWidth >= centerDiv) {
        const left = (browserWidth - centerDiv) / 2;
        setLeftValue(left);
      } else {
        setLeftValue(0);
      }
    };

    // Set the initial width and leftValue
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  ///////////////////////////

  const { caseStudiesList } = pageContent;

  //////////////////////////
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="w-full min-h-full flex-1 h-full"
      style={{ paddingLeft: leftValue }}
      data-width={width}
    >
      <div className=" flex h-full gap-16 w-full">
        <div className="w-[580px] h-[670px] pl-40 text-right ">
          <h4 className="h4-title ">Case Studies</h4>
          <h3 className="h3-title font-bosch my-9">
            Some of Our <span>Work that shines</span>
          </h3>

          <div className="flex flex-col gap-4">
            {/* <h4 className="font-bold text-2xl text-primary-500">
              Modernizing Travel - Tech
            </h4> */}
            {caseStudiesList.slice(0, 5).map((item, key) => {
              const activeItem = activeIndex === key;
              return (
                <div
                  key={key}
                  className={`${
                    activeItem && "font-bold text-2xl text-primary-500"
                  }`}
                >
                  {item.title} - {key}
                </div>
              );
            })}
          </div>
          <div className="mt-4">
            <Link href={"#"} className="btn inline-block">
              View all{activeIndex}
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full relative overflow-hidden">
          <div className="absolute w-full ">
            <div className="slider-containe">
              <Swiper
                effect={"coverflow"}
                //centeredSlides={true}
                slidesPerView={"auto"}
                //loop={true}
                spaceBetween={60}
                grabCursor={true}
                modules={[
                  EffectCoverflow,
                  Mousewheel,
                  Keyboard,
                  //Autoplay,
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
                  stretch: 0,
                  depth: 0,
                  modifier: 2,
                  slideShadows: false,
                }}
                // autoplay={{
                //   delay: 7000,
                //   disableOnInteraction: false,
                // }}
                className="swiper_container"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active index on slide change
              >
                {caseStudiesList.map((item, key) => {
                  return (
                    <SwiperSlide key={key} style={{ width: 632, height: 670 }}>
                      <div className="relative w-full h-full">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black z-10"></div>

                        <Image
                          src={item.img}
                          alt={item.title}
                          layout="fill" // Fills the parent container
                          objectFit="cover" // Ensures the image covers the container while maintaining aspect ratio
                          quality={100} // High-quality image
                          className="z-0" // Ensures image is behind the overlay
                        />
                      </div>
                      <div className="absolute bottom-14 left-12 right-16 z-20 text-white">
                        <h4 className="text-[32px]  font-light">
                          {key}-{item.desc}
                        </h4>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
