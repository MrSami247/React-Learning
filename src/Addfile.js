
import React, { useState } from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios'


const Addfile = () => {
    const [title,setTitle] = useState("")
        const [description,setDescription] = useState("")
        const [price,setPrice] = useState("")
        const [category,setCategory] = useState("")
        const [subcategory,setSubcategory] = useState("")
        const [image,setImage] = useState(null)

        const submitForm = async() =>{
            const fd = new FormData();
            fd.append("title",title)
            fd.append("description",description)
            fd.append("price",price)
            fd.append("category",category)
            fd.append("subcategory",subcategory)
            fd.append("image",image)
            const res = await axios.post("http://localhost:4000/add",fd)
            console.log(res)
            }
  return (
    <div>
      <input type='text' placeholder='title' onChange={e=>setTitle(e.target.value)}></input>
      <input type='text' placeholder='description' onChange={e=>setDescription(e.target.value)}></input>
      <input type='number' placeholder='price' onChange={e=>setPrice(e.target.value)}></input>
      <input type='text' placeholder='category' onChange={e=>setCategory(e.target.value)}></input>
        <input type='text' placeholder='subcategory' onChange={e=>setSubcategory(e.target.value)}></input>
        <input type='file' onChange={e=>setImage(e.target.files[0])}></input>
        <button onClick={submitForm}>Submit</button>
    </div>
  )
}


export default Addfile
