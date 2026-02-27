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
  instagram: "https://instagram.com/nwknaver_",
  email: "mailto:rvnkrwn@gmail.com",
};

// Navigation Links
export const NAV_LINKS = [
  { name: "Projects", targetId: "projects" },
  { name: "Contact", targetId: "contact" },
  { name: "About", href: "/about" },
];

// Hero Section
export const HERO = {
  subtitle: "Hello, I'm",
  title: "Creative Developer",
  description: SITE.description,
  cta: {
    primary: { text: "View My Work", targetId: "projects" },
    secondary: { text: "Get in Touch", targetId: "contact" },
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
      slug: "web-portfolio",
      title: "Portfolio Website",
      category: "Web Developer",
      tagline: "A modern, minimalist portfolio showcasing my creative journey.",
      description:
        "Modern portfolio website with minimalist design and smooth animations, elegantly showcasing professional work and experience.",
      image: "/projects/web-portfolio.png",
      tags: ["Astro", "GSAP"],
      link: "https://rvnkrwn.leci.app",
      github: "https://github.com/rvnkrwn-dev/rvnkrwn-portfolio",
      overview: {
        purpose: "To create a strong online presence that reflects my personal brand and technical skills.",
        role: "Frontend Developer & UI/UX Designer",
        status: "Completed & Actively Maintained"
      },
      problemStatement: "As my career progressed, I needed a central hub to showcase my expanding portfolio of projects, skills, and professional journey in a visually engaging and high-performance way.",
      solution: "Developed a custom portfolio from scratch using Astro for optimal performance and SEO, paired with GSAP for complex, high-performance scroll animations to create an immersive user experience.",
      architecture: {
        frontend: "Astro, Vanilla CSS, GSAP",
        deployment: "Vercel",
        reasons: "Astro was chosen for its zero-JS by default approach ensuring lightning-fast load times. GSAP provided the robust animation capabilities needed for the scroll-driven storytelling."
      },
      features: [
        "High-performance scroll-triggered animations (Parallax, Reveal)",
        "Fully responsive and mobile-optimized design",
        "SEO-friendly static site generation",
        "Clean, maintainable component architecture"
      ],
      challenges: [
        {
          challenge: "Ensuring smooth 60fps animations across all devices without stuttering.",
          solution: "Optimized GSAP ScrollTrigger implementations and used hardware-accelerated CSS transforms (will-change) over layout-affecting properties."
        }
      ],
      impact: "Increased professional visibility and served as a direct testament to my frontend capabilities, helping secure new freelance opportunities."
    },
    {
      id: 2,
      slug: "puson",
      title: "PUSON",
      category: "Web Developer",
      tagline: "Innovative stunting data management platform for healthcare centers.",
      description:
        "Innovative web platform designed to enhance stunting data management for registered posyandu and puskesmas in Indonesia.",
      image: "/projects/web-puson.png",
      tags: ["Nuxt", "Tailwind"],
      link: "https://puson.zedis.live/",
      github: "https://github.com/rvnkrwn-dev",
      overview: {
        purpose: "To digitize and streamline the collection and analysis of child growth data to combat stunting.",
        role: "Full Stack Developer",
        status: "Production"
      },
      problemStatement: "Local healthcare centers (Posyandu & Puskesmas) in Indonesia historically relied on manual, paper-based records to track children's nutritional and growth data, leading to slow reporting, data loss, and delayed interventions for stunting.",
      solution: "Built a centralized web platform that allows health workers to quickly input, track, and visualize child growth metrics against WHO standards in real-time.",
      architecture: {
        frontend: "Nuxt 3, Vue.js, Vuex, Tailwind CSS",
        backend: "Node.js, Express REST API",
        database: "PostgreSQL",
        deployment: "VPS / Linux",
        reasons: "Nuxt offered excellent SSR capabilities for fast initial loads on lower-end devices common in remote healthcare centers. A relational database like PostgreSQL was essential for robust data integrity."
      },
      features: [
        "Real-time data visualization of growth charts",
        "Role-based access control for different healthcare workers",
        "Automated reporting and exporting capabilities",
        "Mobile-first responsive dashboard"
      ],
      challenges: [
        {
          challenge: "Designing an interface intuitive enough for users with limited technical literacy.",
          solution: "Conducted user research with actual health workers to simplify forms and used clear, consistent visual feedback for all actions."
        }
      ],
      impact: "Drastically reduced the time required to generate monthly stunting reports and improved data accuracy across multiple healthcare facilities."
    },
    {
      id: 3,
      slug: "kasir-leci",
      title: "Kasir Leci",
      category: "Mobile Apps",
      tagline: "Reliable Android POS application empowering local SMEs.",
      description:
        "Android POS application for SMEs with inventory management, sales reporting, receipt printing, and offline support.",
      image: "/projects/apk-leci-kasir.png",
      tags: ["Flutter"],
      link: "https://kasir.leci.app/",
      github: "https://github.com/rvnkrwn-dev",
      overview: {
        purpose: "To provide an affordable, easy-to-use Point of Sale system tailored for Micro, Small, and Medium Enterprises (SMEs).",
        role: "Lead Mobile Developer",
        status: "Production & Actively Maintained"
      },
      problemStatement: "Many small businesses struggle with manual transaction recording and inventory tracking. Existing POS systems were either too expensive, required constant internet connectivity, or were overly complex.",
      solution: "Developed an intuitive Android POS native app using Flutter that works smoothly offline and syncs data to the cloud when a connection is available.",
      architecture: {
        frontend: "Flutter, Dart",
        backend: "Node.js (Sync API)",
        database: "SQLite (Local), PostgreSQL (Cloud)",
        deployment: "Google Play Store",
        reasons: "Flutter allowed rapid UI development with native-like performance. SQLite was critical for the local-first, offline-capable architecture."
      },
      features: [
        "Offline-first transaction processing",
        "Bluetooth thermal printer integration for physical receipts",
        "Dynamic inventory and stock management",
        "Comprehensive daily and monthly sales reporting"
      ],
      challenges: [
        {
          challenge: "Ensuring reliable data synchronization between local SQLite and the cloud database without conflicts.",
          solution: "Implemented a robust queue-based sync mechanism with conflict resolution policies favoring the latest local transaction timestamps."
        }
      ],
      impact: "Helped over 50 local SMEs digitize their sales processes, significantly reducing accounting errors and stock discrepancies."
    },
    {
      id: 4,
      slug: "naradev",
      title: "Naradev",
      category: "Web Developer",
      tagline: "A modern, editorial full-stack article platform for engineering insights.",
      description:
        "A modern, editorial full-stack article platform for engineering insights. Features Markdown support, multi-language (i18n), and an intuitive management dashboard.",
      image: "/projects/naradev.png",
      tags: ["Nuxt", "Tailwind"],
      link: "https://naradev.leci.app/",
      github: "https://github.com/rvnkrwn-dev",
      overview: {
        purpose: "To create a premium reading experience for sharing deep-dive engineering articles and technical insights.",
        role: "Full Stack Developer",
        status: "Completed"
      },
      problemStatement: "Existing blogging platforms often lacked the specific formatting capabilities needed for technical content, such as robust code highlighting, complex markdown support, and native internationalization.",
      solution: "Built a custom editorial platform that natively understands complex Markdown, providing authors with a rich text editing experience and readers with an elegant, distraction-free UI.",
      architecture: {
        frontend: "Nuxt 3, Tailwind CSS",
        backend: "Nuxt Server Routes (Nitro)",
        database: "MongoDB",
        deployment: "Vercel",
        reasons: "Nuxt 3 provided a seamless full-stack developer experience. MongoDB's document structure was a natural fit for storing highly variable article content and metadata."
      },
      features: [
        "Full syntax-highlighted Markdown and MDX support",
        "Built-in i18n for English and Indonesian languages",
        "Custom content management dashboard for authors",
        "Optimized reading typography and dark/light modes"
      ],
      challenges: [
        {
          challenge: "Rendering heavy Markdown content with complex code blocks quickly without degrading performance.",
          solution: "Implemented server-side rendering (SSR) for markdown parsing and edge caching to serve articles instantly to readers."
        }
      ],
      impact: "Successfully created an authoritative space for technical writing, improving engagement metrics such as average time on page compared to standard blogging sites."
    },
    {
      id: 5,
      slug: "prabu-maju-sukses",
      title: "Prabu Maju Sukses Mandiri",
      category: "Web Developer",
      tagline: "Professional company profile for a leading civil infrastructure contractor.",
      description:
        "A professional company profile website for a civil infrastructure and construction contractor in Indonesia, showcasing their services and extensive project portfolios.",
      image: "/projects/company-profile-prabu.png",
      tags: ["Company Profile", "Web Design"],
      link: "https://prabumajusuksesmandiri.com",
      github: "https://github.com/rvnkrwn-dev",
      overview: {
        purpose: "To establish a strong digital presence and credibility for a traditional construction company.",
        role: "Frontend Developer & UI/UX Designer",
        status: "Completed"
      },
      problemStatement: "The company lacked a modern website, making it difficult for potential clients to verify their credentials, view past projects, or contact them easily.",
      solution: "Designed and developed a highly professional, visually authoritative company profile website prioritizing trust, clear service offerings, and high-quality portfolio showcases.",
      architecture: {
        frontend: "Astro, Tailwind CSS",
        backend: "N/A (Static Site)",
        deployment: "Hostinger",
        reasons: "A static site generator was ideal for a company profile that doesn't require frequent dynamic updates, guaranteeing maximum security and speed."
      },
      features: [
        "Dynamic project portfolio gallery with filtering",
        "Contact form with direct WhatsApp integration",
        "Performance-optimized image delivery for high-res construction photos",
        "SEO optimization for construction-related keywords"
      ],
      challenges: [
        {
          challenge: "Organizing a large volume of project photos and specifications without overwhelming the user.",
          solution: "Created a categorised, lazy-loaded gallery system that allows users to quickly filter projects by type (e.g., Road, Building, Bridge)."
        }
      ],
      impact: "Significantly improved the company's brand perception and resulted in an uptick in inbound business inquiries through the new digital channel."
    }
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
      icon: "instagram",
      label: "Instagram",
      value: "nwknaver_",
      link: SOCIAL_LINKS.instagram,
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
