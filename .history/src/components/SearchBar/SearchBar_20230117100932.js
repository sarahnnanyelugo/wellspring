import './_search-bar.scss'
 import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export const SearchBar = () => {

  return (
    <>
      <div class="main">
        <h5 onClick={handleClick}>
          {/* <i class="icofont-search-1 cool-link"></i> */}
          <i className={click ? "icofont-search-1" : "fas fa-bars"} />
        </h5>
        <ul className={click ? "nav-list active" : "nav-list"}></ul>
        <div className="wrapper">
          <ul className="mainMenu">
            <li className="item" id="account">
              <a href="#account" className="btn">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
