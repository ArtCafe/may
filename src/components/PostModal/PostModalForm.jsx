import React, {useState, useEffect} from 'react'
//import Modal from 'react-modal';

import Modalhoc from '../../moreUseComponet/Modal/Modalhoc';
import PostForm from '../PostForm/PostForm';



export default function PostModalForm({closeModal, modalIsOpen}) {

    
    
    


  return (
    <div> 
      <Modalhoc
    modalIsOpen={modalIsOpen}
    closeModal={closeModal}
  > 
 

    
    
< PostForm/>
    
  </Modalhoc>
       

    </div>
  )
}