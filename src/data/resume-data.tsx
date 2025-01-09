import {
  ClevertechLogo,
  ConsultlyLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Abhishek Mandilkar",
  initials: "AM",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/Pune",
  about:
    "Detail-oriented Full Stack Engineer focused on building scalable web and mobile applications.",
  summary: (
    <>
      2+ years of experience building SaaS applications in startup environments,
      I excel in delivering features end-to-end with a focus on impact and
      efficiency. My core expertise lies in React, React Native, and Node.js,
      all within a TypeScript ecosystem. I am well-versed in backend
      technologies like Prisma, Postgres, GraphQL, and cloud services such as
      AWS and Docker. Having worked across the entire stack, I bring a deep
      understanding of building scalable solutions, shipping high-quality
      products, and navigating the challenges of fast-paced startup growth.
    </>
  ),
  avatarUrl: "", // Will need an avatar URL
  personalWebsiteUrl: "", // Will need a website URL if available
  contact: {
    email: "a.a.mandilkar@gmail.com",
    tel: "+919172034640",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/AbhishekMandilkar", // Need actual GitHub URL
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhishek-mandilkar-30145a1ab/", // Need actual LinkedIn URL
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "International Institute Of Information Technology",
      degree: "Bachelor's in Information Technology",
      start: "2018",
      end: "2022",
    },
    {
      school: "Sri Chaitanya Junior College",
      degree: "Higher Secondary Education",
      start: "2016",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Fold Health",
      link: "",
      badges: [
        "Startup",
        "React",
        "React Native",
        "TypeScript",
        "NestJS",
        "Prisma",
        "Postgres",
        "GraphQL",
        "Apollo",
        "Hasura",
        "IndexDB",
        "AWS",
        "Cloud Watch & ECS",
        "Docker",
        "Chrome Extension",
        "JIRA",
        "Agile",
      ],
      title: "Software Engineer",
      logo: ConsultlyLogo, // Using placeholder logo
      start: "Jan 2023",
      end: null,
      description: (
        <>
          Full stack engineer working on cross-platform healthcare applications.
          <ul className="list-inside list-disc">
            <li>
              Delivered technical solutions aligned with business goals in a
              fast-paced startup environment, demonstrating adaptability and
              problem-solving skills.
            </li>
            <li>
              Developed and deployed features for web and mobile platforms using
              TypeScript, improving user experience and reducing delivery
              timelines.
            </li>
            <li>
              Built cross-platform functionality for Web, Android, and iOS using
              React Native, ensuring consistent user experiences while reducing
              development time and maintenance costs.
            </li>
            <li>
              Created a custom in-house component library to replace Native
              Base, improving app performance and streamlining the development
              process, saving time for future feature rollouts.
            </li>
            <li>
              Enhanced client-side performance by optimizing React code,
              leveraging techniques like lazy loading, memoization, code
              splitting, efficient state management and using caching techniques
              like indexDB and LocalStorage improving app speed and
              responsiveness.
            </li>
            <li>
              Designed and implemented robust backend systems using NestJS,
              Prisma & GraphQL in a microservices architecture, enabling
              seamless scaling to support increasing MAU.
            </li>
            <li>
              Worked on building a Chrome extension to enhance user workflows,
              integrating seamlessly with EHR websites and providing an improved
              user experience.
            </li>
            <li>
              Integrated wearable SDKs, including Apple Health and Google Fit,
              to enhance data tracking and analytics, offering better insights
              for user engagement and retention.
            </li>
            <li>
              Leveraged AWS CloudWatch for debugging production issues, reducing
              downtime and improving operational reliability while ensuring
              smooth performance in production.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Nirmitee.io",
      link: "",
      badges: ["Remote", "React", "Node.js", "MongoDB", "Firebase"],
      title: "Frontend Developer",
      logo: ParabolLogo, // Using placeholder logo
      start: "July 2022",
      end: "Jan 2023",
      description: (
        <>
          Frontend developer focused on building learning management systems and
          client projects.
          <ul className="list-inside list-disc">
            <li>
              Built an in-house Learning Management System (LMS) web application
              from scratch, enabling the team to share knowledge effectively
              through videos and blogs, improving internal training and
              collaboration.
            </li>
            <li>
              Implemented full-stack functionality by integrating React for the
              frontend, Node.js for the backend, and MongoDB for data storage,
              ensuring a seamless user experience and efficient data handling.
            </li>
            <li>
              Leveraged Firebase for secure file storage and retrieval,
              enhancing the systemʼs reliability and scalability.
            </li>
            <li>
              Worked closely with clients to convert Figma designs into fully
              functional landing pages, delivering polished, user-friendly
              interfaces that matched their vision.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Kalpas Innovations PVT LTD",
      link: "",
      badges: ["Remote", "React", "Material UI", "Axios"],
      title: "Frontend React Developer (Intern)",
      logo: ClevertechLogo, // Using placeholder logo
      start: "Nov 2021",
      end: "Feb 2022",
      description: (
        <>
          Frontend development intern working on React-based applications.
          <ul className="list-inside list-disc">
            <li>
              Contributed to React frontend development, creating user-friendly
              and streamlined interfaces with Material UI while gaining hands-on
              experience as a fresher.
            </li>
            <li>
              Took ownership of frontend development and deployment tasks in the
              absence of the team lead, showcasing adaptability, quick learning,
              and a proactive approach.
            </li>
            <li>
              Worked closely with the backend team to integrate APIs effectively
              using Axios, ensuring smooth data flow and optimizing application
              performance.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Prisma",
    "Hasura",
    "GraphQL",
    "Apollo",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "AWS CloudWatch",
    "AWS ECS",
    "Firebase",
    "Github Actions",
    "Docker",
    "Git",
    "JIRA",
    "Chrome Extension",
  ],
  projects: [
    {
      title: "Tonewise",
      techStack: [
        "Next.js",
        "React",
        "Prisma",
        "PostgreSQL",
        "OpenAI API",
        "TailwindCSS",
      ],
      description:
        "AI-powered tone adjustment tool for transforming message tones in various contexts like professional emails and friendly texts.",
      logo: ConsultlyLogo, // Using placeholder logo
      link: {
        label: "Tonewise",
        href: "", // Need actual URL
      },
    },
    {
      title: "Lend Rent Manager",
      techStack: [
        "Next.js",
        "React",
        "Prisma",
        "PostgreSQL",
        "TailwindCSS",
        "Clerk Auth",
      ],
      description:
        "Unified platform for managing loan and rental income tracking with features for payment tracking, tenant management, and financial analytics.",
      logo: NSNLogo, // Using placeholder logo
      link: {
        label: "Lend Rent Manager",
        href: "", // Need actual URL
      },
    },
  ],
} as const;
