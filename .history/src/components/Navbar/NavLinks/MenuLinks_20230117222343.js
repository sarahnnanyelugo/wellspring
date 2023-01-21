import "./_menu-links.scss";
import React, { useState, useRef, useEffect } from "react";

// Close the dropdown menu if the user clicks outside of it
import { useDetectOutsideClick } from "./useDetectOutsideClick";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function MenuLinks() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    setIsActive(!isActive);
    console.log("Clicked", isActive);
  };

  useEffect(() => {
    const pageClickEvent = (e) => {
      setIsActive(!isActive);
      setTimeout(()=>{
        window.removeEventListener("click", pageClickEvent);
      },200)
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
      <div className="menu-container">
        <h6
          onClick={() => {
            onClick();
          }}
          className="menu-trigger"
        >
          <i class="icofont-search-1 cool-link"></i>
        </h6>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <div className="search-container">
            <h1>This is a dropdowm menu</h1>
          </div>
        </nav>
      </div>
    </>
  );
}
