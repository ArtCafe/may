import React,{useState, useEffect} from 'react'
import ProfileCard from '../../components/Profileomponents/ProfileCard/ProfileCard'
import Blog from '../../components/Blog/Blog'
import Footer from '../../components/Footer/Footer'
import Headers from '../../components/Headers/Headers'
import PopularPosts from '../../components/PopularPosts/PopularPosts'
import Tags from '../../components/Tags/Tags'
import {  useSelector} from 'react-redux'

export default function Seting() {
  const { user, isLoading,} = useSelector((state) => state.auth)

  const [flag, setFlag] = useState(true)

  useEffect(() => {
    setFlag()
    if (`${user?.role}` === "1") {
      setFlag(true);
    } else {
      setFlag(false);
    }
  },[setFlag, user])




  return (
  <>
   {isLoading ? <div> loadig</div> : <div> <Headers/>
  <div>
    
  <div className="w3-row">

   <div className="w3-col l8 s12">

   <Blog flag={flag}/>
   </div>

   <div className="w3-col l4">
   <ProfileCard  user={user}/>
   <PopularPosts/>
   <Tags/>
   </div>
  
 </div>

</div>

<Footer/> </div> }


  </>
  )
}
