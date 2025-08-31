// Package data configuration - UI Metadata (Stripe products fetched dynamically)
export interface PackageMetadata {
  id: string;
  stripeProductId?: string; // Link to Stripe product ID
  displayName: string; // For UI display
  classes: number;
  features: string[];
  popular?: boolean;
  sortOrder?: number; // For ordering packages
}

// UI metadata - defines how packages appear and behave in the app
// sortOrder field controls display order (lower numbers appear first)
export const packageMetadata: PackageMetadata[] = [
  {
    id: '2-classes',
    displayName: '2 Classes',
    classes: 2,
    features: [
      '2 Pilates sessions',
      'Flexible scheduling',
      'Expert instruction',
      'Studio access'
    ],
    sortOrder: 1
  },
  {
    id: '4-classes',
    displayName: '4 Classes',
    classes: 4,
    features: [
      '4 Pilates sessions',
      'Flexible scheduling',
      'Expert instruction',
      'Studio access',
      'Progress tracking'
    ],
    sortOrder: 2
  },
  {
    id: '7-classes',
    displayName: '7 Classes',
    classes: 7,
    features: [
      '7 Pilates sessions',
      'Flexible scheduling',
      'Expert instruction',
      'Studio access',
      'Progress tracking',
      'Priority booking'
    ],
    popular: true,
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
  return packageMetadata.find(pkg => pkg.id === id);
}

export function getAllPackageMetadata(): PackageMetadata[] {
  return packageMetadata.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
}

export function getPopularPackageMetadata(): PackageMetadata | undefined {
  return packageMetadata.find(pkg => pkg.popular);
}

/**
 * Get packages sorted by sortOrder for debugging
 * Useful for verifying the sort order is working correctly
 */
export function getSortedPackageMetadata(): PackageMetadata[] {
  return [...packageMetadata].sort((a, b) => {
    const aOrder = a.sortOrder || 0;
    const bOrder = b.sortOrder || 0;
    return aOrder - bOrder;
  });
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

// For API/Stripe usage - returns simplified package data (will be updated to fetch from Stripe)
export function getStripePackages() {
  return packages.reduce((acc, pkg) => {
    acc[pkg.id] = {
      name: pkg.name,
      price: pkg.priceInCents,
      description: pkg.description
    };
    return acc;
  }, {} as Record<string, { name: string; price: number; description: string }>);
}
