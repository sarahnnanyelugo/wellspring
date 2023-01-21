import "./_tab-content.scss";
import { Link } from "react-router-dom";
import Pic1 from "../../assets/square1.png";



export const TabContent =()=>{
    return (
      <>
        <div ClassName="col-md-12 flexy tab-content-container">
          <div className="col-md-4 tab-content-paragraph">
            <small>November 30, 2021</small>
            <Link to={"#"}>
              <h4>Fine Arts Team Spotlight</h4>
            </Link>
            <p>
              Cynthia Collins What is your role at TFA? 3D Visual Arts
              Instructor - because God created all things, it is easy to teach
              Art with Him as the focus. I strive to teach the visual arts in a
              way that... <Link to={"#"}>Read More.</Link>
            </p>
          </div>
          <div className="col-md-4 tab-content-img">
            {" "}
            <img className="slide-imgs " src={Pic} alt="First slide" />
          </div>
          <div className="col-md-4 tab-content-paragraph"></div>
        </div>
      </>
    );
}