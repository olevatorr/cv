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
  bio: "",
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
      imageUrl: "https://i.ibb.co/jzcSLkP/Blue-Alert.png",
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
      imageUrl: "https://i.ibb.co/mFjJKN5/broods.png",
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
      imageUrl: "",
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
      imageUrl: "",
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
      imageUrl: "",
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
      imageUrl: "",
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
  bio: "您好，我是陳昇志，目前居住於桃園中壢。我於2024年7月完成 Tibame 中壢職訓中心前端工程師培訓課程。作為一名轉職的前端工程師，我對網頁開發技術充滿熱情，持續學習 HTML5、CSS3、JavaScript 和 Vue3 等最新技術。我的求知慾驅使我不斷探索前端開發的各個領域，從響應式設計到性能優化，不斷擴展自己的專業知識。\n\n學習經歷\n　　在 Tibame 的學習過程中，我展現了強烈的學習能力和積極的態度。我完成了一個個人專題，主要學習原生 JavaScript 的用法，並自主開發了一個 side project，使用 Vue3 環境實現各式小功能，以練習 Vue 以及外部 API 的使用。此外，我擔任了7人團隊專題「BlueAlert藍色警戒」的組長，負責制定專案日程表、跨團隊溝通協調、解決技術難題、分配工作並追蹤進度。這些經驗極大地提升了我的項目管理和領導能力。\n\n　　在課程中，我深入學習了 HTML5、CSS3、JavaScript、SASS、Vue3、Vite 和 Pinia 等前端技術和框架。其中，我對 Vue3 的掌握尤為出色，能夠熟練運用 Options API、Composition API 和 Script Setup 三種寫法，並深刻理解各個生命週期的特性。\n\n職場經歷\n　　在轉職前，我在全球知名科技公司 PNY Technologies Asia Pacific Limited 擔任業務專員，該公司是 NVIDIA 的 AIC 合作夥伴，專門生產高品質 PC 組件。在這個角色中，我展現了卓越的執行力和高效率。我負責維護客戶關係並開發新業務，這需要我具備出色的溝通技巧和洞察力。我精確管理業務計劃、預測控制、協商和報價流程，確保每個環節都準確無誤。\n\n　　我全權負責管理多個線上商城（PChome/MOMO/蝦皮）並規劃促銷活動。通過我的努力和策略，主力平台 PChome 以及其他 B2B 交易的銷售數據達到每月 1~2 千萬的規模，展現了我的高度責任心和出色的業績表現。\n\n　　在上一份工作中，我於華夏玻璃股份有限公司擔任國內外業務員。工作涵蓋業務開發、新產品開發、報價、訂單處理、生產排程、海運訂艙、內銷出貨安排、客訴處理及貨款等多個方面。在我的管理下，月銷售額從原本的 400~600 萬提升至 2000 萬，相當於每月出貨約 60 個 40 呎高櫃。這一成果是通過仔細的溝通、建立良好的 SOP 和提高處理速度實現的，大大提升了客戶的信任度。\n\n個人特質與技能\n　　我善於運用邏輯思考來分析複雜問題，並設計出高效的前端解決方案。憑藉良好的時間管理能力，我能夠同時處理多個項目，並按時完成開發目標。我的快速學習能力和自我解決問題的能力是我的主要優勢，使我能夠迅速適應新的技術環境和挑戰。\n\n職業發展規劃\n　　對於未來的職業發展規劃：\n1. 短期（一到三年），計劃穩固既有的前端基礎，並開始接觸和學習其他前端框架及相關知識。這將幫助我在實際項目中更加靈活地運用不同的技術解決方案。\n2. 中期（三到五年），目標是向後端和全端開發方向拓展。考慮到技術更新的快速步伐，仍會持續學習新興技術，確保自己在這個瞬息萬變的行業中保持競爭力。\n3. 長期來看，根據業界需求不斷調整自己的目標，持續精進技術實力。我相信，只有不斷學習和適應，才能在這個充滿機遇和挑戰的 IT 領域中實現長遠的職業發展。",
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
      badges: [null],
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
      company: "PNY Technologies Asia Pacific Limited 必恩威亞太有限公司",
      link: "https://www.pny.com.tw/tw/",
      badges: [null],
      title: "業務專員",
      logo: ConsultlyLogo,
      start: "2021.10",
      end: "2024.2",
      description:
        "NVIDIA的AIC合作夥伴，專門生產高品質PC組件。透過有效的跨部門溝通和精準的時間管理，持續達成銷售目標。 \n \n　　多平台運營 - 全權負責管理PChome、MOMO、蝦皮等多個線上商城 \n　　顯著業績提升 - 半年內將蝦皮商城月銷售額從0提升至200-300萬 \n　　業務流程優化 - 精確管理業務計劃、預測控制和報價流程 \n　　物流優化 - 與電商物流中心合作，建立SOP提高效率 \n　　客戶關係管理 - 運用出色的溝通技巧和洞察力開發新業務 \n　　促銷活動規劃 - 策劃並執行有效的促銷策略，提升銷售業績 \n　　市場分析 - 提升分析能力和預測市場趨勢的效率",
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
        "台灣最大日用品玻璃廠。運用強大的溝通技巧和高效的時間管理策略，提升工作效率。 \n \n　　業務開發 - 積極開拓新客戶並發展新產品，擴大市場份額 \n　　訂單全程管理 - 從報價到出貨安排，確保流程順暢 \n　　危機談判 - 疫情期間成功協商漲價應對物價上漲，實現業績70%成長 \n　　持續學習 - 積極學習專業知識，提升跨部門合作能力 \n　　物流協調 - 負責海運訂艙和內銷出貨安排，優化配送效率 \n　　客戶服務 - 專業處理客訴及貨款事宜，維護良好客戶關係",
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
      imageUrl: "https://i.ibb.co/jzcSLkP/Blue-Alert.png",
      title: "Blue Alert 藍色警戒",
      techStack: ["Side Project", "Vue3", "Sass", "Pinia","D3.js", "Chart.js", "Bootstrap5", "Git flow", "Fullcalendar", "GSAP", "PHP", "MySQL"],
      description:
        `帶領七人團隊開發全端網頁應用程式，運用Vue3的script setup/Composition API/Options API進行前端開發，整合多元函式庫以提升使用者體驗，並以PHP、MySQL實作後端解決方案，同時串接外部API。 \n \n我負責的為\n前台: \n　　首頁切版/功能 - [ GSAP卷軸動畫、GSAP數字動畫、D3台灣地圖渲染、Chart.js圖表渲染、Vue3對比圖功能、Vue3問卷調查、GSAP輪播 ] \n　　客服機器人 - [ Vue3對話顯示、GSAP打字動畫 ] \n\n後台: \n　　Bootstrap5 切版(全後台)\n　　管理員系統 - [ Pinia狀態管理、cookies暫存 ] \n\nPHP - [ 新增/修改含圖片處理模板 ]\n\nMySQL - [ 資料庫所有Table邏輯串接以及資料搭建、效能優化 ]\n\n其他 - [ 制定專案日程表、組員溝通協調、技術難題解決、工作分配與進度追蹤 ]`,
      logo: ConsultlyLogo,
      link: {
        label: "BlueAlert",
        href: "https://tibamef2e.com/cid101/g1/",
      },
    },
    {
      imageUrl: "https://i.ibb.co/mFjJKN5/broods.png",
      title: "寵物醫院商城",
      techStack: [
        "Side Project",
        "JavaScript",
        "CSS3",
        "HTML",
      ],
      description: "運用原生JavaScript開發全方位的獸醫院網站，實作預約掛號和電子商務等進階功能，藉此強化核心JS技能，並展現DOM操作和LocalStorage應用的專業能力。 \n \n我實現的功能包括\n前端效果: \n　　AOS動畫效果 - [ 使用原生JS實現Animate On Scroll效果 ] \n　　Google Maps整合 - [ 運用Google Maps API渲染每個醫院位置 ] \n\n會員系統: \n　　註冊/登入功能 - [ 使用LocalStorage實現資料儲存和驗證 ]\n\n電子商務: \n　　商品展示 - [ 使用陣列物件方式動態渲染商品卡片 ] \n　　購物車功能 - [ LocalStorage實現新增/修改購物車內容 ] \n　　折扣碼系統 - [ 實現折扣碼輸入和總金額動態計算 ] \n　　商品篩選 - [ 使用filter方法實現商品篩選功能 ]\n\n其他: \n　　原生JS技巧展示 - [ DOM操作、事件處理、非同步編程 ] \n　　效能優化 - [ 代碼重構、最佳實踐應用 ]",
      logo: ConsultlyLogo,
      link: {
        label: "Broods.com",
        href: "https://personal-project-iota.vercel.app/",
      },
    },
    {
      imageUrl: "",
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
      imageUrl: "",
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
      imageUrl: "",
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
      imageUrl: "",
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