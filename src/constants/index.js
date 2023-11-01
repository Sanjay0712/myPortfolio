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
import airbnb from '../assets/airbnb.png';
import snake from '../assets/snake.png';
import quiz from '../assets/quiz.png';
import begin from '../assets/begin.png';
import dribble from '../assets/dribble.png';
  
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
      title: "Full stack developer",
      company_name: "Cognizant",
      icon: cts,
      iconBg: "#E6DEDD",
      date: "June 2021 - Present",
      points: [
        "2+ years in Enterprise Performance Management (EPM) products as a Techno-Functional consultant primarily in EPBCS (cloud).",
        "Worked extensively on Hyperion planning (EPBCS), Data Management, Oracle MyServices, Excel, SmartView, AWS S3 bucket (VDI), AWS EC2 instances and Service café (Ticket management tool).",
        "Worked in EPM Automate, Unix Shell, EDMCS.",
        "Worked as a single resource and as part of a team.",
        "Experienced in support, maintenance and enhancements in Production environments. Worked for enhancements, testing and migration in the lower environments such as Dev and QA",
        "Worked on month-end close activities of EPBCS, EDMCS and Data Management",
        "I excel in team settings, blending my technical skills with effective communication to bring out the best in collaborations",
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
    {
      name: "Dribble Clone",
      description:
        "An app for creatives to share their projects and get hired",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "Next JS",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Grafbase",
          color: "blue-text-gradient",
        },
      ],
      image: dribble,
      source_code_link: "https://flexibblesanjayclone.vercel.app/",
    },
    {
      name: "Airbnb Clone",
      description:
        "An app to book or rent rooms, homes and residencies",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "Next JS",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
      ],
      image: airbnb,
      source_code_link: "https://residencybook.vercel.app/",
    },
    {
      name: "Snake Game",
      description:
        "A most celebrated game of 90's kid in the Nokia 1100",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Canvas",
          color: "blue-text-gradient",
        },
      ],
      image: snake,
      source_code_link: "https://sanjay0712.github.io/SnakeGame/",
    },
    {
      name: "Quiz App",
      description:
        "A beginner friendly app to test your capablities",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
      ],
      image: quiz,
      source_code_link: "https://sanjay0712.github.io/Quiz-App/",
    },
    {
      name: "Beginner Projects",
      description:
        "A platform for web developers to build their career with beginner level projects",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
      ],
      image: begin,
      source_code_link: "https://sanjay0712.github.io/Beginner-Projects/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
