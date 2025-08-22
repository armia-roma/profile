// Portfolio data configuration
const portfolioData = {
    // Skills data
    skills: [
        {
            title: "Frontend Development",
            icon: `<svg class="category-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>`,
            description: "Building responsive, interactive user interfaces with modern frameworks and smooth user experiences.",
            tags: ["React", "Vue.js", "React Native", "TypeScript", "Tailwind CSS", "Vuetify"]
        },
        {
            title: "Backend & APIs",
            icon: `<svg class="category-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3z"/>
            </svg>`,
            description: "Developing scalable server-side solutions, REST APIs, and database architectures for reliable performance.",
            tags: ["Node.js", "Express.js", "Laravel", "MongoDB", "MySQL", "REST APIs"]
        },
        {
            title: "Tools & Collaboration",
            icon: `<svg class="category-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
            </svg>`,
            description: "Leveraging modern development tools and practices for efficient teamwork and code quality.",
            tags: ["Git & GitHub", "Zustand", "React Query", "Agile", "Performance Optimization", "Google Maps API"]
        }
    ],

    // Projects data
    projects: [
        {
            id: "pokemon",
            title: "Pokémon Explorer",
            description: "A NextJS application that lets users explore and discover Pokémon with detailed information, stats, and interactive features.",
            image: "pockemoncover.jpeg",
            tags: ["React", "NextJS", "TypeScript", "Pokemon API", "TailwindCSS", "Chakra UI"],
            link: "https://pokemon-puce-nu.vercel.app/",
            github: null,
            detailedDescription: "A modern NextJS application that allows users to browse through Pokémon data, view detailed information including stats, abilities, and evolutions. Features include search functionality, filtering by type, and responsive design for seamless experience across all devices.",
            images: ["pockemoncover.jpeg", "pockemondetails.png", "pockemlist.jpeg"]
        },
        {
            id: "restaurant",
            title: "Restaurant Ordering",
            description: "A React app that allows customers to scan a QR code, browse the menu, and place orders.",
            image: "restaurant-1.jpg",
            tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
            link: "https://restaurant-two-orpin.vercel.app/categories",
            github: null,
            detailedDescription: "In-Room Dining Platform enhances the hotel dining experience by allowing guests to browse restaurant categories, explore menu items, and add selections to their cart. Users can seamlessly place orders from their rooms, ensuring a convenient and efficient dining experience.",
            images: ["restaurant-1.jpg", "restaurant-3.png", "restaurant-4.png", "restaurant-5.png"]
        },
        {
            id: "kyc",
            title: "KYC Management",
            description: "KYC (Know Your Customer) application that helps businesses verify their users.",
            image: "kyc-2.png",
            tags: ["Vue.js", "Vuetify", "Node.js", "Express.js", "MongoDB"],
            link: null,
            github: [
                { label: "Backend Repo", url: "https://github.com/armia-roma/kyc-backend" },
                { label: "Frontend Repo", url: "https://github.com/armia-roma/kyc-frontend" }
            ],
            detailedDescription: "KYC Management System streamlines user verification by allowing individuals to register, submit KYC documents, and track approval status. Only admin users have the authority to review applications, approve/reject KYC submissions, view reports, and manage the KYC list.",
            images: ["kyc-2.png", "kyc-3.png", "kyc-1.png"]
        },
        {
            id: "key-one",
            title: "Key One Properties",
            description: "Showcase land properties with a built-in lead form to help interested buyers reach out easily.",
            image: "key1.png",
            tags: ["Next.js", "Vuetify", "Node.js", "Express.js", "MongoDB"],
            link: "https://holiday-frontend-liart.vercel.app/",
            github: null,
            detailedDescription: "Property Management Platform simplifies real estate listings and lead generation. Users can explore properties, submit inquiries, and connect with agents via an intuitive landing page. Each listing includes images, descriptions, pricing, and agent details.",
            images: ["key1.png", "key2.png", "key3.webp", "key4.webp"]
        },
        {
            id: "game-hub",
            title: "Game Hub",
            description: "A responsive React app to browse and filter games by category.",
            image: "game-hub.png",
            tags: ["React", "Zustand", "React Query", "Tailwind CSS", "Chakra UI"],
            link: "https://gilded-unicorn-9d8a64.netlify.app/",
            github: null,
            detailedDescription: "Game Hub is a clean web application built with React that allows users to explore games and filter them by categories. Uses Zustand for state management and React Query for efficient data fetching and caching.",
            images: ["game-hub.png"]
        },
        {
            id: "towing",
            title: "Towing Service",
            description: "Towing service app that helps users request roadside assistance.",
            image: "towing1.png",
            tags: ["React", "Tailwind CSS", "React Native", "Laravel", "MySQL"],
            link: null,
            github: [
                { label: "Backend Repo", url: "https://github.com/armia-roma/Tareeqk-backend" },
                { label: "Frontend Repo", url: "https://github.com/armia-roma/Tareeqk-frontend" }
            ],
            detailedDescription: "A smart towing request platform that helps users get quick roadside help by connecting them to nearby service providers in real time.",
            images: ["login.png", "tow5.png", "towing1.png", "towing3.png", "ta2.jpeg", "ta3.jpeg", "ta1.jpeg"]
        },
        {
            id: "erp",
            title: "Do ERP",
            description: "An ERP system built to help businesses manage their core operations smoothly and efficiently.",
            image: "erp1.webp",
            tags: ["Vue.js", "Vuetify", "Vuex", "Bootstrap", "Axios"],
            link: null,
            github: null,
            detailedDescription: "Worked on the frontend of an ERP system, building key modules like orders, invoices, and delivery notes. Created smart forms and lists with filters, search, and sorting capabilities.",
            images: ["erp1.webp", "erp2.webp", "erp4.webp", "erp5.webp"]
        },
        {
            id: "food-order",
            title: "Food Order Management",
            description: "A full-stack web app for managing orders and delivery.",
            image: "new.png",
            tags: ["React", "Node.js", "MongoDB"],
            link: null,
            github: null,
            detailedDescription: "This is a web app built with React + Node.js + MongoDB. It helps users track their orders, with authentication, live updates, and responsive design.",
            images: ["foodorder2.png", "new.png", "12.webp", "4.webp"]
        }
    ],

    // Contact information
    contact: [
        {
            icon: "fas fa-envelope",
            title: "Email Me",
            value: "armiageorge249@gmail.com",
            link: "mailto:armiageorge249@gmail.com"
        },
        {
            icon: "fas fa-phone",
            title: "Call Me",
            value: "+971 55 716 1304",
            link: "tel:+971557161304"
        },
        {
            icon: "fab fa-github",
            title: "GitHub",
            value: "armia-roma",
            link: "https://github.com/armia-roma"
        },
        {
            icon: "fab fa-linkedin",
            title: "LinkedIn",
            value: "armia-habib",
            link: "https://www.linkedin.com/in/armia-habib/"
        }
    ],

    // Technology logos
    logos: [
        { name: "Angular", src: "./logos/angular.svg" },
        { name: "HTML5", src: "./logos/html5.svg" },
        { name: "CSS3", src: "./logos/css3.svg" },
        { name: "JavaScript", src: "./logos/javascript.svg" },
        { name: "NPM", src: "./logos/npm.svg" },
        { name: "Node.js", src: "./logos/nodejs.svg" },
        { name: "React", src: "./logos/React.svg" },
        { name: "Next.js", src: "./logos/next.js.svg" },
        { name: "TypeScript", src: "./logos/ts.svg" },
        { name: "Vue.js", src: "./logos/vuejs.svg" }
    ]
};
