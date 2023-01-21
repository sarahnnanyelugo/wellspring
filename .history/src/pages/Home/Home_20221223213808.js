import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/about-us.png";
import Slide2 from "../../assets/building2.png";
import Slide3 from "../../assets/facility2-banner.png";
import Slide4 from "../../assets/news-banner.png";
import Merged2 from "../../assets/merged2.png";
import Jersy from "../../assets/jsy.png";
import Talk from "../../assets/read3.png";
import Logo from "../../assets/logo2.png";
import Lib from "../../assets/read1.png";
import { YellowAppButton } from "../../components/YellowAppButton/YellowAppButton";
import "./_home.scss";
import { AppButtonBlue } from "../../components/AppButtonBlue/AppButtonBlue";
import { AppTab } from "../../components/AppTab/AppTab";
export const Home = () => {
  return (
    <>
      <div className="col-md-12">
        <Carousel>
          <Carousel.Item>
            <img className="slide-imgs " src={Slide2} alt="First slide" />
            <Carousel.Caption>
              <h1>Wellspring Outings</h1>
              <p>
                Wellspring College students visit the foremost award winning
                Fashion Designeer Mai Atafo
              </p>
              <YellowAppButton text="Learn More" buttonUrl="#" />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slide-imgs " src={Slide1} alt="First slide" />

            <Carousel.Caption>
              <h1>Applications Are Open !</h1>
              <p>Now accepting applications for the 2023-2024 school year</p>
              <YellowAppButton text="Apply Now" buttonUrl="#" />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slide-imgs " src={Slide3} alt="First slide" />

            <Carousel.Caption>
              <h1>Experience the Difference January Open House</h1>
              <p>Explore all that Wellspring College has to offer </p>
              <YellowAppButton text="RSVP Now" buttonUrl="#" />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slide-imgs " src={Slide4} alt="First slide" />

            <Carousel.Caption>
              <h1>Beyond the Classroom</h1>
              <p>
                Wellspring College students visit the foremost award winning
                Fashion Designeer Mai Atafo
              </p>
              <YellowAppButton text="Learn More" buttonUrl="#" />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>{" "}
      </div>
      <div className="col-md-12 flexy prospectus-container">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-8 prospectus-box flexy">
          <div className="col-md-4">
            {" "}
            <img className="col-md-12 " src={Merged2} alt="First slide" />
          </div>
          <div className="col-md-4">
            {" "}
            <h1>Are you looking for the perfect school for your children?</h1>
          </div>
          <div className="col-md-4 prospectus-box-text">
            <small>Take a look at our</small>
            <p>Wellspring College Prospectus</p>
            <button className="prospectus-button">
              <em>Download Now</em>
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-12 flexy">
        <div className="col-md-6 tour-container zoom">
          <div className="col-md-12 flexy">
            <div className="col-md-6">&nbsp;</div>
            <div className="col-md-5">
              <h1>
                Tour <span>Today!</span>
              </h1>
              <p>Schedule your tour today, space is limited!</p>
              <button className="tour-button">Learn More</button>
            </div>
            <div className="col-md-1">&nbsp;</div>
          </div>
          <div className="after-bg"></div>
        </div>
        <div className="col-md-6 store-container zoom">
          <div className="col-md-12 flexy">
            <div className="col-md-1">&nbsp;</div>
            <div className="col-md-5">
              <h1>
                <span>School</span> Store
              </h1>
              <p>The latest gear for every royal!</p>
              <button className="tour-button">View Store</button>
            </div>
          </div>
          <div className="after-bg"></div>
        </div>
      </div>
      <div className="col-md-12 about-us-container">
        <div className="col-md-12 flexy">
          <div className="col-md-3">&nbsp;</div>
          <div className="col-md-6 about-us-body">
            <div className="flexy">
              {" "}
              <img className="col-md-12 " src={Logo} alt="First slide" />
              <h1>About Us</h1>
            </div>

            <p>
              About Us Founded in 2003, today Wellspring College proudly
              welcomes over 650 students representing different ethnicities,
              embracing a vision of transformative learning and a culture of
              excellence. Through rich enhancements in curricular and
              extracurricular activities, we strive to provide good education,
              <br />
              <span>
                one that grooms our students to be globally competitive and
                exceptional leaders. At Wellspring College, we seek every
                occasion to provide our students with opportunities for sound
                academic, mental, spiritual and social development.{" "}
              </span>
            </p>
            <AppButtonBlue text="LEARN MORE" />
          </div>
        </div>
        <div className="about-us-after"></div>
      </div>
      <div className="col-md-12 flexy">
        <div className="col-md-4 picture-container">
          <div className="flexy">
            <div className="col-md-6  img1">
              {" "}
              <img className="col-md-12" src={Jersy} alt="First slide" />
            </div>
            <div className="col-md-6  img2">
              <div className="col-md-12">
                {" "}
                <img className="col-md-12 " src={Talk} alt="First slide" />
              </div>
            </div>
          </div>

          <div className="col-md-12 big-bg">
            <img className="col-md-12 " src={Lib} alt="First slide" />
          </div>
        </div>
        <div className="col-md-4">
          <AppTab />
        </div>
        <div className="col-md-4 picture-container2">
          <div className="flexy col-md-12">
            <div className="col-md-6  img1">
              {" "}
              <img className="col-md-12" src={Jersy} alt="First slide" />
            </div>
            <div className="col-md-6 img2 col-sm-12 ">
              {" "}
              <img className="col-md-12 " src={Talk} alt="First slide" />
            </div>
          </div>

          <div className="col-md-12 col-sm-12 big-bg">
            <img className="col-md-12 " src={Lib} alt="First slide" />
          </div>
        </div>
      </div>
      <div className="col-md-12 logo-display flexy ">
        <div className="col-md-7">&nbsp;</div>
        <div className="col-md-3 col-12">
          <img className="col-md-12 imgCaro" src={Logo} alt="Scholar" />
        </div>
      </div>
      <div className="col-md-12 flexy">
        <div className="col-md-6 arts-slider-container ">
          <div className="col-md-6"></div>
          <h1>Arts</h1>
        </div>
      </div>
    </>
  );
};
