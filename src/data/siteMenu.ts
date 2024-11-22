// import { ReactNode, ComponentType } from "react"; // Import types
// import CloudAndInfraIcon from "../../public/images/icons/cloud-and-Infra.svg";
// import DataAndAnalyticsIcon from "../../public/images/icons/data-and-analytics.svg";
// import CustomDevelopmentIcon from "../../public/images/icons/custom-development.svg";
// import AIAndAutomationIcon from "../../public/images/icons/aI-and-automation.svg";
// import DesignServicesIcon from "../../public/images/icons/design-services.svg";

// // Define SubMenu type with `icon` as an optional React component
// interface SubMenu {
//   id: number;
//   title: string;
//   icon?: ComponentType; // Icon is a React component
//   desc: string;
//   link: string;
// }

// // Define MenuItem type for the main menu items
// interface MenuItem {
//   id: number;
//   title: string;
//   link: string;
//   width?: string;
//   subMenus?: SubMenu[]; // Optional array of subMenu items
// }

// // Define the structure for the entire menu
// interface SiteMenuData {
//   siteMenu: MenuItem[];
// }

// const siteMenu = [
//   {
//     id: 1,
//     title: "Home",
//     link: "/",
//   },
//   {
//     id: 2,
//     title: "Services",
//     link: "#",
//     width: "full",
//     subMenus: [
//       {
//         id: 201,
//         title: "Cloud and Infra",
//         icon: CloudAndInfraIcon,
//         desc: "Our Cloud services help enterprises achieve their Digital Transformation goals and serve their stakeholders better with our Cloud Advisory Services and decrease their operational expenses, improve productivity, and quicker time-to-market and achieve seamless Business Continuity",
//         link: "/services/cloud-and-infra",
//       },
//       {
//         id: 202,
//         title: "Data and Analytics",
//         icon: DataAndAnalyticsIcon,
//         desc: "Kaara's data and analytics services can empower any organization to thrive and distinguish itself from its competitors. We pinpoint use cases that align with your business priorities and develop customized analytics solutions using the appropriate expertise and technologies to meet your specific needs.",
//         link: "/services/data-and-analytics",
//       },
//       {
//         id: 203,
//         title: "Custom Development",
//         icon: CustomDevelopmentIcon,
//         desc: "We create bespoke solutions tailored to your unique requirements and merging your business and customer needs with unlimited technical possibilities for both enterprise as well as consumer apps. We stand out by prioritizing the visual appeal, user-friendliness, and intuitiveness, going beyond mere functionality and use-cases.",
//         link: "/services/custom-development",
//       },
//       {
//         id: 204,
//         title: "AI and Automation",
//         icon: AIAndAutomationIcon,
//         desc: "We specialize in delivering cutting-edge AI solutions that transform businesses. From predictive analytics to intelligent automation, our AI services empower companies to make data-driven decisions, enhance customer experiences, and optimize processes for greater efficiency and innovation.",
//         link: "/services/ai-and-automation",
//       },
//       {
//         id: 205,
//         title: "Design Services",
//         icon: DesignServicesIcon,
//         desc: "Kaara's data and analytics services can empower any organization to thrive and distinguish itself from its competitors. We pinpoint use cases that align with your business priorities and develop customized analytics solutions using the appropriate expertise and technologies to meet your specific needs.",
//         link: "/services/design-services",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "Company",
//     link: "/company",
//   },
//   {
//     id: 4,
//     title: "People",
//     link: "/people",
//   },
//   {
//     id: 5,
//     title: "Insights",
//     link: "#",
//     subMenus: [
//       {
//         id: 501,
//         title: "Case Studies",
//         desc: "Lorem ipsum dolor sit amet consectetur. Ligula sit orci sed elit facilisis a amet in quam facilisi sit varius.",
//         link: "/insights/case-studies",
//       },
//       {
//         id: 502,
//         title: "Blog",
//         desc: "Lorem ipsum dolor sit amet consectetur. Ligula sit orci sed elit facilisis a amet in quam facilisi sit varius.",
//         link: "#",
//       },
//     ],
//   },
// ];

