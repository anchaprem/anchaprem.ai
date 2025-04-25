import { ReactNode } from 'react';
import { Icons } from '../components/AccomplishmentIcons';

export type Accomplishment = {
  id: string;
  title: string;
  organization: string;
  description: string;
  date: string;
  type: 'certification' | 'workshop' | 'bootcamp' | 'achievement';
  icon: ReactNode;
  image?: string;
  badge?: string;
  tags: string[];
  certificateLink?: string;
  verificationLink?: string;
};

export const accomplishments: Accomplishment[] = [
  {
    id: 'github-arctic',
    title: 'Arctic Code Vault Contributor',
    organization: 'GitHub',
    description: 'Contributed code to repositories that were archived in the 2020 GitHub Arctic Code Vault, a program for preserving open source software for future generations.',
    date: '2024-01-15',
    type: 'achievement',
    icon: Icons.Code(),
    image: '/images/arctic-vault.png',
    badge: 'Special',
    tags: ['Open Source', 'GitHub', 'Code Contribution'],
    certificateLink: 'https://github.com/users/yourusername/achievements/arctic-code-vault-contributor',
    verificationLink: 'https://archiveprogram.github.com/'
  },
  {
    id: 'meta-frontend',
    title: 'Meta Front-End Developer Professional Certificate',
    organization: 'Meta',
    description: 'Comprehensive front-end development program covering React, JavaScript, and modern web development practices.',
    date: '2023-12-15',
    type: 'certification',
    icon: Icons.Meta(),
    image: '/images/meta-cert.png',
    badge: 'Featured',
    tags: ['React', 'JavaScript', 'Web Development', 'CSS', 'HTML'],
    certificateLink: 'https://coursera.org/verify/professional-cert/META-FRONTEND',
    verificationLink: 'https://coursera.org/verify/META-FRONTEND-VERIFY'
  },
  {
    id: 'python-advanced',
    title: 'Advanced Python Programming',
    organization: 'Python Institute',
    description: 'Advanced concepts in Python including decorators, generators, and advanced OOP patterns.',
    date: '2023-10-01',
    type: 'certification',
    icon: Icons.Python(),
    image: '/images/python-cert.png',
    tags: ['Python', 'OOP', 'Advanced Programming'],
    certificateLink: 'https://python.institute/cert/PYTHON-ADV',
    verificationLink: 'https://python.institute/verify/PYTHON-ADV'
  },
  {
    id: 'fcc-responsive',
    title: 'Responsive Web Design',
    organization: 'freeCodeCamp',
    description: 'Comprehensive curriculum covering modern responsive web design principles and techniques.',
    date: '2023-08-15',
    type: 'certification',
    icon: Icons.FreeCodeCamp(),
    image: '/images/fcc-cert.png',
    tags: ['HTML', 'CSS', 'Responsive Design'],
    certificateLink: 'https://freecodecamp.org/certification/responsive-web',
    verificationLink: 'https://freecodecamp.org/verify/responsive-web'
  },
  {
    id: 'react-workshop',
    title: 'Advanced React Patterns Workshop',
    organization: 'React Summit',
    description: 'Intensive workshop on advanced React patterns, hooks, and performance optimization.',
    date: '2023-07-01',
    type: 'workshop',
    icon: Icons.Code(),
    image: '/images/react-workshop.png',
    tags: ['React', 'JavaScript', 'Performance'],
    certificateLink: 'https://reactsummit.com/cert/REACT-PATTERNS',
    verificationLink: 'https://reactsummit.com/verify/REACT-PATTERNS'
  },
  {
    id: 'hackerrank-js',
    title: 'JavaScript (Intermediate) Certificate',
    organization: 'HackerRank',
    description: 'Certification demonstrating proficiency in intermediate JavaScript concepts.',
    date: '2023-06-15',
    type: 'certification',
    icon: Icons.HackerRank(),
    image: '/images/hackerrank-cert.png',
    tags: ['JavaScript', 'Problem Solving'],
    certificateLink: 'https://hackerrank.com/certificates/javascript-intermediate',
    verificationLink: 'https://hackerrank.com/verify/javascript-intermediate'
  },
  {
    id: 'web-bootcamp',
    title: 'Full Stack Web Development Bootcamp',
    organization: 'Tech Academy',
    description: 'Intensive 12-week bootcamp covering full stack web development.',
    date: '2023-05-01',
    type: 'bootcamp',
    icon: Icons.Briefcase(),
    image: '/images/bootcamp-cert.png',
    tags: ['Full Stack', 'Web Development', 'Node.js', 'React'],
    certificateLink: 'https://techacademy.com/cert/FSWD-2023',
    verificationLink: 'https://techacademy.com/verify/FSWD-2023'
  }
];

export const getRecentAccomplishments = (count: number): Accomplishment[] => {
  return accomplishments
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}; 