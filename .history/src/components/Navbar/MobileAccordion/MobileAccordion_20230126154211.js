import React, { useState } from "react";
import "./_mobile-accordion.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link, NavLink } from "react-router-dom";

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
                <NavLink
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
                </Link>
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
