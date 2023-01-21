import './_footer.scss'
import { Link } from "react-router-dom";


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
                    <Link className="footer-links-alteration">ABOUT</Link>
                  </li>
                  <li>
                    <Link className="footer-links-alteration">ADMISSIONS</Link>
                  </li>
                  <li>
                    <Link to={"#"} >ATHLETICS</Link>
                  </li>
                  <li>
                    <Link>BLOGS</Link>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li>
                    <Link>ACADEMICS</Link>
                  </li>
                  <li>
                    <Link>ARTS</Link>
                  </li>
                  <li>
                    G<Link>IVING</Link>
                  </li>
                  <li>
                    <Link>STORE</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-logo-container col-md-2"></div>
          <div className="footer-logo-container col-md-5"></div>
        </div>
      </>
    );
}