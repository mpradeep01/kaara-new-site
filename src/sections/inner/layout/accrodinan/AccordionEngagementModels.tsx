import React, { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

interface EngagementModelsProps {
  id: number;
  title: string;
  desc: string[];
  isItemInView: boolean;
}

const AccordionEngagementModels = forwardRef<
  HTMLDivElement,
  EngagementModelsProps
>(({ id, title, desc, isItemInView }, ref) => {
  return (
    <div>
      <div>
        <div className="mb-3 flex items-end gap-1.5">
          <p className="mb-1.5">0{id + 1}/</p>
          <h3 className="h3-title font-extralight leading-none">{title}</h3>
        </div>
      </div>

      {/* Collapsible Section */}
      <motion.div
        ref={ref}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isItemInView ? "auto" : 0,
          opacity: isItemInView ? 1 : 0,
        }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="!overflow-hidden"
      >
        <div className="flex items-center gap-14 overflow-hidden py-5 xs:flex-col md-sm:flex-row">
          <ul className="ml-9">
            {desc.map((item, key) => (
              <li key={key} className="text-lg py-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
});

export default AccordionEngagementModels;
