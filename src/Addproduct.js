import React, { useState } from 'react'
import axios from "axios";


const Addproduct = () => {
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState("")
    const [category,setCategory] = useState("")
    const [subcategory,setSubcategory] = useState("")
    const handleClick = async() =>{
        let data = await axios.post("http://localhost:4000/add",{
          title,description,price,category,subcategory
        })
        console.log(data)
    }
  return (
    <div>
      <input type='text' value={title} onChange={e=>setTitle(e.target.value)}></input>
      <input type='text' value={description} onChange={e=>setDescription(e.target.value)}></input>
      <input type='number' value={price} onChange={e=>setPrice(e.target.value)}></input>
      <input type='text' value={category} onChange={e=>setCategory(e.target.value)}></input>
      <input type='text' value={subcategory} onChange={e=>setSubcategory(e.target.value)}></input>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Addproduct
