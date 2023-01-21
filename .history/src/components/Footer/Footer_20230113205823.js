import "./_footer.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Educare from "../../assets/educare.png";

import FB from "../../assets/fb.png";
import Vid from "../../assets/vid.png";
import IG from "../../assets/Instagram.png";
import Twitter from "../../assets/sms.png";
import Linkedin from "../../assets/linkedin2.png";
export const Footer = () => {
  return (
    <>
      <div className="footer-container col-md-12 ">
        <div className="col-md-12 flexy footer-content">
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-10 flexy">
            <div className="col-md-1">
              <h4>
                <em>Visit Us</em>
              </h4>
              <p> 25B Somide Odujinrin Street Omole Phase 2, Ikeja, Lagos.</p>
              <button>DIRECTIONS</button>
              <h4>
                <em>Connect</em>
              </h4>
              <p> (+234) 803 395 4138</p>
              <p> info@wellspringcollege.org</p>
              <ol className="list-inline list-unstyled">
                <li className="list-inline-item">
                  <a href="#">
                    {" "}
                    <img className="col-md-12 " src={Vid} alt="Scholar" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    {" "}
                    <img className="col-md-12 " src={IG} alt="Scholar" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    {" "}
                    <i class="icofont-facebook"></i>{" "}
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    {" "}
                    <img className="col-md-12 " src={Linkedin} alt="Scholar" />
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
