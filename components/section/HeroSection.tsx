'use client';

import {Button} from '@/components/ui/button';
import Link from 'next/link';
import {Menu} from 'lucide-react';
import Image from 'next/image';
import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {ProgressBar} from '../ProgressBar';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface LogoItem {
  id: number;
  name: string;
  image?: string;
}

const navItems = ['Product', 'Services', 'About'] as const;
type NavItem = (typeof navItems)[number];

const NavLink: React.FC<NavLinkProps> = ({href, children}) => (
  <Link
    className='text-white hover:text-gray-300 font-semibold transition-colors duration-200'
    href={href}>
    {children}
  </Link>
);

const WindowControls: React.FC = () => (
  <div className='flex gap-2'>
    {['#FC5B00', '#ECAA00', '#009D10'].map((color, i) => (
      <div
        key={i}
        className='w-3 h-3 rounded-full'
        style={{backgroundColor: color}}
      />
    ))}
  </div>
);

const DashboardSection: React.FC = () => {
  const progressBars = [
    {progress: 80, color: 'bg-[#8FB6D5]'},
    {progress: 30, color: 'bg-[#0DBBFC]'},
    {progress: 100, color: 'bg-white'},
    {progress: 75, color: 'bg-green'},
  ];

  return (
    <div className='relative z-10 p-6 space-y-6 w-[500px]'>
      <div className='relative bg-white bg-opacity-[0.18] rounded-xl p-6'>
        <WindowControls />
        <div className='space-y-6 mt-6'>
          {progressBars.map((bar, index) => (
            <ProgressBar
              key={index}
              progress={bar.progress}
              color={bar.color}
            />
          ))}
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className='relative bg-white bg-opacity-[0.18] rounded-xl p-4'>
          <WindowControls />

          <div className='mt-4 px-4'>
            <Image src='/barchart.svg' width={140} height={106} alt='pie' />
          </div>
        </div>

        <div className='relative bg-white bg-opacity-[0.18] rounded-xl p-4'>
          <WindowControls />

          <div className='mt-6 px-4'>
            <Image src='/pie.png' width={201} height={93} alt='pie' />
          </div>
        </div>
      </div>
    </div>
  );
};

const LogoRow: React.FC = () => {
  const logos: LogoItem[] = Array.from({length: 6}).flatMap((_, i) => [
    {id: i * 2 + 1, name: 'Boldo', image: '/LogoWhite.svg'},
    {id: i * 2 + 2, name: 'Presto', image: '/PieLogo.svg'},
  ]);

  return (
    <div className='relative w-full overflow-hidden mt-20'>
      <div className='absolute left-0 top-0 w-[160px] h-full bg-gradient-to-r from-[#0A2640] to-transparent z-10' />
      <div className='absolute right-0 top-0 w-[160px] h-full bg-gradient-to-l from-[#0A2640] to-transparent z-10' />

      <motion.div
        className='flex whitespace-nowrap gap-8 text-white'
        animate={{x: [0, '-50%']}}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}>
        {logos.map(logo => (
          <div
            key={logo.id}
            className='flex items-center gap-2 text-2xl font-bold !text-white mx-8 hover:opacity-50 transition-opacity duration-300'>
            <Image
              src={logo.image || '/default-logo.svg'}
              alt='logo'
              width={22}
              height={22}
            />
            <p className='font-work-sans'>{logo.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const NavItems: React.FC<{items: readonly NavItem[]}> = ({items}) => (
  <>
    {items.map(item => (
      <NavLink key={item} href='#'>
        {item}
      </NavLink>
    ))}
  </>
);

const HeroSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='min-h-full bg-[#0A2640] relative overflow-hidden pb-16'>
      <div className='absolute top-0 right-0 z-0 hidden md:block'>
        <Image
          src='/herobg.png'
          alt='Background Pattern'
          width={789}
          height={777}
        />
      </div>

      <nav className='container mx-auto px-4 py-14 relative z-20'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Image
              src='/boldologo.svg'
              alt='Boldo Logo'
              width={40}
              height={40}
              priority
            />
            <span className='text-[44px] font-bold text-white ml-2'>Boldo</span>
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            <NavItems items={navItems} />
            <Button
              variant='secondary'
              className='rounded-full px-10 font-bold text-dark-blue'>
              Log In
            </Button>
          </div>

          <Button
            variant='ghost'
            className='md:hidden text-white'
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className='h-6 w-6' />
          </Button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{height: 0, opacity: 0}}
              animate={{height: 'auto', opacity: 1}}
              exit={{height: 0, opacity: 0}}
              className='md:hidden mt-4 space-y-4'>
              <NavItems items={navItems} />
              <Button variant='secondary' className='w-full rounded-full'>
                Log In
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className='container mx-auto px-4 mt-2 z-20 relative'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            className='space-y-6'
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}>
            <h1 className='text-5xl md:text-6xl font-normal text-white leading-tight mt-8'>
              Save time by building fast with Boldo Template
            </h1>
            <p className='text-lg max-w-xl text-light-grey'>
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className='flex gap-4'>
              <Button className='rounded-full bg-green hover:bg-green hover:bg-opacity-80 text-dark-blue text-xl font-bold px-14 py-6'>
                Buy template
              </Button>
              <Button
                variant='outline'
                className='rounded-full bg-transparent text-white border-white text-lg px-14 py-6'>
                Explore
              </Button>
            </div>
          </motion.div>

          <motion.div
            className='relative'
            initial={{opacity: 0, x: 20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5, delay: 0.2}}>
            <DashboardSection />
          </motion.div>
        </div>

        <LogoRow />
      </div>
    </div>
  );
};

export default HeroSection;
