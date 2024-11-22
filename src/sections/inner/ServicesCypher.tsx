import Center from "@/components/Center";
import Section from "@/components/Section";
import Image from "next/image";
import CypherImg from "../../../public/images/cypher.jpg";
import Link from "next/link";

export default function ServicesCypher() {
  return (
    <Section className={`xs:items-stretch xs:min-h-0`}>
      <Center className="min-h-full flex-1 relative flex gap-8 xs:flex-col sm:flex-row">
        <div className="xs:w-full sm:w-[840px]">
          <Image src={CypherImg} alt="" />
        </div>
        <div className="flex-1 self-center">
          <div className="sm:absolute -top-24 right-0 bg-white  xs:p-0 sm:p-5 sm:pl-10 ">
            <h3 className="font-bosch xs:text-7xl sm:text-8xl text-primary-500">
              Cypher
            </h3>
            <h4 className="font-extralight xs:text-4xl md:text-5xl xs:mb-5 md:mb-0">
              Your Accelerated Data Analytics Tool
            </h4>
          </div>
          <p className="mb-5 block">
            Our accelerated data analytics tool. CYPHER helps enterprises make
            smarter, faster, and accurate decisions. We understand that to do
            this enterprises need Analytics that are immediate, inclusive and
            provided across platforms. This analytics wizard sets out to
            re-define the role of a business analyst by empowering users with
            the ability to dynamically choose the different processes
            subcategorized into Data and Technique. The wizard also provides a
            platform for Subject Matter Experts to lend their Domain Expertise
            in the form of business-specific templates at every step of the
            workflow.
          </p>
          <Link href={"#"} className="btn inline-block">
            Connect and Learn more about Cypher
          </Link>
        </div>
      </Center>
    </Section>
  );
}
