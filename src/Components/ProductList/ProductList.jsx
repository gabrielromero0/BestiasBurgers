import React from 'react'
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import {collection, getDocs } from "firebase/firestore"
import LoadingPage from "../LoadingPage/LoadingPage";
import ProductListComponent from './ProductListComponent';

const ProductList = () => {
  const [productList, setProductList] = useState();
  const [areItemsCharged, setAreItemsCharged] = useState(false)

  useEffect(() => {
    const productsCollection = collection(db, "products");
    getDocs(productsCollection)
      .then(res => {
        const receivedProducts = agregarIdAlProducto(res)
        setProductList(receivedProducts)
        setAreItemsCharged(true)
      })
      .catch(err => console.log(err))
  }, [])

  const agregarIdAlProducto = (dataReceived) => {
    return dataReceived.docs.map((hostProduct) => {
      return {
        ...hostProduct.data(),
        id: hostProduct.id
      }
    })
  }

  return (
    <>
    {
      (areItemsCharged) 
      ? <div className="products">
         <ProductListComponent productList={productList} />
        </div>
      : <LoadingPage />
    }
    </>
  )
}

export default ProductList