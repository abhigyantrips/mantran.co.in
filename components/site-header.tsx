import { siteConfig } from '@/config/site';

import Image from 'next/image';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function SiteHeader() {
  return (
    <header className="flex h-36 w-full items-center justify-between px-4 md:container">
      <div className="relative h-12 w-40 md:h-24 md:w-52">
        <Image
          src={siteConfig.logo}
          alt={siteConfig.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 160px, 208px"
          priority
        />
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="relative h-14 w-16 md:h-24 md:w-36">
              <Image
                src="/rci.jpg"
                alt="Logo of Rehabilitation Council of India"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 64px, 80px"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Rehabilitation Council of India</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </header>
  );
}
