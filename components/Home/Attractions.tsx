'use client';

import {
  arrowGreenUp,
  arrowWhiteUp,
  attractionsImg1,
  attractionsImg2,
  attractionsImg3,
  attractionsImg4,
  attractionsImg5,
  attractionsImg6,
  attractionsImg7,
  attractionsImg8,
} from '@/constants/images';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import Modal from '../ui/modal';
import {
  attractionsImg1Mobile,
  attractionsImg2Mobile,
  attractionsImg3Mobile,
  attractionsImg4Mobile,
  attractionsImg5Mobile,
  attractionsImg6Mobile,
  attractionsImg7Mobile,
  attractionsImg8Mobile,
} from '@/constants/mobileImages';

const data = [
  {
    img: attractionsImg1,
    title: 'Boat Tours',
    text: 'We are offering different boat tours to explore the wild animals, and breathtaking views. Join an unforgettable journey of discovery with us.',
    bookingPath: '',
  },
  {
    img: attractionsImg2,
    title: 'Northern Lights Tours',
    text: 'We offer different types of northern lights tours. Whether you prefer to hunt them by snowcat, snowmobile, or from an isolated camp, we will maximize your chances of seeing these magical lights during your trip.',
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
    text: 'Do you have a passion for photography? If this is the case, you should join us for some of our exciting Photography tours. We are offering those tours all year round.',
    bookingPath: '',
  },
  {
    img: attractionsImg7,
    title: 'Hiking Tours',
    text: 'If you are into hiking, we are offerig different hiking tours to different locations in Svalbard. If you want to walk to the seed vault, or to an ice cave, we can make it happen.',
    bookingPath: '',
  },
  {
    img: attractionsImg8,
    title: 'ATV Tours',
    text: 'There is no better way to appreciate the Arctic landscape than with an ATV. You will enjoy the beautiful scenery while taken care of by our experienced guides.',
    bookingPath: '',
  },
];

const mobileData = [
  {
    img: attractionsImg1Mobile,
    title: 'Boat Tours',
    text: 'We are offering different boat tours to explore the wild animals, and breathtaking views. Join an unforgettable journey of discovery with us.',
    bookingPath: '',
  },
  {
    img: attractionsImg2Mobile,
    title: 'Northern Lights Tours',
    text: 'We offer different types of northern lights tours. Whether you prefer to hunt them by snowcat, snowmobile, or from an isolated camp, we will maximize your chances of seeing these magical lights during your trip.',
    bookingPath: '',
  },
  {
    img: attractionsImg3Mobile,
    title: 'Dog Sledding Tours',
    text: "Try one of our funnest activities in Svalbard, where you'll find amazing views and excitement. If you are a dog lover, or just want to explore the wilderness, this tour is for you.  ",
    bookingPath: '',
  },
  {
    img: attractionsImg4Mobile,
    title: 'Snowmobiling Tours',
    text: 'We are offering different snowmobile tours through the breathtaking Svalbard landscapes. ',
    bookingPath: '',
  },
  {
    img: attractionsImg5Mobile,
    title: 'Ice Caving Tours',
    text: 'Let us take you on a journey inside the Svalbard glaciers. In this amazing world of ice, you will step in a special place and unite with nature.',
    bookingPath: '',
  },
  {
    img: attractionsImg6Mobile,
    title: 'Photography Tours',
    text: 'Do you have a passion for photography? If this is the case, you should join us for some of our exciting Photography tours. We are offering those tours all year round.',
    bookingPath: '',
  },
  {
    img: attractionsImg7Mobile,
    title: 'Hiking Tours',
    text: 'If you are into hiking, we are offerig different hiking tours to different locations in Svalbard. If you want to walk to the seed vault, or to an ice cave, we can make it happen.',
    bookingPath: '',
  },
  {
    img: attractionsImg8Mobile,
    title: 'ATV Tours',
    text: 'There is no better way to appreciate the Arctic landscape than with an ATV. You will enjoy the beautiful scenery while taken care of by our experienced guides.',
    bookingPath: '',
  },
];

const Attractions = () => {
  return (
    <section className='md:pt-[120px] pt-[60px] md:px-[100px] px-6'>
      <h3 className='custom-header md:text-[55px]'>
        Our <span className='header-span'>Attractions</span>
      </h3>
      <p className='custom-title'>
        &quot;Explore the ethereal beauty of Svalbard with its stunning
        glaciers, majestic fjords, <span className='md:block' /> and the chance
        to witness the mesmerizing northern lights. &quot;
      </p>

      {/* Attractions slides */}
      <div className='md:mt-14 mt-8'>
        <AttractionsSlides />
      </div>
    </section>
  );
};

