// Site Configuration
export const SITE = {
  title: "Portfolio - Creative Developer",
  description:
    "I craft immersive digital experiences that blend creativity with cutting-edge technology.",
  author: "REVAN KURNIAWAN",
  name: "Revan Kurniawan",
  role: "SOFTWARE DEVELOPER",
  email: "rvnkrwn@gmail.com",
  url: "https://rvnkrwn@gmail.com",
};

// Social Media Links
export const SOCIAL_LINKS = {
  github: "https://github.com/rvnkrwn-dev",
  linkedin: "https://www.linkedin.com/in/rvnkrwn/",
  twitter: null,
  email: "mailto:rvnkrwn@gmail.com",
};

// Navigation Links
export const NAV_LINKS = [
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
  { name: "About", href: "/about" },
];

// Hero Section
export const HERO = {
  subtitle: "Hello, I'm",
  title: "Creative Developer",
  description: SITE.description,
  cta: {
    primary: { text: "View My Work", href: "#projects" },
    secondary: { text: "Get in Touch", href: "#contact" },
  },
};

// Stats
export const STATS = [
  { number: "3+", label: "Years Experience" },
  { number: "20+", label: "Projects Completed" },
  { number: "15+", label: "Happy Clients" },
  { number: "100", suffix: "%", label: "Client Satisfaction" },
];

// Projects
export const PROJECTS = {
  sectionLabel: "Selected Work",
  sectionTitle: ["Featured", "Projects"],
  sectionDescription:
    "A selection of projects that represent my approach to design and development.",
  items: [
    {
      id: 1,
      title: "Portfolio Website",
      category: "Web Developer",
      description:
        "Modern portfolio website with minimalist design and smooth animations, elegantly showcasing professional work and experience.",
      image: "/projects/web-portfolio.png",
      tags: ["Astro", "GSAP"],
      link: "https://rvnkrwn.leci.app",
    },
    {
      id: 2,
      title: "PUSON",
      category: "Web Developer",
      description:
        "Innovative web platform designed to enhance stunting data management for registered posyandu and puskesmas in Indonesia.",
      image: "/projects/web-puson.png",
      tags: ["Nuxt", "Tailwind"],
      link: "https://puson.zedis.live/",
    },
    {
      id: 3,
      title: "Kasir Leci",
      category: "Mobile Apps",
      description:
        "Android POS application for SMEs with inventory management, sales reporting, receipt printing, and offline support.",
      image: "/projects/apk-leci-kasir.png",
      tags: ["Flutter"],
      link: "https://kasir.leci.app/",
    },
  ],
};

// Contact
export const CONTACT = {
  sectionLabel: "Get in Touch",
  sectionTitle: ["Let's Work", "Together"],
  description: "Available for freelance projects and full-time opportunities.",
  methods: [
    {
      icon: "email",
      label: "Email",
      value: SITE.email,
      link: `mailto:${SITE.email}`,
    },
    {
      icon: "github",
      label: "GitHub",
      value: "@rvnkrwn-dev",
      link: SOCIAL_LINKS.github,
    },
    {
      icon: "linkedin",
      label: "LinkedIn",
      value: "/in/rvnkrwn",
      link: SOCIAL_LINKS.linkedin,
    },
    {
      icon: "twitter",
      label: "Twitter",
      value: "@yourhandle",
      link: null,
    },
  ],
};

// About Page
export const ABOUT = {
  pageLabel: "About",
  pageTitle: ["Creative", "Developer"],
  intro: `Hi, I'm ${SITE.name}, a creative developer passionate about building intuitive and impactful digital solutions. Currently pursuing a Bachelor's degree in Informatics Engineering at Telkom University Purwokerto, with a focus on creating user-friendly products that solve real-world problems.`,
  paragraphs: [
    "Starting my journey as a developer in 2021, I've worked on various web and mobile projects, from Point of Sale applications for SMEs to custom solutions for freelance clients.",
    "My approach combines technical expertise with attention to design details, ensuring every solution I build is not only functional but also pleasant to use.",
    "Outside of coding, I continuously sharpen my skills by learning new technologies and actively sharing knowledge with the developer community.",
  ],
  stats: [
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "15+", label: "Happy Clients" },
  ],
  skills: {
    sectionLabel: "Expertise",
    sectionTitle: "Skills",
    categories: [
      {
        title: "Frontend",
        items: [
          "Nuxt / Vue.js",
          "TypeScript / JavaScript",
          "HTML5 / CSS3 / Sass",
          "Tailwind / Styled Components",
          "GSAP / Framer Motion",
        ],
      },
      {
        title: "Backend",
        items: [
          "Node.js / Express",
          "REST APIs / GraphQL",
          "PostgreSQL / MongoDB",
          "Authentication / Security",
        ],
      },
      {
        title: "Design",
        items: [
          "UI/UX Design",
          "Figma / Adobe XD",
          "Prototyping / Wireframing",
          "Design Systems",
        ],
      },
      {
        title: "Tools",
        items: [
          "Git / GitHub",
          "Docker / CI/CD",
          "Vercel",
          "Agile / Scrum",
          "Testing / Debugging",
        ],
      },
    ],
  },
  experience: {
    sectionLabel: "Journey",
    sectionTitle: "Experience",
    timeline: [
      {
        date: "2025 - Present",
        title: "Owner & Lead Developer",
        company: "Leci Kasir",
        description:
          "Leading the design, development, and management of an Android-based Point of Sale application tailored for SMEs, featuring integrated inventory management, transaction processing, and reporting systems.",
      },
      {
        date: "2025 - Present",
        title: "Backend Developer Intern",
        company: "Cazh Academy",
        description:
          "Responsible for developing data management systems and implementing authentication solutions, while contributing to backend performance optimization.",
      },
      {
        date: "2021 - Present",
        title: "Freelance Software Developer",
        company: "Self-Employed",
        description:
          "Delivering end-to-end development of web and mobile applications for diverse clients, specializing in modern technology implementation and custom business solutions.",
      },
    ],
  },
  cta: {
    title: "Let's Work Together",
    description:
      "Available for freelance projects and full-time opportunities.",
    buttonText: "Get in Touch",
    buttonLink: "/#contact",
  },
};
