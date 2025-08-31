import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Identity } from '@/config/identity';
import { Fonts } from '@/config/fonts';
import { Instagram } from 'lucide-react';

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

      <section className='space-y-4'>
        <div className='flex gap-2 justify-center items-center'>
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
        </div>

        <div className='flex justify-center items-center'>
          <a
            href={Identity.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-105 hover:brightness-110"
          >
            <Button
              variant='outline'
              size='icon'
              className="w-10 h-10 rounded-full border-2 border-pink-300 hover:border-pink-500 hover:bg-pink-50 transition-all duration-300 brightness-105"
            >
              <Instagram className="w-5 h-5 text-pink-500 hover:text-pink-600 transition-colors duration-300" />
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}