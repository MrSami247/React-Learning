import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

const Fetchdata = () => {
    const [products, setProducts] = useState([])

    const fetchproducts = async () => {
        let { data } = await axios.get("http://localhost:4000/fetch")
        setProducts(data)
    }

    useEffect(() => {
        fetchproducts()
    })

    return (
       <div className='container'>
        <div className='row'>
            {products.map((item)=>(
            <div className='col-md-4'> 
            <div class="card" style={{width: "18rem"}}>
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.description}</p>
    <a href="#" class="btn btn-primary">
                    <Link to={`/fetch/${item._id}`}>View Detail</Link>
    </a>
  </div>
</div>
            </div>
            ))}
        </div>
       </div>
           
    )
}

export default Fetchdata
