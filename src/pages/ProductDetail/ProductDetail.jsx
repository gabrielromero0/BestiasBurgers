import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import LoadingPage from "../../Components/Loading/Loading";
import { addToCart as addToCartSwal } from '../../Components/Swal/addToCart';
import { useCart } from '../../context/CartContext';
import { Col, Image, Row } from 'react-bootstrap';
import styles from "./ProductDetail.module.css"
import ItemCount from '../../Components/ItemCount/ItemCount';
import { useProduct } from '../../context/ProductContext';

const ProductDetail = () => {

  const { productDetail, loadingProductDetail, getProductDetail } = useProduct();
  const { productId } = useParams();
  
  useEffect(() => {
    getProductDetail(productId)
  }, [])

  return (
    <>
      {loadingProductDetail ? (
        <LoadingPage />
      ) : (
        <Row className={styles.row}>
            {productDetail ? <ProductDetailList productDetail={productDetail} />
            : <h1 style={{
              color: "black",
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: 50
            }}>No se encontró el producto</h1>}
        </Row>
      )}
    </>
  );
};

export default ProductDetail;

const ProductDetailList = ({productDetail}) => {

  const { addToCart, getProductQuantity } = useCart(); 

  const initial = getProductQuantity(productDetail.productId);
  const stock  = productDetail.stock;

  const onAdd = (quantity) => {
    const productWithQuantity = {
      ...productDetail,
      quantity,
    };
    addToCartSwal();
    addToCart(productWithQuantity);
  };


  return (
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
  );
}