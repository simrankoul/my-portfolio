export const portfolioData = {
  personal: {
    name: "Alex Thompson",
    title: "Project Coordinator & Manager",
    tagline: "Orchestrating success through strategic planning and seamless team collaboration",
    email: "alex.thompson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/alexthompson",
    github: "github.com/alexthompson",
    portfolio: "alexthompson.dev"
  },
  
  about: {
    summary: "Results-driven Project Coordinator with 6+ years of experience delivering complex projects on time and within budget. Expert in Agile methodologies, stakeholder management, and cross-functional team leadership. Proven track record of improving operational efficiency and driving organizational success. Currently seeking opportunities to leverage my project management expertise in dynamic, growth-oriented environments.",
    highlights: [
      "Successfully coordinated 25+ projects worth $5M+ in total value",
      "Improved project delivery timelines by 35% through process optimization",
      "Managed cross-functional teams of up to 20 members",
      "PMP Certified with expertise in Agile and Waterfall methodologies"
    ]
  },
  
  skills: [
    { category: "Project Management", items: ["Agile/Scrum", "Waterfall", "Risk Management", "Budget Planning", "Resource Allocation"] },
    { category: "Leadership", items: ["Team Coordination", "Stakeholder Management", "Conflict Resolution", "Strategic Planning", "Change Management"] },
    { category: "Tools & Software", items: ["Jira", "Asana", "Microsoft Project", "Trello", "Confluence"] },
    { category: "Core Competencies", items: ["Communication", "Time Management", "Problem Solving", "Data Analysis", "Process Improvement"] }
  ],
  
  experience: [
    {
      id: 1,
      company: "TechCorp Solutions",
      role: "Senior Full Stack Developer",
      duration: "Jan 2022 - Present",
      location: "San Francisco, CA",
      description: "Leading development of enterprise SaaS platform serving 50k+ users.",
      achievements: [
        "Architected and built microservices infrastructure reducing API latency by 40%",
        "Implemented real-time collaboration features using WebSocket technology",
        "Mentored team of 4 developers and conducted code reviews",
        "Reduced deployment time by 60% through CI/CD pipeline optimization"
      ]
    },
    {
      id: 2,
      company: "StartupHub Inc",
      role: "Full Stack Developer",
      duration: "Jun 2020 - Dec 2021",
      location: "Remote",
      description: "Developed customer-facing web applications for B2B SaaS startup.",
      achievements: [
        "Built responsive React applications with 99.9% uptime",
        "Integrated third-party APIs including Stripe, SendGrid, and Twilio",
        "Improved page load performance by 55% through code optimization",
        "Collaborated with design team to implement pixel-perfect UI components"
      ]
    },
    {
      id: 3,
      company: "Digital Innovations",
      role: "Junior Developer",
      duration: "Aug 2019 - May 2020",
      location: "New York, NY",
      description: "Contributed to web development projects for diverse client portfolio.",
      achievements: [
        "Developed responsive websites using modern JavaScript frameworks",
        "Participated in agile development process and daily standups",
        "Fixed 100+ bugs and implemented new features across multiple projects",
        "Gained expertise in RESTful API development and database design"
      ]
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "EcoTrack - Sustainability App",
      description: "Mobile-first web application helping users track and reduce their carbon footprint. Features real-time data visualization and personalized recommendations.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "AWS"],
      highlights: [
        "10k+ active users within 3 months of launch",
        "Featured in TechCrunch as 'App of the Week'",
        "Reduced average user carbon footprint by 25%"
      ],
      link: "https://ecotrack.example.com",
      github: "https://github.com/example/ecotrack"
    },
    {
      id: 2,
      title: "DevCollab - Developer Community Platform",
      description: "Open-source collaboration platform connecting developers worldwide. Includes real-time code sharing, video calls, and project management tools.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebRTC", "Docker"],
      highlights: [
        "5k+ GitHub stars and 200+ contributors",
        "Processing 1M+ API requests daily",
        "Used by developers in 50+ countries"
      ],
      link: "https://devcollab.example.com",
      github: "https://github.com/example/devcollab"
    },
    {
      id: 3,
      title: "SmartFinance - Personal Finance Manager",
      description: "Intuitive budgeting and expense tracking application with AI-powered insights and financial goal setting.",
      technologies: ["React Native", "Python", "FastAPI", "TensorFlow", "Stripe"],
      highlights: [
        "Helped users save average of $500/month",
        "4.8/5 star rating on app stores",
        "Automated categorization with 95% accuracy"
      ],
      link: "https://smartfinance.example.com",
      github: "https://github.com/example/smartfinance"
    }
  ],
  
  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      duration: "2015 - 2019",
      details: "GPA: 3.8/4.0, Dean's List, Computer Science Honor Society"
    }
  ],
  
  certifications: [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer"
  ]
};

export default portfolioData;