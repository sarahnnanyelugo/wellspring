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
                  <Link to="#" className="link-alteration">
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
                            <Link to={"/health-safety"} className="link-alteration">
                              Health & Safety
                            </Link>
                          </li>
                          <li>
                            <Link to={"/media"} className="link-alteration">
                              Media
                            </Link>
                          </li>
                          <li>
                            <Link to={"/news-stories"} className="link-alteration">
                              News & Stories
                            </Link>
                          </li>
                          <li>
                            <Link to={"/school-board"} className="link-alteration">
                              School Board
                              <span>
                                <i class="icofont-caret-down"></i>{" "}
                              </span>
                            </Link>
                            <ul className="list-unstyled inner-list">
                              <li>
                                <Link to={"/state-of-the-school"} className="link-alteration">
                                  State of the School
                                </Link>
                              </li>
                              <li>
                                <Link to={"/strategic-plan"} className="link-alteration">
                                  Strategic Plan
                                </Link>
                              </li>
                              <li>
                                <Link to={"/best-practices"} className="link-alteration">
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

            <h1 className="page-headings mb3">Safety and Security Overview
</h1>
            <p>
             The First Academy employs a team of professionals with decades of safety experience
              providing a safe, world class experience for your children. In addition to a wide-ranging
              safety team, The First Academy employs Orlando Police officers during all school hours and
               events.
            </p>
            <p>In addition to our personnel, our campus is equipped with high-end monitored security, fire, lightning detection and gate systems; as well as advanced camera monitoring. Furthermore, The First Academy requires Tier II Employee Background Checks, as well as background checks for all volunteers, and an ID Based Screening System for all guests.

</p>

<h1 className="page-headings mb3">Safety Reporting</h1>

            <p>
              Teachers at Wellspring College are called Living Curriculum
              Influencers. They are 1) Christ Followers, 2) Prayer Warriors, 3)
              Servant Leaders, 4) Relationship Builders, 5) Faithful
              Encouragers, 6) Grateful Communicators, and 7) Engaging
              Instructors. Though they come in all different shapes and sizes,
              have varied backgrounds and experiences, and possess unique
              personality types, I believe these seven characteristics set them
              apart from all other teachers in Central Florida. We are blessed
              to have these remarkable men and women leading our students.
              <br /> <br />
              Besides our exemplary teachers, The First Academy is also blessed
              with other qualities necessary to be a great school:
              <br /> <br />
            </p>
            <ul className="list-unstyled">
              <li>
                {" "}
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />A
                modern, secure campus with state-of-the-art infrastructure
                supporting the latest in learning environment technology
              </li>
              <li>
                {" "}
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />A An
                award-winning academic curriculum, including our Lower School
                and Middle School being named to the prestigious list of Blue
                Ribbon Schools by the U.S. Department of Education
              </li>{" "}
              <li>
                {" "}
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />A An
                World-class athletic facilities (Payne Stewart Athletic Complex
                and the Cramer Family Field House) that are home to numerous
                state championships
              </li>{" "}
              <li>
                {" "}
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />A An A
                vibrant, award-winning fine arts program
              </li>
              <li>
                {" "}
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />A An A
                A commitment to character development and service to others
              </li>
            </ul>
            <p>
              The First Academy is a great school. I invite you to experience it
              for yourself and your family. Please call our Office of Admissions
              today to schedule a campus visit. Walk the halls, sit in on a
              class, listen to the conversations of our students and faculty,
              and I believe you will recognize what makes The First Academy
              distinctive and a great school for your children and your family.
            </p>
          </div>
        </div>
      </section>
      <section className="module1 contentt contact-form prefooter-container">
        <Prefoooter />
      </section>
    </>
  );
};