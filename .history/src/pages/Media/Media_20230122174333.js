import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Banner from "../../assets/building-banner.png";
import Admin from "../../assets/admin.png";
import Blue from "../../assets/blue.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dot from "../../assets/blue.png";

import "./_media.scss";
import { Prefoooter } from "../../components/Prefooter/Prefooter";
import React, { useState, useRef, useEffect } from "react";
import PageAccordion from "../../components/PageAccordion/PageAccordion";






export const Media = () => {
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
            <h1>Media</h1>
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





            <h1 className="page-headings">Recognitions, Branding, & Policies
</h1>

<p>The First Academy’s Media page is designed to assist the media, the public, and our vendors. Recent recognitions and current affiliations can be found below, along with the Branding Guide, the school’s official downloadable logos, vendor application, and policies related to privacy, activities and usage.

</p>
<PageAccordion   />
          </div>
        </div>
      </section>
      <section className="module1 contentt contact-form prefooter-container">
        <Prefoooter />
      </section>
    </>
  );
};
