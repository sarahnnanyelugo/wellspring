import Grad from "../../assets/grad.png";
import Img1 from "../../assets/basketball.png";
import { Link } from "react-router-dom";
import "./_prefooter.scss";
export const Prefoooter = () => {
  return (
    <>
      {" "}
      <div className="containa col-md-12 ">
        <center>
          <div className="col-md-3 flexy">
            {" "}
            <h1>
              See Why We’re the Best Private Christian School to Consider.
            </h1>
          </div>
        </center>
        <div className="col-md-12 flxexy ">
          <center>
            {" "}
            <div className="col-md-12">
              {" "}
              <button>REQUEST INFORMATION</button>
              <button>SCHEDULE A TOUR</button>
              <button>APPLY NOW</button>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};
