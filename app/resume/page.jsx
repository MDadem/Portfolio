"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data

const about = {
  title: "About me",
  description:
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo amet optio harum minima nemo suscipit magnam quaerat, a ipsa dignissimos consequatur iusto quo vero commodi porro dolores voluptates, adipisci accusantium?",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Adem Miladi",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+216) 58860163",
    },
    {
      fieldName: "Email",
      fieldValue: "miladiadem58@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Tunisian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, French, Arabic",
    },
    {
      fieldName: "Full-Time-Job/Freelance",
      fieldValue: "Available",
    },
  ],
};
// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo amet optio harum minima nemo suscipit magnam quaerat, a ipsa dignissimos consequatur iusto quo vero commodi porro dolores voluptates, adipisci accusantium?",
  item: [
    {
      company: "Business Web Agency.",
      position: "Intern (Web Developer)",
      duration: "1 Month",
    },
    {
      company: "Net-Info.",
      position: "Intern (Web Developer)",
      duration: "1 Month",
    },
    {
      company: "Millesima-Technologies",
      position: "Intern (Web Developer)",
      duration: "4 Month",
    },
  ],
};

const Resume = () => {
  return <div>Resume page</div>;
};

export default Resume;
