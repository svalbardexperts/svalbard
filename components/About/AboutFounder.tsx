import { founder } from '@/constants/images';
import Image from 'next/image';
import React from 'react';

const founderData = [
  `Lee Amber is an Icelandic citizen and an expert about Svalbard.He is full of knowledge about the islands, and during his visits there he feels like a local.`,
  `He has been working in tourism specializing in the Nordic countries for more than a decade, and has built trips for hundreds of travelers in these regions.`,
  `Lee opened Svalbard Experts together with Sagi, and together they are offering exclusive trips to Svalbard.
  He will be happy to plan the trip of your dreams to Svalbard with a personal touch according to your requests.`,
  `"Visiting Svalbard is like visiting outer space. Amazing sights that can only be seen there: thousands of polar bears, one of the best places in the world to watch the northern lights, endless glaciers, amazing dog sledding tours, and much more."`,
];

const AboutFounder = () => {
  return (
    <section className='bg-gradient-to-b from-[#F4F8F8] to-[#D0E4E0]'>
      <div
        className='bg-primaryText md:px-[100px] md:pt-[90px] md:pb-[83px] grid md:grid-cols-2 md:gap-[92px] rounded-lg'
        style={{
          boxShadow: '0.74px 0px 20px 2.22px #3131311A',
        }}
      >
        <div className='text-start'>
          <h3 className='md:text-[66px] font-bold leading-[73px]'>Lee Amber</h3>
          <p className='text-[38px] text-[#017867] leading-[49px] italic font-light mt-3 mb-5'>
            Founder 
          </p>
          <div className='space-y-3'>
            {founderData.map((item) => (
              <p className='text-lg text-gray font-normal leading-7' key={item}>
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* founder Image */}
        <div className='h-full grid place-content-center'>
          <Image
            src={founder}
            alt='Founder Svalbard'
            width={598}
            height={500}
            className='rounded-lg'
          />
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
