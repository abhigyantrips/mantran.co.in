export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string; // Lucide icon name
  themeColor: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  hasExternalAction?: boolean;
}

export const servicesConfig = {
  title: 'Our Services',
  description:
    'Comprehensive mental health and wellness solutions tailored to your unique journey.',
  services: [
    {
      id: 'individual-therapy',
      title: 'Individual Therapy',
      shortDescription: 'One-on-one sessions for personal growth and healing',
      fullDescription:
        "Personalized therapeutic sessions designed to help you navigate life's challenges, overcome obstacles, and achieve emotional wellness. Our evidence-based approach creates a safe space for deep healing and personal transformation.",
      icon: 'User',
      themeColor: '#3B82F6', // Blue
      image: '/backgrounds/1.jpg',
      ctaText: 'Schedule Session',
      ctaLink: '/contact',
    },
    {
      id: 'couples-counseling',
      title: 'Couples Counseling',
      shortDescription: 'Strengthen relationships and improve communication',
      fullDescription:
        'Professional guidance to help couples rebuild trust, enhance communication, and create deeper connections. Whether facing challenges or seeking to strengthen your bond, we provide tools for lasting relationship success.',
      icon: 'Heart',
      themeColor: '#EC4899', // Pink
      image: '/backgrounds/2.jpg',
      ctaText: 'Book Consultation',
      ctaLink: '/contact',
    },
    {
      id: 'career-counseling',
      title: 'Career Counseling',
      shortDescription: 'Navigate career transitions and professional growth',
      fullDescription:
        'Expert guidance for career decisions, professional development, and workplace challenges. From career changes to skill development, we help you align your professional path with your personal values and goals.',
      icon: 'Briefcase',
      themeColor: '#10B981', // Green
      image: '/backgrounds/3.jpg',
      ctaText: 'Explore EduMilestones',
      ctaLink: 'https://amantran.edumilestones.com/',
      hasExternalAction: true,
    },
    {
      id: 'anxiety-management',
      title: 'Anxiety Management',
      shortDescription: 'Evidence-based techniques for anxiety relief',
      fullDescription:
        'Comprehensive anxiety treatment using proven therapeutic techniques. Learn coping strategies, breathing exercises, and mindfulness practices to manage anxiety symptoms and regain control of your daily life.',
      icon: 'Shield',
      themeColor: '#8B5CF6', // Purple
      image: '/backgrounds/1.jpg',
      ctaText: 'Start Healing',
      ctaLink: '/contact',
    },
    {
      id: 'group-therapy',
      title: 'Group Therapy',
      shortDescription: 'Healing through shared experiences and community',
      fullDescription:
        'Connect with others facing similar challenges in a supportive group environment. Our facilitated group sessions provide peer support, shared learning, and the healing power of community connection.',
      icon: 'Users',
      themeColor: '#F59E0B', // Amber
      image: '/backgrounds/2.jpg',
      ctaText: 'Join Groups',
      ctaLink: '/contact',
    },
    {
      id: 'family-therapy',
      title: 'Family Therapy',
      shortDescription: 'Healing family dynamics and relationships',
      fullDescription:
        'Specialized family therapy to address complex family dynamics, improve communication, and strengthen familial bonds. Create a harmonious home environment where every family member feels heard and valued.',
      icon: 'Home',
      themeColor: '#EF4444', // Red
      image: '/backgrounds/3.jpg',
      ctaText: 'Restore Harmony',
      ctaLink: '/contact',
    },
    {
      id: 'stress-management',
      title: 'Stress Management',
      shortDescription: 'Practical tools for managing daily stress',
      fullDescription:
        "Learn effective stress management techniques and build resilience for life's challenges. Our practical approach combines relaxation techniques, lifestyle changes, and coping strategies for sustainable stress relief.",
      icon: 'Zap',
      themeColor: '#06B6D4', // Cyan
      image: '/backgrounds/1.jpg',
      ctaText: 'Reduce Stress',
      ctaLink: '/contact',
    },
    {
      id: 'workshops',
      title: 'Workshops & Seminars',
      shortDescription: 'Educational programs for personal development',
      fullDescription:
        'Interactive workshops and seminars covering various aspects of mental health, personal development, and wellness. Perfect for organizations, schools, and community groups seeking to promote mental health awareness.',
      icon: 'GraduationCap',
      themeColor: '#84CC16', // Lime
      image: '/backgrounds/2.jpg',
      ctaText: 'Learn More',
      ctaLink: '/services/workshops',
      hasExternalAction: true,
    },
  ] satisfies Service[],
  cta: {
    text: 'View All Services',
    link: '/services',
  },
};

export type ServicesConfig = typeof servicesConfig;
