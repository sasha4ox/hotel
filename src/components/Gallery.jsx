import React, { useState } from 'react';
import { Modals } from './Modals';

export const Gallery = ({ flats }) => {
  const [showModal, setShowModal] = useState(false);
  const [currenImg, setCurrentImg] = useState('');
  const handleOpenModal = e => {
    setShowModal(true);
    setCurrentImg(e);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <main className="gallery">
      <Modals
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        img={currenImg}
        className={'ModalImg'}
        classNameForBtnClose={'ModalImg__close_btn'}
      />
      {flats.map(item => (
        <div className="gallery__item" key={item.id}>
          <a
            role="button"
            className={'gallery__imgOpen_btn'}
            onClick={() => handleOpenModal(item.img)}
          >
            <img src={item.img} alt={item.id} className="gallery__img" />
          </a>
        </div>
      ))}
    </main>
  );
};
