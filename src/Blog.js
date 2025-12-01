import React from 'react'
import { Link } from 'react-router'

const Blog = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
      </ul>
      <ul>
        <li>
            <Link to='/about'>about</Link>
        </li>
      </ul>
      <ul>
        <li>
            <Link to='/blog'>Blog</Link>
        </li>
      </ul>
      <h1>Blog Page</h1>
    </div>
  )
}

export default Blog
