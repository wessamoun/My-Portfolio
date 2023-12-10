"use client"


import {motion, useScroll, useTransform} from "framer-motion"
import Image from 'next/image'
import React, { useRef, useEffect, useContext} from 'react'
import { projectsData } from '@/lib/data'
import { activeSectionContext } from "@/context/activeSection"
import { useInView } from "react-intersection-observer"


interface ProjectProps {
  project: typeof projectsData[number]
}

const Project:React.FC<ProjectProps> = ({project}) => {
  const ref2 = useRef(null)
  const se = useContext(activeSectionContext);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.7,
  });
  useEffect(() => {
    if (inView) {
      se?.setSectionInView("Projects")
    }
  
    
  }, [inView, se])
const { scrollYProgress } = useScroll({
  target: ref2,
  offset: ["start end", "end end"]
})
const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.a key={project.title} 
    ref={ref2}
    style={{
      scale: scaleProgress,
      opacity: opacityProgress,
    }}
    href={project.link}
    target="_blank"
    className="overflow-hidden cursor-pointer flex even:flex-row-reverse bg-gray-100 mb-8 gap-3 border border-1 border-gray-300 rounded-3xl max-w-[600px] group hover:bg-gray-200 transition-all mx-3 dark:bg-[#292f3c] dark:hover:bg-gray-800 dark:border-none">
      <div ref={ref} className="text p-5 text-left sm:basis-1/2">
        <div className="title font-bold text-2xl mb-2 dark:text-gray-50">{project.title}</div>
        <div className="description text-gray-500 dark:text-gray-400 mb-8">{project.description}</div>
        <div className="tags flex gap-3 flex-wrap">{project.tags.map((tag) => (
          <div className="tag py-2 px-3 rounded-full bg-[#484849] dark:bg-[#0c0e12] text-white text-xs uppercase" key={tag}>{tag}</div>
        ))}</div>
      </div>
      <div className="img hidden sm:block basis-1/2 relative ">
        <div className="w-[600px] top-10 even:left-0 absolute">
        <Image src={project.imageUrl} alt={project.title} 
        width={1000}
        className=' absolute group-even:right-[330px] 
        group-even:group-hover:rotate-2 rounded-lg group-hover:scale-105  
        transition-all group-hover:-rotate-2'/>
        </div>
      </div>
    </motion.a>
  )
}

export default Project