import React, { useContext } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { CartContext } from "../../../context/CartContext";


const CheckoutForm = ({formik,handleClose}) => {
  const {cartList, getCartTotalAmount, getProductTotalPrice } = useContext(CartContext);

  return (
    <Form variant="dark" onSubmit={formik.handleSubmit}>
      <Row>
        <Col sm={6}>
        <FloatingLabel controlId="floatingInput" label="Nombre" className="mb-3" >
            <Form.Control 
              type="text" 
              placeholder="Nombre" 
              name="userName" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
              isInvalid={formik.touched.userName && formik.errors.userName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.userName}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Col>
        <Col sm={6}>
          <FloatingLabel controlId="floatingInput" label="Apellido" className="mb-3" >
            <Form.Control 
              type="text"
              placeholder="Apellido" 
              name="userLastName" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userLastName}
              isInvalid={formik.touched.userLastName && formik.errors.userLastName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.userLastName}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Col>
      </Row>
      <FloatingLabel controlId="floatingInput" label="Teléfono" className="mb-3" >
        <Form.Control 
          type="text" 
          placeholder="Teléfono" 
          name="userPhone" 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userPhone}
          isInvalid={formik.touched.userPhone && formik.errors.userPhone}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.userPhone}
        </Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Email" className="mb-3" >
        <Form.Control 
          type="text" 
          placeholder="Email" 
          name="userEmail" 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userEmail}
          isInvalid={formik.touched.userEmail && formik.errors.userEmail}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.userEmail}
        </Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Confirmar Email" className="mb-3" >
        <Form.Control 
          type="text" 
          placeholder="Confirmar Email"
          name="userConfirmEmail" 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userConfirmEmail}
          isInvalid={formik.touched.userConfirmEmail && formik.errors.userConfirmEmail}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.userConfirmEmail}
        </Form.Control.Feedback>
      </FloatingLabel>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${getProductTotalPrice(item.id)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td
              colSpan="3"
              className="text-end fw-bold"
              style={{ paddingTop: 20 }}
            >
              Total:
            </td>
            <td style={{ paddingTop: 20 }}>$ {getCartTotalAmount()}</td>
          </tr>
        </tfoot>
      </Table>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 20,
        }}
      >
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" type="submit" style={{ marginLeft: 10 }}>
          Comprar
        </Button>
      </div>
    </Form>
  );
}

export default CheckoutForm;