"use client";

import React, { useEffect, useContext } from "react";
import SectionTitle from "./SectionTitle";
import { activeSectionContext } from "@/context/activeSection";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const About = () => {
  const se = useContext(activeSectionContext);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.7,
  });
  useEffect(() => {
    if (inView) {
      se?.setSectionInView("About");
    }
  }, [inView, se]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      ref={ref}
      id="about"
      className="text-center flex flex-col items-center dark:text-gray-50"
    >
      <SectionTitle>About me</SectionTitle>
      <p className="mb-5 leading-8 text-center max-w-[800px] px-3 text-sm sm:text-base">
        After graduating with a degree in{" "}
        <span className="font-semibold">Civil Engineering</span>, I decided to
        pursue my passion for programming. I enrolled in a coding bootCamp and
        learned <span className="font-semibold">front-end web development</span>
        . My favorite part of programming is the problem-solving aspect. I love
        the feeling of finally figuring out a solution to a problem. My core
        stack is <span className="font-semibold">React, Next.js.</span> I am
        also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-semibold">full-time position</span> as a front-end
        developer.
      </p>
      <p className="leading-8 text-center max-w-[800px] px-3 text-sm sm:text-base">
        When I{"'"}m not coding, I enjoy playing video games, watching movies,
        and playing with my dog. I also enjoy{" "}
        <span className="font-semibold">learning new things.</span> I am
        currently learning about back-end and database.
      </p>
    </motion.div>
  );
};

export default About;
