import Template from "@/app/Template";
import InnerBanner from "@/sections/inner/InnerBanner";
import pageContent from "./pageContent";
import CaseStudies from "@/sections/inner/CaseStudies";
import DataAndAnalyticsBanner from "../../../../public/images/services/data-and-analytics.jpg";

import ServicesBanner from "@/sections/inner/ServicesBanner";
import ServicesGrid from "@/sections/inner/ServicesGrid";

export default function DataAndAnalyticsPage() {
  const { continuousFlow } = pageContent;

  return (
    <Template>
      <div className="min-h-screen">
        <InnerBanner
          page={"Custom Development"}
          pageTitle={"Delivering <span>Futuristic</span> Experiences"}
          letUstalk
        />
        <ServicesBanner
          bannerImage={DataAndAnalyticsBanner.src}
          bannerTitle="Find a Web 3 based solution customised for you and your customers. Intuitive apps, cloud platforms or immersive web experiences."
        >
          <h5 className="font-medium text-primary-500 mb-2">
            Custom Development
          </h5>
          <p>
            We create bespoke solutions tailored to your unique requirements and
            merging your business and customer needs with unlimited technical
            possibilities for both enterprise as well as consumer apps. We stand
            out by prioritizing the visual appeal, user-friendliness, and
            intuitiveness, going beyond mere functionality and use-cases.
          </p>
        </ServicesBanner>
        <ServicesGrid data={continuousFlow} />
        {/* <ServicesCypher />
        <WhyKaara
          data={whyKaara}
          desc="Lorem ipsum dolor sit amet consectetur. Eget in et morbi id lorem quis
        eu massa leo. Non dui ipsum."
        /> */}
        <CaseStudies />
      </div>
    </Template>
  );
}
