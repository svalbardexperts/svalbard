import { arrowWhiteUp, homeBanner, whatsAppGreen } from '@/constants/images';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { Contact } from '../Form/Contact';

const HomeBanner = () => {
  return (
    <section className='rounded-b-lg overflow-hidden relative z-20'>
      {/* Hero section */}
      <div className='relative  w-full'>
        <div
          className='absolute top-0 left-0 bottom-0 right-0'
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Image src={homeBanner} alt='Home banner' />
      </div>

      {/* Form section */}
      <div className='absolute top-0 bottom-0 left-0 right-0 md:pt-[295px] md:pr-[137px] md:pb-[140px] md:pl-[99px] md:grid md:grid-cols-[max-content_max-content] md:gap-12'>
        <div className='h-full w-[780px] text-primaryText '>
          <h1 className='text-[80px] leading-[88px]  font-bold'>
            This is the time for a once in a lifetime journey
          </h1>

          <p className='text-[26px] leading-9 font-medium mt-6 mb-12'>
            Welcome to land of  fjords, mountains, and <br />
            northern lights.
          </p>
          {/* buttons group */}
          <div className='flex md:items-center md:justify-start md:gap-5'>
            <Button variant='primary' size='md'>
              Get a quote
              <span className='flex items-center justify-center bg-base w-[52px] h-[52px] rounded-md'>
                <Image src={arrowWhiteUp} alt='Arrow' />
              </span>
            </Button>
            <Button variant='secondary' size='lg'>
              WhatsApp us
              <span className='flex items-center justify-center bg-primaryText w-[52px] h-[52px] rounded-md'>
                <Image src={whatsAppGreen} alt='Arrow' />
              </span>
            </Button>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className='md:min-h-[464px] md:h-max md:w-[390px] md:max-w-[410px] md:py-8 md:px-6 rounded-lg
         bg-white'
        >
          <h3 className='text-[38px] text-black font-semibold leading-[50px] text-center'>
            Need help?
          </h3>
          <p className='text-[15px] text-center text-gray font-normal mt-[6px] mb-6'>
            Leave your phone number below so we can arrange your next trip?
          </p>
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
