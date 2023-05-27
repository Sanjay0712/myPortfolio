import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    threejs,
  } from "../assets";

import c from "../assets/tech/c.png";
import java from "../assets/tech/java.png";
import excel from "../assets/tech/excel.png";
import cts from "../assets/company/cts.png";
import klogo from "../assets/company/klogo.png";
import infant from "../assets/company/infant.png";
import avp from "../assets/company/avp.jpg";
import reactMovieApp from '../assets/reactMovieApp.png';
import expenseTracker from '../assets/expenseTracker.png';
import shoppingCart from '../assets/shoppingCart.png';
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Problem Solver",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "EPM Consultant",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C++",
      icon: c,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "excel",
      icon: excel,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Programmer Analyst",
      company_name: "Cognizant",
      icon: cts,
      iconBg: "#E6DEDD",
      date: "June 2023 - Present",
      points: [
        "Developing and maintaining financial planning and budgeting enterprise application of Oracle Hyperion (EPM). Developing Hyperion Planning environments, including outlines, load rules, calculation scripts, partitions, web forms and security, system testing, and training of end-user and Client support teams",
        "Collaborating with cross-functional teams including consultants, cloud admins, and other finance teams to create and maintain robust and sustainable enterprise application",
        "Performing monthly maintenance activities for the financial close periods and maintaining historical data for planning and budgeting solution",
        "Helping organization understand their data and use it to make better business decisions.",
        "Enhancing existing EPM functionalities, Performing admin activities like granting access and dealing with data validations",
        "Possessing Knowledge of the application of better practices within performance reporting and planning process areas"
      ],
    },
    {
      title: "B.E. Computer Science",
      company_name: "Kongu Engineering College",
      icon: klogo,
      iconBg: "#383E56",
      date: "August 2017 - March 2021",
      points: [
        "Graduated with 8.19 CGPA in Computer Science and Engineering",
        "Received 1st prize in project exhibition with cash price of 20000 rupees",
        "Actively participated in various clubs like Maths club, Rotary club and coding club",
      ],
    },
    {
      title: "HSC",
      company_name: "Infant Jesus Matriculation School",
      icon: infant,
      iconBg: "#E6DEDD",
      date: "2015 - 2017",
      points: [
        "Completed HSC with 94.41 percentage",
      ],
    },
    {
      title: "SSLC",
      company_name: "A.V.P Trust School",
      icon: avp,
      iconBg: "#383E56",
      date: "2014 - 2015",
      points: [
        "Completed SSLC with 97.8 percentage",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Movie App",
      description:
        "Web-based platform that allows users to search movie from various providers with ratings.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: reactMovieApp,
      source_code_link: "https://sanjay0712.github.io/ReactMovieApp/",
    },
    {
      name: "Shopping Cart",
      description:
        "Web application that enables users to view and add products to cart",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: shoppingCart,
      source_code_link: "https://sanjay0712.github.io/shopping-cart/",
    },
    {
      name: "Expense Tracker",
      description:
        "An app to track daily and monthly expenses and savings",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "Material UI",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: expenseTracker,
      source_code_link: "https://sanjay0712.github.io/ExpenseTracker/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };