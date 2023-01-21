
import "./_testimonials.scss";
import Principal from "../../assets/TFA-Logo.svg";


export const Testimonials = () => {
  return (
    <>
      <div className="col-md-12 flexy testimonials">
        <div className="testimonial-holder col-md-4">
          <img className="col-md-9 " src={principal} alt="Scholar" />
          <div className="testimonial-overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
      </div>
    </>
  );
};
