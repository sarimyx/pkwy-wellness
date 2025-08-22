import React from 'react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className={`bg-black text-white`}>
      <div className="mx-auto px-4 text-left py-4">
        <section className='flex justify-between items-center text-xs text-gray-500'>
          <Image
            src="/branding-kit/PKWY-logo.png"
            alt="PKWY Wellness Logo"
            width={50}
            height={50}
          />
          <p>
            © 2025 PKWY Wellness
          </p>
        </section>
      </div>
    </footer>
  );
}
