import React from 'react';
import Slider from '@farbenmeer/react-spring-slider';

function Home() {
  return (
    <>
      <main>
        {/* <h2>I'm awesome main page</h2> */}
        <div className={'wrapper__slider'}>
          <Slider
            hasBullets
            auto={5000}
            bulletStyle={{ backgroundColor: '#fff', margin: '10px 5px' }}
          >
            <div className={'home__img__wrapper'}>
              <img
                className={'home__img'}
                src="https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/413882451.jpg?alt=media&token=252a391e-540b-4bb2-8217-a8e5ecb07986"
                alt="main image"
              />
            </div>
            <div className={'home__img__wrapper'}>
              <img
                className={'home__img'}
                src="https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/413882502.jpg?alt=media&token=e710fa97-f420-4128-965d-3d36b68c256b"
                alt="main image"
              />
            </div>
            <div className={'home__img__wrapper'}>
              <img
                className={'home__img'}
                src="https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/140464611.jpg?alt=media&token=e4ffb1de-662f-41d1-8a4f-3ea24714804d"
                alt="main image"
              />
            </div>
            <div className={'home__img__wrapper'}>
              <img
                className={'home__img'}
                src="https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/913712461.jpg?alt=media&token=d4ce9145-30ae-4ab5-b563-12256cfddefe"
                alt="main image"
              />
            </div>
            <div className={'home__img__wrapper'}>
              <img
                className={'home__img'}
                src="https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/419175846.jpg?alt=media&token=c5517907-cc1d-4ca2-a72f-2a605ad55d07"
                alt="main image"
              />
            </div>
            {/* <div style={{ color: 'red' }}>
            <h3>qq</h3>
          </div>
          <div>
            <h3>qq</h3>
          </div>
          <div>
            <h3>qq</h3>
          </div> */}
          </Slider>
        </div>
      </main>
    </>
  );
}
export default Home;
