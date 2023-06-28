import React, { useEffect, useState } from 'react'
import Comment from './CommentList'
import CommentInput from './CommentInput'
import { useSelector } from 'react-redux'
import {  getComments } from '../../features/comment/commentSlice'
import { useDispatch } from 'react-redux'

 function Comments ({ user, post}) {
  const {  comments} = useSelector((state) => state.comments);
  const [idPost, setIdPost] = useState(null)
  const [showCom, setShowCom] = useState(false);

const dispatch = useDispatch();


useEffect(()=> {
setIdPost(post._id)

if(comments?.lenghts > 0 ){
  setShowCom(true)
}else{
  setShowCom(false)
}

const commentsData = new FormData()
commentsData.append('idPost', idPost)
dispatch(getComments( commentsData))
console.log(commentsData);
}, [idPost])

  return (
    <>
        <div  className=" w3-animate-opacity ">
  <div  style={{padding:2}}>

    <div className="w3-container w3-white  w3-border " >
{showCom ? <div> 
  
  {comments?.lenghts > 0 ? (
          <div >
            {comments.map((comment) => (<Comment  key={comment._id} comment={comment} post={post}/>))}
          </div>
        ) : (
          <h3>You have not set any comments</h3>
        )}
     
  
  </div> : <div></div>}
 
   <CommentInput user={user} post={post}/>  
    </div>
  </div>
</div>
    </>
  )
}
export default  Comments


/*
       <div  className=" w3-animate-opacity">
  <div  style={{padding:32}}>
    <div className="w3-container w3-white">
      <i  
      className="fa fa-remove w3-xlarge w3-button w3-transparent w3-right w3-xlarge"></i>
      <h2 className="w3-wide">DOWNLOAD</h2>
      <p>Download the app in AppStore, Google Play or Microsoft Store.</p>
      <i className="fa fa-android w3-large"></i> <i className="fa fa-apple w3-large"></i>
       <i className="fa fa-windows w3-large"></i>
      <p>
        <input className="w3-input w3-border" type="text" placeholder="Enter comment"/>
        
        </p>
      <button className="w3-button w3-block w3-padding-large w3-grey w3-margin-bottom" 
     > Comenteaza</button>
    </div>
  </div>
</div>

*/