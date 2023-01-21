
import "./_testimonials.scss";


export const Testimonials = (props) => {
  return (
    <>
      <div className="col-md-12 flexy testimonials">
        <div className="testimonial-holder col-md-12">
          <img className="col-md-11 " src={props.testifierImg} alt="Scholar" />
          <div className="testimonial-overlay">
            <div className="overlay-content col-md-12">
              {" "}
              <img
                className="col-md-12 "
                src={props.testifierImg}
                alt="Scholar"
              />
            </div>
            <div className="col-md-12 writeup">
              <h4>{props.testifier}</h4>
              <p>
               {props.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
