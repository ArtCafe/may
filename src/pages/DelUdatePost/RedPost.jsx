import React,{useState, useEffect} from 'react';
import {  useSelector} from 'react-redux'
import Modal from '../../moreUseComponet/Modal/Modalhoc'
import PostForm from '../../components/PostForm/PostForm';
import SecondBar from '../../components/SecondBar';
import Blog from '../../components/Blog/Blog';


export default function RedPost() {
  const { user} = useSelector((state) => state.auth)

  const [modalIsOpen, setIsOpen] = useState();
  
  const [flag, setFlag] = useState(false)


  
  useEffect(() => {
    setFlag(false)
    if (`${user?.role}` === "1") {
      setFlag(true);
    } else {
      setFlag(false);
    }
  },[setFlag, user])



  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
 
  return (
    <>
    <div  className="w3-col l8 s12" >
   
  <header className="w3-row"> 
  <button className="w3-tag" onClick={openModal}>REDACTARE</button>
  
  <p>Post</p>
</header>
 <Blog flag={flag} ></Blog>
   <Modal closeModal={closeModal} modalIsOpen={modalIsOpen}><PostForm/></Modal>
</div>


   <div className="w3-col l4"> 

     <SecondBar  />
     
    
    </div>
    
    </>
  )
}