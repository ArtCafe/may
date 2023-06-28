import axios from 'axios'

const API_URL = '/api/comments/'

// Create new goal
const createComment = async (commentData, token) => {


  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, commentData)

  return response.data
}




const getComments = async (commentsData,  token ) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post( API_URL , commentsData, config)

  return response.data
}

// Delete user goal
const deleteComment = async (commentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + commentId, config)

  return response.data
}

const commentService = {
  createComment,
  getComments,
  deleteComment,
}

export default commentService
