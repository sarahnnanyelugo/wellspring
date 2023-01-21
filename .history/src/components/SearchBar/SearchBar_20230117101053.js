import './_search-bar.scss'
 import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export const SearchBar = () => {

  return (
    <>
      <div class="main">
        {/* <i class="icofont-search-1 cool-link"></i> */}
        <DropdownButton
          align="end"
          title="Dropdown end"
          id="dropdown-menu-align-end"
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        
        </DropdownButton>
      </div>
    </>
  );
}
