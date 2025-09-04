import React from 'react';
import Image from 'next/image';
import { Identity } from '@/config/identity';

export function Footer() {
  return (
    <footer className="relative bg-amber-900 text-white overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/10 via-purple-900/5 to-transparent pointer-events-none"></div>

      <div className="relative mx-auto px-4 text-left py-6">
        <section className='flex justify-between items-center text-xs text-gray-400'>
          <div className="flex items-center space-x-3">
            <Image
              src="/branding/logo.png"
              alt="PKWY Wellness Logo"
              width={40}
              height={40}
              className="opacity-80"
            />
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-amber-100">
              © 2025 {Identity.companyName}
            </p>
            <div className="flex space-x-2">
              <div className="w-1.5 h-1.5 bg-amber-400/50 rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-yellow-400/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
