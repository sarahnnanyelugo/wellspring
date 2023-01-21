
import "./_testimonials.scss";
import Principal from "../../assets/principal.png";


export const Testimonials = () => {
  return (
    <>
      <div className="col-md-12 flexy testimonials">
        <div className="testimonial-holder col-md-4">
          <img className="col-md-11 " src={Principal} alt="Scholar" />
          <div className="testimonial-overlay">
            <div className="over col-md-12">
              {" "}
              <img className="col-md-11 " src={Principal} alt="Scholar" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
