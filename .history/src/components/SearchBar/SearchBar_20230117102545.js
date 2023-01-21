import './_search-bar.scss'
import React, { Component } from "react";
import "./DropdownPage.css";

 // Close the dropdown menu if the user clicks outside of it
 

export const SearchBar = () => {

  return (
    <>
      <div class="main">
        {/* <i class="icofont-search-1 cool-link"></i> */}
        <select>
          <option value="fruit">Fruit</option>

          <option value="vegetable">Vegetable</option>

          <option value="meat">Meat</option>
        </select>
      </div>
    </>
  );
}
