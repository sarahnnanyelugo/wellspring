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

        <ul className="list-inline list-unstyled">
          <li className="list-inline-item">
            <Link to="#" className="link-alteration cool-link">
              Alumni
            </Link>
          </li>
          <li className="list-inline-item cool-link">
            <Link to="#" className="link-alteration">
              Careers
            </Link>
          </li>
          <li className="list-inline-item cool-link">
            <Link to="#" className="link-alteration">
              Giving
            </Link>
          </li>
          <li className="list-inline-item cool-link">
            <Link to="#" className="link-alteration">
              News
            </Link>
          </li>
          <li className="list-inline-item cool-link">
            <Link to="#" className="link-alteration">
              Events
            </Link>
          </li>
          <li className="list-inline-item cool-link">
            <Link to="#" className="link-alteration">
              Current Families
            </Link>
          </li>
          <li className="list-inline-item cool-link">
            <Link to="#" className="link-alteration">
              Royal Store
            </Link>
          </li>
        </ul>
      </div>{" "}
    </>
  );
}

export default NavBar;
