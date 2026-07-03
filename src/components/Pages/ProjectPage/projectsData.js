export const featuredProjects = [
  {
    id: "health-guardian",
    title: "Smart Microservice Health Guardian",
    subtitle: "Microservice Monitoring",
    shortDescription: "A plug-and-play monitoring sidecar that uses statistical mathematics (not black-box AI) to learn the \"normal\" behavior of your services and detect anomalies in real-time.",
    problemSolved: "Traditional monitoring relies on static thresholds that trigger alert fatigue, or complex YAML setups. Subtle memory leaks and latency trends can create 'zombie services' that appear running but are degraded. I built this sidecar to learn normal baselines automatically and resolve alert fatigue.",
    keyFeatures: [
      "Real-time Monitoring: Sub-second updates for latency, error rates, and throughput.",
      "Adaptive Baselines: Uses Standard Deviation (Z-Score) to learn normal versus critical thresholds.",
      "Trend-Aware Warnings: Calculates Linear Regression Slope of metrics to trigger warning alerts early.",
      "Heartbeat Checks: Features a Dead Man's Switch checking for inactive nodes (>60s silent).",
      "Auto-Healing: Automatically issues restart commands for services stuck in critical states for >2 mins.",
      "Secure Dashboard: Protected by JWT Authentication and BCrypt password hashing.",
      "Notification Debounce: Intelligent alerting system that avoids notification spam.",
      "Modular Architecture: Decoupled React frontend and Node.js backend with lightweight agents."
    ],
    techStack: ["Node.js", "Express", "React", "MongoDB", "Mongoose", "Tailwind CSS", "JWT", "Telegram API"],
    resumeBullet: "Engineered a microservice health guardian sidecar utilizing Linear Regression and Z-Score mathematical algorithms for adaptive threshold anomaly detection and automated self-healing.",
    architecture: "Decoupled React dashboard client communicating with a centralized Node.js/Express backend which ingests real-time metrics and tracks agent heartbeats in MongoDB.",
    challenges: "Developing custom, lightweight math libraries in JavaScript for standard deviation and linear regression slope calculations without AI runtime overhead.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200",
    githubUrl: "https://github.com/dear-asutosh/Smart-Microservice-Health-Guardian",
    liveUrl: ""
  },
  {
    id: "portfolio-generator",
    title: "Profilio - AI Portfolio Generator",
    subtitle: "AI-Powered Web App",
    shortDescription: "A full-stack, AI-orchestrated portfolio generator that transforms a developer's raw experience (resume, GitHub, and LeetCode) into a stunning, production-ready website in under 60 seconds.",
    problemSolved: "Building a personal portfolio website is tedious and repetitive. Profilio automates content planning, Tailwind design, CSS glassmorphism styling, and custom JavaScript animations, bypassing standard templates to create unique, deployed portfolios instantly.",
    keyFeatures: [
      "AI Orchestration: 4-stage sequential LLM pipeline (Blueprint, HTML, CSS, and JS compilation).",
      "Model Fallbacks: Circuit breaker system mapping OpenRouter, NVIDIA NIM, and Groq fallback chains.",
      "Resume Parsing: Extracting structured JSON from PDF/DOCX using pdf-parse, mammoth, and Tesseract OCR.",
      "Integrations: Live repository, star, fork, and competitive coding stats fetched from GitHub and LeetCode.",
      "Instant Deployment: One-click publishing to public vanity URLs with real-time portfolio page analytics.",
      "Conversational Editor: Interactive chat dashboard supporting surgical section updates and design tweaks.",
      "Payments & Subscriptions: Premium tier enforcement using Razorpay payment gateway integration.",
      "Source Code Export: One-click download of clean, dependency-free HTML + CSS + JS files."
    ],
    techStack: ["React 19", "Node.js", "Express 5", "MongoDB", "Mongoose", "Tailwind CSS", "Framer Motion", "GSAP", "Razorpay"],
    resumeBullet: "Architected a multi-model 4-stage AI compilation pipeline utilizing OpenRouter, Groq, and NVIDIA NIM providers to generate fully functional, interactive portfolios from raw developer profiles.",
    architecture: "MERN Stack (React 19, Express 5, MongoDB Atlas) integrated with multi-provider LLM clients, OAuth authentication (Passport.js), Razorpay subscriptions, and asset hosting on Cloudinary.",
    challenges: "Synchronizing state across a sequential 4-stage content generation and styling chain while maintaining an active circuit breaker to redirect failing LLM endpoints in real-time.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    githubUrl: "https://github.com/dear-asutosh/ai-portfolio-generator",
    liveUrl: "https://profilio-portfolio-generator.vercel.app"
  },
  {
    id: "neeti-ai",
    title: "Neeti AI - Governance Intelligence OS",
    subtitle: "AI OS for Public Leaders",
    shortDescription: "India's first AI-native command center for public leaders, helping government officials, legislators, and administrators handle meeting intelligence, circular analytics, and constituency command.",
    problemSolved: "Public administrators are overwhelmed with fragmented data from meeting records, grievances, and circulars. Neeti AI aggregates these sources into a single dashboard for quick and structured decision-making.",
    keyFeatures: [
      "Strategic Dashboard: Direct summary of critical stats, real-time activity, and ward priorities.",
      "Meeting Intelligence: Recording/uploading audio to extract transcripts, action items, and conversational QA.",
      "Document Intelligence: PDF/document circular analysis using Groq, Llama 3.3-70B, and Whisper-Large-V3.",
      "Constituency Command: Tracking grievances and infrastructure project health with stakeholder directories.",
      "Legislative Speechwriter: Built-in document draft builder with tone settings and rich-text editing.",
      "Media Uploads: Live speech audio, reports, and photos managed securely with Cloudinary preset uploads.",
      "Authentication: Secure user login and authorization protocols backed by Firebase Auth.",
      "Email Communications: Automated email notifications and updates handled using EmailJS."
    ],
    techStack: ["React 18", "Vite", "Tailwind CSS", "Groq Cloud", "Llama 3.3", "Whisper API", "Firebase", "Cloudinary", "EmailJS"],
    resumeBullet: "Co-developed Neeti AI, India's first AI-native command center for public leaders, integrating Llama 3.3 and Whisper-Large-V3 for sub-second audio transcription and circular analysis.",
    architecture: "Zinc Architecture: Vite React client interacting with Firebase (Firestore, Auth, Storage) for real-time synchronization, utilizing Groq Cloud for serverless, high-speed inference.",
    challenges: "Building low-latency document OCR extraction and multi-speaker transcription workflows using remote inference models while ensuring secure Firestore rule validation.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200",
    githubUrl: "https://github.com/dear-asutosh/neeti-ai",
    liveUrl: "https://neeti-ai.vercel.app"
  }
];

