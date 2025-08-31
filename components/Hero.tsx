import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Identity } from '@/config/identity';
import { Instagram } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <main id="home" className="space-y-8">

      <section className='space-y-4'>
        <div className="flex justify-center items-center">
          <Image
            src="/branding/PKWY-icon-2.png"
            alt="PKWY Wellness Instructor"
            width={100}
            height={100}
            className="object-cover transition-transform duration-300 rounded-3xl"
          />
        </div>

        <div className='text-center'>
          <h1 className='text-xs text-gray-400 tracking-widest'>
            MEET YOUR INSTRUCTOR
          </h1>
          <h2 className='text-2xl font-light text-gray-900'>
            SAMANTHA
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/branding/PKWY-instructor.png"
            alt="PKWY Wellness Instructor"
            width={250}
            height={250}
            className="object-cover transition-transform duration-300 rounded-3xl"
          />
        </div>
      </section>

      <section className='flex gap-2 justify-center items-center'>
        <a href={Identity.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            Book a Class
          </Button>
        </a>

        <a
          href={Identity.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant='secondary'>
            Contact Me
          </Button>
        </a>
      </section>

      <section>
        <div className='text-center'>
          <Link
            href={Identity.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Instagram className="w-4 h-4" />
            <span className="text-sm font-light">Instagram</span>
          </Link>
        </div>
      </section>

    </main>
  );
}