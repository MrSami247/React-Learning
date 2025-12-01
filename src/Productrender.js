import React from 'react'
import Product from './Product'

const Productrender = () => {
  return (
   <div className='container'>
   <div className='row'>
   {Product.map((item)=>(
      <div className='cod-md-4 mb-4'>
<div class="card" style={{width:"18rem"}}>
  <img src={item.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.description}</p>
    <p class="card-text">{item.Price}</p>
    <p class="card-text">{item.category}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


      </div>


   ))}

   </div>
   </div>
  )
}

export default Productrender
