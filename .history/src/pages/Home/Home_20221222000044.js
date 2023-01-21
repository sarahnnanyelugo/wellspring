import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/about-us.png";
import Slide2 from "../../assets/building2.png";
import Slide3 from "../../assets/facility2-banner.png";
import Slide4 from "../../assets/news-banner.png";
import './_home.scss'
export const Home = () => {
  return (
    <>
      <div className="col-md-12" >
        <Carousel>
          <Carousel.Item>
            <img className="slide-imgs " src={Slide2} alt="First slide" />
            <Carousel.Caption>
              <div></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slide-imgs " src={Slide1} alt="First slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slide-imgs " src={Slide3} alt="First slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slide-imgs " src={Slide4} alt="First slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>{" "}
      </div>
    </>
  );
};
