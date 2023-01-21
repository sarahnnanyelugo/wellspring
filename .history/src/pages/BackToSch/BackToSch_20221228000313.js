import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Banner from "../../assets/back-to-sch.png";
import Theme from "../../assets/theme.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dot from "../../assets/blue.png";
import { AppTab } from "../../components/AppTab/AppTab";
import "./_back-to-sch.scss";
import { Prefoooter } from "../../components/Prefooter/Prefooter";
import { BTCTab } from "./BTCTab/BTCTab";
import { BTCEventsTab } from "./BTCEventsTab/BTCEventsTab";
// import resumeData from "./resumeData.js";

// import VerticalTab from "./VerticalTab";

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
              <Link to={"#"}>
                <li className="list-inline-item"> Summer Communication</li>|
              </Link>
              <Link to={"#"}>
                <li className="list-inline-item">Events</li>|
              </Link>
              <Link to={"#"}>
                <li className="list-inline-item">Annual Calendar </li>|
              </Link>
              <Link to={"#"}>
                <li className="list-inline-item">Back to School Info</li>
              </Link>
            </ul>
          </div>
          <div className="col-md-12 flexy" style={{ height: "fit-content" }}>
            <div className="col-md-9 page-content">
              <div className="col-md-11">
                <p>
                  Welcome to the Back to School Webpage! Everything parents and
                  students need to know for the upcoming 2022-2023 school year
                  can be found here. As the summer progresses, more Back to
                  School updates for the 2022-2023 school year will be shared
                  with families through our Summer Weekly Update emails. Check
                  our Back to School Webpage frequently for these updates and
                  more.
                </p>
                <div className="col-md-12 updates">
                  <h5>Summer Communication</h5>
                  <BTCTab />
                </div>{" "}
                <div className="col-md-12 btc-events updates">
                  <h5>Back to School Events</h5>
                  <BTCEventsTab />
                </div>
                <div className="col-md-12 updates btc-infos">
                  <h5>Back to School Information</h5>
                  <p>
                    In the sections below, you will find the most important
                    information regarding Back to School. As more information
                    becomes available, new information will be added below.
                  </p>
                  <div className="col-md-12 flexy">
                    <div className="col-md-4">&nbsp;</div>
                    <div className="col-md-4">
                      <h5>2022-2023 School Theme</h5>
                      <img className="col-md-12" src={Theme} alt="Scholar" />
                    </div>
                  </div>
                  <h5>Introducing our 2022-2023 School Year Theme!</h5>

                  <p>
                    We have one of the greatest ministry opportunities in all
                    the world at The First Academy. Not only is our calling
                    rooted in glorifying God, we are also continuing the legacy
                    of our founders to integrate spiritual formation and
                    scholastic excellence within the student experience. Our
                    mission is to do both at the highest level for His glory!
                    <br />
                    We look forward to 2022-2023!
                  </p>
                </div>
                <div className="vertical-tab-container">
                  <VerticalT />
                </div>
              </div>
            </div>

            <div className="side-nav2 col-md-3">
              <div>
                <div className="value-header col-md-12">
                  <h4>Important Info</h4>
                </div>
                <div className="values col-md-12">
                  <p>
                    <strong>Summer Office Hours:</strong> 9:00am – 4:00pm Monday
                    – Thursdays (Closed Fridays)
                  </p>
                  <p style={{ borderTop: "solid 1px grey" }}>
                    <strong> Royal Store Summer Hours:</strong> Wednesday 8:30
                    AM – 2:30 PM, starting June 1st or order{" "}
                    <Link to={"#"} style={{ fontSize: "12px" }}>
                      online here
                    </Link>
                  </p>
                </div>
              </div>
              <br />
              <div>
                <div className="value-header col-md-12">
                  <h4>Summer Assignments</h4>
                </div>
                <div className="values col-md-12">
                  <p>
                    For information on everything from optional summer reading
                    to required assignments, visit your division’s academic
                    pages below:
                  </p>

                  <ul className="list-unstyled">
                    <Link to={"#"} className="assignment">
                      <li>Lower School</li>
                    </Link>
                    <Link to={"#"} className="assignment">
                      <li>Middle School</li>
                    </Link>
                    <Link to={"#"} className="assignment">
                      <li>Upper School</li>
                    </Link>
                    <Link to={"#"} className="assignment">
                      <li>The Classical School</li>
                    </Link>
                  </ul>
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
