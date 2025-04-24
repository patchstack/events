// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site Configuration
// These values are used throughout the site to provide consistent branding and descriptions.
import authorImage from './assets/profile.avif';

export const SITE_URL = 'https://events.patchstack.com';
export const SITE_TITLE = 'Linkk | Astro Link in Bio Template';
export const SITE_DESCRIPTION =
  'Linkk is a modern link in bio template built with Astro. Perfect for creators and developers looking for a minimal, customizable alternative to Linktree.';

// Profile Configuration
export const PROFILE_CONFIG = {
  name: 'Niall Quinn',
  title: 'Senior Software Engineer',
  bio: 'Building high-performance web applications with TypeScript and React. Previously at Vercel, Stripe, and GitHub.',
  avatar: authorImage,
};

// Social Links Configuration
export const SOCIAL_LINKS = [
  {
    name: 'Bluesky',
    icon: 'simple-icons:bluesky',
    href: '#',
  },
  {
    name: 'X',
    icon: 'simple-icons:x',
    href: '#',
  },
  {
    name: 'LinkedIn',
    icon: 'simple-icons:linkedin',
    href: '#',
  },
  {
    name: 'YouTube',
    icon: 'simple-icons:youtube',
    href: '#',
  },
  {
    name: 'Discord',
    icon: 'simple-icons:discord',
    href: '#',
  },
  {
    name: 'Email',
    icon: 'simple-icons:gmail',
    href: '#',
  },
] as const;

// Newsletter Configuration
export const NEWSLETTER_CONFIG = {
  title: 'Subscribe to my newsletter',
  description: 'Get notified about new content and updates.',
  buttonText: 'Subscribe',
  placeholderText: 'Enter your email',
  successMessage: 'Thanks for subscribing!',
  errorMessage: 'Something went wrong. Please try again.',
};
