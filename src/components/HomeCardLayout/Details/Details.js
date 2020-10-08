import React from 'react';

const Details = ({ details, children, message }) => {
  return (
    <div className='flex text-gray-300 text-xs font-light text-left'>
      <span>{children}</span> {details} {message}
    </div>
  );
};

export default Details;
