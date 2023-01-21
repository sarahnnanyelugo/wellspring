import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/about-us.png";
import Slide2 from "../../assets/building2.png";
import Slide3 from "../../assets/facility2-banner.png";
import Slide4 from "../../assets/news-banner.png";
import Merged2 from "../../assets/merged2.png";
import { YellowAppButton } from "../../components/YellowAppButton/YellowAppButton";
import './_home.scss'
import { AppButtonBlue } from "../../components/AppButtonBlue/AppButtonBlue";
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
                Wellspring College students visit the foremost award winiing
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
                Wellspring College students visit the foremost award winiing
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
        <div className="col-md-6 flexy tour-container">
          <div className="col-md-6">&nbsp;</div>
          <div className="col-md-5">
            <h1>
              Tour <span>Today!</span>
            </h1>
            <p>Schedule your tour today, space is limited!</p>
            <AppButtonBlue />
          </div>
          <div className="col-md-1">&nbsp;</div>
        </div>
      </div>
    </>
  );
};
