import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');
export const Modals = props => {
  return (
    <Modal
      isOpen={props.isOpen}
      contentLabel="onRequestClose"
      onRequestClose={props.onRequestClose}
      className={props.className}
      overlayClassName="Overlay"
    >
      {props.text}
      {props.img && <img src={props.img} className="img__open__Modal" alt={props.img}></img>}
      <button onClick={props.onRequestClose} className={props.classNameForBtnClose}>
        X
      </button>
    </Modal>
  );
};
