import axios from 'axios';
import { async } from 'q';
import React from 'react'
import { useState } from 'react'
function PostCreate() {
    const [title,setTitle] = useState('');

    const onSubmit = async(e)=>{
       e.preventDefault();
       await axios.post('http://localhost:4000/posts',{title});
       setTitle('');
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label>Title</label>
                <input value={title} onChange={e=> setTitle(e.target.value)} className='form-control'/>
            </div>
            <button className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default PostCreate