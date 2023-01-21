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
              <p>
                Welcome to the Back to School Webpage! Everything parents and
                students need to know for the upcoming 2022-2023 school year can
                be found here. As the summer progresses, more Back to School
                updates for the 2022-2023 school year will be shared with
                families through our Summer Weekly Update emails. Check our Back
                to School Webpage frequently for these updates and more.
              </p>
            </div>

            <div className="side-nav2 col-md-3">
              <div>
                <div className="value-header col-md-12">
                  <h4>Important Info</h4>
                </div>
                <p className="values col-md-12">
                  <strong>Summer Office Hours:</strong> 9:00am – 4:00pm Monday –
                  Thursdays (Closed Fridays)
                </p>
              </div>
              <div>
                <div className="value-header col-md-12">
                  <h4>Summer Assignments</h4>
                </div>
                <p className="values col-md-12">
                  To provide functional education based on sound morals
                  <p>
                   <strong Wednesday 8:30 AM – 2:30 PM,
                    starting June 1st or order online here
                  </p>
                </p>
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
