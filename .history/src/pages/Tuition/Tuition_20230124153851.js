import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Banner from "../../assets/building-banner.png";
import Admin from "../../assets/admin.png";
import Blue from "../../assets/blue.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dot from "../../assets/blue.png";

import "./_tuition.scss";
import { Prefoooter } from "../../components/Prefooter/Prefooter";
import React, { useState, useRef, useEffect } from "react";

export const Tuition = () => {
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
          <div className="col-md-12 bannerTu zoominheader"></div>
          <div className=" col-md-12 after2"></div>
          <div className="icon ">
            <h6>TUITION</h6>
            <h2>Investing in Wellspring College Education</h2>
            <h1>
              <i class="icofont-rounded-down"></i>
            </h1>
            <small>
              As a parent, you understand how important it is for your child to
              feel seen, valued, loved, and understood in their learning
              environment. You want them to be{" "}
              <Link to={"#"} className="banner-link">
                challenged academically,
              </Link>
              and supported emotionally and socially.
            </small>
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
            <h2 className="page-headings mb3">Admissions Process</h2>
            <strong>
              Applications are now live for the 2023-2024 school year.
            </strong>
            <p>
              The Admissions area of our website is designed to make the
              application process as simple as possible using our Online
              Application.
            </p>
            <h2 className="page-headings mb3">When to Apply</h2>
            <p>
              The First Academy encourages families to begin the application
              process as soon as possible. The application must be completed and
              supplemental application forms downloaded, completed, and returned
              to the admissions office.{" "}
              <strong>A non-refundable fee of $155</strong>must be submitted
              with each application.
            </p>
            <p>
              Getting ready to apply? View the{" "}
              <Link to={"#"} className="random-link">
                <span></span> Admissions Criteria <span></span>
              </Link>
              and the <span></span>
              <Link to={"#"} className="random-link">
                Admissions Checklist.{" "}
              </Link>
            </p>
            <h2 className="page-headings mb3 mt3">
              Creating an Online Application
            </h2>
            <p>
              To begin the Online Application process, <span></span>
              <Link to={"#"} className="random-link">
                Create an Accoun
              </Link>
              t on the Application page. Then log into your account and provide
              the information necessary to complete the{" "}
              <strong>Create A New Student Application</strong>for your child.
              At this point, you should be able to login and out of your account
              and access your child’s application at any time by selecting the
              Student’s Name.
            </p>
            <p>
              After submitting the application, you will be able track online
              your admissions status at the school by logging into your account.
              There you will be able to print the completed applications and
              monitor when the school receives supplemental forms.
            </p>
            <p>
              Starting the Application? Here are{" "}
              <Link to={"#"} className="random-link">
                Online Application Step-by-Step Instructions.{" "}
              </Link>
            </p>
            <button className="random-button">START MY APPLICATION</button>
            <h2 className="page-headings mb3 mt3">Adding Students</h2>
            <p>
              If you currently have a child enrolled at The First Academy,
              please follow the{" "}
              <Link to={"#"} className="random-link">
                instructions below{" "}
              </Link>
              for submitting an additional child’s application.
            </p>
            <h2 className="page-headings mb3 mt3">
              We Look Forward to Meeting You
            </h2>
            <p>
              {" "}
              If you have not already done so, please make an appointment to
              visit our school. We would like to meet you and provide a tour of
              our campus. Please visit our{" "}
              <Link to={"/admissions-events"} className="random-link">
                Admissions Events page{" "}
              </Link>
              to schedule a Personal Tour or attend an Admissions Open House
              event.
            </p>
            <p>
              We are here to assist you through the Admissions process. If you
              have any questions, please feel free to contact us.
            </p>
            <p>Sincerely,</p>
            <h6>
              {" "}
              <Link to={"/admissions-team"} className="random-link">
                The Admissions Team{" "}
              </Link>
            </h6>
            <p>407-206-8602</p>
            <small>
              <em>
                * The First Academy admits students of any race, color, national
                and ethnic origin to all the rights, privileges, programs, and
                activities generally accorded or made available to students at
                the school. The First Academy does not discriminate on the basis
                of race, color, national and ethnic origin in administration of
                its educational policies, admissions policies, tuition
                assistance, and athletic or other school administered programs.
              </em>
            </small>
          </div>
        </div>
      </section>
      <section className="module1 contentt contact-form prefooter-container">
        <Prefoooter />
      </section>
    </>
  );
};
