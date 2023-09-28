import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Col } from 'react-bootstrap';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const CartModule = ({cartList}) => {
  return (
    <>
      <Col lg={6}>
        <h2>Carrito</h2>
        {
          cartList.map((item) => {
            return (
              <CartItem item={item} key={item.id}/>
            )
          })
        }
      </Col>
      <Col lg={4} >
        <CartSummary/>
      </Col>
    </>
  );
};

export default CartModule;
