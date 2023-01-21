import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Banner from "../../assets/building-banner.png";
import Admin from "../../assets/admin.png";
import Blue from "../../assets/blue.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dot from "../../assets/blue.png";
import { AppTab } from "../../components/AppTab/AppTab";
import { BlogTab } from "./BlogTab/BlogTab";
import "./_welcome.scss";
import { Prefoooter } from "../../components/Prefooter/Prefooter";
import React, { useState, useRef, useEffect } from "react";

export const Welcome = () => {
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
      {/* <div className="col-md-12 page-container flexy">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-8 ">
          <div className="col-md-12 page-top flexy">
            <div>
              <h1 className="page-header">Welcome</h1>

              <div className="breadcrum" style={{ marginTop: "-30px" }}>
                {" "}
                <Breadcrum page1="About" currentPage="Welcome" />
              </div>
            </div>
            <div className="col-md-8">&nbsp;</div>
            <div className="flexy navigations">
              <Link to={"/contact"}>
                {" "}
                <button>Previous</button>
              </Link>
              <Link to={"/back-to-school"}>
                {" "}
                <button>Next</button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className="col-md-12 flexy page-background ">
        <div className="col-md-12 page-shadow">
          <img
            className="col-md-12 banner containa"
            src={Banner}
            alt="Scholar"
          />
          <div className=" col-md-12 after"></div>
          <div className="icon">
            <h1>Welcome</h1>
            <h1>
              <i class="icofont-rounded-down"></i>
            </h1>
          </div>
        </div>
      </div>

      <div className="page-content flexy ">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-8">
          <div className="col-md-11">
            <div className="breadcrum" style={{ marginTop: "-30px" }}>
              {" "}
              <Breadcrum page1="About" currentPage="Welcome" />
            </div>
            <div className="page-menu">
              <ul className="list-inline list-unstyled">
                <li className="list-inline-item">
                  <Link to="#" className="link-alteration">
                    Welcome
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="link-alteration">
                    Phylosophy
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="link-alteration">
                    Leadership
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="link-alteration">
                    Calendar{" "}
                    <span>
                      <i class="icofont-caret-down"></i>{" "}
                    </span>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="link-alteration">
                    Contact
                    <span>
                      <i class="icofont-caret-down"></i>{" "}
                    </span>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="link-alteration">
                    Faith
                    <span>
                      <i class="icofont-caret-down"></i>{" "}
                    </span>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="link-alteration">
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

            <h1 className="page-headings mb3">What Makes a Great School?</h1>
            <h4 className="page-headings">A Message from the Head of School</h4>
            <p>
              <strong>
                All parents want their child to attend a great school – not just
                a good school. When my wife and I moved our family to Orlando
                several years ago, we found a great school in The First Academy.
                On the first day of the new school year, I watched with
                apprehension from a second-story window as my middle child
                walked onto a playground crowded with unfamiliar faces. With a
                lump in my throat, I watched as he stood alone with his hands in
                his pockets, obviously filled with uncertainty and nearly
                paralyzed by fear. What happened next told me much about what
                makes The First Academy a great school. It turns out that I
                wasn’t the only one observing. His teacher saw the worry on his
                small, furrowed brow, too. She approached my son, took him by
                the hand, and walked him toward the monkey bars. I could see her
                bend down and introduce him to several boys who were playing
                together. Within moments, those boys were welcoming my son into
                their fold, and they have since become treasured friends. That
                moment was powerful for me as I observed a great teacher in
                action. Great teachers understand that true education involves
                more than just teaching the mind – it begins with reaching the
                heart. Great teachers understand that students aren’t interested
                in finding out how much a teacher knows until they find out how
                much a teacher cares
              </strong>
            </p>
            <img className="col-md-12 banner" src={Admin} alt="Scholar" />
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
      </div>
      <section className="module1 contentt contact-form prefooter-container">
        <Prefoooter />
      </section>
    </>
  );
};
