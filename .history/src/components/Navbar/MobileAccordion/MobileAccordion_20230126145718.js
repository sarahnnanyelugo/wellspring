import React, { useState } from "react";
import "./_mobile-accordion.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const MobileAccordion = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="col-md-1 mobile-accordion">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <small>ABOUT</small>
          </Accordion.Header>
          <Accordion.Body>
            <ul className="list-unstyled">
              <li onClick={closeMobileMenu}>
                <Link to={"/welcome"} className="mobile-navs">
                  Welcome
                </Link>{" "}
                <Link to={"/welcome"} className="mobile-navs">
                  Welcome
                </Link>{" "}
                <Link to={"/welcome"} className="mobile-navs">
                  Welcome
                </Link>{" "}
                <Link to={"/welcome"} className="mobile-navs">
                  Welcome
                </Link>{" "}
                <Link to={"/welcome"} className="mobile-navs">
                  Welcome
                </Link>{" "}
                <Link to={"/welcome"} className="mobile-navs">
                  Welcome
                </Link>{" "}
                <Link to={"/welcome"} className="mobile-navs">
                  Welcome
                </Link>{" "}
                <Link to={"/welcome"} className="mobile-navs">
                  Welcome
                </Link>{" "}
                <Link to={"/welcome"} className="mobile-navs">
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
