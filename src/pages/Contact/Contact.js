import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Banner from "../../assets/building-banner.png";
import Admin from "../../assets/admin.png";
import Blue from "../../assets/blue.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dot from "../../assets/blue.png";

import "./_contact.scss";
import { Prefoooter } from "../../components/Prefooter/Prefooter";
import React, { useState, useRef, useEffect } from "react";
import Map from "../../assets/campus-map.png";
import CampusMap from "../../assets/campus-map.pdf";

export const Contact = () => {
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

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(CampusMap).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "campus_map.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <section className="col-md-12 flexy page-background ">
        <div className="col-md-12 page-shadow header-wrapper">
          <div className="col-md-12 bannerC zoominheader"></div>
          <div className=" col-md-12 after"></div>
          <div className="icon ">
            <h1>Contact us</h1>
            <h1>
              <i class="icofont-rounded-down"></i>
            </h1>
          </div>
        </div>
      </section>

      <section className="page-content flexy ">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-8 ">
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
            <div className="col-md-12 contact-container flexy mt7">
              <div className="col-md-4">
                <h1>Wellspring College</h1>
                <p>
                  25B Somide Odujinrin Street Omole Phase 2, Ikeja, Lagos.{" "}
                  <br />
                  (+234) 803 395 4138
                  <br />
                  <Link to={"/"} className="link-alteration2">
                    {" "}
                    info@wellspringcollege.org
                  </Link>
                </p>
                <img className="col-md-11 " src={Map} alt="Scholar" />
                <ul className="list-unstyled list-inline mt3">
                  <li className="list-inline-item download-btn">
                    <a href={CampusMap} target="_blank">
                      Campus Map
                    </a>
                  </li>
                  <li className="list-inline-item download-btn">
                    <button onClick={onButtonClick}>Download</button>
                  </li>
                </ul>
              </div>
              <div className="col-md-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11209.38642107324!2d3.363890335570136!3d6.632441012110957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1swellspring%20college!5e0!3m2!1sen!2sng!4v1674254777615!5m2!1sen!2sng"
                  width="100%"
                  height="600"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-md-12 cardd mt3 flexy">
              <div className="col-md-6">
                <h1>Main Phone</h1>
                <h5>P: 407-206-8600</h5>
                <h5>P: 407-206-8600</h5>
              </div>
              <div className="col-md-6">
                <h1>Human Resources</h1>
                <h6>Gloria Leeks</h6>
                <a href="#">glorialeeks@wellspringcollege.org</a>
                <h5>P: 407-206-8600</h5>
                <h5>P: 407-206-8600</h5>
              </div>
            </div>{" "}
            <div className="col-md-12 cardd mt3 flexy">
              <div className="col-md-6">
                <h2>Lower School</h2>
                <h6>Kerry Ann Cole</h6>
                <a href="#">kerryanncole@wellspringcollege.org</a>

                <h5>P: 407-206-8600</h5>
                <h5>P: 407-206-8600</h5>
              </div>
              <div className="col-md-6">
                <h2>Head of School Office</h2>
                <h6>Gissel Valois</h6>
                <a href="#">gisselvalois@wellspringcollege.org</a>
                <h5>P: 407-206-8600</h5>
                <h5>P: 407-206-8600</h5>
              </div>
            </div>{" "}
            <div className="col-md-12 cardd mt3 flexy">
              <div className="col-md-6">
                <h2>Middle School</h2>
                <h6>Kerry Ann Cole</h6>
                <a href="#">kerryanncole@wellspringcollege.org</a>

                <h5>P: 407-206-8600</h5>
                <h5>P: 407-206-8600</h5>
              </div>
              <div className="col-md-6">
                <h2>Information Technology</h2>
                <h6>Gissel Valois</h6>
                <a href="#">gisselvalois@wellspringcollege.org</a>
                <h5>P: 407-206-8600</h5>
                <h5>P: 407-206-8600</h5>
              </div>
            </div>{" "}
            <div className="col-md-12 cardd mt3 flexy">
              <div className="col-md-6">
                <h2>Upper School</h2>
                <h6>Kerry Ann Cole</h6>
                <a href="#">kerryanncole@wellspringcollege.org</a>

                <h5>P: 407-206-8600</h5>
                <h5>P: 407-206-8600</h5>
              </div>
              <div className="col-md-6">
                <h2>Public Relations</h2>
                <h6>Gissel Valois</h6>
                <a href="#">gisselvalois@wellspringcollege.org</a>
                <h5>P: 407-206-8600</h5>
                <h5>P: 407-206-8600</h5>
              </div>
            </div>{" "}
            <div className="col-md-12 cardd mt3 flexy">
              <div className="col-md-6">
                <h2>The Classical School</h2>
                <h6>Kerry Ann Cole</h6>
                <a href="#">kerryanncole@wellspringcollege.org</a>

                <h5>P: 407-206-8600</h5>
                <h5>P: 407-206-8600</h5>
              </div>
              <div className="col-md-6">
                <h2>Assistant Head of School Office</h2>
                <h6>Gissel Valois</h6>
                <a href="#">gisselvalois@wellspringcollege.org</a>
                <h5>P: 407-206-8600</h5>
                <h5>P: 407-206-8600</h5>
              </div>
            </div>{" "}
            <div className="col-md-12 cardd mt3 flexy">
              <div className="col-md-6">
                <h2>The First Hope</h2>
                <h6>Kerry Ann Cole</h6>
                <a href="#">kerryanncole@wellspringcollege.org</a>

                <h5>P: 407-206-8600</h5>
                <h5>P: 407-206-8600</h5>
              </div>
              <div className="col-md-6">
                <h2>Operations</h2>
                <h6>Gissel Valois</h6>
                <a href="#">gisselvalois@wellspringcollege.org</a>
                <h5>P: 407-206-8600</h5>
                <h5>P: 407-206-8600</h5>
              </div>
            </div>{" "}
            <div className="col-md-12 cardd mt3 flexy">
              <div className="col-md-6">
                <h2>Admissions</h2>
                <h6>Kerry Ann Cole</h6>
                <a href="#">kerryanncole@wellspringcollege.org</a>

                <h5>P: 407-206-8600</h5>
                <h5>P: 407-206-8600</h5>
              </div>
              <div className="col-md-6">
                <h2>Tuition Management</h2>
                <h6>Gissel Valois</h6>
                <a href="#">gisselvalois@wellspringcollege.org</a>
                <h5>P: 407-206-8600</h5>
                <h5>P: 407-206-8600</h5>
              </div>
            </div>{" "}
            <div className="col-md-12 cardd mt3 flexy">
              <div className="col-md-6">
                <h2>Athletics</h2>
                <h6>Kerry Ann Cole</h6>
                <a href="#">kerryanncole@wellspringcollege.org</a>

                <h5>P: 407-206-8600</h5>
                <h5>P: 407-206-8600</h5>
              </div>
              <div className="col-md-6">
                <h2>Marketing</h2>
                <h6>Gissel Valois</h6>
                <a href="#">gisselvalois@wellspringcollege.org</a>
                <h5>P: 407-206-8600</h5>
                <h5>P: 407-206-8600</h5>
              </div>
            </div>{" "}
            <div className="col-md-12 cardd mt3 flexy">
              <div className="col-md-6">
                <h2>Business Administration</h2>
                <h6>Kerry Ann Cole</h6>
                <a href="#">kerryanncole@wellspringcollege.org</a>

                <h5>P: 407-206-8600</h5>
                <h5>P: 407-206-8600</h5>
              </div>
              <div className="col-md-6">
                <h2>Development</h2>
                <h6>Gissel Valois</h6>
                <a href="#">gisselvalois@wellspringcollege.org</a>
                <h5>P: 407-206-8600</h5>
                <h5>P: 407-206-8600</h5>
              </div>
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
