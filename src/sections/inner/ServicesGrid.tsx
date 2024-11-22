"use client";
import Center from "@/components/Center";
import Section from "@/components/Section";
import { motion } from "framer-motion";
interface fulldata {
  title: string;
  desc: string;
}

interface Props {
  data: fulldata[];
}
export default function ServicesGrid({ data }: Props) {
  return (
    <Section>
      <Center>
        <div className="grid xs:grid-cols-1 md:grid-cols-2 xs:gap-20">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="xs:px-0 sm:p-5"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 3, delay: index * 0.5 }}
              viewport={{ once: false, amount: 0.5 }} // Ensures animation triggers once when 50% of the element is in view
            >
              <p className="font-light text-[32px] text-primary-500">
                0{index + 1}/
              </p>
              <h4 className="font-bold text-[32px] mb-8">{item.title}</h4>
              <p className="text-[14px] leading-loose">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Center>
    </Section>
  );
}
