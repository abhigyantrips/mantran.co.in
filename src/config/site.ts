import { CompanyLogo, ContactInfo, NavLink, SocialLink } from '@/types';

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

  contact: {
    phone: '+91 12345 67890',
    email: 'mantrancounseling@gmail.com',
  } as ContactInfo,

  socials: [
    {
      name: 'Facebook',
      href: 'https://facebook.com/mantran',
      icon: 'facebook',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/mantran',
      icon: 'linkedin',
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/mantran',
      icon: 'instagram',
    },
  ] as SocialLink[],

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
