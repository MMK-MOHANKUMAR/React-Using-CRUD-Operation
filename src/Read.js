
import React, { useEffect, useState } from 'react'
import { API_URL } from './URL'
import { BiSolidTrashAlt } from 'react-icons/bi';
import { GrEdit } from 'react-icons/gr';
import { useNavigate ,Link} from 'react-router-dom';
import axios from 'axios';
const Read = () => {
 
const[apiDate,setApidata]=useState([])
const navigate =useNavigate()

const handleDeleted= async (id)=>{
 await  axios.delete(API_URL + id)
 callGetAPI()
    
}

const updateUser=({name,place,id})=>{

    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("place",place)
    navigate("/update")
}
const callGetAPI= async ()=>{
    const res = await axios.get(API_URL)
    setApidata(res.data)
}


 
useEffect(()=>{
    callGetAPI();
},[]);



  return  (
    <div className='container'>
        <h2 style={{textAlign:"center"}}>Read Data</h2>
        <Link to="/create"><button className='btn-danger'>Add user</button></Link>
       
    <table class="table border">
  <thead className='bg-dark text-white'>
    <tr>
      {/* <th scope="col">#</th>     */}
      <th scope="col">Name</th>
      <th scope="col">Place</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
     
    </tr>
  </thead>
  <tbody>
   {apiDate.length ? ((apiDate.map((e)=>(
    <tr key={e.id} className='bg-light'>
    {/* <td></td> */}
    <td>{e.name}</td>
    <td>{e.place}</td>
    <td><button className='edit' onClick={()=>updateUser(e)} ><GrEdit style={{fontSize:"22px",color:"red"}}/></button></td>
    <td> <button  onClick={()=>handleDeleted(e.id)} className='delete'><BiSolidTrashAlt style={{fontSize:"22px",color:"red"}}/></button></td>
   
  </tr>
   )))):<h5 style={{display:"flex",justifyContent:"center", color:"red" }}> Please add data</h5>}
    
   
  </tbody>
</table>

    </div>
  )
}

export default Read