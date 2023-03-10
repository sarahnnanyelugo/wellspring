import Square from "../../assets/medal2.png";
import Read from "../../assets/read2.png";
import Jersy from "../../assets/mask1.png";
import Gift from "../../assets/college.png";
import Video from "../../assets/web-video.mp4";
import Logo from "../../assets/yellow-logo.svg";
// import Logo from "../../assets/logo2.png";
import Banner from "../../assets/building-banner.png";

import ReactDOM from "react-dom";

import Logo2 from "../../assets/Logo.svg";
// import Logo2 from "../../assets/logo.png";
import Discover from "../../assets/discorver.png";
import Lab from "../../assets/lab3.png";
import "./_home.scss";
import { Link, NavLink } from "react-router-dom";

import { Testimonials } from "../../components/Testimonials/Testimonials";
import Principal from "../../assets/principal2.png";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Prefoooter } from "../../components/Prefooter/Prefooter";
import { HomeNav } from "./HomeNav/HomeNav";
import { AppModal } from "../../components/AppModal/AppModal";
import TestPage from "../../components/TestPages/TestPage";
import { TestimonialTab } from "./TestimonialTab/TestimonialTab";
// import { Carousel } from "react-scroll-slider";

export const Home = () => {
  // useEffect(() => {
  AOS.init();
  // }, []);
  return (
    <>
      <div id="outer" className="col-md-12">
        <div id="home-top-video">
          <video
            className="viddeo "
            width="100%"
            autoplay="true"
            loop="true"
            muted="true"
            playsinline=""
            src={Video}
          ></video>
          <div className=" col-md-12 flexy" id="home-text">
            <div className="col-md-2">&nbsp;</div>
            <div className="col-md-4 logo-div">
              <div className="col-md-12 mt4">
                {" "}
                <center>
                  {" "}
                  <img className="col-md-12 col-12" src={Logo2} alt="Scholar" />
                </center>
              </div>
              <div className="col-md-12  first-heading mt2">
                {" "}
                <center>
                  <h1>
                    Being Named Central Florida???s Best Private Christian School
                    Reflects Our Commitment to Excellence
                  </h1>
                  <button>LEARN MORE</button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 flexy prospectus-container1">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-4">
          <h2>WELCOME TO WELLSPRING COLLEGE</h2>
        </div>
        <div className="col-md-3 ">
          {" "}
          <center>
            {" "}
            <img className="col-md-9 " src={Discover} alt="Scholar" />
          </center>
        </div>

        <div className="col-md-3 mt3">
          <center>
            <h4>Take a closer look???</h4>
            <p>GET OUR PARENT INFORMATION PACKET!</p>
            <button>Download Now</button>
          </center>
        </div>
        {/* <div className="col-md-1">&nbsp;</div> */}
      </div>
      <div className="sections-container flex-container">
        <div className="overlay-container" style={{ flexGrow: "1" }}>
          <img className=" " src={Gift} alt="Scholar" />
          <div className="overlay">
            <div className="text">
              <h3>Preschool</h3>
              <img className=" " src={Logo} alt="Scholar" />
            </div>
          </div>
        </div>
        <div className=" overlay-container">
          <img className=" " src={Jersy} alt="Scholar" />
          <div className="overlay">
            <div className="text">
              <h3>Kindergarten</h3>
              <img className=" " src={Logo} alt="Scholar" />
            </div>
          </div>
        </div>
        <div className=" overlay-container">
          <img className=" " src={Square} alt="Scholar" />
          <div className="overlay">
            <div className="text">
              <h3>Lower School</h3>
              <img className=" " src={Logo} alt="Scholar" />
            </div>
          </div>
        </div>
        <div className="overlay-container">
          <img className=" " src={Read} alt="Scholar" />
          <div className="overlay">
            <div className="text">
              <h3>Middle School</h3>
              <img className="" src={Logo} alt="Scholar" />
            </div>
          </div>
        </div>{" "}
        <div className="overlay-container">
          <img className=" " src={Lab} alt="Scholar" />
          <div className="overlay">
            <div className="text">
              <h3>Upper School</h3>
              <img className=" " src={Logo} alt="Scholar" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 flexy about-us-container">
        {/* <div className="col-md-2">&nbsp;</div> */}
        <center>
          <div className="col-md-8">
            <h1>Academics to excel. Faith to inspire.</h1>
            <p>
              Wellspring College is a private Christian school in Lagos,
              Nigeria, that prepares students to stand out from their peers and
              become leaders who influence the world through Christ-like
              leadership ??? choosing character before career, wisdom beyond
              scholarship, service before self, and participation as a way of
              life.
            </p>
            <div className="button-container">
              <button className="">LEARN MORE ABOUT WS</button>
              <button>SCHEDULE A TOUR</button>
            </div>
          </div>
        </center>
      </div>
      <div className="col-md-12 flexy ethos-container">
        <div className="col-md-6">
          <div className="ethos-overlay-container">
            <center>
              {" "}
              <button>
                CO<span>NFIDEN</span>CE
              </button>
            </center>
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
            <center>
              {" "}
              <button>
                SU<span>CCE</span>SS
              </button>
            </center>
            <div className="ethos-overlay2">
              <div className="text">
                <h1>SUCCESS</h1>
                <p>
                  We strive for excellence ??? every teacher is committed to
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
            <center>
              {" "}
              <button>
                J<span>O</span>Y
              </button>
            </center>
            <div className="ethos-overlay3">
              <div className="text">
                <h1>JOY</h1>
                <p>
                  We strive for excellence ??? every teacher is committed to
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
            <center>
              {" "}
              <button>
                CO<span>MMUNI</span>TY
              </button>
            </center>
            <div className="ethos-overlay4">
              <div className="text">
                <h1>COMMUNITY</h1>
                <p>
                  We strive for excellence ??? every teacher is committed to
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
      <div className="stats-container flexdy col-md-12">
        {/* <div className="col-md-1">&nbsp;</div> */}
        <center>
          <div className="col-md-10 flexy">
            <div className="col-md-3 stats stats-border">
              <center>
                {" "}
                <h1>100%</h1>
                <h6>
                  COLLEGE <br />
                  ACCEPTANCE
                </h6>
              </center>
            </div>{" "}
            <div className="col-md-3 stats stats-border">
              <center>
                <h1>$104M</h1>
                <h6>COLLEGE SCHOLARSHIPS</h6>
              </center>
            </div>{" "}
            <div className="col-md-3 stats stats-border">
              <center>
                <h1>100%</h1>
                <h6>OF OUR TEACHERS ARE DEGREED AND CHRIST-FOLLOWERS</h6>
              </center>
            </div>{" "}
            <div className="col-md-3 stats">
              <center>
                {" "}
                <h1>15-1</h1>
                <h6>STUDENT-TEACHER RATIO</h6>
              </center>
            </div>
          </div>
        </center>
      </div>
      <div className="actions col-md-12 flexy">
        <div className="col-md-1">&nbsp;</div>

        <div className="col-md-10 flexy">
          <div
            className="col-md-4 "
            // data-aos="slide-right"
            // data-aos-duration="600"
          >
            <div className="col-md-11 action-box flexy flexyM">
              <span>
                <i class="icofont-ui-chat"></i>
              </span>
              <h5>
                REQUEST <br />
                INFORMATION
              </h5>
            </div>
          </div>
          <div
            className="col-md-4  "
            // data-aos="slide-up"
            // data-aos-duration="600"
          >
            <div className="col-md-11 action-box flexy flexyM">
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
            <div className="col-md-11  action-box flexy flexyM">
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
      <TestimonialTab />
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
                January marks a day of great celebration in America. Martin???
              </p>
            </div>
          </div>
          <div className="col-md-3 recent-news">
            <h5>RECENT ARTICLES</h5>

            <ul className="list-unstyled">
              <li>
                <Link to="#" className="link-alteration">
                  {" "}
                  Voted Best Christian School for 2023
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#" className="link-alteration">
                  The Snowball Express 2022
                </Link>
              </li>
              <li>
                <Link to="#" className="link-alteration">
                  Spring Sports 2023 Tryout Information and Details
                </Link>
              </li>
            </ul>

            <Link to="#" className="link-alteration2">
              VIEW ALL
            </Link>
          </div>
          <div className="col-md-1">&nbsp;</div>
        </div>

        <section className="module1 contentt col-md-12 wellspring-happenings">
          <h1>WELLSPRING HAPPENINGS</h1>

          <div className="col-md-12 flexy" style={{ padding: "10px" }}>
            <div className="col-md-4 news-btn ">
              <div className="col-mmd-11">
                {" "}
                <button>1.12.23</button>
                <div className="col-md-12 news-details ">
                  <h6>
                    <Link to="#" className="link-alteration">
                      Wellspring Parents Association Meeting
                    </Link>
                  </h6>
                  <small>TBD</small>
                </div>
              </div>
            </div>
            <div className="col-md-4 news-btn">
              <div className="col-md-11">
                {" "}
                <button>1.12.23</button>
                <div className="col-md-12 news-details">
                  <h6>
                    <Link to="#" className="link-alteration">
                      Wellspring Parents Association Meeting
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 news-btn">
              <div className="col-md-11">
                <button>1.12.23</button>
                <div className="col-md-12 news-details">
                  <h6>
                    <Link to="#" className="link-alteration">
                      Wellspring Parents Association Meeting
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 flexy">
            <div className="col-md-5">&nbsp;</div>
            <div className="view-moore-btn col-md-2">
              {" "}
              <button>VIEW ALL EVENTS</button>
            </div>
          </div>
        </section>
      </div>
      <section className="module1 parallax parallax-3">
        <div className="containa col-md-12 shaded"></div>
      </section>
      <section className="module1 contentt contact-form prefooter-container">
        <Prefoooter />
        <br />
      </section>
      <AppModal />
    </>
  );
};
