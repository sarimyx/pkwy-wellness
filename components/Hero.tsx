import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Identity } from '@/config/identity';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
import { Fonts } from '@/config/fonts';

export function Hero() {
  return (
    <main id="home" className="space-y-8">

      <section className='space-y-4'>
        <div className="flex justify-center items-center">
          <Image
            src="/branding/icon-2.png"
            alt="PKWY Wellness Instructor"
            width={50}
            height={50}
            className="object-cover transition-transform duration-300 rounded-3xl"
          />
        </div>

        <div className='text-center'>
          <h1 className='text-lg text-gray-400 tracking-widest'>
            MEET YOUR INSTRUCTOR
          </h1>
          <h2 className={`text-5xl font-light text-gray-900 ${Fonts.dancingScript.className}`}>
            SAMANTHA
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/branding/instructor.png"
            alt="PKWY Wellness Instructor"
            width={250}
            height={250}
            className="object-cover transition-transform duration-300 rounded-3xl"
          />
        </div>
      </section>

      <section className='flex gap-2 justify-center items-center'>
        <a href="#pricing"
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
    </main>
  );
}