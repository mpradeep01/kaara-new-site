// components/AccordionSection.tsx
import { motion } from "framer-motion";

interface AccordionSectionProps {
  isActive: boolean;
  title: string;
  content: string;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  isActive,
  title,
  content,
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
    {isActive && <p className="mt-4 text-gray-700">{content}</p>}
  </motion.div>
);

export default AccordionSection;
