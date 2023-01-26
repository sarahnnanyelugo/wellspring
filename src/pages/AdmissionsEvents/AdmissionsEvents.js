import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";

import "./_admissions-events.scss";
import { Prefoooter } from "../../components/Prefooter/Prefooter";
import React, { useState, useRef, useEffect } from "react";
import { EventsTab } from "./EventsTab/EventsTab";

export const AdmissionsEvents = () => {
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
          <div className="col-md-12 bannerAd zoominheader"></div>
          <div className=" col-md-12 after"></div>
          <div className="icon ">
            <h1>Admissions Events</h1>
            <p>Schedule your Wellspring College Experience today!</p>
            <button className="random-button">RSVP TODAY</button>
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
            <div className="page-menu mt4">
              <ul className="list-inline list-unstyled">
                <li className="list-inline-item">
                  <Link to={"/how-to-apply"} className="link-alteration">
                    How to Apply
                    <span>
                      <i class="icofont-caret-down"></i>{" "}
                    </span>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to={"/tuition"} className="link-alteration">
                    Tuition
                  </Link>
                </li>
                <li className="list-inline-item mobile-li">
                  <Link to={"/campus-visits"} className="link-alteration">
                    Campus Visits
                  </Link>
                </li>
                <li className="list-inline-item mobile-li">
                  <Link to={"/admissions-events"} className="link-alteration">
                    Admissions Events
                    <span>
                      <i class="icofont-caret-down"></i>{" "}
                    </span>
                  </Link>
                </li>
                <li className="list-inline-item mobile-li">
                  <Link to={"/wait-pool"} className="link-alteration">
                    Wait Pool
                  </Link>
                </li>
                <li className="list-inline-item mobile-li">
                  <Link to={"/faqs"} className="link-alteration">
                    FAQs
                    <span>
                      <i class="icofont-caret-down"></i>{" "}
                    </span>
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
                            <Link to={"/tuition"} className="link-alteration">
                              Tuition
                            </Link>
                          </li>
                          <li className=" web-li">
                            <Link
                              to={"/campus-visits"}
                              className="link-alteration"
                            >
                              Campus Visits
                              <span>
                                <i class="icofont-caret-down"></i>{" "}
                              </span>
                            </Link>
                          </li>
                          <li className=" web-li">
                            <Link
                              to={"/admissions-events"}
                              className="link-alteration"
                            >
                              Admissions Events
                              <span>
                                <i class="icofont-caret-down"></i>{" "}
                              </span>
                            </Link>
                          </li>
                          <li className=" web-li">
                            <Link to={"/wait-pool"} className="link-alteration">
                              Wait Pool
                              <span>
                                <i class="icofont-caret-down"></i>{" "}
                              </span>
                            </Link>
                          </li>
                          <li className=" web-li">
                            <Link to={"/faqs"} className="link-alteration">
                              FAQs
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/health-safety"}
                              className="link-alteration"
                            >
                              New Family Information
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </li>
              </ul>
            </div>

            <p>
              There’s nothing like seeing The First Academy in person. It goes
              beyond our buildings – we want you to experience our culture. When
              you walk our hallways, you’ll hear how teachers interact with
              their students, you’ll see how our core values are lived out, and
              you’ll understand why TFA is the right educational choice for your
              family.
            </p>

            <p>
              The First Academy Admissions team provides prospective families
              with personal tours, both on-campus and virtually, along with
              class visits and open house events.
            </p>
            <p>
              Due to current demand, tours and applications for the 2022-2023
              school year are limited to availability in specific grade levels
              and divisions.
            </p>
            <p>
              Applications for the 2023-2024 school year are now open. Families
              interested in applying for the upcoming school year are encouraged
              to schedule a Personal Tour or attend an Admissions Open House
              event at their earliest convenience.
            </p>
            <p>
              Have an Admissions question? We are here to help. Call
              407-206-8602 or email at{" "}
              <Link to={"/"} className="random-link">
                admissions@wellspring.org.
              </Link>
            </p>
            <h2 className="page-headings mt2 mb1">
              RSVP for an Admissions Event or Personal Tour
            </h2>
            <div className="col-md-12 info-container mt7">
              <center>
                <small>
                  Note: Your privacy is very important to us. To better serve
                  you, the form information you enter is recorded in real time.
                </small>
              </center>
            </div>
            <EventsTab />
          </div>
        </div>
      </section>
      <section className="module1 contentt contact-form prefooter-container">
        <Prefoooter />
      </section>
    </>
  );
};
