import NavbarComponent from "./NavbarComponent"
import { getCategoryList } from "../../Services/CategoryService";
import { useEffect, useState } from "react";

const CustomNavbar = () => {

  const [categories, setCategories] = useState([])
  const [areCategoriesCharged, setAreCategoriesCharged] = useState(false)

  useEffect(() => {
    getCategoryList()
      .then((categoryList) => {
        setCategories(categoryList)
        setAreCategoriesCharged(true)})
  }, [])

  const navbarProps = {
    categories,
    areCategoriesCharged,
  }

  return (
    <NavbarComponent {...navbarProps}/>
  );
};

export default CustomNavbar;
