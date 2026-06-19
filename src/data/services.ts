export const serviceSection = {
  title: "Our Services",
  subTitle:
    "Comprehensive digital solutions designed to help your business succeed in today's competitive marketplace.",
  serviceList: [
    {
      image: "/images/s1.png",
      title: "Software Consultancy",
      description:
        "Expert guidance on software architecture, technology selection, and digital transformation strategies.",
      slug: "software-consultancy",
      subtitle: "Expert guidance for your digital transformation journey",
      icon: "fa-cogs",
      overview:
        "Our software consultancy services provide expert guidance on software architecture, technology selection, and digital transformation strategies. We help businesses make informed decisions about their technology stack and development approach.",
      keyFeatures: [
        "Technology Stack Assessment",
        "Architecture Design & Review",
        "Digital Transformation Strategy",
        "Code Quality Audits",
        "Performance Optimization",
        "Security Assessment",
        "Scalability Planning",
        "Team Training & Mentoring",
      ],
      benefits: [
        "Reduced development costs and time-to-market",
        "Improved system performance and reliability",
        "Enhanced security and compliance",
        "Better scalability for future growth",
        "Optimized development processes",
        "Risk mitigation and technical debt reduction",
      ],
      process: [
        {
          step: 1,
          title: "Discovery & Assessment",
          description:
            "We analyze your current systems, processes, and business requirements to understand your unique challenges.",
          icon: "fa-search",
          duration: "1-2 weeks",
        },
        {
          step: 2,
          title: "Strategy Development",
          description:
            "Based on our findings, we develop a comprehensive strategy tailored to your business goals and technical needs.",
          icon: "fa-lightbulb-o",
          duration: "1 week",
        },
        {
          step: 3,
          title: "Implementation Planning",
          description:
            "We create detailed roadmaps and implementation plans with clear milestones and deliverables.",
          icon: "fa-map-o",
          duration: "1 week",
        },
        {
          step: 4,
          title: "Execution & Support",
          description:
            "We guide you through implementation and provide ongoing support to ensure successful outcomes.",
          icon: "fa-rocket",
          duration: "Ongoing",
        },
      ],
      pricing: [
        {
          name: "Consultation",
          price: "£150/hour",
          features: [
            "Initial assessment",
            "Technology recommendations",
            "Basic documentation",
            "Email support",
          ],
        },
        {
          name: "Strategy Package",
          price: "£2,500",
          features: [
            "Comprehensive assessment",
            "Detailed strategy document",
            "Implementation roadmap",
            "2 weeks support",
            "Team presentation",
          ],
          popular: true,
        },
        {
          name: "Full Transformation",
          price: "Custom Quote",
          features: [
            "End-to-end consultation",
            "Hands-on implementation",
            "Team training",
            "Ongoing support",
            "Performance monitoring",
          ],
        },
      ],
      caseStudy: {
        title: "E-commerce Platform Modernization",
        client: "Regional Retail Chain",
        challenge:
          "Legacy e-commerce platform causing performance issues and limiting growth potential.",
        solution:
          "Conducted comprehensive assessment and recommended modern microservices architecture with cloud migration strategy.",
        results: [
          "50% improvement in page load times",
          "99.9% uptime achievement",
          "30% increase in conversion rates",
          "Reduced infrastructure costs by 40%",
        ],
        image: "/images/case-1.jpg",
      },
      faq: [
        {
          question: "How long does a typical consultancy engagement last?",
          answer:
            "It varies based on scope, but most engagements range from 2-12 weeks for strategy development, with ongoing support available.",
        },
        {
          question: "Do you work with existing development teams?",
          answer:
            "We often collaborate with in-house teams to provide guidance, training, and support throughout the process.",
        },
        {
          question: "What technologies do you specialize in?",
          answer:
            "We have expertise across modern web technologies, cloud platforms, databases, and emerging technologies like AI/ML and blockchain.",
        },
      ],
      nextService: "creative-development",
      prevService: "e-commerce-specialist",
    },
    {
      image: "/images/s2.png",
      title: "Game Development",
      subtitle: "Immersive game experiences that bring ideas to life",
      description:
        "End-to-end game development services focused on immersive gameplay, performance, and engaging player experiences across mobile, PC, and web platforms.",

      slug: "game-development",
      icon: "fa-gamepad",

      overview:
        "Our game development services combine creative storytelling, advanced game mechanics, and cutting-edge technology to build engaging and scalable gaming experiences. From concept to deployment, we craft games that are fun, optimized, and built for long-term player retention. Explore our studio work at MindItGames for real-world examples of our gaming projects.",

      // 🔗 Added external link reference to MindItGames
      studioLink: {
        label: "Explore MindItGames",
        url: "https://vibemotion.co.uk/minditgames/",
      },

      keyFeatures: [
        "Mobile Game Development (iOS & Android)",
        "PC & Web-Based Games",
        "2D & 3D Game Design",
        "Unity & Unreal Engine Development",
        "Multiplayer & Online Systems",
        "Game UI/UX Design",
        "AI-driven Game Mechanics",
        "Performance Optimization",
      ],

      benefits: [
        "Highly engaging player experiences",
        "Scalable architecture for multiplayer games",
        "Cross-platform compatibility",
        "Optimized performance for mobile and PC",
        "Strong retention-focused design",
        "Monetization-ready game systems",
      ],

      process: [
        {
          step: 1,
          title: "Concept & Game Design",
          description:
            "We define gameplay mechanics, storylines, and core loop design to shape the game vision.",
          icon: "fa-lightbulb",
          duration: "1-2 weeks",
        },
        {
          step: 2,
          title: "Art & Prototype",
          description:
            "We build early prototypes with visual direction, character design, and interactive mockups.",
          icon: "fa-paint-brush",
          duration: "2-4 weeks",
        },
        {
          step: 3,
          title: "Development",
          description:
            "We develop core gameplay systems, physics, AI, and multiplayer functionality using modern engines.",
          icon: "fa-code",
          duration: "4-16 weeks",
        },
        {
          step: 4,
          title: "Testing & Launch",
          description:
            "We rigorously test gameplay, fix bugs, and optimize performance before global release.",
          icon: "fa-rocket",
          duration: "1-3 weeks",
        },
      ],

      pricing: [
        {
          name: "Prototype Game",
          price: "£2,500",
          features: [
            "Basic gameplay prototype",
            "Core mechanics demo",
            "Simple UI",
            "Single level build",
            "2 weeks support",
          ],
        },
        {
          name: "Full Mobile Game",
          price: "£10,000+",
          popular: true,
          features: [
            "Complete game development",
            "iOS & Android support",
            "In-app purchases",
            "Ads integration",
            "Backend services",
            "3 months support",
          ],
        },
        {
          name: "Multiplayer Game",
          price: "£18,000+",
          features: [
            "Real-time multiplayer",
            "Matchmaking system",
            "Server architecture",
            "Anti-cheat systems",
            "6 months support",
          ],
        },
      ],

      caseStudy: {
        title: "Multiplayer Arcade Battle Game",
        client: "Indie Game Publisher",
        challenge:
          "Build a real-time multiplayer mobile game with smooth gameplay and global matchmaking.",
        solution:
          "Developed a Unity-based multiplayer system with scalable backend and real-time syncing.",
        results: [
          "200K+ downloads in first month",
          "99.2% server uptime",
          "60% player retention after 7 days",
          "Cross-platform launch success",
        ],
        image: "/images/case-2.jpg",
      },

      faq: [
        {
          question: "What game engines do you use?",
          answer:
            "We primarily use Unity and Unreal Engine depending on project requirements and performance needs.",
        },
        {
          question: "Can you build multiplayer games?",
          answer:
            "Yes, we specialize in real-time multiplayer systems, matchmaking, and scalable backend architecture.",
        },
        {
          question: "Do you publish games to app stores?",
          answer:
            "Yes, we handle full deployment including App Store and Google Play submissions.",
        },
      ],

      nextService: "project-management",
      prevService: "creative-development",
    },
    {
      image: "/images/s3.png",
      title: "Project Management",
      description:
        "Streamlined project delivery using agile methodologies to ensure on-time, on-budget results.",
      slug: "project-management",
      subtitle: "Streamlined delivery with agile methodologies",
      icon: "fa-tasks",
      overview:
        "Our project management services ensure your digital projects are delivered on time, within budget, and to the highest quality standards. We use proven agile methodologies and modern tools to keep projects on track and stakeholders informed.",
      keyFeatures: [
        "Agile & Scrum Methodologies",
        "Project Planning & Scheduling",
        "Risk Management",
        "Quality Assurance",
        "Stakeholder Communication",
        "Resource Allocation",
        "Progress Tracking",
        "Change Management",
      ],
      benefits: [
        "Improved project success rates",
        "Better communication and transparency",
        "Reduced project risks and delays",
        "Optimized resource utilization",
        "Higher quality deliverables",
        "Increased stakeholder satisfaction",
      ],
      process: [
        {
          step: 1,
          title: "Project Initiation",
          description:
            "We define project scope, objectives, and success criteria while assembling the right team for your project.",
          icon: "fa-flag",
          duration: "1 week",
        },
        {
          step: 2,
          title: "Planning & Setup",
          description:
            "Detailed project planning including timelines, milestones, and resource allocation using agile frameworks.",
          icon: "fa-calendar",
          duration: "1-2 weeks",
        },
        {
          step: 3,
          title: "Execution & Monitoring",
          description:
            "Active project management with regular sprints, daily standups, and continuous monitoring of progress.",
          icon: "fa-cogs",
          duration: "Project duration",
        },
        {
          step: 4,
          title: "Delivery & Closure",
          description:
            "Final delivery, documentation, knowledge transfer, and project retrospective for continuous improvement.",
          icon: "fa-check-circle",
          duration: "1 week",
        },
      ],
      pricing: [
        {
          name: "Basic PM",
          price: "£100/hour",
          features: [
            "Project planning",
            "Progress tracking",
            "Weekly reports",
            "Email communication",
            "Basic documentation",
          ],
        },
        {
          name: "Full Service PM",
          price: "£2,000/month",
          features: [
            "Dedicated project manager",
            "Daily standups",
            "Sprint planning",
            "Risk management",
            "Stakeholder meetings",
          ],
          popular: true,
        },
        {
          name: "Enterprise PM",
          price: "Custom Quote",
          features: [
            "Multiple project coordination",
            "Portfolio management",
            "Custom reporting",
            "Training & coaching",
            "Process optimization",
          ],
        },
      ],
      caseStudy: {
        title: "Multi-Platform Digital Transformation",
        client: "Financial Services Company",
        challenge:
          "Complex digital transformation involving multiple teams, vendors, and legacy system integrations.",
        solution:
          "Implemented agile project management framework with clear governance, regular communication, and risk mitigation strategies.",
        results: [
          "Delivered 3 months ahead of schedule",
          "15% under budget completion",
          "Zero critical issues post-launch",
          "95% stakeholder satisfaction",
        ],
        image: "/images/case-1.jpg",
      },
      faq: [
        {
          question: "What project management methodologies do you use?",
          answer:
            "We primarily use Agile/Scrum methodologies but can adapt to Waterfall, Kanban, or hybrid approaches based on project needs.",
        },
        {
          question: "How do you handle project changes and scope creep?",
          answer:
            "We use formal change management processes with impact assessments and stakeholder approval to manage scope changes effectively.",
        },
        {
          question: "What tools do you use for project management?",
          answer:
            "We use industry-standard tools like Jira, Asana, Monday.com, and Microsoft Project, adapting to your preferred platforms.",
        },
      ],
      nextService: "e-commerce-specialist",
      prevService: "creative-development",
    },
    {
      image: "/images/s4.png",
      title: "E-commerce Specialist",
      description:
        "Complete e-commerce solutions from platform selection to payment integration and optimization.",
      slug: "e-commerce-specialist",
      subtitle: "Complete solutions for online business success",
      icon: "fa-shopping-cart",
      overview:
        "Our e-commerce specialist services provide end-to-end solutions for online businesses. From platform selection to payment integration and optimization, we help you create powerful e-commerce experiences that drive sales and customer satisfaction.",
      keyFeatures: [
        "Platform Selection & Setup",
        "Custom E-commerce Development",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Processing Systems",
        "Mobile Commerce",
        "SEO & Marketing Integration",
        "Analytics & Reporting",
      ],
      benefits: [
        "Increased online sales and revenue",
        "Improved customer experience",
        "Streamlined operations",
        "Better inventory management",
        "Enhanced security and compliance",
        "Mobile-optimized shopping experience",
      ],
      process: [
        {
          step: 1,
          title: "Business Analysis",
          description:
            "We analyze your business model, target audience, and requirements to recommend the best e-commerce approach.",
          icon: "fa-chart-line",
          duration: "1-2 weeks",
        },
        {
          step: 2,
          title: "Platform & Design",
          description:
            "Selection of optimal e-commerce platform and creation of user-friendly, conversion-focused designs.",
          icon: "fa-store",
          duration: "2-3 weeks",
        },
        {
          step: 3,
          title: "Development & Integration",
          description:
            "Custom development, payment integration, and connection with your existing business systems.",
          icon: "fa-code",
          duration: "4-8 weeks",
        },
        {
          step: 4,
          title: "Launch & Optimization",
          description:
            "Testing, launch, and ongoing optimization based on performance data and user feedback.",
          icon: "fa-rocket",
          duration: "2 weeks + ongoing",
        },
      ],
      pricing: [
        {
          name: "Starter Store",
          price: "£2,500",
          features: [
            "Template customization",
            "Up to 50 products",
            "Basic payment integration",
            "Mobile responsive",
            "3 months support",
          ],
        },
        {
          name: "Professional Store",
          price: "£7,500",
          features: [
            "Custom design",
            "Unlimited products",
            "Advanced features",
            "Multi-payment options",
            "6 months support",
          ],
          popular: true,
        },
        {
          name: "Enterprise Solution",
          price: "£15,000+",
          features: [
            "Custom development",
            "ERP integration",
            "Multi-store management",
            "Advanced analytics",
            "12 months support",
          ],
        },
      ],
      caseStudy: {
        title: "Fashion Retailer Online Expansion",
        client: "Independent Fashion Brand",
        challenge:
          "Traditional brick-and-mortar retailer needed to establish strong online presence with inventory synchronization.",
        solution:
          "Built custom e-commerce platform with real-time inventory sync, size guides, and virtual try-on features.",
        results: [
          "300% increase in online sales",
          "45% improvement in conversion rate",
          "Real-time inventory accuracy",
          "25% reduction in returns",
        ],
        image: "/images/case-2.jpg",
      },
      faq: [
        {
          question: "Which e-commerce platforms do you work with?",
          answer:
            "We work with Shopify, WooCommerce, Magento, and can build custom solutions. We recommend the best platform based on your specific needs.",
        },
        {
          question: "Do you handle payment gateway setup?",
          answer:
            "Yes, we integrate with all major payment gateways including Stripe, PayPal, Square, and can set up multiple payment options.",
        },
        {
          question: "Can you migrate from an existing e-commerce platform?",
          answer:
            "We provide seamless migration services preserving your data, SEO rankings, and customer information.",
        },
      ],
      nextService: "software-consultancy",
      prevService: "project-management",
    },
  ],
};

export const getServiceBySlug = (slug: string) => {
  return serviceSection.serviceList.find((service) => service.slug === slug);
};

export const getAllServices = () => {
  return serviceSection.serviceList;
};
