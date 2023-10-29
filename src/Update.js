import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from './URL'
import { useNavigate } from 'react-router-dom'
const Update = () => {
    const[name,setName]=useState("")
    const[place,setPlace]=useState("")
    const[id,setId]=useState("")
    const navigate=useNavigate()
    const updateUser= async()=>{
        await axios.put(API_URL + id ,{
            name,
            place
        } )
        navigate("/read")
    }
    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setPlace(localStorage.getItem("place"))
    },[])
  return (
    <div>
        <h2 style={{textAlign:"center"}}>Update data</h2>
    <form className='border m-5 p-5 bg-dark' onSubmit={(e)=>e.preventDefault()}>
    <label htmlFor="ser" className='text-white'>Name :</label>
    <input type="text"
    id='ser'
    className='form-control '
    placeholder='enter your name'
    value={name}
    required
    onChange={(e)=>setName(e.target.value)}
    />
    <label htmlFor="serc" className='mt-3 text-white'>Place :</label>
    <input type="text"
    id='serc'
    className='form-control'
    value={place}
    required
    onChange={(e)=>setPlace(e.target.value)}
    placeholder='enter your place'
    />
    <button className='mt-3 bg-danger text-white' onClick={()=>updateUser()}>Update</button>


</form>


</div>
  )
}

export default Update