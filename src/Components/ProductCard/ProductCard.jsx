import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
const ProductCard = ({ product }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className={`d-flex align-center ${styles.col}`}>
      <Link to={`/product/${product.id}`} className={styles.link}>
        <Card className={styles.card}>
          <Card.Img 
            src={product.img} 
            className={styles.imgen}
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
