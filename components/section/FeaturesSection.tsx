import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {Check, Eye, Feather, Sun} from 'lucide-react';
import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <div className='max-w-6xl mx-auto px-4 pt-16 pb-[222px] relative'>
      <div className='grid lg:grid-cols-2 gap-12 items-center relative'>
        {/* Left Column */}
        {/* <div className='relative'> */}
        <Card className='relative z-10 bg-transparent shadow-lg rounded-[26px]'>
          <Image
            src='/person.png'
            alt='Business analytics'
            className='w-full h-auto'
            width={400}
            height={400}
          />
          <div className='absolute top-[250px] right-14 bg-white p-10 rounded-[12px] shadow-lg z-20'>
            <Image
              src='/chart.svg'
              width={170}
              height={227}
              alt='barchart'
              className='pb-5'
            />
            <div className='text-2xl font-bold text-dark-blue'>30%</div>
            <div className='text-sm text-dark-blue'>More income in June</div>
          </div>
        </Card>
        {/* </div> */}

        {/* Right Column */}
        <div className='space-y-8'>
          <h2 className='text-3xl md:text-4xl font-normal leading-[56px]'>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>

          <div className='space-y-6'>
            {[
              'We connect our customers with the best.',
              'Advisor success customer launch party.',
              'Business-to-consumer long tail.',
            ].map((text, index) => (
              <div key={index} className='flex items-center gap-7'>
                <div className='bg-dark-blue rounded-full p-1.5'>
                  <Check className='h-4 w-4 text-primary-foreground' />
                </div>
                <span className='font-open-sans text-xl'>{text}</span>
              </div>
            ))}
          </div>

          <Button
            size='lg'
            className='bg-dark-blue text-white mt-4 rounded-full px-14 py-4 font-bold text-xl font-open-sans'>
            Start now
          </Button>
        </div>
      </div>

      {/* Second Section */}
      <div className='grid lg:grid-cols-2 gap-12 items-center mt-[224px]'>
        {/* Left Column */}
        <div className='mt-[108px]'>
          <h2 className='text-3xl md:text-4xl font-normal leading-[56px] mb-16'>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>

          <div className='flex flex-col gap-6'>
            <div className='flex items-center gap-4 bg-dark-blue text-primary-foreground p-4 rounded-lg'>
              <Feather className='h-5 w-5' />
              <span>We connect our customers with the best.</span>
            </div>

            <div className='flex items-center gap-4 bg-white p-4 rounded-lg shadow-lg'>
              <Eye className='h-5 w-5' />
              <span>Advisor success customer launch party.</span>
            </div>

            <div className='flex items-center gap-4 bg-white p-4 rounded-lg shadow-lg'>
              <Sun className='h-5 w-5' />
              <span>Business-to-consumer long tail.</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        {/* <div className='relative'> */}
        <Card className='relative z-10 bg-transparent shadow-lg rounded-[24px]'>
          <div className='h-[523px]'>
            <Image
              src='/person2.png'
              alt='Business metrics'
              className='w-full h-full object-cover rounded-[24px]'
              width={400}
              height={400}
            />
          </div>
          <div className='absolute top-[304px] left-12 bg-white p-12 rounded-lg shadow-lg'>
            <div className='space-y-2'>
              <Image
                src='/PieGraph.svg'
                width={170}
                height={227}
                alt='barchart'
                className='pb-5'
              />
              <div className='flex items-center gap-2'>
                <span className='h-1.5 w-1.5  bg-[#0DBBFC] rounded-full'></span>
                <span className='text-sm'>35% - Agile Development</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='h-1.5 w-1.5  bg-green rounded-full'></span>
                <span className='text-sm'>30% - Investor bandwidth</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='h-1.5 w-1.5  bg-[#C4C4C4] rounded-full'></span>
                <span className='text-sm'>35% - A/B testing</span>
              </div>
            </div>
          </div>
        </Card>
        {/* </div> */}
      </div>
    </div>
  );
}
