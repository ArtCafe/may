import React from 'react'
import Modal from 'react-modal';
import "./Modal.css";


export default function Modalhoc({children, closeModal, modalIsOpen}) {
    return (
      <>
      <Modal
     
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <div>
         <button onClick={closeModal}>x</button></div>
    
      {children}
      
    </Modal>
         </>
      
  
      
    )
  }
  
