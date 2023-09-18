import React from 'react';
import { Container, Row  } from 'react-bootstrap';
import ProductCard from './ProductCard/ProductCard';
//importamos el componente de tarjeta de producto de react-bootstrap

const ProductListComponent = ({ productList = [] }) => {
  return (
    <Container>
      <Row>
        <h1>Lista de productos</h1>
        {productList.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </Row>
    </Container>
  );
};

export default ProductListComponent;
