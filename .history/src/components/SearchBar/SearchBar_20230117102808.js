import './_search-bar.scss'

 // Close the dropdown menu if the user clicks outside of it
 

export const SearchBar = () => {
 const dropdownRef = useRef(null);
 const [isActive, setIsActive] = useState(false);
 const onClick = () => setIsActive(!isActive);

  return (
    <>
      {/* <div class="main">
        <i class="icofont-search-1 cool-link"></i>
        
      </div> */}
      
    </>
  );
}