function AttractionsSlides() {
  const [sliced, setSliced] = useState(4);
  return (
    <>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-full md:block hidden'
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index} className='md:basis-1/3 border-0'>
              <Card
                className='bg-transparent relative w-full scale-95'
                style={{
                  boxShadow: '0.74px 0px 8px 2.22px #3131311A',
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
                  <div className='md:min-h-[294px] relative'>
                    <h3 className='font-bold text-[30px] leading-[30px] text-[#2E3034]'>
                      {item.title}
                    </h3>
                    <p className='text-normal text-[14px] leading-6 text-[#53555A] mt-3 mb-4'>
                      {item.text}
                    </p>
                    <Modal>
                      <button
                        className='absolute bottom-0 left-0  gap-2 w-[170px] py-[6px] pl-[26px] pr-[6px] bg-base flex items-center justify-between md:rounded-[10px] rounded-sm'
                        style={{
                          boxShadow: '0px 4.01px 10.54px 0px #00000040',
                        }}
                      >
                        <span className='md:text-[15px] text-[12px] leading-[24px] text-white'>
                          Book now
                        </span>
                        <span className='md:w-10 w-7 md:h-10 h-7 md:rounded-sm rounded-[5px] grid place-content-center bg-white'>
                          <Image
                            src={arrowGreenUp}
                            alt='Book now'
                            className='md:scale-100 scale-75'
                          />
                        </span>
                      </button>
                    </Modal>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='-translate-x-3' />
        <CarouselNext className='translate-x-3' />
      </Carousel>

      {/* Mobile view cards */}
      <div className='w-full md:hidden space-y-4'>
        {mobileData.slice(0, sliced).map((item, index) => (
          <Card
            key={index}
            className='bg-transparent relative'
            style={{
              boxShadow: '0.74px 0px 10px 2.22px #3131311A',
            }}
          >
            <CardContent>
              <div className='md:mb-6'>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={382}
                  height={300}
                  className='rounded-sm w-full h-[300px]'
                />
              </div>
            </CardContent>
            {/* card descriptions */}
            <div className='pr-8 pb-[44px] pl-[17px] pt-6'>
              <div className='relative'>
                <h3 className='font-medium text-[28px] leading-[28px] text-[#2E3034]'>
                  {item.title}
                </h3>
                <p
                  className='text-normal text-[12px] leading-[20px] text-[#53555A] mt-[10px]
                mb-5 '
                >
                  {item.text}
                </p>

                <Modal>
                  <button
                    className='gap-2 w-[130px] py-1 pl-3 pr-1 bg-base flex items-center justify-between rounded-sm'
                    style={{
                      boxShadow: '0px 4.01px 10.54px 0px #00000040',
                    }}
                  >
                    <span className='text-[12px] leading-[24px] text-white'>
                      Book now
                    </span>
                    <span className='w-7 h-7 rounded-[5px] grid place-content-center bg-white'>
                      <Image
                        src={arrowGreenUp}
                        alt='Book now'
                        className='scale-75'
                      />
                    </span>
                  </button>
                </Modal>
              </div>
            </div>
          </Card>
        ))}

        <div className='mt-8 w-full flex justify-center'>
          {sliced < data.length ? (
            <button
              className='w-[125px] rounded-sm p-2 pl-3 flex items-center justify-between gap-3 bg-primaryText'
              style={{
                boxShadow: '0px 2px 8px 0px #00000026',
              }}
              onClick={() => setSliced((sliced) => sliced + 4)}
            >
              <span className='text-[13px] font-normal text-black leading-6'>
                See More
              </span>
              <span className='grid w-7 h-7 rounded-[5px] bg-base place-content-center'>
                <Image src={arrowWhiteUp} alt='Arrow' className='scale-75' />
              </span>
            </button>
          ) : (
            <button
              className='w-[125px] h-[36px] rounded-sm p-2 pl-3 flex items-center justify-between gap-3 bg-primaryText'
              style={{
                boxShadow: '0px 2px 8px 0px #00000026',
              }}
              onClick={() => setSliced((sliced) => sliced - 4)}
            >
              <span className='text-[13px] font-normal text-black leading-6'>
                See Less
              </span>
              <span className='grid w-7 h-7 rounded-[5px] bg-base place-content-center'>
                <Image src={arrowWhiteUp} alt='Arrow' className='scale-75' />
              </span>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Attractions;
