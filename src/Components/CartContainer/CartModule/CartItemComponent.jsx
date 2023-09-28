import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import styles from './CartItemComponent.module.css';

const CartItemComponent = ({
  handleMinus,
  handlePlus,
  handleDeleteProduct,
  item
}) => {
  return (
    <div
      className={`d-flex justify-content-between ${styles.cartItemContainer}`}
    >
      <div className={`d-flex flex-column ${styles.cartItem}`}>
        <p>{item.name}</p>
        <p>$ {item.price}</p>
      </div>
      <div className={`d-flex flex-column ${styles.itemButtons}`}>
        <div className={`d-flex ${styles.plusMinusButtons}`}>
          <Button variant='outline-primary' onClick={() => handleMinus(item.id)}>
            <AiOutlineMinus />
          </Button>
          <span className={styles.num}>{item.quantity}</span>
          <Button variant='outline-primary' onClick={() => handlePlus(item.id)}>
            <AiOutlinePlus />
          </Button>
        </div>
        <div>
          <Button variant='outline-primary' onClick={() => handleDeleteProduct(item.id)}>Eliminar</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItemComponent;
