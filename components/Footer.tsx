import React from 'react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className={`bg-black text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left py-8">
        <h3 className="text-2xl mb-4 font-light">PKWY Wellness</h3>
        <p className="text-gray-400 max-w-2xl font-light">
          Transform your body and mind with expert Pilates instruction. Private sessions, group classes, and corporate wellness programs. Serving Pittsburgh and surrounding areas.
        </p>
        <div className="flex justify-end">
          <Image
            src="/branding-kit/PKWY-logo.png"
            alt="PKWY Wellness Logo"
            width={50}
            height={50}
          />
        </div>
      </div>
    </footer>
  );
}
