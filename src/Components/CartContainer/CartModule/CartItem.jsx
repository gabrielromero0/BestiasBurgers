import React, { useContext } from 'react'
import CartItemComponent from './CartItemComponent';
import { CartContext } from '../../../context/CartContext';
import Swal from 'sweetalert2'

const CartItem = ({item}) => {
  const { 
    deleteProduct,
    decreaseProductQuantity,
    increaseProductQuantity,
  } = useContext(CartContext);
  const handleMinus = (id) => {
    return decreaseProductQuantity(id)
  }
  const handlePlus = (id) => {
    return increaseProductQuantity(id)
  }
  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: 'Estas seguro que deseas eliminar el producto del carrito?',
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
          'Se eliminó correctamente el producto del carrito',
        )
        return deleteProduct(id)
      }
    })
  }

  const cartItemProps = {
    handleMinus,
    handlePlus,
    handleDeleteProduct,
    item
  }
  return (
    <>
      <CartItemComponent {...cartItemProps}/>
    </>
  )
}

export default CartItem