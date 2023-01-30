import "./_testimonials.scss";

export const Testimonials = (props) => {
  return (
    <>
      <div className="col-md-12 flexy ">
        {/* <div className="testimonial-holder col-md-12">
          <img className="col-md-12 " src={props.testifierImg} alt="Scholar" />
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
              <h5>{props.content}</h5>
            </div>
          </div>
        </div> */}

        <div className="col-md-12 testimonial-holder">
          <img className="col-md-12 " src={props.testifierImg} alt="Scholar" />
          <div className="testimonial-content">
            <h1>{props.testifier}</h1>
            <h6>{props.content}</h6>
          </div>
        </div>
      </div>
    </>
  );
};
