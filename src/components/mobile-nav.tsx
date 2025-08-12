'use client';

import { siteConfig } from '@/config/site';
import { Menu } from 'lucide-react';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  WhatsAppIcon,
} from '@/components/brand-icons';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from './ui/button';

const socialIcons = {
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
};

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" className="mx-4 md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="hidden">Main Menu</SheetTitle>
          <div className="relative h-12 w-28">
            <Image
              src="/logo.svg"
              alt="Mantran Logo"
              fill
              className="object-contain"
            />
          </div>
        </SheetHeader>

        {/* Navigation Links */}
        <nav className="flex flex-1 flex-col space-y-2">
          {siteConfig.links.map((link) => (
            <Button
              asChild
              key={link.name}
              variant="ghost"
              className="justify-start"
              onClick={() => setIsOpen(false)}
            >
              <Link href={link.href}>{link.name}</Link>
            </Button>
          ))}
        </nav>

        {/* Bottom Section: Socials + Contact */}
        <div className="border-t pt-4">
          <div className="mb-4 flex justify-center gap-4">
            {siteConfig.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <Button
                  asChild
                  key={social.name}
                  className="rounded-full"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </Link>
                </Button>
              );
            })}
            <Button
              asChild
              className="bg-green-700 hover:bg-green-900"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <Link
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon fill="white" className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
