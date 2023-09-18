import React from 'react'
import { Container, Row } from 'react-bootstrap'

const ProductListComponent = ({ productList = [] }) => {
  return (
    <Container>
      <Row>
        {
          productList.map((product) => {
            return (
              <div key={product.hostId} className="product">
                <p>{product.hostId}</p>
                <p>{product.nombre}</p>
              </div>
            )
          })
        }
      </Row>
    </Container>
  )
}

export default ProductListComponent