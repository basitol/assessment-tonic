import Link from 'next/link';
import {Badge} from '@/components/ui/badge';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-background max-w-6xl mx-auto'>
      <div className='container px-4 py-12 md:py-16'>
        <div className='grid gap-8 lg:grid-cols-4'>
          <div className='flex flex-col gap-10'>
            <Link
              href='/'
              className='text-2xl font-bold flex items-center gap-2'>
              <Image src='/LogoDark.svg' width={24} height={32} alt='logo' />
              <span className='text-[43px] font-bold'>Boldo</span>
            </Link>
            <p className='text-grey max-w-xl font-open-sans leading-7'>
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <p className='text-sm text-muted-foreground'>
              All rights reserved.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className='space-y-4'>
            <h3 className='font-bold text-xl font-open-sans'>Landings</h3>
            <nav className='flex flex-col space-y-6'>
              <Link
                href='/home'
                className='text-xl text-muted-foreground hover:text-foreground'>
                Home
              </Link>
              <Link
                href='/products'
                className='text-xl text-muted-foreground hover:text-foreground'>
                Products
              </Link>
              <Link
                href='/services'
                className='text-xl text-muted-foreground hover:text-foreground'>
                Services
              </Link>
            </nav>
          </div>

          <div className='space-y-4'>
            <h3 className='font-bold text-xl font-open-sans'>Company</h3>
            <nav className='flex flex-col space-y-6'>
              <Link
                href='/home'
                className='text-xl text-muted-foreground hover:text-foreground font-open-sans'>
                Home
              </Link>
              <div className='flex items-center gap-2'>
                <Link
                  href='/careers'
                  className='text-xl text-muted-foreground hover:text-foreground'>
                  Careers
                </Link>
                <Badge
                  variant='secondary'
                  className='bg-green text-dark-blue hover:bg-[#65E4A3]/90 px-3.5 py-0.5 rounded-full font-open-sans font-bold text-sm'>
                  Hiring!
                </Badge>
              </div>
              <Link
                href='/services'
                className='text-xl text-muted-foreground hover:text-foreground'>
                Services
              </Link>
            </nav>
          </div>

          <div className='space-y-4'>
            <h3 className='font-bold text-xl font-open-sans'>Resources</h3>
            <nav className='flex flex-col space-y-6'>
              <Link
                href='/blog'
                className='text-xl text-muted-foreground hover:text-foreground'>
                Blog
              </Link>
              <Link
                href='/products'
                className='text-xl text-muted-foreground hover:text-foreground'>
                Products
              </Link>
              <Link
                href='/services'
                className='text-xl text-muted-foreground hover:text-foreground'>
                Services
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
