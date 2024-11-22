import Link from "next/link";
import { motion } from "framer-motion";

export default function LinkButtonAnimation() {
  return (
    <div>
      {/* Use motion.a instead of motion.Link */}
      <Link href="#" passHref legacyBehavior>
        {/* Wrapping Link inside motion.a for animation */}
        <motion.a className="bg-primary-500 text-white px-6 py-3 inline-block rounded-md border-[1px] border-primary-500  transition-all duration100 ease-in-out hover:bg-white/5 hover:text-primary-500 hover:px-8 ">
          Link
        </motion.a>
      </Link>
    </div>
  );
}
