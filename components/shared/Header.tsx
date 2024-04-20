'use client';

import { scrollToTop } from '@/constants/hanlders';
import { arrowGreenUp, map, whatsAppWhite } from '@/constants/images';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { LineChartIcon, X } from 'lucide-react';
import { FaBars } from 'react-icons/fa';

const navLinks = [
  { name: 'home', href: '/' },
  { name: 'about us', href: '/about' },
  { name: 'blog', href: '/blog' },
  { name: 'contact us', href: '/contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className='fixed left-0 top-0 w-full z-50'>
      <DesktopViewNav scrolled={scrolled} pathName={pathName} />
      <ResponsiveNav scrolled={scrolled} pathName={pathName} />
    </nav>
  );
};

function DesktopViewNav({
  scrolled,
  pathName,
}: {
  scrolled: boolean;
  pathName: string;
}) {
  return (
    <div
      className={cn(
        'md:flex hidden md:py-6 items-center justify-around relative z-50',
        scrolled && 'glass',
      )}
    >
      <div className='flex items-center cursor-pointer' onClick={scrollToTop}>
        <Image src={map} alt='Map' width={70} height={72} />
        <h3 className='text-4xl font-bold text-primaryText'>
          Svalbard<span className='font-normal'>Experts</span>
        </h3>
      </div>
      <ul className='flex items-center md:gap-10'>
        {navLinks.map((navLink) => (
          <Link key={navLink.href} href={navLink.href}>
            <li
              className={cn(
                'text-xl leading-7 text-primaryText capitalize',
                pathName.startsWith(navLink.href)
                  ? 'font-semibold'
                  : 'font-normal',
              )}
            >
              {navLink.name}
            </li>
          </Link>
        ))}
      </ul>
      <div className='flex items-center justify-center gap-5'>
        <Link href=''>
          <Image
            src={whatsAppWhite}
            alt='Whatsapp icon'
            width={36}
            height={37}
          />
        </Link>
        <Button variant='outline' size='outline'>
          <span>Book a trip</span>
          <div className='inline-flex items-center justify-center whitespace-nowrap rounded-lg ring-offset-background transition-colors  bg-primaryText h-[56px] w-[56px]'>
            <Image src={arrowGreenUp} alt='Arrow green' width={27} />
          </div>
        </Button>
      </div>
    </div>
  );
}

function ResponsiveNav({
  scrolled,
  pathName,
}: {
  scrolled: boolean;
  pathName: string;
}) {
  const [showList, setShowList] = useState(false);

  return (
    <div className='md:hidden flex items-center justify-between py-3 px-6 h-[70px] relative glass'>
      <div className='flex items-center cursor-pointer' onClick={scrollToTop}>
        <Image src={map} alt='Map' width={35} height={37} />
        <h3 className='text-[17px] font-bold text-primaryText'>
          Svalbard<span className='font-normal'>Experts</span>
        </h3>
      </div>
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
            <Link href={navLink.href} key={navLink.name}>
              <li
                className={cn(
                  'text-lg leading-7 capitalize',
                  pathName.startsWith(navLink.href)
                    ? 'font-semibold text-[#017867] underline'
                    : 'font-normal text-black',
                )}
              >
                {navLink.name}
              </li>
            </Link>
          ))}

          <li>
            <button>Book a trip</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
