import {
  mobile,
  backend,
  creator,
  web,
  FED,
  meta,
  starbucks,
  tesla,
  shopify,
  ccp,
  stoplyfterz,
  electronicthrottle,
  TimeCardAPP,
  BaldManGo,
  PortfolioSite,
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cloud Architect & Developer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
  {
    title: "Businesss Process Engineer",
    icon: mobile,
  },
  {
    title: "Cybersecurity Enthusiast",
    icon: backend,
  },
  
];



const experiences = [
  {
    title: "Construction Worker | First Project",
    company_name: "FB Contractors Inc.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2023 - Sept. 2023,  May 2024 - Sept. 2024 ",
    points: [
      "Worked construction building pole barns- I designed and implemented my first business automation tool to solve a real-world workflow issue.",
      "Digitized an outdated paper timecard system by using WhatsApp to collect time entries and organize them in Excel.",
      "Improved accuracy and efficiency in time tracking by reducing manual entry errors."
    ],
  },
  {
    title: "React Web Application Developer | Project Manager",
    company_name: "UW-Platteville",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - May 2025",
    points: [
      "Created my first fully developed software application leading a team of 3 fellow developers.",
      "Created carrent, which is a React Native application that allows retail stores to post and track known shop lifters in their area",
      "Experienced fullstack engineering during my process from creating the database, to designing UX",
      "Presented my application to the head of the Software Engineering department at UW-Platteville",
    ],
  },
  
  {
    title: "Software Engineer",
    company_name: "Federal Reserve Bank of Minneapolis",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Produced a Power Platform application that streamlined and optimized the process of employees doing an annual task",
      "Met with buisness lines to collect requirements, discuss UX, and gather feedback",
      "Operated in an Agile environment, participating in weekly meetings and monthly sprints",
      "Held weekly meetings with technology professionals around the bank, learning about different task/technologies used in the IT world",
    ],
  },
  {
    title: "Recieved Certified Cloud Practitioner",
    company_name: "AWS",
    icon: ccp,
    iconBg: "#E6DEDD",
    date: "Aug 2025",
    points: [
     
    ],
  },
];

const projects = [
  {
    name: "StopLyfterz",
    description:
      "Fullstack React Native web application that allows retail stores to post and monitor known shop lifters in their area, providing a community-driven approach to theft prevention. Led a team of three developers as project owner, working within an agile environment.",
    tags: [
      {
        name: "React",
        color: "blue-400", // shade 1
      },
      {
        name: "TypeScript",
        color: "blue-500", // shade 2
      },
      {
        name: "Supabase",
        color: "blue-600", // shade 3
      },
    ],
    image: stoplyfterz,
    source_code_link:  "https://github.com/TroyDvorak/StopLyfterz",
  },
  {
    name: "Digital Time Card",
    description:
    "A streamlined replacement for a paper time card system, enabling employees to text in their hours. The application automatically collects and organizes submissions into a spreadsheet, providing an efficient, accurate, and modern method for tracking employee hours.",
      tags: [
      {
        name: "Python",
        color: "blue-400", // shade 1
      },
      {
        name: "Excel",
        color: "blue-500", // shade 2
      },
      {
        name: "Twilio",
        color: "blue-600", // shade 3
      },
      
    ],
    image: TimeCardAPP,
    source_code_link:  "https://github.com/TroyDvorak/TimeCard_App",
  },
  {
    name: "Digital Throttle",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Arduino",
        color: "blue-400", // shade 1
      },
      {
        name: "C",
        color: "blue-500", // shade 2
      },
      {
        name: "Servo",
        color: "blue-600", // shade 3
      },
    ],
    video: electronicthrottle,
    source_code_link:  "https://github.com/TroyDvorak/Digital_Throttle",
  },
  {
    name: "2D Platformer",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React",
        color: "blue-400", // shade 1
      },
      {
        name: "MongoDB",
        color: "blue-500", // shade 2
      },
      {
        name: "Tailwind",
        color: "blue-600", // shade 3
      },
    ],
    video: BaldManGo,
    source_code_link:  "https://github.com/TroyDvorak/2dplatformer",
  },
  {
    name: "Power Platform Optimization",
    description:
      "Gathered Requirements from business lines to create a Power Platform application that streamlined and optimized the process of employees doing an manual repetive task, improving efficiency by 80%",
    tags: [
      {
        name: "PowerApps",
        color: "blue-400", // shade 1
      },
      {
        name: "PowerAutomate",
        color: "blue-500", // shade 2
      },
      {
        name: "PowerBI",
        color: "blue-600", // shade 3
      },
    ],
    image: FED,
    source_code_link: null,
  },
  {
    name: "Portfolio Website",
    description:
    "A personal portfolio website designed to highlight my work and my tech journey. I've integrated a chatbot for real-time interaction, enhancing user engagement and leveraging AWS Lambda for API calls. Additionally, I've hosted the site on AWS Cloudfront, to provide highly available and low-latency access to users worldwide.",
       tags: [
      {
        name: "React",
        color: "blue-400", // shade 1
      },
      {
        name: "AWS",
        color: "blue-500", // shade 2
      },
      {
        name: "ChatGPT_API",
        color: "blue-600", // shade 3
      },
      
    ],
    image: PortfolioSite,
    source_code_link:  "https://github.com/TroyDvorak/Portfolio",
  },
];

export { services, experiences, projects };