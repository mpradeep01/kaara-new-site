import Template from "@/app/Template";
import Center from "@/components/Center";
import Section from "@/components/Section";
import InnerBanner from "@/sections/inner/InnerBanner";
import VisionMission from "../../../public/images/vision_mission.jpg";
import Image from "next/image";
import CustomersLogo from "../../../public/images/customers/logo.png"; // Your logo path
import PartnerAws from "../../../public/images/our_partners/aws.png"; // Your logo path
import PartnerGoogle from "../../../public/images/our_partners/google.png"; // Your logo path
import PartnerMicrosoft from "../../../public/images/our_partners/microsoft.png"; // Your logo path
import Link from "next/link";
// Array of logos (replace with actual logo paths)
const logos = Array(6).fill(CustomersLogo); // 20 logos as placeholders

import pageContent from "./pageContent";

export default function CompanyPage() {
  const { ourTeam } = pageContent;
  return (
    <Template>
      <div className="">
        <InnerBanner
          page={"About"}
          pageTitle={
            "Our focus is on establishing the <span>right values and culture</span>"
          }
          letUstalk
        >
          <p>
            We work relentlessly to fulfill our clients&apos; technological
            requirements within the given deadlines, while guiding them towards
            the correct path to solve their business challenges and attain their
            desired success. Our team and principles guarantee that our
            customers receive more than just the best service, adding value at
            every stage of the process.
          </p>
        </InnerBanner>
      </div>
      <Section className={`xs:items-stretch xs:min-h-0 `}>
        <Center className="flex items-center gap-16 xs:flex-col sm:flex-row">
          <div>
            <Image
              src={VisionMission}
              alt="Vision Mission"
              width={514}
              height={546}
            />
          </div>
          <div className="flex flex-col gap-20 flex-1">
            <div className="flex xs:gap-5 sm:gap-20 xs:flex-col sm:flex-row">
              <h3 className="h3-title font-bosch flex-1">
                <span>Vision</span>
              </h3>
              <div className="xs:w-full sm:w-[400px]">
                <p>
                  To be the preferred Digital Solution Partner for Businesses
                  worldwide
                </p>
              </div>
            </div>
            <hr />
            <div className="flex xs:gap-5 sm:gap-20 xs:flex-col sm:flex-row">
              <h3 className="h3-title font-bosch flex-1">
                <span>Mission</span>
              </h3>
              <div className="xs:w-full sm:w-[400px]">
                <ul className="list-disc">
                  <li>
                    Help our customers succeed by delivering the best solutions
                    for digital transformation.
                  </li>
                  <li>Amaze the customer with execution excellence</li>
                  <li>
                    Build a culture where people learn, grow and flourish, also
                    have fun along the way - the{" "}
                    <span className="font-semibold">“Kaara Way”</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Center>
      </Section>
      <Section className={`xs:items-stretch xs:min-h-0 `}>
        <Center className="flex flex-col">
          <div className="flex justify-between xs:flex-col sm:flex-row gap-10">
            <h3 className="h3-title font-bosch">
              Our <span>Clients</span>
            </h3>

            <p className="max-w-[500px] font-light text-2xl">
              To be the preferred Digital Solution Partner for Businesses
              worldwide
            </p>
          </div>
          <div className="mt-24 flex flex-col xs:gap-5 sm:gap-24 ">
            <div className="flex justify-between gap-5 flex-wrap">
              {logos.map((_, key) => {
                return (
                  <Image
                    key={key}
                    src={CustomersLogo}
                    alt={`logo-${key}`}
                    width={130}
                    height={38}
                    className=""
                  />
                );
              })}
            </div>
            <div className="flex justify-between gap-5 flex-wrap">
              {logos.map((_, key) => {
                return (
                  <Image
                    key={key}
                    src={CustomersLogo}
                    alt={`logo-${key}`}
                    width={130}
                    height={38}
                    className=""
                  />
                );
              })}
            </div>

            <div className="flex justify-between gap-5 flex-wrap">
              {logos.map((_, key) => {
                return (
                  <Image
                    key={key}
                    src={CustomersLogo}
                    alt={`logo-${key}`}
                    width={130}
                    height={38}
                    className=""
                  />
                );
              })}
            </div>
          </div>
        </Center>
      </Section>
      <Section className={`xs:items-stretch xs:min-h-0 `}>
        <Center className="flex flex-col gap-20">
          <div>
            <div>
              <h3 className="h3-title font-bosch">
                Our <span>Team</span>
              </h3>
            </div>
            <div className="flex gap-2 justify-between mt-14 xs:flex-col sm:flex-row xs:gap-10 sm:gap-0">
              {ourTeam.map((item, key) => {
                return (
                  <div key={key}>
                    <div>
                      <Image
                        src={item.profilePic}
                        alt={item.name}
                        width={301}
                        height={374}
                      />
                    </div>
                    <div className="mt-5">
                      <h4 className="font-bold text-2xl">{item.name}</h4>
                      <p>{item.designation}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <hr />
          <div>
            <div>
              <h3 className="h3-title font-bosch">Advisory Board</h3>
            </div>
            <div className="flex gap-2 justify-between mt-14 xs:flex-col sm:flex-row xs:gap-10 sm:gap-0">
              {ourTeam.map((item, key) => {
                return (
                  <div key={key}>
                    <div>
                      <Image
                        src={item.profilePic}
                        alt={item.name}
                        width={301}
                        height={374}
                      />
                    </div>
                    <div className="mt-5">
                      <h4 className="font-bold text-2xl">{item.name}</h4>
                      <p>{item.designation}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Center>
      </Section>
      <Section className="bg-primary-20 xs:items-stretch xs:min-h-0">
        <Center>
          <h3 className="h3-title font-bosch text-center leading-tight">
            <span>Join our partner network and grow with us.</span> We believe
            that strong partnerships and collaborations amplifies growth of both
            companies, together.
          </h3>
          <div className="mt-8">
            <h4 className="font-light text-4xl text-center">Our partners</h4>
            <div className="flex justify-center gap-9 items-center mt-8">
              <div>
                <Image src={PartnerAws} alt="AWS" />
              </div>
              <div>
                <Image src={PartnerGoogle} alt="Google" />
              </div>
              <div>
                <Image src={PartnerMicrosoft} alt="Microsoft" />
              </div>
            </div>
            <div className="flex justify-center gap-9 items-center mt-8">
              <Link href={"#"} className="btn">
                Partner with us
              </Link>
            </div>
          </div>
        </Center>
      </Section>
    </Template>
  );
}
