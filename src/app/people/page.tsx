"use client";
import Template from "@/app/Template";
import InnerBanner from "@/sections/inner/InnerBanner";
import Image from "next/image";
import Section from "@/components/Section";
import Center from "@/components/Center";
import PeopleBanner from "../../../public/images/pepple_banner.jpg";

import PageData from "./pageContent";
import SayAboutKaaraSlider from "@/components/sliders/SayAboutKaaraSlider";
import HappyPlaceToWork from "@/components/sliders/HappyPlaceToWork";
import { useState } from "react";
import { MdPlayCircleOutline } from "react-icons/md";
import StickyContainer from "@/components/Cards/StickyContainer";

export default function PeoplePage() {
  const {
    whatDoWeBelieve,
    ourCulture,
    whatWeValue,
    operatingDNA,
    leadershipPromises,
    placeToWork,
    placeToWorkSlider,
    sayAboutKaara,
  } = PageData;

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <Template>
      <Section className="xs:items-stretch xs:min-h-0 ">
        <InnerBanner
          page={"People"}
          pageTitle="Building Tomorrow  <span>Together!</span>"
          bannerRight={<SayAboutKaaraSlider items={sayAboutKaara} />}
          letUstalk
        >
          We believe in balancing intellect and emotions, valuing Emotional
          Intelligence as much as Intellectual Intelligence. Our company fosters
          a connected community where everyone shares a common goal while
          maintaining individual responsibilities and growth plans. We aim to
          celebrate each person&apos;s uniqueness and embed respect and care
          into our company&apos;s core values.
        </InnerBanner>
      </Section>
      {/* <Section className="xs:items-stretch xs:min-h-0 xs:py-0 ">
        <Center className="max-w-[1920px] !px-0 min-h-80">
          <Image
            src={PeopleBanner}
            alt="People"
            className="w-full h-full object-cover"
          />
        </Center>
      </Section> */}
      <Section
        dataCursor="video"
        className="xs:items-stretch xs:min-h-0 xs:py-0 "
      >
        <Center className="max-w-[1920px] !px-0 h-[800px]  relative">
          {!isPlaying ? (
            // Default image shown before video is played
            <div onClick={handlePlayClick} data-cursor="video">
              <Image
                src={PeopleBanner}
                alt="People"
                className="w-full h-full object-cover"
                data-cursor="video"
              />
              <MdPlayCircleOutline className="absolute top-1/2 left-1/2 text-9xl transform -translate-x-1/2 -translate-y-1/2 text-primary-500 opacity-30" />
            </div>
          ) : (
            // Video player shown when image is clicked
            <video
              width="100%"
              height="100%"
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/images/videos/dummy.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Center>
      </Section>

      <StickyContainer>
        <Section className="xs:items-stretch">
          <Center>
            <div className="xs:mx-0 sm:mx-14">
              <h4>Our DNA</h4>
              <h3 className="h3-title font-bosch" data-cursor="title">
                What do <span>we believe</span>
              </h3>
              <div className="grid xs:grid-cols-1 sm:grid-cols-4 gap-4  mt-20">
                {whatDoWeBelieve.map((item, key) => {
                  return (
                    <div
                      key={key}
                      className="p-6 border-[1px] rounded-md flex flex-col gap-4"
                    >
                      <div className="flex justify-center">
                        <Image src={item.img} alt={item.desc} />
                      </div>
                      <h5 className="text-xl text-center">{item.desc}</h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </Center>
        </Section>
      </StickyContainer>

      <StickyContainer>
        <Section className="xs:items-stretch">
          <Center>
            <div className="xs:mx-0 sm:mx-14">
              <h3 className="h3-title font-bosch">
                Our <span>culture</span>
              </h3>
              <div className="grid xs:grid-cols-1 sm:grid-cols-4 gap-4  mt-20">
                {ourCulture.map((item, key) => {
                  return (
                    <div
                      key={key}
                      className="p-6 border-[1px] rounded-md flex flex-col gap-4"
                    >
                      <div className="flex justify-center">
                        <Image src={item.img} alt={item.desc} />
                      </div>
                      <h5 className="text-xl text-center">{item.desc}</h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </Center>
        </Section>
      </StickyContainer>

      <StickyContainer>
        <Section className="xs:items-stretch">
          <Center>
            <div className="xs:mx-0 sm:mx-14">
              <h3 className="h3-title font-bosch">
                What <span> we value</span>
              </h3>
              <div className="grid xs:grid-cols-1 sm:grid-cols-4 gap-4  mt-20">
                {whatWeValue.map((item, key) => {
                  return (
                    <div
                      key={key}
                      className="p-6 border-[1px] rounded-md flex flex-col gap-4"
                    >
                      <div className="flex justify-center">
                        <Image src={item.img} alt={item.desc} />
                      </div>
                      <h5 className="text-xl text-center">{item.desc}</h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </Center>
        </Section>
      </StickyContainer>

      <StickyContainer>
        <Section className="xs:items-stretch ">
          <Center>
            <div className="xs:mx-0 sm:mx-14">
              <h3 className="h3-title font-bosch">
                Operating <span> DNA</span>
              </h3>
              <div className="grid xs:grid-cols-1 sm:grid-cols-4 gap-4  mt-20">
                {operatingDNA.map((item, key) => {
                  return (
                    <div
                      key={key}
                      className="p-6 border-[1px] rounded-md flex flex-col gap-4"
                    >
                      <div className="flex justify-center">
                        <Image src={item.img} alt={item.desc} />
                      </div>
                      <h5 className="text-xl text-center">{item.desc}</h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </Center>
        </Section>
      </StickyContainer>

      {/* <Section className="xs:items-stretch xs:min-h-0 ">
        <Center>
          <div className="xs:mx-0 sm:mx-14">
            
            <div className="sticky-container bg-white min-h-screen sticky top-10">
              <h3 className="h3-title font-bosch">
                Leadership <span> Promises/Expectations</span>
              </h3>
              <div className="grid xs:grid-cols-1 sm:grid-cols-4 gap-4  mt-20">
                {leadershipPromises.map((item, key) => {
                  return (
                    <div
                      key={key}
                      className="p-6 border-[1px] rounded-md flex flex-col gap-4"
                    >
                      <div className="flex justify-center">
                        <Image src={item.img} alt={item.desc} />
                      </div>
                      <h5 className="text-xl text-center">{item.desc}</h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Center>
      </Section> */}
      <Section className="sticky-container bg-white min-h-screen sticky top-10">
        <Center className="bg-primary-10 flex gap-20 xs:flex-col sm:flex-row">
          <div className="flex-1 xs:px-0 p-10">
            <h3 className="h3-title font-bosch">
              What makes <span>Kaara</span> a Happy place to work?
            </h3>
            <ul className="flex flex-col gap-6 mt-14 max-w-[590px]">
              {placeToWork.map((item, key) => (
                <li key={key} className="font-light text-3xl flex gap-1">
                  <span className="text-base text-primary-500 mt-1">
                    0{key + 1}/
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <HappyPlaceToWork data={placeToWorkSlider} />
          </div>
        </Center>
      </Section>
    </Template>
  );
}
