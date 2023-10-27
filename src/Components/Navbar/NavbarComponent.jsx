import React from 'react';
import { Container, Nav, Navbar , Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import NavbarDropdown from './NavbarDropdown';
import styles from "./NavbarComponent.module.css";
import logo from '../../assets/logo.png';

const NavbarComponent = (navbarProps) => {
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

export default NavbarComponent;
