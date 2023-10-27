import { getCategoryList } from "../../Services/CategoryService";
import { useEffect, useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";
import CartWidget from "./CartWidget";
import styles from "./Navbar.module.css";
import logo from '../../assets/logo.png';

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
    <Navbar className={`${styles.navbar}`}  variant="pills" expand="md" style={{
      height: "80px"
    }}>
      <Container >
        <Link to='/' className={`${styles.links}`}>
          <Navbar.Brand><Image src={logo} alt="Mi Imagen" fluid/>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className={`me-auto d-flex align-items-center justify-content-between w-100`}  >
            <div className={`d-flex align-items-center ${styles.buttons}`} >
              <NavbarDropdown {...navbarProps} />
              <Link to="/contacto"  className={styles.links}>
                  Contactanos
              </Link>
            </div>
            <Link to="/cart">
                <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
