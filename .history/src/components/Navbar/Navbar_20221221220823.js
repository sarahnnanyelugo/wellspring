import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SchLogo from "../../assets/logo.png";
// import fIcon from "../assets/portal.svg";
import { navMenus } from "./MenuItems";
import Dropdown from "./Dropdown";

import classNamees from "./NavBar.module.css";
import "./navbar.scss";
// import classNamees from './AdmissionForm.module.css';

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
    <div classNameName="col-md-12 flexy navContainer">
      <div classNameName="col-md-3">&nbsp;</div>
      {/* <nav classNameName="col-md-6">
        <div classNameName={classNamees.navCont}>
          
          <div classNameName="menu-icon" onClick={handleClick}>
            <i classNameName={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul classNameName={click ? "nav-list active" : "nav-list"}>
            <li
              classNameName="nav-item "
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/about"}
                classNameName="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
              {activeMenu.menu1 && <Dropdown menuArray={navMenus.about} />}
            </li>

            <li
              classNameName="nav-item "
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/academics"}
                classNameName="nav-links"
                onClick={closeMobileMenu}
              >
                Academics
              </NavLink>
              {activeMenu.menu2 && <Dropdown menuArray={navMenus.academics} />}
            </li>

            <li
              classNameName="nav-item "
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/learn"}
                classNameName="nav-links"
                onClick={closeMobileMenu}
              >
                Admissions
              </NavLink>
              {activeMenu.menu3 && <Dropdown menuArray={navMenus.admissions} />}
            </li>

            <li
              classNameName="nav-item "
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/learn"}
                classNameName="nav-links"
                onClick={closeMobileMenu}
              >
                Arts
              </NavLink>
              {activeMenu.menu4 && <Dropdown menuArray={navMenus.arts} />}
            </li>
            <li
              classNameName="nav-item "
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/learn"}
                classNameName="nav-links"
                onClick={closeMobileMenu}
              >
                Athletics
              </NavLink>
              {activeMenu.menu5 && <Dropdown menuArray={navMenus.athletics} />}
            </li>

            <li
              classNameName="nav-item "
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/learn"}
                classNameName="nav-links"
                onClick={closeMobileMenu}
              >
              Giving
              </NavLink>
              {activeMenu.menu6 && <Dropdown menuArray={navMenus.giving} />}
            </li>
            <li classNameName="nav-item ">
              <NavLink
                to={"/News"}
                classNameName="nav-links"
                onClick={closeMobileMenu}
              >
                Blog
              </NavLink>
            </li>
            <li classNameName="nav-item ">
              <NavLink
                to={"/News"}
                classNameName="nav-links"
                onClick={closeMobileMenu}
              >
                Store
              </NavLink>
            </li>

            <div classNameName="wrapper">
              <ul classNameName="mainMenu">
                <li classNameName="item" id="account">
                  <a href="#account" classNameName="btn">
                    About
                  </a>
                  <div classNameName="subMenu">
                    <NavLink
                      to={"/principal"}
                      classNameName="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Administrator's Message
                    </NavLink>{" "}
                    <NavLink
                      to={"/message"}
                      classNameName="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Proprietor's Message
                    </NavLink>
                    <NavLink
                      to={"/history"}
                      classNameName="nav-links"
                      onClick={closeMobileMenu}
                    >
                      History
                    </NavLink>
                    <NavLink
                      to={"/contact"}
                      classNameName="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Contact Us
                    </NavLink>
                    <NavLink
                      to={"/Conduct"}
                      classNameName="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Parents Code-of-Conduct
                    </NavLink>
                  </div>
                </li>

                <li classNameName="item" id="academics">
                  <a href="#academics" className="btn">
                    Admission
                  </a>
                  <div classNameName="subMenu">
                    <NavLink
                      to={"/apply"}
                      classNameName="nav-links"
                      onClick={closeMobileMenu}
                    >
                      How to Apply
                    </NavLink>{" "}
                    <NavLink
                      to={"/fees"}
                      classNameName="nav-links"
                      onClick={closeMobileMenu}
                    >
                      School Fees
                    </NavLink>{" "}
                    <NavLink
                      to={"/transfer"}
                      classNameName="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Transfer
                    </NavLink>{" "}
                  </div>
                </li>

                <li classNameName="item" id="admission">
                  <a href="#admission" className="btn">
                    Academics
                  </a>
                  <div classNameName="subMenu">
                    <NavLink
                      to={"/senior"}
                      classNameName="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Creche
                    </NavLink>{" "}
                    <NavLink
                      to={"/junior"}
                      classNameName="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Higher Primary
                    </NavLink>{" "}
                    <NavLink
                      to={"/Primary"}
                      classNameName="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Junior Primary
                    </NavLink>{" "}
                    <NavLink
                      to={"/secondary"}
                      classNameName="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Secondary
                    </NavLink>{" "}
                  </div>
                </li>

                <li classNameName="item" id="support">
                  <a href={"/school"} className="btn">
                    School Life
                  </a>
                </li>

                <li classNameName="item" id="support">
                  <a href="/Gallery" className="btn">
                    Gallery
                  </a>
                </li>

                <li classNameName="item" id="support">
                  <a href="/News" className="btn">
                    News & Events
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </nav> */}

      <div classNameName="col-md-6">
        <div classNameName="dropdown ">
          <button className="dropbtn">About</button>
          <div classNameName="dropdown-content">
            <Link to={"#"}>Link 1</Link>
            <Link to={"#"}>Link 2</Link>
            <Link to={"#"}>Link 3</Link>
          </div>
        </div>
        <div classNameName="dropdown ">
          <button className="dropbtn">Academics</button>
          <div classNameName="dropdown-content">
            <Link to={"#"}>Link 4</Link>
            <Link to={"#"}>Link 5</Link>
            <Link to={"#"}>Link 6</Link>
          </div>
        </div>
        <div classNameName="dropdown ">
          <button className="dropbtn">Admissions</button>
          <div classNameName="dropdown-content">
            <Link to={"#"}>Link 4</Link>
            <Link to={"#"}>Link 5</Link>
            <Link to={"#"}>Link 6</Link>
          </div>
        </div>
        <div classNameName="dropdown ">
          <button className="dropbtn">Arts</button>
          <div classNameName="dropdown-content">
            <Link to={"#"}>Link 4</Link>
            <Link to={"#"}>Link 5</Link>
            <Link to={"#"}>Link 6</Link>
          </div>
        </div>
        <div classNameName="dropdown ">
          <button className="dropbtn">Athletics</button>
          <div classNameName="dropdown-content">
            <Link to={"#"}>Link 4</Link>
            <Link to={"#"}>Link 5</Link>
            <Link to={"#"}>Link 6</Link>
          </div>
        </div>
        <div classNameName="dropdown ">
          <button className="dropbtn">Giving</button>
          <div classNameName="dropdown-content">
            <Link to={"#"}>Link 4</Link>
            <Link to={"#"}>Link 5</Link>
            <Link to={"#"}>Link 6</Link>
          </div>
        </div>
        <div classNameName="dropdown ">
          <button className="dropbtn">Blogs</button>
          
        </div>
        <div classNameName="dropdown ">
          <button className="dropbtn">Store</button>
          
        </div>
      </div>
    </div>
  );
}

export default NavBar;
