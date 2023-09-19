import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import styles from "./ProductDetailComponent.module.css"
import ItemCount from "./ItemCount";

const ProductDetailComponent = ({productDetail = null, onAdd, initial, stock}) => {
  return (
    <Row>
      {productDetail ? (
            <>
            <Col lg={6}>
              <Image src="https://res.cloudinary.com/dna9rrdkj/image/upload/v1677524989/Rock%20n%27%20burger/products/carne/Classic-Chicken-burger_wl4pwv.jpg" fluid className={styles.imagen}/>
            </Col>
            <Col lg={6}>
              <h1 className={styles.nombre}>{productDetail.nombre}</h1>
              <p className={styles.descripcion}>{productDetail.descripcion}</p>
              <p className={styles.precio}>Precio: ${productDetail.precio}</p>
              <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
            </Col>
            </>
          ) : <h1 style={{
            color: "black",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: 50
          }}>No se encontró el producto</h1>}
    </Row>
  )
}

export default ProductDetailComponent