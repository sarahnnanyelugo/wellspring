import './_footer.scss'
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { SearchBar } from '../SearchBar/SearchBar';


export const Footer =()=>{
    return (
      <>
        <div className="footer-container col-md-12 flexy">
          <div className="col-md-5">
            <div className="col-md-12 links-container flexy">
              <div className="col-md-6">&nbsp;</div>
              <div className="col-md-6 flexy">
                <ul className="list-unstyled">
                  <li>
                    <Link to={"#"} className="footer-links-alteration">
                      ABOUT
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="footer-links-alteration">
                      ADMISSIONS
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="footer-links-alteration">
                      ATHLETICS
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="footer-links-alteration">
                      BLOGS
                    </Link>
                  </li>
                </ul>
                <div className="col-md-2">&nbsp;</div>
                <ul className="list-unstyled">
                  <li>
                    <Link to={"#"} className="footer-links-alteration">
                      ACADEMICS
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="footer-links-alteration">
                      ARTS
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="footer-links-alteration">
                      GIVING
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="footer-links-alteration">
                      STORE
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 address-container flexy">
              <div className="col-md-6">&nbsp;</div>{" "}
              <div className="col-md-6">
                <p>25B Somide Odujinrin Street Omole Phase 2, Ikeja, Lagos.</p>
                <p>
                  <Link to={"#"} className="link-alteration">
                    (+234) 803 395 4138
                  </Link>
                </p>
                <p>
                  <Link to={"#"} className="link-alteration">
                    info@wellspringcollege.org
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-logo-container col-md-2">
            {" "}
            <img className="col-md-12 " src={Logo} alt="First slide" />
          </div>
          <div className="footer-handles-container col-md-5 flexy">
            <div className="col-md-6">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item ">
                  <Link to={"#"} className="link-alteration">
                    Alumni
                  </Link>
                </li>{" "}
                <li className="list-inline-item ">
                  <Link to={"#"} className="link-alteration">
                    Careers
                  </Link>
                </li>{" "}
                <li className="list-inline-item ">
                  <Link to={"#"} className="link-alteration">
                    Volunteer
                  </Link>
                </li>{" "}
                <li className="list-inline-item ">
                  <Link to={"#"} className="link-alteration">
                    Family Portal
                  </Link>
                </li>
              </ul>

              <ul className="list-inline list-unstyled">
                <li className="list-inline-item">
                  <Link className="link-icon-alteration">
                    <i class="icofont-instagram"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="link-icon-alteration">
                    {" "}
                    <i class="icofont-twitter"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="link-icon-alteration">
                    <i class="icofont-facebook"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="link-icon-alteration">
                    <i class="icofont-brand-youtube"></i>
                  </Link>
                </li>
              </ul>
              <SearchBar />
            </div>
            <div className="col-md-6">&nbsp;</div>{" "}
          </div>
          <div className="address-container col-md-12">

          </div>
        </div>
      </>
    );
}