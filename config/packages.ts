// Package data configuration - Single Source of Truth
export interface PackageMetadata {
  id: string;
  category: string; // e.g., '6-week-flow', 'private-sessions', 'workshops'
  stripeProductId?: string; // Link to Stripe product ID
  displayName: string; // For UI display
  subtitle?: string; // Main title to display prominently
  classes: number;
  price: number; // Price in cents for Stripe
  previousPrice?: number; // Optional previous price in cents for showing discount
  features: string[];
  active: boolean; // Controls visibility - easily toggle offers on/off
  tag?: string; // Optional tag to display above the card (e.g., 'Early Bird', 'Limited Time')
  tagColor?: string; // Optional tag color class (e.g., 'bg-red-500', 'bg-blue-500')
  popular?: boolean;
  sortOrder?: number; // For ordering packages
}

// Active packages - easily toggle visibility with the 'active' boolean
export const packageMetadata: PackageMetadata[] = [
  {
    id: '6-week-early-bird',
    category: '6-week-flow',
    displayName: '6 Classes',
    subtitle: '6-Week Series',
    classes: 6,
    price: 10000, // $100.00 in cents
    previousPrice: 11500, // $115.00 in cents (regular price)
    features: [
      'Limited time offer',
      'Expert Pilates instruction',
      '6-week women\'s series',
      'Flow-based movement patterns',
      'Community support',
      'Studio access',
    ],
    active: true, // Currently active - easily toggle to false to hide
    tag: 'Early Bird',
    tagColor: 'bg-amber-900',
    popular: true,
    sortOrder: 1
  },
  // Future packages - set active: true when ready to launch
  {
    id: '6-week-regular',
    category: '6-week-flow',
    displayName: '6-Week Flow for EveryBODY (Regular)',
    classes: 6,
    price: 11500, // $115.00 in cents
    features: [
      '6-week women\'s series',
      'Expert Pilates instruction',
      'Flow-based movement patterns',
      'Community support',
      'Studio access',
      '$115 after early bird period'
    ],
    active: false, // Hidden for now - set to true when early bird ends
    sortOrder: 2
  },
  {
    id: '6-week-drop-in',
    category: '6-week-flow',
    displayName: '1 Class',
    subtitle: 'Individual Session',
    classes: 1,
    price: 2500, // $25.00 in cents
    features: [
      'Individual class access',
      'Within the 6-week series',
      'Expert Pilates instruction',
      'Flow-based movement patterns',
      'Community support',
      'Studio access'
    ],
    active: true, // Keep single class option available
    tag: 'Drop-In',
    tagColor: 'bg-amber-900',
    sortOrder: 3
  }
];

// Legacy interface for backward compatibility
export interface PackageData {
  id: string;
  name: string;
  displayName: string;
  price: number;
  priceInCents: number;
  classes: number;
  description: string;
  features: string[];
  popular?: boolean;
}

// Utility functions for working with package metadata
export function getPackageMetadataById(id: string): PackageMetadata | undefined {
  return packageMetadata.find(pkg => pkg.id === id && pkg.active);
}

export function getAllPackageMetadata(): PackageMetadata[] {
  return packageMetadata
    .filter(pkg => pkg.active)
    .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
}

export function getPopularPackageMetadata(): PackageMetadata | undefined {
  return packageMetadata.find(pkg => pkg.active && pkg.popular);
}

// Category-based utilities for scalability
export function getPackagesByCategory(category: string): PackageMetadata[] {
  return packageMetadata
    .filter(pkg => pkg.active && pkg.category === category)
    .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
}

export function getAllCategories(): string[] {
  return [...new Set(packageMetadata.filter(pkg => pkg.active).map(pkg => pkg.category))];
}

// Admin utilities (for managing packages)
export function getAllPackageMetadataAdmin(): PackageMetadata[] {
  return [...packageMetadata].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
}

// Legacy functions for backward compatibility (will be updated to use Stripe data)
const packages: PackageData[] = packageMetadata.map(meta => ({
  id: meta.id,
  name: `${meta.displayName} Package`,
  displayName: meta.displayName,
  price: 0, // Will be fetched from Stripe
  priceInCents: 0, // Will be fetched from Stripe
  classes: meta.classes,
  description: `${meta.classes} Pilates sessions with expert instruction`,
  features: meta.features,
  popular: meta.popular
}));

// Legacy functions (will be updated to fetch from Stripe)
export function getPackageById(id: string): PackageData | undefined {
  return packages.find(pkg => pkg.id === id);
}

export function getAllPackages(): PackageData[] {
  return packages;
}

export function getPopularPackage(): PackageData | undefined {
  return packages.find(pkg => pkg.popular);
}

// For API/Stripe usage - returns active package data in the format expected by Stripe API
export function getStripePackages() {
  return packageMetadata
    .filter(pkg => pkg.active)
    .reduce((acc, pkg) => {
      acc[pkg.id] = {
        name: pkg.displayName,
        price: pkg.price,
        description: `${pkg.classes === 6 ? '6-week series' : `${pkg.classes} class${pkg.classes > 1 ? 'es' : ''}`} - Expert Pilates instruction`
      };
      return acc;
    }, {} as Record<string, { name: string; price: number; description: string }>);
}

// Get active package by ID for Stripe API usage
export function getStripePackageById(id: string): { name: string; price: number; description: string } | undefined {
  const pkg = packageMetadata.find(p => p.id === id && p.active);
  if (!pkg) return undefined;

  return {
    name: pkg.displayName,
    price: pkg.price,
    description: `${pkg.classes === 6 ? '6-week series' : `${pkg.classes} class${pkg.classes > 1 ? 'es' : ''}`} - Expert Pilates instruction`
  };
}
