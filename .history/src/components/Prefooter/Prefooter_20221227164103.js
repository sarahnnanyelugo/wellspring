import Grad from "../../assets/grad.png";
import Img1 from "../../assets/basketball.png";
import { Link } from "react-router-dom";
import './_prefooter.scss'
export const Prefoooter = () => {
  return (
    <>
      {" "}
      <div className="col-md-12 handles-container flexy">
        <div className="col-md-6 twitter-container">
          <div className="col-md-12 flexy">
            <div className="col-md-4">&nbsp;</div>
            <div className="col-md-4">
              <h4> @wellspringcollege</h4>
              <p>Tweet Us for a RT!</p>
              <Link to={"#"}>
                <button className="twitter-btn">FOLLOW US ON TWITTER</button>
              </Link>
            </div>
          </div>
          <div className="after-bg"></div>
        </div>
        <div className="col-md-6 ig-container">
          <div className="col-md-12 flexy">
            <div className="col-md-2">&nbsp;</div>
            <div className="col-md-5">
              <div className="flexy">
                <div className="col-md-6 flexy">
                  {" "}
                  <img className="col-md-11" src={Img1} alt="Scholar" />
                </div>
                <div className="col-md-6">
                  {" "}
                  <img className="col-md-11" src={Grad} alt="Scholar" />
                </div>
              </div>
              <Link to={"#"}>
                <button className="twitter-btn">FOLLOW US ON INSTAGRAM</button>
              </Link>
            </div>
          </div>
          <div className="after-bg"></div>
        </div>
      </div>
    </>
  );
};
