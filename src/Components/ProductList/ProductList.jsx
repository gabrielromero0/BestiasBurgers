import React from 'react'
import { useEffect, useState } from "react";
import { getProductList } from "../../Services/ProductsService";
import LoadingPage from "../LoadingPage/LoadingPage";
import ProductListComponent from './ProductListComponent';

const ProductList = () => {
  const [productList, setProductList] = useState();
  const [areItemsCharged, setAreItemsCharged] = useState(false)

  useEffect(() => {
    getProductList()
      .then((productList) => {
        setProductList(productList)
        setAreItemsCharged(true)
      })
  }, [])


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