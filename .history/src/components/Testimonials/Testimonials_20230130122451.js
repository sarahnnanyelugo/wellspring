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
            <h1>{props.testifier}</h1>
            <h6>{props.content}</h6>
          </div>
        </div>
      </div>
    </>
  );
};
