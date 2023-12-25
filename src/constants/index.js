import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  followMe,
  netPc,
  eventPlanner,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  /* {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  }, */
  {
    name: 'git',
    icon: git,
  },
  /* {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  }, */
];

const experiences = [
  {
    title: 'IT Technician',
    company_name: 'Team Source Petroleum',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jan 2019 - Jun 2020',
  },
  {
    title: 'HR Coordinator assistant',
    company_name: 'Team Source Petroleum',
    icon: microverse,
    iconBg: '#333333',
    date: 'Jul 2020 - Apr 2021',
  },
  {
    title: 'IT engineer',
    company_name: 'LABORATOIRE FECHKEUR',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Dec 2021 - Jun 2022',
  },
  {
    title: 'IT Freelancer',
    company_name: 'NetPC Informatique',
    icon: dcc,
    iconBg: '#333333',
    date: 'Mar 2020 - Nov 2023',
  },
  {
    title: 'Web developer',
    company_name: 'Freelancer',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jun 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'FollowMeAcademy',
    description: 'App management of an online school of English courses.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: followMe,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'NetPc Services',
    description:
      'A landing page showing services proposed by the company.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: netPc,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://netpc-f4ad3.web.app/',
  },
  {
    id: 'project-3',
    name: 'Event Planner',
    description: 'An app for creating and planing events',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: eventPlanner,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
 
];

export { services, technologies, experiences, projects };
