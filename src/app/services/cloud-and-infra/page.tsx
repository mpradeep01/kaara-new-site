import Template from "@/app/Template";
import InnerBanner from "@/sections/inner/InnerBanner";
import pageContent from "./pageContent";
import CaseStudies from "@/sections/inner/CaseStudies";
import DataAndAnalyticsBanner from "../../../../public/images/services/data-and-analytics.jpg";
import WhyKaara from "@/sections/inner/WhyKaara";
import ServicesBanner from "@/sections/inner/ServicesBanner";
import ServicesGrid from "@/sections/inner/ServicesGrid";
//import ServicesCypher from "@/sections/inner/ServicesCypher";

export default function DataAndAnalyticsPage() {
  const { continuousFlow, whyKaara } = pageContent;

  return (
    <Template>
      <div className="min-h-screen">
        <InnerBanner
          page={"Cloud and Infra"}
          pageTitle={
            "Accelerating your <span>Digital Transformation</span> Journey "
          }
          letUstalk
        />
        <ServicesBanner
          bannerImage={DataAndAnalyticsBanner.src}
          bannerTitle="Stay ahead of the curve by leveraging Multi Cloud Offerings and achieve tangible business outcomes"
        >
          <h5 className="font-medium text-primary-500 mb-2">Cloud and Infra</h5>
          <p>
            Our Cloud services help enterprises achieve their Digital
            Transformation goals and serve their stakeholders better with our
            Cloud Advisory Services and decrease their operational expenses,
            improve productivity, and quicker time-to-market and achieve
            seamless Business Continuity
          </p>
        </ServicesBanner>
        <ServicesGrid data={continuousFlow} />
        {/* <ServicesCypher /> */}
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
