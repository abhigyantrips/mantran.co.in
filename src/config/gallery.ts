export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const galleryConfig = {
  title: 'Moments of Healing',
  description:
    'A glimpse into our supportive environment and successful journeys.',
  autoplayDuration: 7000, // 7 seconds
  images: [
    {
      id: 'project-flower',
      src: '/gallery/1.jpg',
      alt: 'Welcoming therapy room with natural light',
      title: 'Project Flower',
      description:
        'Our project with the Army Wives Welfare Association (AWWA) to support the mental health of army wives.',
    },
    {
      id: 'corporate-workshop',
      src: '/gallery/2.jpg',
      alt: 'Corporate workshop on mental health awareness',
      title: 'Corporate Wellness',
      description:
        'Conducting workshops to promote mental well-being in corporate environments.',
    },
    {
      id: 'healing-space-1',
      src: '/backgrounds/1.jpg',
      alt: 'Comfortable counseling room with natural lighting',
      title: 'Healing Environment',
      description:
        'Our thoughtfully designed spaces create a safe, comfortable atmosphere where clients feel at ease to share and grow.',
    },
    {
      id: 'therapy-session',
      src: '/backgrounds/2.jpg',
      alt: 'Professional therapy session in progress',
      title: 'Personal Growth',
      description:
        "One-on-one sessions focused on individual healing, self-discovery, and building resilience for life's challenges.",
    },
    {
      id: 'peaceful-consultation',
      src: '/backgrounds/3.jpg',
      alt: 'Peaceful consultation room setup',
      title: 'Safe Space',
      description:
        'Every corner of our practice is designed to promote tranquility, trust, and open communication.',
    },
  ] satisfies GalleryImage[],
};

export type GalleryConfig = typeof galleryConfig;
