// import React from 'react'
import React, { useState } from 'react'
import {API_URL} from './URL'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const[name,setName]=useState("")
    const[place,setPlace]=useState("")
    const navigate=useNavigate()

const postData= async ()=>{ 
    await  axios.post(API_URL,{
        name,
        place
    })
    navigate("/read")
}

  return (
    <div>
        <h2 style={{textAlign:"center"}}>Create data</h2>
        <form className='border m-5 p-5 bg-info' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="ser" className='text-danger'>Name :</label>
        <input type="text"
        id='ser'
        className='form-control '
        placeholder='enter your name'
        value={name}
        required
        onChange={(e)=>setName(e.target.value)}
        />
        <label htmlFor="serc" className='mt-3 text-danger'>Place :</label>
        <input type="text"
        id='serc'
        className='form-control'
        value={place}
        required
        onChange={(e)=>setPlace(e.target.value)}
        placeholder='enter your place'
        
        />
        <button className='mt-3 b bg-primary text-white' onClick={postData} type='submit'>Add User</button>


    </form>
    

    </div>
  )
}

export default Create