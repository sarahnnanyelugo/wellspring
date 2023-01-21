import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Banner from "../../assets/back-to-sch.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dot from "../../assets/blue.png";
import { AppTab } from "../../components/AppTab/AppTab";
import "./_back-to-sch.scss";
import { Prefoooter } from "../../components/Prefooter/Prefooter";


export const BackToSch = () => {
  return (
    <>
      <div className="col-md-12 page-container flexy">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-8 ">
          <div className="col-md-12 page-top flexy">
            <div className="col-md-5">
              <div className="breadcrum" style={{ marginTop: "-30px" }}>
                {" "}
                <Breadcrum page1="About" currentPage="Welcome" />
              </div>
            </div>
            <div className="col-md-5">&nbsp;</div>
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
          <div className="col-md-12 back-sch-heading">
            {" "}
            <h3 className="page-header">Back To School</h3>
            <ul className="list-inline list-unstyled">
              <Link
            </ul>
          </div>
          <div className="col-md-12 flexy" style={{ height: "fit-content" }}>
            <div className="col-md-9 page-content">
              <p>
                All parents want their child to attend a great school – not just
                a good school. When my wife and I moved our family to Orlando
                several years ago, we found a great school in The First Academy.
                On the first day of the new school year, I watched with
                apprehension from a second story window as my middle child
                walked onto a playground crowded with unfamiliar faces. With a
                lump in my throat, I watched as he stood alone with his hands in
                his pockets, obviously filled with uncertainty and nearly
                paralyzed by fear. What happened next told me much about what
                makes The First Academy a great school. It turns out that I
                wasn’t the only one observing. His teacher saw the worry on his
                small, furrowed brow, too. She approached my son, took him by
                the hand, and walked him toward the monkey bars. I could see her
                bend down and introduce him to several boys who were playing
                together. Within moments, those boys were welcoming my son into
                their fold, and they have since become treasured friends. That
                moment was powerful for me as I observed a great teacher in
                action. Great teachers understand that true education involves
                more than just teaching the mind – it begins with reaching the
                heart. Great teachers understand that students aren’t interested
                in finding out how much a teacher knows until they find out how
                much a teacher cares.
              </p>
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
                <div className="values col-md-12">
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
