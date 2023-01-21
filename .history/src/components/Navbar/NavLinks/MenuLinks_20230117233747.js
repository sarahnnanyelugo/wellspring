import "./_menu-links.scss";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Close the dropdown menu if the user clicks outside of it
import { useDetectOutsideClick } from "./useDetectOutsideClick";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function MenuLinks(props) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const pageClickEvent = (e) => {
      setIsActive(false);
      setTimeout(()=>{
        window.removeEventListener("click", pageClickEvent);
      },200)
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      setTimeout(() => {
        window.addEventListener("click", pageClickEvent);
      }, 200);
    }
    return () => {
      // window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  return (
    <>
      <div className="menu-container">
        <h6
          onClick={() => {
            onClick();
          }}
          className="menu-trigger "
        >
          {props.pageNav}{" "}
          <span>
            {" "}
            <i class="icofont-caret-down"></i>
          </span>
        </h6>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <div className="menu-container">
            <ul className="list-unstyled">
              <li><Link to ></Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
