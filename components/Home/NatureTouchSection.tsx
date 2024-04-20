import {
  arrowGreenUp,
  arrowWhiteUp,
  moon,
  natureTouch1,
  tripsImg1 as natureTouch2,
  natureTouch3,
  tripsImg3 as natureTouch4,
} from '@/constants/images';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const data = [
  {
    img: natureTouch1,
    title: 'Unlocking the Arctic:',
    path: '',
  },
  {
    img: natureTouch2,
    title: 'Exploring the Frozen',
    path: '',
  },
  {
    img: natureTouch3,
    title: 'The Mystical Dance of',
    path: '',
  },
  {
    img: natureTouch4,
    title: 'Exploring the',
    path: '',
  },
];

const NatureTouchSection = () => {
  return (
    <section className='md:px-[100px] md:pb-[90px] bg-base rounded-lg relative '>
      <div
        className='w-full h-full bg-mountain-patterns bg-contain bg-no-repeat'
        style={{
          backgroundPosition: '50% 25%',
        }}
      >
        <div className='bg-base bg-opacity-70 w-full h-full relative z-20 md:pt-[90px]'>
          {/* Title */}
          <div className=''>
            <h3 className='font-bold text-[55px] leading-[66px] text-center text-[#E4FFFF]'>
              <span className='bg-white text-[#2E3034] rounded-lg'>
                Discover
              </span>{' '}
              the touch of nature
            </h3>
            <p className='font-normal text-[22px] leading-[33px] text-center text-[#FBFDFC]'>
              Get to know Svalbard
            </p>
          </div>
          {/* Images */}
          <div className='grid md:grid-cols-4 gap-[17px] mt-[93px] relative h-[485px]'>
            {data.map((item, index) => (
              <div
                className='relative overflow-hidden'
                key={index + Math.random()}
              >
                <div
                  className={cn(
                    'absolute bottom-0 w-full rounded-lg overflow-hidden',
                    index === 0 || index === 3 ? 'h-[483px]' : 'h-[351px]',
                  )}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    height={index === (0 || 3) ? 351 : 483}
                    width={314}
                    className='h-full w-full '
                    style={{
                      boxShadow:
                        '-2px -2px 8px 0px #00000026, 2px 2px 8px 0px #00000026',
                    }}
                  />

                  <div className='absolute bottom-0 left-0 right-0 glass py-[23px] pr-[14px] pl-3 rounded-sm flex items-center justify-between'>
                    <h3 className='text-xl leading-[30px] font-medium text-white'>
                      {item.title}
                    </h3>
                    <div className='w-10 h-10 rounded-md grid place-content-center bg-white'>
                      <Image
                        src={arrowGreenUp}
                        alt='Arrow'
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* See all btn */}
          <div
            className='md:mt-[60px] w-[210px] mx-auto py-2 pr-2 pl-9 bg-[#FBFDFC] relative z-20 rounded-lg flex gap-9 items-center justify-between'
            style={{
              boxShadow: '0px 5.7px 15px 0px #00000040',
            }}
          >
            <span className='text-[22px] text-black '>See All</span>
            <span className='grid place-content-center w-[56px] h-[56px] bg-base rounded-md'>
              <Image src={arrowWhiteUp} alt='Arrow' />
            </span>
          </div>
        </div>
      </div>
      <div className='absolute w-full top-12 left-0 right-0 flex items-center justify-center z-10'>
        <Image src={moon} alt='moon' className='' />
      </div>
    </section>
  );
};

export default NatureTouchSection;
