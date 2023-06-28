import React, {useEffect, useState} from 'react'
import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PostModalForm from '../../components/PostModal/PostModalForm';


export default function CreatePost () {
  const { user } = useSelector((state) => state.auth);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  

 const navigate = useNavigate();

 useEffect(() => {

  if( `${user?.role}` === "1")
  {
    navigate("/createpost")
  } else {
    navigate("/")
  }
},[user, navigate])

  return (
    <>

    <PostModalForm  closeModal={closeModal} modalIsOpen={modalIsOpen}/>
    <button  onClick={openModal}  className="w3-button w3-padding-large w3-white w3-border">Postare</button>
    </>
  )
}
