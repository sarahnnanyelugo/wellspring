import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/about-us.png";
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
         
          <div className="col-md-6">
            
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
                <div className="flexy flexyM">
                  <div className="col-md-6 col-6">
                    {" "}
                    <img
                      className="col-md-11 col-11"
                      src={Img1}
                      alt="Scholar"
                    />
                  </div>
                  <div className="col-md-6 col-6">
                    {" "}
                    <img
                      className="col-md-11 col-10"
                      src={Grad}
                      alt="Scholar"
                    />
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
