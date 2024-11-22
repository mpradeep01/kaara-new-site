// components/ParallaxCard.tsx
import { motion } from "framer-motion";

interface ParallaxCardProps {
  title: string;
  description: string;
  image: string;
}

const ParallaxCard: React.FC<ParallaxCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <motion.div
      className="relative h-[400px] bg-gray-100 rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} // Trigger animation earlier on scroll
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </motion.div>
  );
};

export default ParallaxCard;
