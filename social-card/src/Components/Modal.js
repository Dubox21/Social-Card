import React from 'react';
import "./Modal.css";

const Modal = ({children, isOpen, closeModal}) => {
  return (
      <article className={`modal ${isOpen && "is-open"}`}>
        <div className='modal-container'>
            <button class='modal-close' onClick={closeModal}><i class="fa-regular fa-circle-xmark"></i></button>
            {children}
        </div>
      </article>  
  );
}

export default Modal;