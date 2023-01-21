
import "./_testimonials.scss";
import Principal from "../../assets/principal.png";


export const Testimonials = () => {
  return (
    <>
      <div className="col-md-12 flexy testimonials">
        <div className="testimonial-holder col-md-">
          <img className="col-md-9 " src={Principal} alt="Scholar" />
          <div className="testimonial-overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
      </div>
    </>
  );
};
