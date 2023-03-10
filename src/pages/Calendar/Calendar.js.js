import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Banner from "../../assets/building-banner.png";
import Admin from "../../assets/admin.png";
import Blue from "../../assets/blue.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dot from "../../assets/blue.png";

import "./_calendar.scss";
import { Prefoooter } from "../../components/Prefooter/Prefooter";
import React, { useState, useRef, useEffect } from "react";

export const Calendar = () => {
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
      <section className="page-content flexy ">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-8">
          <div className="col-md-11">
            <div className="breadcrum" style={{ marginTop: "50px" }}>
              {" "}
              <Breadcrum
                page1="About"
                currentPage="Events"
                pageUrl={"/events"}
              />
            </div>

            <ul className="list-inline list-unstyled">
              <li className="list-inline-item">
                <Link to={"/"} className="link-alteration">
                  2022-2023 Annual Calendar
                </Link>
                |
              </li>
              <li className="list-inline-item">
                <Link to={"/"} className="link-alteration">
                  2023-2024 Main Dates |
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"} className="link-alteration">
                  Subscribe to Calenders
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="module1 contentt contact-form prefooter-container">
        <Prefoooter />
      </section>
    </>
  );
};
