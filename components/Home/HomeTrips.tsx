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
import { Contact } from '../Form/Contact';

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
    text: 'Over 100 customers who traveled with us have shared their positive feedbacks.',
  },
  {
    icon: owlWhite,
    title: 'Recommended on Tripadvisor',
    text: 'Being recommended on Tripadvisor indicates exceptional experiences.',
  },
];

const HomeTrips = () => {
  return (
    <section className='md:-translate-y-3 bg-gradient-to-b from-[#F4F8F8] to-[#D0E4E0] md:pt-[180px] md:px-[87px] px-4 md:pb-[90px] pb-[33px]'>
      {/* Mobile view contact form */}
      <div className='md:hidden pt-6 px-[30px]'>
        <div
          className='min-h-[400px] w-full rounded-sm
         bg-white mx-auto p-6 form-main-for-mobile'
          style={{
            boxShadow: '0.74px 0px 20px 2.22px #3131311A',
          }}
        >
          <h3 className='text-[28px] text-black font-semibold leading-[38px] text-center'>
            Want to travel with us ?
          </h3>
          <p className='text-[15px] text-center text-gray font-normal mt-[6px] md:mb-6 mb-[21px]'>
            Leave your contact information below and one of our experts will
            contact you soon!
          </p>
          <Contact />
        </div>
      </div>

      <h3 className='custom-header md:pt-0 pt-[56px] '>
        Why <span className='header-span'>choosing</span> us?
      </h3>
      <p className='custom-title'>
        The customers who traveled with us have shared
        {''}
        <span className='md:block'>&nbsp;their positive feedbacks.</span>
      </p>
      {/* card container */}
      <div className='grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-[10px] md:mt-14 mt-8'>
        {benefits.map((benefit, index) => (
          <div
            className={cn(
              'md:max-w-[307px] md:w-full md:min-h-[342px] min-h-[228px] rounded-lg md:pt-8 pt-4 md:pr-5 md:pl-5 px-3 md:pb-8 pb-[13px]',
              index === 1 ? 'bg-base' : 'bg-primaryText',
            )}
            style={{
              boxShadow: '0.74px 0px 20px 2.22px #3131311A',
            }}
            key={benefit.title}
          >
            <div
              className={cn(
                'md:w-20 w-10 md:h-20 h-10 rounded-full grid place-content-center',
                index === 1 ? 'bg-primaryText' : 'bg-base',
              )}
            >
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={46}
                height={46}
                className='md:block hidden'
              />

              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={22}
                height={22}
                className='md:hidden'
              />
            </div>
            <h3
              className={cn(
                'font-semibold md:leading-[34px] leading-[21px] md:mt-6 mt-3 md:mb-4 mb-[10px] text-[15px]',
                index === 1
                  ? 'md:text-2xl text-white'
                  : 'md:text-[26px]  text-[#2E3034]',
              )}
            >
              {benefit.title}
            </h3>
            <p
              className={cn(
                'font-normal md:text-[15px] text-[11px] md:leading-6 leading-[18px]',
                index === 1 ? 'text-[#EDEEF0]' : 'text-[#53555A]',
              )}
            >
              {benefit.text}
            </p>
          </div>
        ))}
      </div>
      {/* popular trips */}
      <div className='md:pt-[180px] pt-14'>
        <h3 className='custom-header'>
          Popular <span className='header-span'>Trips</span>
        </h3>
        <p className='custom-title'>
          Step into an unforgettable adventure through Svalbard&apos;s
          wilderness, <span className='md:block' /> where the magic of life
          unfolds before your eyes.
        </p>
        <div className='md:mt-14'>
          <div className='mb-[23px]'>
            <div className='md:block hidden w-full h-[2px] bg-[#8F9196] relative'>
              <Image
                src={group}
                alt='Group icon'
                width={80}
                height={106}
                className='absolute -left-[78px] -bottom-[52px] md:block hidden'
              />
              <Image
                src={group}
                alt='Group icon'
                width={80}
                height={106}
                className='absolute -right-[78px] -bottom-[52px] md:block hidden'
              />

              <div className='md:flex hidden absolute w-full items-center justify-evenly'>
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
