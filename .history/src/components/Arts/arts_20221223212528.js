import './_arts.scss'
import Pic1 from "../../assets/square-1.png";

export const Arts=()=>{
    return (
      <>
        <div className="col-md-12 flexy">
          <div claddName="col-md-4">
            <img className="slide-imgs " src={Pic1} alt="First slide" />
          </div>
        </div>
      </>
    );
}