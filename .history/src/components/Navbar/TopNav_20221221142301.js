import "./_top-nav.scss"
import { Link } from "react-router-dom";







export const TopNav = () => {
  return (
    <>
      <div className="top-nav-container col-md-12 flexy">
        <div className="col-md-8">&nbsp;</div>
        <div className="col-md-4">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item color-alteration">
              <Link className="link-alteration">Alumni</Link>
            </li>
            <li className="list-inline-item">
              <Link className="link-alteration">Carees</Link>
            </li>
            <li className="list-inline-item">
              <Link className="link-alteration">Volunteer</Link>
            </li>
            <li className="list-inline-item">
              <Link className="link-alteration">Family Portal</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="logo-container col-md-12">



      </div>
    </>
  );
};
