'use client';

import { type GalleryImage, galleryConfig } from '@/config/gallery';
import useEmblaCarousel from 'embla-carousel-react';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

interface ThumbnailProps {
  image: GalleryImage;
  isActive: boolean;
  onClick: () => void;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ image, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      'relative overflow-hidden rounded-lg transition-all duration-300',
      'h-16 w-20 md:h-20 md:w-24 lg:h-24 lg:w-32',
      isActive
        ? 'ring-primary scale-105 shadow-lg ring-2'
        : 'ring-border hover:ring-primary/50 opacity-70 ring-1 hover:scale-102 hover:opacity-100'
    )}
  >
    <Image
      src={image.src}
      alt={image.alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 80px, (max-width: 1024px) 96px, 128px"
    />
  </button>
);

interface ImageDisplayProps {
  image: GalleryImage;
  progress: number;
  onPause: () => void;
  onResume: () => void;
  imageKey: number;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({
  image,
  progress,
  onPause,
  onResume,
  imageKey,
}) => (
  <div
    className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl md:aspect-[4/3] lg:aspect-[16/10]"
    onMouseEnter={onPause}
    onMouseLeave={onResume}
    onTouchStart={onPause}
    onTouchEnd={onResume}
  >
    <Image
      key={imageKey}
      src={image.src}
      alt={image.alt}
      fill
      className="animate-in fade-in-0 object-cover transition-transform duration-700 hover:scale-105"
      sizes="(max-width: 1024px) 100vw, 75vw"
      priority
    />

    {/* Text Overlay - Darker shadow */}
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 text-white lg:p-6">
      <h3 className="mb-2 text-xl font-bold lg:text-2xl">{image.title}</h3>
      <p className="text-sm leading-relaxed text-white/95 lg:text-base">
        {image.description}
      </p>
    </div>

    {/* Progress Bar - Above overlay with z-index */}
    <div className="absolute right-0 bottom-0 left-0 z-20 h-1 bg-white/30">
      <div
        className="h-full bg-yellow-500 transition-all duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

export function GallerySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageKey, setImageKey] = useState(0);
  const progressRef = useRef(0);

  const images = galleryConfig.images;
  const activeImage = images[activeIndex];

  // Handle embla carousel selection
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const newIndex = emblaApi.selectedScrollSnap();
      setActiveIndex(newIndex);
      setImageKey((prev) => prev + 1);
      progressRef.current = 0;
      setProgress(0);
    };

    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Progress bar animation
  useEffect(() => {
    if (isPaused) return;

    const progressInterval = setInterval(() => {
      progressRef.current += 100 / (galleryConfig.autoplayDuration / 100);
      setProgress(progressRef.current);
    }, 100);

    return () => clearInterval(progressInterval);
  }, [isPaused, activeIndex]);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused || !emblaApi) return;

    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, galleryConfig.autoplayDuration);

    return () => clearInterval(autoplayInterval);
  }, [emblaApi, isPaused, activeIndex]);

  const handleThumbnailClick = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            {galleryConfig.title}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            {galleryConfig.description}
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="mb-12 hidden gap-8 lg:grid lg:grid-cols-[3fr_auto]">
          <ImageDisplay
            image={activeImage}
            progress={progress}
            onPause={() => setIsPaused(true)}
            onResume={() => setIsPaused(false)}
            imageKey={imageKey}
          />

          {/* Vertical Thumbnails */}
          <div className="flex flex-col gap-4">
            {images.map((image, index) => (
              <Thumbnail
                key={image.id}
                image={image}
                isActive={index === activeIndex}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="mb-6">
            <ImageDisplay
              image={activeImage}
              progress={progress}
              onPause={() => setIsPaused(true)}
              onResume={() => setIsPaused(false)}
              imageKey={imageKey}
            />
          </div>

          {/* Horizontal Thumbnails */}
          <div className="overflow-hidden px-3" ref={emblaRef}>
            <div className="-mx-3 flex gap-3">
              {images.map((image, index) => (
                <div key={image.id} className="flex-none first:ml-3 last:mr-3">
                  <Thumbnail
                    image={image}
                    isActive={index === activeIndex}
                    onClick={() => handleThumbnailClick(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Counter */}
        <div className="mt-6 text-center">
          <p className="text-muted-foreground text-sm">
            {activeIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </section>
  );
}
