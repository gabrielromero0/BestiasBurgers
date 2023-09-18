import React from 'react'
import { useParams } from 'react-router';

const ProductDetail = () => {
  
  const { idProducto } = useParams();
  return (
    <div>ProductDetail del {idProducto}</div>
  )
}

export default ProductDetail