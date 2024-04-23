import GetInTouch from '@/components/shared/GetInTouch';
import { natureTouch1 } from '@/constants/images';
import { natureTouch1Mobile } from '@/constants/mobileImages';
import Image from 'next/image';
import React from 'react';

const purposes = [
  'For your own personal use',
  'to seek information regarding our tours and services',
  'to access your travel or booking information',
  'to get in touch with us regarding your booking, travel arrangements or to submit a review or comment regarding our tours and services.',
  'You also agree only to use our website for lawful purposes.',
  'You must not use our website for commercial purposes or for/in connection with any unlawful or criminal activity.',
  'You also agree not to try to gain unlawful access to our website and data.',
  'Finally, you agree not to make any false or fraudulent reservation on this website.',
];

const externalLinks = [
  'The Svalbard Experts website contains links to external websites operated by our selected suppliers or partners and other third-party websites.',
  'These links or connections are made available so you can find out further information on our services, other group companies or relevant highlights.',
  'Please note that we are not responsible for nor do we endorse the content of these websites.',
  'Your access and use of these websites will be subject to the terms and conditions of those websites.',
];

const termsAndConditions = [
  'We have made available various services, tools and functionality on this website for your use. This is so you can find out about and book our products, view content provided by us, interact with us and submit and share views with other customers.',
  'We may remove or make changes to the products, information, content, materials, tools and features on this website at any time without liability and without notice to you.',
  'We may also change or modify any parts of our Terms & Conditions at any time and such changes or modifications shall be effective immediately upon publication.',
  'You should review these regularly to ensure you are familiar with the most up to date version. Browsing and continuing to access or use our website constitutes your acceptance of the updated terms and conditions.',
  'We reserve the right to cancel, amend or limit orders placed at the incorrect price. You must check the current price and all other details before your booking is confirmed.',
  'If you are acting as a private consumer nothing in these terms shall affect your legal rights as a consumer as long as they are not excluded or limited by law. Any booking made by you shall be subject to separate booking conditions.',
  'To the maximum extent permitted by the law, we disclaim all warranties. We shall not be liable to you for any loss damage or liability you suffer or incur as a result of visiting, browsing, or using our website, or the non-availability or interruption of our website.',
];

const TermsOfUse = () => {
  return (
    <section>
      <Image
        src={natureTouch1}
        alt='Terms of use'
        width={1512}
        height={400}
        className='md:block hidden w-full h-[400px]'
      />
      <Image
        src={natureTouch1Mobile}
        alt='Terms of use'
        width={400}
        height={220}
        className='md:hidden w-full h-[220px]'
      />
      <div className='md:pt-[90px] pt-[60px] md:pb-[160px] pb-[60px] md:px-[100px] px-6'>
        <h3 className='custom-header'>Terms & Conditions</h3>
        <h4 className='text-gray md:text-[26px] text-[15px] md:leading-9 leading-6 font-medium md:mb-5 mb-3 md:mt-14 mt-6'>
          You agree to use Svalbard Experts website for the following purposes:
        </h4>
        <ul className='md:mb-5 mb-3'>
          {purposes.map((purpose, index) => (
            <li key={index}>
              <p className='md:text-[22px] text-[15px] text-gray font-normal md:leading-[33px] leading-6'>
                {purpose}
              </p>
            </li>
          ))}
        </ul>
        <p className='md:text-[22px] text-[15px] text-gray font-normal md:leading-[33px] leading-6 md:mb-5 mb-3'>
          The Svalbard Experts website displays and uses a range of content,
          including and not limited to images, designs, videos, and reviews.
          Unless otherwise stated, we own or are licensed to use this content.
        </p>
        <p className='md:text-[22px] text-[15px] text-gray font-normal md:leading-[33px] leading-6 md:mb-5 mb-3'>
          By using our website, you agree not to reproduce, copy, republish,
          download, or transmit any of this intellectual property unless written
          permission is granted.
        </p>
        <p className='md:text-[22px] text-[15px] text-gray font-normal md:leading-[33px] leading-6 md:py-5 md:mb-5 mb-3'>
          Some images currently in use on our website do not represent on-going
          operational guidelines or health and safety measures such as face
          masks and physical distancing requirements.
        </p>

        <ul className='md:mb-5 mb-3'>
          {externalLinks.map((link, index) => (
            <li key={index}>
              <p className='md:text-[22px] text-[15px] text-gray font-normal md:leading-[33px] leading-6'>
                {link}
              </p>
            </li>
          ))}
        </ul>

        <ul>
          {termsAndConditions.map((sentence, index) => (
            <li key={index}>
              <p className='md:text-[22px] text-[15px] text-gray font-normal md:leading-[33px] leading-6 mb-5'>
                {sentence}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className='md:block hidden'>
        <GetInTouch />
      </div>
    </section>
  );
};

export default TermsOfUse;
