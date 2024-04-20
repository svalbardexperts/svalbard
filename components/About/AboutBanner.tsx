import {
  checkWhite,
  clockWhite,
  currencyWhite,
  getInTouchImg,
  star,
} from '@/constants/images';
import { Star, StarIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const data = [
  `Svalbard Experts is a travel company that specializes in creating unforgettable trips to Svalbard, an archipelago located in the Arctic Ocean with a focus on providing unique and immersive experiences.
Svalbard Experts has become one of the leading travel agency in the region, and provides services mainly to families and couples.`,
  `Our tours are designed to give travelers a taste of Svalbard's rugged beauty, while providing them with the comfort they need to enjoy their journey. Whether you are interested in exploring the islands' glaciers, watching the region's unique wildlife, or learning about the history and culture of the local communities, we have a tour package that will suit you.`,
  `With a commitment to sustainable tourism, from using electric snowmobiles to providing eco-friendly accommodation, we are committed to protecting the natural beauty of Svalbard for generations to come.
  Our team of experienced guides are passionate about sharing their knowledge of the area with guests, and are committed to providing you with a safe and enjoyable travel experience.`,
  `With a focus on personalized service and attention to last detail, we guarantee that every traveler will feel taken care of all the way.`,
  `Would you like to explore one of the most remote and amazing destinations in the world and have an unforgettable experience? `,
];

const cardsData = [
  {
    icon: clockWhite,
    title: '10+',
    text: 'Years Of Experience',
  },
  {
    icon: clockWhite,
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
      <Image src={getInTouchImg} alt='About Us' width={15512} height={890} />

      <div className='bg-gradient-to-b from-[#F4F8F8] to-[#D0E4E0] md:py-[120px] md:px-[100px]'>
        <h3 className='custom-header'>
          <span className='header-span'>About</span> Us
        </h3>

        <div className='mt-14 space-y-11'>
          {data.map((item, index) => (
            <div
              className='flex items-start justify-start gap-4'
              key={index + Math.random()}
            >
              <Image src={star} alt='Star' width={28} height={28} />
              <p className='text-[22px] text-gray leadinn-[33px] font-normal'>
                {item}
              </p>
            </div>
          ))}
        </div>
        {/* cards data */}
        <div className='grid md:grid-cols-4 md:gap-[22px] mt-14'>
          {cardsData.map((data, index) => (
            <div
              className='px-[35px] pt-9 bg-primaryText flex flex-col items-center rounded-lg min-h-[312px]'
              key={index + data.title}
              style={{
                boxShadow: '0.74px 0px 20px 2.22px #3131311A',
              }}
            >
              <div className='w-[101px] h-[101px] bg-base rounded-full grid place-content-center'>
                <Image src={data.icon} alt={data.title} />
              </div>
              <h3 className='text-[38px] font-semibold leading-[49px] text-[#010C01] opacity-[.7] mt-5'>
                {data.title}
              </h3>
              <p className='text-[22px] text-[#010C01] text-center font-normal leading-[33px] opacity-[.7] mt-1'>
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
