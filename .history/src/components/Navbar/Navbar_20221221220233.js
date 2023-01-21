import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SchLogo from "../../assets/logo.png";
// import fIcon from "../assets/portal.svg";
import { navMenus } from "./MenuItems";
import Dropdown from "./Dropdown";

import classes from "./NavBar.module.css";
import "./navbar.scss";
// import classes from './AdmissionForm.module.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const [activeMenu, setActiveMenu] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
    menu5: false,
  });

  const onMouseEnter = (e) => {
    const menuText = e.target.text.trim().toLowerCase() || "about";

    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setActiveMenu({
        menu1: menuText === "about",
        menu2: menuText === "academics",
        menu3: menuText === "admissions",
        menu4: menuText === "arts",
        menu5: menuText === "athletics",
        menu6: menuText === "giving",
      });
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setActiveMenu({
        menu1: false,
        menu2: false,
        menu3: false,
        menu4: false,
        menu5: false,
      });
    }
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const openPortalLink = () => {
    const portal = "https://wellspring.educare.school/";
    window.open(portal);
  };
  return (
    <div className="col-md-12 flexy navContainer">
      <div className="col-md-3">&nbsp;</div>
      {/* <nav className="col-md-6">
        <div className={classes.navCont}>
          
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-list active" : "nav-list"}>
            <li
              className="nav-item "
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/about"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
              {activeMenu.menu1 && <Dropdown menuArray={navMenus.about} />}
            </li>

            <li
              className="nav-item "
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/academics"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Academics
              </NavLink>
              {activeMenu.menu2 && <Dropdown menuArray={navMenus.academics} />}
            </li>

            <li
              className="nav-item "
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/learn"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Admissions
              </NavLink>
              {activeMenu.menu3 && <Dropdown menuArray={navMenus.admissions} />}
            </li>

            <li
              className="nav-item "
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/learn"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Arts
              </NavLink>
              {activeMenu.menu4 && <Dropdown menuArray={navMenus.arts} />}
            </li>
            <li
              className="nav-item "
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/learn"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Athletics
              </NavLink>
              {activeMenu.menu5 && <Dropdown menuArray={navMenus.athletics} />}
            </li>

            <li
              className="nav-item "
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/learn"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
              Giving
              </NavLink>
              {activeMenu.menu6 && <Dropdown menuArray={navMenus.giving} />}
            </li>
            <li className="nav-item ">
              <NavLink
                to={"/News"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to={"/News"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Store
              </NavLink>
            </li>

            <div className="wrapper">
              <ul className="mainMenu">
                <li className="item" id="account">
                  <a href="#account" className="btn">
                    About
                  </a>
                  <div className="subMenu">
                    <NavLink
                      to={"/principal"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Administrator's Message
                    </NavLink>{" "}
                    <NavLink
                      to={"/message"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Proprietor's Message
                    </NavLink>
                    <NavLink
                      to={"/history"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      History
                    </NavLink>
                    <NavLink
                      to={"/contact"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Contact Us
                    </NavLink>
                    <NavLink
                      to={"/Conduct"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Parents Code-of-Conduct
                    </NavLink>
                  </div>
                </li>

                <li className="item" id="academics">
                  <a href="#academics" class="btn">
                    Admission
                  </a>
                  <div className="subMenu">
                    <NavLink
                      to={"/apply"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      How to Apply
                    </NavLink>{" "}
                    <NavLink
                      to={"/fees"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      School Fees
                    </NavLink>{" "}
                    <NavLink
                      to={"/transfer"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Transfer
                    </NavLink>{" "}
                  </div>
                </li>

                <li className="item" id="admission">
                  <a href="#admission" class="btn">
                    Academics
                  </a>
                  <div className="subMenu">
                    <NavLink
                      to={"/senior"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Creche
                    </NavLink>{" "}
                    <NavLink
                      to={"/junior"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Higher Primary
                    </NavLink>{" "}
                    <NavLink
                      to={"/Primary"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Junior Primary
                    </NavLink>{" "}
                    <NavLink
                      to={"/secondary"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Secondary
                    </NavLink>{" "}
                  </div>
                </li>

                <li className="item" id="support">
                  <a href={"/school"} class="btn">
                    School Life
                  </a>
                </li>

                <li className="item" id="support">
                  <a href="/Gallery" class="btn">
                    Gallery
                  </a>
                </li>

                <li className="item" id="support">
                  <a href="/News" class="btn">
                    News & Events
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </nav> */}

      <div className="col-md-6">
        <div className="dropdown ">
          <button class="dropbtn">About</button>
          <div className="dropdown-content">
            <Link to="#">Link 1</Link>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div><div className="dropdown ">
          <button class="dropbtn">Academics</button>
          <div className="dropdown-content">
            <a href="#">Link 4</a>
            <a href="#">Link 5</a>
            <a href="#">Link 6</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
