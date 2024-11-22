"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdOutlineMenu } from "react-icons/md";

type SubMenu = {
  id: number;
  title: string;
  desc: string;
  link: string;
};

type Menu = {
  id: number;
  title: string;
  link: string;
  subMenus?: SubMenu[];
};

type MegaMenuProps = {
  menuList: Menu[];
};

export default function MegaMenu({ menuList }: MegaMenuProps) {
  ////////////////////////////
  const [isMobile, setIsMobile] = useState(false);

  // Track window width to switch between mobile/desktop view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    handleResize(); // Set initial state

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  ////////////////////////////

  return (
    <div>
      <div className="flex items-center relative">
        {isMobile ? (
          <div className="group rounded-full">
            <div className="rounded-full p-1 bg-white group-hover:bg-primary-500 transition-all duration-300 cursor-pointer">
              <MdOutlineMenu className="text-xl text-black group-hover:text-white transition-all duration-300" />
            </div>
          </div>
        ) : (
          <ul className="flex items-center gap-3">
            {menuList.map((menu) => (
              <li key={menu.id}>
                <Link href={menu.link} passHref legacyBehavior>
                  <a className="p-2">{menu.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="relative">
        {/* /////////////////////////////////////////////////////// */}
        {isMobile ? (
          <div className="bg-primary-500 absolute top-full left-0 w-full h-screen z-50">
            afasdfsd
          </div>
        ) : (
          <div></div>
        )}

        {/* /////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}

// "use client";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { LuChevronDown } from "react-icons/lu";

// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import Link from "next/link";
// import { TiArrowMove } from "react-icons/ti";

// type SubMenu = {
//   id: number;
//   title: string;
//   desc: string;
//   link: string;
// };

// type Menu = {
//   id: number;
//   title: string;
//   link: string;
//   subMenus?: SubMenu[];
// };

// type MegaMenuProps = {
//   menuList: Menu[];
// };

// const menuVariants = {
//   open: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.3,
//       ease: "easeInOut",
//     },
//   },
//   closed: {
//     opacity: 0,
//     x: "100%",
//     transition: {
//       duration: 0.3,
//       ease: "easeInOut",
//     },
//   },
// };

// const MegaMenu: React.FC<MegaMenuProps> = ({ menuList }) => {
//   const [activeMenu, setActiveMenu] = useState<number | null>(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMouseEnter = (id: number) => {
//     setActiveMenu(id);
//   };

//   const handleMouseLeave = () => {
//     setActiveMenu(null);
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="relative">
//       {/* Mobile Hamburger Icon - Only visible under 640px */}
//       <div className="flex justify-end">
//         <button
//           className="block sm:hidden"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? (
//             <AiOutlineClose className="h-6 w-6 text-primary-500" />
//           ) : (
//             <AiOutlineMenu className="h-6 w-6 text-gray-700" />
//           )}
//         </button>
//       </div>

//       {/* Desktop Menu - Only visible 640px and above */}
//       <ul className="hidden sm:flex space-x-6">
//         {menuList.map((menu) => (
//           <li
//             key={menu.id}
//             onMouseEnter={() => handleMouseEnter(menu.id)}
//             onMouseLeave={handleMouseLeave}
//             className={`relative ${
//               activeMenu === menu.id ? "text-primary-500" : "text-gray-700"
//             } hover:text-primary-500`}
//           >
//             <Link href={menu.link} passHref legacyBehavior>
//               <a className="flex items-center">
//                 {menu.title}
//                 {menu.subMenus && (
//                   <LuChevronDown className="ml-0.5 text-[12px] mt-1" />
//                 )}
//               </a>
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* Submenu outside of individual li elements */}
//       <AnimatePresence>
//         {menuList.map(
//           (menu) =>
//             activeMenu === menu.id &&
//             menu.subMenus && (
//               <motion.div
//                 key={menu.id}
//                 className="absolute right-0 top-[100%] w-[1170px] max-w[100%] bg-white shadow-lg p-8 rounded-lg z-50"
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{
//                   duration: 0.6,
//                   exit: { duration: 0.4 },
//                 }}
//                 onMouseEnter={() => handleMouseEnter(menu.id)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <div className="grid grid-cols-[3fr_1fr] gap-10">
//                   <div className="grid grid-cols-2 gap-1 items-start">
//                     {menu.subMenus.map((subMenu) => (
//                       <Link
//                         key={subMenu.id}
//                         href={subMenu.link}
//                         onClick={() => setActiveMenu(null)}
//                         passHref
//                         legacyBehavior
//                       >
//                         <a className="text-gray-700 mb-2 hover:bg-primary-50 hover:bg-opacity-15 p-3 flex gap-2">
//                           <div>
//                             <TiArrowMove className="text-[20px] mt-1" />
//                           </div>
//                           <div>
//                             <h3 className="font-medium text-[16px] mb-1">
//                               {subMenu.title}
//                             </h3>
//                             <p className="text-sm font-light">{subMenu.desc}</p>
//                           </div>
//                         </a>
//                       </Link>
//                     ))}
//                   </div>
//                   <div className="bg-primary-50 bg-opacity-5 flex justify-center items-center w-64 h-72">
//                     slider
//                   </div>
//                 </div>
//               </motion.div>
//             )
//         )}
//       </AnimatePresence>

//       {/* Mobile Menu with Animation */}
//       <motion.div
//         className="
//          fixed top-0 right-0 w-full h-full bg-themebg-900 text-white flex flex-col items-center justify-center bg-white bg-opacity-90
//          z-50 transform shadow-lg
//        "
//         initial="closed"
//         animate={menuOpen ? "open" : "closed"}
//         variants={menuVariants}
//       >
//         <ul className="flex flex-col space-y-4 px-8 py-4">
//           {menuList.map((menu) => (
//             <li key={menu.id}>
//               <Link href={menu.link} passHref legacyBehavior>
//                 <a className="text-gray-700 hover:text-blue-500 block py-2 flex items-center">
//                   {menu.title}
//                   {menu.subMenus && <LuChevronDown className="ml-2 h-5 w-5" />}
//                 </a>
//               </Link>
//               {menu.subMenus && (
//                 <ul className="pl-4">
//                   {menu.subMenus.map((subMenu) => (
//                     <li key={subMenu.id}>
//                       <Link href={subMenu.link} passHref legacyBehavior>
//                         <a className="block text-gray-700 mb-2 hover:text-blue-500">
//                           <h3 className="font-semibold">{subMenu.title}</h3>
//                         </a>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//     </nav>
//   );
// };

// export default MegaMenu;
