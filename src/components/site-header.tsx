'use client';

import { siteConfig } from '@/config/site';
import { Mail, Phone } from 'lucide-react';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  WhatsAppIcon,
} from '@/components/brand-icons';
import { MobileNav } from '@/components/mobile-nav';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const socialIcons = {
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
};

function ContactBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'bg-green-600 px-2 py-1 text-sm text-white md:px-4 md:py-2',
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Desktop: Full contact info + socials */}
        <div className="hidden items-center gap-4 sm:flex">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <Link href={`tel:${siteConfig.contact.phone}`}>
              {siteConfig.contact.phone}
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <Link href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </Link>
          </div>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          {siteConfig.socials.map((social) => {
            const Icon = socialIcons[social.icon];
            return (
              <Link
                key={social.name}
                href={social.href}
                className="rounded p-1 transition-colors hover:bg-white/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-4 w-4" />
              </Link>
            );
          })}
        </div>

        {/* Mobile: Only call/email buttons */}
        <div className="flex w-full items-center justify-center gap-2 sm:hidden">
          <Button
            asChild
            size="sm"
            variant="ghost"
            className="h-6 px-2 text-xs text-white hover:bg-white/20 hover:text-white"
          >
            <Link href={`tel:${siteConfig.contact.phone}`}>
              <Phone className="mr-1 h-3 w-3" />
              Call Us
            </Link>
          </Button>
          <div className="h-4 w-px bg-white/30" />
          <Button
            asChild
            size="sm"
            variant="ghost"
            className="h-6 px-2 text-xs text-white hover:bg-white/20 hover:text-white"
          >
            <Link href={`mailto:${siteConfig.contact.email}`}>
              <Mail className="mr-1 h-3 w-3" />
              Email Us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function HeaderContent({ className }: { className?: string }) {
  return (
    <div className={cn('bg-white md:px-4', className)}>
      <div className="container mx-auto">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <div className="relative h-12 w-40 md:h-16 md:w-42">
              <Image
                src="/logo.svg"
                alt="Mantran Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-border mr-4 h-12 w-px" />
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

          {/* Desktop Navigation */}
          <nav className="hidden items-center md:flex">
            {siteConfig.links.map((link) => (
              <Button asChild key={link.name} className="mr-2" variant="ghost">
                <Link href={link.href}>{link.name}</Link>
              </Button>
            ))}
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon fill="white" className="size-5" />
                Contact Us
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu */}
          <MobileNav />
        </div>
      </div>
    </div>
  );
}

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
    return (
      <header
        className={cn(
          'fixed top-0 z-40 w-full shadow-md transition-transform duration-300',
          isScrolled ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <HeaderContent />
      </header>
    );
  }

  return (
    <header className="w-full">
      <ContactBar
        className={cn(
          'transition-all duration-300',
          isScrolled ? 'h-0 overflow-hidden py-0' : 'h-auto'
        )}
      />
      <HeaderContent className="border-b" />
    </header>
  );
}
