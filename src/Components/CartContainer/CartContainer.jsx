import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './CartContainer.module.css';
import CartModule from './CartModule/CartModule';

const CartContainer = () => {
  const { isCartWithProducts, cartList } = useContext(CartContext);
  return (
    <Container fluid className={styles.container}>
      <Row className={`d-flex justify-content-center`}>
        {isCartWithProducts() ? (
            <CartModule cartList={cartList}/>
          ) : (
            <Col className={`d-flex justify-content-center`}>
              <h2 className={styles.title}>No hay productos en el carrito</h2>
            </Col>
          )
        }         
      </Row>
    </Container>
  )
}

export default CartContainer