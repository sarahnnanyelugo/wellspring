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
import { Arts } from "../../components/Arts/Arts";
import Pic1 from "../../assets/square-1.png";
import Pic2 from "../../assets/square2.png";
import Grad from "../../assets/grad.png";
import Img1 from "../../assets/basketball.png";
import { Athletics } from "../../components/Atheletics/Atheletics";
import { Link, NavLink } from "react-router-dom";
import { MessageBox } from "../../components/MessageBox/MessageBox";

export const Home = () => {
  
  return (
    <>
      <div className="col-md-12 first-carousel">
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
        <div className="col-md-6 tour-container zoojm">
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
        <div className="col-md-6 store-container zooom">
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
      <div className="col-md-12 flexy blue-tab-container">
        <div className="col-md-3">&nbsp;</div>
        <div className="col-md-6 blue-tab">
          <div className="flexy" style={{textAlign:'center'}}>
            {" "}
            {/* <img className="col-md-12 loggo" src={Logo} alt="First slide" /> */}
            <h1>Academics</h1>
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
        <div className="col-md-6 arts-slider-container">
          <div className="after"></div>

          <div className="col-md-12 flexy">
            {" "}
            <div className="col-md-5">&nbsp;</div>
            <div className="col-md-7">
              <div className="flexy flexyM">
                <img className="col-md-12 logo-img" src={Logo} alt="Scholar" />
                <h1 className="mb4">Arts</h1>
              </div>
              <Carousel>
                <Carousel.Item>
                  <Arts
                    blogText="Striving to provide a well balanced spiritual, academic and social
              well-being, students are encouraged to both serve and participate
              in and beyond our community. With plenty of room for opportunity,
              students can engage in over forty sports, the arts, and equally
              many student driven clubs..."
                    blogHeader="Fine Arts Team Spotlight"
                    blogDate="March 23, 2021"
                    blogUrl={"#"}
                    blogImg={Pic1}
                  />
                  <hr />
                  <Arts
                    blogText="Striving to provide a well balanced spiritual, academic and social
              well-being, students are encouraged to both serve and participate
              in and beyond our community. With plenty of room for opportunity,
              students can engage in over forty sports, the arts, and equally
              many student driven clubs..."
                    blogHeader="Fine Arts Team Spotlight"
                    blogDate="March 23, 2021"
                    blogUrl={"#"}
                    blogImg={Pic2}
                  />
                  <hr />
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <Arts
                    blogText="Striving to provide a well balanced spiritual, academic and social
              well-being, students are encouraged to both serve and participate
              in and beyond our community. With plenty of room for opportunity,
              students can engage in over forty sports, the arts, and equally
              many student driven clubs..."
                    blogHeader="Fine Arts Team Spotlight"
                    blogDate="March 23, 2021"
                    blogUrl={"#"}
                    blogImg={Pic1}
                  />
                  <hr />
                  <Arts
                    blogText="Striving to provide a well balanced spiritual, academic and social
              well-being, students are encouraged to both serve and participate
              in and beyond our community. With plenty of room for opportunity,
              students can engage in over forty sports, the arts, and equally
              many student driven clubs..."
                    blogHeader="Fine Arts Team Spotlight"
                    blogDate="March 23, 2021"
                    blogUrl={"#"}
                    blogImg={Pic2}
                  />

                  <hr />
                </Carousel.Item>
              </Carousel>
              <div className="blog-button">
                {" "}
                <YellowAppButton text="Read More" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 atheletics-slider-container">
          <div className="after"></div>

          <div className="col-md-12 flexy athletics-inner">
            {" "}
            <div className="col-md-7">
              <div className="flexy flexyM">
                {/* <img className="col-md-12 logo-img" src={Logo} alt="Scholar" /> */}
                <span>
                  <i class="icofont-lion-head"></i>
                </span>
                <h1 className="mb4">Atheletics</h1>
              </div>
              <Carousel>
                <Carousel.Item>
                  <Athletics
                    blogText="to provide a well balanced spiritual, academic and social
              well-being, students are encouraged to both serve and participate
              in and beyond our community. With plenty of room for opportunity,
              students can engage in over forty sports, the arts, and equally
              many student driven clubs..."
                    blogHeader="Fine Arts Team Spotlight"
                    blogDate="March 23, 2021"
                    blogUrl={"#"}
                    blogImg={Pic1}
                  />
                  <hr />
                  <Athletics
                    blogText="to provide a well balanced spiritual, academic and social
              well-being, students are encouraged to both serve and participate
              in and beyond our community. With plenty of room for opportunity,
              students can engage in over forty sports, the arts, and equally
              many student driven clubs..."
                    blogHeader="Fine Arts Team Spotlight"
                    blogDate="March 23, 2021"
                    blogUrl={"#"}
                    blogImg={Pic1}
                  />
                  <hr />
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <Athletics
                    blogText="to provide a well balanced spiritual, academic and social
              well-being, students are encouraged to both serve and participate
              in and beyond our community. With plenty of room for opportunity,
              students can engage in over forty sports, the arts, and equally
              many student driven clubs..."
                    blogHeader="Fine Arts Team Spotlight"
                    blogDate="March 23, 2021"
                    blogUrl={"#"}
                    blogImg={Pic1}
                  />
                  <hr />
                  <Athletics
                    blogText="to provide a well balanced spiritual, academic and social
              well-being, students are encouraged to both serve and participate
              in and beyond our community. With plenty of room for opportunity,
              students can engage in over forty sports, the arts, and equally
              many student driven clubs..."
                    blogHeader="Fine Arts Team Spotlight"
                    blogDate="March 23, 2021"
                    blogUrl={"#"}
                    blogImg={Pic1}
                  />

                  <hr />
                </Carousel.Item>
              </Carousel>
              <div className="blog-button">
                {" "}
                <AppButtonBlue text="Read More" />
              </div>
            </div>
            <div className="col-md-5">&nbsp;</div>
          </div>
        </div>{" "}
      </div>

      <div className="col-md-12 flexy achievement-container">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-8 flexy">
          <div className="col-md-5">
            <span>
              <i class="icofont-trophy-alt"></i>{" "}
            </span>
            <p>
              In 2007, Wellspring was selected to <br />
              receive an inaugural
            </p>
            <h1>FHSAA Rozelle Sportsmanship Award</h1>
            <p>
              only one of seven schools <br />
              honored in the state of Florida
            </p>
          </div>
          <div className="col-md-1">&nbsp;</div>
          <div className="col-md-6">
            <div className="col-md-12 inner-1">
              <h1>
                $84 million{" "}
                <span>
                  <i class="icofont-graduate"></i>{" "}
                  {/* <img className="col-md-12" src={Grad} alt="Scholar" /> */}
                </span>
              </h1>
              <p>in scholarship offers since 2003</p>
            </div>
            <div className="col-md-12 inner-box">
              {" "}
              <h1>
                151,000 hours{" "}
                <span className="globe-icon">
                  <i class="icofont-globe-alt"></i>
                </span>
              </h1>
              <p>
                of Missions/Service completed around the <br />
                world since 2003
              </p>
            </div>
            <div className="col-md-12 inner-2">
              <h1>
                100%
                <span className="case-icon">
                  <i class="icofont-briefcase"></i>
                </span>
              </h1>
              <p>of TFA graduates have been accepted to college</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 flexy">
        <div className="col-md-3">&nbsp;</div>
        <div className="col-md-2 events-container">
          <div className="flexy">
            <img className="col-md-12" src={Logo} alt="Scholar" />
            <h1>Events</h1>
          </div>
          <AppButtonBlue text="VIEW ALL EVENTS" />
        </div>
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-6 handles-container">
          <div className="col-md-12 twitter-container">
            <div className="col-md-12 flexy">
              <div className="col-md-2">&nbsp;</div>
              <div className="col-md-4">
                <h4> @wellspringcollege</h4>
                <p>Tweet Us for a RT!</p>
                <Link to={"#"}>
                  <button className="twitter-btn">FOLLOW US ON TWITTER</button>
                </Link>
              </div>
            </div>
            <div className="after-bg"></div>
          </div>
          <div className="col-md-12 ig-container">
            <div className="col-md-12 flexy">
              <div className="col-md-2">&nbsp;</div>
              <div className="col-md-5">
                <div className="flexy">
                  <div className="col-md-6 flexy">
                    {" "}
                    <img className="col-md-11" src={Img1} alt="Scholar" />
                  </div>
                  <div className="col-md-6">
                    {" "}
                    <img className="col-md-11" src={Grad} alt="Scholar" />
                  </div>
                </div>
                <Link to={"#"}>
                  <button className="twitter-btn">
                    FOLLOW US ON INSTAGRAM
                  </button>
                </Link>
              </div>
            </div>
            <div className="after-bg"></div>
          </div>
          <div className="col-md-12 flexy ">
            <div className="col-md-4 facebook-container">
              <p>Connect on </p>
              <h1>Facebook</h1>
            </div>
            <div className="col-md-8 youtube-container">
              <p>Follow Us on </p>
              <h1>Youtube</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 flexy">
        <div className="col-md-1">&nbsp;</div>

        <div className="col-md-10 giving-container flexy">
          <div className="col-md-6">&nbsp;</div>
          <div className="col-md-3">
            <h1>
              Giving <br /> Opportunities
            </h1>
            <p>
              In August of 1987, The First Academy committed to “preparing
              children for life as Christian leaders.” Through the faithfulness
              of God and the generosity of his people, The First Academy began
              impacting thousands of students’ lives. Since then, countless
              parents, grandparents and alumni have given generously, and today
              we ask that you, too, help make this possible.
            </p>
            <YellowAppButton text="GIVE NOW" />
          </div>
        </div>
      </div>
      <div className="col-md-12 pre-footer">
        <p>
          <strong>Notice of Nondiscriminatory Policy as to Students:</strong>{" "}
          Wellspring College admits students of any race, color, national and
          ethnic origin to all the rights, privileges, programs, and activities
          generally accorded or made available to students at the school. It
          does not discriminate on the basis of race, color, national and ethnic
          origin in administration of its educational policies, admissions
          policies, scholarship and loan programs, and athletic and other
          school-administered programs.
        </p>
      </div>
    </>
  );
};
