// import Template from "@/app/Template";
// import Center from "@/components/Center";
// import Section from "@/components/Section";
// import InnerBanner from "@/sections/inner/InnerBanner";
// import CaseStudiesList from "./caseStudiesList";
// export default function CaseStudiesPage() {

//   // Group items by category
//   const groupByCategory = (list) => {
//     return list.reduce((result, item) => {
//       const category = item.category || "Uncategorized";
//       if (!result[category]) {
//         result[category] = [];
//       }
//       result[category].push(item);
//       return result;
//     }, {});
//   };

//   const { caseStudiesList } = CaseStudiesList;
//   const groupedData = groupByCategory(caseStudiesList);

//   return (
//     <Template>
//       <Section className="xs:items-stretch xs:min-h-0 xs:py-0 ">
//         <Center>
//           <InnerBanner
//             page={"Case studies"}
//             pageTitle="Some of Our Work that <span>shines</span>"
//             letUstalk
//           >
//             We work relentlessly to fulfill our clients' technological
//             requirements within the given deadlines, while guiding them towards
//             the correct path to solve their business challenge
//           </InnerBanner>
//         </Center>
//       </Section>
//       <Section>
//         <Center>{caseStudiesList.length}</Center>
//       </Section>
//     </Template>
//   );
// }

import React from "react";
import Template from "@/app/Template";
import Center from "@/components/Center";
import Section from "@/components/Section";
import InnerBanner from "@/sections/inner/InnerBanner";
import CaseStudiesList from "./caseStudiesList";
import InViewTransition from "@/components/animations/InViewTransition";

// Define the type for a case study
interface CaseStudy {
  id: number;
  title: string;
  desc: string;
  img: string;
  category?: string; // Optional since some items may not have a category
}

export default function CaseStudiesPage() {
  // Define the category order and their display names
  const categoryDisplayNames: Record<string, string> = {
    "cloud-and-infra": "Cloud and <span>Infra</span>",
    "data-and-analytics": "Data and <span>Analytics</span>",
    "custom-development": "Custom <span>Development</span>",
    "ai-and-automation": "AI and <span>Automation</span>",
    "design-services": "Design <span>Services</span>",
    Uncategorized: "Uncategorized",
  };

  const categoryOrder = [
    "cloud-and-infra",
    "data-and-analytics",
    "custom-development",
    "ai-and-automation",
    "design-services",
    "Uncategorized",
  ];

  // Group items by category and maintain order
  const groupByCategory = (list: CaseStudy[]) => {
    const groupedData = list.reduce<Record<string, CaseStudy[]>>(
      (result, item) => {
        const category = item.category || "Uncategorized";
        if (!result[category]) {
          result[category] = [];
        }
        result[category].push(item);
        return result;
      },
      {}
    );

    // Return an ordered object based on categoryOrder
    return categoryOrder.reduce<Record<string, CaseStudy[]>>(
      (ordered, category) => {
        if (groupedData[category]) {
          ordered[category] = groupedData[category];
        }
        return ordered;
      },
      {}
    );
  };

  const groupedData = groupByCategory(CaseStudiesList);

  return (
    <Template>
      <Section className="xs:items-stretch xs:min-h-0 xs:py-0">
        <Center>
          <InnerBanner
            page={"Case studies"}
            pageTitle="Some of Our Work that <span>shines</span>"
            letUstalk
          >
            We work relentlessly to fulfill our clients' technological
            requirements within the given deadlines, while guiding them towards
            the correct path to solve their business challenges.
          </InnerBanner>
        </Center>
      </Section>
      <Section>
        <Center>
          {Object.keys(groupedData).map((category) => (
            <div key={category} className="mt-20">
              <InViewTransition direction="top">
                <h3
                  className="h3-title  font-bosch"
                  dangerouslySetInnerHTML={{
                    __html: categoryDisplayNames[category] || category,
                  }}
                ></h3>
              </InViewTransition>
              <div className="grid grid-cols-3 gap-16 mt-8">
                {groupedData[category].map((item, key) => (
                  <div key={key}>
                    <InViewTransition direction="top" delay={key * 0.4}>
                      <div className="mb-8 aspect-video overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <h4 className="font-bold text-3xl">{item.title}</h4>
                        <p className="text-sm">{item.desc}</p>
                      </div>
                    </InViewTransition>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Center>
      </Section>
    </Template>
  );
}
