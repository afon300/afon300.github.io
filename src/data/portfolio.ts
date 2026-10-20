export type Language = 'fr' | 'en';

export type ProjectCategory = 'all' | 'quant' | 'ai' | 'systems';

export interface ProjectItem {
  id: string;
  year: string;
  category: Exclude<ProjectCategory, 'all'>;
  featured?: boolean;
  tech: string[];
  link: string | null;
  highlight: string;
  fr: {
    title: string;
    subtitle: string;
    description: string;
    details: string[];
  };
  en: {
    title: string;
    subtitle: string;
    description: string;
    details: string[];
  };
}

export interface TimelineItem {
  organization: string;
  location: { fr: string; en: string };
  period: { fr: string; en: string };
  badge?: { fr: string; en: string };
  fr: {
    role: string;
    summary: string;
    details: string[];
  };
  en: {
    role: string;
    summary: string;
    details: string[];
  };
}

export interface SkillGroup {
  id: string;
  fr: {
    title: string;
    subtitle: string;
    items: { name: string; context: string; tags: string[] }[];
  };
  en: {
    title: string;
    subtitle: string;
    items: { name: string; context: string; tags: string[] }[];
  };
}

export interface InterestItem {
  id: string;
  fr: {
    title: string;
    period: string;
    description: string;
  };
  en: {
    title: string;
    period: string;
    description: string;
  };
}

