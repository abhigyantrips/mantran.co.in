import { HeroSection } from '@/components/hero-section';
import { HomeHeader } from '@/components/home-header';

export default function Home() {
  return (
    <>
      <HomeHeader />

      <div className="flex flex-col">
        <HeroSection />

        <section className="flex h-128 flex-col items-center justify-center bg-purple-200">
          <p className="font-bold">About Us / Meet the Founder</p>
        </section>

        <section className="flex h-48 flex-col items-center justify-center bg-red-300">
          <p className="font-bold">Metrics Bar</p>
        </section>

        <section className="flex h-128 flex-col items-center justify-center bg-blue-300">
          <p className="font-bold">Our Services</p>
        </section>

        <section className="flex h-128 flex-col items-center justify-center bg-green-300">
          <p className="font-bold">Testimonials</p>
        </section>

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
