'use client';

import {Card} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {ArrowLeft, ArrowRight} from 'lucide-react';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';

export default function TestimonialCarousel() {
  const testimonials = [
    {
      quote:
        'Buyer buzz partner network disruptive non-disclosure agreement business',
      author: 'Albus Dumbledore',
      position: 'Manager @ Howarts',
      avatar: '/Avatar1.png',
    },
    {
      quote:
        'Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.',
      author: 'Severus Snape',
      position: 'Manager @ Slytherin',
      avatar: '/Avatar2.png',
    },
    {
      quote:
        'Release facebook responsive web design business model canvas seed money monetization.',
      author: 'Harry Potter',
      position: 'Team Leader @ Gryffindor',
      avatar: '/Avatar3.png',
    },
  ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const nextSlide = () => {
  //   setCurrentIndex(prevIndex =>
  //     prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
  //   );
  // };

  // const previousSlide = () => {
  //   setCurrentIndex(prevIndex =>
  //     prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
  //   );
  // };

  return (
    <section className='bg-[#0A2640] py-24 px-4 md:px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-between items-start mb-12 h-full'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-normal text-white max-w-3xl'>
            An enterprise template to ramp up your company website
          </h2>
          <div className='flex gap-4 items-end h-24'>
            <Button
              variant='outline'
              size='icon'
              className='rounded-full bg-white hover:bg-gray-100 h-[72px] w-[72px]'
              aria-label='Next testimonial'>
              <ArrowLeft
                style={{height: '36px', width: '36px'}}
                className='text-3xl'
              />
            </Button>

            <Button
              variant='outline'
              size='icon'
              className='rounded-full bg-white hover:bg-gray-100 h-[72px] w-[72px]'
              aria-label='Next testimonial'>
              <ArrowRight
                style={{height: '36px', width: '36px'}}
                className='text-3xl'
              />
            </Button>
          </div>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`p-10 transition-opacity duration-300 h-fit`}>
              <blockquote className='mb-6 text-2xl  leading-9'>
                {testimonial.quote}
              </blockquote>
              <div className='flex items-center gap-4'>
                <Avatar>
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.author}
                  />
                  <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className='font-bold font-open-sans'>
                    {testimonial.author}
                  </div>
                  <div className='text-sm text-dark-blue font-open-sans'>
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
