import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Diego Conde",
  logo: "/PicRetouch_20240719_070444396.png",
  email: "perezcondediegoivan@outlook.com",
  image: "/DiegoConde.pdf",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Inicio",
    url: "/",
  },
  {
    title: "Acerca de mi",
    url: "/about",
  },
  {
    title: "Proyectos",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/Psychodivto",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:perezcondediegoivan@outlook.com",
    icon: "mdi:email",
    
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/divtoconde",
    icon: "mdi:linkedin",
    
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Diego Conde",
    description:
      "Innovation begins with exploration, solutions with code.",
    image: identity.logo,
  },
  role: "Desarrollador Full Stack Web",
  description:
    "La innovación comienza explorando ideas, y las soluciones cobran vida a través del código.",
  socialLinks: socialLinks,
  links: [
    {
      title: "Mis Proyectos",
      url: "/projects",
    },
    {
      title: "Acerca de mi",
      url: "/about",
    },
    {
      title: "CV",
      url: "/DiegoConde.pdf"
    }
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "Acerca de mi | Diego Conde",
    description:
      ".",
    image: identity.logo,
  },
  subtitle: "",
  about: {
    description: `Soy Ingeniero de Software egresado de la Universidad Veracruzana, 
    con experiencia en desarrollo Full Stack y Cloud Computing, enfocado en crear soluciones escalables y eficientes.
    Domino varios lenguajes de programación como Python y JavaScript, además de tecnologías para arquitectura de contenedores 
    como Docker y Kubernetes. Tengo experiencia con frameworks de Frontend y Backend como Angular, React y Django.
    Manejo patrones de diseño como MVC y diseño de interfaces con Figma para mejorar la experiencia de usuario. 
    He participado en proyectos académicos y hackathons, destacando en el desarrollo de soluciones innovadoras para problemas
    complejos. Busco oportunidades para seguir aprendiendo y aportar valor en el desarrollo de software.`, // Markdown is supported

    image_l: {
      url: "/aboutme/graduacion.jpg",
      alt: "",
    },
    image_r: {
      url: "/aboutme/graduacionprofile.jpg",
      alt: "",
    }
    
  },
  work: {
    description: ``, // Markdown is supported
    items: [
      {
        title: "Sistema de control y gestión vehicular por medio de inteligencia artificial",
        company: {
          name: "IA",
          image: "/aboutme/itech-home.png",
          url: "https://github.com/Psychodivto/AI-OPS",
        },
        date: "En desarollo",
      },
      {
        title: "Ecommerce C2c",
        company: {
          name: "Frontend",
          image: "/aboutme/ecommerce.webp",
          url: "https://github.com/DenisAGS/Asociados-UV-Plataforma-de-E-commerce",
        },
        date: "2024",
      },
    ],
  },

  connect: {
    description: ``, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Proyectos | Diego Conde",
    description: "Checa mis ultimos trabajos que estoy desarollando.",
    image: identity.logo,
  },
  subtitle: "Checa mis ultimos trabajos que estoy desarrollando.",
  projects: [
    {
      title: "Ecommerce C2C Asociados UV",
      description: "Ecommerce con modelo de ventas entre consumidores facilitando ventas seguras y pagos integrados con una experiencia fluida.",
      image: "/Proyectos/c2c.png",
      year: "2024",
      url: "https://github.com/DenisAGS/Asociados-UV-Plataforma-de-E-commerce",
    },
    {
      title: "Kanban List",
      description: "Tablero Kanban hecho con Angular y Node.js, dockerizado y con API REST para gestión de tareas y columnas. ",
      image: "/Proyectos/kanban.gif",
      year: "2024",
      url: "https://github.com/Psychodivto/Formulario_laravel",
    },
    {
      title: "Sistema ANPR ",
      description: "Sistema de reconocimiento de placas vehiculares automatico, ideal para control de accesos o monitoreo de vehículos.",
      image: "/Proyectos/anpr.jpg",
      year: "2024",
      url: "https://github.com/Psychodivto/AI-OPS",
    },
    {
      title: "Detección de objetos",
      description: "Aplicacion movil adoptando principios de MLOps tomando modelos de IA entrenados para la previa deteccion de objetos.",
      image: "/Proyectos/objects.gif",
      year: "2024",
      url: "https://github.com/Psychodivto/formula_with_flutter",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Diego Conde  ",
    description: "Un poco más sobre mi...",
    image: identity.logo,
  },
  subtitle: "Ideas y avances.",
};