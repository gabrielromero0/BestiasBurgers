import React, { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styles from './Cart.module.css';
import CartItem from '../../Components/CartItem/CartItem';
import CheckoutModal from '../../Components/CheckoutModal/CheckoutModal';
import Swal from 'sweetalert2';

export default function Cart() {
  const { isCartWithProducts} = useCart();

  return (
    <Container fluid className={styles.container}>
      <Row className={`d-flex justify-content-center`}>
        {isCartWithProducts() ? (
          <CartModule />
        ) : (
          <NoProducts />
        )}
      </Row>
    </Container>
  );
};

const NoProducts = () => {
  return (
  <Col className={`d-flex justify-content-center`}>
    <h2 className={styles.title}>No hay productos en el carrito</h2>
  </Col>
)}

const CartModule = () => {
  const {cartList} = useCart();
  return (
  <>
    <Col lg={6}>
      <h2>Carrito</h2>
      {
        cartList.map((item) => {
          return (<CartItem item={item} key={item.id}/>)
        })
      }
    </Col>
    <Col lg={4} >
      <CartSummary/>
    </Col>
  </>
  )
}

const CartSummary = () => {
  const { getCartTotalAmount, getCartTotalQuantity, cleanCart} = useCart();
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleCleanCart = () => {
    Swal.fire({
      title: 'Estas seguro que deseas limpiar el carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Eliminado', 'Se limpió correctamente todo el carrito');
        return cleanCart();
       
      }
    })
  }

  return (
    <div className={styles.ticketContainer}>
      <h3>Productos: {getCartTotalQuantity()}</h3>
      <h3>Subtotal: ${getCartTotalAmount()}</h3>

      <div
        className={`d-flex flex-column justify-content-center`}
        style={{ gap: '10px' }}
      >
        <Button variant='outline-primary' onClick={() => handleModal()}>
          Finalizar compra
        </Button>
        <Button variant='outline-primary' onClick={() => handleCleanCart()}>
          Borrar carrito
        </Button>
      </div>
      {openModal && <CheckoutModal handleModal={handleModal}/>}
    </div>
  );
}




