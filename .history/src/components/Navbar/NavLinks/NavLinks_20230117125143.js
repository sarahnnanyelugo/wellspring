import "./_nav-links.scss";
import React, { useState, useRef, useEffect } from "react";

// Close the dropdown menu if the user clicks outside of it

export const NavLinks = () => {
 * @param {React.node} el
 * @param {boolean} initialState
 */
export const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = (e) => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (isActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};



  return (
    <>
      <div className="menu-container">
        <h6 onClick={onClick} className="menu-trigger">
          <i class="icofont-search-1 cool-link"></i>
        </h6>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <div className="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search" />
            </form>
          </div>
        </nav>
      </div>
    </>
  );
};
