import React, { useState, useEffect } from "react";
import PostItem from '../../components/PostItem/PostItem'
import axios from "axios";
import { useParams } from "react-router-dom";
import {  useSelector} from 'react-redux'

export default function Post() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [flag, setFlag] = useState(false);

const { user} = useSelector((state) => state.auth)
  
const getProduct = async () => {
  try {
    const { data } = await axios.get(
      `/api/posts/${params.id}`
    );
    setPost(data);
 
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    if (params?.id)
     getProduct()

     
  }, []);

  useEffect(() => {
    setFlag(false)
    if (`${user?.role}` === "1"  ) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  },[user])
  


  return (
    <div>
<PostItem post ={post} flag={flag}/>

    </div>
  )
}
