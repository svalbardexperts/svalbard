import AboutBanner from '@/components/About/AboutBanner';
import AboutFounder from '@/components/About/AboutFounder';
import GetInTouch from '@/components/shared/GetInTouch';
import Reviews from '@/components/shared/Reviews';
import React from 'react';

const ThankyouPage = () => {
  return (
    <div>
      <div className='Thank-you-page-content'>

        <h1 className='uppercase thank-you-text'>Thank you</h1>
        <div className='thank-you-checkmark'>&#x2713;</div>
        <p>Your submission have been received</p>
        <p className='thank-you-experts-text'>One of our experts will be contacting you soon</p>
      </div>



    </div>
  );
};

export default ThankyouPage;
