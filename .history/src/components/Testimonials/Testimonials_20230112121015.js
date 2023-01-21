
import "./_testimonials.scss";
import Logo from "../../assets/TFA-Logo.svg";


export const Testimonials = () => {
  return (
    <>
      <div className="col-md-12 flexy testimonials">
        <div class="container">
          <img className="col-md-9 " src={Logo} alt="Scholar" />
          <div class="overlay">
            <div class="text">Hello World</div>
          </div>
        </div>
      </div>
    </>
  );
};
