import './_search-bar.scss'

 // Close the dropdown menu if the user clicks outside of it
 

export const SearchBar = () => {

  return (
    <>
      <div class="main">
        {/* <i class="icofont-search-1 cool-link"></i> */}
        <div class="dropdown">
          <button onclick="myFunction()" class="dropbtn">
            Drop
          </button>
          <div id="myDropdown" class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    </>
  );
}
