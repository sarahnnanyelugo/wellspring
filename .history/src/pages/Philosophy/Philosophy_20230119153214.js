import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Banner from "../../assets/building-banner.png";
import Admin from "../../assets/admin.png";
import Blue from "../../assets/blue.png";
import Badge from "../../assets/badge.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Merged from "../../assets/merged2.png";

import "./_philosophy.scss";
import { Prefoooter } from "../../components/Prefooter/Prefooter";
import React, { useState, useRef, useEffect } from "react";

export const Philosophy = () => {
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
      <section className="col-md-12 flexy page-background">
        <div className="col-md-12 page-shadow ">
          <div className="col-md-12 banner"></div>
          <div className=" col-md-12 after"></div>
          <div className="icon">
            <h1>Philosophy</h1>
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
              <Breadcrum currentPage="About" pageUrl={"/phylosophy"} />
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
                            <Link to="#" className="link-alteration">
                              Health & Safety
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="link-alteration">
                              Media
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="link-alteration">
                              News & Stories
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="link-alteration">
                              School Board
                              <span>
                                <i class="icofont-caret-down"></i>{" "}
                              </span>
                            </Link>
                            <ul className="list-unstyled inner-list">
                              <li>
                                <Link to="#" className="link-alteration">
                                  State of the School
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="link-alteration">
                                  Strategic Plan
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="link-alteration">
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
            <h1 className="page-headings mb3">
              Definitively Christ-Centered, Distinctly College-Prep
            </h1>
            <div className="col-md-12 flexy flexyM">
              <div className="col-md-9 col-7" style={{float}}>
                <p>
                  {" "}
                  The First Academy is a Christ-centered, college-preparatory
                  school serving over 1,200 Central Florida students across four
                  academic divisions – Upper School (9th-12th), Middle School
                  (6th-8th), Lower School (Preschool-5th), and the Extended
                  Educational Programs (Homeschool and Special Needs). Since our
                  opening in 1987, TFA has continued to grow the academic, fine
                  arts, and athletic programs that have elevated its students to
                  the highest levels of achievement. More importantly, though,
                  as a private school TFA has helped develop its students’
                  strength of character, leading these young men and women to
                  serve others in their own community and across the globe. The
                  First Academy boasts a 100% college acceptance rate for its
                  graduating seniors, who have
                </p>
              </div>
              <div className="col-md-3 col-5">
                {" "}
                <img className="col-md-12" src={Badge} alt="Scholar" />
              </div>
            </div>
            <h1 className="page-headings mb3">
              A Vibrant, Gospel-Centered School Culture
            </h1>
            <p>
              The items in the document linked below are designed to bolster the
              relationship between home, church, and school. These items do not
              define who is and who is not a Christ-follower. They are not a
              measure of one’s spiritual maturity. They are simply a set of
              principles that guide our partnership with parents in raising the
              next generation of Christian leaders and maintaining a healthy
              school culture marked by joy, gratitude, and kindness. When
              someone makes a mistake, we will not judge their relationship with
              Jesus. Similarly, when certain behaviors require consequences, we
              will not describe those administering the consequences as
              “unchristian” or “unkind” for following through as outlined in the
              school handbook and in this document. We strive to have a healthy
              culture where what we believe, say, and do all align. Read our
              full document, The Most Important Elements: Gospel-Centered School
              Culture.
              <br /> <br />
            </p>

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
      <div className="col-md-12 prospect flexy mt6">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-8 flexy">
          <div className="col-md-4">
            <img className="col-md-11 " src={Merged} alt="Scholar" />
          </div>
          <div className="col-md-4">
            <h1>
              <em>
                {" "}
                Searching for the Right Private Christian School for Your
                Family?
              </em>
            </h1>
          </div>
          <div className="col-md-4 mt5">
            <div className="col-md-9">
              <h4>
                <em>Take a closer look with our Parent Info Packet</em>
              </h4>
              <button>
                <em>DOWNLOAD NOW</em>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="module1 contentt contact-form prefooter-container">
        <Prefoooter />
      </section>
    </>
  );
};
