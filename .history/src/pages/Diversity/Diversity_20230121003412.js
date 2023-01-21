import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Banner from "../../assets/building-banner.png";
import Admin from "../../assets/admin.png";
import Blue from "../../assets/blue.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dot from "../../assets/blue.png";

import "./_diversity.scss";
import { Prefoooter } from "../../components/Prefooter/Prefooter";
import React, { useState, useRef, useEffect } from "react";

export const Diversity = () => {
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
          <div className="col-md-12 bannerDiv zoominheader"></div>
          <div className=" col-md-12 after"></div>
          <div className="icon ">
            <h1>Diversity</h1>
            <h1>
              <i class="icofont-rounded-down"></i>
            </h1>
          </div>
        </div>
      </section>

      <section className="page-content flexy ">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-8 diversity-container">
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
            <h2></h2>
            <p>
              Our mission at Wellspring College is to prepare children for life
              as Christian leaders who choose{" "}
              <strong>
                character before career, wisdom beyond scholarship, service
                before self, and participation as a way of life.
              </strong>{" "}
              This is thoroughly a spiritual endeavor empowered and sustained by
              God and executed by us through…
            </p>
            <br />
            <h4 className="page-headings">
              <em>The Head</em>
            </h4>
            <p>
              “We will engage the head so students know the truth.” – Romans
              <br />
              <br />
              Spiritual formation begins with our ability to grasp what God has
              revealed about himself in the world and in his word. Everything
              students participate in will aim at exposing them to the truth of
              God’s word. Whether through explicit study in small groups,
              <Link to={"/chapel"} className="link-alteration2"> chapel, </Link>and Bible classes or through the normal
              course of academic and extracurricular activities students will be
              taught God’s truth.
            </p>
            <br />

            <br />
            <h4 className="page-headings">
              <em>The Heart</em>
            </h4>
            <p>
              “We will awaken the heart so students love the truth.” – Timothy
              1:5 1:4
              <br />
              <br />
              Knowing the truth is critical to spiritual formation but a love
              for God and his truth is the goal of all our effort. We believe a
              love for God and his truth best happens “life-on-life” in
              structured ways both inside and outside the classroom as our
              “living curriculum” passes on a love for Jesus to our students.
            </p>
            <br />
            <h4 className="page-headings">
              <em>The Hands</em>
            </h4>
            <p>
              “We will equip the hands so that students live and share the
              truth.” – Ephesians 2:10
              <br />
              <br />A genuine love for God necessarily results in a heart-felt
              love for people. We seek to model this by creating avenues for
              students to grow in their love for others as they bless others. We
              accomplish this primarily through a variety of service
              opportunities, mission experiences, evangelism training, and
              leadership development opportunities while students are enrolled
              at TFA.
            </p>
            <br />
            <h4 className="page-headings">
              <em>The Habits</em>
            </h4>
            <p>
              “We will shape the habits so students walk in the truth.” – 3 John
              1:4
              <br />
              <br />
              It is as students walk in the truth long after graduation that the
              real fruit of our efforts is seen. We believe active participation
              in the life of a local church is the key indicator of a love for
              God and people therefore we will promote a culture of church
              participation among our students and their families. Partnering
              with parents is a key component as we wholeheartedly anticipate
              that our students will walk in the truth their entire lives.
            </p>

            <div className="col-md-12 prayer-container">
              <h1>
                <i class="icofont-quote-left"></i>
              </h1>
              <p>
                <em>
                  “When we say our prayers in the evening, we always include our
                  TFA family. So, I just wanted to let each of you know that you
                  are appreciated and your dedication to your students and to
                  TFA does not go unnoticed. Our family is so blessed to be part
                  of the larger TFA Family. May God continue to bless and
                  protect each of you.” – TFA Parent
                </em>
              </p>
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
