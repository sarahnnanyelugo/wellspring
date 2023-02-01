import "./_footer.scss";
import { Link } from "react-router-dom";
import Educare from "../../assets/educare.png";

import FB from "../../assets/fb.png";
import IG from "../../assets/Instagram.png";
import Twitter from "../../assets/sms.png";
import Logo from "../../assets/Logo.svg";
export const Footer = () => {
  return (
    <>
      <div className="footer-container col-md-12 ">
        <div className="col-md-12 flexy footer-content">
          <div className="col-md-1">&nbsp;</div>
          <div className="col-md-11 flexy">
            <div className="col-md-2">
              <h4>Visit Us</h4>
              <p> 25B Somide Odujinrin Street Omole Phase 2, Ikeja, Lagos.</p>
              <button style={{ fontFamily: " brother-regular" }}>
                DIRECTIONS
              </button>
              <h4>Connect</h4>
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
            <div className="col-md-1">&nbsp;</div>
            <div className="col-md-5 logo-con">
              {" "}
              <center>
                <img className="col-md-9" src={Logo} alt="Scholar" />
                <p>Academics to excel.Faith to inspire.</p>
              </center>
              <br />
            </div>
            <div className="col-md-2">&nbsp;</div>
            <div className="col-md-2">
              <ul className="list-unstyled">
                <li>
                  <Link className="link-alteration" to={"/welcome"}>
                    WELCOME
                  </Link>
                </li>
                <li>
                  <Link className="link-alteration" to={"/careers"}>
                    CAREERS
                  </Link>
                </li>
                <li>
                  <Link className="link-alteration">ADMISSION EVENTS</Link>
                </li>
                <li>
                  <Link className="link-alteration">MEDIA</Link>
                </li>
                <li>
                  <Link className="link-alteration">TUITION</Link>
                </li>
                <li>
                  <Link className="link-alteration">HOW TO APPLY</Link>
                </li>
                <li>
                  <Link className="link-alteration">FAITH</Link>
                </li>
                <li>
                  <a className="link-alteration"></a>PRIVACY POLICY
                </li>
              </ul>
            </div>
          </div>
        </div>
        <center>
          {" "}
          <p
            style={{ fontSize: "10px", color: "white", paddingBottom: "30px" }}
          >
            © 2023 Wellspring College. A Preschool-Grade 12 Christ-Centered
            College Preparatory School. All Rights Reserved.
          </p>
        </center>
      </div>
      <div className="col-md-12 post-footer flexy">
        <div className="col-md-9">
          <small>
            <strong>
              {" "}
              Notice of Nondiscriminatory Policy as to Students:{" "}
            </strong>
            Wellspring College admits students of any race, color, national and
            ethnic origin to all the rights, privileges, programs, and
            activities generally accorded or made available to students at the
            school. It does not discriminate on the basis of race, color,
            national and ethnic origin in administration of its educational
            policies, admissions policies, scholarship and loan programs, and
            athletic and other school-administered programs.
          </small>
        </div>
        <div className="col-md-3 educare flexy flexyM">
          <div className="col-md-4">&nbsp;</div>
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
