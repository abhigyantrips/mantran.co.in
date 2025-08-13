export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  excerpt: string;
  fullTestimonial: string;
  rating?: number;
}

const baseTestimonials: Testimonial[] = [
  {
    id: 'sarah-m',
    name: 'Sarah M.',
    role: 'Marketing Professional',
    company: 'Delhi',
    excerpt:
      'Mantran helped me overcome my anxiety and find confidence in my career.',
    fullTestimonial:
      "I was struggling with severe anxiety that was affecting both my personal and professional life. The sessions at Mantran were transformative. Dr. Tripathi's approach was both professional and deeply empathetic. Over the course of 6 months, I learned coping strategies that have fundamentally changed how I handle stress. I'm now thriving in my career and have the tools to maintain my mental wellness. I cannot recommend their services enough.",
    rating: 5,
  },
  {
    id: 'raj-k',
    name: 'Raj K.',
    role: 'Software Engineer',
    company: 'Gurgaon',
    excerpt:
      'The career counseling session gave me clarity about my future path.',
    fullTestimonial:
      "I was at a crossroads in my career, unsure whether to continue in software development or transition to management. The career counseling sessions were incredibly insightful. We explored my strengths, values, and long-term goals through various assessments and discussions. The guidance I received helped me make an informed decision that I'm confident about. The process was thorough, professional, and tailored to my specific situation.",
    rating: 5,
  },
  {
    id: 'priya-s',
    name: 'Priya S.',
    role: 'Student',
    company: 'Noida',
    excerpt: 'Found the strength to overcome depression and rebuild my life.',
    fullTestimonial:
      "After losing my father, I fell into a deep depression that lasted months. I couldn't function normally and was failing my studies. The therapy sessions at Mantran literally saved my life. The safe space provided allowed me to process my grief properly. Through a combination of counseling techniques and gradual exposure therapy, I slowly rebuilt my confidence and found joy in life again. The journey wasn't easy, but having such professional and caring support made all the difference.",
    rating: 5,
  },
  {
    id: 'amit-t',
    name: 'Amit T.',
    role: 'Business Owner',
    company: 'Delhi',
    excerpt:
      'Relationship counseling saved my marriage and taught us better communication.',
    fullTestimonial:
      'My wife and I were on the brink of separation. Years of poor communication and unresolved conflicts had built up walls between us. The couples counseling sessions were a turning point. We learned to listen to each other, express our needs without blame, and rebuild trust. The therapist provided practical tools and exercises that we still use today. Our marriage is stronger now than it has been in years, and we have the skills to handle future challenges together.',
    rating: 5,
  },
  {
    id: 'sneha-r',
    name: 'Sneha R.',
    role: 'College Student',
    company: 'Ghaziabad',
    excerpt: 'Career guidance helped me choose the right path for my future.',
    fullTestimonial:
      "I was completely confused about my career after 12th grade. My parents wanted me to pursue engineering, but I had different interests. The career counseling sessions helped me understand my aptitude, interests, and personality traits. Through various assessments and discussions, I discovered my passion for psychology and decided to pursue it. The counselor also helped me research colleges and prepare for entrance exams. Today, I'm thriving in my psychology program and grateful for the guidance that led me here.",
    rating: 5,
  },
];

// Create duplicates with different IDs
const createDuplicates = (
  testimonials: Testimonial[],
  suffix: string
): Testimonial[] => {
  return testimonials.map((testimonial) => ({
    ...testimonial,
    id: `${testimonial.id}-${suffix}`,
  }));
};

export const testimonialsConfig = {
  title: 'What Our Clients Say',
  description:
    'Real stories from people who found their path to healing and growth.',
  testimonials: [
    ...baseTestimonials,
    ...createDuplicates(baseTestimonials, '2'),
    ...createDuplicates(baseTestimonials, '3'),
  ] satisfies Testimonial[],
};

export type TestimonialsConfig = typeof testimonialsConfig;
