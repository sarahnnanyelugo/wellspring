import "./_nav-links.scss";
import React, { useState, useRef, useEffect } from "react";

// Close the dropdown menu if the user clicks outside of it

export const NavLinks = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  
  useEffect(() => {}, [isActive]);





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
