import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/sample-logo.svg";
import { SearchBar } from "../SearchBar/SearchBar";
import MobileAccordion from "./MobileAccordion/MobileAccordion";

import "./navbar.scss";
import MenuLinks from "./NavLinks/MenuLinks";

function NavBar({ sticky }) {
  const [isHome, setIsHome] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);
  const location = useLocation();
  const setThisHome = () => {
    // console.log(location.pathname === "/");
    setIsHome(location.pathname === "/");
  };
  useEffect(() => {
    // console.log(location.pathname);
    setThisHome();
  }, [location]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(scrollPosition);
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
  return (
    <>
      <div
        className={`flexy col-md-12 nav-list  navbar-container2 ${
          isHome ? "home" : ""
        } ${scrollPosition >= 400 && scrollDirection < 0 ? "hide" : ""}`}
      >
        <div className="col-md-2 loggo-div">
          <h1 className={`  ${isHome ? "hide-logo" : ""}`}>
            <Link to={"/"}>
              {" "}
              <img className="col-md-8 col-1 ml2" src={Logo} alt="Scholar" />
            </Link>
          </h1>
        </div>
        <div className="col-md-5">&nbsp;</div>{" "}
        <div className="col-md-6">
          {" "}
          <div className="col-md-12 flexy">
            <div className="col-md-4">&nbsp;</div>{" "}
            <ol className="list-inline list-unstyled col-md-7">
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
              <li>
                {" "}
                <div className="mobile-menu col-md-12 ">
                  {" "}
                  <nav>
                    <Link to={"/"}>
                      {" "}
                      <img
                        className="col-md-8 col-4 ml2"
                        src={Logo}
                        alt="Scholar"
                      />
                    </Link>
                    <input type="checkbox" id="hamburger1" />
                    <label for="hamburger1"></label>

                    <ul className="nav-links col-md-12 list-unstyled">
                      <li>
                        <MobileAccordion />
                      </li>
                    </ul>
                  </nav>
                </div>
              </li>
            </ol>
          </div>{" "}
          <div className="col-md-12 navbar-container  home-menu">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item cool-link3">
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
              <li className="list-inline-item cool-link3">
                <MenuLinks
                  pageNav="ADMISSIONS"
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
                  page6Url="https:/drive.google.com/file/d/1Qp8VmcJ126zeJfj0QTFZLuvqtCAlhKzD/view?usp=sharing"
                  page7="FAQs"
                  page7Url={"/faqs"}
                  page8="New Family Information"
                  page8Url={"/faqs"}
                />
              </li>
              <li className="list-inline-item cool-link3">
                <MenuLinks
                  pageNav="ACADEMICS"
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
                  page6Url="https:/drive.google.com/file/d/1Qp8VmcJ126zeJfj0QTFZLuvqtCAlhKzD/view?usp=sharing"
                  page7="FAQs"
                  page7Url={"/faqs"}
                  page8="New Family Information"
                  page8Url={"/faqs"}
                />
              </li>
              <li className="list-inline-item cool-link3">
                <MenuLinks
                  pageNav="ARTS"
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
                  page6Url="https:/drive.google.com/file/d/1Qp8VmcJ126zeJfj0QTFZLuvqtCAlhKzD/view?usp=sharing"
                  page7="FAQs"
                  page7Url={"/faqs"}
                  page8="New Family Information"
                  page8Url={"/faqs"}
                />
              </li>
              <li className="list-inline-item cool-link3">
                <MenuLinks
                  pageNav="ATHLETICS"
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
                  page6Url="https:/drive.google.com/file/d/1Qp8VmcJ126zeJfj0QTFZLuvqtCAlhKzD/view?usp=sharing"
                  page7="FAQs"
                  page7Url={"/faqs"}
                  page8="New Family Information"
                  page8Url={"/faqs"}
                />
              </li>
              <li className="list-inline-item cool-link3">
                <MenuLinks
                  pageNav="STUDENT LIFE"
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
                  page6Url="https:/drive.google.com/file/d/1Qp8VmcJ126zeJfj0QTFZLuvqtCAlhKzD/view?usp=sharing"
                  page7="FAQs"
                  page7Url={"/faqs"}
                  page8="New Family Information"
                  page8Url={"/faqs"}
                />
              </li>
              {/* <SearchBar /> */}
            </ul>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default NavBar;
