'use client';

import { homeConfig } from '@/config/home';
import { siteConfig } from '@/config/site';
import { ChevronDown } from 'lucide-react';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { WhatsAppIcon } from '@/components/brand-icons';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Image rotation logic
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
      {/* Image Carousel */}
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
          <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-end px-4 md:items-center md:justify-center">
        <div className="text-left text-white md:text-center">
          <h1 className="mb-2 font-serif text-5xl leading-tight font-bold md:text-6xl lg:text-7xl">
            {homeConfig.hero.title}
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-gray-200 md:mb-8 md:text-xl lg:text-2xl">
            {homeConfig.hero.description}
          </p>
          <div className="hidden flex-row justify-center gap-4 md:flex">
            <Button
              asChild
              size="lg"
              className="text-lg font-semibold transition-all duration-200 hover:scale-105"
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
          <Button
            asChild
            size="lg"
            className="mb-24 bg-green-700 hover:bg-green-900 md:hidden"
          >
            <Link
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon fill="white" className="size-5" />
              Contact Us
            </Link>
          </Button>
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
