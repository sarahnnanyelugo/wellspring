import './_search-bar.scss'
 function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
 }

 // Close the dropdown menu if the user clicks outside of it
 window.onclick = function (event) {
   if (!event.target.matches(".dropbtn")) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains("show")) {
         openDropdown.classList.remove("show");
       }
     }
   }
 };

export const SearchBar = () => {

  return (
    <>
      <div class="main">
        {/* <i class="icofont-search-1 cool-link"></i> */}
        <div class="dropdown">
          <button onclick="myFunction()" class="dropbtn">
            Dropdown
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
