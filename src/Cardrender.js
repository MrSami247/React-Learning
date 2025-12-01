import React from 'react'
import Cards from './Cards'
import img1 from './choce_watch2.png.webp'

const Cardrender = () => {
  return (
    <div className='container'>
     <div className='row'> 
 <Cards image={img1} title="Product 1" description ="This is my description"/>
      <Cards image={img1} title="Product 2" decription ="This is my description"/>
     </div>
    </div>
  )
}

export default Cardrender
