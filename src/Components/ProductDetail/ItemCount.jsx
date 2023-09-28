import React, { useState } from 'react'
import styles from './ItemCount.module.css'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Button } from 'react-bootstrap';

const ItemCount = ({stock, initial, onAdd}) => {

  const [quantity, setQuantity] = useState(initial)
  const handlePlus = () => {
    if (quantity < stock){
      setQuantity(quantity + 1);
    }
  }
  const handleMinus = () => {
    if (quantity > 1){
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className={styles.number}>
      <Button variant="outline-primary" onClick={handleMinus}>
        <AiOutlineMinus />
      </Button>
      <span className={styles.num}>{quantity}</span>
      <Button variant="outline-primary" onClick={handlePlus}>
        <AiOutlinePlus />
      </Button>
      <div onClick={() => {onAdd(quantity)}}>
        <Button variant="outline-primary"> 
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount