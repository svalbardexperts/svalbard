import React from 'react';
import { contactBanner, mailGreen, phoneGreen } from '@/constants/images';
import Image from 'next/image';

const ContactBanner = () => {
  return (
    <section>
      <Image src={contactBanner} alt='Contact Us' width={15512} height={890} />

      <div className='md:mt-[120px]'>
        <h3 className='custom-header'>
          <span className='header-span'>About</span> Us
        </h3>
        <p className='custom-title md:mt-7 mt:md-14'>
          It’s easy, just leave your details here and we will{' '}
          <span className='block' /> contact you
        </p>
      </div>

      <div className='md:mt-14 md:p-[90px] bg-base rounded-lg grid grid-cols-2 gap-8'>
        <div className='md:py-[72px] md:px-20 bg-primaryText rounded-lg'>
          <Image
            src={phoneGreen}
            alt='Phoen Icon'
            width={86}
            height={86}
            className='mx-auto'
          />
          <h4 className='text-[46px] text-[#2E3034] font-semibold leading-[58px] text-center mt-5 mb-3'>
            Call us
          </h4>
          <p className='text-lg text-[#707477E] font-normal leading-7 text-center mb-[26px]'>
            Our phone support is open from 9:00 to 17:00 on weekdays. You are
            welcome to call us. 
          </p>

          <p className='font-medium text-[26px] leading-9 text-center text-[#017867]'>
            +354-782-6534
          </p>
        </div>

        <div className='md:p-[72px] bg-primaryText rounded-lg'>
          <Image
            src={mailGreen}
            alt='Phoen Icon'
            width={86}
            height={86}
            className='mx-auto'
          />
          <h4 className='text-[46px] text-[#2E3034] font-semibold leading-[58px] text-center mt-5 mb-3'>
            Contact us via email:
          </h4>
          <p className='text-lg text-[#707477E] font-normal leading-7 text-center mb-[26px]'>
            For questions and corporations send us an email
          </p>

          <p className='font-medium text-[26px] leading-9 text-center text-[#017867]'>
            info@svalbardexperts.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
