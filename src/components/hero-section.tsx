'use client';

import { homeConfig } from '@/config/home';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronDown } from 'lucide-react';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fallback manual rotation for testing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % homeConfig.hero.backgrounds.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Try with simple background first */}
      {homeConfig.hero.backgrounds.map((bg, index) => (
        <div
          key={bg.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={bg.src}
            alt={bg.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center text-white">
          <h1 className="mb-4 font-serif text-4xl leading-tight font-bold md:text-6xl lg:text-7xl">
            {homeConfig.hero.title}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 md:text-xl lg:text-2xl">
            {homeConfig.hero.description}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-green-600 text-lg font-semibold transition-all duration-200 hover:scale-105 hover:bg-green-700"
            >
              <Link href={homeConfig.hero.cta.primary.link}>
                {homeConfig.hero.cta.primary.text}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-lg font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-white hover:text-black"
            >
              <Link href={homeConfig.hero.cta.secondary.link}>
                {homeConfig.hero.cta.secondary.text}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
}
