import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo, 
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Otis Chen",
  initials: "OC",
  location: "Taoyuan, Taiwan",
  locationLink: "https://maps.app.goo.gl/AMvSWuNNUMALzuNM8",
  about:
    "Frontend Developer committed to detail-oriented solutions and logical problem-solving, creating impactful user experiences.",
  slogan: "Precision in code, logic in action",
  summary:
    "Aspiring Front-end Developer with a background in sales, leveraging strong problem-solving skills and business acumen. Proficient in JavaScript, Vue3, and responsive web design. Committed to creating user-centric, efficient web solutions through continuous learning and application of modern technologies.",
  avatarUrl: "https://avatars.githubusercontent.com/u/166091382?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "otis0059@gmail.com",
    tel: "+886928921465",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/olevatorr",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/otis-chen-504a22166/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Chung Chou University",
      degree: "Bachelor's Degree in Deliartment of Marketing and Logistics Management",
      start: "2012",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Tibame Vocational Training Center",
      link: "https://www.tibame.com/",
      badges: [null],
      title: "Front-end Engineer Course",
      logo: ConsultlyLogo,
      start: "2024.3",
      end: "2024.7",
      description:
        "Intensive front-end engineering program focusing on HTML, CSS3, HTML5, Vue3, PHP, and MySQL. Curriculum includes hands-on projects, culminating in both individual and team-based web applications. This in-person course provides comprehensive training in modern web development technologies and practical experience in collaborative software development.",
    },
    {
      company: "PNY Technologies Asia Pacific Limited",
      link: "https://www.pny.com.tw/tw/",
      badges: [null],
      title: "Sales Specialist",
      logo: ConsultlyLogo,
      start: "2021.10",
      end: "2024.2",
      description:
        "Through effective cross-departmental communication and precise time management, I consistently met sales targets while optimizing customer relationship management and online shop operations, enhancing my analytical skills and efficiency in forecasting market trends.",
    },
    {
      company: "Hwa Hsia Glass Co., Ltd.",
      link: "https://www.hwahsiaglass.com/tw",
      badges: [null],
      title: "Sales Representative",
      logo: ParabolLogo,
      start: "2020.6",
      end: "2021.7",
      description:
        "By leveraging strong communication skills and implementing efficient time management strategies, I exceeded sales objectives while meticulously managing orders and analyzing customer needs, which significantly improved my problem-solving abilities and overall work efficiency.",
    },
  ],
  skills: [
    "JavaScript",
    "Vue3",
    "Sass",
    "TailwindCSS",
    "Git Flow",
    "jQuery",
    "HTML5",
    "PHP",
    "MySQL",
  ],
  projects: [
    {
      title: "Blue Alert",
      techStack: ["Side Project", "Vue3", "Sass", "D3.js", "Chart.js", "Fullcalendar", "GSAP"],
      description:
        "Led a multi-member team in creating a full-stack web application, utilizing Vue3's Composition API for frontend development, integrating diverse libraries for enhanced UX, and implementing backend solutions with PHP, MySQL, and external API integrations.",
      logo: ConsultlyLogo,
      link: {
        label: "BlueAlert",
        href: "https://tibamef2e.com/cid101/g1/",
      },
    },
    {
      title: "Pet Hospital Online Shop",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "Developed a comprehensive veterinary hospital website using vanilla JavaScript, implementing advanced features like appointment booking and e-commerce, thereby reinforcing core JS skills and demonstrating proficiency in DOM manipulation and LocalStorage utilization.",
      logo: ConsultlyLogo,
      link: {
        label: "Broods.com",
        href: "https://personal-project-iota.vercel.app/",
      },
    },
    {
      title: "Todo List",
      techStack: ["Side Project", "Vue3", "TailwindCSS"],
      description:
        "Implemented a dynamic todo list using Vue's v-model and computed properties to manage input/output and render list items. The system allows users to remove items by clicking a \"remove\" button, which splices the corresponding index from the array. When an item is checked, it's automatically moved to the end of the list using JavaScript's sort() method.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://vercel.com/olevatorrs-projects/vue-project/todoList",
      },
    },
    {
      title: "Weather API",
      techStack: ["Side Project", "Vue3", "D3.js", "topojson","TailwindCSS"],
      description:
        " ",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://vue-project-one-blond.vercel.app/WeatherApi",
      },
    },
    {
      title: "Task Management System",
      techStack: ["Side Project", "Vue3", "TailwindCSS"],
      description:
        "Designed a task management system with \"Todo\", \"Processing\", and \"Done\" zones, utilizing empty arrays and the HTML5 Drag and Drop API. Tasks can be moved between zones using dataTransfer methods to push or splice items from the respective arrays.",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Shopping Cart",
      techStack: ["Side Project", "Vue3", "TailwindCSS", "Pinia"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
  ],
} as const;