"use client";
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
import Modal from '../ui/modal';
import {
  tripsImg1Mobile,
  tripsImg2Mobile,
  tripsImg3Mobile,
  tripsImg4Mobile,
} from '@/constants/mobileImages';


const trips = [
  {
    img: tripsImg1,
    title: 'Longyearbyen',
    text: 'Visit the northernmost capital in the world.',
  },
  {
    img: tripsImg2,
    title: 'Barentsburg',
    text: 'A journey to the second biggest town in Svalbard.',
  },
  {
    img: tripsImg3,
    title: 'Pyramiden',
    text: 'Explore the abandoned coal mining town.',
  },
  {
    img: tripsImg4,
    title: 'Ny-Alesund',
    text: 'Enjoy a trip at 79° North.',
  },
];

const mobileTrips = [
  {
    img: tripsImg1Mobile,
    title: 'Longyearbyen',
    text: 'Visit the northernmost capital in the world.',
  },
  {
    img: tripsImg2Mobile,
    title: 'Barentsburg',
    text: 'A journey to the second biggest town in Svalbard.',
  },
  {
    img: tripsImg3Mobile,
    title: 'Pyramiden',
    text: 'Explore the abandoned coal mining town.',
  },
  {
    img: tripsImg4Mobile,
    title: 'Ny-Alesund',
    text: 'Enjoy a trip at 79° North.',
  },
];




export function PopularTripsSlides() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://svalbardexperts.com/api/story/getAllStories?search=&page=1");
        const data = await response.json();
        setBlogs(data.data);
        return data.data;
      } catch (err) {
        throw new Error("Error fetching blogs");
      }
      // const data = await getBlogs();
      // setBlogs(data);
    };
    fetchData();
  }, []);


  return (
    <>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='md:block hidden w-full '
      >
        <CarouselContent>
          {blogs.map((trip, index) => (
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
                    <img
                      src={'https://svalbardexperts.com/api/storyImages/' + trip?.image}
                      alt={trip.title}
                      width={252}
                      height={280}
                      className='h-full rounded-sm'
                    />
                  </div>
                </CardContent>
                {/* card desccriptions */}
                <div className='w-[280px] min-h-[222px] rounded-md bg-primaryText absolute bottom-1.5 flex items-end justify-start'>
                  <div className='pl-4 pb-3 w-full h-[120px] relative'>
                    <h3 className='font-medium text-xl leading-[30px] text-[#2E3034]'>
                      {trip.title}
                    </h3>
                    <p className='text-normal text-[15px] leading-5 text-[#53555A] mt-1 mb-4'>
                      {trip.text}
                    </p>

                    <div className='absolute left-4 bottom-3'>
                      <Modal>
                        <button className='flex gap-2 items-center justify-center'>
                          <span className='text-[15px] font-semibold leading-6 text-[#017867] underline '>
                            Book now
                          </span>
                          <Image src={arrowGreenRight} alt='Book now' />
                        </button>
                      </Modal>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='-translate-x-3 hidden' />
        <CarouselNext className='translate-x-3 hidden' />
      </Carousel>

      {/* Mobile view content*/}
      <div className='md:hidden w-full grid grid-cols-2 gap-x-[6px] gap-y-[24px] mt-8'>
        {blogs.map((trip, index) => (
          <Card
            key={index}
            className='h-[285px] w-full bg-transparent relative flex items-center justify-center mx-[6px]'
          >
            <CardContent className='flex flex-col aspect-square items-center justify-center absolute top-0  z-20'>
              <div
                className='w-[27px] h-[27px] rounded-full bg-base grid place-content-center relative z-20 -translate-y-3.5'
                style={{
                  border: '2.5px solid white',
                }}
              >
                <Image src={arrowWhiteUp} width={9} height={9} alt='Arrow' />
              </div>
              <div className='w-[150px] h-[170px] -translate-y-7'>
                <img
                  src={'https://svalbardexperts.com/api/storyImages/' + trip?.image}
                  alt={trip.title}
                  width={160}
                  height={170}
                  className='h-full w-full rounded-sm'
                />
              </div>
            </CardContent>
            {/* card desccriptions */}
            <div className='w-[165px] h-[170px] rounded-sm bg-primaryText absolute -bottom-0'>
              <div className='absolute bottom-0 left-0 right-0 h-[110px] pl-2 pb-[5px] pr-1 '>
                <h3 className='font-semibold text-[12px] leading-6 text-[#2E3034]'>
                  {trip.title}
                </h3>
                <p className='text-normal text-[11px] md:leading-6 leading-[18x] text-[#53555A] mt-[2px] mb-1'>
                  {trip.text}
                </p>

                <Modal>
                  <Link href='' className='absolute bottom-3 flex gap-[10px]'>
                    <span className='text-[11px] font-normal leading-[18px] text-[#017867] underline '>
                      Book now
                    </span>
                    <Image
                      src={arrowGreenRight}
                      alt='Book now'
                      className='scale-75 -translate-x-2'
                    />
                  </Link>
                </Modal>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
