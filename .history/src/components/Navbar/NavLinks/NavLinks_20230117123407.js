import "./_nav-links.scss";
import React, { useState, useRef, useEffect } from "react";

// Close the dropdown menu if the user clicks outside of it

export const NavLinks = () => {
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

const pageClickEvent = (e) => {
  // If the active element exists and is clicked outside of
  if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
    setIsActive(!isActive);
  }
};



  return (
    <>
      <div className="menu-container">
        <h5 onClick={onClick} className="menu-trigger">
          <i class="icofont-search-1 cool-link"></i>
        </h5>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="/messages">Messages</a>
            </li>
            <li>
              <a href="/trips">Trips</a>
            </li>
            <li>
              <a href="/saved">Saved</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
