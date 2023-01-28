import Grad from "../../assets/grad.png";
import Img1 from "../../assets/basketball.png";
import { Link } from "react-router-dom";
import "./_prefooter.scss";
export const Prefoooter = () => {
  return (
    <>
      {" "}
      <div className="containa col-md-12 ">
        <div className="col-md-12 ">
          <div className="col-md-3">
            <center>
              {" "}
              <h1>
                See Why We’re the Best Private Christian School to Recon With
              </h1>
            </center>
          </div>
        </div>
        <div className="col-md-12 flexy ">
          <div className="col-md-3">&nbsp;</div>
          <div className="col-md-6 flexy">
            <button>REQUEST INFORMATION</button>
            <button>SCHEDULE A TOUR</button>
            <button>APPLY NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};
