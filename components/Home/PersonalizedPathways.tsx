import {
  arrowGreenUp,
  customerCare,
  longArrow,
  messageWhite,
  phoneWhite,
} from '@/constants/images';
import Image from 'next/image';
import React from 'react';
import Modal from '../ui/modal';

const services = [
  {
    icon: phoneWhite,
    title: 'Book a call',
    text: 'Schedule a call with us to discuss and book your travel arrangements hassle-free.',
  },
  {
    icon: customerCare,
    title: 'Personal Consultation',
    text: 'Get a personal consultation to customize your travel experience with us.',
  },
  {
    icon: messageWhite,
    title: 'Get a quote',
    text: "Please contact our travel agency to 'Get a quote' for your desired trip package.",
  },
];

const PersonalizedPathways = () => {
  return (
    <section className='md:py-[120px] py-[39px] md:px-[100px] px-7'>
      {/* TODO */}

      <div className='md:mb-14 mb-8'>
        <h3 className='font-bold md:text-[55px] text-[32px] md:leading-[66px] leading-[43px] text-center text-black md:mb-5 mb-2'>
          Your Personalized Travel{' '}
          <span className='md:inline-block text-white header-span'>
            Pathway
          </span>
        </h3>
        <p className='md:text-lg text-[15px] font-normal md:leading-7 leading-6 text-center text-gray'>
          Start your personalized travel journey with confidence, guided by our
          <span className='md:block' /> simple process at every step.
        </p>
      </div>
      {/* cards */}
      <div className='grid md:grid-cols-3 md:gap-6 gap-[14px]'>
        {services.map((service, index) => (
          <div
            className='md:pt-8 pt-6 md:pb-[34px] pb-[30px] pl-[19px] md:pr-3 pr-10 relative md:min-h-[365px] h-[full] min-h-[320px] rounded-sm'
            style={{
              boxShadow: '0.74px 0px 20px 2.22px #3131311A',
            }}
            key={index + service.title}
          >
            <Image
              src={longArrow}
              alt='Arrow right'
              width={200}
              height={10}
              className='md:relative absolute md:right-0 -right-20 md:top-0 top-20 md:rotate-0 rotate-90 md:scale-100 scale-[.6]'
            />

            <div className='md:w-[72px] w-[62px] md:h-[72px] h-[62px] rounded-sm bg-base md:mt-6 md:mb-5 mb-[17px] grid place-content-center'>
              <Image
                src={service.icon}
                alt={service.title}
                width={40}
                height={40}
                className='md:block hidden'
              />

              <Image
                src={service.icon}
                alt={service.title}
                width={32}
                height={32}
                className='md:hidden'
              />
            </div>

            <h3 className='md:font-medium font-semibold md:text-[28px] text-[23px] md:leading-[32px] leading-9'>
              {service.title}
            </h3>
            <p className='font-normal text-[14px] leading-5 text-gray md:mt-0 mt-2'>
              {service.text}
            </p>
            <Modal>
              <div className='md:w-12 w-10 md:h-12 h-10 rounded-md grid place-content-center border-[1px] border-[#8F9196] absolute bottom-[24px] cursor-pointer'>
                <Image
                  src={arrowGreenUp}
                  alt='Arrow'
                  className='md:scale-100 scale-75'
                />
              </div>
            </Modal>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalizedPathways;
