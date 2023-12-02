"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { activeSectionContext } from "@/context/activeSection";
import { useInView } from "react-intersection-observer";

const serviceId: string = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID as string;
const templateId: string = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID as string;
const publicKey: string = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY as string;

const Contact = () => {
  const [pending, setPending] = useState(false);
  const [state, setState] = useState("");

  const se = useContext(activeSectionContext);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      se?.setSectionInView("Contact")
    }
  
    
  }, [inView, se])

  const scrollRef = useRef(null);
  const form = useRef<any>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPending(true);
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        setPending(false);
        setState("done")
        form.current.reset()
        
      },
      (error) => {
        console.log(error.text);
        setState("error")
      }
    );
  };

  return (
    <div id="contact" >

    <motion.div
      ref={scrollRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "linear",
        
        duration:1
      }}
      className="flex flex-col justify-center items-center"
      >
      <SectionTitle>
        <div className="text-center">Contact Me</div>
      </SectionTitle>
      <div className="text-center mb-5 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
        Please contact me directly at{" "}
        <a className="underline " href="mailto:wessamoun.info@gmail.com">
          wessamoun.info@gmail.com
        </a>{" "}
        or through this form.
      </div>
      <form
        ref={form}
        id="form"
        onSubmit={(e) => sendEmail(e)}
        className="max-w-[800px] px-3 flex flex-col items-start justify-center gap-5 w-full"
        >
        <input 
          type="email"
          id="email"
          placeholder="Your Email"
          className=" w-full p-3 rounded-lg border outline-none dark:bg-slate-500/30 dark:text-gray-50 dark:border-none"
          name="from_email"
          required
          />
        <textarea
          className="p-3 rounded-lg border outline-none h-36 w-full dark:bg-slate-500/30 dark:text-gray-50 dark:border-none"
          placeholder="Your Message"
          id="message"
          name="message"
          required
          ></textarea>
        <div className="flex justify-between flex-row-reverse w-full items-center">
        <div className="text-gray-700 text-sm sm:text-base dark:text-gray-400">{state === "done" ? "Email has been sent successfully" : state === "error" && "There are an error, please try again"}</div>
        <button ref={ref}
          disabled={pending}
          type="submit"
          className="group flex justify-center items-center gap-2 bg-gray-950 px-5 py-3 rounded-full text-white"
          >
          {pending ? (
            <div className="w-5 h-5 rounded-full border border-r-1 border-r-gray-500 animate-spin"></div>
            ) : (
              <>
              <div>Submit</div>
              <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition">
                <FaPaperPlane />
              </div>
            </>
          )}
        </button>
          </div>
      </form>
    </motion.div>
          </div>
  );
};

export default Contact;
