import React from 'react';
import classes from './style/Modal.module.css';

const Modal = ({hideModal, children}) => {
  return (
    <>
      <div className={classes.Backdrop} onClick={hideModal}></div>
      <div className={classes.Modal}>
        {children}
      </div>
      
    </>
  );
};

export default Modal;
