export interface NavLink {
  name: string;
  href: string;
  external?: boolean;
}

export interface CompanyLogo {
  id: string;
  description: string;
  image: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: 'facebook' | 'linkedin' | 'instagram' | 'twitter';
}

export interface ContactInfo {
  phone: string;
  email: string;
}

export interface BackgroundImage {
  id: string;
  src: string;
  alt: string;
}
