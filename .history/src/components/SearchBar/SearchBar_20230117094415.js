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

         
            <li className="item" id="admission">
              <a href="#admission" class="btn">
                Academics
              </a>
              <div className="subMenu">
                <NavLink
                  to={"/senior"}
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Creche
                </NavLink>{" "}
                <NavLink
                  to={"/junior"}
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Higher Primary
                </NavLink>{" "}
                <NavLink
                  to={"/Primary"}
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Junior Primary
                </NavLink>{" "}
                <NavLink
                  to={"/secondary"}
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Secondary
                </NavLink>{" "}
              </div>
            </li>

            <li className="item" id="support">
              <a href={"/school"} class="btn">
                School Life
              </a>
            </li>

            <li className="item" id="support">
              <a href="/Gallery" class="btn">
                Gallery
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
