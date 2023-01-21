import "./_tab-content.scss";
import { Link } from "react-router-dom";
import Pic1 from "../../../../assets/medal.png";
import { YellowAppButton } from "../../../../components/YellowAppButton/YellowAppButton";



export const TabContent =(props)=>{
    return (
      <>
        <div className="col-md-12 flexy tab-content-container">
          <div className="col-md-4 tab-content-paragraph">
            <small>{props.date}</small>
            <Link to={"#"} className="link-alteration">
              <h4>{props.title}</h4>
            </Link>
            <p>
              {props.}
              <Link to={"#"} className="link-alteration">
                Read More.
              </Link>
            </p>
          </div>
          <div className="col-md-4 tab-content-img">
            {" "}
            <img className="col-md-11 " src={Pic1} alt="First slide" />
            <div className="tab-btn">
              {" "}
              <YellowAppButton text="LEARN MORE" />
            </div>
          </div>
          <div className="col-md-4 tab-content-paragraph">
            {" "}
            <small>November 30, 2021</small>
            <Link to={"#"} className="link-alteration">
              <h4>Fine Arts Team Spotlight</h4>
            </Link>
            <p>
              Cynthia Collins What is your role at TFA? 3D Visual Arts
              Instructor - because God created all things, it is easy to teach
              Art with Him as the focus. I strive to teach the visual arts in a
              way that...{" "}
              <Link to={"#"} className="link-alteration">
                Read More.
              </Link>
            </p>
          </div>
        </div>
      </>
    );
}