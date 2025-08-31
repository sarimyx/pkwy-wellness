import Image from 'next/image';
import Link from 'next/link';
import { PinkGradientSplash } from './decoration/pink-gradient-splash';

export function Navbar() {
  return (
    <header className="fixed py-1 top-0 w-full z-50 border-b border-gray-100/20">
      {/* Enhanced pink hue overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-pink-400/100 via-purple-300/30 to-pink-200/20 pointer-events-none"></div> */}
      <PinkGradientSplash />

      {/* Backdrop with reduced opacity */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-md"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/branding/logo-transparent.png"
                width={256}
                height={256}
                alt="PKWY Pilates Logo"
              />
            </Link>
          </div>
        </div>
        <div className="px-5.5 space-y-1">
          <p className='font-light text-xs text-left text-slate-500'>
            Wellness • Pilates • 📍 Pittsburgh, PA
          </p>
        </div>
      </div>
    </header>
  )
}