export const portfolioData = {
  personal: {
    name: "Antoine Fourneyron",
    email: "antoinefourneyron@gmail.com",
    phone: "+33 7 69 44 78 23",
    location: "Ivry-sur-Seine (94200)",
    linkedin: "https://www.linkedin.com/in/antoine-fourneyron/",
    github: "https://github.com/afon300",
    githubUsername: "afon300",
    efreiEmail: "antoine.fourneyron@efrei.net",
    translations: {
      fr: {
        title: "Étudiant Ingénieur - IT for Finance & Data",
        bio: "Étudiant en Master 1 IT for Finance à l'EFREI, je suis passionné par les enjeux de transformation et de pilotage stratégique liés à l'analyse de données. Fort de mon expérience entrepreneuriale et de ma rigueur analytique, j'ai à cœur de traduire des besoins métiers complexes en spécifications techniques claires, et d'optimiser les processus financiers.",
        available: "RECHERCHE STAGE M1 (5 MOIS) DÈS NOV. 2026",
        heroTitle: "IT Finance & & Data Engineering",
        contactBtn: "Me Contacter",
        cvBtn: "Télécharger CV",
        sections: {
          about: "À propos",
          projects: "Projets Phares",
          skills: "Compétences",
          path: "Parcours",
          certs: "Certifications"
        },
        contact: {
          subtitle: "N'hésitez pas à me contacter pour échanger sur vos projets.",
          personalEmail: "Email Personnel",
          academicEmail: "Email Académique",
          phone: "Téléphone",
          location: "Localisation"
        }
      },
      en: {
        title: "Engineering Student - IT for Finance & Data",
        bio: "Master's student in IT for Finance at EFREI, I am passionate about the transformation and strategic management challenges related to data analysis. Drawing on my entrepreneurial experience and analytical rigor, I am dedicated to translating complex business needs into clear technical specifications, and optimizing financial processes.",
        available: "SEEKING M1 INTERNSHIP (5 MONTHS) FROM NOV. 2026",
        heroTitle: "IT Finance & & Data Engineering",
        contactBtn: "Contact Me",
        cvBtn: "Download CV",
        sections: {
          about: "About",
          projects: "Key Projects",
          skills: "Skills Dashboard",
          path: "Career Path",
          certs: "Certifications"
        },
        contact: {
          subtitle: "Feel free to reach out to discuss your projects.",
          personalEmail: "Personal Email",
          academicEmail: "Academic Email",
          phone: "Phone",
          location: "Location"
        }
      }
    }
  },
  formation: [
    {
      school: "EFREI – École d'ingénieurs du Numérique",
      period: "Sept. 2023 - 2028 (En cours)",
      fr: {
        degree: "Programme Ingénieur du Numérique – Équivalent Master",
        specialization: "IT for Finance (Big Data, Intelligence Artificielle, Mathématiques Appliquées)",
        details: ["Spécialisation : IT for Finance", "Programmation Orientée Objet", "Algorithmique", "Bases de Données (SQL)", "Probabilités et Statistiques"]
      },
      en: {
        degree: "Digital Engineering Master's Program",
        specialization: "IT for Finance (Big Data, Artificial Intelligence, Applied Mathematics)",
        details: ["Specialization: IT for Finance", "Object-Oriented Programming", "Algorithms", "Databases (SQL)", "Probability & Statistics"]
      }
    },
    {
      school: "Lycée Albert de Mun",
      period: "Juin 2023 & 2022",
      fr: {
        degree: "Baccalauréat STI2D – Mention Bien",
        details: ["Olympiades de Mathématiques | Lauréat de l’Académie de Paris (Rigueur analytique)", "Mention Bien au Baccalauréat"]
      },
      en: {
        degree: "STI2D Baccalaureate – Honors",
        details: ["Mathematics Olympiads | Paris Academy Laureate (Analytical rigor)", "With Honors"]
      }
    }
  ],
  experience: [
    {
      company: "BikeAware (Startup)",
      period: "Fév. 2024 - Présent",
      fr: {
        role: "Co-fondateur & Étudiant-Entrepreneur",
        details: ["Pilotage du cycle de vie du produit et définition de la roadmap fonctionnelle pour un système de détection IoT par IA pour cyclistes (ESP32-S3).", "Coordination technique entre le développement matériel et logiciel (C/C++) pour assurer un flux temps réel (<0,8s).", "Gestion de projet Agile (Scrum), analyse des besoins utilisateurs et prototypage aboutissant au statut d’étudiant-entrepreneur."]
      },
      en: {
        role: "Co-founder & Student-Entrepreneur",
        details: ["Product lifecycle management and functional roadmap definition for an AI-based IoT detection system for cyclists (ESP32-S3).", "Technical coordination between hardware and software development (C/C++) to ensure real-time flow (<0.8s).", "Agile project management (Scrum), user needs analysis, and prototyping leading to student-entrepreneur status."]
      }
    },
    {
      company: "Indépendant / Freelance",
      period: "Sept. 2019 - Juin 2023",
      fr: {
        role: "Technicien, Conseil & Réparateur Informatique",
        details: ["Analyse des besoins clients, conseil technique et résolution de problématiques matérielles complexes en totale autonomie.", "Gestion des priorités et structuration d’importants volumes de données dans le respect strict des délais et exigences clients."]
      },
      en: {
        role: "IT Technician, Consultant & Repairer",
        details: ["Client needs analysis, technical advice, and resolution of complex hardware issues completely autonomously.", "Priority management and structuring of large data volumes in strict compliance with deadlines and client requirements."]
      }
    }
  ],
  projects: [
    {
      tech: ["Data", "Modélisation", "KPI", "Wi-Fi logs"],
      link: null,
      fr: {
        title: "Next-Gen Airport Challenge (Qatar Innovation) - 2026",
        description: "Gestion de Projet Data & Modélisation",
        details: ["Cadrage et élaboration d'une solution d'intelligence unifiant des sources de données complexes (Wi-Fi logs, XOVIS).", "Modélisation de processus et définition de KPIs métier pour identifier les goulots d'étranglement de l'aéroport HIA."]
      },
      en: {
        title: "Next-Gen Airport Challenge (Qatar Innovation) - 2026",
        description: "Data Project Management & Modeling",
        details: ["Scoping and development of an intelligence solution unifying complex data sources (Wi-Fi logs, XOVIS).", "Process modeling and definition of business KPIs to identify bottlenecks at HIA airport."]
      }
    },
    {
      tech: ["Python", "Streamlit", "Conception Produit", "Finance"],
      link: null,
      fr: {
        title: "Plateforme d'Analyse Financière & Boursière - 2025",
        description: "Conception Produit, Python, Streamlit",
        details: ["Conception fonctionnelle d'un dashboard d'aide à la décision pour le backtesting d'actifs (Actions, Crypto, Forex).", "Traduction d'exigences métiers complexes en spécifications techniques (calcul de la Value at Risk 95%, prévisions).", "Intégration d'un moteur d'analyse de sentiment (NLP) pour répondre aux besoins d'analyse macro-économique des utilisateurs."]
      },
      en: {
        title: "Financial & Stock Market Analysis Platform - 2025",
        description: "Product Design, Python, Streamlit",
        details: ["Functional design of a decision-support dashboard for asset backtesting (Stocks, Crypto, Forex).", "Translation of complex business requirements into technical specifications (calculation of 95% Value at Risk, forecasts).", "Integration of a sentiment analysis engine (NLP) to meet users' macroeconomic analysis needs."]
      }
    },
    {
      tech: ["C11", "Architecture Système", "TCP", "Multi-threadé"],
      link: "https://github.com/afon300/CChat",
      fr: {
        title: "CChat - Serveur TCP Multi-threadé - 2024",
        description: "Architecture Système, C11",
        details: ["Définition de l’architecture logicielle et conception d’une application de messagerie cross-platform (Linux/Windows).", "Gestion des contraintes de sécurité et de synchronisation des flux réseau dans un environnement client-serveur complexe."]
      },
      en: {
        title: "CChat - Multi-threaded TCP Server - 2024",
        description: "System Architecture, C11",
        details: ["Definition of software architecture and design of a cross-platform messaging application (Linux/Windows).", "Management of security constraints and synchronization of network flows in a complex client-server environment."]
      }
    },
    {
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      link: "https://github.com/afon300/stock-market-data-analysis",
      fr: {
        title: "Analyse de Données Boursières",
        description: "Développement d'un script pour récupérer et traiter des données financières via API.",
        details: ["Récupération via API Yahoo Finance", "Visualisation de la volatilité avec Seaborn", "Modèles statistiques pour identification de corrélations"]
      },
      en: {
        title: "Stock Market Data Analysis",
        description: "Development of a script to retrieve and process financial data via API.",
        details: ["Retrieval via Yahoo Finance API", "Volatility visualization with Seaborn", "Statistical models for volume correlation identification"]
      }
    }
  ],
  skills: {
    moa: [
      { name: "Méthodologie Agile (Scrum)", level: 95 },
      { name: "Modélisation de processus", level: 90 },
      { name: "Recueil de besoins", level: 90 },
      { name: "Spécifications techniques", level: 85 }
    ],
    finance: [
      { name: "Backtesting & KPIs", level: 90 },
      { name: "Value at Risk (VaR)", level: 85 },
      { name: "Analyse Macro-économique", level: 80 },
      { name: "Produits financiers", level: 80 }
    ],
    technique: [
      { name: "Python (Stack PyData)", level: 95 },
      { name: "C/C++", level: 85 },
      { name: "Architectures Systèmes", level: 85 },
      { name: "SQL & Bases de données", level: 90 }
    ]
  },
  certifications: [
    { name: "Cisco Cybersecurity", issuer: "Cisco", date: "2023" },
    { name: "Microsoft Azure Fundamentals", issuer: "Microsoft", date: "2024" },
    { name: "Cisco Intro to Networks", issuer: "Cisco", date: "2023" }
  ]
};