'use client';

import { scrollToTop } from '@/constants/hanlders';
import { arrowGreenUp, map } from '@/constants/images';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import { X } from 'lucide-react';
import { FaBars } from 'react-icons/fa';
import Modal from '../ui/modal';
import { mapMobile } from '@/constants/mobileImages';

const navLinks = [
  { name: 'home', href: '/', title: 'home' },
  { name: 'about us', href: '/about', title: 'about' },
  { name: 'blog', href: '/blog', title: 'blog' },
  { name: 'contact us', href: '/contact', title: 'contact' },
];

const Header = () => {
  const [title, setTitle] = useState('home');

  return (
    <nav className='fixed left-0 top-0 w-full z-50 custom-z-index-nav'>
      <DesktopViewNav title={title} setTitle={setTitle} />
      <ResponsiveNav title={title} setTitle={setTitle} />
    </nav>
  );
};

function DesktopViewNav({
  title,
  setTitle,
}: {
  title?: string;
  setTitle: (newTitle: string) => void;
}) {
  return (
    <div
      className={cn(
        'md:flex hidden md:py-6 items-center justify-around relative z-50 glass',
      )}
    >
      <Link href='/'>
        <div className='flex items-center cursor-pointer' onClick={scrollToTop}>
          <Image src={map} alt='Map' width={70} height={72} />
          <h3 className='text-4xl font-bold text-primaryText select-none'>
            Svalbard<span className='font-normal'>Experts</span>
          </h3>
        </div>
      </Link>
      <ul className='flex items-center md:gap-10'>
        {navLinks.map((navLink) => (
          <Link key={navLink.href} href={navLink.href}>
            <li
              className={cn(
                'text-xl leading-7 text-primaryText capitalize',
                navLink.title === title ? 'font-semibold' : 'font-normal',
              )}
              onClick={() => {
                setTitle(navLink.title);
              }}
            >
              {navLink.name}
            </li>
          </Link>
        ))}
      </ul>{' '}
      <Modal>
        <Button variant='outline' size='outline'>
          <span>Book a trip</span>

          <div className='grid place-content-center rounded-md ring-offset-background transition-colors  bg-primaryText h-[56px] w-[56px]'>
            <Image src={arrowGreenUp} alt='Arrow green' width={27} />
          </div>
        </Button>
      </Modal>
    </div>
  );
}

function ResponsiveNav({
  title,
  setTitle,
}: {
  title?: string;
  setTitle: (newTitle: string) => void;
}) {
  const [showList, setShowList] = useState(false);

  return (
    <div className='md:hidden flex items-center justify-between py-3 px-6 h-[70px] relative glass'>
      <Link href='/'>
        <div className='flex items-center cursor-pointer' onClick={scrollToTop}>
          <Image src={mapMobile} alt='Map' width={35} height={37} />
          <h3 className='text-[17px] font-bold text-primaryText select-none'>
            Svalbard<span className='font-normal'>Experts</span>
          </h3>
        </div>
      </Link>
      <button className='text-white' onClick={() => setShowList(!showList)}>
        {showList === false ? (
          <FaBars className='h-6 w-6' />
        ) : (
          <X className='h-6 w-6' />
        )}
      </button>

      {showList && (
        <ul className='absolute top-[70px] left-0 right-0 pt-10 pb-[60px] bg-white flex flex-col items-center justify-center space-y-4 z-50'>
          {navLinks.map((navLink) => (
            <li
              key={navLink.name}
              className={cn(
                'text-lg leading-7 capitalize',
                navLink.title === title
                  ? 'font-semibold text-[#017867] underline'
                  : 'font-normal text-black',
              )}
              onClick={() => {
                setTitle(navLink.title);
              }}
            >
              <Link href={navLink.href} onClick={() => setShowList(!showList)}>
                {navLink.name}
              </Link>
            </li>
          ))}

          <li>
            <Modal>
              <button
                className='gap-2 w-[138px] py-[6px] pl-3 pr-[6px] bg-base flex items-center justify-between rounded-[5px] mx-auto'
                style={{
                  boxShadow: '0px 4.01px 10.54px 0px #00000040',
                }}
                // onClick={() => setShowList(!showList)}
              >
                <span className='text-[15px] leading-[24px] text-white'>
                  Book a trip
                </span>
                <span className='w-7 h-7 rounded-[5px] grid place-content-center bg-white'>
                  <Image
                    src={arrowGreenUp}
                    alt='Book a trip'
                    className='scale-75'
                  />
                </span>
              </button>
            </Modal>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