export const clientProjects = [
  {
    id: "praveen-photography",
    title: "Praveen Photography Portfolio",
    description: "A premium, high-performance portfolio designed for a professional photographer. Features a smooth GSAP-animated masonry gallery preloader, infinite scrolling, interactive mouse effects, and a full-screen keyboard-navigable photo lightbox.",
    keyFeatures: [
      "Masonry Grid Gallery: Dynamic columns displaying high-quality photography captures.",
      "Infinite Scroll: Smooth content loading with animated loading indicators.",
      "Interactive Lightbox: Full-screen modal with ESC close and left-right arrow navigation.",
      "GSAP Micro-Animations: Hover floating card actions and preloader progress bar.",
      "Interactive Effects: SplashCursor and custom pointer cursor trails on user movements.",
      "Material Styling: Dark theme layout powered by Material Tailwind and React Aria."
    ],
    techStack: ["React 19", "Vite", "Tailwind CSS", "GSAP", "Framer Motion", "Lenis", "Material Tailwind", "React Aria"],
    galleryImages: [
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800",
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=800",
      "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=800"
    ],
    githubUrl: "https://github.com/dear-asutosh/Praveen-Photography-Portfolio",
    liveUrl: "https://praveen-photography.netlify.app"
  }
];

export const devTools = [
  {
    id: "leetstalker",
    title: "LeetStalker",
    description: "Because your friends won't tell you they are grinding. LeetStalker is a React application that lets you track your friends' LeetCode profiles, active streaks, and stats all in one place.",
    highlights: [
      "Streak Tracking: Displays current active daily streaks by analyzing the submission calendar.",
      "Leaderboard Podium: Features a top 3 streak leaderboard and crown badge rewards.",
      "Real-time Fetching: Directly requests data from the LeetCode GraphQL API.",
      "SEO Optimizations: Structured schema markup, sitemap, meta tags, and Google Search Console indexing."
    ],
    resumeLine: "Built a competitive coding tracker application enabling real-time LeetCode profile analytics, streak leaderboards, and CORS-bypass request routing.",
    techStack: ["React 19", "Vite", "Tailwind CSS", "GraphQL API", "Oxlint", "Vercel"],
    githubUrl: "https://github.com/dear-asutosh/LeetStalker",
    liveUrl: "https://leet-stalker.vercel.app"
  },
  {
    id: "leetsync-plus",
    title: "GitLeet",
    description: "A Chrome extension that automatically syncs your accepted LeetCode solutions to a selected GitHub repository, helping you build a coding portfolio on GitHub without friction.",
    highlights: [
      "One-Click Auth: Instant setup and repository mapping using secure GitHub OAuth.",
      "Automatic Sync: Commits accepted LeetCode submissions directly to GitHub in the background.",
      "Dark Mode UI: Fully featured dark mode interface across the entire extension dashboard."
    ],
    resumeLine: "Developed GitLeet, a Chrome extension that automates developer LeetCode solution syncing to GitHub using chrome.runtime message passing and GitHub API integrations.",
    techStack: ["TypeScript", "Chrome Extensions API", "React", "GitHub API", "CSS"],
    githubUrl: "https://github.com/dear-asutosh/GitLeet",
    liveUrl: ""
  },
  {
    id: "devsena-theme",
    title: "DevSena Ultra Dark VS Code Theme",
    description: "A minimalist, ultra-dark VS Code theme designed specifically for night coders, Java warriors, and terminal lovers to maximize focus and reduce eye strain.",
    highlights: [
      "Ultra-Dark Contrast: Optimizes visual comfort for long, late-night programming sessions.",
      "High-Contrast Syntax: Specially tuned color highlights for Java, JS, Python, Rust, and HTML/CSS.",
      "Semantic Highlighting: Integrates token styling across VS Code terminal and workspace UIs."
    ],
    resumeLine: "Created and published DevSena Ultra Dark, a custom VS Code theme optimizing visual comfort and syntax highlighting contrast for the developer community.",
    techStack: ["JSON", "VS Code Extension API", "Visual Studio Marketplace"],
    githubUrl: "https://github.com/dear-asutosh/DevSena-vsCode-Dark-Theme",
    liveUrl: "https://marketplace.visualstudio.com/items?itemName=AsutoshSahoo.devsena-dark",
    imageUrl: "https://ik.imagekit.io/DearAsutosh/Projects/theme?updatedAt=1753307684099"
  }
];
