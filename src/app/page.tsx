import { HeroSection } from '@/components/hero-section';
import { HomeHeader } from '@/components/home-header';

export default function Home() {
  return (
    <>
      <HomeHeader />

      <div className="flex flex-col">
        <HeroSection />

        <section className="flex h-screen flex-col items-center justify-center bg-purple-200">
          <p className="font-bold">Photo Gallery</p>
        </section>

        <section className="flex h-screen flex-col items-center justify-center bg-red-300">
          <p className="font-bold">Contact Us</p>
        </section>
      </div>
    </>
  );
}
