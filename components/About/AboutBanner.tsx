import {
  about,
  checkWhite,
  clockWhite,
  currencyWhite,
  getInTouchImg,
  smile,
  star,
} from '@/constants/images';
import { aboutobile } from '@/constants/mobileImages';
import { Star, StarIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const data = [
  `Svalbard Experts is a travel agency specializing in unforgettable adventures to the unusual landscapes of Svalbard. 
  Located within the Arctic Circle, Svalbard boasts a surreal blend of rugged mountains, sweeping glaciers, and abundant wildlife, making it a haven for explorers and nature enthusiasts alike.
  `,
  `At Svalbard Experts, we create immersive experiences that allow you to dive deep into the heart of this remote archipelago. 
  Whether you're seeking the thrill of a polar expedition or the tranquility of a wilderness retreat, our dedicated team is here to craft your perfect Arctic getaway.
  `,
  `Join on a journey unlike any other as you set sail aboard our expedition vessels, navigating through the fjords and crystal water`,
  `Our expert guides, with their large knowledge of Svalbard locations and wildlife, will lead you on amazing excursions, from thrilling snowmobile safaris across the Arctic to hikes through the most interesting locations. 
  Let yourself in the culture of Svalbard, where you'll meet the locals who call this frozen wilderness home.
  `,
  `At Svalbard Experts, sustainability and conservation are at the core of everything we do. 
  We are committed to preserving the fragile ecosystems of Svalbard, ensuring that future generations can continue to experience the beauty of the Arctic.`,
  `Whether you're dreaming of an epic polar expedition or a tranquil escape amidst nature's most breathtaking landscapes, let ASvalbard Experts be your guide to the wonders of Svalbard. An adventure of a lifetime waiting for you!`,
];

const cardsData = [
  {
    icon: clockWhite,
    title: '10+',
    text: 'Years Of Experience',
  },
  {
    icon: smile,
    title: '12+',
    text: 'Hotels In Cooperation With Us',
  },
  {
    icon: checkWhite,
    title: '100+',
    text: "Trips We've Made",
  },
  {
    icon: currencyWhite,
    title: '€2000',
    text: 'Average Price For A Trip',
  },
];

const AboutBanner = () => {
  return (
    <section>
      <Image
        src={about}
        alt='About Us'
        width={1512}
        height={400}
        className='md:block hidden w-full h-[400px]'
      />
      <Image
        src={aboutobile}
        alt='About Us'
        width={400}
        height={220}
        className='md:hidden w-full h-[220px] '
      />

      <div className='md:bg-gradient-to-b from-[#F4F8F8] to-[#D0E4E0] md:pb-[100px] md:pt-[90px] py-[60px] md:px-[100px] px-5'>
        <h3 className='custom-header'>
          <span className='header-span'>About</span> Us
        </h3>

        <div className='md:mt-14 mt-4 md:space-y-11 space-y-4'>
          {data.map((item, index) => (
            <div
              className='flex items-start justify-start md:gap-4 gap-2'
              key={index + Math.random()}
            >
              <Image
                src={star}
                alt='Star'
                width={28}
                height={28}
                className='md:block hidden'
              />
              <Image
                src={star}
                alt='Star'
                width={16}
                height={16}
                className='md:hidden'
              />
              <p className='md:text-[22px] text-[14px] text-gray md:leading-[33px] leading-6 font-normal'>
                {item}
              </p>
            </div>
          ))}
        </div>
        {/* cards data */}
        <div className='grid md:grid-cols-4 grid-cols-2 md:gap-[22px] gap-[11px] md:mt-14 mt-6'>
          {cardsData.map((data, index) => (
            <div
              className='md:px-[35px] px-5 md:pt-9 pt-5 md:pb-0 pb-[30px] bg-primaryText flex flex-col items-center rounded-lg md:min-h-[312px]'
              key={index + data.title}
              style={{
                boxShadow: '0.74px 0px 20px 2.22px #3131311A',
              }}
            >
              <div className='md:w-[101px] w-[60px] md:h-[101px] h-[60px] bg-base rounded-full grid place-content-center'>
                <Image
                  src={data.icon}
                  alt={data.title}
                  width={44}
                  height={44}
                  className='md:block hidden'
                />
                <Image
                  src={data.icon}
                  alt={data.title}
                  width={26}
                  height={26}
                  className='md:hidden'
                />
              </div>
              <h3 className='md:text-[38px] text-[22px] font-semibold md:leading-[49px] leading-[33px] text-[#010C01] opacity-[.7] md:mt-5 mt-[11px]'>
                {data.title}
              </h3>
              <p className='md:text-[22px] text-[12px] text-[#010C01] text-center font-normal md:leading-[33px] leading-[21px] opacity-[.7] md:mt-1 mt-[2px]'>
                {data.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
