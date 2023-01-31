import "./_testimonials.scss";

export const Testimonials = (props) => {
  return (
    <>
      <div className="col-md-12 flexy col-12">
        <div className="col-md-12 testimonial-holder col-12">
          <img
            className="col-md-12  col-12"
            src={props.testifierImg}
            alt="Scholar"
          />
          <div className="testimonial-content">
            <h2>{props.testifier}</h2>
            <center>
              {" "}
              <p>
                <span>
                  <i class="icofont-quote-left"></i>
                </span>
                {props.content}
              </p>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};
