import "./_top-nav.scss"
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-ootstrap";







export const TopNav = () => {
  return (
    <>
      <div className="top-nav-container col-md-12 flexy">
<div className="col-md-7">&nbsp;</div>
<div className="col-md-4">
    <ul className="list-unstyled list-inline">
        <li className="linst-inline-item"><Link>Alumni</Link></li>
        <li className="linst-inline-item"><Link>Carees</Link></li>
        <li className="linst-inline-item"><Link>Volunteer</Link></li>
        <li className="linst-inline-item"><Link>Family Portal</Link></li>
    </ul>
</div>


      </div>
    </>
  );
};
