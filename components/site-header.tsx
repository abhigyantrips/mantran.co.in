import SiteLogo from '@/public/logo.svg';

import Image from 'next/image';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function SiteHeader() {
  return (
    <header className="w-full px-4 md:container">
      <div className="flex items-center justify-between bg-muted p-2">
        <p>info@mantran.co.in</p>
        <p>+91 1234567890</p>
      </div>
      <div className="flex h-36 items-center justify-between">
        <div className="relative h-12 w-40 md:h-24 md:w-52">
          <SiteLogo fill="#000" />
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
      </div>
      <nav className="mt-4 flex space-x-4">{/* ...your nav links... */}</nav>
    </header>
  );
}
