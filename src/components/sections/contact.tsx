import { siteConfig } from '@/config/site';
import { Mail, Phone } from 'lucide-react';

import Link from 'next/link';

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  WhatsAppIcon,
} from '@/components/brand-icons';
import { Button } from '@/components/ui/button';
import {
  LeafDecoration1,
  LeafDecoration2,
} from '@/components/ui/leaf-decorations';

const socialIcons = {
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
};

export function ContactCTASection() {
  return (
    <section className="bg-primary relative overflow-hidden py-24 md:py-32">
      {/* Organic leaf decorations */}
      <LeafDecoration1 position="top-right" opacity={0.08} />
      <LeafDecoration2 position="bottom-left" opacity={0.06} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Main CTA Text */}
        <div className="mb-8 space-y-4">
          <h2 className="text-primary-foreground font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-foreground/90 mx-auto max-w-2xl text-lg md:text-xl">
            Take the first step toward healing and personal growth. Connect with
            us today and discover the support you deserve.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {/* WhatsApp Primary Button */}
          <Button
            asChild
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 min-w-[200px] !px-4 py-6 text-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105"
          >
            <Link
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="mr-2 size-5" fill="currentColor" />
              Contact on WhatsApp
            </Link>
          </Button>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            {siteConfig.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <Button
                  asChild
                  key={social.name}
                  size="icon"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 size-12 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon className="size-5" />
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 space-y-2">
          <p className="text-primary-foreground/80 text-sm">
            Or reach us directly
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <div className="flex items-center gap-2">
              <Phone className="text-primary-foreground size-5" />
              <Link
                href={`tel:${siteConfig.contact.phone}`}
                className="text-primary-foreground hover:text-primary-foreground/80 underline-offset-2 transition-colors hover:underline"
              >
                {siteConfig.contact.phone}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-primary-foreground size-5" />
              <Link
                href={`mailto:${siteConfig.contact.email}`}
                className="text-primary-foreground hover:text-primary-foreground/80 underline-offset-2 transition-colors hover:underline"
              >
                {siteConfig.contact.email}
              </Link>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="border-primary-foreground/20 mt-16 border-t pt-8">
          <blockquote className="text-primary-foreground/90 italic">
            <p className="mb-2 text-lg">
              "The journey of a thousand miles begins with one step."
            </p>
            <cite className="text-primary-foreground/70 text-sm">
              — Lao Tzu
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
