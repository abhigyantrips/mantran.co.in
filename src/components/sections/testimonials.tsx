'use client';

import { type Testimonial, testimonialsConfig } from '@/config/testimonials';
import { ChevronLeft, ChevronRight, Star, X } from 'lucide-react';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

// Extended testimonial type with tempId for animations
interface AnimatedTestimonial extends Testimonial {
  tempId: number;
}

interface TestimonialCardProps {
  position: number;
  testimonial: AnimatedTestimonial;
  handleMove: (steps: number) => void;
  cardSize: number;
  onOpenModal: (testimonial: Testimonial) => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
  onOpenModal,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        'absolute top-1/2 left-1/2 cursor-pointer rounded-lg border-2 p-6 transition-all duration-500 ease-in-out',
        isCenter
          ? 'bg-primary border-primary z-10 scale-105 shadow-xl'
          : 'bg-card border-border hover:border-primary/50 z-0 hover:shadow-md'
      )}
      style={{
        width: cardSize,
        height: cardSize * 0.8,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -30 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 1.5 : -1.5}deg)
        `,
      }}
    >
      {/* Header */}
      <div className="mb-4">
        <h3
          className={cn(
            'text-lg font-semibold transition-colors duration-500 ease-in-out',
            isCenter ? 'text-primary-foreground' : 'text-foreground'
          )}
        >
          {testimonial.name}
        </h3>
        <p
          className={cn(
            'text-sm transition-colors duration-500 ease-in-out',
            isCenter ? 'text-primary-foreground/80' : 'text-muted-foreground'
          )}
        >
          {testimonial.role}
          {testimonial.company && ` • ${testimonial.company}`}
        </p>
      </div>

      {/* Testimonial Text */}
      <div className="mb-4">
        <p
          className={cn(
            'line-clamp-4 text-base leading-relaxed italic transition-colors duration-500 ease-in-out',
            isCenter ? 'text-primary-foreground' : 'text-foreground'
          )}
        >
          "{testimonial.excerpt}"
        </p>
      </div>

      {/* Action Button */}
      {isCenter && (
        <div className="absolute right-4 bottom-4 transition-opacity duration-500 ease-in-out">
          <Button
            size="sm"
            variant="secondary"
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(testimonial);
            }}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-xs transition-all duration-200"
          >
            Read Full
          </Button>
        </div>
      )}

      {/* Rating Stars */}
      {testimonial.rating && (
        <div className="absolute top-4 right-4 transition-opacity duration-500 ease-in-out">
          <div className="flex gap-0.5">
            {Array.from({ length: testimonial.rating }, (_, i) => (
              <span
                key={i}
                className={cn(
                  'text-sm transition-colors duration-500 ease-in-out',
                  isCenter ? 'text-yellow-400' : 'text-yellow-500'
                )}
                style={{
                  transitionDelay: isCenter ? `${250 + i * 20}ms` : '0ms',
                }}
              >
                <Star className="size-3 fill-current" />
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface TestimonialModalProps {
  testimonial: Testimonial | null;
  open: boolean;
  onClose: () => void;
}

const TestimonialModal: React.FC<TestimonialModalProps> = ({
  testimonial,
  open,
  onClose,
}) => {
  if (!testimonial) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="h-screen max-h-none max-w-screen overflow-y-auto rounded-none md:h-auto md:max-w-2xl md:rounded-lg">
        <DialogHeader>
          <DialogTitle className="mb-2 text-xl font-semibold">
            {testimonial.name}
          </DialogTitle>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-muted-foreground">
              {testimonial.role}
              {testimonial.company && ` • ${testimonial.company}`}
            </p>
            {testimonial.rating && (
              <div className="flex gap-0.5">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i} className="text-sm text-yellow-500">
                    <Star className="fill-yellow-500" />
                  </span>
                ))}
              </div>
            )}
          </div>
        </DialogHeader>

        <div className="mt-6">
          <blockquote className="border-primary border-l-4 pl-4 text-lg leading-relaxed italic">
            "{testimonial.fullTestimonial}"
          </blockquote>
        </div>

        <div className="mt-6 border-t pt-4">
          <p className="text-muted-foreground text-right text-sm">
            — {testimonial.name}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export function TestimonialsSection() {
  const [cardSize, setCardSize] = useState(320);
  const [carouselHeight, setCarouselHeight] = useState(500);
  const [testimonialsList, setTestimonialsList] = useState<
    AnimatedTestimonial[]
  >(
    testimonialsConfig.testimonials.map((testimonial, index) => ({
      ...testimonial,
      tempId: index,
    }))
  );
  const [modalTestimonial, setModalTestimonial] = useState<Testimonial | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  const handleOpenModal = (testimonial: Testimonial) => {
    setModalTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModalTestimonial(null), 200);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia('(min-width: 640px)');
      setCardSize(matches ? 320 : 280);
      setCarouselHeight(matches ? 500 : 400); // Shorter on mobile
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <section className="bg-muted/30 py-16">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="mb-8 text-center md:mb-12">
          <h2 className="mb-4 font-serif text-3xl font-bold">
            {testimonialsConfig.title}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            {testimonialsConfig.description}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative w-full overflow-hidden"
          style={{ height: carouselHeight }}
        >
          {testimonialsList.map((testimonial, index) => {
            const position =
              testimonialsList.length % 2
                ? index - (testimonialsList.length + 1) / 2
                : index - testimonialsList.length / 2;

            return (
              <TestimonialCard
                key={testimonial.tempId}
                testimonial={testimonial}
                handleMove={handleMove}
                position={position}
                cardSize={cardSize}
                onOpenModal={handleOpenModal}
              />
            );
          })}

          {/* Navigation Controls */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            <Button
              onClick={() => handleMove(-1)}
              size="icon"
              variant="outline"
              className="bg-background hover:bg-primary hover:text-primary-foreground h-12 w-12 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={() => handleMove(1)}
              size="icon"
              variant="outline"
              className="bg-background hover:bg-primary hover:text-primary-foreground h-12 w-12 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonial Modal */}
      <TestimonialModal
        testimonial={modalTestimonial}
        open={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
