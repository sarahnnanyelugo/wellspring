import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Banner from "../../assets/building-banner.png";
import Admin from "../../assets/admin.png";
import Blue from "../../assets/blue.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dot from "../../assets/blue.png";

import "./_health-safety.scss";
import { Prefoooter } from "../../components/Prefooter/Prefooter";
import React, { useState, useRef, useEffect } from "react";
import { HealthSafetyTab } from "./HealthSafetyTab/HealthSaetyTab";

export const HealthSafety = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    const pageClickEvent = (e) => {
      console.log(e);
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  return (
    <>
      <section className="col-md-12 flexy page-background ">
        <div className="col-md-12 page-shadow header-wrapper">
          <div className="col-md-12 banner zoominheader"></div>
          <div className=" col-md-12 after"></div>
          <div className="icon ">
            <h1>Health & Safety</h1>
            <h1>
              <i class="icofont-rounded-down"></i>
            </h1>
          </div>
        </div>
      </section>

      <section className="page-content flexy ">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-8">
          <div className="col-md-11">
            <div className="breadcrum" style={{ marginTop: "-30px" }}>
              {" "}
              <Breadcrum
                page1="About"
                currentPage="Welcome"
                pageUrl={"/philosophy"}
              />
            </div>
            <div className="page-menu">
              <ul className="list-inline list-unstyled">
                <li className="list-inline-item">
                  <Link to={"/welcome"} className="link-alteration">
                    Welcome
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to={"/philosophy"} className="link-alteration">
                    Phylosophy
                  </Link>
                </li>
                <li className="list-inline-item mobile-li">
                  <Link to={"/leadership"} className="link-alteration">
                    Leadership
                  </Link>
                </li>
                <li className="list-inline-item mobile-li">
                  <Link to={"/directory"} className="link-alteration">
                    Directory{" "}
                    <span>
                      <i class="icofont-caret-down"></i>{" "}
                    </span>
                  </Link>
                </li>
                <li className="list-inline-item mobile-li">
                  <Link to={"/calendar"} className="link-alteration">
                    Calendar{" "}
                    <span>
                      <i class="icofont-caret-down"></i>{" "}
                    </span>
                  </Link>
                </li>
                <li className="list-inline-item mobile-li">
                  <Link to={"/contact"} className="link-alteration">
                    Contact
                    <span>
                      <i class="icofont-caret-down"></i>{" "}
                    </span>
                  </Link>
                </li>
                <li className="list-inline-item mobile-li">
                  <Link to={"/faith"} className="link-alteration">
                    Faith
                    <span>
                      <i class="icofont-caret-down"></i>{" "}
                    </span>
                  </Link>
                </li>
                <li className="list-inline-item mobile-li">
                  <Link to={"/diversity"} className="link-alteration">
                    Diversity
                  </Link>
                </li>

                <li className="list-inline-item">
                  <div className="menu-container">
                    <h6 onClick={onClick} className="menu-trigger1">
                      More
                      <span>
                        <i class="icofont-caret-down"></i>{" "}
                      </span>
                    </h6>
                    <nav
                      ref={dropdownRef}
                      className={`menu ${isActive ? "active" : "inactive"}`}
                    >
                      <div className="">
                        <h6 onClick={onClick}>
                          <i class="icofont-ui-close"></i>
                        </h6>
                        <ul className="list-unstyled">
                          <li className=" web-li">
                            <Link
                              to={"/leadership"}
                              className="link-alteration"
                            >
                              Leadership
                            </Link>
                          </li>
                          <li className=" web-li">
                            <Link to={"/calendar"} className="link-alteration">
                              Calendar{" "}
                              <span>
                                <i class="icofont-caret-down"></i>{" "}
                              </span>
                            </Link>
                          </li>
                          <li className=" web-li">
                            <Link to={"/contact"} className="link-alteration">
                              Contact
                              <span>
                                <i class="icofont-caret-down"></i>{" "}
                              </span>
                            </Link>
                          </li>
                          <li className=" web-li">
                            <Link to={"/faith"} className="link-alteration">
                              Faith
                              <span>
                                <i class="icofont-caret-down"></i>{" "}
                              </span>
                            </Link>
                          </li>
                          <li className=" web-li">
                            <Link to={"/diversity"} className="link-alteration">
                              Diversity
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/health-safety"}
                              className="link-alteration"
                            >
                              Health & Safety
                            </Link>
                          </li>
                          <li>
                            <Link to={"/media"} className="link-alteration">
                              Media
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/news-stories"}
                              className="link-alteration"
                            >
                              News & Stories
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/school-board"}
                              className="link-alteration"
                            >
                              School Board
                              <span>
                                <i class="icofont-caret-down"></i>{" "}
                              </span>
                            </Link>
                            <ul className="list-unstyled inner-list">
                              <li>
                                <Link
                                  to={"/state-of-the-school"}
                                  className="link-alteration"
                                >
                                  State of the School
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/strategic-plan"}
                                  className="link-alteration"
                                >
                                  Strategic Plan
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/best-practices"}
                                  className="link-alteration"
                                >
                                  BEST Practices
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </li>
              </ul>
            </div>

            <h1 className="page-headings mb3 mt4">
              Safety and Security Overview
            </h1>
            <p>
              Wellspring College employs a team of professionals with decades of
              safety experience providing a safe, world class experience for
              your children. In addition to a wide-ranging safety team,
              Wellspring College employs Orlando Police officers during all
              school hours and events.
            </p>
            <p>
              In addition to our personnel, our campus is equipped with high-end
              monitored security, fire, lightning detection and gate systems; as
              well as advanced camera monitoring. Furthermore, Wellspring
              College requires Tier II Employee Background Checks, as well as
              background checks for all volunteers, and an ID Based Screening
              System for all guests.
            </p>

            <h1 className="page-headings mb3 mt4">Safety Reporting</h1>

            <p>
              Should you have any questions, please direct your attention to{" "}
              <Link to={"/"} className="link-alteration2">
                Brian Rose
              </Link>
              , Assistant Head of School and Director of Safety & Security.
            </p>
            <ul className="list-unstyled">
              <p>To speak with someone regarding a Safety Concern:</p>
              <li>
                {" "}
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />
                For Non-Emergency Safety Concerns, please call 407-206-8602
              </li>
              <li>
                {" "}
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />
                For After Hours Non-Emergency Safety Concerns, please call
                407-514-4434
              </li>{" "}
              <li>
                {" "}
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />
                For an Emergency, please call 911
              </li>{" "}
              <li>
                {" "}
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />A An A
                vibrant, award-winning fine arts programClick here to submit a
                safety and security report
              </li>
            </ul>
            <h1 className="page-headings mb3 mt4">Safety Resources</h1>

            <ul className="list-unstyled">
              <p>
                The following resources are designed with the safety of our
                students in mind:
              </p>
              <li>
                {" "}
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />
                <Link to={"/"} className="link-alteration2">
                  Classroom Safety Procedures
                </Link>
              </li>
              <li>
                {" "}
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />
                <Link to={"/"} className="link-alteration2">
                  Standards of Ethical Conduct
                </Link>
              </li>{" "}
              <li>
                {" "}
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />
                <Link to={"/"} className="link-alteration2">
                  Reporting Professional Misconduct
                </Link>
              </li>{" "}
              <li>
                {" "}
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />
                <Link to={"/"} className="link-alteration2">
                  Severe Weather Permission Slip (6th-12th)
                </Link>
              </li>
            </ul>
            <h1 className="page-headings mb3 mt4">Communication Procedures</h1>
            <p>
              In the event of a school emergency, we will notify our families
              via email, text, social media, and both on this page and the
              homepage of our website. We ask that families follow all
              instructions communicated by Wellspring College during all
              emergency situations.
            </p>

            <h1 className="page-headings mb3 mt4">
              Campus Safety and Health Concerns
              <HealthSafetyTab />
            </h1>
          </div>
        </div>
      </section>
      <section className="module1 contentt contact-form prefooter-container">
        <Prefoooter />
      </section>
    </>
  );
};
