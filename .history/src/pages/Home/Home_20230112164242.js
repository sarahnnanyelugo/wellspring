import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/slider33.png";
import Slide2 from "../../assets/building2.png";
import Square from "../../assets/medal2.png";
import Slide4 from "../../assets/news-banner2.png";
import Read from "../../assets/read2.png";
import Jersy from "../../assets/mask1.png";
import Gift from "../../assets/college.png";
import Video from "../../assets/web-video.mp4";
import Logo from "../../assets/TFA-Logo.svg";
import Discover from "../../assets/discorver.png";
import Lib from "../../assets/read1.png";
import "./_home.scss";

import { Link, NavLink } from "react-router-dom";

import { Testimonials } from "../../components/Testimonials/Testimonials";
import Principal from "../../assets/principal2.png";

export const Home = () => {
  return (
    <>
      <div className="col-md-12 image-container">
        {/* <img className="col-md-12 home-banners" src={Slide4} alt="Scholar" /> */}
        <video
          width="100%"
          autoplay="true"
          loop="true"
          muted="true"
          playsinline=""
          src={Video}
        ></video>{" "}
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
      <div className="col-md-12 flexy ethos-container">
        <div className="col-md-6">
          <div className="ethos-overlay-container">
            <button>
              CO<span>NFIDEN</span>CE
            </button>
            <div className="ethos-overlay">
              <div className="text">
                <h1> CONFIDENCE</h1>
                <p>
                  At Wellspring College, your child will be known, loved, and
                  valued.
                </p>
                <Link to={"#"} className="link-alteration">
                  learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="ethos-overlay-container2">
            <button>
              SU<span>CCE</span>SS
            </button>
            <div className="ethos-overlay2">
              <div className="text">
                <h1>SUCCESS</h1>
                <p>
                  We strive for excellence — every teacher is committed to
                  developing the talents and deepening the faith of every
                  student.
                </p>
                <Link to={"#"} className="link-alteration">
                  learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="ethos-overlay-container3">
            <button>
              J<span>O</span>Y
            </button>
            <div className="ethos-overlay3">
              <div className="text">
                <h1>JOY</h1>
                <p>
                  We strive for excellence — every teacher is committed to
                  developing the talents and deepening the faith of every
                  student.
                </p>
                <Link to={"#"} className="link-alteration">
                  learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="ethos-overlay-container4">
            <button>
              CO<span>MMUNI</span>TY
            </button>
            <div className="ethos-overlay4">
              <div className="text">
                <h1>COMMUNITY</h1>
                <p>
                  We strive for excellence — every teacher is committed to
                  developing the talents and deepening the faith of every
                  student.
                </p>
                <Link to={"#"} className="link-alteration">
                  learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-container flexy">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10 flexy">
          <div className="col-md-3 stats stats-border">
            <h1>100%</h1>
            <h6>
              COLLEGE <br />
              ACCEPTANCE
            </h6>
          </div>{" "}
          <div className="col-md-3 stats stats-border">
            <h1>$104M</h1>
            <h6>COLLEGE SCHOLARSHIPS</h6>
          </div>{" "}
          <div className="col-md-3 stats stats-border">
            <h1>100%</h1>
            <h6>OF OUR TEACHERS ARE DEGREED AND CHRIST-FOLLOWERS</h6>
          </div>{" "}
          <div className="col-md-3 stats">
            <h1>15-1</h1>
            <h6>STUDENT-TEACHER RATIO</h6>
          </div>
        </div>
      </div>
      <div className="actions col-md-12 flexy">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10 flexy">
          <div className="col-md-4 ">
            <div className="col-md-11 action-box flexy">
              <span>
                <i class="icofont-ui-chat"></i>
              </span>
              <h5>
                REQUEST <br />
                INFORMATION
              </h5>
            </div>
          </div>
          <div className="col-md-4  ">
            <div className="col-md-11 action-box flexy">
              <span>
                <i class="icofont-ui-calendar"></i>
              </span>
              <h5>
                SCHEDULE A <br />
                TOUR
              </h5>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="col-md-11  action-box flexy">
              <span>
                <i class="icofont-pencil-alt-5"></i>
              </span>
              <h5>
                APPLY <br />
                NOW
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 testimonials-container flexy">
        <div className="col-md-12 testimonials-header">
          <h1>ROYALS UPCLOSE</h1>
          <p>Read stories from our Welspring family</p>
        </div>
      </div>
      <div className="col-md-12 flexy testimonials">
        <div className="col-md-4">
          <div className="col-md-11">
            <Testimonials
              testifierImg={Principal}
              testifier="name of testifier"
              content="The First Academy is a res students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life.The First Academy is a private Christian school in Orlando, Florida, that prepares students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life."
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-11">
            <Testimonials
              testifierImg={Principal}
              testifier="name of testifier"
              content="The s students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life.The First Academy is a private Christian school in Orlando, Florida, that prepares students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life."
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-11">
            <Testimonials
              testifierImg={Principal}
              testifier="name of testifier"
              content="The First Academy is a private Christia to influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life.The First Academy is a private Christian school in Orlando, Florida, that prepares students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life."
            />
          </div>
        </div>
      </div>

      <div className="col-md-12 news-container">
        <h1>ROYAL NEWS</h1>
        <div className="col-md-12 flexy news-inner">
          <div className="col-md-8 flexy">
            <div className="col-md-4">&nbsp;</div>
            <div className="col-md-5">
              <Link to="#" className="link-alteration">
                {" "}
                <h4>
                  Celebrating the Life and Legacy of Martin Luther King, Jr.
                </h4>
              </Link>
              <small>JANUARY 12, 2023</small>
              <p>
                Steve D. Whitaker, Ph.D.Head of School The third Monday in
                January marks a day of great celebration in America. Martin…
              </p>
            </div>
          </div>
          <div className="col-md-3 recent-news">
            <h5>RECENT ARTICLES</h5>
            <Link to="#" className="link-alteration">
              <p>
                Voted Best Christian School for 2023 The Snowball Express 2022
                Spring Sports 2023 Tryout Information and Details
              </p>
            </Link>

            <Link to="#" className="link-alteration2">
              VIEW ALL
            </Link>
          </div>
          <div className="col-md-1">&nbsp;</div>
        </div>
        
      </div>
     
    </>
  );
};
