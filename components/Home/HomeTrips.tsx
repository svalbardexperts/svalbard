import {
  cirtificate,
  group,
  owlWhite,
  polygon,
  reviewCard,
  shield,
} from '@/constants/images';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PopularTripsSlides } from './PopularTripsSlides';

const benefits = [
  {
    icon: shield,
    title: 'Full financial protection',
    text: 'Full financial protection ensures comprehensive coverage against potential economic risks and uncertainties.',
  },
  {
    icon: cirtificate,
    title: '10 years of experience in tourism',
    text: 'With a decade of experience in tourism, we bring a wealth of knowledge and expertise to every journey.',
  },
  {
    icon: reviewCard,
    title: 'Over 100 customers traveled with us',
    text: 'Over 100 customers who traveled with us have shared their positive experiences.',
  },
  {
    icon: owlWhite,
    title: 'Recommended on Tripadvisor',
    text: 'Being recommended on Tripadvisor indicates exceptional experiences.',
  },
];

const HomeTrips = () => {
  return (
    <section className='-translate-y-3 bg-gradient-to-b from-[#F4F8F8] to-[#D0E4E0] md:pt-[180px] md:px-[87px] md:pb-[90px]'>
      <h3 className='custom-header'>
        Why <span className='header-span'>choosing</span> us?
      </h3>
      <p className='custom-title'>
        Choose us for your journey and enjoy unparalleled service
        <span className='block'>and memorable experiences.</span>
      </p>
      {/* card container */}
      <div className='grid md:grid-cols-4 md:gap-6 md:mt-14'>
        {benefits.map((benefit, index) => (
          <div
            className={cn(
              '2xl:w-[307px] md:w-[297px] min-h-[342px] rounded-lg pt-8 pr-5 pb-8 pl-5',
              index === 1 ? 'bg-base' : 'bg-primaryText',
            )}
            style={{
              boxShadow: '0.74px 0px 20px 2.22px #3131311A',
            }}
            key={benefit.title}
          >
            <div
              className={cn(
                'w-20 h-20 rounded-full grid place-content-center',
                index === 1 ? 'bg-primaryText' : 'bg-base',
              )}
            >
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={46}
                height={46}
              />
            </div>
            <h3
              className={cn(
                'font-semibold leading-[34px] mt-6 mb-4',
                index === 1
                  ? 'text-2xl text-white'
                  : 'text-[26px]  text-[#2E3034]',
              )}
            >
              {benefit.title}
            </h3>
            <p
              className={cn(
                'font-normal md:text-[15px] leading-6',
                index === 1 ? 'text-[#EDEEF0]' : 'text-[#53555A]',
              )}
            >
              {benefit.text}
            </p>
          </div>
        ))}
      </div>
      {/* popular trips */}
      <div className='md:pt-[180px]'>
        <h3 className='custom-header'>
          Popular <span className='header-span'>choosing</span>
        </h3>
        <p className='custom-title'>
          You haven&apos;t really experienced life, until the moment you are out
          on a <span className='block' /> dog sled, under the northern lights,
          surrounded by fjords and <span className='block' />
          colors you didn&apos;t know before!
        </p>
        <div className='md:mt-14'>
          <div className='mb-[23px]'>
            <div className='w-full h-[2px] bg-[#8F9196] relative'>
              <Image
                src={group}
                alt='Group icon'
                width={80}
                height={106}
                className='absolute -left-[78px] -bottom-[52px]'
              />
              <Image
                src={group}
                alt='Group icon'
                width={80}
                height={106}
                className='absolute -right-[78px] -bottom-[52px]'
              />

              <div className='absolute w-full  flex items-center justify-evenly'>
                {[1, 2, 3].map((item) => (
                  <div
                    className='w-[17px] flex flex-col items-center justify-center '
                    key={item}
                  >
                    <Image src={polygon} alt='polygon' />
                    <span className='block w-[1px] h-[360px] bg-[#8F9196] -translate-y-2'></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <PopularTripsSlides />
        </div>
      </div>
    </section>
  );
};

export default HomeTrips;
