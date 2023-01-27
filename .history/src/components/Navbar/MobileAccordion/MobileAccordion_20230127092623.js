import React, { useEffect, useState } from "react";
import "./_mobile-accordion.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link, NavLink, useLocation } from "react-router-dom";

const MobileAccordion = () => {
  const location = useLocation(false);
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  // const setThisShowActive = () => {
  //   setShowActive(!showActive);
  // };
  // useEffect(() => {
  //   console.log(location.pathname);
  //   setThisShowActive();
  //   setThisShowActive();
  // }, [location]);
  return (
    <div className="col-md-12 mobile-accordion">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <small>ABOUT</small>
          </Accordion.Header>
          <Accordion.Body>
            <ul className="list-unstyled">
              <li>
                {" "}
                <Link to={"/welcome"} className="mobile-navs">
                  Welcome
                </Link>{" "}
              </li>
              <li>
                <Link to={"/philosophy"} className="mobile-navs">
                  Phylosophy
                </Link>{" "}
              </li>
              <li>
                <Link to={"/leadership"} className="mobile-navs">
                  Leadership
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/directory"} className="mobile-navs">
                  Directory
                </Link>{" "}
              </li>
              <li>
                <Link to={"/faith"} className="mobile-navs">
                  Faith
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/diversity"} className="mobile-navs">
                  Diversity
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/health-safety"} className="mobile-navs">
                  Health & Safety
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/calendar"} className="mobile-navs">
                  Calendar
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/careers"} className="mobile-navs">
                  Careers
                </Link>{" "}
              </li>
              <li>
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
                <Link to={"/how-to-apply"} className="mobile-navs">
                  How to Apply
                </Link>{" "}
                <Link to={"/tuition"} className="mobile-navs">
                  Tuition
                </Link>{" "}
                <Link to={"/campus-visits"} className="mobile-navs">
                  Campus Visits
                </Link>{" "}
                <Link to={"/admissions-events"} className="mobile-navs">
                  Admissions Events
                </Link>{" "}
                <Link to={"/admissions-checklist"} className="mobile-navs">
                  Admissions Checklist
                </Link>{" "}
                <Link to={"/faq"} className="mobile-navs">
                  FAQs
                </Link>{" "}
                <Link to={"/new-family-information"} className="mobile-navs">
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
