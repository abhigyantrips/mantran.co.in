'use client';

import { siteConfig } from '@/config/site';
import AutoScroll from 'embla-carousel-auto-scroll';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="flex h-screen flex-col items-center justify-center bg-blue-200">
        <p className="font-bold">CTA Section</p>
      </section>
      <section className="py-32">
        <div className="flex flex-col items-center text-center">
          <h1 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
            We Have Worked With
          </h1>
        </div>
        <div className="pt-10 md:pt-16 lg:pt-20">
          <div className="relative mx-auto flex items-center justify-center">
            <Carousel
              opts={{ loop: true }}
              plugins={[AutoScroll({ playOnInit: true, speed: 0.55 })]}
            >
              <CarouselContent className="ml-0 items-center">
                {siteConfig.logos.map((logo) => (
                  <CarouselItem
                    key={logo.id}
                    className="basis-1/3 pl-0 md:basis-1/4 lg:basis-1/5"
                  >
                    <div className="mx-8 flex shrink-0 cursor-pointer items-center justify-center grayscale saturate-0 transition-all duration-300 hover:grayscale-0 hover:saturate-100">
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className="h-auto w-48"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
          </div>
        </div>
      </section>
      <section className="flex h-screen flex-col items-center justify-center bg-purple-200">
        <p className="font-bold">Photo Gallery</p>
      </section>
      <section className="flex h-screen flex-col items-center justify-center bg-red-300">
        <p className="font-bold">Contact Us</p>
      </section>
    </div>
  );
}
