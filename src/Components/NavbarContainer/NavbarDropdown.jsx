import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";

const NavbarDropdown = ({ categories, areCategoriesCharged }) => {

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="dark"
        id="dropdown-basic"
        className="custom-dropdown-toggle "
      >
        Menu
      </Dropdown.Toggle>
      <Dropdown.Menu variant="dark">
        <Dropdown.Item as={Link} to="categories">
          Menu completo
        </Dropdown.Item>
        <Dropdown.Divider />
        {areCategoriesCharged ? (
          categories.map((categoria) => (
            <Dropdown.Item
              as={Link}
              key={categoria.id}
              style={{ textTransform: "capitalize" }}
            >
              {categoria.type}
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.Item disabled>Loading...</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavbarDropdown;