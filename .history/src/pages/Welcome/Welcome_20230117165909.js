import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Banner from "../../assets/building-banner.png";
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
      <div className="col-md-12 flexy page-background">
        <div className=" col-md-12">
          <img className="col-md-12 banner" src={Banner} alt="Scholar" />
        </div>
      </div>

      <div className="page-content flexy">
        <div className="col-md-3">&nbsp;</div>
        <div className="col-md-8">
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
                <div className="menu-container22">
                  <h6 onClick={onClick} className="menu-trigger">
                    More
                  </h6>
                  <nav
                    ref={dropdownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}
                  >
                    <div className="search-container">
                      <form action="/action_page.php">
                        <input
                          type="text"
                          placeholder="Search.."
                          name="search"
                        />
                      </form>
                    </div>
                  </nav>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="prefooter-container">
        <Prefoooter />
      </div> */}
    </>
  );
};
