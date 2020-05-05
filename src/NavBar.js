import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md" className="navbar-shop">
        <NavLink exact to="/" className="nav-item-home">
          Home
        </NavLink>
        <NavLink to="/cart" className="nav-item-cart">
          Cart
        </NavLink>
      </Navbar>
    </div>
  );
}

export default NavBar;