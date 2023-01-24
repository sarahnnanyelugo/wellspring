import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Banner from "../../assets/building-banner.png";
import Admin from "../../assets/admin.png";
import Blue from "../../assets/blue.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dot from "../../assets/blue.png";

import "./_wellspring.scss";
import { Prefoooter } from "../../components/Prefooter/Prefooter";
import React, { useState, useRef, useEffect } from "react";

export const WhyWellspring = () => {
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
        <div className="col-md-12 page-shadow header-wrapper wellspring-header">
          <div className="col-md-12 bannerWS zoominheader"></div>
          <div className=" col-md-12 afer"></div>
          <div className="icon ">
            <h1>Why Wellspring College?</h1>
            <h1>
              <i class="icofont-rounded-down"></i>
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="mission-section col-md-12 flexy">
          <div className=" col-md-12 after flexy">
            <div className="col-md-2">&nbsp;</div>
            <div className="col-md-8 flexy">
              <h1 className="col-md-3">Our Mission:</h1>
              <p>
                The First Academy is a Christ-centered, college preparatory
                school whose mission is to prepare children for life as
                Christian leaders who choose character before career, wisdom
                beyond scholarship, service before self, and participation as a
                way of life.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="reasons-container">
        <center>
          <p className="col-md-7">
            Why do so many families from Orlando and Central Florida choose The
            First Academy to prepare their child for what’s next?
          </p>
          <p className="col-md-7 ">
            {" "}
            Maybe it’s because of The First Academy’s Christ-centered community,
            culture, and curriculum, and how our students graduate equipped to
            excel in all areas of life — academically, professionally,
            spiritually and socially.
          </p>
          <h2 className="col-md-5">
            <em>
              Here are 10 of the many reasons why we’re Central Florida’s first
              choi<span>ce in private C</span>hristian education:
            </em>
          </h2>
        </center>
      </div>
      <div className="ten-reasons col-md-12 flexy">
        {" "}
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-8 ">
          <div className="col-md-12 flexy">
            <div className="col-md-4">
              {" "}
              <div className="col-md-11">
                <h3 className="lightblue">
                  <span>Joyful L</span>earning
                </h3>
                <p>
                  Peek inside our classrooms, labs, and fine arts spaces, and
                  you’ll see students who are engaged and excited to be active
                  participants in their education. Content comes to life as our
                  dedicated teachers tap into their students’ innate curiosity,
                  creativity, and desire to problem solve.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              {" "}
              <div className="col-md-11">
                <h3 className="deepblue">
                  Individually Known, Loved, <span> and Val</span>ued
                </h3>
                <p>
                  Small class sizes combined with committed teachers who are
                  passionate about student success means each child at TFA is
                  individually known, loved, and valued. Gifts and talents are
                  identified and nurtured. Personalized attention is the norm,
                  not the exception.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              {" "}
              <div className="col-md-11">
                <h3 className="skyblue">
                  Christian Values <span>Demons</span>trated Daily
                </h3>
                <p>
                  We recognize that a child’s teachers play pivotal, influential
                  roles in their life — day after day, year after year. Our
                  <Link to={"#"} className="reasons-link">
                    {" "}
                    Living Curriculum{" "}
                  </Link>{" "}
                  teachers are committed to their Christian faith and values,
                  and have pledged to uphold those beliefs inside and outside of
                  the classroom, ensuring our students have role models who
                  consistently mirror Christian living, loving, and learning.
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-12 flexy mt7">
            <div className="col-md-4">
              {" "}
              <div className="col-md-11">
                <h3 className="deepblue">
                  <span>Tailored</span>Instruction
                </h3>
                <p>
                  Student needs are as unique as the individuals themselves,
                  which is why our small class sizes allow for individualized
                  attention.{" "}
                  <Link to={"#"} className="reasons-link">
                    Enrichment classes
                  </Link>
                  are available for students in grades 1-5 who have been
                  identified as academically talented or gifted, and for Middle
                  and Upper School students, our{" "}
                  <Link to={"#"} className="reasons-link">
                    Accelerated Pathways{" "}
                  </Link>
                  offers dual enrollment, Advanced Placement, and concurrent
                  course opportunities.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              {" "}
              <div className="col-md-11">
                <h3 className="skyblue">
                  <span> Experie</span>ntial Education
                </h3>
                <p>
                  Students learn best by doing, which is why we incorporate
                  experiential learning into the curriculum, from preschool to
                  senior year. Lower school’s Full STEAM Ahead Fridays take an
                  interdisciplinary approach to hands-on creation. Our
                  <Link to={"#"} className="reasons-link">
                    aquaponics{" "}
                  </Link>
                  facility is an interactive experience for learning about
                  biology, chemistry, marine biology, and sustainability.
                  Mission work and field trips allow for immersion and
                  engagement.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              {" "}
              <div className="col-md-11">
                <h3 className="lightblue2">
                  <span>Fine Ar</span>ts Enrichment
                </h3>
                <p>
                  From the{" "}
                  <Link to={"#"} className="reasons-link">
                    visual and performing arts{" "}
                  </Link>
                  to electives like Mandarin and agricultural science, students
                  can pursue interests, passions, and curiosities. Creativity is
                  expressed through everything from performing in theatre class
                  to creating original content for Raw Footage, the Upper
                  School’s broadcast program. Professional pursuits are explored
                  through electives, clubs, organizations, service, and field
                  trips.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 flexy mt7">
            <div className="col-md-4">
              {" "}
              <div className="col-md-11">
                <h3 className="deepblue">
                  Competitive Athletics from <span>K4-12th </span>Grade
                </h3>
                <p>
                  Go Royals! TFA offers{" "}
                  <Link to={"#"} className="reasons-link">
                    32 sports at the Upper School level{" "}
                  </Link>
                  with fun and competition starting as early as Preschool with
                  flag football and cheer. Our exceptional athletic facilities
                  include an athletic complex, stadium, and tennis center.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              {" "}
              <div className="col-md-11">
                <h3 className="lightblue2">
                  Service is Part of Our<span> Culture</span>
                </h3>
                <p>
                  As a Christian community, emphasis is placed on serving
                  others. We start affirming service before self in Preschool as
                  our youngest Royals learn about helping others. Last year
                  alone, 21,102 volunteer hours were served by Upper School
                  students.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              {" "}
              <div className="col-md-11">
                <h3 className="skyblue">
                  <span>College </span>Readiness
                </h3>
                <p>
                  In addition to ensuring graduates are academically,
                  emotionally, socially, and spiritually ready for college, our
                  dedicated{" "}
                  <Link to={"#"} className="reasons-link">
                    College Guidance{" "}
                  </Link>
                  team helps students find best fit schools and assists with
                  navigating the college application process. Graduating seniors
                  have a 100% college acceptance rate and earn millions of
                  dollars in scholarships annually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <section>
        <div className="campus-tour col-md-12 flexy">
          <div className=" col-md-12 after flexy">
            <div className="col-md-12">
              <center>
                <h1>
                  <i class="icofont-bulb-alt"></i>
                </h1>
                <h1>See our academics in action.</h1>
                <button>SCHEDULE A CAMPUS TOUR</button>
              </center>
            </div>
          </div>
        </div>
      </section>
      <section className="page-content flexy ">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-8">
          <div className="col-md-11">
            <div className="page-menu mt4">
              <ul className="list-inline list-unstyled">
                <li className="list-inline-item">
                  <Link to={#} className="link-alteration">
                    How to Apply
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
          </div>
        </div>
      </section>
      <section className="module1 contentt contact-form prefooter-container">
        <Prefoooter />
      </section>
    </>
  );
};
