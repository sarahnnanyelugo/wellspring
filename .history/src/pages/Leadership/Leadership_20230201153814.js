import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./_leadership.scss";
import React, { useState, useRef, useEffect } from "react";
import Admin from "../../assets/admin.png";
import Principal from "../../assets/principal.png";
import Speech from "../../assets/speech2.png";
import { LeadersProfile } from "../../components/LeadersProfile/LeadersProfile";
import { Prefoooter } from "../../components/Prefooter/Prefooter";

export const Leadership = ({ name, ...props }) => {
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
        <div className="col-md-12 page-shadow  header-wrapper">
          <div className="col-md-12 bannerL zoominheader"></div>
          <div className=" col-md-12 after"></div>
          <div className="icon">
            <h1>Leadership</h1>
            <h1>
              <i class="icofont-rounded-down"></i>
            </h1>
          </div>
        </div>
      </section>
      <section className="page-content flexy ">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10">
          <div className="col-md-11">
            <div className="breadcrum" style={{ marginTop: "-30px" }}>
              {" "}
              <Breadcrum currentPage="About" pageUrl={"/phylosophy"} />
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
            <div className="col-md-12 flexy flexyM mt5">
              <div className="col-md-4 col-4">
                {" "}
                <LeadersProfile
                  profileInfo="Mr. Will Cohen was born and raised in Orlando and has been serving at The
                   First Academy since June 2012. Mr. Cohen served three years as the Assistant Director 
                   of Athletics and Assistant Baseball Coach and now serves as the Director of Athletics.
                   Mr. Cohen spent seven years at Wellspring College as a student, graduating with Wellspring College???s
                    Class of 2008. After graduation, Mr. Cohen received his Bachelor of Science in Sports
                     Administration from Samford University in Birmingham, AL. From Mr. Cohen???s experience
                      as a student and staff member; the teachers, coaches, and administrators have had and
                       continue to have an immeasurable impact on his life. He is blessed to partner with
                       elite coaches and staff to encourage our student-athletes to not only advance their
                        athletic abilities but to hold to high academic standards and continue to develop 
                        their personal relationships with Jesus Christ.

"
                  profileImg={Admin}
                  profilePortfolio="DIRECTOR OF ATHLETICS"
                  profilePortfolioInner="Director of Athletics"
                  profileQualification="PH.D"
                  profileName="Mrs Lawson Albert"
                />
              </div>
              <div className="col-md-4">
                {" "}
                <LeadersProfile
                  profileInfo="some cool information about a certain staff displayed here"
                  profileImg={Principal}
                  profilePortfolio="HEAD TEACHER"
                  profilePortfolioInner="Head Teacher"
                  profileQualification="MEA"
                  profileName="Mrs Lilly Sanders "
                />
              </div>
              <div className="col-md-4">
                {" "}
                <LeadersProfile
                  profileInfo="some cool information about a certain staff displayed here"
                  profileImg={Speech}
                  profilePortfolio="CHIEF ADMINISTRATOR"
                  profilePortfolioInner="Chief Administrator"
                  profileQualification="PH.D"
                  profileName="Ms Peter Waters"
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
      <section className="module1 contentt contact-form prefooter-container">
        <Prefoooter />
      </section>{" "}
    </>
  );
};
