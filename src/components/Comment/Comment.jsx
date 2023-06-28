import React,{useState, useEffect} from 'react'
import AvatarComment from './AvatarComment'
import axios from 'axios';


export default function Comment({comment})
 {
const API_URL = '/api/users/user'
  
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ idUser: '',});


 const { idUser } = formData ;




useEffect(()=> {


setFormData( {idUser: comment.author} )

  const userData = { idUser }

getUser(userData)

}, [idUser]);

const getUser = async ( userData) => {
  const config = {
    headers: {
    //  Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post( API_URL , userData, config)

  //return response.data
  setUser(response.data)
}


  return (
    <div className="w3-container w3-margin" style={{ width:  365}}>
        
    <ul className="w3-ul w3-hoverable w3-white">
    
    <li className="w3-padding-16">
      <AvatarComment user={user} />
   
   <span>Informatie {comment?.content}</span>
  <span>{comment?.content}</span>
</li>
</ul>
</div>

  )
}
