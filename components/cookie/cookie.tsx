'use client';

import { arrowGreenUp, cookie } from '@/constants/images';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const Cookie = () => {
  const [showCookie, setShowCookie] = useState(true);

  const handleCookie = () => {
    setShowCookie(!showCookie);
  };

  return (
    <>
      <div className={cn('z-20', showCookie ? 'md:block hidden' : 'block')}>
        <script
          src='https://cdn.commoninja.com/sdk/latest/commonninja.js'
          defer
        ></script>
        <div className='commonninja_component pid-11dbc17e-ca45-4845-8860-11bf8800d49b'></div>
      </div>
      <div
        className={cn(
          `bg-white md:w-[701px] md:min-h-[228px] rounded-lg flex-col justify-between 
      items-center md:px-7 px-2 md:pt-10 pb-4 py-4 md:gap-[13px] gap-2 fixed bottom-0 left-0 cookie-animation z-[600]`,
          showCookie ? 'flex' : 'hidden',
        )}
        style={{
          boxShadow: '3px 3px 25px 4px #0000000D, -3px -3px 25px 4px #0000000D',
        }}
      >
        {/* close cookie btn */}
        <X
          className='absolute top-4 right-4 cursor-pointer'
          onClick={handleCookie}
        />
        <div className='flex md:flex-row flex-col items-center justify-center md:gap-6 gap-3'>
          <Image
            src={cookie}
            alt='cookie'
            width={123}
            height={117}
            className='md:block hidden'
          />
          <Image
            src={cookie}
            alt='cookie'
            width={83}
            height={77}
            className='md:hidden'
          />
          <p className='md:text-lg text-[12px] md:leading-7 leading-4  font-normal md:text-start text-center'>
            We use to make sure you have the best experience on our site. By
            clicking “Got it” or existing this banner, you accept our use of
            cookies.
          </p>
        </div>
        <div className='w-full flex md:justify-end justify-center'>
          <button
            className='md:w-[143px] w-[105px] md:p-[6px] p-1 md:pl-6 pl-5 flex items-center justify-between bg-base md:rounded-sm rounded-[6px]'
            style={{
              boxShadow: '0px 4.01px 10.54px 0px #00000040',
            }}
            onClick={handleCookie}
          >
            <span className='md:text-lg text-[12px] md:leading-7 leading-4 text-primaryText font-normal'>
              Got it
            </span>
            <span className='md:w-10 w-7 md:h-10 h-7 bg-primaryText md:rounded-sm rounded-[6px] grid place-content-center'>
              <Image
                src={arrowGreenUp}
                alt='Cookie button'
                width={18}
                height={18}
              />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cookie;
