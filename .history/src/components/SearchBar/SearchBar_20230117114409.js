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
      <div className="menu-container">
        <h5 onClick={onClick} className="menu-trigger">
          <i class="icofont-search-1 cool-link"></i>
        
        </h5>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
         <form>
          <input />
         </form>
        </nav>
      </div>
    </>
  );
}
