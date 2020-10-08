import { AirplaneIcon } from 'icons';
import React from 'react';

const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <AirplaneIcon className='animate-spin text-gray-400 h-64 w-64' />
    </div>
  );
};

export default Spinner;
