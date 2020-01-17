import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');
export const Modals = props => {
  return (
    <Modal
      isOpen={props.isOpen}
      contentLabel="onRequestClose"
      onRequestClose={props.onRequestClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      {props.text}
      <button onClick={props.onRequestClose} className="modalClose__btn">
        X
      </button>
    </Modal>
  );
};
