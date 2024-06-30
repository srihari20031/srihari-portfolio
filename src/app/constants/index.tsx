import { FaArchive, FaFileAlt, FaUserAlt } from "react-icons/fa";
import css from "../../../public/css3.png";
import html from "../../../public/html-5.png";
import js from "../../../public/js.png";
import react from "../../../public/react.png";
import node from "../../../public/node-js.png";
import Next from "../../../public/next.png";
import mysql from "../../../public/mysql.png";
import linux from "../../../public/linux.png";
import tailwindcss from "../../../public/tailwind-css.svg";
import Java from "../../../public/java.png";
import mongodb from "../../../public/mongodb.png";
import express from "../../../public/icons8-express-js-16.svg";
import firebase from "../../../public/icons8-firebase.svg";
import Ninchat from "../../../public/Ninchat.png";
import Ecommerce from "../../../public/Ecommerce.png";
import DalleClone from "../../../public/DallEClone.png";
import MoiveApp from "../../../public/Movieapp.png";
import HotelApp from "../../../public/PDemo.png";
import Insta from "../../../public/icons8-instagram (1).svg"
import Linkedin from "../../../public/icons8-linkedin (1).svg"
import X from "../../../public/icons8-twitterx (1).svg"
import Github from "../../../public/icons8-github-94.png"
import Gmail from "../../../public/icons8-gmail-48.png"

export const sections = [
  {
    id: 0,
    title: "Projects",
    link: "/Projects",
    icon: <FaArchive />,
  },
  {
    id: 1,
    title: "Resume",
    link: "/Resume",
    icon: <FaFileAlt />,
  },
  {
    id: 2,
    title: "About me",
    link: "/#About",
    icon: <FaUserAlt />,
  },
];

export const skills = [
  {
    id: 0,
    name: "html",
    image: html,
  },
  {
    id: 1,
    name: "css",
    image: css,
  },

  {
    id: 2,
    name: "js",
    image: js,
  },
  {
    id: 3,
    name: "react",
    image: react,
  },
  {
    id: 4,
    name: "node",
    image: node,
  },
  {
    id: 5,
    name: "Next",
    image: Next,
  },
  {
    id: 6,
    name: "mysql",
    image: mysql,
  },
  {
    id: 7,
    name: "linux",
    image: linux,
  },
  {
    id: 8,
    name: "tailwindcss",
    image: tailwindcss,
  },
  {
    id: 9,
    name: "Java",
    image: Java,
  },
  {
    id: 10,
    name: "MongoDB",
    image: mongodb,
  },
  {
    id: 11,
    name: "Express",
    image: express,
  },
];

export const projectsArray = [
  {
    id: 0,
    title: "Dall-E Clone",
    image: DalleClone,
    description:
      "The AI Image Generator is an innovative web application built using the MERN stack (MongoDB, Express.js, React, Node.js) and powered by the OpenAI API. This application leverages cutting-edge artificial intelligence to create stunning, unique images based on user input. ",
    stack: [
      {
        id: 0,
        name: "React",
        image: react,
      },
      {
        id: 1,
        name: "Node",
        image: node,
      },
      {
        id: 2,
        name: "MongoDB",
        image: mongodb,
      },
      {
        id: 3,
        name: "Express",
        image: express,
      },
    ],
  },
  {
    id: 1,
    title: "Ninchat",
    image: Ninchat,
    description:
      "The Chat App is a robust and dynamic messaging platform developed using React, Redux, and Firebase for seamless authentication and storage. This app leverages modern web technologies to ensure fast and reliable messaging.",
    stack: [
      {
        id: 0,
        name: "React",
        image: react,
      },
      {
        id: 1,
        name: "Firebase",
        image: firebase,
      },
    ],
  },
  {
    id: 2,
    title: "E-commerce",
    image: Ecommerce,
    description:
      "The E-commerce App is a full-stack web application built using React, Redux, and Firebase for seamless authentication and storage. Designed to provide an intuitive and secure e-commerce experience, this app leverages modern web technologies to ensure fast and reliable checkout.",
    stack: [
      {
        id: 0,
        name: "React",
        image: react,
      },
      {
        id: 1,
        name: "Firebase",
        image: firebase,
      },
    ],
  },
  {
    id: 4,
    title: "StayHappy",
    image: HotelApp,
    description:
      "The Hotel Booking App is a robust and user-friendly web application developed using the MERN stack (MySQL, Express.js, React, Node.js). This platform provides a seamless interface for users to search, compare, and book hotels with ease.",
    stack: [
      {
        id: 0,
        name: "React",
        image: react,
      },
      {
        id: 1,
        name: "Node",
        image: node,
      },
      {
        id: 2,
        name: "MySQL",
        image: mysql,
      },
      {
        id: 3,
        name: "Express",
        image: express,
      },
    ],
  },
  {
    id: 5,
    title: "React Movie Site",
    image: MoiveApp,
    description:
      "React Movie Site built using React and integrated with the TMDB (The Movie Database) API, this site offers a seamless interface for discovering and exploring a vast collection of movies.",
    stack: [
      {
        id: 0,
        name: "React",
        image: react,
      },
    ],
  },
];

export const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/srihari20031",
    icon: Github, 
    backgroundColor: "#181717", 
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sriharinarayanv/",
    icon: Linkedin, 
    backgroundColor: "#0077B5", 
  },
 
  {
    name: "Gmail",
    link: "mailto:sriharivelayutham.28@gmail.com",
    icon:  Gmail,
    backgroundColor: "#1877F2",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sri__hari__narayan__v/",
    icon: Insta, 
    backgroundColor: "#E4405F", 
  },
  {
    name: "Twitter",
    link: "https://x.com/Srihari280",
    icon: X, 
    backgroundColor: "#E4405F", 
  },
];
