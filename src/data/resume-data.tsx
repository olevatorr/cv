import {
  BarepapersLogo,
  ConsultlyLogo,
  JarockiMeLogo,
  Minimal,
  ParabolLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { ResumeData } from '@/data/type';



export const RESUME_DATA:ResumeData = {
  name: "Otis Chen",
  initials: "OC",
  location: "Taoyuan, Taiwan",
  locationLink: "https://maps.app.goo.gl/AMvSWuNNUMALzuNM8",
  about:
    "Frontend Developer committed to detail-oriented solutions and logical problem-solving, creating impactful user experiences.",
  slogan: "Precision in code, logic in action",
  summary:
    "Passionate frontend developer transitioning from sales fields, focusing on JavaScript, Vue3, and responsive web design. Skilled at transforming complex requirements into seamless user experiences. After completing a frontend engineering course, I continue to deepen core skills and explore new technologies following the Frontend Developer roadmap. Committed to enhancing problem-solving abilities and technical expertise, laying a solid foundation for my career transition.",
  avatarUrl: "https://avatars.githubusercontent.com/u/166091382?v=4",
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
  Hobbies: [
    "Photography",
    "Music",
    "Weight Training",
    "Traveling",
  ],
  education: [
    {
      school: "Chung Chou University",
      degree: "Bachelor's Degree in Deliartment of Marketing and Logistics Management",
      start: "2012",
      end: "2017",
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
        "JavaScript",
        "CSS3",
        "HTML",
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
        "Implemented a weather forecast application by integrating the open weather data platform API to render a week-long weather forecast and process various data. Utilized topojson to address the issue of oversized geojson files. Rendered an interactive map of Taiwan using D3.js and registered click events, achieving an interactive weather query system.",
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
      description: "Implemented a shopping cart system using the Pinia state management solution, and utilized v-model to achieve fuzzy filtering functionality.",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
  ],
} as const;


export const RESUME_CN_DATA:ResumeData = {
  name: "陳昇志 Otis Chen",
  initials: "OC",
  location: "桃園中壢區, 台灣",
  locationLink: "https://maps.app.goo.gl/AMvSWuNNUMALzuNM8",
  about:
    "前端工程師  專注於以邏輯解決問題並不斷學習新技術，增強自我Coding實力",
  slogan: "Precision in code, logic in action",
  summary:
    "熱忱的前端工程師轉職者，專注於JavaScript、Vue3和響應式網頁設計。善於將複雜需求轉化為流暢用戶體驗。在完成前端工程課程後，持續深化核心技能並按照Frontend Developer roadmap探索新技術，致力於提升解決問題的能力和技術實力，為職涯轉換奠定紮實基礎。",
  avatarUrl: "https://avatars.githubusercontent.com/u/166091382?v=4",
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
  Hobbies: [
    "攝影",
    "音樂",
    "重訓",
    "旅行",
  ],
  education: [
    {
      school: "中州科技大學",
      degree: "行銷與流通管理學系",
      start: "2012",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Tibame緯育中壢職訓中心",
      link: "https://www.tibame.com/",
      badges: [null],
      title: "前端工程師課程",
      logo: ConsultlyLogo,
      start: "2024.3",
      end: "2024.7",
      description:
        "密集的前端工程培訓課程，專注於HTML、CSS3、HTML5、Vue3、PHP和MySQL。課程包含實作專案，最終完成個人和團隊網頁應用程式。這個實體課程提供現代網頁開發技術的全面培訓，並在協作軟體開發方面提供實務經驗。",
    },
    {
      company: "PNY Technologies Asia Pacific Limited 必恩威亞太有限公司",
      link: "https://www.pny.com.tw/tw/",
      badges: [null],
      title: "業務專員",
      logo: ConsultlyLogo,
      start: "2021.10",
      end: "2024.2",
      description:
        "透過有效的跨部門溝通和精準的時間管理，我持續達成銷售目標，同時優化客戶關係管理和線上商店營運，提升了分析能力和預測市場趨勢的效率。",
    },
    {
      company: "華夏玻璃股份有限公司",
      link: "https://www.hwahsiaglass.com/tw",
      badges: [null],
      title: "國外業務專員",
      logo: ParabolLogo,
      start: "2020.6",
      end: "2021.7",
      description:
        "運用強大的溝通技巧和實施高效的時間管理策略，我超越銷售目標，同時細心管理訂單並分析客戶需求，這顯著提升了我的問題解決能力和整體工作效率。",
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
      title: "Blue Alert 藍色警戒",
      techStack: ["Side Project", "Vue3", "Sass", "Pinia","D3.js", "Chart.js", "Bootstrap5", "Git flow", "Fullcalendar", "GSAP", "PHP", "MySQL"],
      description:
        "帶領七人團隊開發全端網頁應用程式，運用Vue3的Composition API進行前端開發，整合多元函式庫以提升使用者體驗，並以PHP、MySQL實作後端解決方案，同時串接外部API。",
      logo: ConsultlyLogo,
      link: {
        label: "BlueAlert",
        href: "https://tibamef2e.com/cid101/g1/",
      },
    },
    {
      title: "寵物醫院商城",
      techStack: [
        "Side Project",
        "JavaScript",
        "CSS3",
        "HTML",
      ],
      description: "運用原生JavaScript開發全方位的獸醫院網站，實作預約掛號和電子商務等進階功能，藉此強化核心JS技能，並展現DOM操作和LocalStorage應用的專業能力。",
      logo: ConsultlyLogo,
      link: {
        label: "Broods.com",
        href: "https://personal-project-iota.vercel.app/",
      },
    },
    {
      title: "代辦清單",
      techStack: ["Side Project", "Vue3", "TailwindCSS"],
      description:
        "運用Vue的v-model和計算屬性實現動態待辦事項列表，用以管理輸入/輸出並渲染列表項目。系統允許使用者點擊「移除」按鈕來刪除項目，該操作會從陣列中剔除對應的索引。當項目被勾選時，會通過JavaScript的sort()方法自動將其移至列表末尾。",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://vue-project-olevatorrs-projects.vercel.app/",
      },
    },
    {
      title: "天氣 API",
      techStack: ["Side Project", "Vue3", "D3.js", "topojson","TailwindCSS"],
      description:
        "透過串接氣象資料開放平台API並渲染天氣一週預報以及各資料處理，在使用topojson降低geojson檔案過大問題，並且在透過D3.js將台灣地圖選染並註冊click事件，以達到互動式天氣查詢。",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://vue-project-olevatorrs-projects.vercel.app/",
      },
    },
    {
      title: "任務管理系統",
      techStack: ["Side Project", "Vue3", "TailwindCSS"],
      description:
        "設計了一個任務管理系統，包含「待辦」、「進行中」和「已完成」三個區域，運用空陣列和HTML5 Drag API。任務可通過dataTransfer方法在區域間移動，實現對應陣列的推入或剔除操作。",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://vue-project-olevatorrs-projects.vercel.app/",
      },
    },
    {
      title: "購物車",
      techStack: ["Side Project", "Vue3", "TailwindCSS", "Pinia"],
      description: "使用Pinia狀態管理系統來製作加入購物車系統，並且能透過v-model來實現模糊篩選。",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://vue-project-olevatorrs-projects.vercel.app/",
      },
    },
  ],
} as const;