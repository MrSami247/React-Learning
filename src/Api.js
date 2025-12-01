import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

const Api = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    let { data } = await axios.get("https://dummyjson.com/products")
    setProducts(data.products)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='container mt-4'>
      <div className='row'>
        {products.map((item) => (
          <div className='col-md-4 mb-4' key={item.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.images[0]} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text"><strong>${item.price}</strong></p>
                <Link to={`/products${item.id}`}>
                <a href="#" className="btn btn-primary">Buy Now</a>
                </Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Api
