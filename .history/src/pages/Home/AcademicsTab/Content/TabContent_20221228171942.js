import "./_tab-content.scss";
import { Link } from "react-router-dom";
import { YellowAppButton } from "../../../../components/YellowAppButton/YellowAppButton";



export const TabContent =(props)=>{
    return (
      <>
        <div className="col-md-12 flexy tab-content-container">
          <div className="col-md-4 tab-content-paragraph">
            <small>{props.date1}</small>
            <Link to={"#"} className="link-alteration">
              <h4>{props.title}</h4>
            </Link>
            <p>
              {props.paragraph1}
              <Link to={props.url1} className="link-alteration">
                Read More.
              </Link>
            </p>
          </div>
          <div className="col-md-4 tab-content-img">
            {" "}
            <img className="col-md-11 " src={props.img} alt="First slide" />
            <div className="tab-btn">
              {" "}
              <YellowAppButton text="LEARN MORE" />
            </div>
          </div>
          <div className="col-md-4 tab-content-paragraph">
            {" "}
            <small>{props.date2}</small>
            <Link to={"#"} className="link-alteration">
              <h4>{props.title2}</h4>
            </Link>
            <p>
              {props.paragraph2}
              <Link to={props.url2} className="link-alteration">
                Read More.
              </Link>
            </p>
          </div>
        </div>
      </>
    );
}