import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';

export default function Component() {
  return (
    <section className='relative my-20'>
      <div className='relative mx-auto max-w-[1200px] rounded-2xl bg-[#0A2640] px-6 py-16 md:px-12 md:py-20'>
        <div className='absolute right-0 top-0 hidden md:block z-0'>
          <Image
            src='/enterprise.png'
            width={750}
            height={400}
            alt='Enterprise decoration'
            className='z-0'
          />
        </div>
        <div className='mx-auto max-w-3xl text-center z-10 relative'>
          <h2 className='mb-12 text-3xl font-normal leading-tight text-white md:text-4xl lg:text-[48px] lg:leading-tight'>
            An enterprise template to ramp{' '}
            <span className='block'>up your company website</span>
          </h2>
          <form className='mx-auto flex max-w-xl flex-col gap-4 sm:flex-row sm:items-center'>
            <Input
              type='email'
              placeholder='Your email address'
              className='h-14 flex-1 rounded-full border-0 bg-white px-6 text-lg placeholder:text-[#0A2640] focus-visible:ring-0 focus-visible:ring-offset-0 lg:h-[56px] lg:text-xl'
              required
            />
            <Button
              type='submit'
              className='h-14 rounded-full bg-[#65E4A3] px-10 text-lg font-bold text-[#0A2640] hover:bg-[#65E4A3]/90 lg:h-[56px] lg:px-14 lg:text-xl'>
              Start now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
