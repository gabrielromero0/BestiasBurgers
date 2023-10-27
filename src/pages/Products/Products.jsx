import React, { useEffect } from 'react';
import Loading from '../../Components/Loading/Loading';
import { Container, Row } from 'react-bootstrap';
import styles from './Products.module.css';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useProduct } from '../../context/ProductContext';

const Products = () => {
  const {loadingProductList, getProductList, productList} = useProduct();

  useEffect(() => {
    getProductList();
  }, [])

  return (
    <>
      {loadingProductList ? (
        <Loading />
        
      ) : (
        <Container>
          <Row className={styles.row}>
            <h1 className={styles.titulo}>Lista de productos</h1>
            {productList.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Products;
