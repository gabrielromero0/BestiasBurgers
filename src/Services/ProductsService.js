import { db } from "../firebaseConfig";
import {collection, doc, getDoc, getDocs } from "firebase/firestore"

export const getProductList = async () => {
  let productList = [];
  try{
    const productsCollection = collection(db, "products");
    const productsSnapshot = await getDocs(productsCollection);
    productList = productsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));  
  }
  catch(error){
    console.log(error);
  }
  finally{
    return productList;
  }
}
export const getProductDetail = async (id) => {
  try {
    const itemCollection = collection(db, "products");
    const queryById = doc(itemCollection, id);
    
    const receivedProduct = await getDoc(queryById);

    if (receivedProduct.exists()) {
      const productDetail = { ...receivedProduct.data(), id: receivedProduct.id };
      return productDetail;
    } else {
      return null; // Return null if the product doesn't exist
    }
  } catch (error) {
    console.error("Error obteniendo productDetail desde Firebase:", error);
    throw error;
  }
}




