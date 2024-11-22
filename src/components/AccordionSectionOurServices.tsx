// components/AccordionSection.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface AccordionSectionProps {
  isActive: boolean;
  title: string;
  content: string;
  img: string;
}

const AccordionSectionOurServices: React.FC<AccordionSectionProps> = ({
  isActive,
  title,
  content,
  img,
}) => (
  <motion.div
    className=""
    initial={{ height: 60, opacity: 0.8 }}
    animate={{
      height: isActive ? "auto" : 60,
      opacity: isActive ? 1 : 0.8,
    }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    <h3 className="h3-title font-bosch text-primary-500">{title}</h3>
    {isActive && (
      <div>
        <div className="flex items-center gap-14 overflow-hidden py-5 xs:flex-col md-sm:flex-row">
          <div className="w-96 aspect-square">
            <Image
              src={img}
              width="1400"
              height="1400"
              alt={title}
              className="object-cover"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-8 flex-1">
            <p className="xs:text-base md-sm:text-2xl max-w">{content}</p>

            <div>
              <Link href="#" className="bg-primary-500 px-4 py-3 text-white">
                More +
              </Link>
            </div>
          </div>
        </div>
      </div>
    )}
  </motion.div>
);

export default AccordionSectionOurServices;
