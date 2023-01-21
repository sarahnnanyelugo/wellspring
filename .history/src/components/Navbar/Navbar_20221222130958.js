import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SchLogo from "../../assets/logo.png";
// import fIcon from "../assets/portal.svg";
import { navMenus } from "./MenuItems";
import Dropdown from "./Dropdown";

import classes from "./NavBar.module.css";
import "./navbar.scss";
// import classes from './AdmissionForm.module.css';

function NavBar({ sticky }) {
  return (
    <div
    
      className={sticky ? "navContainer navbar-sticky flextt" : "navContainer", "flexy"}
    >
      <div className="col-md-3">&nbsp;</div>

      <div className="col-md-6">
        <div className="dropdown ">
          <button class="dropbtn">About</button>
          <div className="dropdown-content ">
            <div className="flexy">
              {" "}
              <span className="content1">
                <Link to={"#"}>
                  <span>
                    <i class="icofont-ui-message"></i>
                  </span>
                  Contact
                </Link>
                <Link to={"#"}>
                  <span>
                    <i class="icofont-calendar"></i>
                  </span>
                  Calendar
                </Link>
              </span>{" "}
              <span className="content2 flexy">
                <div>
                  <Link to={"#"}>Welcome</Link>
                  <Link to={"#"}>Back to School</Link>
                  <Link to={"#"}>Campus Health</Link>
                  <Link to={"#"}>Faculty Fellows</Link>
                  <Link to={"#"}>Phylosophy</Link>
                  <Link to={"#"}>Leadership</Link>
                  <Link to={"#"}>Lunch</Link>
                  <Link to={"#"}>Strategic Plan</Link>
                </div>
                <div>
                  <Link to={"#"}>Directory</Link>
                  <Link to={"#"}>Facility Usage</Link>
                  <Link to={"#"}>Safety & Security</Link>
                  <Link to={"#"}>State of School</Link>
                  <Link to={"#"}>Media</Link>
                  <Link to={"#"}>Campus Map</Link>
                </div>
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
                <Link to={"#"}>
                  <span>
                    <i class="icofont-file-text"></i>
                  </span>
                  Upper
                </Link>
                <Link to={"#"}>
                  <span>
                    <i class="icofont-test-tube-alt"></i>
                  </span>
                  Middle
                </Link>
                <Link to={"#"}>
                  <span>
                    <i class="icofont-pencil-alt-5"></i>
                  </span>
                  Lower
                </Link>
                <Link to={"#"}>
                  <span>
                    <i class="icofont-calculator-alt-1"></i>
                  </span>
                  Classical
                </Link>
                <Link to={"#"}>
                  <span>
                    <i class="icofont-book"></i>
                  </span>
                  First Hope
                </Link>
              </span>{" "}
              <span className="content2 flexy">
                <div>
                  <Link to={"#"}>Welcome</Link>
                  <Link to={"#"}>Back to School</Link>
                  <Link to={"#"}>Campus Health</Link>
                  <Link to={"#"}>Faculty Fellows</Link>
                  <Link to={"#"}>Phylosophy</Link>
                  <Link to={"#"}>Leadership</Link>
                  <Link to={"#"}>Lunch</Link>
                  <Link to={"#"}>Strategic Plan</Link>
                </div>
                <div>
                  <Link to={"#"}>Directory</Link>
                  <Link to={"#"}>Facility Usage</Link>
                  <Link to={"#"}>Safety & Security</Link>
                  <Link to={"#"}>State of School</Link>
                  <Link to={"#"}>Media</Link>
                  <Link to={"#"}>Campus Map</Link>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="dropdown ">
          <button class="dropbtn">Admissions</button>
          <div className="dropdown-content">
            <div className="flexy">
              {" "}
              <span className="content11">
                <Link to={"#"}>
                  <span>
                    <i class="icofont-apple"></i>
                  </span>
                  Why WS?
                </Link>
                <Link to={"#"}>
                  <span>
                    <i class="icofont-money-bag"></i>
                  </span>
                  Tuition & Fees
                </Link>
                <Link to={"#"}>
                  <span>
                    <i class="icofont-ui-calendar"></i>
                  </span>
                  Events
                </Link>
                <Link to={"#"}>
                  <span>
                    <i class="icofont-direction-sign"></i>
                  </span>
                  Campus Tours
                </Link>
              </span>{" "}
              <span className="content2 flexy">
                <div>
                  <Link to={"#"}>Welcome</Link>
                  <Link to={"#"}>Back to School</Link>
                  <Link to={"#"}>Campus Health</Link>
                  <Link to={"#"}>Faculty Fellows</Link>
                  <Link to={"#"}>Phylosophy</Link>
                  <Link to={"#"}>Leadership</Link>
                  <Link to={"#"}>Lunch</Link>
                  <Link to={"#"}>Strategic Plan</Link>
                </div>
                <div>
                  <Link to={"#"}>Directory</Link>
                  <Link to={"#"}>Facility Usage</Link>
                  <Link to={"#"}>Safety & Security</Link>
                  <Link to={"#"}>State of School</Link>
                  <Link to={"#"}>Media</Link>
                  <Link to={"#"}>Campus Map</Link>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="dropdown ">
          <button class="dropbtn">Arts</button>
          <div className="dropdown-content">
            <div className="flexy">
              {" "}
              <span className="content22 flexy">
                <Link to={"#"}>
                  <span>
                    <i class="icofont-file-text"></i>
                  </span>
                  Upper
                </Link>{" "}
                <Link to={"#"}>
                  <span>
                    <i class="icofont-test-tube-alt"></i>
                  </span>
                  Middle
                </Link>{" "}
                <Link to={"#"}>
                  <span>
                    <i class="icofont-pencil-alt-5"></i>
                  </span>
                  Lower
                </Link>
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="dropdown ">
          <button class="dropbtn">Athletics</button>
          <div className="dropdown-content">
            <div className="flexy">
              {" "}
              <span className="content1">
                <Link to={"#"}>
                  <span>
                    <i class="icofont-file-text"></i>
                  </span>
                  Upper
                </Link>{" "}
                <Link to={"#"}>
                  <span>
                    <i class="icofont-test-tube-alt"></i>
                  </span>
                  Middle
                </Link>{" "}
                <Link to={"#"}>
                  <span>
                    <i class="icofont-pencil-alt-5"></i>
                  </span>
                  Lower
                </Link>
              </span>{" "}
              <span className="content2 flexy">
                <div>
                  <Link to={"#"}>Welcome</Link>
                  <Link to={"#"}>Back to School</Link>
                  <Link to={"#"}>Campus Health</Link>
                  <Link to={"#"}>Faculty Fellows</Link>
                  <Link to={"#"}>Phylosophy</Link>
                  <Link to={"#"}>Leadership</Link>
                  <Link to={"#"}>Lunch</Link>
                  <Link to={"#"}>Strategic Plan</Link>
                </div>
                <div>
                  <Link to={"#"}>Directory</Link>
                  <Link to={"#"}>Facility Usage</Link>
                  <Link to={"#"}>Safety & Security</Link>
                  <Link to={"#"}>State of School</Link>
                  <Link to={"#"}>Media</Link>
                  <Link to={"#"}>Campus Map</Link>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="dropdown ">
          <button class="dropbtn">Giving</button>
          <div className="dropdown-content">
            <div className="flexy">
              {" "}
              <span className="content11">
                <Link to={"#"}>
                  <span>
                    <i class="icofont-heart-alt"></i>
                  </span>
                  Give Now
                </Link>
                <Link to={"#"}>
                  <span>
                    <i class="icofont-hand-power"></i>
                  </span>
                  Pledge Now
                </Link>
                <Link to={"#"}>
                  <span>
                    <i class="icofont-recycle"></i>
                  </span>
                  Volunteer
                </Link>
              </span>{" "}
              <span className="content2 flexy">
                <div>
                  <Link to={"#"}>Events</Link>
                  <Link to={"#"}>Parent Association</Link>
                </div>
                <div>
                  <Link to={"#"}>Tuition Assistance Fund</Link>
                  <Link to={"#"}>Planned Giving</Link>
                </div>
              </span>
            </div>
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
