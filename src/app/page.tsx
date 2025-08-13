import { siteConfig } from '@/config/site';

import { Metadata } from 'next';

import { HomeHeader } from '@/components/home-header';
import { AboutSection } from '@/components/sections/about';
import { ContactCTASection } from '@/components/sections/contact';
import { GallerySection } from '@/components/sections/gallery';
import { HeroSection } from '@/components/sections/hero';
import { MetricsBar } from '@/components/sections/metrics';
import { ServicesSection } from '@/components/sections/services';
import { TestimonialsSection } from '@/components/sections/testimonials';

export const metadata: Metadata = {
  title: 'Home',
  description: `${siteConfig.description}`,
};

export default function Home() {
  return (
    <>
      <HomeHeader />

      <div className="flex flex-col">
        <HeroSection />

        <AboutSection />

        <MetricsBar />

        <ServicesSection />

        <TestimonialsSection />

        <GallerySection />

        <ContactCTASection />
      </div>
    </>
  );
}
