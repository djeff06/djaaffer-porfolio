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
  firebase,
  mongodb,
  git,
  followMe,
  netPc,
  eventPlanner,
  devK,
  tsp,
  netpc,
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
 
  {
    name: 'mongodb',
    icon: mongodb,
  },
  {
    name: 'firebase',
    icon: firebase,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Consultant IT',
    company_name: 'NetPC Informatique',
    icon: netpc,
    iconBg: '#333333',
    date: 'Mar 2020 - Nov 2023',
  },
  {
    title: 'Web developer',
    company_name: 'DevKnight',
    icon: devK,
    iconBg: '#333333',
    date: 'Jan 2023 - Feb 2024',
  },
  {
    title: 'Assistant HR Coordinator',
    company_name: 'Team Source Petroleum',
    icon: tsp,
    iconBg: '#333333',
    date: 'Jul 2019 - Apr 2020',
  },
  {
    title: 'IT Analyst',
    company_name: 'Team Source Petroleum',
    icon: tsp,
    iconBg: '#333333',
    date: 'Fev 2019 - Jul 2019',
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
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: followMe,
    // repo: '',
    demo: 'https://stg.followmeacademy.com/#ContactUs',
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
    // repo: '',
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
    repo: '',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
 
];

export { services, technologies, experiences, projects };
