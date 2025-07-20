import {
  BarepapersLogo,
  ConsultlyLogo,
  JarockiMeLogo,
  Minimal,
  ParabolLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, PortfolioIcon } from "@/components/icons";
import { ResumeData } from '@/data/type';



export const RESUME_DATA:ResumeData = {
  name: "Otis Chen",
  initials: "OC",
  location: "Zhongli, Taoyuan, Taiwan",
  locationLink: "https://maps.app.goo.gl/AMvSWuNNUMALzuNM8",
  about: "Frontend Developer",
  summary: "Specializing in Nuxt 3, Next.js and Tailwind CSS development for high-performance interactive websites. Proficient in pixel-perfect UI implementation and animation effects using GSAP, Three.js, and p5.js. Independently developed multiple medium to large-scale websites, responsible for frontend architecture design, WordPress CMS setup, RESTful API integration, and SEO optimization. Participated in over 5 medium to large-scale dynamic website team collaborations, specializing in modular architecture planning and visual interaction effects implementation. Emphasizes performance optimization and team collaboration, skilled in writing API documentation to improve development efficiency.",
  avatarUrl: "https://avatars.githubusercontent.com/u/166091382?v=4",
  contact: {
    email: "otis0059@gmail.com",
    tel: "+886 928 921 465",
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
  bio: "My name is Chen Sheng-Chih, and I currently reside in Zhongli, Taoyuan. As a frontend engineer with a genuine passion for web development, I've dedicated myself to mastering technologies like Nuxt 3, Vue.js, and Tailwind CSS to create high-performance, scalable dynamic websites. My journey combines technical expertise with the execution ability and communication skills I developed during my previous business career, driving my pursuit of excellence and innovation in the technology field.\n\nLearning and Technical Journey\n\nI currently work as a Frontend Engineer at Block Studio, a Taiwanese design studio specializing in web design and brand identity. Here, I'm responsible for frontend development of medium to large-scale websites, using HTML5, CSS3, and JavaScript (ES6+) to build responsive interfaces, while implementing dynamic functionality with Nuxt 3 and Vue.js 3 (including experience with <script setup>, Composition API, and Options API).\n\nAt Block Studio, we emphasize modular design principles, and I break down UI into reusable components to ensure code modularity and maintainability. I hand-code interfaces using Tailwind CSS to precisely realize designers' unique creative visions. I particularly excel at incorporating smooth animations using GSAP, Three.js, and Spline, such as SVG line animations and 3D interactions, which significantly enhance user experience.\n\nMy responsibilities also include SEO optimization (Nuxt sitemap, JSON-LD) and data integration (GTM, GA4) to improve website search rankings and business value. On the backend, I build WordPress CMS using PHP and MySQL, design RESTful APIs, and integrate external data sources (such as government open platforms or weather data). I'm accustomed to using Git for version control alongside Docker to ensure smooth deployment, and I write API documentation to facilitate more efficient team collaboration.\n\nBefore this, I completed frontend engineer training at Tibame Zhongli Vocational Training Center in July 2024, where I studied HTML5, CSS3, JavaScript, SASS, Vue 3, and Pinia. I completed an individual project practicing native JavaScript and served as the team leader for a 7-person project called \"BlueAlert,\" managing schedules and technical coordination, which developed my leadership abilities.\n\nProfessional Experience\n\nIn my current role at Block Studio, I've independently completed a medium-scale website project that combines Nuxt 3 with WordPress CMS, implementing 3D dynamics (Spline), site-wide GSAP animations, and dynamic sitemaps. I've also participated in 4 team projects, collaborating with designers and backend engineers to ensure precise UI presentation and performance optimization (Lazy Loading, LCP adjustments). These experiences have matured my skills in both technical implementation and project management.\n\nBefore my career transition, I worked as a Business Specialist at PNY Technologies Asia Pacific Limited (an NVIDIA AIC partner), managing online marketplaces (PChome, MOMO, Shopee). I grew Shopee sales from zero to NTD 2 million monthly, while maintaining primary platform and B2B transactions between NTD 10-20 million. This experience honed my cross-departmental communication and execution abilities, which greatly benefit my current collaboration with designers and backend teams.\n\nEven earlier, I worked as a Sales Representative at Hua Hsia Glass Co., Ltd., where I increased monthly sales from NTD 4-6 million to NTD 15-20 million, demonstrating my strategic planning capabilities.\n\nPersonal Traits and Skills\n\nI enjoy breaking down problems logically and designing efficient solutions. My time management skills allow me to handle multiple tasks simultaneously while delivering on schedule. Rapid learning and self-problem-solving are my greatest strengths, while my previous business experience has made me adept at communication and coordination within teams, helping colleagues overcome technical challenges.\n\nCareer Development Plan\n\nShort-term (1-3 years): Deepen my frontend technical skills (Nuxt 3, animation effects) and explore React/Next.js to increase my versatility.\nMid-term (3-5 years): Learn backend technologies (Java, Python, etc.) to develop as a full-stack engineer capable of building comprehensive solutions.\nLong-term: Continue to monitor industry trends and become an influential technical expert.\nI aim to combine technical proficiency with collaborative experience to bring value to my team while continuing to grow in the web development field!",
  Hobbies: [
    "Photography",
    "Music",
    "Weight Training",
    "Traveling",
  ],
  education: [
    {
      school: "Chung Chou University",
      degree: "Bachelor's Degree in Department of Marketing and Logistics Management",
      start: "2012",
      end: "2017",
    },
  ],
  advanced: [
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
  ],
  work: [
    {
      company: "YS-Inforware",
      link: "",
      badges: ["Nuxt3", "Vue3", "TailwindCSS", "PrimeVue", "docker", "gitlab"],
      title: "Frontend Engineer",
      logo: ConsultlyLogo,
      start: "2025.5",
      end: "Present",
      description:
        "Enterprise data management and workflow management system, reconstructed with Nuxt3 framework to achieve multi-API and responsive data processing for SSR and CSR. \n• Package Integration - Introduced PrimeVue to implement enterprise-level UI design, solving performance pain points caused by traditional UI compatibility issues with Vue3 \n• Architecture Reconstruction - Rebuilt core project functionality, breaking away from past limitations of poor performance, UI/UX, and scalability \n• Unified Style - Standardized team development style to improve development efficiency and quality \n• User Experience - Simplified user operation workflow to enhance user experience \n• Framework - Used Nuxt3 framework to reconstruct enterprise data management and workflow management systems, achieving multi-API and responsive data processing for SSR and CSR \n• Team Collaboration - Collaborated with frontend and backend engineers to implement various functions with new architecture",
    },
    {
      company: "Block Studio",
      link: "https://blockstudio.tw/",
      badges: ["Nuxt3", "Vue3", "TailwindCSS", "PHP", "MySQL", "Docker", "Nginx", "Gitlab", "WordPress"],
      title: "Frontend Engineer",
      logo: ConsultlyLogo,
      start: "2024.8",
      end: "2025.4",
      description:
        "Independent operation with extensive project experience, proficient in WordPress, PHP, Docker, Nginx, Gitlab, and other technologies. \n• Independent Work - Completed one medium-sized official website, currently working on one large project and one dynamic landing page \n• Team Collaboration - More than five collaborative projects, adhering to consistent team coding style \n• Project Management - Time allocation for multiple concurrent projects \n• Performance Optimization - Optimizing website loading speed and user experience \n• SEO Optimization - Implementing search engine optimization strategies to improve website rankings and visibility \n• Problem-Solving - Systematically analyzing and resolving complex technical challenges to ensure project success",
    },
    {
      company: "PNY Technologies Asia Pacific Limited",
      link: "https://www.pny.com.tw/tw/",
      badges: [],
      title: "Business Specialist",
      logo: ConsultlyLogo,
      start: "2021.10",
      end: "2024.2",
      description:
        "NVIDIA AIC partner specializing in high-quality PC components. Consistently achieved sales targets through effective cross-departmental communication and precise time management. \n• Multi-platform Operations - Full responsibility for managing PChome, MOMO, Shopee, and other online marketplaces \n• Significant Performance Improvement - Increased Shopee monthly sales from 0 to 2-3 million NTD within six months \n• Business Process Optimization - Precise management of business planning, forecast control, and quotation processes \n• Logistics Optimization - Collaborated with e-commerce logistics centers to establish SOPs for improved efficiency \n• Customer Relationship Management - Developed new business using excellent communication skills and insights \n• Promotional Campaign Planning - Planned and executed effective promotional strategies to boost sales \n• Market Analysis - Enhanced analytical abilities and efficiency in forecasting market trends",
    },
    {
      company: "Hua Hsia Glass Co., Ltd.",
      link: "https://www.hwahsiaglass.com/tw",
      badges: [],
      title: "International Sales Representative",
      logo: ParabolLogo,
      start: "2020.6",
      end: "2021.7",
      description:
        "Taiwan's largest daily-use glassware manufacturer. Improved work efficiency through strong communication skills and effective time management strategies. \n• Business Development - Actively developed new customers and products to expand market share \n• Order Management - Ensured smooth process from quotation to shipping arrangements \n• Crisis Negotiation - Successfully negotiated price increases during the pandemic, achieving 70% growth \n• Continuous Learning - Actively learned professional knowledge, improved cross-departmental collaboration \n• Logistics Coordination - Responsible for sea freight booking and domestic shipping arrangements \n• Customer Service - Professional handling of customer complaints and payment matters",
    },
  ],
  skills: [
    "Nuxt.js",
    "Next.js",
    "Vue.js",
    "React.js",
    "TailwindCSS v3/v4",
    "HTML",
    "CSS",
    "JavaScript",
    "docker",
    "Sass",
    "Node.js",
    "Express.js",
    "Git",
    "GitLab",
    "swagger",
    "Figma",
    "PHP",
    "MySQL",
    "jQuery",
    "Java",
    "Python"
  ],
  projects: [
    {
      imageUrl: "/projects/art-bank.webp",
      title: "Taiwan Art Bank Official Website",
      techStack: ["Nuxt3", "Vue3", "TailwindCSS", "GSAP", "swiper", "wordpress(CMS)","PHP", "MariaDB", "Docker", "Nginx", "Gitlab"],
      description:
        "Frontend Collaboration | Large-scale Website Rebuild | SEO Optimization",
      logo: ConsultlyLogo,
      link: {
        label: "Taiwan Art Bank",
        href: "https://artbank.tfaf.org.tw/",
      },
    },
    {
      imageUrl: "/projects/china-air.webp",
      title: "China Airlines Member Day",
      techStack: ["Nuxt3", "Vue3", "TailwindCSS", "GSAP", "swiper",  "Docker", "Gitlab"],
      description:
        "Independent Frontend Development | Event Page | SEO Optimization | Multilingual",
      logo: ConsultlyLogo,
      link: {
        label: "China Airlines Member Day",
        href: "https://members-event.china-airlines.com/promotion",
      },
    },
    {
      imageUrl: "/projects/fenc.webp",
      title: "Far Eastern New Century Official Website",
      techStack: ["Nuxt3", "Vue3", "TailwindCSS", "GSAP", "swiper", "Spline", "Docker", "Gitlab"],
      description:
        "Independent Frontend Development | Large-scale Website Rebuild | SEO Optimization | Multilingual",
      logo: ConsultlyLogo,
      link: {
        label: "Far Eastern New Century",
        href: "https://www.fenc.com.tw/",
      },
    },
    {
      imageUrl: "/projects/unme.webp",
      title: "Unme Design Official Website",
      techStack: ["Nuxt3", "Vue3", "TailwindCSS", "GSAP", "swiper", "wordpress(CMS)","PHP", "MariaDB", "Docker", "Nginx", "Gitlab"],
      description:
        "Full-stack Independent Development | Medium-scale Website Rebuild | SEO Optimization",
      logo: ConsultlyLogo,
      link: {
        label: "Unme Design",
        href: "https://unmedesign.co/",
      },
    },
    {
      imageUrl: "/projects/chenbro.webp",
      title: "CHENBRO Official Website",
      techStack: ["Nuxt3", "Vue3", "TailwindCSS", "GSAP", "swiper","Docker", "Nginx", "Gitlab"],
      description:
        "Frontend Collaboration | Large-scale Website Rebuild | Multilingual",
      logo: ConsultlyLogo,
      link: {
        label: "CHENBRO",
        href: "https://www.chenbro.com/",
      },
    },
    {
      imageUrl: "/projects/venti.webp",
      title: "VentiVenti Consulting Official Website",
      techStack: ["Nuxt3", "Vue3", "TailwindCSS", "GSAP", "wordpress(CMS)", "PHP", "MariaDB", "Docker", "Nginx", "Gitlab"],
      description:
        "Frontend Collaboration | Medium-scale Website Rebuild | SEO Optimization | Multilingual",
      logo: ConsultlyLogo,
      link: {
        label: "VentiVenti Consulting",
        href: "https://ventiventi.tw/zh",
      },
    },
    {
      imageUrl: "/projects/cmp.webp",
      title: "CMP Inspiration Official Website",
      techStack: ["Nuxt3", "Vue3", "TailwindCSS", "GSAP", "wordpress(CMS)", "PHP", "MariaDB", "Docker", "Nginx", "Gitlab"],
      description:
        "Full-stack Collaboration | Medium-scale Website Rebuild | SEO Optimization | Multilingual",
      logo: ConsultlyLogo,
      link: {
        label: "CMP Inspiration",
        href: "https://cmp-inspiration.com.tw/",
      },
    },
    {
      imageUrl: "/projects/Blue-Alert.webp",
      title: "Blue Alert",
      techStack: ["Side Project", "Vue3", "Sass", "Pinia","D3.js", "Chart.js", "Bootstrap5", "Git flow", "Fullcalendar", "GSAP", "PHP", "MySQL"],
      description:
        "Full-stack Collaboration | Team Leadership | Agile Development",
      logo: ConsultlyLogo,
      link: {
        label: "BlueAlert",
        href: "https://tibamef2e.com/cid101/g1/",
      },
    },
    {
      imageUrl: "/projects/broods.webp",
      title: "Pet Hospital Online Shop",
      techStack: [
        "Side Project",
        "JavaScript",
        "CSS3",
        "HTML",
      ],
      description: "Independent Frontend Development | Native JavaScript | Google Maps API",
      logo: ConsultlyLogo,
      link: {
        label: "Broods.com",
        href: "https://personal-project-iota.vercel.app/",
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
    "前端工程師",
  summary:
    "專精於Nuxt 3、Next.js與Tailwind CSS開發高效能互動網站。擅長像素級UI還原及GSAP、Three.js、p5.js動畫特效實作。獨立開發過多個中大型網站，負責前端架構設計、WordPress CMS建置、RESTful API串接及SEO優化。參與過5個以上中大型動態網站團隊協作，專責模組化架構規劃及視覺互動效果實現。注重效能優化及團隊合作，善於撰寫API規格文件提升開發效率。",
  avatarUrl: "https://avatars.githubusercontent.com/u/166091382?v=4",
  contact: {
    email: "otis0059@gmail.com",
    tel: "+886 928 921 465",
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
      {
        name: "Perfolio",
        url: "https://otischen.site/",
        icon: PortfolioIcon,
      }
    ],
  },
  bio: "您好，我是陳昇志，目前居住於桃園中壢，是一名對網頁開發充滿熱情的前端工程師。我擅長使用 Nuxt 3、Vue.js 和 Tailwind CSS 打造高效能、可擴展的動態網站，並結合過去業務工作的執行力與溝通技巧，在技術領域中追求卓越與創新。\n\n學習與技術經歷:\n我目前在版塊設計（Block Studio）擔任前端工程師，這是一家專注於網頁設計與品牌識別的台灣設計工作室。在這裡，我負責中大型網站的前端開發，使用 HTML5、CSS3 和 JavaScript (ES6+) 打造響應式介面，並以 Nuxt 3 和 Vue.js 3（熟悉 <script setup>、Composition API 和 Options API）實現動態功能。版塊設計的專案強調模組化設計（block design），我將 UI 拆分成可重複使用的組件，確保程式碼模組化與可維護性，並用 Tailwind CSS 手刻介面，精準還原設計師的獨特創意。我特別擅長用 GSAP、Three.js 和 Spline 加入流暢的動畫效果，例如 SVG 畫線動態與 3D 互動，提升使用者體驗。\n\n我還負責 SEO 優化（Nuxt sitemap、JSON-LD）和數據整合（GTM、GA4），提升網站搜尋排名與商業價值。在後端方面，我用 PHP 和 MySQL 搭建 WordPress CMS，設計 RESTful API，串接外部資料（如政府開放平台或氣象資料）。我習慣用 Git 管理版本，搭配 Docker 確保部署順暢，並撰寫 API 文件，讓團隊協作更有效率。\n\n在此之前，我於 2024 年 7 月完成 Tibame 中壢職訓中心的前端工程師培訓，學習 HTML5、CSS3、JavaScript、SASS、Vue 3 和 Pinia。我完成個人專題練習原生 JavaScript，並擔任 7 人團隊專題「BlueAlert 藍色警戒」的組長，負責時程規劃與技術協調，培養了我的領導能力。\n\n職場經歷:\n目前在版塊設計的工作中，我獨立完成了一個中型網站專案，結合 Nuxt 3 和 WordPress CMS，實現 3D 動態（Spline）、全站 GSAP 動畫和動態 sitemap，還參與了 4 個團隊專案，與設計師、後端工程師合作，確保 UI 精準呈現並優化效能（Lazy Loading、LCP 調整）。這些經驗讓我從技術到專案管理都更加成熟。\n\n轉職前，我曾在 PNY Technologies Asia Pacific Limited（NVIDIA AIC 合作夥伴）擔任業務專員，管理線上商城（PChome、MOMO、蝦皮），將蝦皮銷售額從零提升至每月 200 萬，主力平台與 B2B 交易達 1,000-2,000 萬。這段經歷磨練了我的跨部門溝通與執行力，對現在與設計師、後端團隊的協作有很大幫助。更早前，我在華夏玻璃股份有限公司擔任業務員，將月銷售額從 400-600 萬提升至 1,500~2,000 萬，展現了我的策略規劃能力。\n\n個人特質與技能:\n我喜歡用邏輯拆解問題，設計高效解法，時間管理能力讓我能同時處理多任務並準時交付。快速學習與自我解決問題是我最大的優勢，過去業務經驗也讓我在團隊中擅長溝通協調，幫助同事克服技術難題。\n\n職業發展規劃:\n短期（1-3 年）：深化前端技術（Nuxt 3、動畫效果），探索 React/Next.js，提升靈活性。\n中期（3-5 年）：學習後端技術（Java、Python等），朝全端工程師發展，打造完整解決方案。\n長期：持續追蹤業界趨勢，成為具影響力的技術專家。\n我希望結合技術實力與協作經驗，為團隊帶來價值，並在網頁開發領域持續成長！",
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
  advanced: [
    {
      company: "Tibame緯育中壢職訓中心",
      link: "https://www.tibame.com/",
      badges: [],
      title: "前端工程師課程",
      logo: ConsultlyLogo,
      start: "2024.3",
      end: "2024.7",
      description:
        "密集的前端工程培訓課程，專注於HTML、CSS3、HTML5、Vue3、PHP和MySQL。課程包含實作專案，最終完成個人和團隊網頁應用程式。這個實體課程提供現代網頁開發技術的全面培訓，並在協作軟體開發方面提供實務經驗。",
    }
  ],
  work: [
    {
      company: "亞璿資訊有限公司 YS-Inforware",
      link: "",
      badges: ["Nuxt3", "Vue3", "TailwindCSS", "PrimeVue", "docker", "gitlab"],
      title: "前端工程師",
      logo: ConsultlyLogo,
      start: "2025.5",
      end: null,
      description:
        "企業級資料管理以及流程管理系統，使用Nuxt3框架重構開發，達到多API以及資料響應式處理的SSR、CSR。\n 　　套件導入 - 導入PrimeVue實現企業級UI設計，以解決傳統UI和與Vue3的相容性問題導致的效能痛點\n　　架構重建- 重構專案核心功能，跳脫過往效能、UI/UX以及擴展性極差的缺點\n　　統一風格 - 一致化團隊開發風格，提升開發效率和品質\n　　使用者體驗 - 簡化使用者操作流程，提升使用者體驗\n　　框架 - 使用Nuxt3框架重構開發企業級資料管理以及流程管理系統，達到多API以及資料響應式處理的SSR、CSR\n　　團隊協作 - 與前後端工程師協作討論，以新架構實現多種功能",
    },
    {
      company: "版塊創意有限公司 BlockStudio",
      link: "https://blockstudio.tw/",
      badges: ["Nuxt3", "Vue3", "TailwindCSS", "PHP", "MySQL", "Docker", "Nginx", "Gitlab", "WordPress"],
      title: "前端工程師",
      logo: ConsultlyLogo,
      start: "2024.8",
      end: "2025.4",
      description:
        "可獨立作業且擁有豐富的專案經驗，熟悉WordPress、PHP、Docker、Nginx、Gitlab等技術。\n　　獨立作業 - 目前完成一個中型官網，進行中有一個大型專案和一個豐富動態的Landing page \n　　團隊協作 - 五個以上的協作專案，符合一致的團隊coding style \n　　專案管理 - 多項專案同時進行時間分配 \n　　效能優化 - 針對網站載入速度和使用者體驗進行優化 \n　　SEO優化 - 實施搜尋引擎優化策略，提升網站在搜尋結果中的排名和可見度 \n　　問題解決能力 - 系統性分析並解決複雜的技術挑戰，確保專案順利進行",
    },
    {
      company: "美商必恩威亞太有限公司 PNY Technologies Asia Pacific Limited",
      link: "https://www.pny.com.tw/tw/",
      badges: [],
      title: "業務專員",
      logo: ConsultlyLogo,
      start: "2021.10",
      end: "2024.2",
      description:
        "NVIDIA的AIC合作夥伴，專門生產高品質PC組件。透過有效的跨部門溝通和精準的時間管理，持續達成銷售目標。 \n　　多平台運營 - 全權負責管理PChome、MOMO、蝦皮等多個線上商城 \n　　顯著業績提升 - 半年內將蝦皮商城月銷售額從0提升至200-300萬 \n　　業務流程優化 - 精確管理業務計劃、預測控制和報價流程 \n　　物流優化 - 與電商物流中心合作，建立SOP提高效率 \n　　客戶關係管理 - 運用出色的溝通技巧和洞察力開發新業務 \n　　促銷活動規劃 - 策劃並執行有效的促銷策略，提升銷售業績 \n　　市場分析 - 提升分析能力和預測市場趨勢的效率",
    },
    {
      company: "華夏玻璃股份有限公司",
      link: "https://www.hwahsiaglass.com/tw",
      badges: [],
      title: "國外業務專員",
      logo: ParabolLogo,
      start: "2020.6",
      end: "2021.7",
      description:
        "台灣最大日用品玻璃廠。運用強大的溝通技巧和高效的時間管理策略，提升工作效率。 \n　　業務開發 - 積極開拓新客戶並發展新產品，擴大市場份額 \n　　訂單全程管理 - 從報價到出貨安排，確保流程順暢 \n　　危機談判 - 疫情期間成功協商漲價應對物價上漲，實現業績70%成長 \n　　持續學習 - 積極學習專業知識，提升跨部門合作能力 \n　　物流協調 - 負責海運訂艙和內銷出貨安排，優化配送效率 \n　　客戶服務 - 專業處理客訴及貨款事宜，維護良好客戶關係",
    },
  ],
  skills: [
    "Nuxt.js",
    "Next.js",
    "Vue.js",
    "React.js",
    "TailwindCSS v3/v4",
    "HTML",
    "CSS",
    "JavaScript",
    "docker",
    "Sass",
    "Node.js",
    "Express.js",
    "Git",
    "GitLab",
    "swagger",
    "Figma",
    "PHP",
    "MySQL",
    "jQuery",
    "Java",
    "Python"
  ],
  projects: [
    {
      imageUrl: "/projects/art-bank.webp",
      title: "藝術銀行 官方網站",
      techStack: ["Nuxt3", "Vue3", "TailwindCSS", "GSAP", "swiper", "wordpress(CMS)","PHP", "MariaDB", "Docker", "Nginx", "Gitlab"],
      description:
        "前後端協作 | 大型官網重建 | SEO優化",
      logo: ConsultlyLogo,
      link: {
        label: "藝術銀行",
        href: "https://artbank.tfaf.org.tw/",
      },
    },
    {
      imageUrl: "/projects/china-air.webp",
      title: "中華航空 會員日",
      techStack: ["Nuxt3", "Vue3", "TailwindCSS", "GSAP", "swiper",  "Docker", "Gitlab"],
      description:
        "前端獨立開發 | 活動頁面 | SEO優化 | 多國語系",
      logo: ConsultlyLogo,
      link: {
        label: "中華航空 會員日",
        href: "https://members-event.china-airlines.com/promotion",
      },
    },
    {
      imageUrl: "/projects/fenc.webp",
      title: "遠東新世紀 官方網站",
      techStack: ["Nuxt3", "Vue3", "TailwindCSS", "GSAP", "swiper", "Spline", "Docker", "Gitlab"],
      description:
        "前端獨立開發 | 大型官網重建 | SEO優化 | 多國語系",
      logo: ConsultlyLogo,
      link: {
        label: "遠東新世紀",
        href: "https://www.fenc.com.tw/",
      },
    },
    {
      imageUrl: "/projects/unme.webp",
      title: "非我設計 Unme Design 官方網站",
      techStack: ["Nuxt3", "Vue3", "TailwindCSS", "GSAP", "swiper", "wordpress(CMS)","PHP", "MariaDB", "Docker", "Nginx", "Gitlab"],
      description:
        "全端獨立開發 | 中型官網重建 | SEO優化",
      logo: ConsultlyLogo,
      link: {
        label: "非我設計 Unme Design",
        href: "https://unmedesign.co/",
      },
    },
    {
      imageUrl: "/projects/chenbro.webp",
      title: "勤誠興業 CHENBRO 官方網站",
      techStack: ["Nuxt3", "Vue3", "TailwindCSS", "GSAP", "swiper","Docker", "Nginx", "Gitlab"],
      description:
        "前端協作 | 大型官網重建 | 多國語系",
      logo: ConsultlyLogo,
      link: {
        label: "勤誠興業 CHENBRO",
        href: "https://www.chenbro.com/",
      },
    },
    {
      imageUrl: "/projects/venti.webp",
      title: "幫推事務所 VentiVenti 官方網站",
      techStack: ["Nuxt3", "Vue3", "TailwindCSS", "GSAP", "wordpress(CMS)", "PHP", "MariaDB", "Docker", "Nginx", "Gitlab"],
      description:
        "前端協作 | 中型官網重建 | SEO優化 | 多國語系",
      logo: ConsultlyLogo,
      link: {
        label: "幫推事務所 VentiVenti Consulting",
        href: "https://ventiventi.tw/zh",
      },
    },
    {
      imageUrl: "/projects/cmp.webp",
      title: "勤美術館 CMP Inspiration 官方網站",
      techStack: ["Nuxt3", "Vue3", "TailwindCSS", "GSAP", "wordpress(CMS)", "PHP", "MariaDB", "Docker", "Nginx", "Gitlab"],
      description:
        "全端協作 | 中型官網重建 | SEO優化 | 多國語系",
      logo: ConsultlyLogo,
      link: {
        label: "勤美術館 CMP Inspiration",
        href: "https://cmp-inspiration.com.tw/",
      },
    },
    {
      imageUrl: "/projects/Blue-Alert.webp",
      title: "Blue Alert 藍色警戒",
      techStack: ["Side Project", "Vue3", "Sass", "Pinia","D3.js", "Chart.js", "Bootstrap5", "Git flow", "Fullcalendar", "GSAP", "PHP", "MySQL"],
      description:
        "全端協作 | 領導團隊 | 敏捷開發",
      logo: ConsultlyLogo,
      link: {
        label: "BlueAlert",
        href: "https://tibamef2e.com/cid101/g1/",
      },
    },
    {
      imageUrl: "/projects/broods.webp",
      title: "寵物醫院商城",
      techStack: [
        "Side Project",
        "JavaScript",
        "CSS3",
        "HTML",
      ],
      description: "前端獨立開發 | 原生JavaScript | Google Maps API",
      logo: ConsultlyLogo,
      link: {
        label: "Broods.com",
        href: "https://personal-project-iota.vercel.app/",
      },
    }
  ],
} as const;