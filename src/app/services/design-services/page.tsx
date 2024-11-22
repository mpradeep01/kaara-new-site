import Template from "@/app/Template";
import InnerBanner from "@/sections/inner/InnerBanner";
import pageContent from "./pageContent";
import CaseStudies from "@/sections/inner/CaseStudies";
import DataAndAnalyticsBanner from "../../../../public/images/services/data-and-analytics.jpg";
import WhyKaara from "@/sections/inner/WhyKaara";
import ServicesBanner from "@/sections/inner/ServicesBanner";
import ServicesGrid from "@/sections/inner/ServicesGrid";
import ServicesCypher from "@/sections/inner/ServicesCypher";

export default function DataAndAnalyticsPage() {
  const { continuousFlow, whyKaara } = pageContent;

  return (
    <Template>
      <div className="min-h-screen">
        <InnerBanner
          page={"Design Services"}
          pageTitle={"Banner <span>title</span>"}
          letUstalk
        />
        <ServicesBanner
          bannerImage={DataAndAnalyticsBanner.src}
          bannerTitle=" Envision a continuous flow of <span>valuable insights</span>
                  that enable you to make
                  <span>informed business decisions.</span>"
        >
          <h5 className="font-medium text-primary-500 mb-2">Design Services</h5>
          <p>
            Kaara&apos;s data and analytics services can empower any
            organization to thrive and distinguish itself from its competitors.
            We pinpoint use cases that align with your business priorities and
            develop customized analytics solutions using the appropriate
            expertise and technologies to meet your specific needs.
          </p>
        </ServicesBanner>
        <ServicesGrid data={continuousFlow} />
        <ServicesCypher />
        <WhyKaara
          data={whyKaara}
          desc="Lorem ipsum dolor sit amet consectetur. Eget in et morbi id lorem quis
        eu massa leo. Non dui ipsum."
        />
        <CaseStudies />
      </div>
    </Template>
  );
}