// const siteMenuData = { siteMenu };

// export default siteMenuData;

import { ComponentType } from "react";
import CloudAndInfraIcon from "../../public/images/icons/cloud-and-Infra.svg";
import DataAndAnalyticsIcon from "../../public/images/icons/data-and-analytics.svg";
import CustomDevelopmentIcon from "../../public/images/icons/custom-development.svg";
import AIAndAutomationIcon from "../../public/images/icons/aI-and-automation.svg";
import DesignServicesIcon from "../../public/images/icons/design-services.svg";
import MenuSlider from "../../public/images/menu_slider/dummy.jpg";

// Define Slider type
interface slider {
  id: number;
  title: string;
  desc: string;
  img: string;
}
// Define SubMenu type with `icon` as an optional React component
interface SubMenu {
  id: number;
  title: string;
  icon?: string; // Icon is a React component
  desc: string;
  link: string;
}

// Define MenuItem type for the main menu items
interface MenuItem {
  id: number;
  title: string;
  link: string;
  width?: string;
  subMenus?: SubMenu[]; // Optional array of subMenu items
  slider?: slider[]; // Optional array of subMenu items
}

// Now define `siteMenu` with this structure
const siteMenu: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
    width: "full",
    subMenus: [
      {
        id: 201,
        title: "Cloud and Infra",
        icon: CloudAndInfraIcon,
        desc: "Our Cloud services help enterprises achieve their Digital Transformation goals and serve their stakeholders better with our Cloud Advisory Services and decrease their operational expenses, improve productivity, and quicker time-to-market and achieve seamless Business Continuity",
        link: "/services/cloud-and-infra",
      },
      {
        id: 202,
        title: "Data and Analytics",
        icon: DataAndAnalyticsIcon,
        desc: "Kaara's data and analytics services can empower any organization to thrive and distinguish itself from its competitors...",
        link: "/services/data-and-analytics",
      },
      {
        id: 203,
        title: "Custom Development",
        icon: CustomDevelopmentIcon,
        desc: "We create bespoke solutions tailored to your unique requirements...",
        link: "/services/custom-development",
      },
      {
        id: 204,
        title: "AI and Automation",
        icon: AIAndAutomationIcon,
        desc: "We specialize in delivering cutting-edge AI solutions that transform businesses...",
        link: "/services/ai-and-automation",
      },
      {
        id: 205,
        title: "Design Services",
        icon: DesignServicesIcon,
        desc: "Kaara's design services can empower any organization to thrive...",
        link: "/services/design-services",
      },
    ],
    slider: [
      {
        id: 1,
        title: "slider",
        desc: "At Kaara, we help you take the next bold step to transform the way you approach operations, technology, strategy, & innovation and drive success.",
        img: MenuSlider.src,
      },
      {
        id: 2,
        title: "slider",
        desc: "At Kaara, we help you take the next bold step to transform the way you approach operations, technology, strategy, & innovation and drive success.",
        img: MenuSlider.src,
      },
      {
        id: 3,
        title: "slider",
        desc: "At Kaara, we help you take the next bold step to transform the way you approach operations, technology, strategy, & innovation and drive success.",
        img: MenuSlider.src,
      },
    ],
  },
  {
    id: 3,
    title: "Company",
    link: "/company",
  },
  {
    id: 4,
    title: "People",
    link: "/people",
  },
  {
    id: 5,
    title: "Insights",
    link: "#",
    subMenus: [
      {
        id: 501,
        title: "Case Studies",
        desc: "Lorem ipsum dolor sit amet consectetur. Ligula sit orci sed elit facilisis a amet in quam facilisi sit varius.",
        link: "/insights/case-studies",
      },
      {
        id: 502,
        title: "Blog",
        desc: "Lorem ipsum dolor sit amet consectetur. Ligula sit orci sed elit facilisis a amet in quam facilisi sit varius.",
        link: "#",
      },
    ],
  },
];

// Wrap `siteMenu` in an object for export
const siteMenuData: { siteMenu: MenuItem[] } = { siteMenu };

export default siteMenuData;
