import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Banner from "../../assets/building-banner.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dot from "../../assets/blue.png";
import { AppTab } from "../../components/AppTab/AppTab";
import { BlogTab } from "./BlogTab/BlogTab";
import "./_welcome.scss";
import { Prefoooter } from "../../components/Prefooter/Prefooter";


export const Welcome = () => {
  return (
    <>
      <div className="col-md-12 page-container flexy">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-8 ">
          <div className="col-md-12 page-top flexy">
            <div>
              <h1 className="page-header">Welcome</h1>

              <div className="breadcrum" style={{ marginTop: "-30px" }}>
                {" "}
                <Breadcrum page1="About" currentPage="Welcome" />
              </div>
            </div>
            <div className="col-md-8">&nbsp;</div>
            <div className="flexy navigations">
              <Link to={"/contact"}>
                {" "}
                <button>Previous</button>
              </Link>
              <Link to={"/back-to-school"}>
                {" "}
                <button>Next</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 flexy page-background">
        <div className="col-md-2">&nbsp;</div>
        <div className=" col-md-8">
          <img className="col-md-12 banner" src={Banner} alt="Scholar" />

          <div className="col-md-12 flexy" style={{ height: "fit-content" }}>
            <div className="col-md-9 page-content">
             <div></div>
            </div>

            <div className="side-nav2 col-md-3">
              <div id="demo">
                <div class="wrapper">
                  <div class="content">
                    <ul>
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>{" "}
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>{" "}
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>{" "}
                      <Link to={"#"}>
                        <li>All school</li>
                      </Link>
                      <div class="accordion">
                        <section class="accordion-item">
                          <p>Section 4</p>
                          <div class="accordion-item-content">
                            <p>Content</p>
                            <p>Content </p>
                            <p>Content </p>
                            <p>Content </p>
                          </div>
                        </section>
                      </div>
                      <Link to={"#"}>
                        <li>All school</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school</li>
                      </Link>
                    </ul>
                  </div>
                  <div class="parent">
                    <h5>
                      <span>
                        {" "}
                        <i class="icofont-globe"></i>
                      </span>
                      Explore This Section
                    </h5>
                  </div>
                </div>
              </div>

              <div>
                <div className="value-header col-md-12">
                  <h4>Our Mission</h4>
                </div>
                <p className="values col-md-12">
                  To produce a total child by laying a solid foundation for
                  righteousness, integrity and high academic standard.
                </p>
              </div>
              <div>
                <div className="value-header col-md-12">
                  <h4>Our Vision</h4>
                </div>
                <p className="values col-md-12">
                  To provide functional education based on sound morals
                </p>
              </div>
              <div>
                <div className="value-header col-md-12">
                  <h4>Core Values</h4>
                </div>
                <div className="values col-md-12 ">
                  <p> Our Core values are;</p>
                  <div className="col-md-12 flexy flexyM">
                    <ul className="list-unstyled">
                      <li className="flexy flexyM">
                        <img className="col-md-12" src={Dot} alt="Scholar" />
                        Integrity
                      </li>
                      <li className="flexy flexyM">
                        <img className="col-md-12" src={Dot} alt="Scholar" />
                        Excellence
                      </li>
                      <li className="flexy flexyM">
                        <img className="col-md-12" src={Dot} alt="Scholar" />
                        Dignity
                      </li>
                    </ul>
                    <ul className="list-unstyled">
                      <li className="flexy flexyM">
                        <img className="col-md-12" src={Dot} alt="Scholar" />
                        Diligence
                      </li>
                      <li className="flexy flexyM">
                        <img className="col-md-12" src={Dot} alt="Scholar" />
                        Fear of God
                      </li>
                      <li className="flexy flexyM">
                        <img className="col-md-12" src={Dot} alt="Scholar" />
                        Discipline
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-12 blog-tab">
                <BlogTab />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prefooter-container">
        <Prefoooter />
      </div>
    </>
  );
};
