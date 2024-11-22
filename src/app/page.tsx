import EngagementModels from "@/sections/home/EngagementModels";
import HomeBanner from "@/sections/home/HomeBanner";
import LifeAtKaara from "@/sections/home/LifeAtKaara";
import OurCustomers from "@/sections/home/OurCustomers";
import OurServices from "@/sections/home/OurServices";
import OurStory from "@/sections/home/OurStory";
import Template from "./Template";

export default function Home() {
  return (
    <Template>
      <HomeBanner />
      <OurStory />
      <OurServices />
      <LifeAtKaara />
      <EngagementModels />
      <OurCustomers />
    </Template>
  );
}
