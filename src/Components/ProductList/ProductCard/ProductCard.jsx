import React from 'react'
import Card from 'react-bootstrap/Card';

const ProductCard = ({product}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img src="https://res.cloudinary.com/dna9rrdkj/image/upload/v1677524989/Rock%20n%27%20burger/products/carne/Classic-Chicken-burger_wl4pwv.jpg"/>
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>
          {product.descripcion}
        </Card.Text>
        <Card.Text>
          {product.precio}
        </Card.Text>
      </Card.Body>
    
    </Card>
  )
}

export default ProductCard