import React, { useState } from 'react'
import axios from "axios";


const Formhandle = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [password,setPassword] = useState("")
    const handleClick = async() =>{
        let data = await axios.post("http://localhost:4000/signup",{
          name,email,phone,password
        })
        console.log(data)
    }
  return (
    <div>
      <input type='text' value={name} onChange={e=>setName(e.target.value)}></input>
      <input type='text' value={email} onChange={e=>setEmail(e.target.value)}></input>
      <input type='number' value={phone} onChange={e=>setPhone(e.target.value)}></input>
      <input type='text' value={password} onChange={e=>setPassword(e.target.value)}></input>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Formhandle
