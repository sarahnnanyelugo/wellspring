import './_arts.scss'
import Pic1 from "../../assets/square-1.png";
import { Link, NavLink } from "react-router-dom";

export const Arts=()=>{
    return (
      <>
        <div className="col-md-12 flexy arts-comp">
          <div claddName="col-md-3">
            <img className="col-md-12 col-12" src={Pic1} alt="First slide" />
          </div>
          <div className="col-md-9 ">
            <small className="ml2">March 23, 2021</small>{" "}
            <h4 className="mt1 ml2">
              <Link to="#">Fine Arts Team Spotlight</Link>
            </h4>
            <p className="ml2">
              Striving to provide a well balanced spiritual, academic and social
              well-being, students are encouraged to both serve and participate
              in and beyond our community. With plenty of room for opportunity,
              students can engage in over forty sports, the arts, and equally
              many student driven clubs...<Link to="">Read More</Link>
            </p>
          </div>
        </div>
      </>
    );
}