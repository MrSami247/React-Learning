import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Singledata = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    const fetchproduct = async () => {
        let { data } = await axios.get(`http://localhost:4000/fetch/${id}`)
        setProduct(data)
    }

    useEffect(() => {
        fetchproduct()
    }, [id])

    return (
        <div>
            {product ? (
                <div>
                    <h1>{product.title}</h1>
                    <h1>{product.description}</h1>
                    <h1>{product.price}</h1>
                    <h1>{product.category}</h1>
                    <h1>{product.subcategory}</h1>
                </div>
            ) : (
                <p>Loading....</p>
            )}
        </div>
    )
}

export default Singledata
