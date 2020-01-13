import React from 'react';
import Slider from '@farbenmeer/react-spring-slider';

function Home() {
  return (
    <>
      <main>
        <h2>I'm awesome main page</h2>

        <Slider hasBullets bulletStyle={{ backgroundColor: '#000' }}>
          <div>
            <img
              className={'home__img'}
              src="https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/413882451.jpg?alt=media&token=252a391e-540b-4bb2-8217-a8e5ecb07986"
              alt="main image"
            />
          </div>
          <div>
            <img
              className={'home__img'}
              src="https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/413882502.jpg?alt=media&token=e710fa97-f420-4128-965d-3d36b68c256b"
              alt="main image"
            />
          </div>
          <div>
            <img
              className={'home__img'}
              src="https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/140464611.jpg?alt=media&token=e4ffb1de-662f-41d1-8a4f-3ea24714804d"
              alt="main image"
            />
          </div>
        </Slider>
      </main>
    </>
  );
}
export default Home;
