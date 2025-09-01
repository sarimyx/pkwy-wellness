import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="fixed py-1 top-0 w-full z-50 bg-orange-200 rounded-md">
      {/* Backdrop with reduced opacity */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-md"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/branding/logo.png"
                width={256}
                height={256}
                alt="PKWY Pilates Logo"
                className='rounded-md mt-3'
              />
            </Link>
          </div>
        </div>
        <div className="px-3 pt-4 space-y-1">
          <p className='font-light text-xs text-left text-slate-500'>
            Wellness • Pilates • 📍 Pittsburgh, PA
          </p>
        </div>
      </div>
    </header>
  )
}