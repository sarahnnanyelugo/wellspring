import React, { useEffect, useState } from "react";
import "./_mobile-accordion.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link, NavLink, useLocation } from "react-router-dom";

const MobileAccordion = () => {
  const [showActive, setShowActive] = useState(true);
  const location = useLocation(false);
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  const setThisShowActive = () => {
    setShowActive(!showActive);
  };
  useEffect(() => {
    console.log(location.pathname);
    setThisShowActive();
  }, [location]);
  return (
    <div className={`col-md-12 mobile-accordion ${showActive ? "hide" : ""}`}>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <small>ABOUT</small>
          </Accordion.Header>
          <Accordion.Body>
            <ul className="list-unstyled">
              <li>
                <li>
                  {" "}
                  <Link to={"/welcome"} className="mobile-navs">
                    Welcome
                  </Link>{" "}
                </li>
                <li>
                  <Link to={"/phylosophy"} className="mobile-navs">
                    Phylosophy
                  </Link>{" "}
                </li>
                <Link to={"/leadership"} className="mobile-navs">
                  Leadership
                </Link>{" "}
                <Link to={"/directory"} className="mobile-navs">
                  Directory
                </Link>{" "}
                <Link to={"/faith"} className="mobile-navs">
                  Faith
                </Link>{" "}
                <Link to={"/diversity"} className="mobile-navs">
                  Diversity
                </Link>{" "}
                <Link to={"/health-safety"} className="mobile-navs">
                  Health & Safety
                </Link>{" "}
                <Link to={"/calendar"} className="mobile-navs">
                  Calendar
                </Link>{" "}
                <Link to={"/careers"} className="mobile-navs">
                  Careers
                </Link>{" "}
                <Link to={"contact"} className="mobile-navs">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <small>ADMISSIONS</small>
          </Accordion.Header>
          <Accordion.Body>
            {" "}
            <ul className="list-unstyled">
              <li>
                <Link
                  to={"/how-to-apply"}
                  className="mobile-navs"
                  onClick={setThisShowActive}
                >
                  How to Apply
                </Link>{" "}
                <Link
                  to={"/tuition"}
                  className="mobile-navs"
                  onClick={setThisShowActive}
                >
                  Tuition
                </Link>{" "}
                <Link
                  to={"/campus-visits"}
                  className="mobile-navs"
                  onClick={setThisShowActive}
                >
                  Campus Visits
                </Link>{" "}
                <Link
                  to={"/admissions-events"}
                  className="mobile-navs"
                  onClick={setThisShowActive}
                >
                  Admissions Events
                </Link>{" "}
                <Link
                  to={"/admissions-checklist"}
                  className="mobile-navs"
                  onClick={setThisShowActive}
                >
                  Admissions Checklist
                </Link>{" "}
                <Link
                  to={"/faq"}
                  className="mobile-navs"
                  onClick={setThisShowActive}
                >
                  FAQs
                </Link>{" "}
                <Link
                  to={"/new-family-information"}
                  className="mobile-navs"
                  onClick={setThisShowActive}
                >
                  New Family Information
                </Link>{" "}
              </li>
            </ul>
          </Accordion.Body>
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
