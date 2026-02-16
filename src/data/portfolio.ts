export const portfolioData = {
  personal: {
    name: "Antoine Fourneyron",
    email: "antoinefourneyron@gmail.com",
    phone: "+33 7 69 44 78 23",
    location: "Ivry-sur-Seine (94200)",
    linkedin: "https://www.linkedin.com/in/antoine-fourneyron-7b173b291/",
    github: "https://github.com/afon300",
    githubUsername: "afon300",
    efreiEmail: "antoine.fourneyron@efrei.net",
    translations: {
      fr: {
        title: "Étudiant Ingénieur - Recherche Alternance Data/IT",
        bio: "Étudiant en cycle Ingénieur à l'EFREI, passionné par l'informatique et les mathématiques. Lauréat des Olympiades de Mathématiques, rigoureux et polyvalent (Python, SQL, Java).",
        available: "DISPONIBLE POUR ALTERNANCE (24 MOIS)",
        heroTitle: "Ingénieur Data & IT",
        contactBtn: "Contact",
        cvBtn: "Télécharger CV",
        sections: {
          about: "À propos",
          projects: "Projets Phares",
          skills: "Dashboard Technique",
          path: "Parcours",
          certs: "Certifications"
        },
        contact: {
          subtitle: "N'hésitez pas à me contacter via mes réseaux ou par email.",
          personalEmail: "Email Personnel",
          academicEmail: "Email Académique",
          phone: "Téléphone",
          location: "Localisation"
        }
      },
      en: {
        title: "Engineering Student - Seeking Data/IT Apprenticeship",
        bio: "Engineering student at EFREI, passionate about computer science and mathematics. Mathematics Olympiad laureate, rigorous and versatile (Python, SQL, Java).",
        available: "AVAILABLE FOR APPRENTICESHIP (24 MONTHS)",
        heroTitle: "Data & IT Engineer",
        contactBtn: "Contact Me",
        cvBtn: "Download CV",
        sections: {
          about: "About",
          projects: "Key Projects",
          skills: "Technical Dashboard",
          path: "Career Path",
          certs: "Certifications"
        },
        contact: {
          subtitle: "Feel free to reach out via my socials or email.",
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
      school: "EFREI – École d'ingénieur du numérique",
      period: "Sept. 2023 - 2028",
      fr: {
        degree: "Cycle Ingénieur du Numérique (Prépa Intégrée)",
        specialization: "Data Engineering & Intelligence Artificielle",
        details: ["Algorithmique", "Probabilités & Statistiques", "SQL", "Algèbre linéaire", "Machine Learning"]
      },
      en: {
        degree: "Digital Engineering Cycle",
        specialization: "Data Engineering & Artificial Intelligence",
        details: ["Algorithms", "Probability & Statistics", "SQL", "Linear Algebra", "Machine Learning"]
      }
    },
    {
      school: "Lycée Albert De Mun",
      period: "Juin 2023",
      fr: {
        degree: "Baccalauréat STI2D – Mention Bien",
        details: ["Mention Bien"]
      },
      en: {
        degree: "STI2D Baccalaureate – Honors",
        details: ["With Honors"]
      }
    }
  ],
  experience: [
    {
      company: "Indépendant / Freelance",
      period: "2019 - 2023",
      fr: {
        role: "Technicien IT & Hardware",
        details: ["Diagnostic et résolution de pannes matérielles et logicielles sur PC et Smartphones.", "Gestion de la relation client, respect des délais et rigueur technique."]
      },
      en: {
        role: "IT & Hardware Technician",
        details: ["Diagnosis and resolution of hardware and software failures on PC and Smartphones.", "Client relationship management, deadlines respect and technical rigor."]
      }
    },
    {
      company: "Freelance",
      period: "2020 - 2022",
      fr: {
        role: "Monteur Vidéo & Scriptwriter",
        details: ["Montage vidéo (Adobe Premiere Pro) et structuration de contenus narratifs.", "Respect strict des deadlines pour des clients professionnels."]
      },
      en: {
        role: "Video Editor & Scriptwriter",
        details: ["Video editing (Adobe Premiere Pro) and narrative content structuring.", "Strict compliance with deadlines for professional clients."]
      }
    }
  ],
  projects: [
    {
      tech: ["Python", "Pandas", "Matplotlib", "API Yahoo", "Seaborn"],
      link: "https://github.com/afon300",
      fr: {
        title: "Analyse de Données Boursières",
        description: "Développement d'un script pour récupérer et traiter des données financières via API. Nettoyage de données (Data Cleaning) et visualisation des tendances de volatilité avec Seaborn.",
        details: ["Récupération via API Yahoo Finance", "Visualisation de la volatilité avec Seaborn", "Modèles statistiques pour identification de corrélations"]
      },
      en: {
        title: "Stock Market Data Analysis",
        description: "Development of a script to retrieve and process financial data via API. Data Cleaning and visualization of volatility trends with Seaborn.",
        details: ["Retrieval via Yahoo Finance API", "Volatility visualization with Seaborn", "Statistical models for volume correlation identification"]
      }
    },
    {
      tech: ["Java", "C", "POO"],
      link: "https://github.com/afon300",
      fr: {
        title: "Gestionnaire de Comptes Bancaires",
        description: "Création d'une application sécurisée de gestion de solde et de transactions.",
        details: ["Création d'une application sécurisée", "Implémentation de structures de données optimisées", "Gestion des droits utilisateurs"]
      },
      en: {
        title: "Bank Account Manager",
        description: "Creation of a secure application for balance and transaction management.",
        details: ["Creation of a secure application", "Implementation of optimized data structures", "User rights management"]
      }
    }
  ],
skills: {
    development: [
      { name: "Python (NumPy, Pandas)", level: 90 },
      { name: "C", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML5/CSS3", level: 78 },
      { name: "C++", level: 70 },
      { name: "Java", level: 65 },
      { name: "Assembly", level: 62 }
    ],
    tools: [
      { name: "Git/GitHub", level: 86 },
      { name: "Linux (Bash)", level: 84 },
      { name: "Jupyter Notebooks", level: 82 },
      { name: "LaTeX", level: 75 },
      { name: "Docker", level: 72 }
    ],
    data: [
      { name: "Excel", level: 90 },
      { name: "SQL", level: 88 },
      { name: "Power BI", level: 50 }
    ]
  },
  certifications: [
    { name: "Cisco Cybersecurity", issuer: "Cisco", date: "2023" },
    { name: "Microsoft Azure Fundamentals", issuer: "Microsoft", date: "2024" },
    { name: "Cisco Intro to Networks", issuer: "Cisco", date: "2023" }
  ]
};
