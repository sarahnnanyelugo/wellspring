import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./_leadership.scss";
import React, { useState, useRef, useEffect } from "react";
import Admin from "../../assets/admin2.png";
import Principal from "../../assets/principal.png";
import Speech from "../../assets/speech2.png";
import { LeadersProfile } from "../../components/LeadersProfile/LeadersProfile";

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
                  <Link to={"/welcome"} className="link-alteration">
                    Welcome
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to={"/philosophy"} className="link-alteration">
                    Phylosophy
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to={"/leadership"} className="link-alteration">
                    Leadership
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to={"/calendar"} className="link-alteration">
                    Calendar{" "}
                    <span>
                      <i class="icofont-caret-down"></i>{" "}
                    </span>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to={"contact-us"} className="link-alteration">
                    Contact
                    <span>
                      <i class="icofont-caret-down"></i>{" "}
                    </span>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to={"/faith"} className="link-alteration">
                    Faith
                    <span>
                      <i class="icofont-caret-down"></i>{" "}
                    </span>
                  </Link>
                </li>
                <li className="list-inline-item">
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
            <div className="col-md-12 flexy">
              <div className="col-md-4">
                {" "}
                <LeadersProfile
                  profileInfo="some bogous information about a certain staff displayed here"
                  profileImg={Admin}
                  profilePortfolio="Ms Stonecold Rivers"
                  profileQualification="PH.D"
                  profileName="Mrs Lawson Albert"
                />
              </div>
              <div className="col-md-4">
                {" "}
                <LeadersProfile
                  profileInfo="some bouguous information about a certain staff displayed here"
                  profileImg={Principal}
                  profilePortfolio="Ms Stonecold Rivers"
                  profileQualification="MEA"
                  profileName="Mrs Lawson Albert"
                />
              </div>
              <div className="col-md-4">
                {" "}
                <LeadersProfile
                  profileInfo="some bouguous information about a certain staff displayed here"
                  profileImg={Speech}
                  profilePortfolio="Ms Stonecold Rivers"
                  profileQualification="PH.D"
                  profileName="Ms Lawson Albert"
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
    </>
  );
};
// export const Example=()=> {
//   return (
//     <>
//       {[ "end"].map((placement, idx) => (
//         <Leadership key={idx} placement={placement} name={placement} />
//       ))}
//     </>
//   );
// }
