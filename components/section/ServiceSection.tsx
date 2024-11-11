'use client';

import {Card, CardContent} from '@/components/ui/card';
import {ArrowRight} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';

const features = [
  {
    title: 'Cool feature title',
    description: 'Learning curve network effects return on investment.',
    bgColor: 'bg-emerald-200',
    illustration: '/cool.png',
  },
  {
    title: 'Even cooler feature',
    description: 'Learning curve network effects return on investment.',
    bgColor: 'bg-gray-100',
    illustration: '/cooler.png',
  },
  {
    title: 'Cool feature title',
    description: 'Learning curve network effects return on investment.',
    bgColor: 'bg-emerald-200',
    illustration: '/coolest.png',
  },
];

export default function ServiceSection() {
  return (
    <section className='py-20 px-4 md:px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center space-y-4'>
          <h2 className='text-gray-600 font-normal text-xl'>Our Services</h2>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-normal max-w-3xl mx-auto text-black'>
            Handshake infographic mass market crowdfunding iteration.
          </h3>
        </div>

        <div className='grid md:grid-cols-3 gap-6 mt-20 justify-between'>
          {features.map((feature, index) => (
            <Card key={index} className='border-0 shadow-none  rounded-[24px]'>
              <CardContent
                className={`p-0 ${feature.bgColor} aspect-square rounded-[24px] h-[354px] w-[300px] mb-6`}>
                <Image
                  src={feature.illustration}
                  alt={`Illustration for ${feature.title}`}
                  className='w-full h-full object-contain rounded-[24px]'
                  width={300}
                  height={354}
                />
              </CardContent>
              <div className='space-y-6 w-[300px]'>
                <h4 className='text-2xl font-normal'>{feature.title}</h4>
                <p className='text-gray-600 text-xl'>{feature.description}</p>
                <motion.div
                  whileHover='hover'
                  initial='initial'
                  className='inline-block'>
                  <Link
                    href='#'
                    className='inline-flex items-center text-dark-blue text-xl font-bold pb-2 group border-b border-dark-blue cursor-pointer'>
                    <span className=''>Explore page</span>
                    <motion.span
                      className='ml-2 inline-flex items-center  justify-center '
                      variants={{
                        initial: {width: '16px'},
                        hover: {width: '32px'},
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                      }}>
                      <motion.span
                        className='h-[1.5px] bg-blue-700'
                        variants={{
                          initial: {width: 0},
                          hover: {width: '16px'},
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 10,
                        }}
                      />
                      <ArrowRight className='h-4 w-4 -ml-1' />
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
