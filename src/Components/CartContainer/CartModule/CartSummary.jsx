import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import styles from './CartSummary.module.css'
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
const CartSummary = () => {

  const {
    getCartTotalAmount, 
    getProductQuantity,
    cleanCart
  } = useContext(CartContext);

  const handleCleanCart = () => {
    Swal.fire({
      title: 'Estas seguro que deseas limpiar el carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'
      
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado',
          'Se limpió correctamente todo el carrito',
        )
        return cleanCart()
      }
    })
  }

  return (
    <div className={styles.ticketContainer}>

    <h3>Productos: {getCartTotalAmount()}</h3>
    <h3>Subtotal: ${getProductQuantity()}</h3>

    <div className={`d-flex flex-column justify-content-center`} style={{gap: '10px'}}>
      <Button variant='outline-primary'>
        Finalizar compra
      </Button>
      <Button variant='outline-primary' onClick={() => handleCleanCart()}>
        Borrar carrito
      </Button>
    </div>

  </div>
  )
}

export default CartSummary