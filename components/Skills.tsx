"use client";

import React, { useRef, useEffect, useContext} from "react";
import SectionTitle from "./SectionTitle";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { activeSectionContext } from "@/context/activeSection";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const scrollRef = useRef(null);
  const se = useContext(activeSectionContext);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      se?.setSectionInView("Skills")
    }
  
    
  }, [inView, se])
  return (
    <div id="skills" ref={ref} className="text-center flex justify-center items-center flex-col">
      <SectionTitle>My Skills</SectionTitle>
      <div
        
        className="skills flex justify-center flex-wrap max-w-[800px] gap-3 px-3"
      >
        {skillsData.map((skill, index) => (
          <motion.div
          ref={scrollRef}
        initial={{ opacity: 0,y:50 }}
        whileInView={{ opacity: 1,y:0 }}
        transition={{
          type:"spring",
          delay: .05 * index
        }}
            key={skill}
            className="skill flex items-center justify-center bg-white dark:bg-slate-500/30 dark:border-none dark:text-gray-50 text-gray-950 border  py-2 px-4 rounded-lg sm:text-lg"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
