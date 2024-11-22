// components/ScrollAccordion.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface AccordionItemProps {
  id: number;
  isActive: boolean;
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  isActive,
  title,
  content,
}) => (
  <motion.div
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="font-bold text-lg">{title}</h3>
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="p-2">{content}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

interface ScrollAccordionProps {
  items: { title: string; content: string }[];
}

const ScrollAccordion: React.FC<ScrollAccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const sectionHeight = document.body.scrollHeight / items.length;

    // Determine which accordion item should be active based on scroll
    const index = Math.min(
      Math.floor(scrollPosition / sectionHeight),
      items.length - 1
    );
    setActiveIndex(index);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={index}
          isActive={index === activeIndex}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default ScrollAccordion;
