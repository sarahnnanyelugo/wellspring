
import "./_testimonials.scss";
import Logo from "../../assets/TFA-Logo.svg";


export const Testimonials = () => {
  return (
    <>
      <div className="col-md-12 flexy testimonials">
        <div className=" col-md-4">
          <img className="col-md-9 " src={Logo} alt="Scholar" />
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
      </div>
    </>
  );
};
