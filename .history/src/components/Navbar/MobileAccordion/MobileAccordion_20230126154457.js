import React, { useState } from "react";
import "./_mobile-accordion.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link, NavLink } from "react-router-dom";
import MenuLinks from "../NavLinks/MenuLinks";

const MobileAccordion = () => {
  const [showActive, setShowActive] = useState(false);

  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  const setThisShowActive = () => {
    setShowActive(!showActive);
  };
  return (
    <div className={`col-md-12 mobile-accordion ${showActive ? "hide" : ""}`}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <small>ABOUT</small>
          </Accordion.Header>
          <Accordion.Body>
            <ul className="list-unstyled">
              <li>
                {/* <NavLink
                  to={"/welcome"}
                  className="mobile-navs"
                  onClick={setThisShowActive}
                >
                  Welcome
                </NavLink>{" "}
                <NavLink
                  to={"/welcome"}
                  className="mobile-navs"
                  onClick={setThisShowActive}
                >
                  Welcome
                </NavLink>{" "}
                <Link
                  to={"/welcome"}
                  className="mobile-navs"
                  onClick={setThisShowActive}
                >
                  Welcome
                </Link>{" "}
                <Link
                  to={"/welcome"}
                  className="mobile-navs"
                  onClick={setThisShowActive}
                >
                  Welcome
                </Link>{" "}
                <Link
                  to={"/welcome"}
                  className="mobile-navs"
                  onClick={setThisShowActive}
                >
                  Welcome
                </Link>{" "}
                <Link
                  to={"/welcome"}
                  className="mobile-navs"
                  onClick={setThisShowActive}
                >
                  Welcome
                </Link>{" "}
                <Link
                  to={"/welcome"}
                  className="mobile-navs"
                  onClick={setThisShowActive}
                >
                  Welcome
                </Link>{" "}
                <Link
                  to={"/welcome"}
                  className="mobile-navs"
                  onClick={setThisShowActive}
                >
                  Welcome
                </Link>{" "}
                <Link
                  to={"/welcome"}
                  className="mobile-navs"
                  onClick={setThisShowActive}
                >
                  Welcome
                </Link>{" "}
                <Link to={"/welcome"} className="mobile-navs">
                  Welcome
                </Link> */}

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
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <small>ADMISSIONS</small>
          </Accordion.Header>
          <Accordion.Body>2</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <small>ACADEMICS</small>
          </Accordion.Header>
          <Accordion.Body>3</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <small>ARTS</small>
          </Accordion.Header>
          <Accordion.Body>4</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <small>ATHLETICS</small>
          </Accordion.Header>
          <Accordion.Body>5</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <small>STUDENT LIFE</small>
          </Accordion.Header>
          <Accordion.Body>6</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default MobileAccordion;
