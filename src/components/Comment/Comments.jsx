import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import CommentInput from './CommentInput'
import axios from 'axios';



 function Comments ({ user, post}) {
  const API_URL = '/api/comments/get'


  const [showCom, setShowCom] = useState(false);
  const [comments, setComments] =  useState([])
 
const getComments = async ( commentsData) => {
  const config = {
    headers: {
    //  Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post( API_URL , commentsData, config)

  
  setComments(response.data)
}


useEffect(()=> {

setShowCom(true)
if(comments?.length > 0 ){
  setShowCom(true)
}else{
  setShowCom(false)
}
 

  const commentsData = {
    idPost: post._id,
   
  }

getComments( commentsData)

}, [post._id, comments]);



  return (
    <>
        <div  className=" w3-animate-opacity ">
  <div  style={{padding:2}}>

    <div className="w3-container w3-white  w3-border " >
{showCom ? <div>  {comments ? (<div > {comments.map((comment) => (<Comment  key={comment._id} comment={comment} post={post}/>))}</div>
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
 const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }




 */