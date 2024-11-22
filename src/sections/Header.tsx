"use client";
import { useState, useEffect, useRef } from "react";
import Logo from "../../public/images/logo.png";
import LogoK from "../../public/images/logok.png";
import Image from "next/image";
import siteMenuData from "@/data/siteMenu";
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";
import { TiArrowMove } from "react-icons/ti";
import { LuChevronDown } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/pagination";
export default function Header() {
  const { siteMenu } = siteMenuData;
  const noHomeMenu = siteMenu.filter((item) => item.id > 1);

  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    handleResize(); // Set initial state

    setIsLoading(false); // Set loading to false after initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (id: number) => {
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const getGridClassName = (length: number) => {
    if (length < 3) return "grid-cols-1";
    if (length < 6) return "grid-cols-2";
    if (length < 9) return "grid-cols-3";
    return "grid-cols-4";
  };

  //////////Mobile menu
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    if (menuOpen) {
      // If the menu is open, close it and clear active submenus
      setMenuOpen(false);
      setActiveSubMenus([]); // Clear active submenus
    } else {
      // If the menu is closed, just open it
      setMenuOpen(true);
    }
  };
  const [activeSubMenus, setActiveSubMenus] = useState<number[]>([]);
  const toggleSubMenu = (id: number) => {
    setActiveSubMenus((prev) =>
      prev.includes(id) ? prev.filter((subId) => subId !== id) : [...prev, id]
    );
  };
  ///////////Header Animation
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsAtTop(false); // Move to top-0
      } else {
        setIsAtTop(true); // Stay at top-10
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);
  ///
  //const swiperRef = useRef(null);
  const swiperRef = useRef<SwiperCore | null>(null); // Initialize ref with SwiperCore type

  SwiperCore.use([Pagination]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    console.log(`Active slide index is: ${activeIndex}`);
  }, [activeIndex]);

  return (
    <motion.div
      className={`fixed w-full z-50 transition-all duration-700 ${
        isAtTop ? "top-10" : "top-0"
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }} // Keeps the header fixed without animating vertically
      transition={{ type: "spring", stiffness: 10, damping: 15 }}

      // className={`fixed w-full z-50 transition-all duration-100 ${
      //   lastScrollY > 100 ? "top-0" : "top-10"
      // }`}
      // initial={{ y: 0 }}
      // animate={{ y: showHeader ? 0 : -100 }}
      // transition={{ type: "spring", stiffness: 70, damping: 15 }} // Smooth spring transition
    >
      <div className="bg-white bg-[repeating-linear-gradient(90deg,_rgba(204,204,204,0.4)_0,_rgba(204,204,204,0.4)_1px,_transparent_0,_transparent_50%),_repeating-linear-gradient(0deg,_rgba(204,204,204,0.4)_0,_rgba(204,204,204,0.4)_1px,_transparent_0,_transparent_50%)] bg-[length:8px_8px]">
        {isLoading ? (
          <div className="w-full max-w-[1340px] mx-auto bg-white flex items-center py-2 px-2 relative animate-pulse "></div>
        ) : (
          <div className="w-full max-w-[1340px] mx-auto bg-white flex items-center py-2 px-2 relative">
            <div data-section="logo" className="min-w-20">
              <motion.div
                initial={{ y: -20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <Link href={"/"}>
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isAtTop ? 1 : 0 }}
                    transition={{ duration: 0.3 }} // Smooth transition for hiding the first logo
                    style={{ position: "absolute", top: 10, left: 4 }} // Ensures consistent positioning
                  >
                    <Image src={Logo} width="68" alt="Kaara" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isAtTop ? 0 : 1 }}
                    transition={{ duration: 0.3 }} // Smooth transition for showing the second logo
                    style={{ position: "absolute", top: 10, left: 4 }} // Ensures consistent positioning
                  >
                    <Image src={LogoK} width="18" alt="Kaara" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            <div data-section="menu" className="flex-1 flex justify-end">
              {isMobile ? (
                <div className="group rounded-full">
                  <div
                    className="rounded-full p-1 bg-white group-hover:bg-primary-500 transition-all duration-300 cursor-pointer"
                    onClick={toggleMenu}
                  >
                    {menuOpen ? (
                      <IoMdClose className="text-xl text-black group-hover:text-white transition-all duration-300" />
                    ) : (
                      <MdOutlineMenu className="text-xl text-black group-hover:text-white transition-all duration-300" />
                    )}
                  </div>
                </div>
              ) : (
                <ul className="flex items-center gap-3">
                  {noHomeMenu.map((menu) => (
                    <motion.li
                      key={menu.id}
                      initial={{ y: -20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: menu.id * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link href={menu.link} passHref legacyBehavior>
                        <a
                          className="p-1 flex items-center text-gray-700 hover:text-primary-500 transition-all duration-300"
                          onMouseEnter={() => handleMouseEnter(menu.id)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {menu.title}
                          {menu.subMenus && (
                            <LuChevronDown className="ml-0.5 text-[12px] mt-1" />
                          )}
                        </a>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
            {noHomeMenu.map(
              (menu) =>
                activeMenu === menu.id &&
                menu.subMenus && (
                  <div
                    className="absolute top-10 right-0 z-50 bg-white shadow-2xl p-10 rounded-sm max-w-full w-auto flex gap-10"
                    onMouseEnter={() => handleMouseEnter(menu.id)}
                    onMouseLeave={handleMouseLeave}
                    key={menu.id}
                  >
                    <div className="flex-1">
                      <div
                        className={`grid gap-4 ${getGridClassName(
                          menu.subMenus.length
                        )}`}
                      >
                        {menu.subMenus.map((subMenu) => (
                          <Link
                            key={subMenu.id}
                            href={subMenu.link}
                            passHref
                            legacyBehavior
                          >
                            <a
                              className="text-gray-700 mb-2 hover:bg-primary-50 hover:bg-opacity-15 p-3 flex gap-2 max-w-[380px]"
                              onClick={() => setActiveMenu(null)} // Close the dropdown
                            >
                              <div className="min-w-[24px] h-[24px] mt-0.5">
                                {subMenu.icon ? (
                                  <Image
                                    src={subMenu.icon}
                                    width={24}
                                    height={24}
                                    alt=""
                                    className="object-cover"
                                  />
                                ) : (
                                  <TiArrowMove className="text-[20px]" />
                                )}
                              </div>
                              <div>
                                <h3 className="font-medium text-[16px] mb-1">
                                  {subMenu.title}
                                </h3>
                                <p className="text-sm font-light line-clamp-2">
                                  {subMenu.desc}
                                </p>
                              </div>
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                    {menu.slider ? (
                      <div className=" w-[280px] h-72 px-[15px] py-5 border-[1px] border-gray-200">
                        <Swiper
                          modules={[Autoplay]}
                          autoplay={{
                            delay: 7000,
                            disableOnInteraction: false,
                          }}
                          onSwiper={(swiper) => (swiperRef.current = swiper)} // Assign Swiper instance to ref
                          onSlideChange={(swiper) =>
                            setActiveIndex(swiper.activeIndex)
                          } // Track active slide
                        >
                          {menu.slider.map((item, key) => (
                            <SwiperSlide key={key}>
                              <div className="flex flex-col gap-4">
                                <div>
                                  <Image
                                    src={item.img}
                                    width={250}
                                    height={130}
                                    alt={item.title}
                                  />
                                </div>
                                <div className="text-xs leading-5">
                                  {item.desc}
                                  {key}
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <div className="flex justify-center mt-4">
                          {menu.slider.map((_, index) => (
                            <span
                              key={index}
                              className={`custom-bullet inline-flex items-center justify-center w-6 h-1 rounded-full mx-1 cursor-pointer ${
                                index === activeIndex
                                  ? "bg-primary-500"
                                  : "bg-gray-400"
                              }`}
                              onClick={() => {
                                setActiveIndex(index);
                                swiperRef.current?.slideTo(index); // Move the Swiper to the clicked bullet's slide
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                )
            )}
          </div>
        )}
      </div>
      {/* MobileMenu */}
      {menuOpen && (
        <div className="absolute z-50 w-full bg-white">
          <div className="p-10 flex flex-col gap-2">
            <ul>
              {noHomeMenu.map((menu) => (
                <li key={menu.id}>
                  <div className="flex justify-between items-center">
                    <Link href={menu.link} passHref legacyBehavior>
                      <a
                        className="p-1 flex items-center text-gray-700 hover:text-primary-500 transition-all duration-300"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default link behavior
                          if (menu.subMenus) {
                            toggleSubMenu(menu.id); // Handle submenu toggle
                          } else {
                            setMenuOpen(!menuOpen); // Toggle the main menu for items without submenus
                            // Optionally navigate to the link
                            window.location.href = menu.link; // Redirect if necessary
                          }
                        }}
                      >
                        {menu.title}
                        {menu.subMenus && (
                          <LuChevronDown className="ml-0.5 text-[12px] mt-1" />
                        )}
                      </a>
                    </Link>
                  </div>
                  {menu.subMenus && activeSubMenus.includes(menu.id) && (
                    <ul className="ml-4">
                      {menu.subMenus.map((item) => (
                        <li key={item.id}>
                          <Link href={item.link} passHref legacyBehavior>
                            <a
                              className="p-1 flex items-center text-gray-700 hover:text-primary-500 transition-all duration-300"
                              onClick={() => setMenuOpen(!menuOpen)} // Close the dropdown
                            >
                              {item.title}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {/* MobileMenu end */}
    </motion.div>
  );
}
