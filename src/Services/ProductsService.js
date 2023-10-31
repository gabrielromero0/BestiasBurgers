import { db } from "../firebaseConfig";
import {collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"

const filterQuery = (category) => {
  const productsCollection = collection(db, "products");
  if (category) {
    return query(productsCollection, where("category", "==", category));
  } else {
    return query(productsCollection);
  }
}

export const getProductListRequest = async (category = null) => {
  let productList = [];
  try{
    const productsCollection = filterQuery(category);
    const productsSnapshot = await getDocs(productsCollection);
    productList = productsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return productList;
  }
  catch(error){
    console.log(error);
  }
}

export const getProductDetailRequest = async (id) => {
  try {
    const itemCollection = collection(db, "products");
    const queryById = doc(itemCollection, id);
    
    const receivedProduct = await getDoc(queryById);

    if (receivedProduct.exists()) {
      const productDetail = { ...receivedProduct.data(), id: receivedProduct.id };
      return productDetail;
    } else {
      console.log("No existe el producto en firebase  ")
      return null; // Return null if the product doesn't exist
    }
  } catch (error) {
    console.error("Error obteniendo productDetail desde Firebase:", error);
    throw error;
  }
}






