import { createContext, useContext, useState } from "react";
import { getProductListRequest, getProductDetailRequest } from "../Services/ProductsService.js";

export const ProductContext = createContext();

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    console.log("useProduct debe estar dentro del proveedor ProductProvider");
  }
  return context;
}

export const ProductProvider = ({ children }) => {
  
  const [productList, setProductList] = useState([]);
  const [productDetail, setProductDetail] = useState(null); // Cambiado a null

  const [loadingProductDetail, setLoadingProductDetail] = useState(true);
  const [loadingProductList, setLoadingProductList] = useState(true);

  const getProductList = async (category = null) => {
    setLoadingProductList(true);
    try {
      const res = await getProductListRequest(category);
      setProductList(res);
      setLoadingProductList(false);
      return res; // Devuelve res después de completar la solicitud
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  const getProductDetail = async (id) => {
    setLoadingProductDetail(true);
    try {
      const res = await getProductDetailRequest(id);
      setProductDetail(res);
      setLoadingProductDetail(false);
      return res; // Devuelve res después de completar la solicitud
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  const productContextList = {
    productList,
    loadingProductList,
    getProductList,
    loadingProductDetail,
    getProductDetail,
    productDetail, // Agregado para devolver el detalle del producto
  }

  return (
    <ProductContext.Provider value={productContextList}>
      {children}
    </ProductContext.Provider>
  )
}
