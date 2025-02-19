import {
  abromart,
  backend,
  bootstrap,
  codedrops,
  corrtex,
  creator,
  css,
  fib,
  figma,
  git,
  github,
  gitlab,
  gmail,
  html,
  instagram,
  jQuery,
  javascript,
  linkedin,
  mobile,
  reactjs,
  redux,
  restro,
  tailwind,
  twitter,
  typescript,
  web
} from "../assets";

export const navLinks = [
  {
    id: "home",
    desktop: "",
    title: "Home",
  },
  {
    id: "work",
    desktop: "work",
    title: "Work",
  },
  {
    id: "contact",
    desktop: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Responsive Web Design",
    icon: web,
  },
  {
    title: "Frontend Web Development",
    icon: mobile,
  },
  {
    title: "Custom Web Design",
    icon: backend,
  },
  {
    title: "Website Optimization",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "jQuery",
    icon: jQuery,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "CodeDrops Tech",
    icon: codedrops,
    iconBg: "#383E56",
    date: "Oct 2022 - Dec 2022",
    points: [
      "Created responsive and user-friendly websites using HTML, CSS, and JavaScript.",
      "Utilized Bootstrap and jQuery to enhance website functionality and appearance.",
      "Implemented advanced features such as animations and modal windows using CSS and JavaScript.",
      "Streamlined workflow with SASS to improve project efficiency and maintainability.",
    ],
  },
  {
    title: "React Js Developer",
    company_name: "CodeDrops Tech",
    icon: codedrops,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developing responsive web apps with React, Redux Toolkit, and TypeScript.",
      "Creating efficient UIs with Tailwind CSS for web apps.",
      "Collaborating with cross-functional teams to deliver quality web apps on time and within budget.",
      "Improving React development practices within the team to boost efficiency and quality.",
    ],
  },
];

const socials = [
  {
    image: linkedin,
    link: "https://www.linkedin.com/in/sahil-khadka/"
  },
  {
    image: github,
    link: "https://github.com/sahilxkhadka"
  },
  {
    image: gitlab,
    link: "https://gitlab.com/sahilkhadka767"
  },
  {
    image: twitter,
    link: "https://twitter.com/SahilKhadka15"
  },
  {
    image: instagram,
    link: "https://www.instagram.com/sahil_khadka_627/"
  },
  {
    image: gmail,
    link: "mailto:sahilkhadka767@gmail.com"
  }
]

const projects = [
  {
    name: "FIB",
    description:
      "Web-based platform that allows users to create a wide range of high-quality capacity profiles. You can quickly set up a capacity profile (FML, IZP or BAR) using customizable formats.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient"
      },
      {
        name: "jQuery",
        color: "pink-text-gradient",
      },
    ],
    image: fib,
    openSource: false,
    source_code_link: "https://www.fibonline.nl/",
  },
  {
    name: "Corrtex",
    description:
      "A privacy writing assistant that helps you improve your texts through smart and simple support. It offers suggestions while you write within Outlook, Gmail, Apple Mail, Word and Google Docs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient"
      },
      {
        name: "jQuery",
        color: "pink-text-gradient",
      },
    ],
    image: corrtex,
    openSource: false,
    source_code_link: "https://corrtex.nl/",
  },
  {
    name: "Abromarkt",
    description:
      "Arbomarkt connects you as an employer or employee with a wide range of occupational health and safety specialists. Take control and find your ideal match quickly and easily.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "jQuery",
        color: "pink-text-gradient"
      }
    ],
    image: abromart,
    openSource: false,
    source_code_link: "http://nischal.caandd.com/",
  },
  {
    name: "SK Restro",
    description:
      "A simple resturant website suitable to be used for a commercial resturant. Smooth UI and suttle animations that make the overall site look pleasing.",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
    ],
    image: restro,
    openSource: true,
    source_code_link: "https://resturant-sahil.vercel.app/",
  },
];

export { services, technologies, experiences, projects, socials };
