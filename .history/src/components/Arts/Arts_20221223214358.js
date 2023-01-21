import './_arts.scss'
import Pic1 from "../../assets/square-1.png";
import { Link, NavLink } from "react-router-dom";

export const Arts=()=>{
    return (
      <>
        <div className="col-md-12 flexy">
          <div claddName="col-md-4">
            <img className="col-md-10 col-12" src={Pic1} alt="First slide" />
          </div>
          <div className="col-md-7 ">
            <small>March 23, 2021</small>
            <h4 className="mt1">Fine Arts Team Spotlight</h4>
            <p>
              Striving to provide a well balanced spiritual, academic and social
              well-being, students are encouraged to both serve and participate
              in and beyond our community. With plenty of room for opportunity,
             ...<Link to="">Read More</Link>
            </p>
          </div>
        </div>
      </>
    );
}