import './_search-bar.scss'


export const SearchBar = () => {
  return (
    <>
      <div class="main">
        <h5>
          <i class="icofont-search-1 cool-link"></i>
        </h5>

        <div className="wrapper">
          <ul className="mainMenu">
            <li className="item" id="account">
              <a href="#account" className="btn">
                About
              </a>
             
            </li>

         
        
          

          

            <li className="item" id="support">
              <a href="/News" class="btn">
                News & Events
              </a>
            </li>
            <li class="item">
              <a
                className="portal btn btn-sm"
                href="https://evergreen.educare.school/"
                target="_blank"
              >
                PORTAL
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
