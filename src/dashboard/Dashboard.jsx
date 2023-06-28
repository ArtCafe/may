import React,{useState, useEffect} from 'react';
import { useLocation,  } from "react-router-dom";

import PostForm from '../components/PostForm/PostForm';

import SecondBar from '../components/SecondBar';
import Blog from '../components/Blog/Blog';


export default function Dashboard() {
  const location = useLocation();


  

  useEffect(() => {
    setFlag(false)
    if (`${location.pathname}` === "/dashboard") {
      setFlag(true);
    } else {
      setFlag(false);
    }
  },[location.pathname])


  return (
    <>
    <div  className="w3-col l8 s12" >
   
 
<SecondBar  />

 
</div>


   <div className="w3-col l4"> 

     <SecondBar  />
     
    
    </div>
    
    </>
  )
}





  
