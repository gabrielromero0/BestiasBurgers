import { db } from "../firebaseConfig";
import {collection, getDocs } from "firebase/firestore"

const sortCategories = (categories) => {
  return categories.sort((a,b) => {
    if (a.type > b.type) return 1;
    if (a.type < b.type) return -1;
    return 0;
  })
}

export const getCategoryList = async () => {
  let categoryList = [];
  try{
    const productsCollection = collection(db, "categories");
    const productsSnapshot = await getDocs(productsCollection);
    categoryList = productsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    categoryList = sortCategories(categoryList);
  }
  catch(error){
    console.log(error);
  }
  finally{
    return categoryList;
  }
}