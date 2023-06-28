import React,{useState, useEffect} from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation,  } from "react-router-dom";
import { logout, reset } from '../../features/auth/authSlice'



function Header() {
  const [switchLink,  setSwitLink] = useState(false);
  const [switchSeting,  setSwitchSeting] = useState(false);


  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const location = useLocation();

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  

  useEffect(() => {
    setSwitchSeting(false)
    if (`${user?.role}` === "1"  ) {
      setSwitchSeting(true);
    } else {
      setSwitchSeting(false);
    }
/*
    setSwitchSeting(true);
    if (`${location.pathname}` === "/dashboard" ) {
      setSwitchSeting(false);
    } else {
      setSwitchSeting(true);
    }
*/
 setSwitLink(false)
    if (`${location.pathname}` === "/" ) {
      setSwitLink(true);
    } else {
      setSwitLink(false);
    }

   
   


  },[user, switchSeting, location.pathname ])


  return (
    <header className='header'>
      <div className='logo'>
        {user ?
         <div> {switchSeting ? <Link to='/dashboard'>Admin</Link>  
         : <div></div> }</div> : <Link to='/register'></Link>}
        
     
      </div>
      <div className='logo'>
    {user ? <div>{switchSeting ?  <Link to='/createpost'>Create Post</Link>  : <div></div>}</div> : <div></div>}  

      </div>

      <div className='logo'>
      <div>{switchLink ?  <div></div> : <Link to='/'>Home</Link> }</div> 

      </div>
      <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}
//path={`/dashboard/${ auth.user.role === 1 ? "admin" : "user"`}
export default Header
