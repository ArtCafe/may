import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { createPost } from '../../features/posts/postSlice'
import { useParams } from 'react-router-dom'

function PostForm() {
 


const [fileUpload, setFileUpload] = useState(false)
const [title, setTitle] = useState('')
const [text, setText] = useState('')
const params= useParams()
const dispatch = useDispatch()

const submitHandler = (e) => {
  try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('text', text)
      formData.append('id', params.id)
      formData.append('image', fileUpload)
     

      dispatch(createPost(formData))
      setText('')
      setTitle('')
      setFileUpload('')
      clearFormHandler()
     
  } catch (error) {
      console.log(error)
  }
}

const clearFormHandler = () => {
  setTitle('')
  setText('')
  setFileUpload('')
}





return (
    <>
    <section className='form'>
      <form  onSubmit={(e) => e.preventDefault()} >
        <div className='form-group'>
          <label htmlFor='text'>Post</label>
          <input
            type='file'
            id ='image'
            name='image'
            onChange={(e) => setFileUpload(e.target.files[0])}
          />
           <label htmlFor='title'>Title</label>
           <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
           <label htmlFor='text'>Text</label>
           <textarea
            type='text'
            name='text'
            id='text'
            value ={text}
            onChange={(e) =>  setText(e.target.value) }
             />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'
          onClick={submitHandler}
          >
            Add Post
          </button>
        </div>
      </form>
    </section>
    
    </>
  )
}

export default PostForm
