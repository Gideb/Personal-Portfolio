import socialMedia from "../assets/images/project/project-social-media.jpg";
import ecommmerce from "../assets/images/project/project-ecommerce2.jpg";
import fitnessTracker from "../assets/images/project/project-fitness.jpg";
import taskManager from "../assets/images/project/project-task-manager.jpg";
import weatherApp from "../assets/images/project/project-weather.jpg";
import urlShortener from "../assets/images/project/project-url-shortener.jpg";
import uiDesign from "../assets/images/project/project-ui-design.jpg";
import expenseTracker from "../assets/images/project/project-expense-tracker.jpg";
import notesApp from "../assets/images/project/project-notes-app.jpg";
import codeuni from "../assets/images/project/project-codeuni.jpg";
import tutorPortal from "../assets/images/project/project-tutorPortal.png";
import luxebeauty from "../assets/images/project/project-luxebeauty.jpg";

const projects = [
  {
    id: 1,
    slug: "social-media-dashboard",
    title: "Social Media Analytics Dashboard",
    description:
      "A full-stack dashboard that aggregates and visualizes social media metrics from multiple platforms in one place.",
    image: socialMedia,
    category: "Web Application",
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Chart.js",
      "Passport.js",
      "Socket.io",
    ],
    overview:
      "This platform connects to Twitter, Instagram, and Facebook APIs to pull engagement metrics (likes, shares, comments, reach) and displays them in customizable dashboards with real-time updates and team collaboration features.",
    problem:
      "Social media managers waste time switching between platforms to track performance. I wanted a unified dashboard that centralizes analytics, saves time, and provides actionable insights.",
    solution:
      "I built a MERN stack app with OAuth authentication via Passport.js for each social platform. Data is fetched via scheduled cron jobs and stored in MongoDB. Socket.io pushes live updates when new posts are published. Charts and graphs visualize trends over time.",
    features: [
      "Connect multiple social accounts (Twitter, Instagram, Facebook, LinkedIn)",
      "Aggregated metrics: total engagement, follower growth, top posts",
      "Customizable dashboard with drag-and-drop widgets",
      "Real-time notifications when metrics change",
      "Post scheduling with calendar view",
      "Team collaboration: share dashboards with read/write roles",
      "Export reports as PDF or CSV",
      "Compare performance across platforms and date ranges",
      "Hashtag tracking and sentiment analysis",
      "Dark/light theme with responsive design for mobile access",
    ],
    challenges:
      "Handling API rate limits and different data structures across platforms was complex. I implemented a unified data schema and a queue system (Bull + Redis) to stagger API calls and retry failed requests gracefully.",
    learned:
      "I mastered OAuth flows for multiple providers, cron job scheduling with node-cron, real-time updates with WebSockets, and complex data aggregation from disparate sources. I also improved my charting and PDF generation skills.",
    github: "https://github.com/gideb/social-dashboard",
    liveDemo: "https://social-dashboard-demo.com",
    featured: true,
    year: 2025,
  },

  {
    id: 2,
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "A real-time weather dashboard that displays current conditions and 5-day forecasts for any city worldwide.",
    image: weatherApp,
    category: "Web Development",
    tech: ["React", "OpenWeather API", "Axios", "CSS Modules"],
    overview:
      "This web app fetches live weather data from the OpenWeather API and presents it in an intuitive dashboard with dynamic icons, temperature toggles (°C/°F), and search history.",
    problem:
      "Weather data can be overwhelming in raw API format. I wanted to create a clean, user-friendly interface that makes checking the weather quick and visually appealing.",
    solution:
      "I built a React app that consumes the OpenWeather API, manages loading/error states gracefully, stores recent searches in localStorage, and displays both current and forecast data in a card-based layout.",
    features: [
      "City search with autocomplete",
      "Current temperature, humidity, wind speed, and conditions",
      "5-day forecast with 3-hour intervals",
      "Toggle between Celsius and Fahrenheit",
      "Recent search history",
      "Background gradients that change based on weather condition",
      "Fully responsive design",
    ],
    challenges:
      "Handling API rate limits and asynchronous data fetching while maintaining a smooth UX was tricky. I implemented debounced search and loading skeletons to improve perceived performance.",
    learned:
      "I gained experience working with third-party APIs, managing asynchronous state with useEffect and useState, and implementing client-side caching with localStorage.",
    github: "https://github.com/gideb/weather-dashboard",
    liveDemo: "https://weather-demo.com",
    year: "2024",
    featured: true,
  },
  {
    id: 3,
    slug: "ui-design-system",
    title: "UI Component Library",
    description:
      "A reusable component library with buttons, modals, forms, and cards, built as a living style guide.",
    image: uiDesign,
    category: "Web Application",
    tech: ["React", "Storybook", "Styled Components", "TypeScript"],
    overview:
      "This project is a production-ready component library designed for consistency across applications. It includes dark mode support, accessibility features, and full documentation.",
    problem:
      "Many projects suffer from inconsistent UI because components are built from scratch each time. I wanted a scalable, documented system to speed up development and maintain design consistency.",
    solution:
      "I built a component library with Storybook for live documentation, TypeScript for type safety, and Styled Components for scoped theming. Components support props for variants (primary, secondary, danger) and sizes.",
    features: [
      "Button, Input, Modal, Card, and Toast components",
      "Dark/light theme toggle",
      "Responsive breakpoint utilities",
      "Form validation hooks",
      "Accessibility (ARIA labels, keyboard navigation)",
      "Storybook documentation with interactive examples",
      "Tree-shakable exports",
    ],
    challenges:
      "Ensuring components were truly reusable without too many props (prop drilling) led me to adopt React Context for theming and a compound component pattern for complex elements like modals.",
    learned:
      "I learned advanced TypeScript patterns, component composition techniques, and how to publish a package to npm. I also improved my understanding of accessibility standards (WCAG).",
    github: "https://github.com/gideb/ui-design-system",
    liveDemo: "https://storybook-demo.com",
    year: "2023",
    featured: false,
  },
  {
    id: 4,
    slug: "expense-tracker-api",
    title: "Expense Tracker API",
    description:
      "A RESTful backend for managing personal finances with user authentication, income/expense tracking, and spending analytics.",
    image: expenseTracker,
    category: "Web Development",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Mongoose"],
    overview:
      "This API allows users to register, log in, add transactions (income/expense), categorize them, and retrieve summaries like monthly spending or budget vs. actual reports.",
    problem:
      "Tracking expenses manually is error-prone. I wanted a secure, scalable backend that could power a future mobile or web app for personal finance management.",
    solution:
      "I built a Node.js/Express API with JWT authentication, MongoDB for data persistence, and Mongoose for schema validation. Endpoints include CRUD for transactions, category analytics, and date-filtered reports.",
    features: [
      "User registration and login with bcrypt hashing",
      "JWT-based protected routes",
      "Add, edit, delete, and list transactions",
      "Categories: Food, Transport, Bills, Entertainment, etc.",
      "Monthly and yearly spending summaries",
      "Budget limits per category with alerts",
      "Export data as CSV",
      "Input validation with express-validator",
    ],
    challenges:
      "Designing efficient MongoDB aggregation pipelines for spending summaries (e.g., total by category per month) was challenging. I optimized queries with indexes and pre-aggregated fields.",
    learned:
      "I deepened my knowledge of authentication/authorization, database indexing, and RESTful API design. I also learned to write unit tests with Jest and Supertest.",
    github: "https://github.com/gideb/expense-tracker-api",
    liveDemo: "https://expense-api-demo.com",
    year: "2026",
    featured: true,
  },
  {
    id: 5,
    slug: "notes-app",
    title: "Collaborative Notes App",
    description:
      "A full-stack MERN application where users can create, edit, organize, and share notes with others in real-time.",
    image: notesApp,
    category: "Web Application",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "Tailwind"],
    overview:
      "This is a complete note-taking platform with markdown support, tags, search, and real-time collaboration. Users can share notes with view or edit permissions.",
    problem:
      "Most note apps lack easy collaboration. I wanted to build a Google Docs-style experience where multiple users could edit a note simultaneously.",
    solution:
      "I built a MERN stack app with Socket.io for real-time updates. Notes are stored in MongoDB with version history. Sharing is handled via invitation links and role-based permissions (owner, editor, viewer).",
    features: [
      "User authentication (JWT)",
      "Create, read, update, delete notes",
      "Markdown editor with preview",
      "Tag-based organization and search",
      "Real-time collaboration with cursor position tracking",
      "Note version history and restore points",
      "Share notes via email or link with permission levels",
      "Dark mode toggle",
      "Rich text toolbar",
    ],
    challenges:
      "Syncing real-time edits without conflicts was the biggest challenge. I implemented Operational Transformation (OT) logic on the backend and used Socket.io rooms for document-specific broadcasting.",
    learned:
      "I learned real-time communication with WebSockets, conflict resolution strategies, and advanced MongoDB queries for tagging and search. I also improved my React state management with Zustand.",
    github: "https://github.com/gideb/notes-app",
    liveDemo: "https://notes-demo.com",
    year: "2023",
    featured: false,
  },
  {
    id: 6,
    slug: "task-manager-mobile",
    title: "Task Manager Mobile App",
    description:
      "A cross-platform mobile app for managing daily tasks with reminders, categories, and offline support.",
    image: taskManager,
    category: "Mobile Application",
    tech: [
      "React Native",
      "Expo",
      "SQLite",
      "React Navigation",
      "Push Notifications",
    ],
    overview:
      "This app helps users organize tasks by project, set due dates and priorities, receive reminders, and sync data locally when offline.",
    problem:
      "Many task apps require constant internet and have cluttered interfaces. I wanted a simple, offline-first mobile experience with native-like performance.",
    solution:
      "I built with React Native and Expo, using SQLite for local storage and AsyncStorage for settings. Push notifications are handled via Expo's notification service. The UI follows Material Design guidelines.",
    features: [
      "Create, edit, delete, and complete tasks",
      "Set due dates, priorities (High/Medium/Low), and repeat intervals",
      "Organize tasks by projects/categories",
      "Push notifications for upcoming due tasks",
      "Offline-first: all data stored locally, optional cloud backup",
      "Search and filter (by date, priority, project)",
      "Dark/light theme",
      "Home screen widget (Android)",
      "Biometric authentication for app lock",
    ],
    challenges:
      "Managing local database schema migrations and syncing with a future cloud backend required careful planning. I implemented a versioned SQLite schema and a sync queue.",
    learned:
      "I learned mobile-specific patterns like navigation stacks, native modules, push notification setup, and offline storage strategies. I also tested on both iOS and Android simulators.",
    github: "https://github.com/gideb/task-manager-mobile",
    liveDemo: "https://expo.dev/@gideb/task-manager",
    year: "2026",
    featured: false,
  },
  {
    id: 7,
    slug: "fitness-tracker",
    title: "Fitness Tracker App",
    description:
      "A full-stack mobile app that logs workouts, tracks progress with charts, and provides personalized exercise recommendations.",
    image: fitnessTracker,
    category: "Mobile Application",
    tech: [
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Victory Native (charts)",
      "JWT",
    ],
    overview:
      "This app allows users to record workouts (sets, reps, weight), view historical progress with graphs, set goals, and receive workout suggestions based on past performance.",
    problem:
      "Gym-goers often lack structured tracking. I wanted an app that makes logging workouts fast and provides visual feedback on progress over time.",
    solution:
      "I built a React Native frontend connected to a Node.js/Express/MongoDB backend. Workouts are stored in the cloud and synced across devices. Charts visualize strength gains and volume trends.",
    features: [
      "User authentication (JWT, refresh tokens)",
      "Exercise library with custom exercise creation",
      "Log workouts: sets, reps, weight, duration",
      "Progress charts (1RM, total volume over time)",
      "Set personal goals (e.g., squat 100kg by date)",
      "Workout templates and history",
      "REST API for syncing data",
      "Offline logging with background sync",
      "Push reminders for workout days",
    ],
    challenges:
      "Calculating 1-rep max trends from historical logs and displaying them on zoomable charts required efficient data aggregation on the backend and smooth rendering on mobile.",
    learned:
      "I improved my backend aggregation skills (MongoDB pipelines for time-series data) and learned charting libraries in React Native. I also implemented secure token refresh flows.",
    github: "https://github.com/gideb/fitness-tracker",
    liveDemo: "https://fitness-demo.com",
    year: "2020",
    featured: false,
  },
  {
    id: 8,
    slug: "ecommerce-product-page",
    title: "E-Commerce Product Page",
    description:
      "A fully responsive product page with image gallery, variant selection, cart management, and local storage persistence.",

    image: ecommmerce,
    category: "Mobile Application",
    tech: ["React", "Context API", "Tailwind CSS", "Framer Motion"],
    overview:
      "This UI component simulates an e-commerce product page, featuring a lightbox gallery, size/color pickers, quantity selector, and a mini-cart with add/remove functionality.",
    problem:
      "E-commerce product pages need to be both visually engaging and highly functional. I wanted to build a polished, production-ready component that handles all cart logic.",
    solution:
      "I built a React app with Context API for global cart state. The gallery includes thumbnail navigation and a lightbox modal. Cart data persists in localStorage so items survive page refresh.",
    features: [
      "Product image gallery with lightbox modal",
      "Thumbnail carousel",
      "Variant selection (size, color) with stock validation",
      "Quantity selector with min/max limits",
      "Add to cart with micro-interactions (framer motion)",
      "Mini-cart drawer with item list, quantity updates, and removal",
      "Cart total calculation",
      "LocalStorage persistence",
      "Mobile-first responsive design",
      "Smooth animations",
    ],
    challenges:
      "Keeping the cart UI in sync across multiple components (product page, mini-cart, header) required careful context design. I used useReducer for complex cart actions (add, remove, update quantity).",
    learned:
      "I mastered React Context + useReducer for global state, implemented accessible modal patterns, and improved my animation skills with Framer Motion. I also learned about localStorage hydration.",
    github: "https://github.com/gideb/ecommerce-product-page",
    liveDemo: "https://product-demo.com",
    year: "2021",
    featured: false,
  },
  {
    id: 9,
    slug: "url-shortener",
    title: "URL Shortener Service",
    description:
      "A scalable URL shortening service with custom aliases, click tracking, analytics, and expiration dates.",
    image: urlShortener,
    category: "Web Development",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis", "JWT"],
    overview:
      "This backend service converts long URLs into short codes, redirects users, and tracks clicks (referrer, geolocation, device type). It supports user accounts, custom slugs, and link expiration.",
    problem:
      "Short links are ubiquitous but often lack analytics. I wanted to build a lightweight, high-performance service with detailed click data and user management.",
    solution:
      "I built a Node.js/Express API with PostgreSQL for persistent storage and Redis for caching short links. Redirects are 301/302 with click logging via background jobs. Users can register to manage their links.",
    features: [
      "Public URL shortening without login",
      "User accounts: manage, edit, delete custom links",
      "Custom aliases (e.g., /my-link)",
      "Click analytics: total clicks, unique clicks, referrers, countries, devices",
      "Optional link expiration (date or click limit)",
      "QR code generation for each short link",
      "Rate limiting per IP",
      "API keys for programmatic shortening",
      "Admin dashboard for system stats",
    ],
    challenges:
      "Ensuring low-latency redirects while logging analytics without blocking was solved by using Redis as a fast lookup cache and queuing click logs to be batch-written to PostgreSQL.",
    learned:
      "I learned about caching strategies (Redis), background job queues (Bull), and database indexing for high-read workloads. I also implemented geolocation from IP addresses using a free API.",
    github: "https://github.com/gideb/url-shortener",
    liveDemo: "https://url-demo.com",
    year: "2022",
    featured: false,
  },
  {
    id: 10,
    slug: "tutor-portal",
    title: "Tutor Portal — Computing Programs for Every Stage",
    description:
      "A centralized web portal offering structured course outlines for 8 computing disciplines, from IT Foundations to Mobile App Development and Graphic Design.",
    image: tutorPortal,
    category: "Web Application",
    tech: [
      "PHP",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Local Storage",
      "Vercel",
    ],
    overview:
      "This platform serves as a digital gateway for students at different skill levels. It presents detailed, downloadable course outlines for eight distinct computing programs. Each 'portal' (e.g., Kids Coding, Web Development) contains a breakdown of modules, learning outcomes, and estimated durations.",
    problem:
      "Educational institutions often list program names without showing what is actually taught. Students struggle to compare courses like 'System Engineering' vs 'Software Development' before enrolling. There was no single, visual hub to explore the granular syllabus of each computing track.",
    solution:
      "I built a card-based portal interface where each program has a dedicated 'Open Portal' button. Clicking it reveals a dynamic modal or separate page containing the full course outline, weekly breakdown, required tools, and target audience—all styled consistently for easy comparison.",
    features: [
      "Hero section with animated headline for 'Computing Programs for Every Stage'",
      "8 distinct program cards (IT Foundation, Kids Coding, Web Dev, Software Dev, Database Admin, System Engineering, Mobile App Dev, Graphic Designing)",
      "Individual 'OPEN PORTAL' buttons that trigger detailed syllabus views",
      "Course outline details for each program: Modules, Duration, Prerequisites, Tools used",
      "Download as PDF feature for each outline",
      "Responsive grid layout (works on mobile, tablet, desktop)",
      "Progress tracking (local storage) to mark completed modules per program",
      "Search/filter to find programs by keyword (e.g., 'Python', 'SQL', 'UI/UX')",
      "Dark/Light mode toggle for improved readability",
      "Print-friendly course outline pages",
    ],
    challenges:
      "Structuring 8 unique syllabi without repeating content was tough. I created a central data model (JSON) that stores all modules for each program, then mapped it dynamically. Ensuring the 'OPEN PORTAL' animations didn't lag on lower-end devices required debouncing state changes.",
    learned:
      "I improved my skills in component composition (reusing a single 'OutlineModal' for 8 different data sets), managing complex state in React, and generating PDFs client-side using jsPDF. I also learned how to design for scanability—students read outlines in 30 seconds or less.",
    github: "https://github.com/gideb/tutor-portal",
    liveDemo: "https://tutor-portal-demo.com",
    year: "2024",
    featured: false,
  },
  {
    id: 11,
    slug: "luxe-beauty-brand",
    title: "Luxe Beauty Brand Identity",
    description:
      "Complete brand transformation with sophisticated visual identity and premium packaging design for a luxury skincare and cosmetics line.",
    image: luxebeauty,
    category: "Branding",
    tech: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Procreate",
      "Cinema 4D",
      "Figma",
      "Adobe InDesign",
    ],
    overview:
      "A full-spectrum brand identity project for a premium beauty client moving from generic retail to high-end positioning. Deliverables included logo system, color palette, typography, pattern library, packaging suite (boxes, jars, ribbons), and brand guidelines.",
    problem:
      "The client's existing brand felt dated and indistinguishable from drugstore competitors. They were launching a new 'Gold Elixir' serum line priced at $120+ but had no visual language that communicated luxury, purity, or efficacy to high-income consumers.",
    solution:
      "I created a minimalist-yet-opulent identity rooted in soft neutrals, champagne metallics, and organic curves. The logo combines a custom serif wordmark with a botanical monogram. Packaging uses textured paper, foil stamping, and magnetic closures. A full guidelines book ensures every touchpoint (from Instagram to shopping bags) feels cohesive.",
    features: [
      "Primary & secondary logo marks (horizontal, vertical, icon-only)",
      "Extended color palette: 8 colors (ivory, taupe, champagne, rose gold, deep plum, charcoal, blush, forest green)",
      "Typography system: Playfair Display (serif) + Montserrat (sans) for digital/print hierarchy",
      "Seamless pattern library (micro-floral, marble swirl, geometric diamond) for tissue paper and digital backgrounds",
      "Complete packaging suite: serum box, moisturizer jar, sample sachets, shopping bag, ribbon seal",
      "Social media kit: Instagram templates, story highlights covers, Reels lower thirds",
      "Brand guidelines PDF (48 pages): usage rules, spacing, color codes, forbidden applications",
      "Mockup library: 20+ photorealistic renders for lookbooks and pitch decks",
      "Custom illustrated botanical elements (rose, jasmine, sandalwood) for collateral",
      "Scent + texture descriptor language guidelines (e.g., 'velvet finish,' 'golden nectar')",
    ],
    challenges:
      "Balancing 'minimal luxury' with 'warm approachability'—too cold felt clinical, too ornate felt dated. I solved this by using soft matte finishes with small, unexpected accents (e.g., a single rose gold foil line inside every box). Also, ensuring the identity worked across tiny jar labels (1 inch) and billboards without losing legibility required three logo lockups.",
    learned:
      "I deepened my understanding of color psychology in the beauty space—champagne signals premium but blush builds trust. I also learned production-ready specs: die-cut templates, foil stamping compatible files, and Pantone matching for consistent printing across cardboard, glass, and plastic substrates.",
    client: "Luxe Beauty (confidential)",

    delivery:
      "Brand guidelines PDF + Master asset folder (2.4 GB) — fonts, logos in 5 formats (AI, EPS, SVG, PNG, JPG), patterns, mockups, social templates",
    testimonial:
      "Our sales increased 210% after the rebrand. For the first time, customers tell us our packaging 'looks like it costs $200.' The guidelines made onboarding our printers seamless.",
    github: "https://www.behance.net/gallery/luxe-beauty-identity",
    liveDemo: "https://luxebeauty-brand-portfolio.com",
    year: "2021",
    featured: true,
  },
  {
    id: 12,
    slug: "codeuni-website",
    title: "Codeuni University Website",
    description:
      "A modern, fully responsive university website showcasing a full spectrum of programming programs at every level — from beginner coding foundations to advanced software engineering degrees.",
    image: codeuni,
    category: "Web Development",
    tech: [
      "React",
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Payload CMS",
      "PostgreSQL",
      "Vercel",
    ],
    overview:
      "A flagship institutional website for Codeuni — a modern programming university. The platform features program catalogs, faculty profiles, dynamic admissions portals, event calendars, and student dashboards. Designed to convert prospective students while serving current enrollees with course materials and grade access.",
    problem:
      "Traditional university websites feel dated, hard to navigate, and fail to attract tech-savvy students. Codeuni needed a digital presence that reflects its cutting-edge curriculum — fast, visual, mobile-first, and built with the very technologies it teaches. The old site had 47% bounce rate and abysmal mobile performance.",
    solution:
      "I built a Next.js application with server-side rendering for SEO and instant page loads. The design uses bold typography, dark/light modes, and micro-interactions that signal 'modern tech.' A headless CMS allows admissions staff to update program details without touching code. Program pages feature curriculum previews, career outcomes, tuition tools, and alumni testimonials.",
    features: [
      "Hero section with animated code typing effect (rotating through: 'Python', 'React', 'Rust', 'AI')",
      "Program catalog: 15+ degrees (BSc, MSc, Diploma, Certificates) filterable by level, duration, or format (online/on-campus/hybrid)",
      "Individual program pages with: curriculum breakdown, learning outcomes, instructors, tuition calculator, application deadline countdown",
      "Faculty directory with search, research interests, and office hours booking",
      "Student portal: course enrollment, grade viewer, assignment submission, attendance tracker",
      "Virtual campus tour (360° photos + embedded walkthrough videos)",
      "Events & hackathon calendar with RSVP functionality",
      "Admissions workflow: online application, document upload, status tracking, offer letter generation",
      "Blog/News section: student spotlights, industry partnerships, research breakthroughs",
      "Full accessibility (WCAG 2.1 AA compliant) and responsive design (mobile-first)",
      "Real-time chat widget for prospective student inquiries",
      "Analytics dashboard for admin: application funnels, page performance, user demographics",
    ],
    challenges:
      "Balancing rich visual design with performance was critical — heavy animations on program cards caused layout shifts. I solved this by using Next.js image optimization and CSS transforms instead of JavaScript-driven animations. Also, the admissions workflow required secure document uploads (PDF, images) with virus scanning, which I implemented using AWS S3 + Lambda checks.",
    learned:
      "I gained deep experience with headless CMS architectures (Payload), role-based access control (student, faculty, admin, prospect), and building accessible mega-menus for large program catalogs. I also learned SEO strategies for academic institutions — schema markup for 'Course,' 'EducationalOrganization,' and 'Event' improved search visibility by 140%.",
    github: "https://github.com/gideb/codeuni-website",
    liveDemo: "https://codeuni-university-demo.com",
    year: "2023",
    featured: false,
  },
];

export default projects;
