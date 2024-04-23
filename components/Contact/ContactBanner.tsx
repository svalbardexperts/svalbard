import React from 'react';
import { contact, mailGreen, phoneGreen } from '@/constants/images';
import Image from 'next/image';
import { contactMobile } from '@/constants/mobileImages';

const ContactBanner = () => {
  return (
    <section>
      <Image
        src={contact}
        alt='Contact Us'
        width={1512}
        height={400}
        className='md:block hidden w-full h-[400px]'
      />
      <Image
        src={contactMobile}
        alt='Contact Us'
        width={400}
        height={220}
        className='md:hidden w-full h-[220px]'
      />

      <div className='md:mt-[90px] mt-[60px]'>
        <h3 className='custom-header'>
          <span className='header-span'>Contact</span> Us
        </h3>
        <p className='custom-title md:mt-7'>
          It’s easy, just leave your details here and{' '}
          <span className='block md:hidden' /> we will{' '}
          <span className='md:block' /> contact you
        </p>
      </div>

      <div className='md:mt-14 mt-6 md:p-[90px] px-[30px] py-10 bg-base rounded-lg grid md:grid-cols-2 gap-8'>
        <div className='md:py-[62px] py-6 md:px-20 px-[45px] md:h-[445px] bg-primaryText md:rounded-lg rounded-sm flex flex-col items-center'>
          <Image
            src={phoneGreen}
            alt='Phoen Icon'
            width={86}
            height={86}
            className='mx-auto md:block hidden'
          />
          <Image
            src={phoneGreen}
            alt='Phoen Icon'
            width={60}
            height={60}
            className='mx-auto md:hidden'
          />
          <h4 className='md:text-[46px] text-[26px] text-[#2E3034] font-semibold md:leading-[58px] leading-[36px] text-center md:mt-5 mt-[11px] md:mb-3 mb-[6px]'>
            Call us
          </h4>
          <p className='md:text-lg text-[13px] text-[#707477E] font-normal md:leading-7 leading-[20px] text-center md:mb-[26px] mb-3'>
            Our phone support is open from 24/7. You are welcome to contact us
            anytime.
          </p>
          <a
            href='tel:+3547826534'
            className='font-medium md:text-[26px] text-[15px] md:leading-9 leading-6 text-center text-[#017867] '
          >
            +354-782-6534
          </a>
        </div>

        <div className='md:py-[62px] py-[30px] md:px-[70px] px-8 md:h-[445px] bg-primaryText rounded-lg flex flex-col items-center'>
          <Image
            src={mailGreen}
            alt='Phoen Icon'
            width={86}
            height={86}
            className='mx-auto md:block hidden'
          />

          <Image
            src={mailGreen}
            alt='Phoen Icon'
            width={65}
            height={65}
            className='mx-auto md:hidden'
          />
          <h4 className='md:text-[46px] text-[24px] text-[#2E3034] font-semibold md:leading-[58px] leading-[36px] text-center md:mt-5 mt-[11px] md:mb-3 mb-[6px]'>
            Contact us via email:
          </h4>
          <p className='md:text-lg text-[13px] text-[#707477E] font-normal md:leading-7 leading-[20px] text-center md:mb-[26px] mb-3'>
            For bookings and questions please send us an email.
          </p>
          <a
            href='mailto:info@svalbardexperts.com'
            className='font-medium md:text-[26px] text-[15px] md:leading-9 leading-6 text-center text-[#017867]'
          >
            info@svalbardexperts.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
