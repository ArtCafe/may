import React from 'react'




const AvatarComment = ({ user }) => {
  return (
    <div className="avatar_comment">
    
    <img 
 
    src={user?.avatar}
     alt="age" className="w3-left w3-margin-right" style={{width:"50px"}}/>
      <small className="d-block text-break">
      
          {user.name}
        {user?.name}
      </small>
    </div>
  )
}

export default AvatarComment
