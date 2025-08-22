import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="fixed py-1 top-0 w-full backdrop-blur-sm z-50 border-b border-gray-100/20">
      <div>
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/branding-kit/PKWY-logo-transparent.png"
                width={256}
                height={256}
                alt="PKWY Pilates Logo"
              />
            </Link>
          </div>
        </div>
        <div className="px-5.5 space-y-1">
          <p className='font-light text-xs text-left text-slate-500'>
            Pilates • Wellness
          </p>
        </div>
      </div>
    </header>
  )
}