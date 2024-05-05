import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  zustand,
  reactquery,
  git,
  nextjs,
  fxmedia,
  rds,
  harisenin,
  shopee,
  gojek,
  traveloka,
  threejs,
  express,
  docker,
  mongo,
  prisma,
  nodejs,
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
    title: "Physics",
    icon: backend,
  },
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Esports Enthusiast",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Zustand",
    icon: zustand,
  },
  {
    name: "Prisma",
    icon: prisma,
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "React Query",
    icon: reactquery,
  },
  {
    name: "Docker",
    icon: docker,
  },
  // {
  //   name: "Mongo",
  //   icon: mongo,
  // },
  {
    name: "Node.js",
    icon: nodejs,
  },
  // {
  //   name: "Express",
  //   icon: express,
  // },
];

const experiences = [
  {
    title: "Full-Stack Web Developer Student",
    company_name: "Harisenin.com",
    icon: harisenin,
    iconBg: "#383E56",
    date: "March 2022 - July 2022",
    points: ["Immersive training program with an emphasis on Full-Stack Web Development", "Created E-Commerce Website for final project in the end of the bootcamp"],
  },
  {
    title: "Front-End Developer",
    company_name: "FXMedia Internet PTE LTD",
    icon: fxmedia,
    iconBg: "#E6DEDD",
    date: "May 2022 - Nov 2022",
    points: [
      "Developed responsive website application using HTML, CSS, and JavaScript",
      "Created Drag and Drop 'Analytics Project Plan Lifecycle Game' using Construct 3",
      "Created fully animated website using React.js and GreenSock (GSAP)",
      "Conducted research on emerging technologies such as Web 3.0, Blockchain, and Moralis to explore their potential applications and benefits.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Harisenin.com",
    icon: harisenin,
    iconBg: "#383E56",
    date: "September 2022 - Jan 2023",
    points: [
      "Utilized Next.js for building the user interface of the Harisenin-Consulting and Harisenin-Creative projects, ensuring efficient development and optimal performance.",
      "Implemented Tailwind CSS to streamline the styling process, leveraging its utility-first approach to ensure consistent and visually appealing designs.",
      "Actively participated in team meetings and discussions, contributing ideas and insights to drive innovation and improve project outcomes.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "RDS Group (Quadrant Synergy International)",
    icon: rds,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Developed the front-end architecture and user interface using Next.js and TypeScript, leveraging its capabilities for improved performance and facilitating code reliability, maintainability, and developer productivity through static typing.",
      "Integrated React Query for efficient data fetching, caching, and synchronization with the server, ensuring a seamless user experience.",
      "Managed global state and application data using Zustand, simplifying state management and enhancing scalability and maintainability.",
      "Worked closely with design and back-end teams to develop features, troubleshoot issues, and ensure timely delivery of high- quality solutions.",
      "Conducted thorough testing and debugging to ensure cross-browser compatibility, accessibility, and responsiveness across various devices and screen sizes.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Fikri sangat bekerja dengan cepat, tekun, dan pintar dalam menyelesaikan masalah. Fikri juga sangat peduli dengan klien. Mantul Fikri!",
    name: "Rahmadea Sagita Putri",
    designation: "CEO",
    company: "Tencent",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial: "Fikri pokoknya rajin banget dah. Klien pun sangat senang dengan Fikri. Kelas Pik",
    name: "Dendy Juliano Juanda",
    designation: "COO",
    company: "Moonton",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial: "Bekerja dengan Fikri sangatlah menyenangkan. Dia adalah orang yang sangat asik tetapi tetap tekun dengan pekerjaannya. Mantep Pik.",
    name: "Alvin Johannes",
    designation: "CTO",
    company: "Tokopedia",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const projects = [
  {
    name: "Shopee",
    description: "Web-based platform that allows users to search, buy, and sell products from various providers, providing a convenient and efficient solution for user needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shopee,
    source_code_link: "https://github.com/",
  },
  {
    name: "Gojek",
    description: "Gojek is an Indonesian multi-service platform that offers a wide range of services such as ride-hailing, food delivery, shopping, and payment solutions. ",
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
    image: gojek,
    source_code_link: "https://github.com/",
  },
  {
    name: "Traveloka",
    description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: traveloka,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
