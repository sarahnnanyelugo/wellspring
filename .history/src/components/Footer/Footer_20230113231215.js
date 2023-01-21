import "./_footer.scss";
import { Link } from "react-router-dom";
import Educare from "../../assets/educare.png";

import FB from "../../assets/fb.png";
import Vid from "../../assets/vid.png";
import IG from "../../assets/Instagram.png";
import Twitter from "../../assets/sms.png";
import Logo from "../../assets/TFA-Logo.svg";
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
                    <i class="icofont-youtube-play"></i>{" "}
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    {" "}
                    <i class="icofont-twitter"></i>{" "}
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
                    <i class="icofont-linkedin"></i>{" "}
                  </a>
                </li>
              </ol>
            </div>
            <div className="col-md-2">&nbsp;</div>
            <div className="col-md-4 logo-con">
              {" "}
              <img className="col-md-10 " src={Logo} alt="Scholar" />
              <p>
                <em>Academics to excel.Faith to inspire.</em>
              </p>
              <br />
              <h6>©2023 Wellspring College. All Rights Reserved.</h6>
            </div>
            <div className="col-md-2">&nbsp;</div>
            <div className="col-md-2">
              <ul className="list-unstyled">
                <li>
                  <Link className="link-alteration">ALUMNI</Link>
                </li>
                <li>
                  <Link className="link-alteration">CAREERS</Link>
                </li>
                <li>
                  <Link className="link-alteration">CURRENT FAMILIES</Link>
                </li>
                <li>
                  <Link className="link-alteration">EVENTS</Link>
                </li>
                <li>
                  <Link className="link-alteration">GIVING</Link>
                </li>
                <li>
                  <Link className="link-alteration">NEWS & STORIES</Link>
                </li>
                <li>
                  <Link className="link-alteration">STORE</Link>
                </li>
                <li>
                  <a className="link-alteration"></a>PRIVACY POLICY
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 post-footer flexy">
        <div className="col-md-10">
          <small>
            <strong>
              {" "}
              Notice of Nondiscriminatory Policy as to Students:{" "}
            </strong>
            The First Academy admits students of any race, color, national and
            ethnic origin to all the rights, privileges, programs, and
            activities generally accorded or made available to students at the
            school. It does not discriminate on the basis of race, color,
            national and ethnic origin in administration of its educational
            policies, admissions policies, scholarship and loan programs, and
            athletic and other school-administered programs.
          </small>
        </div>
        <div className="col-md-2 educare flexy flexyM">
          <p>Powered by</p>
          <a
            href="https://wellspring.educare.school/admission-form"
            target="_blank"
          >
            {" "}
            <img className="col-md-12 " src={Educare} alt="Scholar" />
          </a>
        </div>
      </div>
    </>
  );
};
