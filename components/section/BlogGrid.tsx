import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader} from '@/components/ui/card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';

export default function BlogGrid() {
  const posts = [
    {
      image: '/blog1.png',
      category: 'Category',
      date: 'November 22, 2021',
      title: 'Pitch termsheet backing validation focus release.',
      author: {
        name: 'Chandler Bing',
        avatar: '/blogperson1.png',
      },
    },
    {
      image: '/blog2.png',
      category: 'Category',
      date: 'November 22, 2021',
      title:
        'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
      author: {
        name: 'Rachel Green',
        avatar: '/blogperson2.png',
      },
    },
    {
      image: '/blog3.png',
      category: 'Category',
      date: 'November 22, 2021',
      title:
        'Beta prototype sales iPad gen-z marketing network effects value proposition',
      author: {
        name: 'Monica Geller',
        avatar: '/blogperson3.png',
      },
    },
  ];

  return (
    <section className='py-16 px-4 md:px-6'>
      <div className='mx-auto max-w-6xl space-y-12'>
        <div className='space-y-4 text-center'>
          <p className='text-xl text-muted-foreground'>Our Blog</p>
          <h2 className='mx-auto max-w-4xl text-3xl font-normal md:text-4xl lg:text-5xl'>
            Value proposition accelerator product management venture
          </h2>
        </div>

        <div className='grid gap-8 md:grid-cols-3'>
          {posts.map((post, index) => (
            <Card
              key={index}
              className='flex h-full flex-col border-none shadow-none'>
              <CardHeader className='p-0'>
                <Image
                  src={post.image}
                  width={300}
                  height={209}
                  alt=''
                  className='h-48 w-full rounded-lg object-cover'
                />
              </CardHeader>
              <CardContent className='flex flex-1 flex-col justify-between px-0 pt-6'>
                <div className='space-y-3'>
                  <div className='flex items-center gap-3 text-sm'>
                    <span className='font-bold text-primary'>
                      {post.category}
                    </span>
                    <span className='text-muted-foreground'>{post.date}</span>
                  </div>
                  <h3 className='text-xl font-normal'>{post.title}</h3>
                </div>
                <div className='mt-5 flex items-center gap-3'>
                  <Avatar className='h-8 w-8'>
                    <AvatarImage
                      src={post.author.avatar}
                      alt={post.author.name}
                    />
                    <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className='text-sm text-muted-foreground'>
                    {post.author.name}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='flex justify-center'>
          <Button
            variant='outline'
            size='lg'
            className='rounded-full border-2 border-primary px-14 py-4 font-bold'>
            Load more
          </Button>
        </div>
      </div>
    </section>
  );
}
