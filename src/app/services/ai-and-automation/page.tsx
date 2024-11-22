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
          page={"Ai and Automation"}
          pageTitle={
            "Powering smarter decision making, delivering faster growth"
          }
          letUstalk
        />
        <ServicesBanner
          bannerImage={DataAndAnalyticsBanner.src}
          bannerTitle="Find a solution customised for you and your customers. Intuitive apps, cloud platforms or immersive web experiences."
        >
          <h5 className="font-medium text-primary-500 mb-2">
            Ai and Automation
          </h5>
          <p>
            We specialize in delivering cutting-edge AI solutions that transform
            businesses. From predictive analytics to intelligent automation, our
            AI services empower companies to make data-driven decisions, enhance
            customer experiences, and optimize processes for greater efficiency
            and innovation.
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
