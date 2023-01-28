import "./_search-bar.scss";
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
      <div className="search-container">
        <h6 onClick={onClick} className="menu-trigger">
          <i class="icofont-search-1 cool-link"></i>
        </h6>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <div className="search-container">
            <form action="/action_page.php">
              <span>
                {" "}
                <i class="icofont-search-1"></i>
              </span>
              <input
                type="text"
                placeholder="What are you looking for?"
                name="search"
              />
            </form>
          </div>
        </nav>
      </div>
    </>
  );
};
