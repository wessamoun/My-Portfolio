"use client"

import React, { useContext, useEffect } from 'react'
import SectionTitle from './SectionTitle'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { useInView } from 'react-intersection-observer';
import { activeSectionContext } from '@/context/activeSection';


const Experience = () => {
  const se = useContext(activeSectionContext);
  const { ref, inView } = useInView({threshold:0.3});

  useEffect(() => {
    if (inView) {
      se?.setSectionInView("Experience")
    }
  
    
  }, [inView, se])
  return (
    <div id="experience" ref={ref} className="ref">
      <SectionTitle>
        <div className="text-center">
        My Experience
        </div>
      </SectionTitle>
      <VerticalTimeline>

  <VerticalTimelineElement
    visible={inView}
    className="vertical-timeline-element--work"
    textClassName={"!bg-gray-100 dark:!bg-slate-500/30"}

    contentArrowStyle={{ borderRight: '7px solid  #dddddd' }}
    date="2021"
    dateClassName={"text-black dark:text-gray-50"}
    iconClassName='bg-white dark:!bg-slate-800 dark:text-white'
    icon={<LuGraduationCap />}
  >
    <h3 className="vertical-timeline-element-title dark:text-gray-50">Graduated</h3>
    <p className='text-gray-500 dark:text-gray-400'>
      I graduated with a degree in Civil Engineering, I decided to pursue my passion for programming. I enrolled in Egypt Future Work is Digital Scholarship
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
  visible={inView}
    className="vertical-timeline-element--work"
    textClassName={"!bg-gray-100 dark:!bg-slate-500/30"}

    contentArrowStyle={{ borderRight: '7px solid  #dddddd' }}
    date="2022"
    dateClassName={"text-black dark:text-gray-50"}
    icon={<CgWorkAlt />}
    iconClassName='bg-white dark:!bg-slate-800 dark:text-white'
  >
    <h3 className="vertical-timeline-element-title dark:text-gray-50">Udacity</h3>
    
    <p className='text-gray-500 dark:text-gray-400'>
      I graduated from Advanced Full-Stack Web Development NanoDegree with Udacity
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
  visible={inView}
    className="vertical-timeline-element--work"
    textClassName={"!bg-gray-100 dark:!bg-slate-500/30"}

    contentArrowStyle={{ borderRight: '7px solid  #dddddd' }}
    date="2023 - present"
    dateClassName={"text-black dark:text-gray-50"}
    iconClassName='bg-white dark:!bg-slate-800 dark:text-white'
    icon={<FaReact />}
  >
    <h3 className="vertical-timeline-element-title dark:text-gray-50">Front-End Developer</h3>
    
    <p className='text-gray-500 dark:text-gray-400'>
    I am now a front-end developer. My stack includes React, Next.js, TypeScript and Tailwind. I am open to full-time opportunities.
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
    </div>
  )
}

export default Experience