
import "./_testimonials.scss";
import Principal from "../../assets/principal2.png";


export const Testimonials = (props) => {
  return (
    <>
      <div className="col-md-12 flexy testimonials">
        <div className="testimonial-holder col-md-4">
          <img className="col-md-11 " src={props.testifierImg} alt="Scholar" />
          <div className="testimonial-overlay">
            <div className="overlay-content col-md-12">
              {" "}
              <img
                className="col-md-11 "
                src={props.testifierImg}
                alt="Scholar"
              />
            </div>
            <div className="col-md-11 writeup">
              <h4>{props.testifier}</h4>
              <p>
               
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
