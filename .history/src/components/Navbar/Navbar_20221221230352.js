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
  

  return (
    <div className="col-md-12 flexy navContainer">
      <div className="col-md-3">&nbsp;</div>

      <div className="col-md-6">
        <div className="dropdown ">
          <button class="dropbtn">About</button>
          <div className="dropdown-content ">
            <div className="flexy">
              {" "}
              <span className="content1">
                <Link to={"#"}>Link 1</Link>
                <Link to={"#"}>Link 2</Link>
                <Link to={"#"}>Link 3</Link>
              </span>{" "}
              <span className="content2">
                <Link to={"#"}>Link 1</Link>
                <Link to={"#"}>Link 2</Link>
                <Link to={"#"}>Link 3</Link>
              </span>
            </div>
          </div>
        </div>
        <div className="dropdown ">
          <button class="dropbtn">Academics</button>
          <div className="dropdown-content">
            <div className="flexy">
              {" "}
              <span className="content1">
                <Link to={"#"}>Link 1</Link>
                <Link to={"#"}>Link 2</Link>
                <Link to={"#"}>Link 3</Link>
              </span>{" "}
              <span className="content2">
                <Link to={"#"}>Link 1</Link>
                <Link to={"#"}>Link 2</Link>
                <Link to={"#"}>Link 3</Link>
              </span>
            </div>
          </div>
        </div>
        <div className="dropdown ">
          <button class="dropbtn">Admissions</button>
          <div className="dropdown-content">
            <div className="flexy">
              {" "}
              <span className="content1">
                <Link to={"#"}>Link 1</Link>
                <Link to={"#"}>Link 2</Link>
                <Link to={"#"}>Link 3</Link>
              </span>{" "}
              <span className="content2">
                <Link to={"#"}>Link 1</Link>
                <Link to={"#"}>Link 2</Link>
                <Link to={"#"}>Link 3</Link>
              </span>
            </div>
          </div>
        </div>
        <div className="dropdown ">
          <button class="dropbtn">Arts</button>
          <div className="dropdown-content">
            <div className="flexy">
              {" "}
              <span className="content1">
                <Link to={"#"}>Link 1</Link>
                <Link to={"#"}>Link 2</Link>
                <Link to={"#"}>Link 3</Link>
              </span>{" "}
              <span className="content2">
                <Link to={"#"}>Link 1</Link>
                <Link to={"#"}>Link 2</Link>
                <Link to={"#"}>Link 3</Link>
              </span>
            </div>
          </div>
        </div>
        <div className="dropdown ">
          <button class="dropbtn">Athletics</button>
          <div className="dropdown-content">
            <Link to={"#"}>Link 4</Link>
            <Link to={"#"}>Link 5</Link>
            <Link to={"#"}>Link 6</Link>
          </div>
        </div>
        <div className="dropdown ">
          <button class="dropbtn">Giving</button>
          <div className="dropdown-content">
            <Link to={"#"}>Link 4</Link>
            <Link to={"#"}>Link 5</Link>
            <Link to={"#"}>Link 6</Link>
          </div>
        </div>
        <div className="dropdown ">
          <button class="dropbtn">Blogs</button>
        </div>
        <div className="dropdown ">
          <button class="dropbtn">Store</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
