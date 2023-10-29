// import { useState } from "react";
import Header from "./Header";
import Create from "./Create";
// import Table from "./Table";
// import Form from "./Form";
import { Routes ,Route } from "react-router-dom";
import Read from "./Read";
import Update from "./Update";
// import Table from "./Table";
// import Apiurl from "./URL";
// import axios from 'axios';


function App() {
// axios.get("/")

  // const [users,setUsers]=useState([
    
  // ])

 
  return (
    <div className="App">
   
    <Header
    title="CRUD OPERATION"
    />
   <Routes>
    <Route path="/create" element={<Create/>}/>
    <Route path="/read" element={<Read/>}/>
    <Route path="/update" element={<Update/>}/>
   </Routes>
    </div>
  );
}

export default App;
