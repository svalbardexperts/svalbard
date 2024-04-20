import {
  arrowGreenUp,
  customerCare,
  longArrow,
  messageWhite,
  phoneWhite,
} from '@/constants/images';
import Image from 'next/image';
import React from 'react';

const services = [
  {
    icon: phoneWhite,
    title: 'Book a call',
    text: 'Schedule a call with us to discuss and book your travel arrangements hassle-free.',
  },
  {
    icon: customerCare,
    title: 'Personal Consultation',
    text: 'Opt for a personal consultation to customize your travel experience with us.',
  },
  {
    icon: messageWhite,
    title: 'Get a quote',
    text: "Please contact our travel agency to 'Get a quote' for your desired trip package.",
  },
];

const PersonalizedPathways = () => {
  return (
    <section className='py-[120px] px-[100px]'>
      <div className='flex items-center justify-center gap-5 mb-5'>
        <span className='block h-[1px] w-[138px] bg-base' />
        <p className='text-[22px] font-medium text-[#017867] leading-[33px] uppercase'>
          Our Seamless Process
        </p>
        <span className='block h-[1px] w-[138px] bg-base' />
      </div>

      <div className='md:mb-[56px]'>
        <h3 className='font-bold text-[55px] leading-[66px] text-center text-black mb-5'>
          Your Personalized Travel{' '}
          <span className='inline-block text-white bg-base rounded-lg'>
            Pathway
          </span>
        </h3>
        <p className='text-lg font-normal leading-7 text-center text-gray'>
          Embark on your personalized travel pathway with confidence, guided by
          our <span className='block' /> seamless process every step of the way.
        </p>
      </div>
      <div className='grid md:grid-cols-3 gap-6'>
        {services.map((service, index) => (
          <div
            className='pt-8 pb-[34px] pl-[19px] relative md:min-h-[400px]'
            style={{
              boxShadow: '0.74px 0px 20px 2.22px #3131311A',
            }}
            key={index + service.title}
          >
            <Image src={longArrow} alt='Arrow right' width={200} height={10} />

            <div className='w-[72px] h-[72px] rounded-sm bg-base mt-6 mb-5 grid place-content-center'>
              <Image
                src={service.icon}
                alt={service.title}
                width={40}
                height={40}
              />
            </div>

            <h3 className='font-medium text-[31px] leading-[43px]'>
              {service.title}
            </h3>
            <p className='font-normal text-[15px] leading-6 text-gray mb-8 mt-3'>
              {service.text}
            </p>

            <div className='w-12 h-12 rounded-md grid place-content-center border-[1px] border-[#8F9196] absolute bottom-[34px]'>
              <Image src={arrowGreenUp} alt='Arrow' />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalizedPathways;
