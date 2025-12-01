import React from 'react';
import './index.css';
import './Header.css'
import Service from './services';
const Header = () =>{
    return (
        <>
       <div className='mybg'>
        <h1 className='mypic'>This is Heading</h1>
       
       </div>
       <Service/>
        </>
    )
}

export default Header