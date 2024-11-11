'use client';
import {motion} from 'framer-motion';

interface MarqueeLogo {
  id: number;
  name: string;
}

export const LogoMarquee: React.FC = () => {
  const logos: MarqueeLogo[] = [
    {id: 1, name: 'Boldo™'},
    {id: 2, name: 'Presto.ai'},
    {id: 3, name: 'HEIGHTEN'},
    {id: 4, name: 'Waves°'},
    {id: 5, name: 'ANCHOR'},
    {id: 6, name: 'Luna★'},
    // Duplicate set for seamless loop
    {id: 7, name: 'Boldo™'},
    {id: 8, name: 'Presto.ai'},
    {id: 9, name: 'HEIGHTEN'},
    {id: 10, name: 'Waves°'},
    {id: 11, name: 'ANCHOR'},
    {id: 12, name: 'Luna★'},
  ];

  return (
    <div className='relative w-full overflow-hidden mt-20'>
      <div className='absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#0A2640] to-transparent z-10' />
      <div className='absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#0A2640] to-transparent z-10' />

      <motion.div
        className='flex whitespace-nowrap gap-8'
        animate={{
          x: [0, -'50%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          },
        }}>
        {logos.map(logo => (
          <div
            key={logo.id}
            className='inline-flex items-center justify-center min-w-[200px] px-8'>
            <span className='text-2xl font-bold text-white opacity-30 hover:opacity-60 transition-opacity duration-300'>
              {logo.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
