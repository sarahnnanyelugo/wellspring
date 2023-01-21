
import "./_testimonials.scss";
import Principal from "../../assets/principal2.png";


export const Testimonials = () => {
  return (
    <>
      <div className="col-md-12 flexy testimonials">
        <div className="testimonial-holder col-md-4">
          <img className="col-md-11 " src={props.tesfiier} alt="Scholar" />
          <div className="testimonial-overlay">
            <div className="overlay-content col-md-12">
              {" "}
              <img className="col-md-11 " src={Principal} alt="Scholar" />
            </div>
            <div className="col-md-11 writeup">
              <h4>name of testifier</h4>
              <p>
                The First Academy is a private Christian school in Orlando,
                Florida, that prepares students to stand out from their peers
                and become leaders who influence the world through Christ-like
                leadership — choosing character before career, wisdom beyond
                scholarship, service before self, and participation as a way of
                life. and become leaders who influence the world through Christ-like
                leadership — choosing character before career, wisdom beyond
                scholarship, service before self, and participation as a way of
                life.

              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
