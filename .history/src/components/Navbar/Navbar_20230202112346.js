import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/wellspring.png";
import { SearchBar } from "../SearchBar/SearchBar";
import MobileAccordion from "./MobileAccordion/MobileAccordion";

import "./navbar.scss";
import MenuLinks from "./NavLinks/MenuLinks";

function NavBar({ sticky }) {
  const [isHome, setIsHome] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);
  const [showActive, setShowActive] = useState(false);
  const location = useLocation();
  const setThisHome = () => {
    // console.log(location.pathname === "/");
    setIsHome(location.pathname === "/");
  };
  const setThisShowActive = () => {
    setShowActive(false);
  };
  useEffect(() => {
    console.log(location.pathname);
    setThisHome();
    setThisShowActive();
  }, [location]);

  useEffect(() => {
    console.log(showActive);
  });

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(scrollPosition);
  };
  const handleChange = (e) => {
    let isChecked = e.target.checked;
    // do whatever you want with isChecked value
    setShowActive(isChecked);
  };
  const [y, setY] = useState(window.scrollY);
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      console.log("scrolling up");
      setScrollDirection(1);
    } else if (y < window.scrollY) {
      console.log("scrolling down");
      setScrollDirection(-1);
    }
    setY(window.scrollY);
    handleScroll();
  };
  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since it's going to run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);
  return <></>;
}

export default NavBar;
