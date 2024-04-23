import React from 'react';

function Loading() {
  return (
    <div className='h-screen flex flex-col items-center justify-center min-h-[80vh]'>
      <div className='w-24 h-24 rounded-full animate-spin border-t-4 border-gray-200'></div>
      <h3 className='text-lg text-gray opacity-65 mt-4 relative'>Loading...</h3>
    </div>
  );
}

export default Loading;
