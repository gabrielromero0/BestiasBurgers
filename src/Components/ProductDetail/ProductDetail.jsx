import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getProductDetail } from '../../Services/ProductsService';
import ProductDetailComponent from './ProductDetailComponent';
import LoadingPage from "../LoadingPage/LoadingPage"
import Swal from 'sweetalert2';
import { CartContext } from '../../context/CartContext'

const ProductDetail = () => {

  const {addToCart, getProductQuantity} = useContext(CartContext)
  const { product_id } = useParams();
  const [productDetail, setProductDetail] = useState();
  const [isProductReceived, setIsProductReceived] = useState(false)
  const initial = productDetail && getProductQuantity(productDetail.id)
  const stock = productDetail && productDetail.stock


  useEffect(() => {
    getProductDetail( product_id)
      .then(productDetailReceived => {
        setProductDetail(productDetailReceived);
        setIsProductReceived(true);
      })
  },[product_id]);

  const onAdd = (quantity) => {
    const productWithQuantity = {
      ...productDetail,
      quantity
    }
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1000
    })
    addToCart(productWithQuantity);
  }


  const productDetailProps = {
    productDetail,
    onAdd,
    stock,
    initial
  }

  return (
    <>
      {
        isProductReceived ? (
          <ProductDetailComponent {...productDetailProps} />
        )
        : <LoadingPage />
      }
    </>
  )
}

export default ProductDetail