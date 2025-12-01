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
        <div>
            {products.map((item) => (
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <Link to={`/fetch/${item._id}`}>View Detail</Link>
                </div>
            ))}
        </div>
    )
}

export default Fetchdata
