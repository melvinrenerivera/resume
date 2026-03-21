export type Lang = "en" | "es";

const t = {
  en: {
    /* ── Navbar ── */
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      hire: "Hire me",
    },

    /* ── Hero ── */
    hero: {
      available: "Available for new opportunities",
      role: "Full Stack Developer",
      tagline:
        "Passionate about building exceptional software solutions that impact financial and government institutions. 8+ years delivering mission-critical systems.",
      downloadCv: "Download CV",
      scroll: "scroll",
      cardRole: "Full Stack Developer · El Salvador",
      statsYears: "Years",
      statsCompanies: "Companies",
      statsTechs: "Techs",
    },

    /* ── About ── */
    about: {
      label: "About me",
      heading1: "Building software",
      heading2: "that matters",
      quote:
        '"Passionate about collaborating with teams to deliver exceptional software solutions."',
      body: "8+ years designing and building critical systems for financial and government institutions in El Salvador and Central America. Expert in modern architectures — from AWS microservices to large-scale Angular applications.",
      stat1: "Years of experience",
      stat2: "Government institutions",
      stat3: "Response time improvement",
      stat4: "Technologies mastered",
    },

    /* ── Experience ── */
    experience: {
      label: "Career",
      heading: "Professional Experience",
      jobs: [
        {
          role: "Full Stack Developer",
          stack: ["Angular", "Java", "AWS", "Microservices"],
          company: "Superintendencia del Sistema Financiero",
          period: "Mar 2022 – Present",
          bullets: [
            "Modernization of IT systems for auditing supervised financial institutions.",
            "Integrated payroll system for ISSS and AFP social security contributions.",
            "Integrated Processing System reducing government processing times.",
            "High-availability pension system deployed on AWS.",
            "Migration of legacy databases and systems to modern technologies.",
            "Modernization of the CCBS system using microservices architecture.",
          ],
        },
        {
          role: "Systems Analyst",
          stack: ["Java", "Spring Boot", "Spring MVC"],
          company: "Ministerio de Hacienda",
          period: "Jan 2019 – Mar 2022",
          bullets: [
            "Analysis, design and implementation of IT processes to reduce citizen response times.",
            "Nationwide DUI-NIT system homologation.",
            "Mass migration from Spring MVC to Spring Boot — significant performance improvement.",
            "Tax Solvency Consultation System with 95% improvement in response times.",
          ],
        },
        {
          role: "Systems Analyst",
          stack: ["PHP", "Symfony", "Python"],
          company: "Universidad de El Salvador",
          period: "Apr 2016 – Dec 2018",
          bullets: [
            "PROMETEUS system in PHP 7.2 and Symfony 3.4 for schedules, evaluations, and roles.",
            "Bulk grade-loading optimization using Python threads — one million grades processed.",
          ],
        },
      ],
      current: "Present",
    },

    /* ── Skills ── */
    skills: {
      label: "Stack",
      heading: "Technologies",
      groups: [
        { label: "Languages & Frameworks", icon: "⌨" },
        { label: "Cloud & DevOps", icon: "☁" },
        { label: "Databases", icon: "◉" },
        { label: "Methodologies", icon: "◈" },
      ],
    },

    /* ── Projects ── */
    projects: {
      label: "Portfolio",
      heading: "Personal Projects",
      items: [
        {
          title: "PayPal E-commerce App",
          description:
            "E-commerce platform with full PayPal integration. Decoupled architecture with REST API, secure authentication, and dynamic product catalog.",
        },
        {
          title: "Medical Consultation System",
          description:
            "Medical application with secure authentication via JWT and OAuth2. Patient management, consultation history, and role-based access control.",
        },
      ],
    },

    /* ── Education ── */
    education: {
      label: "Education",
      heading: "Education & Certifications",
      degreeLabel: "Education",
      certLabel: "Certifications",
      degrees: [
        {
          degree: "Bachelor's in Information Systems Engineering",
          inst: "Universidad de El Salvador",
          period: "2011 – 2017",
        },
        {
          degree: "Adults' English Program",
          inst: "CNIUES",
          period: "Completed · Fluent",
        },
      ],
      certs: [
        { title: "Cisco Certified Network Associate", issuer: "Cisco" },
        { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services · mitocode" },
        { title: "AWS Cloud Diploma", issuer: "Intensive Course" },
      ],
    },

    /* ── Contact ── */
    contact: {
      label: "Contact",
      heading1: "Let's work",
      heading2: "together",
      subtext:
        "I'm open to new opportunities. Feel free to reach out — I reply quickly.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      locationValue: "San Salvador, El Salvador",
      cta: "Send a message",
      footer: "All rights reserved.",
    },
  },

  /* ─────────────── SPANISH ─────────────── */
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Skills",
      projects: "Proyectos",
      contact: "Contacto",
      hire: "Contrátame",
    },
    hero: {
      available: "Disponible para nuevas oportunidades",
      role: "Full Stack Developer",
      tagline:
        "Apasionado por construir soluciones de software excepcionales que impactan instituciones financieras y gubernamentales. Más de 8 años entregando sistemas de misión crítica.",
      downloadCv: "Descargar CV",
      scroll: "scroll",
      cardRole: "Full Stack Developer · El Salvador",
      statsYears: "Años",
      statsCompanies: "Empresas",
      statsTechs: "Techs",
    },
    about: {
      label: "Sobre mí",
      heading1: "Construyendo software",
      heading2: "que importa",
      quote:
        '"Apasionado por colaborar con equipos para entregar soluciones excepcionales."',
      body: "Más de 8 años diseñando y construyendo sistemas críticos para instituciones financieras y gubernamentales en El Salvador y Centroamérica. Experto en arquitecturas modernas — desde microservicios en AWS hasta aplicaciones Angular de alta escala.",
      stat1: "Años de experiencia",
      stat2: "Instituciones gobierno",
      stat3: "Mejora en respuesta",
      stat4: "Tecnologías",
    },
    experience: {
      label: "Trayectoria",
      heading: "Experiencia Profesional",
      jobs: [
        {
          role: "Full Stack Developer",
          stack: ["Angular", "Java", "AWS", "Microservicios"],
          company: "Superintendencia del Sistema Financiero",
          period: "Mar 2022 – Presente",
          bullets: [
            "Modernización de sistemas informáticos para auditoría de instituciones financieras supervisadas.",
            "Sistema integrado de planilla para cotizaciones ISSS y AFP.",
            "Sistema Integrado de Trámites reduciendo tiempos de procesamiento.",
            "Sistema de pensiones de alta disponibilidad desplegado en AWS.",
            "Migración de bases de datos y sistemas legados a tecnologías modernas.",
            "Modernización del sistema CCBS con arquitectura de microservicios.",
          ],
        },
        {
          role: "Analista Programador",
          stack: ["Java", "Spring Boot", "Spring MVC"],
          company: "Ministerio de Hacienda",
          period: "Ene 2019 – Mar 2022",
          bullets: [
            "Análisis, diseño e implementación de procesos TI para reducir tiempos de respuesta ciudadanos.",
            "Homologación del sistema DUI-NIT a nivel nacional.",
            "Migración masiva de Spring MVC a Spring Boot — mejora de rendimiento significativa.",
            "Sistema de Consulta de Solvencia Tributaria con mejora del 95% en tiempos de respuesta.",
          ],
        },
        {
          role: "Analista Programador",
          stack: ["PHP", "Symfony", "Python"],
          company: "Universidad de El Salvador",
          period: "Abr 2016 – Dic 2018",
          bullets: [
            "Sistema PROMETEUS en PHP 7.2 y Symfony 3.4 para gestión de horarios, evaluaciones y roles.",
            "Optimización de carga masiva con hilos Python — un millón de calificaciones procesadas.",
          ],
        },
      ],
      current: "Presente",
    },
    skills: {
      label: "Stack",
      heading: "Tecnologías",
      groups: [
        { label: "Lenguajes & Frameworks", icon: "⌨" },
        { label: "Cloud & DevOps", icon: "☁" },
        { label: "Bases de Datos", icon: "◉" },
        { label: "Metodologías", icon: "◈" },
      ],
    },
    projects: {
      label: "Portafolio",
      heading: "Proyectos Personales",
      items: [
        {
          title: "PayPal E-commerce App",
          description:
            "Plataforma de comercio electrónico con integración completa de PayPal. Arquitectura desacoplada con API REST, autenticación segura y catálogo de productos dinámico.",
        },
        {
          title: "Sistema de Consulta Médica",
          description:
            "Aplicación médica con autenticación segura vía JWT y OAuth2. Gestión de pacientes, historial de consultas y control de acceso basado en roles.",
        },
      ],
    },
    education: {
      label: "Educación",
      heading: "Educación y Certificaciones",
      degreeLabel: "Educación",
      certLabel: "Certificaciones",
      degrees: [
        {
          degree: "Ingeniero de Sistemas Informáticos",
          inst: "Universidad de El Salvador",
          period: "2011 – 2017",
        },
        {
          degree: "Adults' English Program",
          inst: "CNIUES",
          period: "Completado · Fluente",
        },
      ],
      certs: [
        { title: "Cisco Certified Network Associate", issuer: "Cisco" },
        { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services · mitocode" },
        { title: "Diplomado AWS Cloud", issuer: "Curso Intensivo" },
      ],
    },
    contact: {
      label: "Contacto",
      heading1: "Trabajemos",
      heading2: "juntos",
      subtext:
        "Estoy disponible para nuevas oportunidades. No dudes en escribirme — respondo rápido.",
      emailLabel: "Email",
      phoneLabel: "Teléfono",
      locationLabel: "Ubicación",
      locationValue: "San Salvador, El Salvador",
      cta: "Enviar mensaje",
      footer: "Todos los derechos reservados.",
    },
  },
} as const;

export default t;
