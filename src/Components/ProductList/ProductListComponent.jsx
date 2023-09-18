import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard/ProductCard'
//importamos el componente de tarjeta de producto de react-bootstrap


const ProductListComponent = ({ productList = [] }) => {
  return (
    <Container>
      <Row> 
          <h1>Lista de productos</h1>
          {
            productList.map((product, index) => {
              return (
                <Col className={`d-flex align-center`} xs={4}>
                  <ProductCard key={index} product={product} />
                </Col>
              )
            })
          } 
      </Row>
    </Container>
  )
}

export default ProductListComponent