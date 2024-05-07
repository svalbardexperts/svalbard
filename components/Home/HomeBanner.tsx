'use client';
import { arrowWhiteUp, ocean, oceanMobile } from '@/constants/images';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { Contact } from '../Form/Contact';
import Modal from '../ui/modal';

const HomeBanner = () => {
  return (
    <section className='rounded-b-lg overflow-hidden relative z-20'>
      {/* Hero section */}
      <div className='relative w-full md:h-[920px] h-[450px] md:bg-video-image bg-video-image-mobile bg-no-repeat bg-center bg-cover'>
        <div className='relative w-[1920px] md:block hidden'>
          <video
            autoPlay
            muted
            loop
            playsInline
            // poster='../public/assets/images/video-img.jpg'
            src={require('../../public/video/video.mp4')}
          ></video>
        </div>



        <div className='relative w-[802px] md:hidden'>
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-auto"
    // poster='../public/assets/mobile-images/video-img-mobile.jpg'
    src={require('../../public/video/video.mp4')}
  ></video>
</div>




        {/* <div className='relative w-[767px] md:hidden'>
          <video
            autoPlay
            muted
            loop
            playsInline
            // poster='../public/assets/mobile-images/video-img-mobile.jpg'
            src={require('../../public/video/video.mp4')}
          ></video>
        </div> */}
      </div>

      {/* Form section */}
      <div className='absolute top-0 bottom-0 left-0 right-0 md:pt-[295px] md:pr-[137px] md:pb-[140px] md:pl-[99px] md:grid md:grid-cols-[66%_33%] md:gap-12'>
        <div className='md:h-full  md:max-w-[780px] md:w-full text-primaryText md:pb-0 pb-12 md:pt-0 pt-[120px] md:px-0 px-[30px]'>
          <h1 className='md:text-[66px] text-[28px] md:leading-[88px] leading-[38px] font-bold text-center md:text-start'>
            Discover the wonders of Svalbard
          </h1>

          <p className='md:text-[26px] text-[14px] md:leading-9 leading-[22px] md:font-medium font-normal md:mt-6 mt-4 md:mb-12 mb-8 md:text-start text-center'>
            Would you like to visit a place from the fairytales? Svalbard
            Experts gurantee a tailored made trip for an unforgettable
            experience!
          </p>
          {/* buttons group */}
          <div className='flex items-center md:justify-start justify-center md:gap-5 gap-[10px] md:mt-0 mt-8'>
            {/* <Modal>
              <Button variant='primary' size='md'>
                Get a quote
                <span className='flex items-center justify-center bg-base md:w-[52px] w-[28px] md:h-[52px] h-[28px] md:rounded-md rounded-[5px]'>
                  <Image
                    src={arrowWhiteUp}
                    alt='Arrow'
                    width={27}
                    height={27}
                    className='md:block hidden'
                  />
                  { mobile view image }
                  <Image
                    src={arrowWhiteUp}
                    alt='Arrow'
                    width={13}
                    height={13}
                    className='md:hidden'
                  />
                </span>
              </Button>
            </Modal> */}
          </div>
        </div>

        {/* Contact Form */}
        <div
          className='md:block hidden min-h-[464px] h-max w-[120%] max-w-[410px] py-8 md:px-6 rounded-lg
         bg-white'
        >
          <h3 className='text-[38px] text-black font-bold leading-[50px] text-center'>
            Want to travel with us ?
          </h3>
          <p className='text-[15px] text-center text-gray font-normal mt-[6px] mb-6'>
            Leave your contact information below and one of our experts will
            contact you soon!
          </p>
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
