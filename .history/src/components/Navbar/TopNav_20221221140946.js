import "./_top-nav.scss"
import { Link } from "react-router-dom";







export const TopNav = () => {
  return (
    <>
      <div className="top-nav-container col-md-12 flexy">
<div className="col-md-8">&nbsp;</div>
<div className="col-md-5">
    <ul className="list-unstyled list-inline">
        <li className="list-inline-item"><Link>Alumni</Link></li>
        <li className="list-inline-item"><Link>Carees</Link></li>
        <li className="list-inline-item"><Link>Volunteer</Link></li>
        <li className="list-inline-item"><Link>Family Portal</Link></li>
    </ul>
</div>


      </div>
    </>
  );
};
