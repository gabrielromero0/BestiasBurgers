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
      <Dropdown.Menu>
        <Dropdown.Divider />
        {areCategoriesCharged ? (
          categories.map((category) => (
            <Dropdown.Item
              as={Link}
              key={category.id}
              style={{ textTransform: "capitalize" }}
              to={`category/${category.type}`}
            >
              {category.type}
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