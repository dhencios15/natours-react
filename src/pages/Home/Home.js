import React from 'react';

import useTours from 'hooks/useTours';
import { Card, CardWrapper, ContentContainer } from './Home.style';
import Header from 'components/HomeCardLayout/Header';
import Body from 'components/HomeCardLayout/Body';
import Footer from 'components/HomeCardLayout/Footer';
import { AirplaneIcon } from 'icons';

const Home = () => {
  const { data: tours, error, isFetching } = useTours();

  if (error) return 'ERROR';

  return (
    <ContentContainer>
      {isFetching && (
        <div className='flex justify-center items-center mt-10'>
          <AirplaneIcon className='animate-spin text-gray-400 h-64 w-64' />
        </div>
      )}
      <CardWrapper>
        {tours &&
          tours.map((tour) => (
            <Card key={tour.id}>
              <div className='border border-gray-800 hover:border-gray-600 rounded-md shadow-2xl overflow-hidden'>
                <Header imageCover={tour.imageCover} name={tour.name} />
                <Body tour={tour} />
                <Footer
                  price={tour.price}
                  ratingsAverage={tour.ratingsAverage}
                  ratingsQuantity={tour.ratingsQuantity}
                />
              </div>
            </Card>
          ))}
      </CardWrapper>
    </ContentContainer>
  );
};

export default Home;
