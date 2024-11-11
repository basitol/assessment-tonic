import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function ConnectSection() {
  return (
    <section className='bg-background py-16'>
      <div className='container px-4 md:px-6 max-w-6xl mx-auto'>
        <div className='space-y-8 md:space-y-12'>
          <div className='relative w-full h-[200px] md:h-[300px] rounded-3xl overflow-hidden'>
            <Image
              src='/connect.png'
              alt='Modern office space with industrial design'
              fill
              className='object-cover'
              priority
            />
          </div>

          <div className='space-y-6 md:space-y-8 md:flex md:items-center md:gap-20'>
            <h2 className='text-xl md:text-3xl font-normal leading-tight text-center md:text-left'>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h2>

            <Accordion type='single' collapsible className='w-full md:!mt-0'>
              <AccordionItem value='item-1' className='border-none'>
                <AccordionTrigger className='hover:no-underline'>
                  <div className='flex items-center gap-3 text-left'>
                    <span className='font-normal text-xl font-open-sans'>
                      We connect our customers with the best?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className='text-sm md:text-base'>
                  We provide industry-leading solutions and connections to help
                  our customers thrive in their business ventures.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-2' className='border-none'>
                <AccordionTrigger className='hover:no-underline'>
                  <div className='flex items-center gap-3 text-left'>
                    <span className='font-normal text-xl font-open-sans'>
                      Android research & development rockstar?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className='text-sm md:text-base'>
                  Our expert Android development team creates innovative mobile
                  solutions that keep our customers ahead of the competition.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
