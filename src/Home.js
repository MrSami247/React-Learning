import React from 'react'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import Formhandle from './Formhandle'

const Home = () => {
    const navigate = useNavigate()
    const gotoblog = () =>{
        navigate('/blog')
    }
    
  return (
    <div>
      
      <h1>Home Page</h1>
      <button onClick={gotoblog}>Go To Blog</button>
      <Formhandle/>
    </div>
  )
}

export default Home
