import { siteConfig } from '@/config/site';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { WhatsAppIcon } from './brand-icons';

const socialIcons = {
  facebook: Facebook,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Instagram, // fallback
};

export function HomeHeader() {
  return (
    <>
      {/* Contact Bar */}
      <div className="absolute top-0 z-30 w-full bg-green-600 px-4 py-2 text-sm text-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
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
          <div className="flex items-center gap-2">
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
        </div>
      </div>

      {/* Transparent Header */}
      <div className="absolute top-12 z-30 w-full px-4">
        <div className="container mx-auto flex h-20 items-center justify-between">
          <div className="relative h-12 w-40 md:h-16 md:w-42">
            <Image
              src="/logo.svg"
              alt="Mantran Logo"
              fill
              className="object-contain brightness-0 invert" // Makes logo white
            />
          </div>
          <nav className="flex items-center">
            {siteConfig.links.map((link) => (
              <Button
                asChild
                key={link.name}
                className="mr-2 text-white hover:bg-white/20 hover:text-white"
                variant="ghost"
              >
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
        </div>
      </div>
    </>
  );
}
