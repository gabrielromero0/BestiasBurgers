import React, { useContext, useState } from 'react'
import { Modal } from 'react-bootstrap'
import CheckoutForm from './Form/CheckoutForm';
import { CartContext } from '../../context/CartContext';
import Deliver from './Deliver/Deliver';

const CheckoutModal = ({showModal, handleModal}) => {
  const { cartList, getCartTotalAmount } = useContext(CartContext);
  const [validated, setValidated] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    customer: {
      name: '',
      phone: '',
      email: '',
    },
    date: '',
    items: cartList.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    })),
    total: getCartTotalAmount(),
  });

  const handleClose = () => {
    handleModal();
  }

  return (
    <Modal show={showModal} backdrop="static" keyboard={false}>
    <Modal.Header closeButton>
      <Modal.Title>Confirmar Compra</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {validated ? (
        <Deliver checkoutData={checkoutData} />
        ) : (
          <CheckoutForm 
            checkoutData={checkoutData} 
            setCheckoutData={setCheckoutData} 
            setValidated={setValidated}
            handleClose={handleClose}
          />
        )
      }
    </Modal.Body>
  </Modal>
  )
}

export default CheckoutModal