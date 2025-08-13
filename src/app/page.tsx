import { HomeHeader } from '@/components/home-header';
import { AboutSection } from '@/components/sections/about';
import { HeroSection } from '@/components/sections/hero';
import { MetricsBar } from '@/components/sections/metrics';
import { TestimonialsSection } from '@/components/sections/testimonials';

export default function Home() {
  return (
    <>
      <HomeHeader />

      <div className="flex flex-col">
        <HeroSection />

        <AboutSection />

        <MetricsBar />

        <section className="flex h-128 flex-col items-center justify-center bg-blue-300">
          <p className="font-bold">Our Services</p>
        </section>

        <TestimonialsSection />

        <section className="flex h-128 flex-col items-center justify-center bg-yellow-300">
          <p className="font-bold">Gallery</p>
        </section>

        <section className="flex h-64 flex-col items-center justify-center bg-gray-300">
          <p className="font-bold">Contact Us (Final CTA)</p>
        </section>
      </div>
    </>
  );
}
