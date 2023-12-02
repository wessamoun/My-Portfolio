"use client";

import Image from "next/image";
import React, {useEffect, useContext} from "react";
import myImage from "@/public/IMG_2012s.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { LuArrowDownToLine } from "react-icons/lu";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { activeSectionContext } from "@/context/activeSection";

const Intro = () => {
  const se = useContext(activeSectionContext);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0
  });
  useEffect(() => {
    
    
    if (inView) {
      se?.setSectionInView("Home")
    }
  
    
  }, [inView, se,ref])
  
  return (
    <motion.div
    
    
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-center flex-col items-center gap-5 mt-36 mb-24"
    >
      <div  className="img relative">
        <Image
          src={myImage}
          alt="myImage"
          className="w-28 rounded-full border-4 border-white"
        ></Image>
        <div className="absolute text-4xl bottom-1 right-1">👋</div>
      </div>
      <div className="text max-w-[800px] text-center text-2xl px-2 sm:text-4xl leading-relaxed font-medium dark:text-white">
        <span className="font-bold">{"Hello, I'm Wessam. "}</span> {"I'm a"}{" "}
        <span  ref={ref} className="font-bold">FrontEnd Developer. </span> I enjoy building{" "}
        <span className="italic">sites & apps.</span> My focus is{" "}
        <span className="underline">React (Next.js).</span>
      </div>
      <div className="buttons flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link
          href={"#contact"}
          className="group flex justify-center items-center gap-2 bg-gray-950 px-5 py-3 rounded-full text-white dark:border-none"
        >
          <div>Contact me here</div>
          <div className="text-gray-500 transition-all group-hover:translate-x-1">
            <FaLongArrowAltRight />
          </div>
        </Link>
        <a
          href={"/cv.pdf"}
          download
          className="group flex justify-center items-center gap-2 bg-white px-5 py-3 rounded-full border border-3 border-gray-900 dark:border-none dark:bg-slate-300/30  "
        >
          <div className="dark:text-white">Download CV </div>
          <div className="text-gray-500 dark:text-white group-hover:translate-y-1 transition-all">
            <LuArrowDownToLine />
          </div>
        </a>
        <div className="flex gap-3">

        <a
          href={"https://github.com/wessamoun"}
          target="_blank"
          className="group flex justify-center items-center gap-2 bg-white p-3 rounded-full border border-3 border-gray-900 dark:border-none dark:bg-slate-300/30"
          >
          <div className="text-gray-950 dark:text-white text-2xl group-hover:scale-105 transition-all">
            <FaGithubSquare />
          </div>
        </a>
        <a
          href={"https://www.linkedin.com/in/wessamoun/"}
          target="_blank"
          className="group flex justify-center items-center gap-2 bg-white p-3 rounded-full border border-3 border-gray-900 dark:border-none dark:bg-slate-300/30"
          >
          <div className="text-gray-950 dark:text-white text-2xl group-hover:scale-105 transition-all">
            <FaLinkedin />
          </div>
        </a>
          </div>
      </div>
    </motion.div>
  );
};

export default Intro;
