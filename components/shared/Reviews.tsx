'use client';

import React, { useEffect } from 'react';

const Reviews = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.commoninja.com/sdk/latest/commonninja.js';
    script1.defer = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://cdn.commoninja.com/sdk/latest/commonninja.js';
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className=' md:py-[120px] w-full'>
      <h3 className='mb-[63px] text-[55px] text-black leading-[66px] text-center font-bold'>
        What people are{' '}
        <span className='inline-block bg-base rounded-lg text-primaryText'>
          saying?
        </span>
      </h3>
      {/* Tripadviser widget */}
      <script
        src='https://cdn.commoninja.com/sdk/latest/commonninja.js'
        defer
      ></script>
      <div className='commonninja_component pid-ea5150d4-2d3a-4a4d-8eec-e6c257396fc7'></div>

      {/* Widget Id: ea5150d4-2d3a-4a4d-8eec-e6c257396fc7 */}
    </div>
  );
};

export default Reviews;
