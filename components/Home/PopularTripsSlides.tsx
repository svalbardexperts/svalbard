import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  arrowGreenRight,
  arrowWhiteUp,
  tripsImg1,
  tripsImg2,
  tripsImg3,
  tripsImg4,
  tripsImg6,
} from '@/constants/images';
import Image from 'next/image';
import Link from 'next/link';

const trips = [
  {
    img: tripsImg1,
    title: 'Longyearbyen',
    text: 'A trip to the capital of Svalbard',
  },
  {
    img: tripsImg2,
    title: 'Barentsburg',
    text: 'See the fjords up close',
  },
  {
    img: tripsImg3,
    title: 'Pyramiden',
    text: 'Where coal mines meet the sky',
  },
  {
    img: tripsImg4,
    title: 'Ny-Alesund',
    text: 'Enjoy a trip in a dog sled',
  },
  {
    img: tripsImg2,
    title: 'Forlandet nasjonalpark',
    text: 'Journey to the most beautiful natiopnal park',
  },
  {
    img: tripsImg6,
    title: 'Sveagruva',
    text: 'Snowmobiling in one of the world’s craziest landscape',
  },
];

export function PopularTripsSlides() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className='w-full '
    >
      <CarouselContent>
        {trips.map((trip, index) => (
          <CarouselItem key={index} className='md:basis-1/4'>
            <Card className='h-[440px] bg-transparent relative flex items-center justify-center mx-[6px]'>
              <CardContent className='flex flex-col aspect-square items-center justify-center absolute top-0  z-20'>
                <div
                  className='w-[54px] h-[54px] rounded-full bg-base grid place-content-center relative z-20'
                  style={{
                    border: '6px solid white',
                  }}
                >
                  <Image
                    src={arrowWhiteUp}
                    width={16}
                    height={16}
                    alt='Arrow'
                  />
                </div>
                <div className='w-[252px] h-[280px] -translate-y-7'>
                  <Image
                    src={trip.img}
                    alt={trip.title}
                    width={252}
                    height={280}
                    className='h-full rounded-sm'
                  />
                </div>
              </CardContent>
              {/* card desccriptions */}
              <div className='w-[280px] h-[242px] rounded-md bg-primaryText absolute -bottom-0'>
                <div className='absolute bottom-0 pl-4 pb-5'>
                  <h3 className='font-medium text-xl leading-[30px] text-[#2E3034]'>
                    {trip.title}
                  </h3>
                  <p className='text-normal text-[15px] leading-6 text-[#53555A] mt-1 mb-4'>
                    {trip.text}
                  </p>

                  <Link href='' className='flex gap-2'>
                    <span className='text-[15px] font-semibold leading-6 text-[#017867] underline '>
                      Book now
                    </span>
                    <Image src={arrowGreenRight} alt='Book now' />
                  </Link>
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='-translate-x-3' />
      <CarouselNext className='translate-x-3' />
    </Carousel>
  );
}
