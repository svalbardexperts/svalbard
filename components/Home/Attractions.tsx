import {
  arrowGreenUp,
  attractionsImg1,
  attractionsImg2,
  attractionsImg3,
  attractionsImg4,
  attractionsImg5,
  attractionsImg6,
  attractionsImg7,
  attractionsImg8,
} from '@/constants/images';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';

const data = [
  {
    img: attractionsImg1,
    title: 'Boat Tours',
    text: 'We are offering different boat tours to explore the wild animals, and breathtaking views. Embark on an unforgettable journey of discovery with us.',
    bookingPath: '',
  },
  {
    img: attractionsImg2,
    title: 'Northern Lights Tours',
    text: 'We offer different types of northern lights tours. If you prefer to hunt them by a snokat, snowmobile, or an isolated camp, we will maximize your chances to see these magical lights during your trip. ',
    bookingPath: '',
  },
  {
    img: attractionsImg3,
    title: 'Dog Sledding Tours',
    text: "Try one of our funnest activities in Svalbard, where you'll find amazing views and excitement. If you are a dog lover, or just want to explore the wilderness, this tour is for you.  ",
    bookingPath: '',
  },
  {
    img: attractionsImg4,
    title: 'Snowmobiling Tours',
    text: 'We are offering different snowmobile tours through the breathtaking Svalbard landscapes. ',
    bookingPath: '',
  },
  {
    img: attractionsImg5,
    title: 'Ice Caving Tours',
    text: 'Let us take you on a journey inside the Svalbard glaciers. In this amazing world of ice, you will step in a special place and unite with nature.',
    bookingPath: '',
  },
  {
    img: attractionsImg6,
    title: 'Photography Tours',
    text: 'Do you have a passion for photography? If this is the case, you should join us for some of our exciting Photography tours. We are offering those all year round, so if you are into northern lights photos or exploring the wilderness. ',
    bookingPath: '',
  },
  {
    img: attractionsImg7,
    title: 'Hiking Tours',
    text: 'If you are into hiking, we offer different hiking tours to different locations in Svalbard all year round. If you want to walk to the seed vault, or to an ice cave, we can make it happen.',
    bookingPath: '',
  },
  {
    img: attractionsImg8,
    title: 'ATV Tours',
    text: 'There is no better way to appreciate the Arctic landscape than with an ATV. You will enjoy the beautiful scenery while taken care of by our experienced guides.',
    bookingPath: '',
  },
];

const Attractions = () => {
  return (
    <section className='md:pt-[120px] md:px-[100px]'>
      <h3 className='custom-header md:text-[55px]'>
        Our <span className='header-span'>Attractions</span>
      </h3>
      <p className='custom-title'>
        &quot;Discover the allure of Our Attraction and unlock unforgettable
        <span className='block' />
        experiences when you book your travels with us.&quot;
      </p>

      {/* Attractions slides */}
      <div className='md:mt-[56px]'>
        <AttractionsSlides />
      </div>
    </section>
  );
};

function AttractionsSlides() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className='w-full '
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index} className='md:basis-1/3'>
            <Card
              className='bg-transparent relative'
              style={{
                boxShadow: '0.74px 0px 20px 2.22px #3131311A',
              }}
            >
              <CardContent>
                <div className='md:mb-6'>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={423}
                    height={335}
                    className='rounded-sm w-full h-[335px]'
                  />
                </div>
              </CardContent>
              {/* card descriptions */}
              <div className='pr-[54px] pb-[30px] pl-5'>
                <div className='md:h-[234px] relative'>
                  <h3 className='font-medium text-xl leading-[30px] text-[#2E3034]'>
                    {item.title}
                  </h3>
                  <p className='text-normal text-[15px] leading-6 text-[#53555A] mt-1 mb-4'>
                    {item.text}
                  </p>

                  <Link
                    href=''
                    className='absolute bottom-0 left-0  gap-2 w-[170px] py-[6px] pl-[26px] pr-[6px] bg-base flex items-center justify-between rounded-[10px]'
                    style={{
                      boxShadow: '0px 4.01px 10.54px 0px #00000040',
                    }}
                  >
                    <span className='text-[15px] leading-[24px] text-white'>
                      Book now
                    </span>
                    <span className='w-10 h-10 rounded-sm grid place-content-center bg-white'>
                      <Image src={arrowGreenUp} alt='Book now' />
                    </span>
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

export default Attractions;
