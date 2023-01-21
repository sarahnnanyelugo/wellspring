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
       
      </div>
    </>
  );
}
