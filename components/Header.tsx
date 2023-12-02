"use client";

import { activeSectionContext } from "@/context/activeSection";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Header = () => {
  const se = useContext(activeSectionContext);
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (inView) {
      se?.setSectionInView("Home");
    }
  }, [inView, se]);

  return (
    <div id="home" ref={ref} className="flex justify-center relative w-full">
      <div className="h-96 w-full filter blur-3xl opacity-50 -z-40 absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "></div>
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full z-50 sm:w-[550px] bg-slate-50 dark:bg-gray-900 fixed sm:h-12 sm:rounded-full sm:mt-8 px-6 bg-opacity-80 backdrop-blur-lg shadow-md"
      >
        <ul className="flex justify-center sm:justify-between items-center h-full flex-wrap">
          {links.map((link) => (
            <motion.li
              key={link.name}
              className={`text-gray-500 p-2 hover:text-gray-950 dark:hover:text-white cursor-pointer transition-all relative font-semibold text-sm
              ${
                se?.sectionInView === link.name &&
                "text-gray-950 dark:text-white"
              }
              `}
            >
              <Link href={link.hash}>{link.name}</Link>
              {link.name === se?.sectionInView && (
                <motion.span
                  className="bg-gray-200 dark:bg-gray-700 rounded-full absolute inset-0 -z-10 "
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )}
            </motion.li>
          ))}
        </ul>
      </motion.header>
    </div>
  );
};

export default Header;
