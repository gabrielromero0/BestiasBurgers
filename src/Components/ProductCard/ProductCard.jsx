import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

/**
 * Este componente se usa en ItemList.jsx para mostrar cada producto de la lista.
 * Recibe como props un objeto producto.
 */
const ProductCard = ({ product }) => {
  return (
    <Col className={`d-flex align-center ${styles.col}`} lg={3} xs={4}>
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
