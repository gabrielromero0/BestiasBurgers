import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
const ProductCard = ({ product }) => {
  return (
    <Col className={`d-flex align-center ${styles.col}`} lg={3} xs={4}>
      <Link to={`/product/${product.id}`} className={styles.link}>
        <Card className={styles.card}>
          <Card.Img 
            src='https://res.cloudinary.com/dna9rrdkj/image/upload/v1677524989/Rock%20n%27%20burger/products/carne/Classic-Chicken-burger_wl4pwv.jpg' 
            className={styles.imagen}
          />
          <Card.Body className={styles.cardBody}>
            <Card.Title className={styles.cardTitle}>{product.name}</Card.Title>
            <Card.Text className={styles.cardText}> {product.description}</Card.Text>
            <Card.Text className={styles.cardText}>$ {product.price}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default ProductCard;
