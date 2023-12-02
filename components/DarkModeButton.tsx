"use client";

import React, { useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";

const DarkModeButton = () => {
  let [dark, setDark] = useState("light")
  
  useEffect(() => {
    if (localStorage.getItem("dark") === "light") {
      document.documentElement.classList.replace("dark", "light");
      setDark("light");
    } else if (localStorage.getItem("dark") === "dark") {
      document.documentElement.classList.replace("light", "dark");
      setDark("dark");
    }
  }, []);

  return (
    <div
      className="fixed bottom-3 right-3 border hover:scale-125 transition-all dark:bg-gray-500/30 dark:border-none dark:text-gray-50 cursor-pointer w-9 h-9 rounded-full flex justify-center items-center text-gray-950"
      onClick={() => {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.replace("dark", "light");
          localStorage.setItem("dark", "light");
          setDark("light");
        } else {
          document.documentElement.classList.replace("light", "dark");
          localStorage.setItem("dark", "dark");
          setDark("dark");
        }
      }}
    >
      {dark === "dark" ? <IoSunnyOutline /> : <FaMoon />}
      
    </div>
  );
};

export default DarkModeButton;
