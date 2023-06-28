import React, { useState} from 'react'

import { useDispatch } from 'react-redux'
import {  createComment } from '../../features/comment/commentSlice'


export default function CommentInput({user, post}) {
  const [content, setContent] = useState('')

const dispatch = useDispatch()


const handleComment = () => {


  const data = {
    content: content,
    author: user._id,
    idPost: (post._id),
   // replyCM: [],
    createdAt: new Date().toISOString()
  }


  dispatch(createComment(data, user.access_token))
  setContent('')
}
  return (
    <div> <p>
       
    <input 
     id='content'
     className="w3-input w3-border" 
     type="text"
     placeholder="Enter comment"
     name='content'
     value={content}
     onChange={(e) => setContent(e.target.value)}
     
     />
      
    </p>
  <button onClick={handleComment} type='submit' className="w3-button w3-block w3-padding-large w3-grey w3-margin-bottom" 
 > Comenteaza</button>  </div>
  )
}
