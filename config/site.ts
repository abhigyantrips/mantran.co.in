import { CompanyLogo, NavLink } from '@/types/ui';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  title: 'Mantran Counseling Services',
  description:
    'Mantran Counseling Services is a counseling center in Delhi NCR, India. We provide counseling services for individuals, couples, and families.',
  url: 'https://mantran.co.in',
  logo: '/logo.jpeg',
  author: 'Capt. Pratiksha Tripathi (Retd.)',
  keywords: [
    'counseling',
    'therapy',
    'psychology',
    'mental health',
    'wellness',
  ],

  links: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Who We Are',
      href: '/about',
    },
    {
      name: 'Services',
      href: '/services',
    },
    {
      name: 'Career Counseling (EduMilestones)',
      href: '/career-counseling',
      external: true,
    },
  ] as NavLink[],

  logos: [
    {
      id: 'Tech Mahindra',
      description: 'Logo of Tech Mahindra',
      image: '/companies/tech-mahindra.svg',
    },
    {
      id: 'Reliance Foundation',
      description: 'Logo of Reliance Foundation',
      image: '/companies/reliance-foundation.svg',
    },
    {
      id: 'Brooke India',
      description: 'Logo of Brooke India',
      image: '/companies/brooke-india.png',
    },
    {
      id: 'Embassy of Finland - India',
      description: 'Logo of Embassy of Finland - India',
      image: '/companies/embassy-of-finland.png',
    },
    {
      id: 'Army Wives Welfare Association',
      description: 'Logo of Army Wives Welfare Association',
      image: '/companies/awwa.png',
    },
  ] as CompanyLogo[],
};
