import AboutBanner from '@/components/About/AboutBanner';
import AboutFounder from '@/components/About/AboutFounder';
import GetInTouch from '@/components/shared/GetInTouch';
import Reviews from '@/components/shared/Reviews';
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <AboutBanner />
      <AboutFounder />
      <Reviews />
      <GetInTouch />
    </div>
  );
};

export default AboutPage;
