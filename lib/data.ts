import React from "react";
import exercise from "../public/exercise.jpg";
import facebooky from "../public/facebooky.jpg";
import todoapp from "../public/todoapp.jpg";
import eCommerce from "../public/eCommerce.jpg";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "DnD To Do App",
    description:
      "A simple to-do app working with drag and drop and local storage with fetch new quote every time open the app",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: todoapp,
  },
  {
    title: "Concrete Exercises",
    description:
      "Fitness Exercises App with functionality to choose exercise categories and specific muscle groups with pagination and every exercise details with videos ",
    tags: ["React", "Tailwind", "Redux", "MUI"],
    imageUrl: exercise,
  },
  {
    title: "Facebooky",
    description:
      "A modern social app with a stunning UI with a native mobile feel, and amazing performance using React JS, Appwrite, and React Query.",
    tags: ["React", "Appwrite", "React Query", "Tailwind",],
    imageUrl: facebooky,
  },
  {
    title: "Concrete Store",
    description:
      "eCommerce App with functionality to choose products categories and sort them with infinite scroll and every product details page and more",
    tags: ["React", "Tailwind", "Redux"],
    imageUrl: eCommerce,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "BootStrap",
  "Redux",
  "Framer Motion",
  "React Query",
] as const;