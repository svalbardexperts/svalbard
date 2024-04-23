import { founder } from '@/constants/images';
import { founderMobile } from '@/constants/mobileImages';
import Image from 'next/image';
import React from 'react';

const founderData = [
  `Lee Amber is an Icelandic citizen and an expert about Svalbard. He is full of knowledge about the islands, and during his visits there he feels like a local.`,
  `He has been working in tourism specializing in the Nordic countries for more than a decade, and has built trips for hundreds of travelers in these regions.`,
  `Lee has started Svalbard Experts, and he and his team offer exclusive trips to Svalbard. He will be happy to plan the trip of your dreams to Svalbard with a personal touch according to your requests.`,
  `"Visiting Svalbard is like visiting outer space. Amazing sights that can only be seen there: 
  thousands of polar bears, one of the best places in the world to watch the northern lights, endless glaciers, amazing dog sledding tours, and much more."`,
];

const AboutFounder = () => {
  return (
    <section className='md:bg-gradient-to-b from-[#F4F8F8] to-[#D0E4E0] md:px-0 pl-[23px] pr-7'>
      <div
        className='bg-primaryText md:px-[100px] md:pt-[90px] md:pb-[83px] grid md:grid-cols-2 md:gap-[92px] rounded-lg'
        style={{
          boxShadow: '0.74px 0px 20px 2.22px #3131311A',
        }}
      >
        {/* founder Mobile Image */}
        <div className='md:hidden grid  place-content-center'>
          <Image
            src={founder}
            alt='Founder Svalbard'
            width={382}
            height={267}
            className='rounded-md'
          />
        </div>

        <div className='pt-5 pb-[27px] px-[3px] text-center'>
          <h3 className='md:text-[58px] text-[24px] font-bold md:leading-[53px] leading-[36px] md:text-start '>
            Lee Amber -{' '}
            <span className='text-[#017867] font-semibold'>
              Founder and CEO
            </span>
          </h3>
          {/* <p className='text-[13px] text-[#017867] leading-[21px] italic font-normal mb-4 md:text-start '>
            Founder 
          </p> */}
          <div className='text-start space-y-3'>
            {founderData.map((item) => (
              <p
                className='text-[15px] text-gray font-normal leading-6'
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* founder Image */}
        <div className='md:grid hidden h-full  place-content-center'>
          <Image
            src={founderMobile}
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
