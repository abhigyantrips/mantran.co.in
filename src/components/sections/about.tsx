import Image from 'next/image';

import {
  LeafDecoration1,
  LeafDecoration2,
} from '@/components/ui/leaf-decorations';

export function AboutSection() {
  return (
    <section className="bg-background relative overflow-hidden py-16 md:py-24">
      {/* Leaf decorations */}
      <LeafDecoration1 position="top-right" opacity={0.06} />
      <LeafDecoration2 position="bottom-left" opacity={0.04} />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-foreground font-serif text-3xl font-bold md:text-4xl">
                Meet the Founder
              </h2>
              <div className="bg-primary h-1 w-16 rounded-full"></div>
            </div>

            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">
                  Captain Pratiksha Tripathi (Retd.)
                </span>{' '}
                brings over 15 years of experience in psychological counseling
                and career guidance, with a unique perspective shaped by her
                distinguished military service.
              </p>

              <p>
                After serving her country with honor, she transitioned her
                leadership skills and deep understanding of human resilience
                into helping individuals navigate life's challenges. Her
                approach combines evidence-based therapeutic techniques with the
                practical wisdom gained from years of supporting people through
                difficult transitions.
              </p>

              <p>
                Specializing in anxiety management, career transitions, and
                personal growth, Captain Tripathi has helped hundreds of clients
                discover their inner strength and build meaningful, fulfilling
                lives.
              </p>
            </div>

            {/* Credentials */}
            <div className="border-t pt-8">
              <p className="text-muted-foreground mb-2 text-sm">
                Certified by:
              </p>
              <div className="text-foreground text-sm font-medium">
                Rehabilitation Council of India • Licensed Clinical Psychologist
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-first md:order-none">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="bg-muted aspect-[4/5] md:aspect-[5/4]">
                <Image
                  src="/heroes/1.jpeg"
                  alt="Captain Pratiksha Tripathi (Retd.)"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Decorative accent */}
              <div className="bg-primary/10 absolute -right-6 -bottom-6 -z-10 h-24 w-24 rounded-full"></div>
              <div className="bg-primary/20 absolute -top-6 -left-6 -z-10 h-16 w-16 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
