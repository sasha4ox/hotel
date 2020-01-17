import React from 'react';

export const Gallery = ({ flats }) => {
  return (
    <div className="gallery">
      {flats.map(item => (
        <div className="gallery__item" key={item.id}>
          <img src={item.img} alt={item.id} className="gallery__img" />
          {/* <div></div> */}
        </div>
      ))}
    </div>
  );
};
