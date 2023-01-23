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
 const [isActiveDrop, setIsActiveDrop] = useState(false);
 const onClick = () => {
  console.log
  setIsActive(!isActive);
 }

 useEffect(() => {
   const pageClickEvent = (e) => {
     setIsActiveDrop(!isActiveDrop);
       console.log(isActiveDrop,e.target);
  
       if(isActiveDrop) {
        setIsActive(false);
        window.removeEventListener("click", pageClickEvent);
       }

   };

   // If the item is active (ie open) then listen for clicks
   if (isActive) {
     window.addEventListener("click", pageClickEvent);
   }
   else
   return () => {
     window.removeEventListener("click", pageClickEvent);
   };
 }, [isActive]);

  return (
    <>
      <div className="menu-container">
        <h6 onClick={()=>{onClick()}} className="menu-trigger">
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