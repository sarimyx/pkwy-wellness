import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="fixed py-3 top-0 w-full z-50 bg-orange-300 rounded-2xl">
      {/* Backdrop with reduced opacity */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-md"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center h-16">
          <div className="flex items-center justify-center">
            <Link href="/">
              <Image
                src="/branding/logo.png"
                width={180}
                height={180}
                alt="PKWY Pilates Logo"
                className='rounded-md'
              />
            </Link>
          </div>
        </div>
        <div className="px-3 pt-3 space-y-1 text-center">
          <p className='font-light text-xs text-slate-500'>
            Wellness • Pilates • 📍 Pittsburgh, PA
          </p>
        </div>
      </div>
    </header>
  )
}