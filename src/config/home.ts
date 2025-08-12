import { BackgroundImage } from '@/types';

export type HomeConfig = typeof homeConfig;

export const homeConfig = {
  title: 'Mantran Counseling Services',
  description:
    'Mantran Counseling Services is a counseling center in Delhi NCR, India. We provide counseling services for individuals, couples, and families.',

  hero: {
    title: 'Healing Towards Happiness',
    description:
      "Expert psychological support and career guidance to help you navigate life's challenges and achieve your full potential.",
    cta: {
      primary: {
        text: 'Our Services',
        link: '/services',
      },
      secondary: {
        text: 'Get In Touch',
        link: '/contact',
      },
    },
    backgrounds: [
      {
        id: 'hero-1',
        src: '/backgrounds/1.jpg',
        alt: 'Professional counseling session in a comfortable environment',
      },
      {
        id: 'hero-2',
        src: '/backgrounds/2.jpg',
        alt: 'Peaceful therapy room with natural lighting',
      },
      {
        id: 'hero-3',
        src: '/backgrounds/3.jpg',
        alt: 'Mental wellness consultation with expert counselor',
      },
    ] as BackgroundImage[],
  },

  about: {
    title: 'About Us',
    content:
      'Mantran Counseling Services is a counseling center in Delhi NCR, India. We provide counseling services for individuals, couples, and families.',
    cta: {
      text: 'Learn More',
      link: '/about',
    },
  },
};
