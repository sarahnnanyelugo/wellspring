import './_search-bar.scss'


export const SearchBar = () => {
  return (
    <>
      <div class="main">
        <h5 onClick={handleClick}>
          <i class="icofont-search-1 cool-link"></i>
        </h5>

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
