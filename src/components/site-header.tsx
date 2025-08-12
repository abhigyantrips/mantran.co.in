'use client';

import { siteConfig } from '@/config/site';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const socialIcons = {
  facebook: Facebook,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Instagram, // fallback
};

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isHomePage) {
    // Home page header: hidden by default, appears on scroll WITHOUT contact bar
    return (
      <header
        className={cn(
          'fixed top-0 z-40 w-full bg-white px-4 shadow-md transition-transform duration-300',
          isScrolled ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="container mx-auto">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-40 md:h-16 md:w-42">
                <Image
                  src="/logo.svg"
                  alt="Mantran Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="bg-border h-12 w-px" />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="relative h-12 w-16 md:h-16 md:w-24">
                      <Image
                        src="/rci.jpg"
                        alt="Logo of Rehabilitation Council of India"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 64px, 96px"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Rehabilitation Council of India</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <nav className="flex items-center gap-8">
              {siteConfig.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground transition-colors hover:text-blue-600"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-green-600 hover:bg-green-700">
                Get In Touch
              </Button>
            </nav>
          </div>
        </div>
      </header>
    );
  }

  // Other pages header: visible by default with contact bar, hides contact bar on scroll
  return (
    <header className="w-full">
      {/* Contact Bar */}
      <div
        className={cn(
          'bg-green-600 px-4 py-2 text-sm text-white transition-all duration-300',
          isScrolled ? 'h-0 overflow-hidden py-0' : 'h-auto'
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{siteConfig.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>{siteConfig.contact.email}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {siteConfig.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="rounded p-1 hover:bg-white/20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b bg-white px-4">
        <div className="container mx-auto">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-40 md:h-16 md:w-52">
                <Image
                  src="/logo.svg"
                  alt="Mantran Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="bg-border h-12 w-px" />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="relative h-12 w-16 md:h-16 md:w-24">
                      <Image
                        src="/rci.jpg"
                        alt="Logo of Rehabilitation Council of India"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 64px, 96px"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Rehabilitation Council of India</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <nav className="flex items-center gap-8">
              {siteConfig.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground transition-colors hover:text-blue-600"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-green-600 hover:bg-green-700">
                Get In Touch
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
