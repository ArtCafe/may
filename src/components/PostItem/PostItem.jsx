import React, {useState} from 'react'

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import ModalComment from '../Comment/CommentModal/ModalComment';
import { useSelector } from 'react-redux'
import { deletePost} from '../../features/posts/postSlice';
import {  useNavigate } from 'react-router-dom'


export default function PostItem({ flag, post}) {
 const dispatch = useDispatch();
 const navigate = useNavigate()
const { comments,  } = useSelector((state) => state.comments)

const { user} = useSelector( (state) => state.auth
)

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const deletepost = () =>{
    dispatch(deletePost(post._id))
    navigate("/")
  }
  return (
    <>
  
    <div >{flag ? <button   onClick={deletepost}> x </button> : <h2>{}</h2>}</div>
     <Link to ={`/post/${post._id}`}>

    <div  >

                   <img
                        src={post?.imgUrl}
                        alt="post image"
                        style={{width:"100%"}}
                      //  width="888px"
                    />
                
    </div>
         </Link>
    <div className="w3-container">
        <h3><b> {post?.title}</b></h3>
      <h5>  <span className="w3-opacity">April 7, 2014</span></h5>
      <p>{post?.text}</p>
      <div className="w3-row">
    
        <div className="w3-col m8 s12">
        <Link to ={`/post/${post._id}`}>
         
          <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
        </Link>
        </div>

        <div className="w3-col m4 w3-hide-small">
      
             <ModalComment  closeModal={closeModal} modalIsOpen={modalIsOpen}
             user={user}
             comments={comments}
             post ={post}
             />

             <p><span className="w3-padding-large w3-right  w3-white w3-border w3-button  "><b onClick={openModal}>
          
            Comments </b>   <span className="w3-tag">0</span></span></p>
            
        </div>
    
        </div>
        </div>
       
        </>
  )
}
