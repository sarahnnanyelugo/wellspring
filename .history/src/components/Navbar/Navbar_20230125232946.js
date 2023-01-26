import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";

import "./navbar.scss";
import MenuLinks from "./NavLinks/MenuLinks";

function NavBar({ sticky }) {
  return (
    <>
      <div className="flexy col-md-12 nav-list  navbar-container2">
        <div className="col-md-9">&nbsp;</div>
      </div>{" "}
     
    </>
  );
}

export default NavBar;
