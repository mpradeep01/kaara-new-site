import caseStudiesImg from "../../../../public/images/case_studies/case_studies.jpg";

// Define a TypeScript interface for case study items
export interface CaseStudy {
  id: number;
  title: string;
  desc: string;
  img: string;
  category: string; // All items have a defined category
}

// Define the case studies list
export const caseStudiesList: CaseStudy[] = [
  {
    id: 1,
    title: "Cloud Solutions for Modern Businesses",
    desc: "Transform your IT infrastructure with scalable and cost-effective cloud solutions.",
    img: caseStudiesImg.src,
    category: "cloud-and-infra",
  },
  {
    id: 2,
    title: "Analytics that Drive Decisions",
    desc: "Empowering businesses with actionable insights through advanced data analytics.",
    img: caseStudiesImg.src,
    category: "cloud-and-infra",
  },
  {
    id: 3,
    title: "Tailored Software Development",
    desc: "Delivering bespoke software solutions to meet unique business challenges.",
    img: caseStudiesImg.src,
    category: "custom-development",
  },
  {
    id: 4,
    title: "AI for Business Growth",
    desc: "Leverage AI and automation to streamline operations and boost productivity.",
    img: caseStudiesImg.src,
    category: "cloud-and-infra",
  },
  {
    id: 5,
    title: "Innovative Design Services",
    desc: "Creating stunning designs that align with your brand's vision and goals.",
    img: caseStudiesImg.src,
    category: "design-services",
  },
  {
    id: 6,
    title: "Next-Gen Cloud Migration",
    desc: "Seamlessly migrate to the cloud with minimal downtime and maximum efficiency.",
    img: caseStudiesImg.src,
    category: "cloud-and-infra",
  },
  {
    id: 7,
    title: "Big Data Solutions",
    desc: "Harness the power of big data to unlock hidden opportunities for your business.",
    img: caseStudiesImg.src,
    category: "data-and-analytics",
  },
  {
    id: 8,
    title: "Custom App Development",
    desc: "Developing robust and scalable apps tailored to your specific needs.",
    img: caseStudiesImg.src,
    category: "custom-development",
  },
  {
    id: 9,
    title: "Automate Your Future",
    desc: "Boost efficiency with cutting-edge AI and intelligent automation solutions.",
    img: caseStudiesImg.src,
    category: "cloud-and-infra",
  },
  {
    id: 10,
    title: "Revolutionary UX/UI Design",
    desc: "Designing user experiences that captivate and engage your audience.",
    img: caseStudiesImg.src,
    category: "design-services",
  },
  {
    id: 11,
    title: "Hybrid Cloud Strategies",
    desc: "Combine public and private clouds for maximum flexibility and security.",
    img: caseStudiesImg.src,
    category: "cloud-and-infra",
  },
  {
    id: 12,
    title: "AI-Driven Insights",
    desc: "Gain a competitive edge with AI-powered data analytics.",
    img: caseStudiesImg.src,
    category: "cloud-and-infra",
  },
  {
    id: 13,
    title: "Custom E-Commerce Platforms",
    desc: "Building scalable and secure e-commerce platforms tailored to your market.",
    img: caseStudiesImg.src,
    category: "custom-development",
  },
  {
    id: 14,
    title: "Smart Process Automation",
    desc: "Streamline workflows and reduce manual tasks with intelligent automation.",
    img: caseStudiesImg.src,
    category: "ai-and-automation",
  },
  {
    id: 15,
    title: "Creative Branding Solutions",
    desc: "Crafting visual identities that resonate with your target audience.",
    img: caseStudiesImg.src,
    category: "design-services",
  },
  {
    id: 16,
    title: "Cloud Cost Optimization",
    desc: "Reduce your cloud expenditure with strategic cost management solutions.",
    img: caseStudiesImg.src,
    category: "cloud-and-infra",
  },
  {
    id: 17,
    title: "Predictive Analytics",
    desc: "Anticipate trends and make informed decisions with predictive analytics tools.",
    img: caseStudiesImg.src,
    category: "data-and-analytics",
  },
  {
    id: 18,
    title: "Scalable Software Solutions",
    desc: "Developing software that grows with your business.",
    img: caseStudiesImg.src,
    category: "custom-development",
  },
  {
    id: 19,
    title: "AI-Powered Chatbots",
    desc: "Improve customer engagement with smart, AI-driven chatbots.",
    img: caseStudiesImg.src,
    category: "ai-and-automation",
  },
  {
    id: 20,
    title: "Minimalist Web Designs",
    desc: "Designing modern, clean, and user-friendly websites.",
    img: caseStudiesImg.src,
    category: "design-services",
  },
];

export default caseStudiesList;
