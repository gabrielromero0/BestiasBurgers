import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Col className={`d-flex align-center`} xs={4}>
      <Link to={`/producto/${product.id}`}>
        <Card style={{ width: '18rem' }}>
          <Card.Img src='https://res.cloudinary.com/dna9rrdkj/image/upload/v1677524989/Rock%20n%27%20burger/products/carne/Classic-Chicken-burger_wl4pwv.jpg' />
          <Card.Body>
            <Card.Title>{product.nombre}</Card.Title>
            <Card.Text>{product.descripcion}</Card.Text>
            <Card.Text>{product.precio}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default ProductCard;
