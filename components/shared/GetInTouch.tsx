import { getInTouchImg } from '@/constants/images';
import Image from 'next/image';
import React from 'react';
import { Contact } from '../Form/Contact';
import { getInTouchImgMobile } from '@/constants/mobileImages';


const GetInTouch = () => {
  return (
    <section className='md:py-[120px] py-[60px] md:px-[100px] px-6'>
      <div
        className='grid md:grid-cols-2 md:rounded-lg rounded-sm overflow-hidden'
        style={{
          boxShadow: '0.74px 0px 20px 2.22px #3131311A',
        }}
      >
        <Image
          src={getInTouchImg}
          alt='Get in touch'
          width={672}
          height={508}
          className='w-full h-full md:block hidden'
        />

        <Image
          src={getInTouchImgMobile}
          alt='Get in touch'
          width={382}
          height={267}
          className='w-full rounded-sm md:hidden'
        />
        <div className='md:py-10 pt-[31px] pb-10 md:px-[129px] px-7 md:min-h-[440px]'>
          <h3 className='md:text-[38px] text-[32px] text-[#2E3034] font-semibold md:leading-[50px] leading-[43px] text-center md:mb-2 mb-[6px]'>
            Get in touch
          </h3>

          <Contact />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
