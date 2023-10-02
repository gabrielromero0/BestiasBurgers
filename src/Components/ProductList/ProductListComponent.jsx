import React from 'react';
import { Container, Row  } from 'react-bootstrap';
import ProductCard from './ProductCard/ProductCard';
import styles from "./ProductListComponent.module.css";
//importamos el componente de tarjeta de producto de react-bootstrap

const ProductListComponent = ({ productList = [] }) => {
  return (
    <Container>
      <Row className={styles.row}>
        <h1 className={styles.titulo}>Lista de productos</h1>
        {productList.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </Row>
    </Container>
  );
};

export default ProductListComponent;
