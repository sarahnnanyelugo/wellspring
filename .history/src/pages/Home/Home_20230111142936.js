import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/slider3.png";
import Slide2 from "../../assets/building2.png";
import Square from "../../assets/medal2.png";
import Slide4 from "../../assets/news-banner2.png";
import Read from "../../assets/read2.png";
import Jersy from "../../assets/mask1.png";
import Gift from "../../assets/college.png";
import Talk from "../../assets/read3.png";
import Logo from "../../assets/logo2.png";
import Discover from "../../assets/discorver.png";
import Lib from "../../assets/read1.png";
import { YellowAppButton } from "../../components/YellowAppButton/YellowAppButton";
import "./_home.scss";
import { AppButtonBlue } from "../../components/AppButtonBlue/AppButtonBlue";
import { AppTab } from "../../components/AppTab/AppTab";
import { Arts } from "../../components/Arts/Arts";
import Pic1 from "../../assets/square-1.png";
import Grad from "../../assets/grad.png";
import Img1 from "../../assets/basketball.png";
import { Athletics } from "../../components/Atheletics/Atheletics";
import { Link, NavLink } from "react-router-dom";
import { MessageBox } from "../../components/MessageBox/MessageBox";
import { AcademicsTab } from "./AcademicsTab/AcademicsTab";

export const Home = () => {
  return (
    <>
      <div className="col-md-12 image-container">
        <img className="col-md-12 home-banners" src={Slide4} alt="Scholar" />
        <div className="after col-md-12 flexy">
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-3 logo-div">
            {" "}
            <img className="col-md-10 " src={Logo} alt="Scholar" />
            <p>
              Being Named Central Florida’s Best Private Christian School
              Reflects Our Commitment to Excellence
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>

      <div className="col-md-12 flexy prospectus-container">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-3">
          <h1>WELCOME TO WELSPRING COLLEGE</h1>
        </div>
        <div className="col-md-2">
          {" "}
          <img className="col-md-9 " src={Discover} alt="Scholar" />
        </div>
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-2">
          <h3>
            <em>Take a closer look…</em>
          </h3>
          <p>GET OUR PARENT INFORMATION PACKET!</p>
          <button>Download Now</button>
        </div>
      </div>
      <div className="sections-container flexy">
        <div className="col-md-3 overlay-container">
          <img className="col-md-12 " src={Gift} alt="Scholar" />
          <div className="overlay">
            <div className="text">
              <h1>Preschool</h1>
              <img className="col-md-9 " src={Logo} alt="Scholar" />
            </div>
          </div>
        </div>
        <div className="col-md-3 overlay-container">
          <img className="col-md-12 " src={Jersy} alt="Scholar" />
          <div className="overlay">
            <div className="text">
              <h1>Preschool</h1>
              <img className="col-md-9 " src={Logo} alt="Scholar" />
            </div>
          </div>
        </div>
        <div className="col-md-3 overlay-container">
          <img className="col-md-12 " src={Square} alt="Scholar" />
          <div className="overlay">
            <div className="text">
              <h1>Preschool</h1>
              <img className="col-md-9 " src={Logo} alt="Scholar" />
            </div>
          </div>
        </div>
        <div className="col-md-3 overlay-container">
          <img className="col-md-12 " src={Read} alt="Scholar" />
          <div className="overlay">
            <div className="text">
              <h1>College</h1>
              <img className="col-md-9 " src={Logo} alt="Scholar" />
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 flexy about-us-container">
        <div className="col-md-3">&nbsp;</div>
        <div className="col-md-6">
          <h1>Academics to excel. Faith to inspire.</h1>
          <p>
            Wellspring College is a private Christian school in Orlando,
            Florida, that prepares students to stand out from their peers and
            become leaders who influence the world through Christ-like
            leadership — choosing character before career, wisdom beyond
            scholarship, service before self, and participation as a way of
            life.
          </p>
          <div className="flexy button-container">
            <button>LEARN MORE ABOUT WELLSPRING</button>
            <button>SCHEDULE A TOUR</button>
          </div>
        </div>
      </div>
      <div className="col-md-12 flexy ethos">
        <div className="col-md-6">
          <img className="col-md-12 " src={Slide1} alt="Scholar" />
          <img className="col-md-12 " src={Slide1} alt="Scholar" />
        </div>
        <div className="col-md-6"></div>
      </div>
    </>
  );
};
