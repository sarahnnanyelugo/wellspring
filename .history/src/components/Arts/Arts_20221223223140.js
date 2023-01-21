import './_arts.scss'
import Pic1 from "../../assets/square-1.png";
import { Link, NavLink } from "react-router-dom";

export const Arts=(props)=>{
    return (
      <>
        <div className="col-md-12 flexy arts-container">
          <div claddName="col-md-3">
            <img className="col-md-12 col-12" src={Pic1} alt="First slide" />
          </div>
          <div className="col-md-9 ">
            <small className="ml2">March 23, 2021</small>{" "}
            <h4 className="mt1 ml2">
              <Link to="#" className="link-ulteration">
                Fine Arts Team Spotlight
              </Link>
            </h4>
            <p className="ml2">
              {props.blogText}
              <Link to="props.blogUrl" className="link-ulteration">
                Read More
              </Link>
            </p>
          </div>
        </div>
      </>
    );
}