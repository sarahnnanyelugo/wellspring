import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/about-us.png";
import Slide2 from "../../assets/building2.png";
import './_home.scss'
export const Home = () => {
  return (
    <>
      <div className="col-md-12">
        <Carousel>
          <Carousel.Item>
            <img className="slide-imgs " src={Slide2} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <img className="slide-imgs " src={Slide1} alt="First slide" />

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
