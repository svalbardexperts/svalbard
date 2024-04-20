import { getInTouchImg } from '@/constants/images';
import Image from 'next/image';
import React from 'react';
import { Contact } from '../Form/Contact';

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
          src={getInTouchImg}
          alt='Get in touch'
          width={382}
          height={267}
          className='w-full rounded-lg md:hidden'
        />
        <div className='md:py-10 pt-[31px] pb-10 md:px-[129px] px-7 md:min-h-[440px]'>
          <h3 className='md:text-[38px] text-[32px] text-[#2E3034] font-semibold md:leading-[50px] leading-[43px] text-center'>
            Get in touch
          </h3>
          <p className='md:mt-2 mt-[6px] md:mb-6 mb-[21px] md:text-lg text-[15px] text-gray font-normal md:leading-7 leading-6 text-center'>
            If you want to avail with us feel free to contact with us
          </p>

          <Contact />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
