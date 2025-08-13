'use client';

import { type Service, servicesConfig } from '@/config/services';
import * as Icons from 'lucide-react';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  service: Service;
  isActive: boolean;
  progress: number;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  isActive,
  progress,
  onClick,
}) => {
  // Get the icon component dynamically
  const IconComponent = Icons[
    service.icon as keyof typeof Icons
  ] as React.ComponentType<{ className?: string }>;

  return (
    <div
      onClick={onClick}
      className={cn(
        'relative cursor-pointer overflow-hidden rounded-lg border-2 p-4 transition-all duration-300',
        isActive
          ? 'bg-card border-border shadow-md'
          : 'hover:bg-muted/50 border-transparent bg-transparent'
      )}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div
          className="shrink-0 rounded-full p-2"
          style={{ backgroundColor: `${service.themeColor}20` }}
        >
          <IconComponent className={`h-5 w-5 text-${service.themeColor}`} />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h3 className="text-foreground mb-1 font-semibold">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </div>

      {/* Progress Bar - Only show on desktop */}
      {isActive && (
        <div className="bg-muted absolute right-0 bottom-0 left-0 h-1 overflow-hidden rounded-full">
          <div
            className="h-full rounded-full transition-all duration-100 ease-linear"
            style={{
              width: `${progress}%`,
              backgroundColor: service.themeColor,
            }}
          />
        </div>
      )}
    </div>
  );
};

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef(0);

  const activeService = servicesConfig.services[activeIndex];
  const CYCLE_DURATION = 5000; // 5 seconds

  // Progress bar animation
  useEffect(() => {
    if (isPaused) return;

    const progressInterval = setInterval(() => {
      progressRef.current += 2;
      setProgress(progressRef.current);
    }, 100);

    return () => clearInterval(progressInterval);
  }, [isPaused, activeIndex]); // Reset when activeIndex changes

  // Service advancement
  useEffect(() => {
    if (isPaused) return;

    const advanceInterval = setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % servicesConfig.services.length
      );
      progressRef.current = 0; // Reset progress ref
      setProgress(0); // Reset progress state
    }, CYCLE_DURATION);

    return () => clearInterval(advanceInterval);
  }, [isPaused, activeIndex]);

  // Center the active card in the scroll container
  useEffect(() => {
    const activeCard = cardRefs.current[activeIndex];
    const container = scrollContainerRef.current;

    if (activeCard && container) {
      const containerHeight = container.clientHeight;
      const cardTop = activeCard.offsetTop;
      const cardHeight = activeCard.clientHeight;

      // Calculate scroll position to center the card
      const scrollTop = cardTop - containerHeight / 2 + cardHeight / 2;

      container.scrollTo({
        top: scrollTop,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  const handleServiceClick = (index: number) => {
    setActiveIndex(index);
    progressRef.current = 0;
    setProgress(0);
  };

  // Get the icon component for mobile display
  const ActiveIconComponent = Icons[
    activeService.icon as keyof typeof Icons
  ] as React.ComponentType<{ className?: string }>;

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            {servicesConfig.title}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            {servicesConfig.description}
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="mb-12 hidden gap-8 lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Scrollable Services List */}
          <div className="relative">
            {/* Top Shadow */}
            <div className="from-background pointer-events-none absolute top-0 right-0 left-0 z-10 h-8 bg-gradient-to-b to-transparent" />

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className="scrollbar-hide h-[500px] space-y-2 overflow-y-auto py-8 md:h-[600px] xl:h-[700px]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none', // IE/Edge
              }}
            >
              {servicesConfig.services.map((service, index) => (
                <div
                  key={service.id}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                >
                  <ServiceCard
                    service={service}
                    isActive={index === activeIndex}
                    progress={index === activeIndex ? progress : 0}
                    onClick={() => handleServiceClick(index)}
                  />
                </div>
              ))}
            </div>

            {/* Bottom Shadow */}
            <div className="from-background pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-8 bg-gradient-to-t to-transparent" />
          </div>

          {/* Right Side - Active Service Display */}
          <div className="flex h-[500px] flex-col md:h-[600px] xl:h-[700px]">
            <div className="relative mb-6 flex-1 overflow-hidden rounded-3xl">
              <div className="relative h-full">
                <Image
                  src={activeService.image}
                  alt={`${activeService.title} service`}
                  fill
                  className="object-cover transition-opacity duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* CTA Button Overlay */}
                {activeService.ctaText && (
                  <div className="absolute right-4 bottom-4">
                    <Button
                      asChild
                      style={{ backgroundColor: activeService.themeColor }}
                      className="text-white shadow-lg hover:opacity-90"
                      size="sm"
                    >
                      <Link
                        href={activeService.ctaLink || '/contact'}
                        target={
                          activeService.hasExternalAction ? '_blank' : undefined
                        }
                        rel={
                          activeService.hasExternalAction
                            ? 'noopener noreferrer'
                            : undefined
                        }
                      >
                        {activeService.ctaText}
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="rounded-full p-2"
                  style={{ backgroundColor: `${activeService.themeColor}20` }}
                >
                  <ActiveIconComponent
                    className={`h-6 w-6 text-${activeService.themeColor}`}
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold">
                  {activeService.title}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {activeService.fullDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Centered */}
        <div className="mb-12 flex flex-col items-center lg:hidden">
          {/* Image with Progress Bar at Bottom */}
          <div className="relative mb-6 w-full max-w-sm overflow-hidden rounded-2xl">
            <div className="relative aspect-[4/5]">
              <Image
                src={activeService.image}
                alt={`${activeService.title} service`}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Progress Bar at Bottom of Image */}
            <div className="absolute right-0 bottom-0 left-0 h-1 overflow-hidden bg-black/30">
              <div
                className="h-full transition-all duration-100 ease-linear"
                style={{
                  width: `${progress}%`,
                  backgroundColor: activeService.themeColor,
                }}
              />
            </div>
          </div>

          {/* Icon and Title - Centered */}
          <div className="mb-4 flex flex-col items-center gap-3">
            <div
              className="rounded-full p-3"
              style={{ backgroundColor: `${activeService.themeColor}20` }}
            >
              <ActiveIconComponent
                className={`h-8 w-8 text-${activeService.themeColor}`}
              />
            </div>
            <h3 className="text-center font-serif text-2xl font-bold">
              {activeService.title}
            </h3>
          </div>

          {/* Description - Centered */}
          <p className="text-muted-foreground mb-6 max-w-sm text-center leading-relaxed">
            {activeService.fullDescription}
          </p>

          {/* CTA Button - Centered */}
          {activeService.ctaText && (
            <Button
              asChild
              style={{ backgroundColor: activeService.themeColor }}
              className="text-white shadow-lg hover:opacity-90"
              size="lg"
            >
              <Link
                href={activeService.ctaLink || '/contact'}
                target={activeService.hasExternalAction ? '_blank' : undefined}
                rel={
                  activeService.hasExternalAction
                    ? 'noopener noreferrer'
                    : undefined
                }
              >
                {activeService.ctaText}
              </Link>
            </Button>
          )}
        </div>

        {/* View All Services CTA */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href={servicesConfig.cta.link}>
              {servicesConfig.cta.text}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
