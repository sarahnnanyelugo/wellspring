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
      <div className="col-md-12 navbar-container  home-menu">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item cool-link">
            <MenuLinks
              pageNav="ABOUT"
              page1="Welcome"
              page1Url={"/welcome"}
              page2="Philosophy"
              page2Url={"/philosophy"}
              page3="Leadership"
              page3Url={"/leadership"}
              page4="Directory"
              page4Url={"/directory"}
              page5="Faith"
              page5Url={"/faith"}
              page6="Diversity"
              page6Url={"/diversity"}
              page7="Health & Safety"
              page7Url={"/health-diversity"}
              page8="Calendar"
              page8Url={"/calendar"}
              page9="Careers"
              page9Url={"/careers"}
              page10="Contact Us"
              page10Url={"/contact"}
            />
          </li>
          <li className="list-inline-item cool-link">
            <MenuLinks
              pageNav="ADMISSION"
              page1="Why Wellspring?"
              page1Url={"/why-ws"}
              page2="How To Apply"
              page2Url={"/how-to-apply"}
              page3="Tuition"
              page3Url={"/tuition"}
              page4="Campus Visits"
              page4Url={"/campus-visits"}
              page5="Admissions Events"
              page5Url={"/admissions-events"}
              page6="Admissions Checklist"
              page6Url={"/admissions-checklist"}
              page7="FAQs"
              page7Url={"/faqs"}
              page8="New Family Information"
              page8Url={"/faqs"}
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
