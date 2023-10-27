import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import styles from "./ProductDetailComponent.module.css"
import ItemCount from "./ItemCount";

const ProductDetailComponent = ({productDetail = null, onAdd, initial, stock}) => {
  return (
    <Row className={styles.row}>
      {productDetail ? (
            <>
            <Col lg={6} className="d-flex align-items-center justify-content-end">
              <Image src={productDetail.img} fluid className={styles.imagen}/>
            </Col>
            <Col lg={6} className="d-flex align-items-start flex-column justify-content-center">
              <h1 className={styles.nombre}>{productDetail.name}</h1>
              <p className={styles.descripcion}>{productDetail.description}</p>
              <p className={styles.precio}>Precio: ${productDetail.price}</p>
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