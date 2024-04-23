import {
  arrowGreenUp,
  arrowWhiteUp,
  moon,
  natureTouch1,
  tripsImg1 as natureTouch2,
  natureTouch3,
  tripsImg3 as natureTouch4,
} from '@/constants/images';
import {
  natureTouch1Mobile,
  natureTouch3Mobile,
  tripsImg1Mobile as natureTouch2Mobile,
  tripsImg3Mobile as natureTouch4Mobile,
} from '@/constants/mobileImages';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
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

const mobileDdata = [
  {
    img: natureTouch1Mobile,
    title: 'Unlocking the Arctic:',
    path: '',
  },
  {
    img: natureTouch2Mobile,
    title: 'Exploring the Frozen',
    path: '',
  },
  {
    img: natureTouch3Mobile,
    title: 'The Mystical Dance of',
    path: '',
  },
  {
    img: natureTouch4Mobile,
    title: 'Exploring the',
    path: '',
  },
];

const NatureTouchSection = () => {
  return (
    <section className='md:px-[100px] px-6 md:pb-[90px] md:pt-0 py-10 bg-base rounded-lg relative '>
      <div
        className='w-full h-full bg-mountain-patterns bg-contain bg-no-repeat'
        style={{
          backgroundPosition: '50% 25%',
        }}
      >
        <div className='bg-base md:bg-opacity-70 w-full h-full relative z-20 md:pt-[90px]'>
          {/* Title */}
          <div className=''>
            <h3 className='font-bold md:text-[55px] text-[32px] md:leading-[66px] leading-[48px] text-center text-white'>
              <span className='bg-white text-[#2E3034] p-2 rounded-lg'>
                Discover
              </span>{' '}
              the touch of nature
            </h3>
            <p className='font-normal md:text-[22px] text-[15px] md:leading-[33px] leading-6 text-center text-[#FBFDFC] md:mt-5 mt-[10px]'>
              Get to know Svalbard
            </p>
          </div>

          {/* Images */}
          <div className='hidden md:grid grid-cols-4 gap-[17px] mt-[93px] relative h-[485px]'>
            {data.map((item, index) => (
              <div
                className='relative overflow-hidden'
                key={index + Math.random()}
              >
                <div
                  className={cn(
                    'absolute bottom-0 w-full rounded-lg overflow-hidden',
                    index === 0 || index === 3
                      ? 'md:h-[483px]'
                      : 'md:h-[351px]',
                  )}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    height={index === 0 || index === 3 ? 351 : 483}
                    width={314}
                    className='h-full w-full '
                    style={{
                      boxShadow:
                        '-2px -2px 8px 0px #00000026, 2px 2px 8px 0px #00000026',
                    }}
                  />

                  <div className='absolute bottom-0 left-0 right-0 glass py-[23px] pr-[14px] pl-3 md:h-[86px] rounded-sm flex items-center justify-between'>
                    <h3 className='text-[17px] leading-[30px] font-medium text-white'>
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

          {/* Mobile view images */}
          <div className='md:hidden grid grid-cols-2 gap-[10px] relative h-[480px] mt-8'>
            <div className='flex flex-col gap-[10px]'>
              {mobileDdata.slice(0, 2).map((item, index) => (
                <div
                  className='relative overflow-hidden'
                  key={index + Math.random()}
                >
                  <div
                    className={cn(
                      'w-full rounded-md overflow-hidden',
                      index === 0 ? 'h-[270px]' : 'h-[184px]',
                    )}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      height={index === 0 ? 269 : 184}
                      width={197}
                      className='h-full w-full rounded-sm'
                      style={{
                        boxShadow:
                          '-2px -2px 6px 0px #00000026, 2px 2px 6px 0px #00000026',
                      }}
                    />

                    <div className='absolute bottom-0 left-0 right-0 glass py-[12px] px-2 h-[46px] rounded-sm flex items-center justify-between overflow-hidden'>
                      <h3 className='text-[11px] leading-[20px] font-semibold text-white'>
                        {item.title}
                      </h3>
                      <div className='w-[22px] h-[22px] rounded-[4px] grid place-content-center bg-white'>
                        <Image
                          src={arrowGreenUp}
                          alt='Arrow'
                          width={9}
                          height={9}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex flex-col gap-[10px]'>
              {data.slice(2).map((item, index) => (
                <div
                  className='relative overflow-hidden'
                  key={index + Math.random()}
                >
                  <div
                    className={cn(
                      'w-full rounded-md overflow-hidden',
                      index === 0 ? 'h-[195px]' : 'h-[258px]',
                    )}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      height={index === 0 ? 195 : 258}
                      width={175}
                      className='h-full w-full rounded-sm'
                      style={{
                        boxShadow:
                          '-2px -0px 4px 0px #00000026, 2px 0px 4px 0px #00000026',
                      }}
                    />

                    <div className='absolute bottom-0 left-0 right-0 glass py-[12px] px-2 h-[46px] rounded-sm flex items-center justify-between '>
                      <h3 className='text-[11px] leading-[20px] font-semibold text-white'>
                        {item.title}
                      </h3>
                      <div className='w-[22px] h-[22px] rounded-[4px] grid place-content-center bg-white'>
                        <Image
                          src={arrowGreenUp}
                          alt='Arrow'
                          width={9}
                          height={9}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* See all btn */}
          <Link
            href='/blog'
            className='hidden md:flex mt-[60px] w-[210px] mx-auto py-2 pr-2 pl-9 bg-[#FBFDFC] relative z-20 rounded-lg  gap-9 items-center justify-between'
            style={{
              boxShadow: '0px 5.7px 15px 0px #00000040',
            }}
          >
            <span className='text-[22px] text-black '>See All</span>
            <span className='grid place-content-center w-[56px] h-[56px] bg-base rounded-md'>
              <Image src={arrowWhiteUp} alt='Arrow' />
            </span>
          </Link>
          <Link href='/blog' className='w-full flex justify-center'>
            <button
              className='md:hidden mt-8 w-[100px] rounded-sm p-1.5 pl-3 flex items-center justify-between gap-2 bg-primaryText'
              style={{
                boxShadow: '0px 2px 8px 0px #00000026',
              }}
            >
              <span className='text-[13px] font-normal text-black leading-6'>
                See All
              </span>
              <span className='grid w-7 h-7 rounded-[5px] bg-base place-content-center'>
                <Image src={arrowWhiteUp} alt='Arrow' className='scale-75' />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className='absolute w-full top-12 left-0 right-0 flex items-center justify-center z-10'>
        <Image src={moon} alt='moon' className='' />
      </div>
    </section>
  );
};

export default NatureTouchSection;