export const portfolioData = {
  personal: {
    name: "Antoine Fourneyron",
    email: "antoinefourneyron@gmail.com",
    efreiEmail: "antoine.fourneyron@efrei.net",
    phone: "+33 7 69 44 78 23",
    location: {
      fr: "Ivry-sur-Seine · Paris, France",
      en: "Ivry-sur-Seine · Paris, France",
    },
    linkedin: "https://www.linkedin.com/in/antoine-fourneyron/",
    github: "https://github.com/afon300",
    githubUsername: "afon300",
  },

  ui: {
    fr: {
      nav: {
        about: "À propos",
        projects: "Projets",
        skills: "Compétences",
        path: "Parcours",
        beyond: "Au-delà du code",
        contact: "Contact",
      },
      hero: {
        eyebrow: "Ingénierie Logicielle · Data & Systèmes · Paris",
        headline: "Concevoir des systèmes fiables, du bas niveau à l'analyse de données.",
        subheadline:
          "Étudiant-ingénieur en Master à l'EFREI Paris (majeure IT for Finance) et co-fondateur de BikeAware.",
        bio: "Passionné d'informatique depuis le lycée — où j'ai lancé mon activité de dépannage et conseil en indépendant — je développe des projets qui relient le matériel, l'architecture backend (Python, C/C++) et la data science appliquée. Qu'il s'agisse d'embarquer de l'IA temps réel sur microcontrôleur pour la sécurité des cyclistes ou de modéliser des corrélations sur les marchés financiers, j'aime comprendre et construire les choses de bout en bout.",
        primaryCta: "Explorer mes projets",
        secondaryCta: "Consulter mon CV (PDF)",
        snapshotTitle: "Vue d'ensemble",
        snapshotItems: [
          {
            label: "Cursus actuel",
            value: "Cycle Ingénieur (M1) — EFREI Paris",
            sub: "Majeure IT for Finance : Data Science, IA, Mathématiques appliquées & Génie Logiciel",
          },
          {
            label: "Entrepreneuriat",
            value: "Co-fondateur & Lead Dev @ BikeAware",
            sub: "Système IoT & IA embarquée pour cyclistes (< 0,8 s) · Statut National Étudiant-Entrepreneur",
          },
          {
            label: "International",
            value: "VSB – Technical University of Ostrava",
            sub: "Semestre d'échange académique en République Tchèque · Anglais C1 (TOEIC 945)",
          },
          {
            label: "Distinction",
            value: "Lauréat des Olympiades de Mathématiques",
            sub: "Académie de Paris · Baccalauréat STI2D Mention Bien",
          },
        ],
      },
      projects: {
        label: "Réalisations",
        title: "Projets techniques & entrepreneuriaux",
        subtitle:
          "Une sélection de projets personnels, académiques et entrepreneuriaux mêlant ingénierie logicielle, finance quantitative, intelligence artificielle et systèmes embarqués.",
        filters: {
          all: "Tous les projets",
          quant: "Data & Finance",
          ai: "IA & Modélisation",
          systems: "Systèmes & IoT",
        },
        viewRepo: "Voir le code sur GitHub",
        privateOrAcademic: "Projet entrepreneurial / académique",
        moreGithubTitle: "Explorer tous mes dépôts sur GitHub",
        moreGithubSub: "Scripts d'analyse, expérimentations en C/Python et outils open-source sur @afon300",
      },
      skills: {
        label: "Savoir-faire",
        title: "Compétences & Environnement Technique",
        subtitle:
          "Des fondations solides en développement bas niveau et backend, complétées par une spécialisation en ingénierie de la donnée, finance de marché et gestion de produit.",
        certificationsLabel: "Certifications & Langues",
      },
      path: {
        label: "Trajectoire",
        title: "Expérience & Parcours Académique",
        subtitle:
          "De mes premières interventions techniques en freelance dès le lycée jusqu'à l'école d'ingénieurs, l'entrepreneuriat IoT et un semestre universitaire en Europe centrale.",
        experienceHeading: "Expériences & Entrepreneuriat",
        educationHeading: "Formation Académique",
      },
      beyond: {
        label: "Personnel",
        title: "En dehors du terminal",
        subtitle:
          "Parce qu'un profil ne se résume pas à des lignes de code : ce qui rythme mon quotidien, nourrit ma curiosité et influence ma façon de travailler.",
      },
      contact: {
        label: "Contact",
        title: "Échangeons",
        subtitle:
          "Que ce soit pour discuter d'un projet technique, d'ingénierie logicielle, de data/finance ou simplement échanger, n'hésitez pas à m'écrire.",
        copyEmail: "Copier l'adresse",
        copied: "Adresse copiée !",
        personalEmail: "Email principal",
        academicEmail: "Email académique (EFREI)",
        phone: "Téléphone",
        location: "Localisation",
        downloadCv: "Télécharger le CV complet (PDF)",
      },
    },
    en: {
      nav: {
        about: "About",
        projects: "Projects",
        skills: "Skills",
        path: "Background",
        beyond: "Beyond Code",
        contact: "Contact",
      },
      hero: {
        eyebrow: "Software Engineering · Data & Systems · Paris",
        headline: "Building reliable systems, from low-level code to data analytics.",
        subheadline:
          "Master's engineering student at EFREI Paris (IT for Finance major) and co-founder of BikeAware.",
        bio: "Passionate about computing since high school—when I started working as an independent IT technician and consultant—I build systems that connect hardware, backend architecture (Python, C/C++), and applied data science. Whether running real-time AI inference on a microcontroller for cyclist safety or modeling statistical correlations across financial markets, I enjoy understanding and engineering things end-to-end.",
        primaryCta: "Explore my projects",
        secondaryCta: "View my CV (PDF)",
        snapshotTitle: "At a Glance",
        snapshotItems: [
          {
            label: "Current Degree",
            value: "M.Eng. in Computer Science — EFREI Paris",
            sub: "IT for Finance Major: Data Science, AI, Applied Mathematics & Software Engineering",
          },
          {
            label: "Entrepreneurship",
            value: "Co-founder & Lead Dev @ BikeAware",
            sub: "Real-time IoT & Embedded AI for cyclists (< 0.8s) · National Student-Entrepreneur Status",
          },
          {
            label: "International",
            value: "VSB – Technical University of Ostrava",
            sub: "Exchange semester in the Czech Republic · C1 English (TOEIC 945/990)",
          },
          {
            label: "Distinction",
            value: "Mathematics Olympiad Laureate",
            sub: "Academy of Paris · STI2D Baccalaureate with Honors",
          },
        ],
      },
      projects: {
        label: "Selected Work",
        title: "Technical & Entrepreneurial Projects",
        subtitle:
          "A selection of personal, academic, and startup projects spanning software engineering, quantitative finance, artificial intelligence, and embedded systems.",
        filters: {
          all: "All projects",
          quant: "Data & Finance",
          ai: "AI & Modeling",
          systems: "Systems & IoT",
        },
        viewRepo: "View source on GitHub",
        privateOrAcademic: "Startup / Academic project",
        moreGithubTitle: "Browse all repositories on GitHub",
        moreGithubSub: "Quantitative scripts, C/Python experiments, and open-source tools on @afon300",
      },
      skills: {
        label: "Capabilities",
        title: "Skills & Technical Stack",
        subtitle:
          "Strong foundations in low-level and backend development, paired with specialized training in data engineering, financial markets, and product delivery.",
        certificationsLabel: "Certifications & Languages",
      },
      path: {
        label: "Journey",
        title: "Experience & Academic Background",
        subtitle:
          "From running my own freelance IT repair and consulting activity in high school to engineering school, hardware/AI entrepreneurship, and studying abroad in Central Europe.",
        experienceHeading: "Experience & Entrepreneurship",
        educationHeading: "Education",
      },
      beyond: {
        label: "Personal",
        title: "Beyond the Keyboard",
        subtitle:
          "Because engineering is only part of the picture: the sports, music, and interests that shape how I learn, focus, and build.",
      },
      contact: {
        label: "Get in Touch",
        title: "Let's Connect",
        subtitle:
          "Whether you want to talk about a technical project, software architecture, data & finance, or just say hello, feel free to reach out.",
        copyEmail: "Copy email",
        copied: "Copied to clipboard!",
        personalEmail: "Primary Email",
        academicEmail: "Academic Email (EFREI)",
        phone: "Phone",
        location: "Location",
        downloadCv: "Download full CV (PDF)",
      },
    },
  },

  projects: [
    {
      id: "bikeaware",
      year: "2024 – Présent",
      category: "systems",
      featured: true,
      tech: ["C/C++", "ESP32-S3", "Python", "IA Embarquée", "IoT", "Scrum"],
      link: null,
      highlight: "Latence < 0,8 s · ESP32-S3",
      fr: {
        title: "BikeAware — Détection temps réel pour cyclistes",
        subtitle: "Projet entrepreneurial IoT & IA embarquée (Statut National Étudiant-Entrepreneur)",
        description:
          "Conception et industrialisation d'un dispositif embarqué pour vélo combinant capteurs matériels et inférence IA afin d'alerter le cycliste des dangers en temps réel.",
        details: [
          "Programmation du micrologiciel (firmware) en C/C++ sur microcontrôleur ESP32-S3 pour garantir une boucle d'acquisition et d'inférence inférieure à 0,8 seconde.",
          "Conception des pipelines Python de prétraitement de données spatiales et d'entraînement des modèles de détection.",
          "Pilotage du cycle complet de développement en méthode Agile (Scrum) : architecture matérielle/logicielle, cahier des charges technique et tests sur route.",
        ],
      },
      en: {
        title: "BikeAware — Real-Time Hazard Detection for Cyclists",
        subtitle: "IoT & Embedded AI Venture (National Student-Entrepreneur Status)",
        description:
          "End-to-end design and engineering of an on-bike hardware and software system combining sensors and embedded AI inference to alert cyclists of approaching hazards in real time.",
        details: [
          "Engineered the C/C++ firmware on an ESP32-S3 microcontroller, achieving an end-to-end sensor acquisition and AI inference loop under 0.8 seconds.",
          "Built Python data pipelines to process spatial sensor streams and train lightweight detection models.",
          "Led the full product lifecycle using Agile (Scrum): hardware-software integration, technical specifications, and real-world road testing in Paris.",
        ],
      },
    },
    {
      id: "polymarket-macro",
      year: "2026",
      category: "quant",
      featured: true,
      tech: ["Python", "Pandas", "SciPy", "Statsmodels", "Streamlit", "Plotly", "Mypy"],
      link: "https://github.com/afon300/polymarket-macro-analytics",
      highlight: "Corrélations Macro & Marchés Prédictifs",
      fr: {
        title: "Polymarket Macro Correlation Engine",
        subtitle: "Framework d'analyse quantitative & statistique en Python",
        description:
          "Outil d'analyse quantitative étudiant les liens statistiques entre les probabilités des marchés prédictifs décentralisés (Polymarket) et les grands indicateurs macro-financiers.",
        details: [
          "Ingestion automatisée des historiques de probabilités via l'API Gamma/CLOB de Polymarket et des cours financiers (BTC, S&P 500, VIX, EUR/USD) via Yahoo Finance.",
          "Calcul des coefficients de corrélation de Pearson et de rang de Spearman avec tests de significativité (p-value) pour valider les relations macroéconomiques.",
          "Suivi des corrélations glissantes (rolling correlations) pour détecter les changements de régime et les découplages de marché via un dashboard interactif Streamlit & Plotly.",
        ],
      },
      en: {
        title: "Polymarket Macro Correlation Engine",
        subtitle: "Quantitative & Statistical Analysis Framework in Python",
        description:
          "Quantitative analysis engine bridging decentralized prediction markets (Polymarket) and traditional macroeconomic assets to uncover statistically significant relationships.",
        details: [
          "Automated historical data ingestion interfacing with Polymarket's Gamma/CLOB API and Yahoo Finance (BTC, S&P 500, VIX, EUR/USD) with strict typing (mypy, ruff).",
          "Implemented Pearson and Spearman rank correlation engines with p-value significance testing to validate cross-asset relationships.",
          "Built rolling-window correlation tracking and normalized trend visualizations in an interactive Streamlit & Plotly dashboard.",
        ],
      },
    },
    {
      id: "stock-market-platform",
      year: "2025",
      category: "quant",
      featured: true,
      tech: ["Python", "Streamlit", "Scikit-learn", "NLP", "Plotly", "SQLite", "Pandas-TA"],
      link: "https://github.com/afon300/stock-market-data-analysis",
      highlight: "Backtesting · VaR 95% · NLP",
      fr: {
        title: "Plateforme d'Analyse Financière & Boursière",
        subtitle: "Dashboard d'aide à la décision, backtesting multi-actifs & NLP",
        description:
          "Plateforme interactive d'analyse technique, fondamentale et prédictive couvrant les actions, cryptomonnaies, devises (Forex) et matières premières.",
        details: [
          "Simulation et backtesting de stratégies (RSI, croisements SMA, MACD, bandes de Bollinger) avec calcul du rendement, taux de réussite et max drawdown.",
          "Gestion de portefeuille incluant le suivi P&L, la comparaison en base 100 face au S&P 500 et le calcul de la Value at Risk (VaR à 95 %).",
          "Intégration d'un modèle Random Forest (Scikit-learn) de prévision de tendance, d'un moteur NLP d'analyse de sentiment d'actualités et d'un cache local SQLite.",
        ],
      },
      en: {
        title: "Financial & Stock Market Analysis Platform",
        subtitle: "Multi-Asset Backtesting, Risk Analytics & NLP Dashboard",
        description:
          "Interactive market intelligence platform providing technical analysis, strategy backtesting, portfolio risk metrics, and news sentiment scoring across Stocks, Crypto, and Forex.",
        details: [
          "Simulated trading strategies (RSI, SMA crossovers, MACD, Bollinger Bands) against historical data with win-rate, return, and drawdown metrics.",
          "Engineered portfolio risk assessment with 95% Value at Risk (VaR) and normalized base-100 benchmark comparisons against the S&P 500.",
          "Integrated a Random Forest price forecasting model, an NLP headline sentiment classifier, and a local SQLite caching layer.",
        ],
      },
    },
    {
      id: "deep-learning-vision",
      year: "2026",
      category: "ai",
      featured: false,
      tech: ["Python", "TensorFlow", "Keras", "CNN", "MobileNetV2", "Scikit-learn"],
      link: null,
      highlight: "CNN & Transfer Learning",
      fr: {
        title: "Deep Learning & Classification d'Images",
        subtitle: "Architectures convolutives & optimisation de modèles de vision",
        description:
          "Conception, entraînement et évaluation comparative de réseaux de neurones convolutifs sur un large jeu de données d'images.",
        details: [
          "Développement d'une architecture CNN sur-mesure et mise en œuvre de transfer learning avec MobileNetV2 sous TensorFlow / Keras.",
          "Optimisation des hyperparamètres (optimiseur Adam, fonction de perte Categorical Crossentropy) et réduction active de l'overfitting par régularisation et augmentation de données.",
        ],
      },
      en: {
        title: "Deep Learning & Image Classification",
        subtitle: "Convolutional Architectures & Computer Vision Optimization",
        description:
          "Design, training, and comparative evaluation of deep convolutional neural networks on a large-scale computer vision dataset.",
        details: [
          "Built and benchmarked a custom CNN architecture against fine-tuned MobileNetV2 transfer learning models using TensorFlow and Keras.",
          "Tuned hyperparameters (Adam optimizer, Categorical Crossentropy) and mitigated overfitting through dropout regularization and data augmentation.",
        ],
      },
    },
    {
      id: "cchat-tcp",
      year: "2024",
      category: "systems",
      featured: false,
      tech: ["C11", "POSIX Threads", "TCP/IP", "Sockets", "Linux / Windows"],
      link: "https://github.com/afon300/CChat",
      highlight: "C11 · Multi-threading & Réseau",
      fr: {
        title: "CChat — Serveur TCP Multi-threadé Sécurisé",
        subtitle: "Architecture client-serveur bas niveau cross-platform",
        description:
          "Conception et développement en C standard (C11) d'un serveur et client de messagerie réseau temps réel fonctionnant sous Linux et Windows.",
        details: [
          "Architecture modulaire gérant les connexions clientes concurrentes via sockets TCP/IP et multi-threading POSIX.",
          "Synchronisation rigoureuse des flux partagés (mutex, gestion de la concurrence) et sécurisation des échanges sous fortes contraintes de latence et de robustesse.",
        ],
      },
      en: {
        title: "CChat — Multi-threaded TCP Chat Server",
        subtitle: "Cross-Platform Low-Level Client-Server Architecture in C11",
        description:
          "Low-level networked messaging server and client written in standard C11, engineered to run seamlessly across both Linux and Windows environments.",
        details: [
          "Designed a modular client-server architecture handling concurrent socket connections via POSIX multi-threading.",
          "Ensured thread-safe stream synchronization and resilient packet handling under strict latency and stability constraints.",
        ],
      },
    },
    {
      id: "airport-challenge",
      year: "2026",
      category: "ai",
      featured: false,
      tech: ["Data Modeling", "KPIs", "Wi-Fi Logs", "Capteurs XOVIS", "Process Mining"],
      link: null,
      highlight: "Hamad International Airport (HIA)",
      fr: {
        title: "Next-Gen Airport Challenge — Qatar Innovation",
        subtitle: "Modélisation de flux & ingénierie de la donnée aéroportuaire",
        description:
          "Cadrage et conception d'une solution d'intelligence opérationnelle unifiant des sources de données capteurs pour optimiser les flux passagers à l'aéroport HIA.",
        details: [
          "Croisement et structuration de sources de données complexes à haut volume (journaux de bornes Wi-Fi et capteurs optiques 3D XOVIS).",
          "Modélisation des parcours passagers et définition d'indicateurs clés (KPIs) temps réel pour identifier et désengorger les goulots d'étranglement.",
        ],
      },
      en: {
        title: "Next-Gen Airport Challenge — Qatar Innovation",
        subtitle: "Passenger Flow Modeling & Operational Data Engineering",
        description:
          "Scoping and design of an operational intelligence solution unifying heterogeneous sensor streams to optimize passenger throughput at Hamad International Airport (HIA).",
        details: [
          "Unified complex, high-volume spatial data sources including terminal Wi-Fi logs and XOVIS 3D optical passenger tracking sensors.",
          "Modeled terminal processes and defined actionable operational KPIs to detect and resolve passenger bottlenecks.",
        ],
      },
    },
  ] as ProjectItem[],

  skillGroups: [
    {
      id: "backend-languages",
      fr: {
        title: "Langages & Génie Logiciel",
        subtitle: "Développement backend, programmation système et conception d'architectures modulaires.",
        items: [
          {
            name: "Python",
            context: "Langage principal pour le backend, l'automatisation, l'analyse quantitative et le Machine Learning.",
            tags: ["Python 3.10+", "APIs REST", "Mypy", "Ruff", "Pytest"],
          },
          {
            name: "C / C++ (Standard C11)",
            context: "Programmation système, gestion mémoire, serveurs réseau multi-threadés et micrologiciels embarqués.",
            tags: ["C11", "C++", "POSIX", "Sockets TCP/IP", "ESP32-S3"],
          },
          {
            name: "Bases de données & SQL",
            context: "Modélisation relationnelle, requêtes analytiques, optimisation et persistance locale ou serveur.",
            tags: ["PostgreSQL", "MariaDB", "SQLite", "SQLAlchemy"],
          },
          {
            name: "Autres langages pratiqués",
            context: "Projets académiques et outils développés en programmation orientée objet, calcul matriciel et web.",
            tags: ["C#", "Java", "Bash / Shell", "MATLAB", "TypeScript / React"],
          },
        ],
      },
      en: {
        title: "Languages & Software Engineering",
        subtitle: "Backend development, low-level systems programming, and modular software architecture.",
        items: [
          {
            name: "Python",
            context: "Primary language for backend pipelines, automation, quantitative research, and machine learning.",
            tags: ["Python 3.10+", "REST APIs", "Mypy", "Ruff", "Pytest"],
          },
          {
            name: "C / C++ (C11 Standard)",
            context: "Systems programming, memory management, multi-threaded network servers, and embedded firmware.",
            tags: ["C11", "C++", "POSIX", "TCP/IP Sockets", "ESP32-S3"],
          },
          {
            name: "Databases & SQL",
            context: "Relational schema design, analytical queries, indexing, and embedded or server-side persistence.",
            tags: ["PostgreSQL", "MariaDB", "SQLite", "SQLAlchemy"],
          },
          {
            name: "Additional Languages",
            context: "Used across object-oriented software engineering projects, numerical computing, and web interfaces.",
            tags: ["C#", "Java", "Bash / Shell", "MATLAB", "TypeScript / React"],
          },
        ],
      },
    },
    {
      id: "data-ai-finance",
      fr: {
        title: "Data Science, IA & Finance Quantitative",
        subtitle: "Exploitation de données volumineuses, modélisation statistique et apprentissage profond.",
        items: [
          {
            name: "Écosystème PyData & Statistiques",
            context: "Traitement de séries temporelles, tests d'hypothèses (Pearson, Spearman, p-values) et modélisation.",
            tags: ["Pandas", "NumPy", "SciPy", "Statsmodels"],
          },
          {
            name: "Machine Learning & Deep Learning",
            context: "Entraînement de réseaux convolutifs (vision), modèles prédictifs et traitement du langage naturel.",
            tags: ["TensorFlow", "Keras", "Scikit-learn", "CNN / MobileNetV2", "NLP"],
          },
          {
            name: "IT for Finance & Analyse de Marché",
            context: "Conception d'outils de backtesting, indicateurs techniques, Value at Risk (VaR 95%) et corrélations macro.",
            tags: ["Backtesting", "VaR 95%", "Marchés Prédictifs", "Actions / Crypto / Forex"],
          },
          {
            name: "Visualisation & Dashboards",
            context: "Création d'interfaces analytiques interactives pour l'exploration de données et l'aide à la décision.",
            tags: ["Streamlit", "Plotly", "Matplotlib", "Seaborn"],
          },
        ],
      },
      en: {
        title: "Data Science, AI & Quantitative Finance",
        subtitle: "Large-scale data processing, statistical modeling, and deep learning architectures.",
        items: [
          {
            name: "PyData Stack & Statistics",
            context: "Time-series manipulation, hypothesis testing (Pearson, Spearman, p-values), and econometric modeling.",
            tags: ["Pandas", "NumPy", "SciPy", "Statsmodels"],
          },
          {
            name: "Machine Learning & Deep Learning",
            context: "Convolutional neural networks for computer vision, predictive modeling, and natural language processing.",
            tags: ["TensorFlow", "Keras", "Scikit-learn", "CNN / MobileNetV2", "NLP"],
          },
          {
            name: "IT for Finance & Market Analytics",
            context: "Strategy backtesting engines, technical indicators, 95% Value at Risk (VaR), and macro correlations.",
            tags: ["Backtesting", "VaR 95%", "Prediction Markets", "Equities / Crypto / Forex"],
          },
          {
            name: "Data Visualization & Dashboards",
            context: "Building interactive analytical applications for real-time data exploration and decision support.",
            tags: ["Streamlit", "Plotly", "Matplotlib", "Seaborn"],
          },
        ],
      },
    },
    {
      id: "devops-systems-product",
      fr: {
        title: "DevOps, Systèmes & Méthodologie",
        subtitle: "Industrialisation, conteneurisation et pilotage de projets techniques de bout en bout.",
        items: [
          {
            name: "DevOps & Intégration Continue",
            context: "Conteneurisation d'applications, automatisation des pipelines de build/test et gestion de versions.",
            tags: ["Docker", "GitLab CI", "Jenkins", "Git / GitHub"],
          },
          {
            name: "Systèmes & Architecture Réseau",
            context: "Développement cross-platform, administration système et synchronisation de processus concurrents.",
            tags: ["Linux", "Windows", "Architecture Client-Serveur", "Multi-threading"],
          },
          {
            name: "Ingénierie Produit & Agile",
            context: "Traduction de besoins métiers en spécifications techniques, pilotage Scrum et culture Clean Code.",
            tags: ["Agile (Scrum)", "Spécifications Techniques", "Modélisation KPI", "Clean Code"],
          },
        ],
      },
      en: {
        title: "DevOps, Systems & Engineering Practice",
        subtitle: "Containerization, continuous integration, and end-to-end technical project delivery.",
        items: [
          {
            name: "DevOps & CI/CD",
            context: "Application containerization, automated build/test pipelines, and collaborative version control.",
            tags: ["Docker", "GitLab CI", "Jenkins", "Git / GitHub"],
          },
          {
            name: "Operating Systems & Networking",
            context: "Cross-platform development, system diagnostics, and concurrent process synchronization.",
            tags: ["Linux", "Windows", "Client-Server Architecture", "Multi-threading"],
          },
          {
            name: "Product Engineering & Agile",
            context: "Translating complex domain needs into technical specifications, Scrum delivery, and Clean Code.",
            tags: ["Agile (Scrum)", "Technical Specs", "KPI Modeling", "Clean Code"],
          },
        ],
      },
    },
  ] as SkillGroup[],

  languagesAndCerts: {
    fr: [
      { title: "Français", detail: "Langue maternelle" },
      { title: "Anglais", detail: "Bilingue / Professionnel avancé (C1 — TOEIC : 945 / 990)" },
      { title: "Espagnol", detail: "Niveau intermédiaire opérationnel (B1)" },
      { title: "Certifications", detail: "Microsoft Azure Fundamentals (2024) · Cisco Cybersecurity & Intro to Networks (2023)" },
    ],
    en: [
      { title: "French", detail: "Native speaker" },
      { title: "English", detail: "Bilingual / Advanced professional proficiency (C1 — TOEIC: 945 / 990)" },
      { title: "Spanish", detail: "Working intermediate proficiency (B1)" },
      { title: "Certifications", detail: "Microsoft Azure Fundamentals (2024) · Cisco Cybersecurity & Intro to Networks (2023)" },
    ],
  },

  experience: [
    {
      organization: "BikeAware",
      location: { fr: "Paris, France", en: "Paris, France" },
      period: { fr: "Fév. 2024 – Présent", en: "Feb 2024 – Present" },
      badge: { fr: "Statut National Étudiant-Entrepreneur", en: "Student-Entrepreneur Status" },
      fr: {
        role: "Co-fondateur & Développeur Principal",
        summary: "Projet entrepreneurial IoT & Intelligence Artificielle embarquée dédié à la sécurité des cyclistes.",
        details: [
          "Développement et industrialisation d'un système temps réel de détection d'obstacles et de véhicules combinant capteurs et inférence IA (< 0,8 s).",
          "Programmation du micrologiciel en C/C++ sur ESP32-S3 et conception des pipelines Python de traitement de données spatiales.",
          "Pilotage du cycle de développement complet en méthode Agile (Scrum), structuration des spécifications techniques et coordination matériel/logiciel.",
        ],
      },
      en: {
        role: "Co-founder & Lead Developer",
        summary: "IoT & Embedded Artificial Intelligence venture focused on urban cyclist safety.",
        details: [
          "Developed and industrialized a real-time hazard detection system combining hardware sensors and embedded AI inference (< 0.8s latency).",
          "Programmed C/C++ firmware on the ESP32-S3 microcontroller and designed spatial data processing pipelines in Python.",
          "Led the full Agile (Scrum) development cycle, authoring technical specifications and coordinating hardware-software integration.",
        ],
      },
    },
    {
      organization: "Activité Indépendante / Freelance",
      location: { fr: "Ivry-sur-Seine, France", en: "Ivry-sur-Seine, France" },
      period: { fr: "Sept. 2019 – Juin 2023", en: "Sep 2019 – Jun 2023" },
      badge: { fr: "4 ans d'activité", en: "4 years" },
      fr: {
        role: "Technicien & Consultant Informatique Indépendant",
        summary: "Prestations techniques, dépannage matériel/logiciel et accompagnement client en autonomie complète.",
        details: [
          "Diagnostic et résolution de pannes systèmes, logicielles et matérielles complexes pour des clients particuliers et professionnels.",
          "Restructuration, sécurisation et sauvegarde de volumes de données sensibles avec un suivi rigoureux des délais et des exigences.",
        ],
      },
      en: {
        role: "Independent IT Technician & Consultant",
        summary: "Freelance technical services, hardware/software diagnostics, and client advisory.",
        details: [
          "Diagnosed and resolved complex operating system, software, and hardware failures with complete autonomy.",
          "Restructured, secured, and backed up sensitive data volumes while maintaining 100% client satisfaction.",
        ],
      },
    },
  ] as TimelineItem[],

  education: [
    {
      organization: "EFREI Paris — Grande École d'Ingénieurs du Numérique",
      location: { fr: "Villejuif / Paris, France", en: "Paris, France" },
      period: { fr: "Sept. 2023 – 2028 (En cours)", en: "Sep 2023 – 2028 (Ongoing)" },
      badge: { fr: "Grade de Master · RNCP Niv. 7", en: "M.Eng. · Master's Degree" },
      fr: {
        role: "Diplôme d'Ingénieur — Majeure IT for Finance",
        summary: "Formation d'ingénieur généraliste du numérique avec spécialisation en systèmes financiers, data science et génie logiciel.",
        details: [
          "Majeure IT for Finance : Data Science, Intelligence Artificielle, Mathématiques Appliquées, Finance de marché et Génie Logiciel.",
          "Modules clés : Algorithmique avancée, Programmation Orientée Objet, Bases de données relationnelles (SQL), Probabilités & Statistiques.",
        ],
      },
      en: {
        role: "Engineering Degree (M.Eng.) — IT for Finance Major",
        summary: "Computer science and digital engineering curriculum specializing in financial technology, data science, and software architecture.",
        details: [
          "IT for Finance Major: Data Science, Artificial Intelligence, Applied Mathematics, Quantitative Finance, and Software Engineering.",
          "Core coursework: Advanced Algorithms, Object-Oriented Programming, Relational Databases (SQL), Probability & Statistics.",
        ],
      },
    },
    {
      organization: "VSB – Technical University of Ostrava",
      location: { fr: "Ostrava, République Tchèque", en: "Ostrava, Czech Republic" },
      period: { fr: "Août 2025 – Déc. 2025", en: "Aug 2025 – Dec 2025" },
      badge: { fr: "Échange International", en: "Academic Exchange" },
      fr: {
        role: "Semestre d'échange en Computer Science & Software Engineering",
        summary: "Mobilité académique internationale au sein de la faculté d'électrotechnique et d'informatique (FEI).",
        details: [
          "Validation de modules intensifs dispensés intégralement en anglais : développement logiciel distribué, structures de données et algorithmique avancée.",
        ],
      },
      en: {
        role: "International Exchange Semester — Computer Science & Software Engineering",
        summary: "Academic mobility at the Faculty of Electrical Engineering and Computer Science (FEI).",
        details: [
          "Completed intensive English-taught coursework in distributed software development, advanced data structures, and algorithms.",
        ],
      },
    },
    {
      organization: "Lycée Albert de Mun",
      location: { fr: "Paris, France", en: "Paris, France" },
      period: { fr: "2022 – Juin 2023", en: "2022 – Jun 2023" },
      badge: { fr: "Lauréat Olympiades de Maths", en: "Math Olympiad Laureate" },
      fr: {
        role: "Baccalauréat STI2D (Mention Bien) & Olympiades de Mathématiques",
        summary: "Spécialité Systèmes d'Information et Numérique (SIN).",
        details: [
          "Lauréat académique des Olympiades de Mathématiques (Académie de Paris), récompensant la résolution de problèmes analytiques complexes.",
          "Obtention du Baccalauréat STI2D avec Mention Bien.",
        ],
      },
      en: {
        role: "STI2D Baccalaureate (With Honors) & Mathematics Olympiads",
        summary: "Specialization in Information Systems and Digital Engineering.",
        details: [
          "Academic Laureate of the Mathematics Olympiads (Academy of Paris), recognizing strong analytical problem-solving.",
          "Graduated with Honors (Mention Bien).",
        ],
      },
    },
  ] as TimelineItem[],

  interests: [
    {
      id: "cycling-climbing",
      fr: {
        title: "Cyclisme & Escalade",
        period: "Pratique régulière",
        description:
          "Des sorties régulières à vélo sur route comme en milieu urbain — qui ont directement inspiré la genèse du projet BikeAware — ainsi que la pratique de l'escalade, qui demande lecture de voie, précision et sang-froid.",
      },
      en: {
        title: "Cycling & Climbing",
        period: "Regular practice",
        description:
          "Regular road and urban cycling—which directly inspired the creation of BikeAware—alongside indoor and rock climbing, a sport built on route reading, balance, and calm problem-solving.",
      },
    },
    {
      id: "piano",
      fr: {
        title: "Piano Classique",
        period: "6 ans de pratique",
        description:
          "Six années de pratique assidue du répertoire classique au piano. Une école de patience, de mémoire et de rigueur où chaque détail d'exécution compte.",
      },
      en: {
        title: "Classical Piano",
        period: "6 years of study",
        description:
          "Six years of dedicated classical piano practice—developing discipline, pattern recognition, and attention to nuance.",
      },
    },
    {
      id: "history-science",
      fr: {
        title: "Histoire Contemporaine & Sciences",
        period: "Curiosité au quotidien",
        description:
          "Passionné par l'histoire contemporaine, la géopolitique et les sciences. Comprendre les dynamiques historiques et économiques nourrit directement mon intérêt pour l'analyse macro-financière.",
      },
      en: {
        title: "Contemporary History & Science",
        period: "Lifelong curiosity",
        description:
          "Deep interest in contemporary history, geopolitics, and science—understanding historical and macro dynamics naturally complements my work in quantitative and financial analysis.",
      },
    },
  ] as InterestItem[],
};
