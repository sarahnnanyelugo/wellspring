import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";

import "./navbar.scss";
import MenuLinks from "./NavLinks/MenuLinks";

function NavBar({ pathname }) {
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <>
      <div className="flexy col-md-12 nav-list  navbar-container2 ">
        <div className="col-md-7">&nbsp;</div>{" "}
        <div className="col-md-5">
          {" "}
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
          </ul>{" "}
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
        </div>
      </div>{" "}
    </>
  );
}

export default NavBar;
