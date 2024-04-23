import {
  globeWhite,
  instagramWhite,
  mailWhite,
  map,
  owlgreen,
  phoneFillWhite,
  whatsAppWhite,
} from '@/constants/images';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import { mapMobile } from '@/constants/mobileImages';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
];

const icons = [
  mailWhite,
  whatsAppWhite,
  phoneFillWhite,
  instagramWhite,
  globeWhite,
  owlgreen,
];

const Footer = () => {
  return (
    <footer className='bg-base'>
      <div className='md:pt-[90px] pt-10 md:pb-10 pb-[23px] md:px-[100px] pl-[23px] pr-[87px] overflow-hidden'>
        {/* main footer */}
        <aside className='pb-8 text-primaryText flex flex-col md:flex-row items-start md:gap-[176px] gap-8'>
          <div className='md:w-[428px] '>
            <Link href='/'>
              <div className='flex items-center md:mb-4'>
                <Image
                  src={map}
                  alt='Map'
                  width={58}
                  height={68}
                  className='md:block hidden'
                />
                <Image
                  src={mapMobile}
                  alt='Map'
                  width={48}
                  height={42}
                  className='md:hidden mr-1'
                />
                <h3 className='md:text-[27px] text-5 text-primaryText font-bold md:leading-[41px] leading-[30px] tracking-[-3%] uppercase'>
                  svalbard<span className='font-medium'>Experts</span>
                </h3>
              </div>
            </Link>
            <p className='md:text-lg md:font-normal leading-7'>
              SvalbardExperts is a leading travel agency specializing in
              creating unforgettable trips in Svalbard. We tailor-make your
              journey to Svalbard with personalized itineraries, ensuring
              wonderful memories are made.
            </p>
          </div>

          {/* navigations */}
          <div className=''>
            <h3 className='text-[22px] md:text-[26px] font-medium md:leading-9 leading-8'>
              Navigation
            </h3>
            <ul className='flex flex-col md:gap-4 md:mt-6 mt-4'>
              {footerLinks.map((link) => (
                <li
                  key={link.href}
                  className='md:text-lg leading-7 font-normal'
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=''>
            <h3 className='text-[22px] md:text-[26px] font-medium md:leading-9 leading-8'>
              Talk to an expert
            </h3>
            <ul className='md:mt-6 mt-4 mb-6'>
              <li>Tangbryggja 18, 110 Reykjavik, Iceland</li>
              <li>Company registration number: 451223-1190</li>
              <li>info@svalbardexperts.com</li>
              <li>+3547826534</li>
            </ul>
          </div>
        </aside>
        <hr className='hidden md:block scale-125' />
        {/* bottom footer */}
        <aside className='md:pt-10 mt-2 text-[#EDEEF0] font-normal leading-6 md:text-[15px] text-[13px] md:leading-6 text-5 opacity-80  flex flex-col-reverse md:flex-row items-center justify-end '>
          <p className='text-[10px] md:text-[15px] md:mt-0 mt-8 md:translate-x-0 translate-x-6'>
            &copy; {new Date().getFullYear()} SvalbardExperts. All rights
            reserved
          </p>

          <ul className='flex items-center justify-end h-min w-full '>
            <li className='md:pr-2 pr-[10px]  '>
              <Link href='privacy-policy'>Privacy Policy</Link>
            </li>

            <li>
              <span className='bg-white block md:h-[14px] h-[11px] w-[1px]' />
            </li>

            <li className='md:pl-2 pl-[10px] md:text-[15px] text-[13px] md:leading-6 text-5 font-normal'>
              <Link href='terms-of-use'>Terms of use</Link>
            </li>
          </ul>
        </aside>
      </div>
    </footer>
  );
};

export function InputWithButton() {
  return (
    <div className='flex w-full md:h-[55px] h-[44px] items-center space-x-2 relative'>
      <Input
        type='email'
        placeholder='Email'
        className='absolute left-0 right-0 md:h-[55px] h-[44px]'
      />
      <div className='absolute right-0 '>
        <Button type='submit' size='input'>
          Subscribe
        </Button>
      </div>
    </div>
  );
}

export default Footer;
