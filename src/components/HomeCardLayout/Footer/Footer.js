import React from 'react';
import { ButtonDetails, FooterWrapper, TypoPrice } from './Footer.style';

const Footer = ({ price, ratingsAverage, ratingsQuantity }) => {
  return (
    <FooterWrapper>
      <div>
        <p>
          <TypoPrice>&#8369; {price}</TypoPrice> per person
        </p>
        <p>
          {ratingsAverage} ratings ({ratingsQuantity})
        </p>
      </div>
      <ButtonDetails>DETAILS</ButtonDetails>
    </FooterWrapper>
  );
};

export default Footer;
