import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

const Fetchbyid = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <div>
      {product ? (
        <div style={{ border: "10px solid black", padding: "10px" }}>
          <h1>{product.title}</h1>
          <h6>{product.description}</h6>
          <h6>Price: ${product.price}</h6>
          <h6>Category: {product.category}</h6>

          {product.images && (
            <img
              src={product.images[0]}
              alt={product.title}
              width={300}
              style={{ marginTop: "10px" }}
            />
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Fetchbyid;
