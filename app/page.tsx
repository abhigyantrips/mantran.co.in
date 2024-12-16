import Image from 'next/image';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="flex min-h-[400px] w-full flex-col items-center md:flex-row">
        <div className="relative z-10 w-full py-12 pr-4 md:w-1/3 md:py-24 md:pr-0">
          <div className="relative">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              Welcome to Our Platform
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Discover amazing features and boost your productivity with our
              innovative solutions.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 h-[300px] w-full md:mt-0 md:h-[400px] md:w-2/3">
          <div className="relative h-full w-full">
            <Image
              src="/hero2.jpeg"
              alt="Hero image"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 hidden bg-background md:block"
        style={{
          clipPath: 'polygon(0 0, 75% 0, 40% 100%, 0 100%)',
        }}
      />
    </div>
  );
}
