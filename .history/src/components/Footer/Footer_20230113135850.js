import "./_footer.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Educare from "../../assets/educare.png";

export const Footer = () => {
  return (
    <>
      <div className="footer-container col-md-12 ">
        <div className="col-md-12 flexy footer-content">
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-1">
            <h4>
              <em>Visit Us</em>
            </h4>
            <p> 25B Somide Odujinrin Street Omole Phase 2, Ikeja, Lagos.</p>
            <button>DIRECTIONS</button>
            <h4><em>Co</em></h4>
          </div>
        </div>
      </div>
    </>
  );
};
