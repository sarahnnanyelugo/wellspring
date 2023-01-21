import "./_tab-content.scss";
import { Link } from "react-router-dom";



export const TabContent =()=>{
    return (
      <>
        <div ClassName="col-md-12 flexy tab-content-container">
          <div className="col-md-4 tab-content-paragraph">
            <small>November 30, 2021</small>
            <Link to={"#"}></Link></h4>
          </div>
          <div className="col-md-4 tab-content-img"></div>
          <div className="col-md-4 tab-content-paragraph"></div>
        </div>
      </>
    );
}