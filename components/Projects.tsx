"use client"

import React, { useRef, useEffect, useContext} from 'react'
import SectionTitle from './SectionTitle'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import Project from './Project'
import { activeSectionContext } from '@/context/activeSection'
import { useInView } from 'react-intersection-observer'


const Projects = () => {
  const se = useContext(activeSectionContext);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      se?.setSectionInView("Projects")
    }
  
    
  }, [inView, se])
  return (
    <div id='projects' ref={ref} className="text-center">
      <SectionTitle>
        My Projects
      </SectionTitle>
      <div className="projects flex flex-col items-center ">
        {projectsData.map((project) => (
          <Project project={project} key={project.title}/>
        ))}
      </div>
    </div>
  )
}

export default Projects