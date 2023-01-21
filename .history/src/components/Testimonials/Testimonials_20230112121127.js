
import "./_testimonials.scss";
import Logo from "../../assets/TFA-Logo.svg";


export const Testimonials = () => {
  return (
    <>
      <div className="col-md-12 flexy testimonials">
        <div className="container">
          <img className="col-md-9 " src={Logo} alt="Scholar" />
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
      </div>
    </>
  );
};
