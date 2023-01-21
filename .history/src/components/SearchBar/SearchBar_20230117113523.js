import './_search-bar.scss'
import React, { useState, useRef, useEffect } from "react";

 // Close the dropdown menu if the user clicks outside of it
 

export const SearchBar = () => {
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
      {/* <div class="main">
        <i class="icofont-search-1 cool-link"></i>
        
      </div> */}
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <i class="icofont-search-1 cool-link"></i>
        
        </button>
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
}
