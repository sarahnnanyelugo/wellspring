import './_arts.scss'
import { Link, NavLink } from "react-router-dom";

export const A=(props)=>{
    return (
      <>
        <div className="col-md-12 flexy arts-container">
          <div claddName="col-md-3">
            <img className="col-md-12 col-12" src={props.blogImg} alt="First slide" />
          </div>
          <div className="col-md-9 ">
            <small className="ml2">{props.blogDate}</small>{" "}
            <h4 className="mt1 ml2">
              <Link to="props.blogUrl" className="link-ulteration">
                {props.blogHeader}
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