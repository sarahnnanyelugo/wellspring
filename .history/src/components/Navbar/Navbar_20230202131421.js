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
              <img className="col-md-4 col-1 ml3" src={Logo} alt="Scholar" />
            </Link>
          </h1>
        </div>

        <div className="col-md-9 offset-md-1">
          {" "}
          <div className="col-md-12 flexy">
            <div className="col-md-12 top-links">
              <ol className="list-inline list-unstyled flexy flex-row-reverse">
                <li className="list-inline-item cool-link">
                  <Link to="#" className="link-alteration">
                    Royal Store
                  </Link>
                </li>{" "}
                <li className="list-inline-item cool-link">
                  <Link to="#" className="link-alteration">
                    Current Families
                  </Link>
                </li>
                <li className="list-inline-item cool-link">
                  <Link to="#" className="link-alteration">
                    Events
                  </Link>
                </li>
                <li className="list-inline-item cool-link">
                  <Link to="#" className="link-alteration">
                    News
                  </Link>
                </li>
                <li className="list-inline-item cool-link">
                  <Link to="#" className="link-alteration">
                    Giving
                  </Link>
                </li>
                <li className="list-inline-item cool-link">
                  <Link to={"/careers"} className="link-alteration">
                    Careers
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="link-alteration cool-link">
                    Alumni
                  </Link>
                </li>
                <li>
                  {" "}
                  <div className="mobile-menu col-md-12 ">
                    {" "}
                    <nav>
                      <Link
                        to={"/"}
                        className={`  ${isHome ? "hide-logo" : ""}`}
                      >
                        {" "}
                        <img
                          className="col-md-2 col-2 ml2 mobile-logo"
                          src={Logo}
                          alt="Scholar"
                        />
                      </Link>
                      <input
                        type="checkbox"
                        id="hamburger1"
                        checked={showActive}
                        onChange={(e) => handleChange(e)}
                      />
                      <label for="hamburger1" className="buga"></label>

                      <ul className="nav-links col-md-12 list-unstyled">
                        <li>
                          <MobileAccordion />
                        </li>
                      </ul>
                    </nav>
                  </div>
                </li>
              </ol>
            </div>
          </div>{" "}
          <div className="col-md-12 navbar-container  home-menu  d-flex flex-row-reverse  ">
            <ul className="list-unstyled list-inline main-links">
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
                  // page7="Health & Safety"
                  // page7Url={"/health-diversity"}
                  // page8="Calendar"
                  // page8Url={"/calendar"}
                  // page9="Careers"
                  // page9Url={"/careers"}
                  // page10="Contact Us"
                  // page10Url={"/contact"}
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
                  extLink="Admissions Checklist"
                />
              </li>
              <li className="list-inline-item cool-link3">
                <MenuLinks
                  pageNav="ACADEMICS"
                  page1="Diversity"
                  page1Url={"/diversity"}
                  page2="Health & Safety"
                  page2Url={"/health-safety"}
                  page3="Calendar"
                  page3Url={"/calendar"}
                  page4="Careers"
                  page4Url={"/careers"}
                  page5="Contact Us"
                  page5Url={"/contact"}
                  // page1="Overview"
                  // page1Url={"/overview"}
                  // page2="Lower School"
                  // page2Url={"/lower-school"}
                  // page3="Middle School"
                  // page3Url={"/middle-school"}
                  // page4="Upper School"
                  // page4Url={"/upper-school"}
                  // page5="Learning Intentionally Enhanced"
                  // page5Url={"/learning-enhanced"}
                  // page6="Home School Program"
                  // page6Url={"/home-school-program"}
                  // page7="Special Needs Program"
                  // page7Url={"/special-needs-program"}
                />
              </li>
              <li className="list-inline-item cool-link3">
                <MenuLinks
                  extLink="Admissions Checklist"
                  page2="FAQs"
                  page2Url={"/faqs"}
                  page3="New Family Information"
                  page3Url={"/faqs"}
                  page4="Media"
                  page4Url={"/media"}
                  pageNav="ARTS"
                  page5="Health & Safety"
                  page5Url={"/health-safety"}
                  // page1="Lower School"
                  // page1Url={"/lower-school"}
                  // page2="Middle School"
                  // page2Url={"/middle-school"}
                  // page3="Upper School"
                  // page3Url={"/upper-school"}
                />
              </li>
              <li className="list-inline-item cool-link3">
                <MenuLinks
                  pageNav="ATHLETICS"
                  page1="Fall Sports"
                  page1Url={"/fall-sports"}
                  page2="How To Apply"
                  page2Url={"/comming-soon"}
                  page3="Winter Sports"
                  page3Url={"/winter-sports"}
                  page4="Lower School Sports"
                  page4Url={"/lower-school-sports"}
                  page5="Tickets & Facilities"
                  page5Url={"/tickets-facilities"}
                  page6="Athletic Department"
                  page6Url={"/athletic-department"}
                  page7="Booster Club"
                  page7Url={"/booster-club"}
                />
              </li>
              <li className="list-inline-item cool-link3">
                <MenuLinks
                  pageNav="STUDENT LIFE"
                  page1="Lower School"
                  page1Url={"/sl-lower-school"}
                  page2="Middle School"
                  page2Url={"/sl-middle-school"}
                  page3="Upper School"
                  page3Url={"/sl-upper-school"}
                  page4="After School Program"
                  page4Url={"/after-school-program"}
                  page5="Spiritual Growth"
                  page5Url={"/spiritual-growth"}
                  page6="Summer Camps"
                  page6Url={"/summer-camps"}
                  page7="The Academics"
                  page7Url={"/the-academics"}
                />
              </li>
              <li className="list-inline-item mr1">
                <SearchBar />
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default NavBar;
